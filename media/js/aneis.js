var OFENSIVO = 1;
var DEFENSIVO = -1;

function Anel(){
    this.tipo = null;
    this.cargas = 0;
    
    this.usar = function(jogador){
        return false;
    }
}

function AnelDaForcaDoMetal(){
    Anel.apply(this);
    
    this.tipo = OFENSIVO;
    this.cargas = 5;
    
    this.usar = function(jogador){
        if (jogador.mao.forma_atual == TESOURA) {
            jogador.bonus_ataque = 1;
            this.carga -= 1;
        }
    }
}
