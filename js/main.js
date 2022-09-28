$(document).ready(function() {
        $(`#inicio`).click(function() {
                $(`form`).slideDown();
        })

        $(`#cancelar`).click(function() {
                $(`form`).slideUp();
        })

        $(`form`).validate({
                rules: {
                        titulo: {
                                required: true
                        },
                        autor: {
                                required: false
                        },
                        paginas: {
                                required: true
                        },
                },
                messages: {
                        titulo:"Opa! Faltou o título",
                        paginas:"Opa! Quantas páginas?"
                }
        })
})


const form = document.getElementById("form-tbr");
const titulo = [];
const autor = [];
const paginas = [];



let linhas = "";
form.addEventListener("submit", function(e){
        e.preventDefault();

        adicionaLinha();
        atualizaTabela();
       // atualizaPaginas();
});

function adicionaLinha() {
        const inputTituloLivro = document.getElementById("titulo");
        const inputAutorLivro = document.getElementById("autor");
        const inputPaginasLivro = document.getElementById("paginas");

        if (titulo.includes(inputTituloLivro.value)) {
                alert(`O livro: ${inputTituloLivro.value} já foi adicionado :)` );
        } else {

        titulo.push(inputTituloLivro.value);
        autor.push(inputAutorLivro.value);
        paginas.push(parseFloat(inputPaginasLivro.value));


        let linha = "<tr>";
        linha += `<td>${inputTituloLivro.value}</td>`;
        linha += `<td>${inputAutorLivro.value}</td>`;
        linha += `<td>${inputPaginasLivro.value}</td>`;
        linha += "</tr>"

        linhas += linha;
}
        inputTituloLivro.value = "";
        inputAutorLivro.value = "";
        inputPaginasLivro.value = "";
}

function atualizaTabela() {
        const corpoTabela = document.querySelector("tbody");
        corpoTabela.innerHTML = linhas;
}





/*function atualizaPaginas() {
        const inputTotalPaginas = document.getElementsById("paginas");

        let total = "<tr>";
        pag += `<td>${inputTotalPaginas.value}</td>`;
        pag += "</tr>"

        total += pag;

}

function atualizaPaginas() {
        const totalPaginas = document.querySelector("tfoot");
        totalPaginas.innerHTML = total;
}*/

