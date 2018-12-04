let napravi = document.getElementById("button");


//let tabela = document.getElementById("tabela")

napravi.addEventListener("click", function(){

    let tabela = document.getElementById("tabela")
    let row = document.getElementById("row-value").value;
    let colum = document.getElementById("colum-value").value;
    

  function getRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }

      let k =0;

    for(let i = 1; i<=row; i++){

        document.getElementById("tabela").innerHTML += `<tr id="${i}">
                                                                
                                                          </tr>` ;

        for(let j = 1; j<=colum; j++){
             k =i*j;

document.getElementById(`${i}`).innerHTML += `<td >Row ${i}, Colum ${j}</td>`;


document.getElementById(`${i}`).style.backgroundColor = getRandomColor() ;







            //  document.getElementById("tabela").innerHTML += `<tr id="${i}">
                                                                
            //                                                 </tr>` ;
           
           
           //<td>Row${i},Colum${j}</td>
           
           
           
                                                            // createCell(ROW.insertCell(i), i, 'row');
            //createCell(tabela.rows[i].insertCell(tabela.rows[i].cells.length), i, 'col');
            
        }
    }

    
                                                     
    
    });
