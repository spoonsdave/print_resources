const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const lowestQuantity = parseInt(document.querySelector('#lowestQuantity').value);
    const lowestQuantityPrice = parseInt(document.querySelector('#lowestQuantityPrice').value);
    const highestQuantity = parseInt(document.querySelector('#highestQuantity').value);
    const highestQuantityPrice = parseInt(document.querySelector('#highestQuantityPrice').value);
    const requiredQuantity = parseInt(document.querySelector('#requiredQuantity').value);
    const results = document.querySelector('#results');



    const quantityDiff = (highestQuantity - lowestQuantity);
    const priceDiff = (highestQuantityPrice - lowestQuantityPrice);
    const unitCost = (priceDiff / quantityDiff);
    const setupCost = (lowestQuantityPrice - (unitCost * lowestQuantity))
    const thouCost = (unitCost * 1000)
    const required = (setupCost + (unitCost * requiredQuantity))

    //display the results

    document.querySelector('.results').innerHTML = "Setup Cost: £" + setupCost + "<br>" + "Unit Cost: £" + unitCost + "<br>" + "£/1000: £" + thouCost + "<br>" + requiredQuantity + ": £" + required;

});



