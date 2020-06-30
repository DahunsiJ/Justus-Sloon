
function myFunction() {
    var jus = document.getElementById("nav");
    if (jus.className === "navigation") {
      jus.className += " response";
    } else {
      jus.className = "navigation";
    }
  }