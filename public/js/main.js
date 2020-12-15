// Partie un

// déclaration des variables
let exo1Div1 = document.querySelector("#exo-1")
let exo1Inputs = exo1Div1.querySelectorAll("input")

let exo1ValueInput1
let exo1ValueInput2

let exo1Egal = exo1Div1.querySelector("button")
let exo1Reponse = exo1Div1.querySelector("#response1")

// stockage des valeurs inputs
for (let i = 0; i < exo1Inputs.length; i++) {
    exo1Inputs[i].addEventListener("change", function(){
        switch (i) {
            case 0:
                exo1ValueInput1 = exo1Inputs[i].value
                console.log(exo1ValueInput1);
                break;
            case 1:
                exo1ValueInput2 = exo1Inputs[i].value
                console.log(exo1ValueInput2);
                break;   
            default:
                console.log("error");
                break;
        }
    })

}

// calcul
exo1Egal.addEventListener("click", function(){
    exo1Reponse.innerText = `${Number(exo1ValueInput1) + Number(exo1ValueInput2)}` 

})

// Partie deux

// déclaration de variable
let exo2div2 = document.querySelector("#exo-2");
let exo2Inputs = exo2div2.querySelectorAll("input")


let exo2Value1;
let exo2Value2;

let exo2Egal =exo2div2.querySelector("button")
let exo2operateur = exo2div2.querySelector("select")

let exo2reponse = exo2div2.querySelector("#response2")

// stocker les valeurs inputs
for (let i=0; i<exo2Inputs.length; i++){
    exo2Inputs[i].addEventListener("change", function (){
        switch (i) {
            case 0:
                exo2Value1 = exo2Inputs[i].value
                console.log(exo2Value1)
                break;
                case 1:
                    exo2Value2 = exo2Inputs[i].value
                    console.log(exo2Value2)
                    break;
                    
                default:
                    break;
        }
    })
                
}

exo2Egal.addEventListener("click", function(){
    switch (`${exo2operateur.value}`) {
        case "+":
            exo2reponse.innerText = `${Number(exo2Value1) + Number(exo2Value2)}`
            break;

        case "-":
            exo2reponse.innerText = `${Number(exo2Value1) - Number(exo2Value2)}`
            break;

        case "*":
            exo2reponse.innerText = `${Number(exo2Value1) * Number(exo2Value2)}`
            break;

        case "/":
            exo2reponse.innerText = `${Number(exo2Value1) / Number(exo2Value2)}`
            break;
    
        default:
            break;
    }
})




// partie3
let div3 = document.querySelector("#exo-3");
let exo3Inputs = div3.querySelectorAll("input")

let exo3Value1;
let exo3Value2;

let exo3Operateurs = div3.querySelectorAll(".m-1")
let exo3Ope

let exo3Egal = div3.querySelector(".btn");
let exo3reponse = div3.querySelector("#response3")

for (let i = 0; i < exo3Inputs.length; i++) {
    exo3Inputs[i].addEventListener("change", function (){
        switch (i) {
            
            case 0:
                exo3Value1 = Number(exo3Inputs[i].value)
                console.log(exo3Value1);
                break;
                
            case 1:
                exo3Value2 = Number(exo3Inputs[i].value)
                console.log(exo3Value1);
                break;

            default:
                break;
        }
    })
                
}

// définir l'opérateur.

exo3Operateurs[0].value = "+"
exo3Operateurs[1].value = "-"
exo3Operateurs[2].value = "*"
exo3Operateurs[3].value = "/"

// permet de définir l'opérateur du calcul. 
exo3Operateurs.forEach(element => {
        element.addEventListener("click", function(){
        exo3Ope = this.value
        return exo3Ope
    })
})

// égal
exo3Egal.addEventListener("click", function(){
    console.log(exo3Ope);
    switch (exo3Ope) {
        case "+":
            exo3reponse.innerText = exo3Value1 + exo3Value2
            break;

        case "-":
            exo3reponse.innerText = exo3Value1 - exo3Value2
            break;

        case "*":
            exo3reponse.innerText = exo3Value1 * exo3Value2
            break;

        case "/":
            exo3reponse.innerText = exo3Value1 / exo3Value2
            break;

        default:
            break;
    }

})


// partie quatre

// déclaration des variables
let div4 = document.querySelector("#exo-4");
let exo4Inputs = div4.querySelectorAll("input")

let exo4Value1 ="";
let exo4Value2 ="";

let divChiffre = div4.querySelector("#numbersExo4")
let chiffres = divChiffre.querySelectorAll(".m-1")

let divoperateurs = div4.querySelector("#operatorsExo4")
let exo4Operateurs = divoperateurs.querySelectorAll(".m-1")
let exo4Ope = ""

let exo4Egal = div4.querySelector(".btn");
let exo4reponse = div4.querySelector("#response4")

// stockage des inputs

// définir l'opérateur.

exo4Operateurs[0].value = "+"
exo4Operateurs[1].value = "-"
exo4Operateurs[2].value = "*"
exo4Operateurs[3].value = "/"

// permet de définir l'opérateur du calcul. 
exo4Operateurs.forEach(element => {
    element.addEventListener("click", function(){
        exo4Ope = this.value
        return exo4Ope
    })
})
// chiffres
chiffres.forEach((e,i)=>{
    e.value = Number(chiffres[i].innerHTML)
})
// remplir l'input un ou deux
for (let i = 0; i < chiffres.length; i++) {
    chiffres[i].addEventListener("click", function(){
        if(exo4Ope == ""){
            exo4Inputs[0].value +=  chiffres[i].value;
            exo4Value1 = Number(exo4Inputs[0].value)
        }else{
            exo4Inputs[1].value +=  chiffres[i].value;
            exo4Value2 = Number(exo4Inputs[1].value)
        }
    })
}



// // égal
exo4Egal.addEventListener("click", function(){
    console.log(exo4Ope);
    switch (exo4Ope) {
        case "+":
            exo4reponse.innerText = exo4Value1 + exo4Value2
            break;

        case "-":
            exo4reponse.innerText = exo4Value1 - exo4Value2
            break;

        case "*":
            exo4reponse.innerText = exo4Value1 * exo4Value2
            break;

        case "/":
            exo4reponse.innerText = exo4Value1 / exo4Value2
            break;

        default:
            break;
    }

})
