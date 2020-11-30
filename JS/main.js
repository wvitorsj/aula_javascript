

function clicou(){
    document.getElementById("Agradecimento").innerHTML = "<b>Obrigado Por Clicar</b>";

    //console.log(document.getElementById("Agradecimento"));
    //alert("Obrigado Por Clicar");
}

function redirecionar(){
    window.open("https://digitalinnovation.one/");
    //window.location.href = "https://digitalinnovation.one/";
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado Por Passar o Mouse";
    //document.getElementById("mousemove").innerHTML = "Obrigado Por Passar o Mouse";
    //alert("trocar texto");
}

function voltar(elemento){
    elemento.innerHTML = "Passe o Mouse Aqui";
    //document.getElementById("mousemove").innerHTML = "Passe o Mouse Aqui";
}

function load(){
    alert("Página Carregada");
}

function funçãoChange(elemento){
console.log(elemento.value)
}

/*
function soma(n1, n2){
    return n1 + n2;
}
*/

/*
var validar = 0

function validaIdade(idade){
    
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual Sua Idade?");
validaIdade(idade)
console.log(validar);
*/

/*
function setReplace(frase, nome, novo_nome){
   return frase.replace(nome, novo_nome)
}

alert(soma(5, 10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/

/*
var d = new Date();
alert(d.getMinutes());
alert(d.getMonth());
alert(d.getHours());
alert(d.getDay());
*/

/*
var count;
for(count=0; count <= 5; count++){
    alert(count);
};
*/
/*
var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++;
}
*/


/*
var idade = prompt("Qual Sua Idade?");
if(idade >= 18){
    alert("Maior de Idade");
}else{
    alert("Menor de Idade");
};
*/

/*
var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
console.log(frutas);
alert(frutas[1].nome);
*/
/*
var fruta = {nome:"maçã", cor:"vermelha"};
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["maçã", "pêra", "laranja"];
//lista.push("uva");
//lista.pop();

//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" | "));


//var nome = "Welton Vitor";
//var n1 = 29;
//var n2 = 10;
//var frase = "Japão é o Melhor Time do Mundo";
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
//console.log(nome);
//console.log(n1 * n2);
//console.log(frase.toLowerCase());
//alert(frase.replace("Japão", "Brasil"));