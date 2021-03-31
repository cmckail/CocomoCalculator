$(document).ready(function () {
  $("form").submit(function (e) {
    e.preventDefault();
    calculateTotal();
    calculateConfidence();
    calculateKLOC();
    calculateDuration();
    calculateCost();
  });

  function calculateConfidence() {
    let ans1 = listValues($("#ans1"));
    let ans2 = listValues($("#ans2"));
    let ans3 = listValues($("#ans3"));
    let ans4 = listValues($("#ans4"));
    let ans5 = listValues($("#ans5"));
    let ans6 = listValues($("#ans6"));
    let score = ans1 + ans2 + ans3 + ans4 + ans5 + ans6;
    console.log(score);
    let total = 31;
    console.log((score / total) * 100);
    $("#score").val((score / total) * 100);
  }

  function listValues(ans) {
    // console.log(ans.val());
    switch (ans.attr("id")) {
      case "ans1":
        switch (ans.val()) {
          case "None":
            return 1;
            break;
          case "Rarely":
            return 3;
            break;
          case "Often":
            return 5;
            break;
        }
        break;
      case "ans2":
        switch (ans.val()) {
          case "None":
            return 1;
            break;
          case "Ok":
            return 2;
            break;
          case "Comf":
            return 4;
            break;
          case "VComf":
            return 6;
            break;
        }
        break;
      case "ans3":
        switch (ans.val()) {
          case "None":
            return 1;
            break;
          case "Rarely":
            return 3;
            break;
          case "Often":
            return 5;
            break;
        }
        break;
      case "ans4":
        switch (ans.val()) {
          case "None":
            return 1;
            break;
          case "Rarely":
            return 3;
            break;
          case "Often":
            return 5;
            break;
        }
        break;
      case "ans5":
        switch (ans.val()) {
          case "None":
            return 1;
            break;
          case "Rarely":
            return 3;
            break;
          case "Often":
            return 5;
            break;
        }
        break;
      case "ans6":
        switch (ans.val()) {
          case "None":
            return 1;
            break;
          case "Rarely":
            return 3;
            break;
          case "Often":
            return 5;
            break;
        }
        break;
    }
  }
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

    let totalI = input * factors.inputs[parseInt($("#numInputSelect").val())];
    let totalO = output * factors.inputs[parseInt($("#numOutputSelect").val())];
    let totalInq = inq * factors.inputs[parseInt($("#numInqSelect").val())];
    let totalF = files * factors.inputs[parseInt($("#numFileSelect").val())];
    let totalEx = ex * factors.inputs[parseInt($("#numExFSelect").val())];
    let total = totalI + totalO + totalInq + totalF + totalEx;

    $("#total").val(total);

    function isInt(string) {
      return parseInt(string) >= 0;
    }
  }

  function calculateKLOC() {
    let l1 = $("#langOfChoice").val();
    let confidence = parseFloat($("#score").val());
    let avg = levels[l1].average;
    let kloc = parseInt($("#total").val()) * avg;
    $("#kloc").val(kloc / 1000);
  }

  function calculateDuration() {
    //COnnor's custom Mod
    let q1 = parseFloat($("#DCQ1").val());
    let q2 = parseFloat($("#DCQ2").val());
    let q3 = parseFloat($("#DCQ3").val());
    let q4 = parseFloat($("#DCQ4").val());
    let DCRatio = (q1 + q2 + q3 + q4) / 4;
    let confidence = parseFloat($("#score").val());
    console.log(`ratio: ${DCRatio} , ${q1}, ${q2}, ${q3}, ${q4}`);
    ///

    let total = constants.a * parseFloat($("#kloc").val()) * constants.b;

    let prof = parseFloat($("#langProf").val());
    total *= prof;
    total *= DCRatio;
    total *= 1 + confidence / 100;

    $("#duration").val(total);
  }

  function calculateCost() {
    let total = parseFloat($("#duration").val()) * 4 * 40 * cost;
    $("#cost").val(`$${total.toFixed(2)}`);
  }
});
