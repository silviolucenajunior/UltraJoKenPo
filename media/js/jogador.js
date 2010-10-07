function Jogador(){
    this.pontos_de_vida = 10;
    this.pontos_de_vida_maximos = 10;
    this.nome = "";
    this.mao = null;
    this.bonus_ataque = 0;
    this.aneis = [];
    this.aneis_equipados = [];
    
    this.usar_anel = function(anel){
        anel.usar(this);
    }
        
}