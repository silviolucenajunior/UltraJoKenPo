function Bracelete(){
    
}

function BraceleteFogo(){
    Bracelete.apply(this);
    
    this.calcular_bonus = function(jogador, oponente){
        alert("Bracelete usado");
        switch (jogador.mao.forma_atual){
            case TESOURA:
                oponente.pontos_de_vida -= 1;
                break;
            case PAPEL:
                jogador.pontos_de_vida -= 1;
        }
    }
}

function BraceleteAgua(){
    Bracelete.apply(this);
    
    this.calcular_bonus = function(jogador, oponente){
        switch (jogador.mao.forma_atual){
            case PEDRA:
                oponente.pontos_de_vida -= 1;
                break;
            case TESOURA:
                jogador.pontos_de_vida -= 1;
        }
    }
}

function BraceleteVento(){
    Bracelete.apply(this);
    
    this.calcular_bonus = function(jogador, oponente){
        switch (jogador.mao.forma_atual){
            case PAPEL:
                oponente.pontos_de_vida -= 1;
                break;
            case PEDRA:
                jogador.pontos_de_vida -= 1;
        }
    }
}