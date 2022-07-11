const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const pagesIN = parseInt(document.querySelector('#pagesIN').value);

    const sixteens = Math.floor(pagesIN / 16);
    const afterSixteens = pagesIN - (sixteens * 16);
    const eights = Math.floor(afterSixteens / 8);
    const afterEights = afterSixteens - (eights * 8);
    const fours = Math.floor(afterEights / 4);
    const afterFours = afterEights - (fours * 4);
    const twos = Math.floor(afterFours / 2);
    const afterTwos = afterFours - (twos * 2);
    const ones = afterTwos;

    // alternative for 32s

    const thirtytwos = Math.floor(pagesIN / 32);
    const afterThirtytwos = pagesIN - (thirtytwos * 32);
    const sixteenMinusTTs = Math.floor(afterThirtytwos / 16);

    const n32s = thirtytwos * 32;
    const n16s = sixteens * 16;
    const n8s = eights * 8;
    const n4s = fours * 4;
    const n2s = twos * 2;
    const n1s = ones * 1;

    //display the results

    document.querySelector('.results').innerHTML = "Pages: " + pagesIN + "<br><br>16s: " + sixteens + 
    " (" + n16s + "pp) . . . . . or . . . . . " + thirtytwos + "x32s (" + n32s + "pp) + "  + 
    sixteenMinusTTs + "x16<br>8s: " + eights + "<br>4s: " + fours + "<br>2s: " + twos + "<br>1s: " + 
    ones;

});



