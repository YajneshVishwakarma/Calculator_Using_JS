'use strict';

const add = function()
{
    let v1 = Number(document.getElementById("val1").value);
    let v2 = Number(document.getElementById("val2").value);

    console.log(v1+v2);

    document.getElementById("ans").innerHTML = v1+v2
}

const div = function()
{
    let v1 = Number(document.getElementById("val1").value);
    let v2 = Number(document.getElementById("val2").value);

    console.log(v1+v2);

    document.getElementById("ans").innerHTML = v1/v2
}
const mul = function()
{
    let v1 = Number(document.getElementById("val1").value);
    let v2 = Number(document.getElementById("val2").value);

    console.log(v1+v2);

    document.getElementById("ans").innerHTML = v1*v2
}
const sub = function()
{
    let v1 = Number(document.getElementById("val1").value);
    let v2 = Number(document.getElementById("val2").value);

    console.log(v1+v2);

    document.getElementById("ans").innerHTML = v1-v2
}

 function ce()
{
    document.getElementById("val1").value="";
    document.getElementById("val2").value="";
    document.getElementById("ans").innerHTML=0;
}
