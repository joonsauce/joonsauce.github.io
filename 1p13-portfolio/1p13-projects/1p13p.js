var modal = document.getElementById("openpdf");
var btn1 = document.getElementById("openpdfbutton1");
var btn2 = document.getElementById("openpdfbutton2");
var btn3a = document.getElementById("openpdfbutton3a");
var btn3b = document.getElementById("openpdfbutton3b");
var btn4 = document.getElementById("openpdfbutton4");
var btn5 = document.getElementById("openpdfbutton5");
var span = document.getElementsByClassName("p-proj-modal-close")[0];

// this code right now is all just hardwired, fix should be implemented so it works with any project.
// ideas: check content of text (ie. look for a number inside the text) & match with pdf; match each folder with what is in website title.


// When the user clicks on the button, open the modal
btn1.onclick = function() {
    modal.style.display = "flex";
    pdf = document.getElementById("pdfviewer");
    pdf.data = "/1p13-portfolio/1p13-media/p1/milestone1.pdf";
}

btn2.onclick = function() {
    modal.style.display = "flex";
    pdf = document.getElementById("pdfviewer");
    pdf.data = "/1p13-portfolio/1p13-media/p1/milestone2.pdf";
}

btn3a.onclick = function() {
    modal.style.display = "flex";
    pdf = document.getElementById("pdfviewer");
    pdf.data = "/1p13-portfolio/1p13-media/p1/milestone3a.pdf";
}

btn3b.onclick = function() {
    modal.style.display = "flex";
    pdf = document.getElementById("pdfviewer");
    pdf.data = "/1p13-portfolio/1p13-media/p1/milestone3b.pdf";
}

btn4.onclick = function() {
    modal.style.display = "flex";
    pdf = document.getElementById("pdfviewer");
    pdf.data = "/1p13-portfolio/1p13-media/p1/milestone4.pdf";
}

btn5.onclick = function() {
    modal.style.display = "flex";
    pdf = document.getElementById("pdfviewer");
    pdf.data = "/1p13-portfolio/1p13-media/p1/final_report.pdf";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}