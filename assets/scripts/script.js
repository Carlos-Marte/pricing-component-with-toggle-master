// Price objects
const pricesMonthly = {
    'basic': '19.99',
    'professional': '24.99',
    'master': '39.99',
}

const pricesAnnually = {
    'basic': '199.99',
    'professional': '249.99',
    'master': '399.99',
}

// Set prices
const setPrices = (prices) => {
    const h2Prices = document.querySelectorAll(".main__h2");

    h2Prices[0].textContent = prices.basic;
    h2Prices[1].textContent = prices.professional;
    h2Prices[2].textContent = prices.master;
}

// Change prices
const changePrices = () => {
    const checked = document.querySelector("#ts-checkbox").checked;

    setTimeout(() => {
        if(!checked) {
            return setPrices(pricesAnnually);
        }
    
        return setPrices(pricesMonthly);
    }, 300);
}

// Event
document.querySelector("#ts-switch").addEventListener('click', changePrices);