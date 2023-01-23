/**
 OBJETIVO 1 - quando usuário clicar no botao ver trailer devemos abrir a modal com o video do trailer
        passo 1- dar um jeito de pegar o elemento que representa o botão na tela usando o js
        passo 2 - dar um jeito de identificar quando o usuario clicar no botao
        passo 3 - dar um jeito de pegar o elemento modal no js
        passo 4 - abrir a modal na tela

 OBJETIVO 2 - quando o usário clicar no X devemos fechar a modal
        passo 1 - dar um jeito de fechar modal usando js
        passo 2 - dar um jeito de identificar quando o usuario clicar no X
        passo 3 - fechar modal 
 */
const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const modal = document.querySelector(".modal");
const video = document.getElementById("video");
const linkDoVideo = video.src

botaoTrailer.addEventListener("click", () =>{
    console.log("clicou no botao de ver o trailer");
    modal.classList.add("aberto");
    video.setAttribute("src", linkDoVideo);
});

botaoFecharModal.addEventListener("click", () => {
    console.log("clicou no botao fechar o video")
    modal.classList.remove("aberto");
    video.setAttribute("src", "");
});




