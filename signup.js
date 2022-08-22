// function return_page() {
//     if (confirm("Are you sure you want not register ?") == 1) {
//         var btn = document.getElementById('home');
//         btn.href = "home_page.html";
//     }
//     else {
//         alert("False");


//     }
//     btn.style.borderImage = url("ll.jpg");
// }
// lavisharora133@gmail.com
function submit_check(inputtxt) {
    var c = document.getElementById('password').innerHTML.value;
    var passw = /^[A-Za-z]\w{7,14}$/;
    if (!inputtxt.value.match(passw)) {
        window.alert("Password must be atleast 8 characters long and must one contain one uppercase and one lowercase letter,one number and one special character");

    }
}
