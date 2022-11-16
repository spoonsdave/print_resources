
// START OF FORM

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();



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
        var eleb = document.getElementsByName('ends');

        for (i = 0; i < eleb.length; i++) {
            if (eleb[i].checked)
                return eleb[i].value;
        }
    }

    const endsType = displayEnds();




    function displayFoil() {
        var eleb = document.getElementsByName('foil');

        for (i = 0; i < eleb.length; i++) {
            if (eleb[i].checked)
                return eleb[i].value;
        }
    }

    const foilType = displayFoil();





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






    function displayDust() {
        var ele = document.getElementsByName('dust');

        for (i = 0; i < ele.length; i++) {
            if (ele[i].checked)
                return ele[i].value;
        }
    }

    const dust = displayDust();


    const text_pp = parseInt(document.querySelector('#text_pp').value);
    const text_mic = parseInt(document.querySelector('#text_mic').value);










    // CALCULATIONS

    // General Make Ready (includes file copies delivery)
    const makeready = 318

    // Unit Costs
    const A4Wib = 1.40
    const A5Wib = 1.10
    const InbWib = 1.25
    const A4PPC = 1.15
    const A5PPC = 0.95
    const InbPPC = 1.05

    // Endpaper Unit Costs
    const A4Printed = 0
    const A5Printed = 0
    const InbPrinted = 0
    const A4White = 0.08
    const A5White = 0.04
    const InbWhite = 0.06
    const A4Colour = 0.20
    const A5Colour = 0.10
    const InbColour = 0.15

    // Foil Blocking Costs
    const foil_makeready = 75
    const fc_die = 65
    const spine_die = 55
    const foil_run = 0.08

    // Dustjacket Costs
    const dust_makeready = 25
    const jacket_run = 0.25

    // Head & Tail Band Costs
    const head_run = 0.25

    // Ribbon Bookmark Costs
    const ribbon_run = 0.30

    // Boxes and Delivery Costs
    const fileCopies_delivery = 18
    const pallet_delivery = 60
    const box = 0.50

    // Spine thickness
    const spine = Math.round(((text_pp * text_mic) / 2000) + 3);

    // Boxes + Pallets - 1000 books =
    const deliveryMR = 78

    const no_in_a_box = 152 / (spine)


    const actual_no_in_a_box = () => {
        if (size == "A4") {
            return no_in_a_box;
        } else if (size == "A5") {
            return no_in_a_box * 2;
        } else if (size == "Inb") {
            return no_in_a_box * 1.5;
        }
    }
    const final_no_in_a_box = actual_no_in_a_box();

    const box_no = Math.round(1000 / final_no_in_a_box)
    const box_cost = Math.round(box_no * 1.75)










    const runcost = () => {
        if (size == "A4" && coverType == "ppc") {
            return A4PPC;
        } else if (size == "A4" && coverType == "wib") {
            return A4Wib;
        } else if (size == "A5" && coverType == "ppc") {
            return A5PPC;
        } else if (size == "A5" && coverType == "wib") {
            return A5Wib;
        } else if (size == "Inb" && coverType == "ppc") {
            return InbPPC;
        } else if (size == "Inb" && coverType == "wib") {
            return InbWib;
        }
    }
    const running = runcost();


    const ends_cost = () => {
        if (size == "A4" && endsType == "print") {
            return A4Printed;
        } else if (size == "A4" && endsType == "white") {
            return A4White;
        } else if (size == "A4" && endsType == "colour") {
            return A4Colour;
        } else if (size == "A5" && endsType == "print") {
            return A5Printed;
        } else if (size == "A5" && endsType == "white") {
            return A5White;
        } else if (size == "A5" && endsType == "colour") {
            return A5Colour;
        } else if (size == "Inb" && endsType == "print") {
            return InbPrinted;
        } else if (size == "Inb" && endsType == "white") {
            return InbWhite;
        } else if (size == "Inb" && endsType == "colour") {
            return InbColour;
        }
    }
    const endpaper_cost = ends_cost();





    const foilsetupcost = () => {
        if (foilType == "FC") {
            return foil_makeready + fc_die;
        } else if (foilType == "Spine") {
            return foil_makeready + spine_die;
        } else if (foilType == "FCSpine") {
            return foil_makeready + fc_die + spine_die;
        } else if (foilType == "None") {
            return 0;
        }
    }
    const foilsetup = foilsetupcost();





    const foilruncost = () => {
        if (foilType == "None") {
            return 0;
        } else {
            return foil_run;
        }
    }

    const foilrun = foilruncost();




    const headcost = () => {
        if (head == "head") {
            return head_run;
        } else {
            return 0;
        }
    }

    const headband = headcost();




    const ribboncost = () => {
        if (ribbon == "ribbon") {
            return ribbon_run;
        } else {
            return 0;
        }
    }

    const ribbonmarker = ribboncost();






    const dustruncost = () => {
        if (dust == "dust") {
            return jacket_run;
        } else {
            return 0;
        }
    }

    const dust_run = dustruncost();

    const dustMRcost = () => {
        if (dust == "dust") {
            return dust_makeready;
        } else {
            return 0;
        }
    }

    const dust_MR = dustMRcost();








    const totalSetupCost = makeready + dust_MR + foilsetup + deliveryMR;
    const totalRunCost = running + endpaper_cost + headband + ribbonmarker + dust_run + foilrun + (box_cost / 1000);


    // --------------------------------------



    // ONLY DISPLAY POSITIVE RESULTS


    const end_results = () => {
        if (endpaper_cost == 0) {
            return "";
        } else {
            return "Endpaper cost = £" + (endpaper_cost * 1000) + "<br>";
        }
    }
    const show_end_results = end_results();



    const foil_results = () => {
        if (foilsetup == 0) {
            return "";
        } else {
            return "Foil cost = £" + foilsetup + " setup + £" + (foilrun * 1000) + " per 1000<br>";
        }
    }
    const show_foil_results = foil_results();


    const head_results = () => {
        if (headband == 0) {
            return "";
        } else {
            return "Head and tail band cost = £" + (headband * 1000) + " per 1000<br>";
        }
    }
    const show_head_results = head_results();


    const ribbon_results = () => {
        if (ribbonmarker == 0) {
            return "";
        } else {
            return "Ribbon marker cost = £" + (ribbonmarker * 1000) + " per 1000<br>";
        }
    }
    const show_ribbon_results = ribbon_results();


    const dust_results = () => {
        if (dust_MR == 0) {
            return "";
        } else {
            return "Dustjacket cost = £" + dust_MR + " setup + £" + (dust_run * 1000) + " per 1000<br>";
        }
    }
    const show_dust_results = dust_results();






    // DISPLAY THE RESULTS SECTION



    document.querySelector('.results').innerHTML =
        "Setup cost = £" + makeready + "<br>" +
        "Run cost = £" + (running * 1000) + " per 1000<br><br>" +
        //        "Endpaper cost = £" + (endpaper_cost * 1000) +
        show_end_results + show_foil_results + show_head_results + show_ribbon_results + show_dust_results +

        "<br>Delivery cost = £ " + deliveryMR + " setup + £" + box_cost + " per 1000<br>" +

        "<br>Total setup cost = £" + totalSetupCost +
        "<br>Total running cost = £" + Math.round(totalRunCost * 1000)
        ;
});





