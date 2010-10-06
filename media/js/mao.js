var PEDRA = 1;
var PAPEL = 2;
var TESOURA = 3;


function Mao(){
    this.forma_atual = 1;
    this.tipo = "NORMAL";
    
    this.papel = function(){
        this.forma_atual = PAPEL;
        return this.forma_atual;
    };
    
    this.tesoura = function(){
        this.forma_atual = TESOURA;
        return this.forma_atual;
    };
    
    this.pedra = function(){
        this.forma_atual = PEDRA;
        return this.forma_atual;    
    };
    
    this.vitoria = function(jogador, oponente){
        alert("Você não me vencerá.");
        return false;
    };
    
    this.derrota = function(jogador, oponente){
        alert("Isto foi apenas um golpe de sorte.");
    };
    
    this.pegar_dano_infligido = function(mao_adversario){
        return 1;    
    };
    
    this.pegar_dano_sofrido = function(mao_adversaio){
        return 0;
    };
    
    this.calcular_bonus_addon = function(jogador, oponente, addon){
        
        
    };
}

//A Mão de Metal favorece o tipo Tesoura, provocando mais dano quando vence usando este tipo, entretanto é fraca contra Terra, sofrendo mais danos quando
//perde para um Mão de Terra.
function MaoDeMetal(){
    Mao.apply(this); //Maneira que encontrei para usar herança em javascript
    
    this.tipo = "METAL";
    
    this.pegar_dano_infligido = function(mao_adversario){
         if(this.forma_atual == TESOURA){
            return 2;
         } else {
            return 1;
         }
    };
    
    this.pegar_dano_sofrido = function(mao_adversario){
        if (mao_adversario.tipo == "TERRA"){
            return 1;
        } else {
            return 0;
        }
    }
}

//A Mão de Madeira favorece o tipo Papel, provocando mais dano quando vence usando este tipo, entretanto é fraca contra Metal, sofrendo mais danos quando
//perde para um Mão de Metal.
function MaoDeMadeira(){
    Mao.apply(this); //Maneira que encontrei para usar herança em javascript
    
    this.tipo = "MADEIRA";
    
    this.pegar_dano_infligido = function(mao_adversario){
         if(this.forma_atual == PAPEL){
            return 2;
         } else {
            return 1;
         }
    };
    
    this.pegar_dano_sofrido = function(mao_adversario){
        if (mao_adversario.tipo == "METAL"){
            return 1;
        } else {
            return 0;
        }
    }
}

//A Mão de Terra favorece o tipo Pedra, provocando mais dano quando vence usando este tipo, entretanto é fraca contra Madeira, sofrendo mais danos quando
//perde para um Mão de Madeira.
function MaoDeTerra(){
    Mao.apply(this); //Maneira que encontrei para usar herança em javascript
    
    this.tipo = "MADEIRA";
    
    this.pegar_dano_infligido = function(mao_adversario){
         if(this.forma_atual == PEDRA){
            return 2;
         } else {
            return 1;
         }
    };
    
    this.pegar_dano_sofrido = function(mao_adversario){
        if (mao_adversario.tipo == "MADEIRA"){
            return 1;
        } else {
            return 0;
        }
    }
}

