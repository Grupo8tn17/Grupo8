const axios = require("axios");
const cepApi = require("../cepApi");

module.exports = {
  /*  buscarEnderecoPorCep */
  /* busca o cep na api */

  async pesquisaPorCep(cep) {
    const { data } = await axios({
      ...cepApi,
      method: "get",
      url: `/cep/v1/${cep}`,
    });

    console.log(data)

    /*   se não retornar dados cria mensagem de erro */

    if (!data) throw new Error("Cep não encontrado");

    /* Se retorna dados, formata os dados */

    return {
      cep: data.cep,
      uf: data.state,
      cidade: data.city,
      bairro: data.neighborhood,
      rua: data.street,
      servico: data.service,
    };
  },
}; 
 
