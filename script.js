class DeuErro extends Error {
    constructor(mensagem){
      super(mensagem);
      this.name = "Meu Erro";
    }
  }

class Produto {
    constructor(nome, dataCadastro, descricao, preco){
        this.nome = nome
        this.dataCadastro = dataCadastro
        this.descricao = descricao
        this.preco = preco
    }
    mostrar_dados_Produto(){
        try {
            return this.montar_dados_Produto()
        } catch(erro){
            console.log(erro)
        }
    }

    montar_dados_Produto(){
        if(this.nome != "" && this.dataCadastro != "" && this.descricao != "" && this.preco != ""){ 
            return `
            <h4 id="nome">${this.nome}</h4>
            <p>${this.descricao}</p>
            <p id="p6" style="font-weight: bold">R$${this.preco},00</p>
            <p id="p1">${this.dataCadastro}</p>
            </br>
            `
        } else {
            throw new DeuErro("Deu erro,faltando alguma informação. ;)")
        } 
    }
}

class mostrar_Produto_Destaques extends Produto {
    constructor(nome, dataCadastro, descricao, preco, imagemDestaque){
        super(nome, dataCadastro, descricao, preco)
        this.imagemDestaque = imagemDestaque
    }
    mostrar_Produto_Destaques(){
        try {
            return this.montar_Produto_Destaques()
        } catch(erro){
            console.log(erro.message)
        }
    }

    montar_Produto_Destaques(){
        if(this.nome != "" && this.dataCadastro != "" && this.descricao != "" && this.preco != "" && this.imagemDestaque != ""){
            return `
            <img src="${this.imagemDestaque}" 
            <h2 id="nomeDest">${this.nome}</h2>
            <p id="p2">${this.descricao}</br
            </br>
            <p id="p3">R$${this.preco}</p>
            <p id="p4">${this.datadeCadastro}</p>
            </br>
            `
        } else{
            throw new DeuErro("Deu erro,faltando alguma informação. ;)")
        }
    }
}

const produto1 = new Produto("Cachorra Golden","R$:2.500" ,"Fêmea");
console.log(produtoDestaque);

const produto2 = new Produto("Cachorra Rottweiller", "R$:800", "Fêmea");
console.log(produtoDestaque);

const produto3 = new Produto("Cachorra Salamoieda", "R$:4.000");
console.log(produtoDestaque);

const produtoDestaque = new ProdutoDestaque("Cachorra Golden",  "R$:2.500",  "Fêmea");
console.log(mostrar_Produto_Destaques);

var destaque = document.getElementById("produto-destaque");
destaque.insertAdjacentHTML('afterbegin', mostrar_Produto_Destaques());

var prod = document.getElementById("produtoDestaque");
prod.insertAdjacentHTML('afterbegin', produtoDestaque.mostrar_dados_Produto());
var prod = document.getElementById("produtoDestaque");
prod.insertAdjacentHTML('afterbegin', produtoDestaque.mostrar_dados_Produto());
var prod = document.getElementById("produtoDestaque");
prod.insertAdjacentHTML('afterbegin', produtoDestaque.mostrar_dados_Produto());