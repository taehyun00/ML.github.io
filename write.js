var flag = 0;
var flag1 =0;
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