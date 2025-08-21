/*
Objetivo: Vamos usar o serviço da viaCEP para buscar um endereço baseado no CEP.

https://viacep.com.br/ws/01001000/json/

- Crie uma função que receba como argumento o cep e retorne um objeto com logradouro, cidade e estado. 
 */

async function retornaEndereco(cep) {
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

        if (!response.ok) {
            throw new Error(`erro Http ${response.status}`)
        }

        const data = await response.json();

        if (data.Error) {
            throw new Error('cep não encontrado')
        }

        return {
            logradouro: data.logradouro,
            cidade: data.localidade,
            estado: data.uf,

        };
    } catch (error) {
        console.error('erro ao buscar cep', error);
        throw error;
    }
}

// chamando a função

retornaEndereco('29090370')
    .then(endereco => console.log(endereco));
// isso tinha na versão do professor mas aqui tá dando erro, tá faltando try
// .catch (erro => console.log(erro));