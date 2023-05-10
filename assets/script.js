// const saveInput = () => {
    
// }


// document.getElementById("search-input").addEventListener("keyup", function() {
//     // Código para executar quando o usuário digitar algo na caixa de pesquisa
// });


const saveInput = () => {
    let inputArea = document.getElementById('searchBar').value.toUpperCase(); //Pegando valor e definindo que será tudo maisculo

    let ListItem =  document.querySelectorAll('.item-receita');

    let item = document.getElementsByTagName('h5');

    
    for (let i = 0;i<=item.length; i++){

        let a=ListItem[i].getElementsByTagName('h5')[0];

        let value= a ? a.textContent : ''; //Extrair conteudo de texto da variavel A. A primeira propiedade que não for undefined e não estiver vazia será usada para inicializar a variavel value.
        //Operador Or verifica se o conteudo de a se encaixa em algum dos tipos de formatação e o define naquele que der true


        {value.toLocaleUpperCase().indexOf(inputArea) !== -1
            ? ListItem[i].style.display=""
            : ListItem[i].style.display="none"} 

    }
    
    
    
}

document.getElementById('searchBar').addEventListener('keyup', saveInput);



