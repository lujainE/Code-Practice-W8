
const close = document.getElementById('closebtn');
var content2 = document.getElementById("content2");


function content2Display(){
    content2.classList.add("display-none");
}
close.addEventListener('click',content2Display)

var alerticon = document.querySelector("#alertImg");
        console.log(alerticon);

        function pickalert1(element){
            document.getElementById("alert").style.color="#6c757d";
            document.getElementById("alert").style.backgroundColor="#D9DBDD";
            document.getElementById("spantext").textContent="Muted";
            alerticon.src = "./img/check-circle.svg";
            alerticon.color="#6c757d";
        }

        function pickalert2(element){
            document.getElementById("alert").style.color="#007bff";
            document.getElementById("alert").style.backgroundColor="#BDDDFF";
            document.getElementById("spantext").textContent="Important";
            alerticon.src = "./img/exclamation-circle.svg";
            alerticon.style.Color="#007bff";
        }

        function pickalert3(element){
            document.getElementById("alert").style.color="#28a745";
            document.getElementById("alert").style.backgroundColor="#d1e7dd";
            document.getElementById("spantext").textContent="Success";
            alerticon.src = "./img/check-circle.svg";
        }

        function pickalert4(element){
            document.getElementById("alert").style.color="#17a2b8";
            document.getElementById("alert").style.backgroundColor="#B3E1E7";
            document.getElementById("spantext").textContent="Information";
            alerticon.src = "./img/check-circle.svg";
        }

        function pickalert5(element){
            document.getElementById("alert").style.color="#ffc107";
            document.getElementById("alert").style.backgroundColor="#fff2cd";
            document.getElementById("spantext").textContent="Warning";
            alerticon.src = "./img/exclamation-circle.svg";
        }

        function pickalert6(element){
            document.getElementById("alert").style.color="#dc3545";
            document.getElementById("alert").style.backgroundColor="#F1ACB3";
            document.getElementById("spantext").textContent="Danger";
            alerticon.src = "./img/exclamation-circle.svg";
        }

        function pickalert7(element){
            document.getElementById("alert").style.color="#6c757d";
            document.getElementById("alert").style.backgroundColor="#D9DBDD";
            document.getElementById("spantext").textContent="Secondary text";
            alerticon.src = "./img/check-circle.svg";
        }

        function pickalert8(element){
            document.getElementById("alert").style.color="#343a40";
            document.getElementById("alert").style.backgroundColor="#BDBEC1";
            document.getElementById("spantext").textContent="Dark grey";
            alerticon.src = "./img/check-circle.svg";
        }

        function pickalert9(element){
            document.getElementById("alert").style.color="#212529";
            document.getElementById("alert").style.backgroundColor="#8D9091";
            document.getElementById("spantext").textContent="Default body color";
            alerticon.src = "./img/exclamation-circle.svg";            
        }


var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    } else {
    mybutton.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}