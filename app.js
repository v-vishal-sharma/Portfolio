// image rotate
window.onscroll = function() {
    var theta = document.documentElement.scrollTop / 700 % Math.PI;

document.getElementById('wheel').style.transform ='rotate(' + theta + 'rad)';
}
