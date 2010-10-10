function Obelisco(){
    this.bonus_base_ataque = 0;
    this.bonus_base_defesa = 0;
    this.pontos_de_vida = 1;
    
    this.ativar_efeito = function(jogador, oponente){
        return false;   
    };
    
    this.desativar_efeito = function(jogador, oponente){
        return false;
    };
}

function ObeliscoDosHeroisDeOutrora(){
    Obelisco.apply(this);
    this.ativar_efeito = function(jogador, oponente){
        jogador.bonus_base_ataque += 1;
    };
    
}

function ObeliscoDoEscudoDeCarvalho(){
    Obelisco.apply(this);
    this.ativar_efeito = function(jogador, oponente){
        jogador.bonus_base_defesa += 1;
    };
}

function ObeliscoDaQuedaDaTorre(){
    Obelisco.apply(this);
    this.ativar_efeito = function(jogador, oponente){
        oponente.bonus_base_defesa -= 1;
    };
}

function ObeliscoDoPunhoFraco(){
    Obelisco.apply(this);
    this.ativar_efeito = function(jogador, oponente){
        oponente.bonus_base_ataque -= 1;
    };
}