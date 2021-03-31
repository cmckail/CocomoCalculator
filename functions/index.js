$(document).ready(function () {
    $("form").submit(function (e) {
        e.preventDefault();
        calculateTotal();
        calculateKLOC();
        calculateDuration();
        calculateCost();
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

    const cost = 14;

    const constants = {
        a: 2.4,
        b: 1.05,
        c: 2.5,
        d: 0.38,
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

    function calculateTotal() {
        let count1 = $("#numInputs");
        if (!isInt(count1.val())) {
            alert("Number of user inputs must be integer.");
            count1.focus();
            return false;
        }
        let count2 = $("#numOutputs");
        if (!isInt(count2.val())) {
            alert("Number of user outputs must be integer.");
            count2.focus();
            return false;
        }
        let count3 = $("#numInq");
        if (!isInt(count3.val())) {
            alert("Number of Inquiries must be integer.");
            count3.focus();
            return false;
        }
        let count4 = $("#numFiles");
        if (!isInt(count4.val())) {
            alert("Number of files must be integer.");
            return false;
        }
        let count5 = $("#numExF");
        if (!isInt(count5.val())) {
            alert("Number of external interfaces must be integer.");
            $("#numExF").focus();
            return false;
        }
        let input = Number($("#numInputs").val());
        let output = Number($("#numOutputs").val());
        let inq = Number($("#numInq").val());
        let files = Number($("#numFiles").val());
        let ex = Number($("#numExF").val());

        let totalI =
            input * factors.inputs[parseInt($("#numInputSelect").val())];
        let totalO =
            output * factors.inputs[parseInt($("#numOutputSelect").val())];
        let totalInq = inq * factors.inputs[parseInt($("#numInqSelect").val())];
        let totalF =
            files * factors.inputs[parseInt($("#numFileSelect").val())];
        let totalEx = ex * factors.inputs[parseInt($("#numExFSelect").val())];
        let total = totalI + totalO + totalInq + totalF + totalEx;

        $("#total").val(total);

        function isInt(string) {
            return parseInt(string) >= 0;
        }
    }

    function calculateKLOC() {
        let l1 = $("#langOfChoice").val();
        let avg = levels[l1].average;
        let kloc = parseInt($("#total").val()) * avg;
        $("#kloc").val(kloc / 1000);
    }

    function calculateDuration() {
        let total = constants.a * parseFloat($("#kloc").val()) * constants.b;

        let prof = parseFloat($("#langProf").val());
        total *= prof;

        $("#duration").val(total);
    }

    function calculateCost() {
        let total = parseFloat($("#duration").val()) * 4 * 40 * cost;
        $("#cost").val(`$${total.toFixed(2)}`);
    }
});
