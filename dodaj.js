let novUser = document.getElementById("button");

// let ime = document.getElementById("name-value").value;
// let prezime = document.getElementById("lastName-value").value;
// let email_phone = document.getElementById("email-phone-value").value;
// let pass = document.getElementById("password-value").value;

let tabela = document.getElementById("tabela");



    

novUser.addEventListener("click", function(){

    let ime = document.getElementById("name-value").value;
let prezime = document.getElementById("lastName-value").value;
let email_phone = document.getElementById("email-phone-value").value;
let pass = document.getElementById("password-value").value;
    
if(event){
    
    document.getElementById("tabela").innerHTML += `<tbody>
                                                         <tr>
                                                             <td>${ime}</td>
                                                             <td>${prezime}</td>
                                                             <td>${email_phone}</td>
                                                             <td>${pass}</td>
    
                                                         </tr>
    
                                                     </tbody>
                                                     <br/>`;
    
                                                     
    
    }});
