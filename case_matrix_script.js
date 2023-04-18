
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



    function displayPages() {
        var eleb = document.getElementsByName('pages');

        for (i = 0; i < eleb.length; i++) {
            if (eleb[i].checked)
                return eleb[i].value;
        }
    }

    const nopp = displayPages();



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
            return 157;
        } else if (size == "A4P" && coverType == "wib") {
            return 222;
        } else if (size == "A5P" && coverType == "ppc") {
            return 157;
        } else if (size == "A5P" && coverType == "wib") {
            return 222;
        } else if (size == "A4L" && coverType == "ppc") {
            return 157;
        } else if (size == "A4L" && coverType == "wib") {
            return 222;
        } else if (size == "A5L" && coverType == "ppc") {
            return 157;
        } else if (size == "A5L" && coverType == "wib") {
            return 222;
        } else if (size == "ROP" && coverType == "ppc") {
            return 157;
        } else if (size == "ROP" && coverType == "wib") {
            return 222;
        } else if (size == "ROL" && coverType == "ppc") {
            return 157;
        } else if (size == "ROL" && coverType == "wib") {
            return 222;
        }
    }

    const setupCost = setup();









    const runcost = () => {
        if (size == "A4P" && coverType == "ppc" && nopp == "320") {
            return 1785;
        } else if (size == "A4P" && coverType == "wib" && nopp == "320") {
            return 2095;
        } else if (size == "A5P" && coverType == "ppc" && nopp == "320") {
            return 1386;
        } else if (size == "A5P" && coverType == "wib" && nopp == "320") {
            return 1696;
        } else if (size == "A4L" && coverType == "ppc" && nopp == "320") {
            return 1815;
        } else if (size == "A4L" && coverType == "wib" && nopp == "320") {
            return 2125;
        } else if (size == "A5L" && coverType == "ppc" && nopp == "320") {
            return 1416;
        } else if (size == "A5L" && coverType == "wib" && nopp == "320") {
            return 1726;
        } else if (size == "ROP" && coverType == "ppc" && nopp == "320") {
            return 1462;
        } else if (size == "ROP" && coverType == "wib" && nopp == "320") {
            return 1772;
        } else if (size == "ROL" && coverType == "ppc" && nopp == "320") {
            return 1492;
        } else if (size == "ROL" && coverType == "wib" && nopp == "320") {
            return 1802;


        } else if (size == "A4P" && coverType == "ppc" && nopp == "640") {
            return 2035;
        } else if (size == "A4P" && coverType == "wib" && nopp == "640") {
            return 2345;
        } else if (size == "A5P" && coverType == "ppc" && nopp == "640") {
            return 1606;
        } else if (size == "A5P" && coverType == "wib" && nopp == "640") {
            return 1916;
        } else if (size == "A4L" && coverType == "ppc" && nopp == "640") {
            return 2095;
        } else if (size == "A4L" && coverType == "wib" && nopp == "640") {
            return 2405;
        } else if (size == "A5L" && coverType == "ppc" && nopp == "640") {
            return 1666;
        } else if (size == "A5L" && coverType == "wib" && nopp == "640") {
            return 1976;
        } else if (size == "ROP" && coverType == "ppc" && nopp == "640") {
            return 1682;
        } else if (size == "ROP" && coverType == "wib" && nopp == "640") {
            return 1992;
        } else if (size == "ROL" && coverType == "ppc" && nopp == "640") {
            return 1742;
        } else if (size == "ROL" && coverType == "wib" && nopp == "640") {
            return 2052;



        }
    }
    const running = runcost();


    const headsetup = () => {
        if (head == "head") {
            return 5;
        } else {
            return 0;
        }
    }

    const headsetupcost = headsetup();



    const headcost = () => {
        if (head == "head") {
            return 320;
        } else {
            return 0;
        }
    }

    const headband = headcost();



    const endscost = () => {
        if (endsType == "colour" && size == "A4P") {
            return 260;
        } else if (endsType == "colour" && size == "A4L") {
            return 370;
        } else if (endsType == "colour" && size == "A5P") {
            return 120;
        } else if (endsType == "colour" && size == "A5L") {
            return 140;
        } else if (endsType == "colour" && size == "ROP") {
            return 120;
        } else if (endsType == "colour" && size == "ROL") {
            return 140;
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
            return 360;
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
            return 11;
        } else {
            return 0;
        }
    }

    const dustsetupcost = dustsetup();



    const dustcost = () => {
        if (dust == "dust") {
            return 150;
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




    const sewruncost = pages * 5


    const sewsetup = () => {
        if (pages > 0) {
            return 15;
        } else {
            return 0;
        }
    }

    const sewsetupcost = sewsetup();






    const totalRunCost = running + headband + ribbonmarker + roundback + dustjacket + shrinkruncost + sewruncost + endsruncost;
    const totalSetupCost = setupCost + sewsetupcost + headsetupcost + ribbonsetupcost + dustsetupcost;


    // --------------------------------------




    // ONLY DISPLAY POSITIVE RESULTS


    const end_results = () => {
        if (endsruncost == 0) {
            return "";
        } else {
            return "Coloured Endpaper cost = £" + endsruncost + " per 1000<br>";
        }
    }
    const show_end_results = end_results();

    const head_results = () => {
        if (headsetupcost == 0) {
            return "";
        } else {
            return "Head and tail band cost = £" + headsetupcost + " setup + £" + headband + " per 1000<br>";
        }
    }
    const show_head_results = head_results();

    const ribbon_results = () => {
        if (ribbonsetupcost == 0) {
            return "";
        } else {
            return "Ribbon marker cost = £" + ribbonsetupcost + " setup + £" + ribbonmarker + " per 1000<br>";
        }
    }
    const show_ribbon_results = ribbon_results();

    const roundback_results = () => {
        if (roundback == 0) {
            return "";
        } else {
            return "Round and backed cost = £" + roundback + " per 1000<br>";
        }
    }
    const show_roundback_results = roundback_results();

    const dust_results = () => {
        if (dustsetupcost == 0) {
            return "";
        } else {
            return "Dustjacket cost = £" + dustsetupcost + " setup + £" + dustjacket + " per 1000<br>";
        }
    }
    const show_dust_results = dust_results();

    const sew_results = () => {
        if (sewsetupcost == 0) {
            return "";
        } else {
            return "Sewing cost = £" + sewsetupcost + " setup + £" + sewruncost + " per 1000<br>";
        }
    }
    const show_sew_results = sew_results();




    // --------------------------------------






    // DISPLAY THE RESULTS SECTION



    document.querySelector('.results').innerHTML =
        "Setup cost = £" + setupCost + "<br>" +
        "Run cost = £" + running + " per 1000<br><br>" +
        show_end_results + show_head_results + show_ribbon_results + show_roundback_results + show_dust_results +
        show_sew_results +

        "<br>Total setup cost = £" + totalSetupCost +
        "<br>Total running cost = £" + totalRunCost;
});

// END OF FORM



// --------------------------------------

