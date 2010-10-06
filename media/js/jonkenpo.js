var EMPATE = 0;
var VITORIA = 1;
var DERROTA = -1;
var TABELA_RESULTADOS = [];
TABELA_RESULTADOS[1] = [];
TABELA_RESULTADOS[2] = [];
TABELA_RESULTADOS[3] = [];
TABELA_RESULTADOS[1][1] = EMPATE;
TABELA_RESULTADOS[1][2] = DERROTA;
TABELA_RESULTADOS[1][3] = VITORIA;
TABELA_RESULTADOS[2][1] = VITORIA;
TABELA_RESULTADOS[2][2] = EMPATE;
TABELA_RESULTADOS[2][3] = DERROTA;
TABELA_RESULTADOS[3][1] = DERROTA;
TABELA_RESULTADOS[3][2] = VITORIA;
TABELA_RESULTADOS[3][3] = EMPATE;


function verificar_vitoria(jogador, adversario){
    var resultado = TABELA_RESULTADOS[jogador.mao.forma_atual][adversario.mao.forma_atual];
    
    if (resultado == VITORIA){
        alert("Você Ganhou");
    } else if (resultado == DERROTA){
        alert("Você perdeu, espero que tenha mais sorte na proxima vez.");
    } else {
        alert("Os dois jogadores colocaram a mesma mão, isto é um empate.");
    }
    return resultado;
} 