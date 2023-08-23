
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

    const quantity = parseInt(document.querySelector('#quantity').value);
    const quantity2 = parseInt(document.querySelector('#quantity2').value);
    const quantity3 = parseInt(document.querySelector('#quantity3').value);
    const quantity4 = parseInt(document.querySelector('#quantity4').value);






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
    const box = 0.60

    // Spine thickness
    const spine = Math.round(((text_pp * text_mic) / 2000) + 3);

    // Boxes + Pallets

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
    const unitcost = runcost();


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







    // --------------------------------------



    //  QUANTITY 1

    const no_of_boxes1 = Math.ceil(quantity / final_no_in_a_box)
    const no_of_pallets1 = Math.ceil(no_of_boxes1 / 48)
    const total_box_cost1 = (no_of_boxes1 * box)

    const quantity1_cost = (
        + Math.ceil(makeready + (unitcost * quantity)
            + total_box_cost1
            + fileCopies_delivery
            + (no_of_pallets1 * pallet_delivery)
            + (endpaper_cost * quantity)
            + (ribbonmarker * quantity)
            + (headband * quantity)
            + (dust_run * quantity)
            + dust_MR));

    //  QUANTITY 2

    const no_of_boxes2 = Math.ceil(quantity2 / final_no_in_a_box)
    const no_of_pallets2 = Math.ceil(no_of_boxes2 / 48)
    const total_box_cost2 = (no_of_boxes2 * box)

    const quantity2_cost = (
        + Math.ceil(makeready + (unitcost * quantity2)
            + total_box_cost2
            + fileCopies_delivery
            + (no_of_pallets2 * pallet_delivery)
            + (endpaper_cost * quantity2)
            + (ribbonmarker * quantity2)
            + (headband * quantity2)
            + (dust_run * quantity2)
            + dust_MR));

    //  QUANTITY 3

    const no_of_boxes3 = Math.ceil(quantity3 / final_no_in_a_box)
    const no_of_pallets3 = Math.ceil(no_of_boxes3 / 48)
    const total_box_cost3 = (no_of_boxes3 * box)

    const quantity3_cost = (
        + Math.ceil(makeready + (unitcost * quantity3)
            + total_box_cost3
            + fileCopies_delivery
            + (no_of_pallets3 * pallet_delivery)
            + (endpaper_cost * quantity3)
            + (ribbonmarker * quantity3)
            + (headband * quantity3)
            + (dust_run * quantity3)
            + dust_MR));

    //  QUANTITY 4

    const no_of_boxes4 = Math.ceil(quantity4 / final_no_in_a_box)
    const no_of_pallets4 = Math.ceil(no_of_boxes4 / 48)
    const total_box_cost4 = (no_of_boxes4 * box)

    const quantity4_cost = (
        + Math.ceil(makeready + (unitcost * quantity4)
            + total_box_cost4
            + fileCopies_delivery
            + (no_of_pallets4 * pallet_delivery)
            + (endpaper_cost * quantity4)
            + (ribbonmarker * quantity4)
            + (headband * quantity4)
            + (dust_run * quantity4)
            + dust_MR));










    // DISPLAY THE RESULTS SECTION


    document.querySelector('.results').innerHTML =

        "<br>Make Ready = £" + makeready
        + "<br>Unit Cost = £" + unitcost
        + "<br>Foil Blocks + Make Ready = £" + foilsetup
        + "<br>Foil Unit Cost = £" + foilrun
        + "<br>Endpaper Unit Cost = £" + endpaper_cost
        + "<br>Ribbon Marker Unit Cost = £" + ribbonmarker
        + "<br>Head & Tail Bands Unit Cost = £" + headband
        + "<br>Dustjacket Unit Cost = £" + dust_run
        + "<br>Dustjacket Setup = £" + dust_MR
        + "<br>"

        + "<br><br>" + quantity + ": £" + quantity1_cost
        + "<br>Number of boxes = " + no_of_boxes1
        + "<br>Number of pallets = " + no_of_pallets1

        + "<br><br>" + quantity2 + ": £" + quantity2_cost
        + "<br>Number of boxes = " + no_of_boxes2
        + "<br>Number of pallets = " + no_of_pallets2

        + "<br><br>" + quantity3 + ": £" + quantity3_cost
        + "<br>Number of boxes = " + no_of_boxes3
        + "<br>Number of pallets = " + no_of_pallets3

        + "<br><br>" + quantity4 + ": £" + quantity4_cost
        + "<br>Number of boxes = " + no_of_boxes4
        + "<br>Number of pallets = " + no_of_pallets4

        ;
});









