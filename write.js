var flag = 0;
var flag1 =0;
var link = "main.html";
const quantity = "10";
plus = Number(quantity);
var point = 20;




function bold(){
    if(flag == 0){
    document.getElementById("content").style.fontWeight = "bold";
    flag = 1;
    }
    else if (flag == 1){
        document.getElementById("content").style.fontWeight ="normal";
        flag =0;
    }
}

function italy(){
    if(flag1 == 0){
    document.getElementById("content").style.fontStyle ="oblique";
    flag1 = 1;
    }
    else if (flag1 == 1){
        document.getElementById("content").style.fontStyle ="normal";
        flag1 =0;
    }
}

function calc(){
    document.getElementById('result').value =
    document.getElementById('content').value.length;
}



function sumbit(){
    var loadpoint = localStorage.getItem("point");
    
    if(document.getElementById('content').value.length<500){
        alert("500자 이상 작성해주세요");
    }
    else{
        alert("제출 완료");
        loadpoint = +loadpoint+plus;
        localStorage.setItem("point", loadpoint);
        
        location.replace(link);
    }
    
}




function get(){
    var loadpoint = localStorage.getItem("point");
    document.getElementById('point').value = loadpoint;
}


var loadpoint = localStorage.getItem("point");

function buy(){
    var name = document.getElementById("b").value;
    if(name<=loadpoint){
    point = loadpoint-name;
    alert("교환 완료(*내정보에서 확인 가능*)");}
    else{alert("포인트가 부족해요");}
    loadpoint = point;
    document.getElementById('point').value = loadpoint;
    localStorage.setItem("point", loadpoint);
}

function buy1(){
    var name = document.getElementById("b1").value;
    if(name<=loadpoint){
    point = loadpoint-name;
    alert("교환 완료(*내정보에서 확인 가능*)")}
    else{alert("포인트가 부족해요");}
    loadpoint = point;
    document.getElementById('point').value = loadpoint;
    localStorage.setItem("point", loadpoint);
    
}

function buy2(){
    var name = document.getElementById("b2").value;
    if(name<=loadpoint){
    point = loadpoint-name;
    alert("교환 완료(*내정보에서 확인 가능*)")}
    else{alert("포인트가 부족해요");}
    loadpoint = point;
    document.getElementById('point').value = loadpoint;
    localStorage.setItem("point", loadpoint);
    
}

function buy3(){
    var name = document.getElementById("b3").value;
    if(name<=loadpoint){
    point = loadpoint-name;
    alert("교환 완료(*내정보에서 확인 가능*)")}
    else{alert("포인트가 부족해요");}
    loadpoint = point;
    document.getElementById('point').value = loadpoint;
    localStorage.setItem("point", loadpoint);
}