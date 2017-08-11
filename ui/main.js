console.log('Loaded!');

var element = document.getElementById('main');

element.innerHTML = 'new value';

var img = document.getElementById('madi');

var marginLeft = 0;
function moveLeft()
{
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginleft + 'px';
}
img.onclick = function (){
    var interval = setInterval(moveLeft , 50);
}