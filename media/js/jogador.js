function Jogador(){
    this.nome = "";
    this.mao = null;
    this.bonus_ataque = 0;
    
    this.aneis = [];
    
    this.usar_anel = function(anel){
        anel.usar(this);
    }
    
    this.aneis_equipados = function(){
        return this.aneis;
    }
    
    
}