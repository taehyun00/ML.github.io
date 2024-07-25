var loadpoint = localStorage.getItem("point");

function get(){
    console.log(loadpoint);
    document.getElementById('point1').value = loadpoint;
}