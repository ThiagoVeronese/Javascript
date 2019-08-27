function exe22(){
    var idade = Number(document.getElementById("idade").value)
    var peso = Number(document.getElementById("idade").value)
    var risco = 0
    if (idade <20){
            if (peso< 60){
                risco = 9
            }
            else if (peso <= 90){
                risco = 8 
            }
            else{
                risco = 7
            }
    }
    else if (idade <50){
            if (peso <60 ){
                risco = 6
            }
            else if (peso <= 90){
                risco = 5
            }
            else{
                risco = 4
            }
    }
    alert("Risco: " + risco)
}