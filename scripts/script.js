// function procuraSobremesa(valorDoInput) {

// }
function procuraSobremesa(valorDoInput) {
    return listaDeSobremesas.filter((sobremesa)=> {
       if(sobremesa.nome.toLowerCase().includes(valorDoInput.toLowerCase())){
         return sobremesa
       }
    });
    
  }