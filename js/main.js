/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function mySecondFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "front-porch") {
        x.className += " responsive";
    } else {
        x.className = "front-porch";
    }
}