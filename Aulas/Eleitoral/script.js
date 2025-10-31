function mudarCorDeFundo(cor){
    document.body.style.backgroundColor = cor;
}

function transformar(){
    var corEscolhida = prompt("Digite a cor escolhida em inglês");
    if(corEscolhida == null){
        return
    }
    mudarCorDeFundo(corEscolhida);
    alert("O fundo da página agora é: " + corEscolhida + "!");
}
function verificacao(){
    let nomeInput = document.getElementById('nome');
    let idadeInput = document.getElementById('idade');
    let resultadoMessage = document.getElementById('resultado');

    let nome = nomeInput.value.trim();
    let idade = parseInt(idadeInput.value);

    let vereador = 18;
    let prefeitoDeputadoJuizPaz = 21;
    let governador = 30;
    let senadorPresidente = 35;
    let mensagem = "";
    let cargosElegiveis = [];

    if(!nome || isNaN(idade)){
        mensagem = "Nome e Idade devem ser preenchidos!";
        resultadoMessage.innerHTML=mensagem;
        return;
    }

    if(idade < vereador){
        mensagem = "Menor de 18 não pode!!!";

    }else{
        cargosElegiveis.push("Vereador")
        if(idade >= prefeitoDeputadoJuizPaz){
            cargosElegiveis.push("Juiz de Paz", "Prefeito", "Deputado");
            if(idade >= governador){
                cargosElegiveis.push("Governador");
                if(idade >= senadorPresidente){
                    cargosElegiveis.push("Senador", "Presidente");
                }
            }
        }
        mensagem = `${nome} pode ser eleito: \n <br/> ${cargosElegiveis.join("<br><hr>")}`;
    }
    

    resultadoMessage.innerHTML=mensagem;


}