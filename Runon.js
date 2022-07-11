const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const quantity = parseInt(document.querySelector('#quantity').value);
    const quantityPrice = parseInt(document.querySelector('#quantityPrice').value);
    const runOn = parseInt(document.querySelector('#runOn').value);
    const runOnPrice = parseInt(document.querySelector('#runOnPrice').value);
    const requiredQuantity = parseInt(document.querySelector('#requiredQuantity').value);
    const results = document.querySelector('#results');



    const unitCost = (runOnPrice / runOn);
    const setupCost = (quantityPrice - (unitCost * quantity))
    const thouCost = (unitCost * 1000)
    const required = (setupCost + (unitCost * requiredQuantity))


    const quantityDiff = (runOn - quantity);
    const priceDiff = (runOnPrice - quantityPrice);
    
    //display the results

    document.querySelector('.results').innerHTML = "Setup Cost: £" + setupCost + "<br>" + "Unit Cost: £" + unitCost + "<br>" + "£/1000: £" + thouCost + "<br>" + requiredQuantity + ": £" + required;

});



