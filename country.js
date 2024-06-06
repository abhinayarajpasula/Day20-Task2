document.addEventListener('DOMContentLoaded', () => {
    const countryButton = document.getElementById('get-country-info');
    const countryResult = document.getElementById('country-result');

    countryButton.addEventListener('click', () => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                const randomCountry = data[Math.floor(Math.random() * data.length)];
                countryResult.innerHTML = `
                    <h3>${randomCountry.name.common}</h3>
                    <p>Capital: ${randomCountry.capital ? randomCountry.capital[0] : 'N/A'}</p>
                    <p>Population: ${randomCountry.population.toLocaleString()}</p>
                    <p>Region: ${randomCountry.region}</p>
                `;
            })
            .catch(error => {
                countryResult.innerHTML = `<p>Error fetching country data: ${error.message}</p>`;
                console.error('Error:', error);
            });
    });
});