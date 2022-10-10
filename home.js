// To change light and dark mode
function toggle_swipe() {
    // if it is night then change to day
    if (document.getElementById('sun').style.display === "none") {
        document.body.style.color = "black";
        document.getElementById('theme-toggler').style.backgroundColor = "#FDDA0D";
        document.getElementById('i').style.color = "black";
        document.body.style.backgroundColor = "white";
        document.getElementById('i').style.backgroundColor = "white";
        document.getElementById('moon').style.display = "none";
        document.getElementById('sun').style.display = "block";
        document.getElementById('toggle-switch').style.left = "55%";
        document.getElementById('hh').style.color = "white";
        document.getElementById('i').style.transitionDuration = "0.5s";
    }// else change to night mode 
    else {
        document.getElementById('theme-toggler').style.backgroundColor = "#03004b";
        document.getElementById('moon').style.display = "block";
        document.getElementById('sun').style.display = "none";
        document.body.style.color = "white";
        document.getElementById('i').style.backgroundColor = "#343a40";
        document.getElementById('i').style.color = "white";
        document.getElementById('i').style.transitionDuration = "0.5s";

        document.body.style.transform = "2s";
        document.body.style.color = "black";
        document.getElementById('toggle-switch').style.left = "9%";
        document.getElementById('moon').style.display = "block";
        document.getElementById("hh").style.color = "black";
    }

}

function Mobiles() {
    document.location.href("categories.html#smartphones");
}
$(document).ready(function(){
    $(window).on('scroll', function () {
        if ($(this).scrollTop() < 15) {
            $('.hidden').fadeIn(2000).removeClass('hidden');
            $('.hidden1').fadeIn(1800).removeClass('hidden1');
        }


    });
});

//Map api
// Initialize and add the map
function initMap() {
    // The location of Uluru
    //30.520084610672846, 76.65925395214865
    const uluru = { lat: 30.520084610672846, lng: 76.65925395214865 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  
  window.initMap = initMap;