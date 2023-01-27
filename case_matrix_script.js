
// START OF FORM

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();


    // --------------------------------------

    const pages = parseInt(document.querySelector('#pages').value);



    // INPUT SECTION
    const results = document.querySelector('#results');


    // --------------------------------------


    // RADIO BUTTON LISTENER

    function displaySize() {
        var ele = document.getElementsByName('size');

        for (i = 0; i < ele.length; i++) {
            if (ele[i].checked)
                return ele[i].value;
        }
    }

    const size = displaySize();




    function displayCover() {
        var eleb = document.getElementsByName('cover');

        for (i = 0; i < eleb.length; i++) {
            if (eleb[i].checked)
                return eleb[i].value;
        }
    }

    const coverType = displayCover();



    function displayEnds() {
        var eleb = document.getElementsByName('endpapers');

        for (i = 0; i < eleb.length; i++) {
            if (eleb[i].checked)
                return eleb[i].value;
        }
    }

    const endsType = displayEnds();





    function displayHead() {
        var ele = document.getElementsByName('head');

        for (i = 0; i < ele.length; i++) {
            if (ele[i].checked)
                return ele[i].value;
        }
    }

    const head = displayHead();




    function displayRibbon() {
        var ele = document.getElementsByName('ribbon');

        for (i = 0; i < ele.length; i++) {
            if (ele[i].checked)
                return ele[i].value;
        }
    }

    const ribbon = displayRibbon();




    function displayRound() {
        var ele = document.getElementsByName('round');

        for (i = 0; i < ele.length; i++) {
            if (ele[i].checked)
                return ele[i].value;
        }
    }

    const round = displayRound();




    function displayDust() {
        var ele = document.getElementsByName('dust');

        for (i = 0; i < ele.length; i++) {
            if (ele[i].checked)
                return ele[i].value;
        }
    }

    const dust = displayDust();






    function displayShrink() {
        var ele = document.getElementsByName('shrink');

        for (i = 0; i < ele.length; i++) {
            if (ele[i].checked)
                return ele[i].value;
        }
    }

    const shrink = displayShrink();





    // CALCULATIONS




    const setup = () => {
        if (size == "A4P" && coverType == "ppc") {
            return 241;
        } else if (size == "A4P" && coverType == "wib") {
            return 325;
        } else if (size == "A5P" && coverType == "ppc") {
            return 223;
        } else if (size == "A5P" && coverType == "wib") {
            return 297;
        } else if (size == "A4L" && coverType == "ppc") {
            return 246;
        } else if (size == "A4L" && coverType == "wib") {
            return 310;
        }
    }

    const setupCost = setup();









    const runcost = () => {
        if (size == "A4P" && coverType == "ppc") {
            return 2030;
        } else if (size == "A4P" && coverType == "wib") {
            return 2410;
        } else if (size == "A5P" && coverType == "ppc") {
            return 1730;
        } else if (size == "A5P" && coverType == "wib") {
            return 2120;
        } else if (size == "A4L" && coverType == "ppc") {
            return 2080;
        } else if (size == "A4L" && coverType == "wib") {
            return 2480;
        }
    }
    const running = runcost();


    const headsetup = () => {
        if (head == "head") {
            return 11;
        } else {
            return 0;
        }
    }

    const headsetupcost = headsetup();



    const headcost = () => {
        if (head == "head") {
            return 340;
        } else {
            return 0;
        }
    }

    const headband = headcost();



    const endscost = () => {
        if (endsType == "colour" && size == "A4P") {
            return 260;
        } else if (endsType == "colour" && size == "A4L") {
            return 260;
        } else if (endsType == "colour" && size == "A5P") {
            return 120;
        } else if (endsType == "colour" && size == "A5L") {
            return 120;
        } else {
            return 0;
        }
    }

const endsruncost = endscost();


    const ribbonsetup = () => {
        if (ribbon == "ribbon") {
            return 11;
        } else {
            return 0;
        }
    }

    const ribbonsetupcost = ribbonsetup();


    const ribboncost = () => {
        if (ribbon == "ribbon") {
            return 380;
        } else {
            return 0;
        }
    }

    const ribbonmarker = ribboncost();




    const roundcost = () => {
        if (round == "round") {
            return 660;
        } else {
            return 0;
        }
    }

    const roundback = roundcost();



    const dustsetup = () => {
        if (dust == "dust") {
            return 16;
        } else {
            return 0;
        }
    }

    const dustsetupcost = dustsetup();



    const dustcost = () => {
        if (dust == "dust") {
            return 170;
        } else {
            return 0;
        }
    }

    const dustjacket = dustcost();





    const shrinkcost = () => {
        if (shrink == "shrink") {
            return 270;
        } else {
            return 0;
        }
    }

    const shrinkruncost = shrinkcost();




    const sewruncost = pages * 6.1


    const sewsetup = () => {
        if (pages > 0) {
            return 33;
        } else {
            return 0;
        }
    }

    const sewsetupcost = sewsetup();






    const totalRunCost = running + headband + ribbonmarker + roundback + dustjacket + shrinkruncost + sewruncost + endsruncost;
    const totalSetupCost = setupCost + sewsetupcost + headsetupcost + ribbonsetupcost + dustsetupcost;


    // --------------------------------------






    // DISPLAY THE RESULTS SECTION



    document.querySelector('.results').innerHTML =
        "Setup cost = £" + setupCost + "<br>" +
        "Run cost = £" + running + " per 1000<br><br>" +
        "Coloured Endpaper cost = £" + endsruncost + " per 1000<br>" +
        "Head and tail band cost = £" + headsetupcost + " setup + £" + headband + " per 1000<br>" +
        "Ribbon marker cost = £" + ribbonsetupcost + " setup + £" + ribbonmarker + " per 1000<br>" +
        "Round and backed cost = £" + roundback + " per 1000<br>" +
        "Dustjacket cost = £" + dustsetupcost + " setup + £" + dustjacket + " per 1000<br>" +
        "Sewing cost = £" + sewsetupcost + " setup + £" + sewruncost + " per 1000<br>" +

        "<br>Total setup cost = £" + totalSetupCost +
        "<br>Total running cost = £" + totalRunCost;
});

// END OF FORM



// --------------------------------------

