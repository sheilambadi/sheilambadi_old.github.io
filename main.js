/*toggle between adding and removing the 'responsive' class to topnav when the user clicks on the icon*/
function myFunction() {
    var x = document.getElementById("myTopNav");
    if (x.className === "topnav") {
    	//space befor responsive
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}