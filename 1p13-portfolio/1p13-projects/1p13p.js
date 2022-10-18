var modal = docment.getElementByID('openpdf');
var button = document.getElementByID("openpdfbutton");
var closemodal = document.getElementsByClassName('close')[0];

button.onclick = function() {
    modal.style.display = 'flex';
}

closemodal.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}