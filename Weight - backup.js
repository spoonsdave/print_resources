const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const width = parseInt(document.querySelector('#width').value);
    const coverweight = parseInt(document.querySelector('#coverweight').value);
    const coverpp = parseInt(document.querySelector('#coverpp').value);
    const textweight = parseInt(document.querySelector('#textweight').value);
    const textpp = parseInt(document.querySelector('#textpp').value);
    const quantity = parseInt(document.querySelector('#quantity').value);
    const boxkg = parseInt(document.querySelector('#boxkg').value);
    const boxpallet = parseInt(document.querySelector('#boxpallet').value);



    const covergm = ((((coverweight * height * width) / 1000000) * coverpp) / 2);
    const textgm = ((((textweight * height * width) / 1000000) * textpp) / 2);
    const bookweight = Math.ceil(covergm + textgm);
    const totalweight = ((bookweight * quantity) / 1000);
    const boxquantity = Math.ceil((boxkg / bookweight) * 1000)
    const noofboxes = Math.ceil(quantity / boxquantity)
    const noofpallets = (noofboxes / boxpallet)
    const palletsrounded = noofpallets.toFixed(2);



    //display the results

    document.querySelector('.results').innerHTML = bookweight + " gm per copy" + "<br>" +
        totalweight + " kg total weight" + "<br>" +
        boxquantity + " copies per " + boxkg + "kg box" + "<br>" +
        noofboxes + " boxes in total on " + palletsrounded + " pallets";

});



