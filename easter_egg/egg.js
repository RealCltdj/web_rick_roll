let modalOpen = false;
const myScript = document.getElementById('egg');
const PATH = myScript.getAttribute('src').slice(0, -6);

const code = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a", "Enter"];
let input = [];
let press = Date.now();
let Konami = false;
const epicModal = document.getElementById("epic-modal");
const audio = new Audio(PATH + 'egg.mp3');

createStyles();

document.onkeydown = (event) => {
    if ((press + 1500) < Date.now()) {
        input = [];
    }
    input.push(event.key);
    press = Date.now();
    if (JSON.stringify(input) == JSON.stringify(code)) {
        openEggModal();
    }
}

function openEggModal() {
    if (modalOpen) {
        return;
    }
    const modal = document.createElement('div');
    modal.classList = "egg-modal-container";
    modal.innerHTML = `
    <div class="egg-modal">
        <div class="egg-modal-close">
            <button onclick="closeEggModal()">&#10006</button>
        </div>
        <div class="egg-modal-body">
            <img src="${PATH + "egg.gif"}" alt="rick roll">
        </div>
    </div>
    <div class="egg-modal-page"></div>`;
    document.body.style.overflow = "hidden";
    
    document.body.appendChild(modal);
    audio.load();
    audio.play();
    modalOpen = true;
}

function closeEggModal() {
    const modal = document.getElementsByClassName("egg-modal-container")[0];
    document.body.removeChild(modal);
    audio.pause();
    modalOpen = false;
    document.body.style.overflow = "unset";
}

function createStyles() {
    const style = document.createElement('style');
    style.innerHTML = `
    .egg-modal {
        margin-top: 10px;
        position: fixed;
        z-index: 1050;
        outline: 1;
        background-color: white;
        border-radius: 1%;
    }
    
    .egg-modal-body {
        position: relative;
        -ms-flex: 1 1 auto;
        flex: 1 1 auto;
        padding: 1rem;
    }
    
    .egg-modal-page {
        top: 0px;
        left: 0px;
        position: fixed;
        z-index: 1049;
        background-color: black;
        margin: 0px;
        width: 100%;
        height: 100%;
        opacity: 50%;
        padding: 0px;
    }
    
    .egg-modal-close {
        z-index: 1051;
        position: absolute;
        top: 0px;
        right: 0px;
    }

    .egg-modal-close button {
        padding: 0;
        margin: 0;
        width: 40px;
        height: 40px;
        font-size: 30px;
        border: 0px;
        background: none;
        cursor:pointer;
    }
    
    .egg-modal-container {
        top: 0px;
        left: 0px;
        position: fixed;
        z-index: 1000;
        margin: 0px;
        width: 100%;
        height: 100%;
        padding: 0px;
        display: flex;
        align-items: center;
        flex-direction: column;
    }`;
    document.body.appendChild(style);
}