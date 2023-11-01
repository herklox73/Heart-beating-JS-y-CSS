function move() {
    var no = document.getElementById("no");
    var container = document.getElementById("container");
    var x = Math.floor(Math.random() * (container.offsetWidth - no.offsetWidth));
    var y = Math.floor(Math.random() * (container.offsetHeight - no.offsetHeight));
    no.style.left = x + "px";
    no.style.top = y + "px";
}