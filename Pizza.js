//makes the main page show toppings
$("#toppingsPage").show();
$("#formPage").hide();
$("#totalPage").hide();


$(document).ready(function() {

    //three buttons for each page
    $("#nextStep1").click(toppingsPage);

    $("#nextStep2").click(formPage);

    $("#nextStep3").click(getTotal);


    function toppingsPage() {
        $("#totalPage").hide();
        $("#formPage").hide();
        $("#toppingsPage").show();

    }

    function formPage() {
        //Hides all pages but the form page
        $("#toppingsPage").hide();
        $("#totalPage").hide();
        $("#formPage").show();

        var userName = $('#nameForm').val();

        var userPhone = $('#phoneForm').val();

        var userAddress = $('#addressForm').val();

        var userComments = $('#commentsForm').val();

        //puts input into span located on the total page
        $("#nameFormTxt").text(userName);
        $("#phoneFormTxt").text(userPhone);


    }


    function getTotal() {
        //displays only the total page
        $("#toppingsPage").hide();
        $("#formPage").hide();
        $("#totalPage").show();

        var tax = 0.051;
        var fee = 2.00;

        //calculates all the radio/checkboxes
        var sizeCost = $('#pizzaSizeForm[name="radioSize"]:checked').val();
        sizeCost = parseFloat(sizeCost).toFixed(2);

        var crustCost = $('#pizzaCrustForm[name="radioCrust"]:checked').val();
        crustCost = parseFloat(crustCost).toFixed(2);

        var meatCost = $('#pizzaMeatForm[name="checkboxMeat"]:checked').val();
        meatCost = parseFloat(meatCost).toFixed(2);

        var veggieCost = $('#pizzaVeggieForm[name="checkboxCrust"]:checked').val();
        veggieCost = parseFloat(veggieCost).toFixed(2);

        //final outputs
        var subTotal = (crustCost + sizeCost + meatCost + veggieCost).toFixed(2);

        var taxAmount = (tax * subTotal).toFixed(2);

        var grandTotal = (((subTotal * tax) + subTotal) + fee).toFixed(2);

        // text output to the totals page
        $("#subTotalTxt").text(subTotal.toFixed(2));
        $("#grandTotalTxt").text(grandTotal.toFixed(2));

    }

});