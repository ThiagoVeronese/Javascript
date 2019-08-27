function exe1(){
    nota1 = Number(document.getElementById("nota1").value);
    nota2 = Number(document.getElementById("nota2").value);
    nota3 = Number(document.getElementById("nota3").value);
    nota4 = Number(document.getElementById("nota4").value);

    var media = (nota1+nota2+nota3+nota4)/4

    if (media>=7){
        alert("APROVADO com a média " + media )
        console.log("APROVADO com a média " + media )
        
    }
    else {
        alert("REPROVADO com a Média " + media)
        console.log("REPROVADO com a média " + media )
        
    }
}
function exe2(){
    n1 = Number(document.getElementById("n1").value);
    n2 = Number(document.getElementById("n2").value);
    var media = (n1 + n2)/2
    if (media >= 7){
        alert("APROVADO com a média " + media )
        console.log("APROVADO com a média " + media )
        
    }
    else if ((media >= 3) && (media < 7)){
        alert("EXAME com a Média " + media)
        console.log("EXAME com a média " + media )

    }
    else {
        alert("REPROVADO com a Média " + media)
        console.log("REPROVADO com a média " + media )
    }
}   
function exe3(){
    numero1 = Number(document.getElementById("nr1").value);
    numero2 = Number(document.getElementById("nr2").value);

    if (nr2 < nr1){
        alert("O numero 2 é o menor numero: " + nr2)
    }
    else if (nr1 < nr2){
        alert("O numero 1 é o menor numero: " + nr1)
    }
    else{
        alert("Os numeros sao iguais")
    }
}
function exe4(){
    var numero1 = Number(document.getElementById("numero1").value)
    var numero2 = Number(document.getElementById("numero1").value)
    var numero3 = Number(document.getElementById("numero1").value)
    //verifica menor
    if ((numero1 == numero2) && (numero1>= numero3)){
        alert
    }
}
function exe5(){
    no1 = Number(document.getElementById("no1").value);
    no2 = Number(document.getElementById("no2").value);
    opcao = Number(document.getElementById("opcao").value);
    var resultado

    switch(opcao){
        case 1: resultado = (no1 + no2) /2
            break
        case 2: if (no1 >= no2){
            resultado = no2 - no1        
                }
                else {
            resultado = no1-no2
                }
            break //não entra no case de baixo
        case 3: resultado = no1 * no2
            break //não entra no case de baixo
        case 4: if (no2 != 0){

                resultado = no1 / no2
        }
        else{
            resultado ="Divisão por zero"
        }
            break //não entra no case de baixo
            default: resultado = "Opção inválida"
    }
    alert("Resultado "+ resultado)
       
}

function exe7(){
    var salario = Number(prompt("Informe salário"))
    if (salario < 500){
        var novo = salario + salario*30/100
        alert("Novo valor " + novo)        
    }
    else{
        alert("Não tem direito a aumentar")
    }
}
