function Jogador(){
    this.pontos_de_vida = 10;
    this.pontos_de_vida_maximos = 10;
    this.nome = "";
    this.mao = null;
    this.bonus_base_ataque = 0;
    this.bonus_ataque = 0;
    this.bonus_base_defesa = 0;
    this.bonus_defesa = 0;
    this.aneis = [];
    this.aneis_equipados = [];
    this.obeliscos = [];
    this.obeliscos_equipados = [];
    this.bracelete_equipado = null;
    
    this.usar_anel = function(anel){
        anel.usar(this);
    };
    
    this.usar_bracelete = function(bracelete, oponente){
        bracelete.calcular_bonus(this, oponente);
    };
    
    this.usar_obelisco = function(obelisco, oponente){
        obelisco.ativar_efeito(this, oponente)        
    };
}