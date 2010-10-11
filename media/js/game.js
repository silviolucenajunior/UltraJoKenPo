function init(){
    for (var i = 0; i < jogador_1.obeliscos_equipados; i++){
        jogador_1.usar_obelisco(obeliscos_equipados[i], jogador_2);
    }
    for (var i = 0; i < jogador_2.obeliscos_equipados; i++){
        jogador_1.usar_obelisco(obeliscos_equipados[i], jogador_1);
    }
    
}

function step(){
    var resultado = verificar_vitoria(jogador_1, jogador_2);
    if (resultado == 1){
        vencedor = jogador_1;
        perdedor = jogador_2;
    } else if (resultado == -1){
        vencedor = jogador_2;
        perdedor = jogador_1;
    }
    
    if (resultado != 0 ){
        for (var i = 0; i < vencedor.aneis_equipados.length; i++){
            var anel_equipado = vencedor.aneis_equipados[i];
            if (anel_equipado.tipo == OFENSIVO){
                vencedor.usar_anel(anel_equipado);
            }   
       }
       for (var i = 0; i < perdedor.aneis_equipados.length; i++){
            var anel_equipado = perdedor.aneis_equipados[i];
            if (anel_equipado.tipo == DEFENSIVO){
                perdedor.usar_anel(anel_equipado);
            }   
       }
       var dano = vencedor.mao.pegar_dano_infligido(perdedor.mao) + vencedor.bonus_ataque + vencedor.bonus_base_ataque;
       perdedor.pontos_de_vida -= dano - (perdedor.bonus_defesa + perdedor.bonus_base_defesa);
       if (vencedor.bracelete_equipado != null){
           vencedor.usar_bracelete(vencedor.bracelete_equipado, perdedor);
       }    
       vencedor.bonus_ataque = 0;
       vencedor.bonus_defesa = 0;
       perdedor.bonus_ataque = 0;
       perdedor.bonus_defesa = 0;
       alert("O Jogador 1 possui " + jogador_1.pontos_de_vida + " pontos de vida");
       alert("O Jogador 2 possui " + jogador_2.pontos_de_vida + " pontos de vida");
    }
}