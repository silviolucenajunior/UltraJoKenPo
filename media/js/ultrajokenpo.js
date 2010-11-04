var PEDRA = 1;
var PAPEL = 2;
var TESOURA = 3;


function Mao(){
    this.forma_atual = null;
    
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
        return 1;
    }
}

function MaoDeMetal(){
    Mao.apply(this); //Maneira que encontrei para usar herança em javascript
    
    this.pegar_dano_infligido = function(mao_adversario){
         if(this.forma_atual == TESOURA){
            return 2;
         } else {
            return 1;
         }
    }
}

var mao_de_metal = new MaoDeMetal();
var mao_normal = new Mao();
mao_de_metal.vitoria();
mao_de_metal.derrota();
mao_normal.vitoria();