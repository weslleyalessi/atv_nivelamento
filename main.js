const botoes = document.querySelectorAll(".botao");

for(let i=0; i <botoes.lenth; i++){
    botoes[i].onclick = function(){
        for(let i=0; j=0<botoes.lenth;j++){
            botoes[j].classList.remove("ativo");

        }
        botoes[1].classList.add("ativo");
    }
}
