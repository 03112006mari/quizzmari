const nomes = ["Mariana", "Paula", "Maria Eduarda", "Fernando",
    "Amanda", "Gustavo", "Gabriel"];
    export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
    }
    export const nome = aleatorio(nomes)