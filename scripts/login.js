import { loginComprador, loginVendedor } from "./controller";

let email, senha, comprador=false, vendedor=false, result;

if(document.querySelector("#emailVendedor")){
    email = document.querySelector("#emailVendedor").value;
    senha = document.querySelector("#senhaVendedor").value; 
    vendedor=true;
}else{
    email = document.querySelector("#emailComprador").value;
    senha = document.querySelector("#senhaComprador").value; 
    comprador=true;
}

document.querySelector("#submeter").addEventListener("click", (event)=>{
    event.preventDefault();
    const data = {
        email: email,
        senha: senha
    };
    if(vendedor){
        result = loginVendedor(data);
        if(result){
            window.location.href = "../vendedorHome.html";
        }
    }else if(comprador){
        result = loginComprador(data);
        if(result){
            window.location.href = "../compradorHome.html";
        }
    }

});