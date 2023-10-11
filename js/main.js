// JS scripts placed here
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function mySecondFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "monday-soap") {
        x.className += " responsive";
    } else {
        x.className = "monday-soap";
    }
}