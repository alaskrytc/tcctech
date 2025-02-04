// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        100: {
            items: 2
        },
        200: {
            items: 2
        },
        200: {
            items: 2
        }
    }
});
let testing = document.getElementById('testing');
let upDown = document.getElementById('updown');
window.onscroll=function(){
    if(scrollY >= 400)
    {
        upDown.style.display = 'block';
        testing.style.position = 'fixed';
        testing.style.background = 'linear-gradient(130deg, #231a6f, #0f054c)';
        testing.style.width = '100%';
        testing.style.zIndex = '10';
    }else
    {
        upDown.style.display = 'none'
        testing.style.position = '';
        testing.style.background = '';
        testing.style.width = '100%';
        testing.style.zIndex = '10';
    }

}
upDown.onclick = function(){
    scroll({
        left:0,
        top:0,
        behavior:"smooth",
    });
}

// let buttonCall = document.getElementById('buttonCall');
// buttonCall.click = function(){
//     if(buttonCall.style.left = '50px')
//     {
//         buttonCall.style.left = '0'
//     }else
//     {
//         buttonCall.style.left = '50px'
//     }
// }

// window.onscroll=function(){
//     if(scrollY >= 100)
//     {
//         testing.style.position = 'fixed';
//         testing.style.background = 'linear-gradient(130deg, #231a6f, #0f054c)'
//         testing.style.width = '100%'
//         testing.style.zIndex = '10'
//     }else
//     {
//         testing.style.position = 'normal';
//         testing.style.background = 'none'
//         testing.style.width = '100%'
//         testing.style.zIndex = '10'
//     }
// }
    


// upDown.scr

/** google_map js **/
// function myMap() {upDown.scr
//     var mapProp = {
//         center: new google.maps.LatLng(40.712775, -74.005973),
//         zoom: 18,
//     };
//     var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
// }
