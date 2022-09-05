let emisor = document.querySelector(".emisor");
let receptor = document.querySelector(".receptor");
const x = ["e","i","a","o","u"]; 
const y = ["enter","imes","ai","ober","ufat"];

function encriptar(texto){
        texto = texto.toLowerCase();
        for(let i = 0; i < x.length; i++){
            if(texto.includes(x[i])){
                texto = texto.replaceAll(x[i],y[i]);}}
            return texto;
        }
function btnEncriptar(){
    let textoEncriptado = encriptar(emisor.value);
    receptor.value = textoEncriptado;
    document.querySelector(".muñeco").style.display = "none";
    document.querySelector(".texto").style.display = "none";
    document.querySelector(".parrafo").style.display = "none";
    emisor.value = "";
}


function desencriptar(texto){
    texto = texto.toLowerCase();
    for(let i = 0; i < y.length; i++){
        if(texto.includes(y[i])){
            texto = texto.replaceAll(y[i],x[i]);}}
        return texto;
    }
function btnDesencriptar(){
    let textoDesencriptado = desencriptar(emisor.value);
    receptor.value = textoDesencriptado;
    document.querySelector(".muñeco").style.display = "none";
    document.querySelector(".texto").style.display = "none";
    document.querySelector(".parrafo").style.display = "none";
    emisor.value = "";
}

function mostrarBtn(){
    document.querySelector(".copiar").style.display = "block";}
function btnCopiar(){
    receptor.select();
    navigator.clipboard.writeText(receptor.value);
    receptor.value = "";
};