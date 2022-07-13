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



    const covergm = ((((coverweight * height * width) / 1000000) * coverpp) / 2);
    const textgm = ((((textweight * height * width) / 1000000) * textpp) / 2);
    const bookweight = Math.ceil(covergm + textgm);
    const totalweight = ((bookweight * quantity) / 1000);
    const boxquantity = Math.ceil((boxkg / bookweight) * 1000)
    const noofboxes = Math.ceil(quantity / boxquantity)

    // British Standard Pallets - 1200x1000mm - 15 6" boxes per row - 6 boxes high - 75 boxes per pallet - pallet height 7"
    const noofBSpallets = Math.ceil(noofboxes/75)
    const boxesperBSpallet = Math.ceil(noofboxes / noofBSpallets)
    const BSpalletweight = Math.ceil((boxesperBSpallet * boxkg) + 10)

// Euro Pallets - 1200x800mm - 12 6" boxes per row - 6 boxes high - 72 boxes per pallet - pallet height 7"
const noofEuropallets = Math.ceil(noofboxes/72)
const boxesperEuropallet = Math.ceil(noofboxes / noofEuropallets)
const Europalletweight = Math.ceil((boxesperEuropallet * boxkg) + 10)

// B1 Pallets - 1020x720mm - 8 6" boxes per row - 6 boxes high - 48 boxes per pallet - pallet height 7"
const noofB1pallets = Math.ceil(noofboxes/48)
const boxesperB1pallet = Math.ceil(noofboxes / noofB1pallets)
const B1palletweight = Math.ceil((boxesperB1pallet * boxkg) + 10)

// S1 Pallets - 900x640mm - 6 6" boxes per row - 6 boxes high - 36 boxes per pallet - pallet height 7"
const noofS1pallets = Math.ceil(noofboxes/36)
const boxesperS1pallet = Math.ceil(noofboxes / noofS1pallets)
const S1palletweight = Math.ceil((boxesperS1pallet * boxkg) + 10)




    //display the results

    document.querySelector('.results').innerHTML = bookweight + " gm per copy" + "<br>" +
        totalweight + " kg total weight" + "<br>" +
        boxquantity + " copies per " + boxkg + "kg box" + "<br>" +
        noofboxes + " boxes in total<br><br>Pallet sizes (based on 8kg 12x9x6 inch boxes)<br><br>" +
        //BS pallets
        noofBSpallets + " x British Standard Pallets - 1200mm (l) x 1000mm (w) x 1100mm (h)<br>" +
        boxesperBSpallet + " boxes per pallet - " + 
        BSpalletweight + "kg per pallet<br><br>" +
        //Euro pallets
        noofEuropallets + " x Euro Pallets - 1200mm (l) x 800mm (w) x 1100mm (h)<br>" +
        boxesperEuropallet + " boxes per pallet - " + 
        Europalletweight + "kg per pallet<br><br>" +
        //B1 pallets
        noofB1pallets + " x B1 Pallets - 1020mm (l) x 720mm (w) x 1100mm (h)<br>" +
        boxesperB1pallet + " boxes per pallet - " + 
        B1palletweight + "kg per pallet<br><br>" +
        //S1 pallets
        noofS1pallets + " x SRA1 Pallets - 900mm (l) x 640mm (w) x 1100mm (h)<br>" +
        boxesperS1pallet + " boxes per pallet - " + 
        S1palletweight + "kg per pallet<br><br>";

});



