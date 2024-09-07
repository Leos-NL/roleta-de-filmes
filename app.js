//console.log(dados);
function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos pelo ID
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    console.log(campoPesquisa);

    if (campoPesquisa == ""){
      section.innerHTML = "Nenhum filme foi encontrado!"
      return
    
    };

    campoPesquisa = campoPesquisa.toLowerCase();
    let resultados = "";
    let genero = "";
    let Sinopse = "";
  
    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
      genero = dado.genero.toLowerCase()
      Sinopse = dado.Sinopse.toLowerCase()
      if (genero.includes(campoPesquisa) || Sinopse.includes(campoPesquisa)) {
resultados += `<div class="item-resultado">
                        <h2>
                          <a href="${dado.link}" target="_blank">${dado.Título}</a>
                        </h2>
                        <p class="descrição-meta"> 
                          ${dado.Sinopse}
                        </p>
                        Onde assistir: ${dado.streaming}</a>
                      </div>`;
    };

      };
     

      // Cria uma div para cada resultado, formatando o HTML com as informações do dado
      
  
    // Atribui o HTML gerado para a seção de resultados

    if (!resultados){
      resultados = "<p>Nada foi encontrado</p>"
    }
    
    section.innerHTML = resultados;
  };


