const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll("aba-conteudo");

for(let i=0; i <botoes.lenth; i++){
    botoes[i].onclick = function(){
        for(let j=0; j=0<botoes.lenth;j++){
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
        botoes[1].classList.add("ativo");
        textos[1].classList.add("ativo");

    }
}
