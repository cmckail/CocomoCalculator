//    document.write("<HR>");
//  This function is used to reset all fields.
function clearStatus() {
    status = "";
}

//  The following functions are ro initialize all fields.
function promptFactor() {
    status = "Factor";
}
function promptLanguage() {
    status = "Language";
}
function promptType() {
    status = "Type";
}
function promptQ1() {
    status = "Q1";
}
function promptQ2() {
    status = "Q2";
}
function promptQ3() {
    status = "Q3";
}
function promptQ4() {
    status = "Q4";
}
function promptQ5() {
    status = "Q5";
}
function promptQ6() {
    status = "Q6";
}
function promptQ7() {
    status = "Q7";
}
function promptQ8() {
    status = "Q8";
}
function promptQ9() {
    status = "Q9";
}
function promptQ10() {
    status = "Q10";
}
function promptQ11() {
    status = "Q11";
}
function promptQ12() {
    status = "Q12";
}
function promptQ13() {
    status = "Q13";
}
function promptQ14() {
    status = "Q14";
}

// This functin will be used when user have more than one option to choose such as the radio
// buttons.  It will take a field and return the value of that field.
function getValue(field) {
    for (i = 0; i < field.length; i++) {
        if (field[i].checked) return Number(field[i].value);
    }
    return 0;
}

//  This finction is used to round numbers.  It will take two parameters: value and precision.
//  It will round that value to that precision.
function roundOff(value, precision) {
    value = "" + value; //convert value to string
    precision = parseInt(precision);

    var whole = "" + Math.round(value * Math.pow(10, precision));
    var decPoint = whole.length - precision;

    if (decPoint != 0) {
        result = whole.substring(0, decPoint);
        result += ".";
        result += whole.substring(decPoint, whole.length);
    } else {
        result = whole;
    }
    return result;
}

//  This function is used to show the total of weighting (the 14 questions.)
function showWeightingTotal() {
    var Total = 0;
    //  get the first value of the first question.
    Total = getValue(document.calculateForm.Q1Field);

    //  add values of each question to the the previous total
    Total = Total + getValue(document.calculateForm.Q2Field);
    Total = Total + getValue(document.calculateForm.Q3Field);
    Total = Total + getValue(document.calculateForm.Q4Field);
    Total = Total + getValue(document.calculateForm.Q5Field);
    Total = Total + getValue(document.calculateForm.Q6Field);
    Total = Total + getValue(document.calculateForm.Q7Field);
    Total = Total + getValue(document.calculateForm.Q8Field);
    Total = Total + getValue(document.calculateForm.Q9Field);
    Total = Total + getValue(document.calculateForm.Q10Field);
    Total = Total + getValue(document.calculateForm.Q11Field);
    Total = Total + getValue(document.calculateForm.Q12Field);
    Total = Total + getValue(document.calculateForm.Q13Field);
    Total = Total + getValue(document.calculateForm.Q14Field);

    //  store total on the total field.
    document.calculateForm.total.value = roundOff(Total, 2);
}

//  This function is to check if the input entered is integer.
function isInt(string) {
    var val = parseInt(string);
    return val >= 0;
}

// This function will count the total of the first table which is total of the measurement parameter values
//  which will be used to calculate the function point
function showCountTotal() {
    var factor = 0;
    var language = 0;
    var Total1 = 0;
    var i = 0;
    var j = 0;
    var k = 0;
    var l = 0;
    var m = 0;
    factor = getValue(document.calculateForm.FactorField);
    //  this if is to check if the user forgot to check a weighting factor and he/she will see an alert message.
    if (factor == 0) {
        alert("You must select a weighting factor.");
    }
    //  The next if statements are to check if user inputs are valid which it should be integers
    else {
        var count1 = document.calculateForm.inputs;
        if (!isInt(count1.value)) {
            alert("Number of user inputs must be integer.");
            document.calculateForm.inputs.focus();
            return false;
        }
        var count2 = document.calculateForm.outputs;
        if (!isInt(count2.value)) {
            alert("Number of user outputs must be integer.");
            document.calculateForm.outputs.focus();
            return false;
        }
        var count3 = document.calculateForm.inquiries;
        if (!isInt(count3.value)) {
            alert("Number of Inquiries must be integer.");
            document.calculateForm.inquiries.focus();
            return false;
        }
        var count4 = document.calculateForm.files;
        if (!isInt(count4.value)) {
            alert("Number of files must be integer.");
            document.calculateForm.files.focus();
            return false;
        }
        var count5 = document.calculateForm.interfaces;
        if (!isInt(count5.value)) {
            alert("Number of external interfaces must be integer.");
            document.calculateForm.interfaces.focus();
            return false;
        }
        //  calculations when user choose simple weighting factor
        if (factor == 1) {
            i = Number(document.calculateForm.inputs.value);
            j = Number(document.calculateForm.outputs.value);
            k = Number(document.calculateForm.inquiries.value);
            l = Number(document.calculateForm.files.value);
            m = Number(document.calculateForm.interfaces.value);
            document.calculateForm.tinputs.value = roundOff(i * 3, 2);
            document.calculateForm.toutputs.value = roundOff(j * 4, 2);
            document.calculateForm.tinquiries.value = roundOff(k * 3, 2);
            document.calculateForm.tfiles.value = roundOff(l * 7, 2);
            document.calculateForm.tinterfaces.value = roundOff(m * 5, 2);
            Total1 = i * 3 + j * 4 + k * 3 + l * 7 + m * 5;
            document.calculateForm.total1.value = roundOff(Total1, 2);
        }
        // calculation when user choose average weighting factor
        else if (factor == 2) {
            i = Number(document.calculateForm.inputs.value);
            j = Number(document.calculateForm.outputs.value);
            k = Number(document.calculateForm.inquiries.value);
            l = Number(document.calculateForm.files.value);
            m = Number(document.calculateForm.interfaces.value);
            document.calculateForm.tinputs.value = roundOff(i * 4, 2);
            document.calculateForm.toutputs.value = roundOff(j * 5, 2);
            document.calculateForm.tinquiries.value = roundOff(k * 4, 2);
            document.calculateForm.tfiles.value = roundOff(l * 10, 2);
            document.calculateForm.tinterfaces.value = roundOff(m * 7, 2);
            Total1 = i * 4 + j * 5 + k * 4 + l * 10 + m * 7;
            document.calculateForm.total1.value = roundOff(Total1, 2);
        }
        // calculation when user choose teh complex weighting factor
        else if (factor == 3) {
            i = Number(document.calculateForm.inputs.value);
            j = Number(document.calculateForm.outputs.value);
            k = Number(document.calculateForm.inquiries.value);
            l = Number(document.calculateForm.files.value);
            m = Number(document.calculateForm.interfaces.value);
            document.calculateForm.tinputs.value = roundOff(i * 6, 2);
            document.calculateForm.toutputs.value = roundOff(j * 7, 2);
            document.calculateForm.tinquiries.value = roundOff(k * 6, 2);
            document.calculateForm.tfiles.value = roundOff(l * 15, 2);
            document.calculateForm.tinterfaces.value = roundOff(m * 10, 2);
            Total1 = i * 6 + j * 7 + k * 6 + l * 15 + m * 10;
            document.calculateForm.total1.value = roundOff(Total1, 2);
        }
    }
}

function unfocus_tinputs() {
    document.calculateForm.outputs.focus();
}
function unfocus_toutputs() {
    document.calculateForm.inquiries.focus();
}
function unfocus_tinquiries() {
    document.calculateForm.files.focus();
}
function unfocus_tfiles() {
    document.calculateForm.interfaces.focus();
}
function unfocus_tinterfaces() {
    document.calculateForm.countTotal.focus();
}
function unfocus_total1() {
    document.calculateForm.countTotal.focus();
}
function unfocus_total() {
    document.calculateForm.showTotalWeight.focus();
}
function unfocus_fpTotal() {
    document.calculateForm.FP.focus();
}
function unfocus_LOCTotal() {
    document.calculateForm.LOCFP.focus();
}
function unfocus_Effort() {
    document.calculateForm.calculate.focus();
}
function unfocus_Duration() {
    document.calculateForm.calculate.focus();
}

// This function will calculate the function points based on the teh results form teh previous two tables
function showFP() {
    var totalfp = 0;
    showCountTotal();
    showWeightingTotal();
    totalfp =
        Number(document.calculateForm.total1.value) *
        (0.65 + 0.01 * Number(document.calculateForm.total.value));
    document.calculateForm.fpTotal.value = roundOff(totalfp, 2);
}

// This function will calculate the Lines of code (LOC)
function showLOC() {
    var language = 0;
    var loc = 0;
    showFP();
    language = getValue(document.calculateForm.LanguageField);
    //  This is to check if user selected a language or not.
    if (language == 0) {
        alert("You must select a Language");
    } else {
        loc = language * Number(document.calculateForm.fpTotal.value);
        // store result in the LOCTotal text box.
        document.calculateForm.LOCTotal.value = roundOff(loc, 2);
    }
}
//  This fucntion will take the LOC which was calculated in previous step and divided it by 1000 and then
//  takes values from table with selected project type and apply them to the eqations.
//  Final results will be stored in the Efort and Duartion text boxes
function showE() {
    var E = 0;
    var D = 0;
    var type = 0;
    showLOC();
    type = getValue(document.calculateForm.typeField);
    if (type == 0) {
        alert("You must select a project type.");
    } else if (type == 1) {
        E =
            2.4 *
            Math.pow(
                Number(document.calculateForm.LOCTotal.value) / 1000,
                1.05
            );
        D = 2.5 * Math.pow(E, 0.38);
        document.calculateForm.Effort.value = roundOff(E, 2);
        document.calculateForm.Duration.value = roundOff(D, 2);
    } else if (type == 2) {
        E =
            3.0 *
            Math.pow(
                Number(document.calculateForm.LOCTotal.value) / 1000,
                1.12
            );
        D = 2.5 * Math.pow(E, 0.35);
        document.calculateForm.Effort.value = roundOff(E, 2);
        document.calculateForm.Duration.value = roundOff(D, 2);
    } else if (type == 3) {
        E =
            3.6 *
            Math.pow(Number(document.calculateForm.LOCTotal.value) / 1000, 1.2);
        D = 2.5 * Math.pow(E, 0.32);
        document.calculateForm.Effort.value = roundOff(E, 2);
        document.calculateForm.Duration.value = roundOff(D, 2);
    }
    document.calculateForm.Reset.focus();
}
