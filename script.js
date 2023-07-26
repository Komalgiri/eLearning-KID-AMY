var toggle = document.querySelector(".toggle")
var sidebar = document.querySelector(".sidebar")

var scroll = new SmoothScroll('a[href*="#"]');

sidebar.style.right = "-250px"
toggle.onclick = function() {
    if (sidebar.style.right == "-250px") {
        sidebar.style.right = "0px"
    } else {
        sidebar.style.right = "-250px"
    }
}
function openlink(){
  window.open("https://www.edoxi.com/studyhub-detail/advantages-and-disadvantages-of-online-learning","_blank");
}
function showCourse(){
  window.open("https://mailchi.mp/06569b93f964/courses")
}

function showSuccessMessage(){
   window.open("https://wa.me/918528153658?text=Let%27s%20know%20more%20about%20us!!!%20")
}
function showMessage(){
  alert("Resigtration Successful!!!");
}

function freetrial(){
  var windowWidth = 500;
  var windowHeight = 400;
  var windowFeatures = "width=" + windowWidth + ",height=" + windowHeight + ",top=" + ((window.innerHeight - windowHeight) / 2) + ",left=" + ((window.innerWidth - windowWidth) / 2);
  window.open("https://komalgiri.aidaform.com/expert-template-course-registration-form", "_blank", windowFeatures);                        
}
function play1(){
   window.open("https://komalgiri.aidaform.com/free-template-vocabulary-test")
  }
 