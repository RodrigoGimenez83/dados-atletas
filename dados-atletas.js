class Atleta    {
    constructor(nome, idade, peso, altura, notas)   {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }
    obtemNomeAtleta()   {
        return this.nome;
    }
    obtemIdadeAtleta()  {
        return this.idade;
    }
    obtemPesoAtleta()   {
        return this.peso;
    }
    calculaCategoria()  {
        if(this.idade > 8 && this.idade < 12 )
            return "Infantil"
        if(this.idade > 11 && this.idade < 14 )
            return "Juvenil"
        if(this.idade > 13 && this.idade < 16 )
            return "Intermediário"
        if(this.idade > 15 && this.idade < 31 )
            return "Adulto"
    }
    obtemAlturaAtleta() {
        return this.altura;
    }
    obtemNotasAtleta()  {
        return this.notas;
    }
    obtemIMC()  {
        let IMC = this.peso / (this.altura * this.altura)
        return IMC
    } 
    obtemMediaValida()  {
        let ordenadas = this.notas
        ordenadas.sort(function(a, b)  {
            return a - b;
        })
        let validas = ordenadas.slice(1, -1)
        let soma = validas.reduce(function(total, atual) {
            return (total + atual)
        })
        let media = soma/validas.length
        return media
    }
}

const atleta = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);    

console.log(atleta)
console.log()
console.log("Nome: " + atleta.obtemNomeAtleta());
console.log("Idade: " + atleta.obtemIdadeAtleta());
console.log("Peso: " + atleta.obtemPesoAtleta());
console.log("Altura: " + atleta.obtemAlturaAtleta());
console.log("Notas: " + atleta.obtemNotasAtleta());
console.log("Categoria: " + atleta.calculaCategoria());
console.log("IMC: " + atleta.obtemIMC());
console.log("Média válida: " + atleta.obtemMediaValida());
//console.log(atleta.eliminaMaiorMenor());

