let nome = document.getElementById("nome")
let envionome = document.getElementById("envionome")

function En1()
{
    envionome.innerHTML = "Ola, " + nome.value + " tudo bem?"
}

let centimetros = document.getElementById("centimetros")
let metros = document.getElementById("metros")

    function abc()
    {
         metros.innerHTML = (parseInt(centimetros.value) / 100)
    }

let numb = document.getElementById("numb")
let resultado = document.getElementById("resultado")

function responder()
{
    anterior.innerHTML = parseInt(numb.value) - 1
    proximo.innerHTML = parseInt(numb.value) + 1
}


let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let rsp = document.getElementById("rsps")

function somar2()
{
    if(num1.value > num2.value)
        {
            rsp.innerHTML = num1.value + " e maior" 
        }
    else
        {
            rsp.innerHTML = num2.value + " e maior" 
        }
}

let slarios = document.getElementById("slarios")
let calcular = document.getElementById("calcular")

function dim()
    {
        if(slarios.value > 1250) 
            {
                calcular.innerHTML = (parseInt(slarios.value) * 0.15) + " reais"
            }
        else
            {
                calcular.innerHTML = (parseInt(slarios.value) * 0.10) + " reais"
            }
            
    }


console.log()
var a = 1;
while( a < 101)
    {
        console.log(a)
        a = a + 1;
    }

console.log()
var b = 0;
while( b < 51)
    {
     console.log(b)
         b = b + 5;
    }

    console.log()
    var c = 0;
    while( c < 101)
        {
         console.log(c)
             c = c + 10;
        }
        
    