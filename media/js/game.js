function init(){
    for (var i = 0; i < jogador_1.obeliscos_equipados; i++){
        jogador_1.usar_obelisco(obeliscos_equipados[i], jogador_2);
    }
    for (var i = 0; i < jogador_2.obeliscos_equipados; i++){
        jogador_1.usar_obelisco(obeliscos_equipados[i], jogador_1);
    }
    
}

function step(){
    var vencedor = verificar_vitoria(jogador_1, jogador_2);
}