/*!
* Start Bootstrap - Resume v7.0.4 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


document.getElementById("buttonClose").onclick = function() {myFunction0()};
function myFunction0() 
{
    document.getElementById("projectOneJsID").classList.toggle("show")
}
document.getElementById("buttonZoom").onclick = function() {myFunction()};
function myFunction() 
{
    document.getElementById("projectOneJsID").classList.toggle("show")
}
// ________________________
document.getElementById("buttonCloseTwo").onclick = function() {myFunction1()};
function myFunction1() 
{
    document.getElementById("projectTwoJsID").classList.toggle("showTwo")
}
document.getElementById("buttonZoomTwo").onclick = function() {myFunction2()};
function myFunction2() 
{
    document.getElementById("projectTwoJsID").classList.toggle("showTwo")
}
//_______________________
document.getElementById("buttonCloseThree").onclick = function() {myFunction3()};
function myFunction3() 
{
    document.getElementById("projectThreeJsID").classList.toggle("showThree")
}
document.getElementById("buttonZoomThree").onclick = function() {myFunction4()};
function myFunction4() 
{
    document.getElementById("projectThreeJsID").classList.toggle("showThree")
}
//_______________________
document.getElementById("buttonCloseFour").onclick = function() {myFunction5()};
function myFunction5() 
{
    document.getElementById("projectFourJsID").classList.toggle("showFour")
}
document.getElementById("buttonZoomFour").onclick = function() {myFunction6()};
function myFunction6() 
{
    document.getElementById("projectFourJsID").classList.toggle("showFour")
}


