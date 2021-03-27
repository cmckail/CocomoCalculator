$(document).ready(function () {
    $("form").submit(function (e) {
        console.log("running");
        e.preventDefault();
        showCountTotal();
    });

    const factors = {
        inputs: {
            1: 3,
            2: 4,
            3: 6,
        },
        outputs: {
            1: 4,
            2: 5,
            3: 7,
        },
        inquiries: {
            1: 3,
            2: 4,
            3: 6,
        },
        files: {
            1: 7,
            2: 10,
            3: 15,
        },
        interfaces: {
            1: 5,
            2: 7,
            3: 10,
        },
    };

    const levels = {
        "c#": {
            level: 6,
            average: 54,
        },
        java: {
            level: 6,
            average: 53,
        },
        javascript: {
            level: 7,
            average: 47,
        },
        python: {
            level: 6,
            average: 53,
        },
    };

    function showCountTotal() {
        let count1 = $("#numInputs");
        if (!isInt(count1.val())) {
            alert("Number of user inputs must be integer.");
            count1.focus();
            return false;
        }
        let count2 = $("#numOutputs");
        if (!isInt(count2.val())) {
            alert("Number of user outputs must be integer.");
            $("#numOutputs").focus();
            return false;
        }
        let count3 = $("#numInq");
        if (!isInt(count3.val())) {
            alert("Number of Inquiries must be integer.");
            $("#numInq").focus();
            return false;
        }
        let count4 = $("#numFiles");
        if (!isInt(count4.val())) {
            alert("Number of files must be integer.");
            $("#numFiles").focus();
            return false;
        }
        let count5 = $("#numExF");
        if (!isInt(count5.val())) {
            alert("Number of external interfaces must be integer.");
            $("#numExF").focus();
            return false;
        }
        let i = Number($("#numInputs").val());
        let j = Number($("#numOutputs").val());
        let k = Number($("#numInq").val());
        let l = Number($("#numFiles").val());
        let m = Number($("#numExF").val());

        let totalI = i * factors.inputs[parseInt($("#numInputSelect").val())];
        let totalO = j * factors.inputs[parseInt($("#numOutputSelect").val())];
        let totalInq = k * factors.inputs[parseInt($("#numInqSelect").val())];
        let totalF = l * factors.inputs[parseInt($("#numFileSelect").val())];
        let totalEx = m * factors.inputs[parseInt($("#numExFSelect").val())];
        let total = totalI + totalO + totalInq + totalF + totalEx;

        $("#total").val(total);

        function isInt(string) {
            return parseInt(string) >= 0;
        }
    }
});
