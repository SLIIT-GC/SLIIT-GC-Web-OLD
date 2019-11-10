// Place your custom JS here
window.onscroll = function() {
    var nav = document.getElementById('header');
    if ( window.pageYOffset > 548 ) {
        nav.classList.add("navbar-scrolled");
    } else {
        nav.classList.remove("navbar-scrolled");
    }
}