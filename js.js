let button_close = document.querySelector(".modal-close");
let modal_open = document.querySelector(".search");
let modal_container = document.querySelector(".modal-container");
let checkbokses = document.querySelectorAll('input[type="checkbox"]');

//modal_open.onclick = function() {
	//modal_container.classList.remove("modal-container-close");
//}

//button_close.onclick = function() {
	//modal_container.classList.add("modal-container-close");
//}

for (let i = 0; i <= checkbokses.length; i++) {
	let checkboks = checkbokses[i];
	checkboks.onclick = function() {
			checkboks.classList.toggle('ch');
		}
	}

