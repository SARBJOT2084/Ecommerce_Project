function Mobiles() {
    document.location.href = "categories.html#smartphones" + "<br>";

}
function laptops() {
    document.location.href = "categories.html#laptops";
}
function TV() {
    document.location.href = "categories.html#tv";
}
function PC() {
    document.location.href = "categories.html#PC";
}

function Refrigerators() {
    document.location.href = "categories.html#refrigerator";
}
function speakers() {
    document.location.href = "categories.html#speakers";
}
function hairdryers() {
    document.location.href = "categories.html#hairdryer";
}
function accessories() {
    document.location.href = "categories.html#accessories";
}
function microwaves() {

    document.location.href = "categories.html#microwaves";
}
// light dark mode
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
// Jquery
$(document).ready(function () {
    $('.row').click(function()
    {   
        
        $(window).attr("href", newUrl);;
    });
    var a = document.getElementById('cont1');
    console.log($('.hidden').scrollTop());
    var h = document.getElementById('hh').getBoundingClientRect().y;

    $(window).on('scroll', function () {
        if ($(this).scrollTop() < 15) {
            $('.hidden').fadeIn(2000).removeClass('hidden');
            $('.hidden1').fadeIn(1800).removeClass('hidden');
        }


    });




    $('#display_product1').css('box-shadow', '0 0 5px 2px rgb(255, 217, 0)');
    $("#display_product1").hover(function () {
        $(this).css('transition', 'all 0.3s ease-in-out');
        a = document.getElementById('cont1');
        $(this).css('box-shadow', '0 0 5px 2px rgb(255, 217, 0)');
        $("#display_product2").css('box-shadow', '');
        $("#display_product3").css('box-shadow', '');
        $("#display_product4").css('box-shadow', '');
        $("#display_product5").css('box-shadow', '');


        if (a.src === "https://m.media-amazon.com/images/I/711wsjBtWeL._SL1500_.jpg") {
            $("#aaa").attr("src", "https://m.media-amazon.com/images/I/711wsjBtWeL._SL1500_.jpg");
        }
        else if (a.src === "https://m.media-amazon.com/images/I/71E5zB1qbIL._SL1500_.jpg") {
            $("#aaa").attr("src", "https://m.media-amazon.com/images/I/71E5zB1qbIL._SL1500_.jpg");
        }
        else if (a.src === "https://m.media-amazon.com/images/I/71fVoqRC0wL._SL1500_.jpg") {
            $("#aaa").attr("src", "https://m.media-amazon.com/images/I/71fVoqRC0wL._SL1500_.jpg");
        }
        else if (a.src === "https://m.media-amazon.com/images/I/71ZOtNdaZCL._SL1500_.jpg") {
            $("#aaa").attr("src", "https://m.media-amazon.com/images/I/71ZOtNdaZCL._SL1500_.jpg");
        }
        else if (a.src === "https://m.media-amazon.com/images/I/71cQWYVtcBL._SL1500_.jpg") {
            $("#aaa").attr("src", "https://m.media-amazon.com/images/I/71cQWYVtcBL._SL1500_.jpg");

        }
        else if (a.src === "https://m.media-amazon.com/images/I/71hIfcIPyxS._SL1500_.jpg") {
            $("#aaa").attr("src", "https://m.media-amazon.com/images/I/71hIfcIPyxS._SL1500_.jpg");
        }


    }),
        $("#display_product2").hover(function () {
            a = document.getElementById('cont2');
            $(this).css('transition', 'all 0.3s ease-in-out');
            $(this).css('box-shadow', '0 0 5px 2px rgb(255, 217, 0)');
            $("#display_product1").css('box-shadow', '');
            $("#display_product3").css('box-shadow', '');
            $("#display_product4").css('box-shadow', '');
            $("#display_product5").css('box-shadow', '');
            if (a.src === "https://m.media-amazon.com/images/I/81hAAaDTJ5L._SL1500_.jpg") {
                $("#aaa").attr("src", "https://m.media-amazon.com/images/I/81hAAaDTJ5L._SL1500_.jpg");

            }
            else if (a.src === "https://m.media-amazon.com/images/I/915NXQJEeFL._SL1500_.jpg") {
                $("#aaa").attr("src", "https://m.media-amazon.com/images/I/915NXQJEeFL._SL1500_.jpg");


            }
            else if (a.src === "https://m.media-amazon.com/images/I/81Vr1E73vLL._SL1500_.jpg") {
                $("#aaa").attr("src", "https://m.media-amazon.com/images/I/81Vr1E73vLL._SL1500_.jpg");


            }
            else if (a.src === "https://m.media-amazon.com/images/I/81hB-X3SMtL._SL1500_.jpg") {
                $("#aaa").attr("src", "https://m.media-amazon.com/images/I/81hB-X3SMtL._SL1500_.jpg");


            }
            else if (a.src === "https://m.media-amazon.com/images/I/81X3KkzATPL._SL1500_.jpg") {
                $("#aaa").attr("src", "https://m.media-amazon.com/images/I/81X3KkzATPL._SL1500_.jpg");


            }
            else if (a.src === "https://m.media-amazon.com/images/I/81Zg4IWN-QS._SL1500_.jpg") {
                $("#aaa").attr("src", "https://m.media-amazon.com/images/I/81Zg4IWN-QS._SL1500_.jpg");

            }

        }),
        $("#display_product3").hover(function () {
            $(this).css('transition', 'all 0.3s ease-in-out');
            a = document.getElementById('cont3');
            $(this).css('box-shadow', '0 0 5px 2px rgb(255, 217, 0)');
            $("#display_product1").css('box-shadow', '');
            $("#display_product2").css('box-shadow', '');
            $("#display_product4").css('box-shadow', '');
            $("#display_product5").css('box-shadow', '');
            if (a.src === "https://m.media-amazon.com/images/I/81UBryv7mOL._SL1500_.jpg") {
                $("#aaa").attr("src", "https://m.media-amazon.com/images/I/81UBryv7mOL._SL1500_.jpg");

            }
            else if (a.src === "https://m.media-amazon.com/images/I/81UBryv7mOL._SL1500_.jpg") {
                $("#aaa").attr("src", "https://m.media-amazon.com/images/I/81UBryv7mOL._SL1500_.jpg");


            }
            else if (a.src === "https://m.media-amazon.com/images/I/81Kv2K6rR3L._SL1500_.jpg") {
                $("#aaa").attr("src", "https://m.media-amazon.com/images/I/81Kv2K6rR3L._SL1500_.jpg");


            }
            else if (a.src === "https://m.media-amazon.com/images/I/81UBryv7mOL._SL1500_.jpg") {
                $("#aaa").attr("src", "https://m.media-amazon.com/images/I/81UBryv7mOL._SL1500_.jpg");


            }
            else if (a.src === "https://m.media-amazon.com/images/I/81UBryv7mOL._SL1500_.jpg") {
                $("#aaa").attr("src", "https://m.media-amazon.com/images/I/81UBryv7mOL._SL1500_.jpg");


            }
            else if (a.src === "https://m.media-amazon.com/images/I/91gqZ8pizXS._SL1500_.jpg") {
                $("#aaa").attr("src", "https://m.media-amazon.com/images/I/91gqZ8pizXS._SL1500_.jpg");

            }
        }),
        $("#display_product4").hover(function () {
            $(this).css('transition', 'all 0.3s ease-in-out');
            a = document.getElementById('cont4');
            $(this).css('box-shadow', '0 0 5px 2px rgb(255, 217, 0)');
            $("#display_product1").css('box-shadow', '');
            $("#display_product2").css('box-shadow', '');
            $("#display_product3").css('box-shadow', '');
            $("#display_product5").css('box-shadow', '');
            if (a.src === "https://m.media-amazon.com/images/I/81tJbh5cAXL._SL1500_.jpg") {
                $("#aaa").attr("src", "https://m.media-amazon.com/images/I/81tJbh5cAXL._SL1500_.jpg");

            }
            else if (a.src === "https://m.media-amazon.com/images/I/81tJbh5cAXL._SL1500_.jpg") {
                $("#aaa").attr("src", "https://m.media-amazon.com/images/I/81tJbh5cAXL._SL1500_.jpg");


            }
            else if (a.src === "https://m.media-amazon.com/images/I/81UBryv7mOL._SL1500_.jpg") {
                $("#aaa").attr("src", "https://m.media-amazon.com/images/I/81UBryv7mOL._SL1500_.jpg");


            }
            else if (a.src === "https://m.media-amazon.com/images/I/81tJbh5cAXL._SL1500_.jpg") {
                $("#aaa").attr("src", "https://m.media-amazon.com/images/I/81tJbh5cAXL._SL1500_.jpg");


            }
            else if (a.src === "https://m.media-amazon.com/images/I/81tJbh5cAXL._SL1500_.jpg") {
                $("#aaa").attr("src", "https://m.media-amazon.com/images/I/81tJbh5cAXL._SL1500_.jpg");


            }
            else if (a.src === "https://m.media-amazon.com/images/I/81mrpbPBRwS._SL1500_.jpg") {
                $("#aaa").attr("src", "https://m.media-amazon.com/images/I/81mrpbPBRwS._SL1500_.jpg");

            }
        }),
        $("#display_product5").hover(function () {
            $(this).css('transition', 'all 0.3s ease-in-out');
            a = document.getElementById('cont5');
            $(this).css('box-shadow', '0 0 5px 2px rgb(255, 217, 0)');

            $("#display_product1").css('box-shadow', '');
            $("#display_product2").css('box-shadow', '');
            $("#display_product3").css('box-shadow', '');
            $("#display_product4").css('box-shadow', '');
            if (a.src === "https://m.media-amazon.com/images/I/71djPfkB07L._SL1500_.jpg") {
                $("#aaa").attr("src", "https://m.media-amazon.com/images/I/71djPfkB07L._SL1500_.jpg");

            }
            else if (a.src === "https://m.media-amazon.com/images/I/71OllS3InEL._SL1500_.jpg") {
                $("#aaa").attr("src", "https://m.media-amazon.com/images/I/71OllS3InEL._SL1500_.jpg");


            }
            else if (a.src === "https://m.media-amazon.com/images/I/71ET8SbL5XL._SL1500_.jpg") {
                $("#aaa").attr("src", "https://m.media-amazon.com/images/I/71ET8SbL5XL._SL1500_.jpg");


            }
            else if (a.src === "https://m.media-amazon.com/images/I/719M6YlOXTL._SL1500_.jpg") {
                $("#aaa").attr("src", "https://m.media-amazon.com/images/I/719M6YlOXTL._SL1500_.jpg");


            }
            else if (a.src === "https://m.media-amazon.com/images/I/71XQdrgV1gL._SL1500_.jpg") {
                $("#aaa").attr("src", "https://m.media-amazon.com/images/I/71XQdrgV1gL._SL1500_.jpg");


            }
            else if (a.src === "https://m.media-amazon.com/images/I/61BBA7nRpxS._SL1500_.jpg") {
                $("#aaa").attr("src", "https://m.media-amazon.com/images/I/61BBA7nRpxS._SL1500_.jpg");

            }

        });
    // white color 
    $('#bt1').click(function () {
        $('#aaa').attr("src", "https://m.media-amazon.com/images/I/711wsjBtWeL._SL1500_.jpg");
        $('#cont1').attr("src", "https://m.media-amazon.com/images/I/711wsjBtWeL._SL1500_.jpg");
        $('#cont2').attr("src", "https://m.media-amazon.com/images/I/81hAAaDTJ5L._SL1500_.jpg");
        $('#cont3').attr("src", "https://m.media-amazon.com/images/I/81UBryv7mOL._SL1500_.jpg");
        $('#cont4').attr("src", "https://m.media-amazon.com/images/I/81tJbh5cAXL._SL1500_.jpg");
        $('#cont5').attr("src", "https://m.media-amazon.com/images/I/71djPfkB07L._SL1500_.jpg");
        // remove box shadow props and set it of only  of first cont
        $('#display_product1').css('box-shadow', '0 0 5px 2px rgb(255, 217, 0)');
        $("#display_product2").css('box-shadow', '');
        $("#display_product3").css('box-shadow', '');
        $("#display_product4").css('box-shadow', '');
        $("#display_product5").css('box-shadow', '');
        // remove border from other buttons

        $(this).css('border', '2px solid rgb(0, 89, 255)');
        $('#bt2').css('border', '');
        $('#bt3').css('border', '');
        $('#bt4').css('border', '');
        $('#bt5').css('border', '');
        $('#bt6').css('border', '');
    });
    // red color
    $('#bt2').click(function () {
        $('#aaa').attr("src", "https://m.media-amazon.com/images/I/71E5zB1qbIL._SL1500_.jpg");
        $('#cont1').attr("src", "https://m.media-amazon.com/images/I/71E5zB1qbIL._SL1500_.jpg");
        $('#cont2').attr("src", "https://m.media-amazon.com/images/I/915NXQJEeFL._SL1500_.jpg");
        $('#cont3').attr("src", "https://m.media-amazon.com/images/I/81UBryv7mOL._SL1500_.jpg");
        $('#cont4').attr("src", "https://m.media-amazon.com/images/I/81tJbh5cAXL._SL1500_.jpg");
        $('#cont5').attr("src", "https://m.media-amazon.com/images/I/71OllS3InEL._SL1500_.jpg");

        // remove box shadow props and set it of only  of first cont
        $('#display_product1').css('box-shadow', '0 0 5px 2px rgb(255, 217, 0)');
        $("#display_product2").css('box-shadow', '');
        $("#display_product3").css('box-shadow', '');
        $("#display_product4").css('box-shadow', '');
        $("#display_product5").css('box-shadow', '');
        // remove border

        $('#bt1').css('border', '2px solid rgb(0,0,0,0.4)');
        $(this).css('border', '2px solid rgb(0, 89, 255)');
        $('#bt3').css('border', '');
        $('#bt4').css('border', '');
        $('#bt5').css('border', '');
        $('#bt6').css('border', '');

    });
    $('#bt3').click(function () {
        $('#aaa').attr("src", "https://m.media-amazon.com/images/I/71fVoqRC0wL._SL1500_.jpg");
        $('#cont1').attr("src", "https://m.media-amazon.com/images/I/71fVoqRC0wL._SL1500_.jpg");
        $('#cont2').attr("src", "https://m.media-amazon.com/images/I/81Vr1E73vLL._SL1500_.jpg");
        $('#cont3').attr("src", "https://m.media-amazon.com/images/I/81Kv2K6rR3L._SL1500_.jpg");
        $('#cont4').attr("src", "https://m.media-amazon.com/images/I/81UBryv7mOL._SL1500_.jpg");
        $('#cont5').attr("src", "https://m.media-amazon.com/images/I/71ET8SbL5XL._SL1500_.jpg");
        // remove box shadow props and set it of only  of first cont
        $('#display_product1').css('box-shadow', '0 0 5px 2px rgb(255, 217, 0)');
        $("#display_product2").css('box-shadow', '');
        $("#display_product3").css('box-shadow', '');
        $("#display_product4").css('box-shadow', '');
        $("#display_product5").css('box-shadow', '');
        // remove border
        $(this).css('border', '2px solid rgb(0, 89, 255)');
        $('#bt1').css('border', '2px solid rgb(0,0,0,0.4)');
        $('#bt2').css('border', '');
        $('#bt4').css('border', '');
        $('#bt5').css('border', '');
        $('#bt6').css('border', '');
    });
    $('#bt4').click(function () {
        $('#aaa').attr("src", "https://m.media-amazon.com/images/I/71ZOtNdaZCL._SL1500_.jpg");
        $('#cont1').attr("src", "https://m.media-amazon.com/images/I/71ZOtNdaZCL._SL1500_.jpg");
        $('#cont2').attr("src", "https://m.media-amazon.com/images/I/81hB-X3SMtL._SL1500_.jpg");
        $('#cont3').attr("src", "https://m.media-amazon.com/images/I/81UBryv7mOL._SL1500_.jpg");
        $('#cont4').attr("src", "https://m.media-amazon.com/images/I/81tJbh5cAXL._SL1500_.jpg");
        $('#cont5').attr("src", "https://m.media-amazon.com/images/I/719M6YlOXTL._SL1500_.jpg");

        // remove box shadow props and set it of only  of first cont
        $('#display_product1').css('box-shadow', '0 0 5px 2px rgb(255, 217, 0)');
        $("#display_product2").css('box-shadow', '');
        $("#display_product3").css('box-shadow', '');
        $("#display_product4").css('box-shadow', '');
        $("#display_product5").css('box-shadow', '');
        // remove border

        $('#bt1').css('border', '2px solid rgb(0,0,0,0.4)');
        $(this).css('border', '2px solid rgb(0, 89, 255)');
        $('#bt3').css('border', '');
        $('#bt2').css('border', '');
        $('#bt5').css('border', '');
        $('#bt6').css('border', '');
    });
    $('#bt5').click(function () {
        $('#aaa').attr("src", "https://m.media-amazon.com/images/I/71cQWYVtcBL._SL1500_.jpg");
        $('#cont1').attr("src", "https://m.media-amazon.com/images/I/71cQWYVtcBL._SL1500_.jpg");
        $('#cont2').attr("src", "https://m.media-amazon.com/images/I/81X3KkzATPL._SL1500_.jpg");
        $('#cont3').attr("src", "https://m.media-amazon.com/images/I/81UBryv7mOL._SL1500_.jpg");
        $('#cont4').attr("src", "https://m.media-amazon.com/images/I/81tJbh5cAXL._SL1500_.jpg");
        $('#cont5').attr("src", "https://m.media-amazon.com/images/I/71XQdrgV1gL._SL1500_.jpg");

        // remove box shadow props and set it of only  of first cont
        $('#display_product1').css('box-shadow', '0 0 5px 2px rgb(255, 217, 0)');
        $("#display_product2").css('box-shadow', '');
        $("#display_product3").css('box-shadow', '');
        $("#display_product4").css('box-shadow', '');
        $("#display_product5").css('box-shadow', '');
        // remove border

        $('#bt1').css('border', '2px solid rgb(0,0,0,0.4)');
        $(this).css('border', '2px solid rgb(0, 89, 255)');
        $('#bt3').css('border', '');
        $('#bt4').css('border', '');
        $('#bt2').css('border', '');
        $('#bt6').css('border', '');
    });
    $('#bt6').click(function () {
        $('#aaa').attr("src", "https://m.media-amazon.com/images/I/71hIfcIPyxS._SL1500_.jpg");
        $('#cont1').attr("src", "https://m.media-amazon.com/images/I/71hIfcIPyxS._SL1500_.jpg");
        $('#cont2').attr("src", "https://m.media-amazon.com/images/I/81Zg4IWN-QS._SL1500_.jpg");
        $('#cont3').attr("src", "https://m.media-amazon.com/images/I/91gqZ8pizXS._SL1500_.jpg");
        $('#cont4').attr("src", "https://m.media-amazon.com/images/I/81mrpbPBRwS._SL1500_.jpg");
        $('#cont5').attr("src", "https://m.media-amazon.com/images/I/61BBA7nRpxS._SL1500_.jpg");

        // remove box shadow props and set it of only  of first cont
        $('#display_product1').css('box-shadow', '0 0 5px 2px rgb(255, 217, 0)');
        $("#display_product2").css('box-shadow', '');
        $("#display_product3").css('box-shadow', '');
        $("#display_product4").css('box-shadow', '');
        $("#display_product5").css('box-shadow', '');
        // remove border

        $('#bt1').css('border', '2px solid rgb(0,0,0,0.4)');
        $(this).css('border', '2px solid rgb(0, 89, 255)');
        $('#bt3').css('border', '');
        $('#bt4').css('border', '');
        $('#bt2').css('border', '');
        $('#bt5').css('border', '');

    });

});
/*Countdown for Sale */
http://127.0.0.1:5501/prod
var deadline = new Date("Oct 13, 2022 15:37:25").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var t = deadline - now;
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((t % (1000 * 60)) / 1000);
    document.getElementById("demo").innerHTML = days + "d "
        + hours + "h " + minutes + "m " + seconds + "s ";
    if (t < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);