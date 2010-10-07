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
    this.cargas = 1;
    
    this.usar = function(jogador){
        if (jogador.mao.forma_atual == TESOURA) {
            jogador.bonus_ataque = 1;
            this.cargas -= 1;
        }
        if (this.cargas <= 0){
            for (var i = 0; i < jogador.aneis_equipados.length; i++){
                if (jogador.aneis_equipados[i] == this){
                    jogador.aneis_equipados.splice(i,1);
                }
            }
            alert("Anel Destruido");
        }
    }
}
