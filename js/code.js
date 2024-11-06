
document.querySelectorAll('img').forEach(img =>{
    console.log("runs")
    img.onerror = function() {
        this.onerror = null;
        this.src = '../js/placeholder-image.jpg';
        this.alt = ""
    }
})


// Go to top button
let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


