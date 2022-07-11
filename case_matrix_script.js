
// START OF FORM

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const sections = parseInt(document.querySelector('#sections').value);



    // --------------------------------------


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



    function displayCorner() {
        var ele = document.getElementsByName('corner');

        for (i = 0; i < ele.length; i++) {
            if (ele[i].checked)
                return ele[i].value;
        }
    }

    const corner = displayCorner();


    function displayElastic() {
        var ele = document.getElementsByName('elastic');

        for (i = 0; i < ele.length; i++) {
            if (ele[i].checked)
                return ele[i].value;
        }
    }

    const elastic = displayElastic();



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
        if (coverType == "ppc") {
            return 137;
        } else if (coverType == "wib") {
            return 239;
        }
    }

    const setupCost = setup();



    const runcost = () => {
        if (size == "A4P" && coverType == "ppc") {
            return 2100;
        } else if (size == "A4P" && coverType == "wib") {
            return 2600;
        } else if (size == "A5P" && coverType == "ppc") {
            return 1680;
        } else if (size == "A5P" && coverType == "wib") {
            return 2160;
        } else if (size == "A4L" && coverType == "ppc") {
            return 2260;
        } else if (size == "A4L" && coverType == "wib") {
            return 2750;
        }
    }
    const running = runcost();

    const headcost = () => {
        if (head == "head") {
            return 330;
        } else {
            return 0;
        }
    }

    const headband = headcost();




    const ribboncost = () => {
        if (ribbon == "ribbon") {
            return 330;
        } else {
            return 0;
        }
    }

    const ribbonmarker = ribboncost();




    const roundcost = () => {
        if (round == "round") {
            return 400;
        } else {
            return 0;
        }
    }

    const roundback = roundcost();



    const dustcost = () => {
        if (dust == "dust") {
            return 170;
        } else {
            return 0;
        }
    }

    const dustjacket = dustcost();


    const cornercost = () => {
        if (corner == "corner") {
            return 360;
        } else {
            return 0;
        }
    }

    const roundcorner = cornercost();


    const cornersetupcost = () => {
        if (corner == "corner") {
            return 369;
        } else {
            return 0;
        }
    }

    const roundcornersetup = cornersetupcost();


    const elasticcost = () => {
        if (elastic == "elastic") {
            return 320;
        } else {
            return 0;
        }
    }

    const elasticruncost = elasticcost();


    const elasticsetupcost = () => {
        if (elastic == "elastic") {
            return 244;
        } else {
            return 0;
        }
    }

    const elasticsetupcosts = elasticsetupcost();



    const shrinkcost = () => {
        if (shrink == "shrink") {
            return 270;
        } else {
            return 0;
        }
    }

    const shrinkruncost = shrinkcost();





    const sewruncost = sections * 110


    const sewsetup = () => {
        if (sections > 0) {
            return 40;
        } else {
            return 0;
        }
    }

    const sewsetupcost = sewsetup();




    const totalRunCost = running + headband + ribbonmarker + roundback + dustjacket + roundcorner + elasticruncost + shrinkruncost + sewruncost;
    const totalSetupCost = setupCost + roundcornersetup + elasticsetupcosts + sewsetupcost;


    // --------------------------------------






    // DISPLAY THE RESULTS SECTION



    document.querySelector('.results').innerHTML =
        "Setup cost = £" + setupCost + "<br>" +
        "Run cost = £" + running + " per 1000<br><br>" +
        "Head and tail band cost = £" + headband + " per 1000<br>" +
        "Ribbon marker cost = £" + ribbonmarker + " per 1000<br>" +
        "Round and backed cost = £" + roundback + " per 1000<br>" +
        "Dustjacket cost = £" + dustjacket + " per 1000<br>" +
        "Round Corner cost = £" + roundcornersetup + " setup + £" + roundcorner + " per 1000<br>" +
        "Elastic closure cost = £" + elasticsetupcosts + " setup + £" + elasticruncost + " per 1000<br>" +
        "Shrinkwrapping cost = £" + shrinkruncost + " per 1000<br>" +
        "Sewing cost = £" + sewsetupcost + " setup + £" + sewruncost + " per 1000<br>" +
        
        
        "<br>Total setup cost = £" + totalSetupCost +
        "<br>Total running cost = £" + totalRunCost;
});

// END OF FORM



// --------------------------------------

