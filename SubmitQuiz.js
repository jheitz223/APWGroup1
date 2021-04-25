let startTime = 0;

function Timer() {

    startTime = getTime();

}

//Runs when submit button is clicked
function SubmitQuiz() {

    let endTime = getTime();
    let quizTime = (endTime - startTime) / 1000;

//  Stores number of correct answers
    let correct = 0;

//  Check answers:
//  Art:
    if (document.getElementById('multchoiceQ1A2').checked)
        correct++; 
    if (document.getElementById('multchoiceQ2A3').checked)
        correct++;
    if (document.getElementById('multchoiceQ3A3').checked)
        correct++;
    if (document.getElementById('multchoiceQ4A1').checked)
        correct++;
//  Entertainment:
    if (document.getElementById('multchoiceQ5A4').checked)
        correct++;
    if (document.getElementById('multchoiceQ6A1').checked)
        correct++;
    if (document.getElementById('multchoiceQ7A2').checked)
        correct++;
    if (document.getElementById('multchoiceQ8A3').checked)
        correct++;
//  Geography:
    if (document.getElementById('multchoiceQ9A2').checked)
        correct++;
    if (document.getElementById('multchoiceQ10A1').checked)
        correct++;
    if (document.getElementById('multchoiceQ11A3').checked)
        correct++;
    if (document.getElementById('multchoiceQ12A4').checked)
        correct++;
//  History:
    if (document.getElementById('multchoiceQ13A3').checked)
        correct++;
    if (document.getElementById('multchoiceQ14A3').checked)
        correct++;
    if (document.getElementById('multchoiceQ15A1').checked)
        correct++;
    if (document.getElementById('multchoiceQ16A4').checked)
        correct++;
//  Science:
    if (document.getElementById('multchoiceQ17A4').checked)
        correct++;
    if (document.getElementById('multchoiceQ18A2').checked)
        correct++;
    if (document.getElementById('multchoiceQ19A3').checked)
        correct++;
    if (document.getElementById('multchoiceQ20A3').checked)
        correct++;
//  Sports:
    if (document.getElementById('multchoiceQ21A2').checked)
        correct++;
    if (document.getElementById('multchoiceQ22A4').checked)
        correct++;
    if (document.getElementById('multchoiceQ23A4').checked)
        correct++;
    if (document.getElementById('multchoiceQ24A3').checked)
        correct++;

    alert("Score: " + correct + " Time: " + quizTime);

};