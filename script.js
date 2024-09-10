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
        alert(`Revise o preenchimento dos campos (Erro: ${error.message})`)
    }

}

async function getWeatherPredict() {
    const lat = document.getElementById('latitude').value;
    const long = document.getElementById('longitude').value;

    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`);
        const data = await response.json();
        console.log(data)
        document.getElementById('temperature').innerText = data.current.temperature_2m + 'ºC';

    } catch(error) {
        alert(`Revise o preenchimento dos campos (Erro: ${error.message})`);
    }
}

async function handleButtonClick() {
    await getAdressByCep();
    await getWeatherPredict();
}
