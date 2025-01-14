const api = "http://localhost:8080";


//comprador
export async function createComprador(data){
    const url = api + "/comprador/create";

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
            },
            body:JSON.stringify(dados),   
        });
        if (!response.ok) {
            throw new Error('Erro na requisição');
        }
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }    
}

export async function loginComprador(data){
    const url = api + "/comprador/login";

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
            },
            body:JSON.stringify(dados),   
        });
        if (!response.ok) {
            throw new Error('Erro na requisição');
        }
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
}


//vendedor
export async function createVendedor(data){
    const url = api + "/vendedor/create";

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
            },
            body:JSON.stringify(dados),   
        });
        if (!response.ok) {
            throw new Error('Erro na requisição');
        }
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function loginVendedor(data){
    const url = api + "/vendedor/login";

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
            },
            body:JSON.stringify(dados),   
        });
        if (!response.ok) {
            throw new Error('Erro na requisição');
        }
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
}