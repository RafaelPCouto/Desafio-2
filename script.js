

async function getAdressByCep() {
    const cep = document.getElementById('cep').value;
    document.getElementById('logradouro').style.marginLeft = '50px';
    document.getElementById('bairro').style.marginLeft = '50px';
    document.getElementById('uf').style.marginLeft = '70px';

    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        console.log(data);
        document.getElementById('logradouro').innerText = data.logradouro;
        document.getElementById('bairro').innerText = data.bairro;
        document.getElementById('uf').innerText = data.uf;
    } catch (error) {
        alert(error.message)
    }

}

