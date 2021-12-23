// Tabela INSS >> Exercício 2021
// Atualizar estas variáveis em caso de alteração de valores
const faixa1 = {
    de: 0, ate: 1100, percentual: 0.075
};
const faixa2 = {
    de: 1100.01, ate: 2203.48, percentual: 0.09
};
const faixa3 = {
    de: 2203.49, ate: 3305.22, percentual: 0.12
};
const faixa4 = {
    de: 3305.23, ate: 6433.57, percentual: 0.14
};

const tabelaContribuinteIndividual = {
    codigo1007Percentual: 0.2,
    codigo1163Percentual: 0.11
};

let itemsalarioContribuicao = document.getElementById('salarioContribuicao');

const contribuinteEmpregado = document.getElementById('1');
const contribuinte1007 = document.getElementById('1007');
const contribuinte1163 = document.getElementById('1163');

const tabelaProgressiva = [
    document.getElementById('de1'),
    document.getElementById('ate1'),
    document.getElementById('perc1'),
    document.getElementById('de2'),
    document.getElementById('ate2'),
    document.getElementById('perc2'),
    document.getElementById('de3'),
    document.getElementById('ate3'),
    document.getElementById('perc3'),
    document.getElementById('de4'),
    document.getElementById('ate4'),
    document.getElementById('perc4')
];

const resultadoContribuicaoPorFaixa = [
    document.getElementById('contribuicaFaixa1'),
    document.getElementById('contribuicaFaixa2'),
    document.getElementById('contribuicaFaixa3'),
    document.getElementById('contribuicaFaixa4'),
];

const resultadoContribuinteIndividual = [
    document.getElementById('valorContribuicao1007'),
    document.getElementById('valorContribuicao1163'),
];

tabelaProgressiva[0].innerText = faixa1.de.toFixed(2);
tabelaProgressiva[1].innerText = faixa1.ate.toFixed(2);
tabelaProgressiva[2].innerText = (faixa1.percentual*100).toFixed(2);
tabelaProgressiva[3].innerText = faixa2.de.toFixed(2);
tabelaProgressiva[4].innerText = faixa2.ate.toFixed(2);
tabelaProgressiva[5].innerText = (faixa2.percentual*100).toFixed(2);
tabelaProgressiva[6].innerText = faixa3.de.toFixed(2);
tabelaProgressiva[7].innerText = faixa3.ate.toFixed(2);
tabelaProgressiva[8].innerText = (faixa3.percentual*100).toFixed(2);
tabelaProgressiva[9].innerText = faixa4.de.toFixed(2);
tabelaProgressiva[10].innerText = faixa4.ate.toFixed(2);
tabelaProgressiva[11].innerText = (faixa4.percentual*100).toFixed(2);

const contribuicao = document.getElementById('valorFinalDeContribuicao');

const avisos = document.getElementById('aviso');
let avisoAbaixoDoMinimo = () => { avisos.innerText = '⚠ O salário informado é menor que o valor mínimo de contribuição.'; };
let acimaDoTeto = () => { avisos.innerText = '⚠ O salário informado é maior que o teto de contribuição.'; };

const butaoCalcular = document.getElementById('botaoCalcular');
const botaoResetar = document.getElementById('botaoResetar');
const imprimirPagina = document.getElementById('printThisPage');

const iniciar = () => {
    const calcular = (event) => {
        event.preventDefault();

        let valorInformado = parseFloat(itemsalarioContribuicao.value.replace(',','.'));
        let resultadoFaixa1, resultadoFaixa2, resultadoFaixa3, resultadoFaixa4 = 0;
        let resultadoIndividual1007, resultadoIndividual1163 = 0;

        // if (valorInformado === 0 && valorInformado === '') {
        //     resultadoFaixa1, resultadoFaixa2, resultadoFaixa3, resultadoFaixa4 = 0;
        //     resultadoIndividual1007, resultadoIndividual1163 = 0;
        //     resultadoContribuinteIndividual[0].innerText = '';
        //     resultadoContribuinteIndividual[1].innerText = '';
        //     contribuicao.innerText = '';
        // };

        if (contribuinteEmpregado.checked && valorInformado > 0) {

            if (valorInformado > faixa1.de && valorInformado <= faixa1.ate) {
                resultadoContribuinteIndividual[0].innerText = "";
                resultadoContribuinteIndividual[1].innerText = "";
                resultadoFaixa1 = (valorInformado-faixa1.de)*faixa1.percentual;
                resultadoContribuicaoPorFaixa[0].innerText = resultadoFaixa1.toFixed(2);
                contribuicao.innerText = resultadoFaixa1.toFixed(2).replace('.',',');
            } else if (valorInformado > faixa1.ate) {
                resultadoContribuinteIndividual[0].innerText = "";
                resultadoContribuinteIndividual[1].innerText = "";
                resultadoFaixa1 = (faixa1.ate-faixa1.de)*faixa1.percentual;
                resultadoContribuicaoPorFaixa[0].innerText = resultadoFaixa1.toFixed(2);
            } if (valorInformado >= faixa2.de && valorInformado <= faixa2.ate) {
                resultadoContribuinteIndividual[0].innerText = "";
                resultadoContribuinteIndividual[1].innerText = "";
                resultadoFaixa2 = (valorInformado-faixa2.de)*faixa2.percentual;
                resultadoContribuicaoPorFaixa[1].innerText = resultadoFaixa2.toFixed(2);
                contribuicao.innerText = (resultadoFaixa1+resultadoFaixa2).toFixed(2).replace(";",".");
            } else if (valorInformado > faixa2.ate) {
                resultadoContribuinteIndividual[0].innerText = "";
                resultadoContribuinteIndividual[1].innerText = "";
                resultadoFaixa2 = (faixa2.ate-faixa2.de)*faixa2.percentual;
                resultadoContribuicaoPorFaixa[1].innerText = resultadoFaixa2.toFixed(2);
            } if (valorInformado >= faixa3.de && valorInformado <= faixa3.ate) {
                resultadoContribuinteIndividual[0].innerText = "";
                resultadoContribuinteIndividual[1].innerText = "";
                resultadoFaixa3 = (valorInformado-faixa3.de)*faixa3.percentual;
                resultadoContribuicaoPorFaixa[2].innerText = resultadoFaixa3.toFixed(2);
                contribuicao.innerText = (resultadoFaixa1+resultadoFaixa2+resultadoFaixa3).toFixed(2).replace(";",".");
            } else if (valorInformado > faixa3.ate) {
                resultadoContribuinteIndividual[0].innerText = "";
                resultadoContribuinteIndividual[1].innerText = "";
                resultadoFaixa3 = (faixa3.ate-faixa3.de)*faixa3.percentual;
                resultadoContribuicaoPorFaixa[2].innerText = resultadoFaixa3.toFixed(2);
            } if (valorInformado >= faixa4.de && valorInformado <= faixa4.ate) {
                resultadoContribuinteIndividual[0].innerText = "";
                resultadoContribuinteIndividual[1].innerText = "";
                resultadoFaixa4 = (valorInformado-faixa4.de)*faixa4.percentual;
                resultadoContribuicaoPorFaixa[3].innerText = resultadoFaixa4.toFixed(2);
                contribuicao.innerText = (resultadoFaixa1+resultadoFaixa2+resultadoFaixa3+resultadoFaixa4).toFixed(2).replace(";",".");
            } else if (valorInformado > faixa4.ate) {
                resultadoContribuinteIndividual[0].innerText = "";
                resultadoContribuinteIndividual[1].innerText = "";
                resultadoFaixa4 = (faixa4.ate-faixa4.de)*faixa4.percentual;
                resultadoContribuicaoPorFaixa[3].innerText = resultadoFaixa4.toFixed(2);
                contribuicao.innerText = (resultadoFaixa1+resultadoFaixa2+resultadoFaixa3+resultadoFaixa4).toFixed(2).replace(";",".");
            }
        };

        if (contribuinte1007.checked && valorInformado > 0) {
            if (valorInformado > faixa1.de && valorInformado <= faixa4.ate) {
                if (valorInformado < faixa1.ate) {
                    avisoAbaixoDoMinimo();
                } else {
                    avisos.innerText = '';
                };

                resultadoContribuicaoPorFaixa[0].innerText = "";
                resultadoContribuicaoPorFaixa[1].innerText = "";
                resultadoContribuicaoPorFaixa[2].innerText = "";
                resultadoContribuicaoPorFaixa[3].innerText = "";
                resultadoContribuinteIndividual[1].innerText = "";

                resultadoIndividual1007 = valorInformado*tabelaContribuinteIndividual.codigo1007Percentual;
                resultadoContribuinteIndividual[0].innerText = resultadoIndividual1007.toFixed(2).replace('.',',');
                contribuicao.innerText = resultadoIndividual1007.toFixed(2).replace('.',',');
            } else if (valorInformado > faixa4.ate) {
                resultadoIndividual1007 = faixa4.ate*tabelaContribuinteIndividual.codigo1007Percentual;
                contribuicao.innerText = resultadoIndividual1007.toFixed(2).replace('.',',');
                acimaDoTeto();
            };
        };

        if (contribuinte1163.checked && valorInformado > 0) {
            if (valorInformado > faixa1.de && valorInformado <= faixa4.ate) {
                if (valorInformado < faixa1.ate) {
                    avisos.innerText = '⚠ O salário informado é menor que o valor mínimo de contribuição.';
                } else {
                    avisos.innerText = '';
                };

                resultadoContribuicaoPorFaixa[0].innerText = "";
                resultadoContribuicaoPorFaixa[1].innerText = "";
                resultadoContribuicaoPorFaixa[2].innerText = "";
                resultadoContribuicaoPorFaixa[3].innerText = "";
                resultadoContribuinteIndividual[0].innerText = "";

                resultadoIndividual1163 = valorInformado*tabelaContribuinteIndividual.codigo1163Percentual;
                resultadoContribuinteIndividual[1].innerText = resultadoIndividual1163.toFixed(2).replace('.',',');
                contribuicao.innerText = resultadoIndividual1163.toFixed(2).replace('.',',');
            } else if (valorInformado > faixa4.ate) {
                resultadoIndividual1163 = faixa4.ate*tabelaContribuinteIndividual.codigo1163Percentual;
                contribuicao.innerText = resultadoIndividual1163.toFixed(2).replace('.',',');
                avisos.innerText = '⚠ O salário informado é maior que o teto de contribuição.';
            };
        };

        // if (valorInformado >= faixa1.de && valorInformado <= faixa1.ate) {
        //     resultadoFaixa1 = (valorInformado-faixa1.de)*faixa1.percentual;
        //     resultadoContribuicaoPorFaixa[0].innerText = resultadoFaixa1.toFixed(2);
        //     contribuicao.innerText = resultadoFaixa1.toFixed(2).replace('.',',');
        // };
        // if (valorInformado >= faixa2.de && valorInformado <= faixa2.ate) {
        //     resultadoFaixa2 = (valorInformado-faixa2.de)*faixa2.percentual;
        //     resultadoContribuicaoPorFaixa[1].innerText = resultadoFaixa2.toFixed(2);
        // };
        // if (valorInformado >= faixa3.de && valorInformado <= faixa3.ate) {
        //     resultadoFaixa3 = (valorInformado-faixa3.de)*faixa3.percentual;
        //     resultadoContribuicaoPorFaixa[2].innerText = resultadoFaixa3.toFixed(2);
        // };
        // if (valorInformado >= faixa4.de && valorInformado <= faixa4.ate) {
        //     resultadoFaixa4 = (valorInformado-faixa4.de)*faixa4.percentual;
        //     resultadoContribuicaoPorFaixa[3].innerText = resultadoFaixa4.toFixed(2);
        // };
    };
    botaoCalcular.addEventListener('click', calcular);

    const apagar = (event) => {
        location.reload();
    };
    botaoResetar.addEventListener('click', apagar);

    const imprimir = (event) => {
        window.print();
    };
    imprimirPagina.addEventListener('click', imprimir);

};
document.addEventListener("DOMContentLoaded", iniciar);