/*
Objetivo: Vamos usar o serviço da viaCEP para buscar um endereço baseado no CEP.

https://viacep.com.br/ws/01001000/json/

- Crie uma função que receba como argumento o cep e retorne um objeto com logradouro, cidade e estado. 
 */

function retornaEndereco(cep) {
    return fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            return {
                logradouro: data.logradouro,
                cidade: data.localidade,
                estado: data.uf,
            };
        })
}

// chamando a função

retornaEndereco('01001000')
    .then(endereco => console.log(endereco));