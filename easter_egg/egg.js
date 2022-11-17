const myScript = document.getElementById('egg');
const PATH = myScript.getAttribute('src').slice(0, -6);

createModal();
const code = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a", "Enter"];
let input = [];
let press = Date.now();
let Konami = false;
const epicModal = document.getElementById("epic-modal");
const audio = new Audio(PATH + 'egg.mp3');

document.onkeydown = (event) => {
    if ((press + 1500) < Date.now()) {
        input = [];
    }
    input.push(event.key);
    press = Date.now();
    if (JSON.stringify(input) == JSON.stringify(code)) {
        Konami = true;
        if (Konami) {
            $(epicModal).modal('show');
            audio.load();
            audio.play();
        } 
        else {
        }
    }
}

$(epicModal).on('hide.bs.modal', function (e) {
    audio.pause();
  })

function createModal() {
    const div = document.createElement('div');
    div.innerHTML = `<!--Epic modal starts here--->
	<div id="epic-modal" ref="epic" class="modal modal-warning fade in" data-backdrop="static">
		<div class="modal-dialog modal-dialog-centered modal-lg" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title"></h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">×</span></button>
				</div>
				<div class="modal-body text-center">
					<img src="${PATH + 'egg.gif'}" alt="rick roll">
				</div>
			</div>
		</div>
	</div>
	<!--Epic modal ends here--->`;
    document.body.appendChild(div);
}