$(document).ready(function () {
    // Create an instance of the Ace editor for each challenge
    let editor1 = ace.edit("editor1");
    editor1.setTheme("ace/theme/tomorrow_night");
    editor1.session.setMode("ace/mode/javascript");

    let editor2 = ace.edit("editor2");
    editor2.setTheme("ace/theme/tomorrow_night");
    editor2.session.setMode("ace/mode/javascript");

    let editor3 = ace.edit("editor3");
    editor3.setTheme("ace/theme/tomorrow_night");
    editor3.session.setMode("ace/mode/javascript");
});

/*=====================================
||     Level 1 challenges checker     ||
=====================================*/
function level_1_challenges(editorId, outputId, challengeNum) {
    // Get the user's code from the editor
    const userCode = ace.edit(editorId).getValue();

    $('#answer_input').val(userCode);
    $('#challenge_id').val(challengeNum);

    $("#" + outputId).removeClass("text-success").addClass("text-danger");
    try {

        // Evaluate the code and capture the console output
        let consoleOutput = '';
        const log = console.log;

        console.log = function (message) {
            consoleOutput += message + '\n';
            log.apply(console, arguments);
        };
        eval(userCode);
        console.log = log;

        if (challengeNum == 1) {
            // Define the expected console output
            const expectedOutput = 'Hello World\n';
            // Check if the output matches the expected output
            if (consoleOutput === expectedOutput) {
                $("#" + outputId).removeClass("text-danger").addClass("text-success").text("Correct!");
            } else {
                $("#" + outputId).text("Incorrect: Please check your code.");
            }
        }
        else if (challengeNum == 2) {
            // Define the expected console output and variable value
            const expectedOutput = 'Mark\n';
            const expectedVariableValue = 'Mark';
            // Check if the output matches the expected output
            if (consoleOutput === expectedOutput && myName === expectedVariableValue) {
                $("#" + outputId).removeClass("text-danger").addClass("text-success").text("Correct!");
            } else {
                $("#" + outputId).text("Incorrect: Please check your code.");
            }
        }
        else {
            const originalAlert = window.alert;
            let alertMessage;
            window.alert = function (message) {
                alertMessage = message;
                originalAlert.apply(window, arguments);
            };

            eval(userCode);
            // Reset the window alert function
            window.alert = originalAlert;
            // Check if the message matches the expected message
            if (alertMessage === 17 && num === 17) {
                $("#" + outputId).removeClass("text-danger").addClass("text-success").text("Correct!");
            } else {
                $("#" + outputId).text("Incorrect: Please check your code.");
            }
        }
        $('#test_result').val($("#" + outputId).text());
    } catch (error) {
        $("#" + outputId).text("Error: " + error.message);
    }
    $('#update_stats').submit();
}

/*=====================================
||     Level 2 challenges checker     ||
=====================================*/
function level_2_challenges(editorId, outputId, challengeNum) {
    // Get the user's code from the editor
    const userCode = ace.edit(editorId).getValue();

    $('#answer_input').val(userCode);
    $('#challenge_id').val(challengeNum + 3);

    $("#" + outputId).removeClass("text-success").addClass("text-danger");
    try {

        // Evaluate the code and capture the console output
        let consoleOutput = '';
        const log = console.log;

        console.log = function (message) {
            consoleOutput += message + '\n';
            log.apply(console, arguments);
        };
        eval(userCode);
        console.log = log;

        if (challengeNum == 1) {

            if (fruit === "mango") {
                $("#" + outputId).removeClass("text-danger").addClass("text-success").text("Correct!");
            } else {
                $("#" + outputId).text("Incorrect: Please check your code.");
            }
        }
        else if (challengeNum == 2) {
            // Define the expected console output and variable value
            const expectedOutput = '25\n';
            // Check if the output matches the expected output
            if (consoleOutput === expectedOutput && number === 25) {
                $("#" + outputId).removeClass("text-danger").addClass("text-success").text("Correct!");
            } else {
                $("#" + outputId).text("Incorrect: Please check your code.");
            }
        }
        else {
            const originalAlert = window.alert;
            let alertMessage;
            window.alert = function (message) {
                alertMessage = message;
                originalAlert.apply(window, arguments);
            };

            eval(userCode);
            // Reset the window alert function
            window.alert = originalAlert;
            // Check if the message matches the expected message
            if (alertMessage === "I love coding" && greetings === "I love coding") {
                $("#" + outputId).removeClass("text-danger").addClass("text-success").text("Correct!");
            } else {
                $("#" + outputId).text("Incorrect: Please check your code.");
            }
        }
        $('#test_result').val($("#" + outputId).text());
    } catch (error) {
        $("#" + outputId).text("Error: " + error.message);
    }
    $('#update_stats').submit();
}

/*=====================================
||     Level 3 challenges checker     ||
=====================================*/
function level_3_challenges(editorId, outputId, challengeNum) {
    // Get the user's code from the editor
    const userCode = ace.edit(editorId).getValue();

    $('#answer_input').val(userCode);
    $('#challenge_id').val(challengeNum + 6);

    $("#" + outputId).removeClass("text-success").addClass("text-danger");
    try {
        eval(userCode);

        if (challengeNum == 1) {
            let numString = myNum + "";
            // Check if the output matches the expected output
            if (myNum !== undefined && typeof (myNum) == "number" && numString.length == 2) {
                $("#" + outputId).removeClass("text-danger").addClass("text-success").text("Correct!");
            } else {
                $("#" + outputId).text("Incorrect: Please check your code.");
            }
        }
        else if (challengeNum == 2) {
            // Check if the output matches the expected output
            if (videoGame !== undefined && typeof (videoGame) == "object" && videoGame.length == 4) {
                $("#" + outputId).removeClass("text-danger").addClass("text-success").text("Correct!");
            } else {
                $("#" + outputId).text("Incorrect: Please check your code.");
            }
        }
        else {

            if (isSleepingGood && typeof (isSleepingGood) == "boolean") {
                $("#" + outputId).removeClass("text-danger").addClass("text-success").text("Correct!");
            } else {
                $("#" + outputId).text("Incorrect: Please check your code.");
            }
        }
        $('#test_result').val($("#" + outputId).text());
    } catch (error) {
        $("#" + outputId).text("Error: " + error.message);
    }
    $('#update_stats').submit();
}

/*=====================================
||     Level 4 challenges checker     ||
=====================================*/
function level_4_challenges(editorId, outputId, challengeNum) {
    // Get the user's code from the editor
    const userCode = ace.edit(editorId).getValue();

    $('#answer_input').val(userCode);
    $('#challenge_id').val(challengeNum + 9);

    $("#" + outputId).removeClass("text-success").addClass("text-danger");
    try {

        // Evaluate the code and capture the console output
        let consoleOutput = '';
        const log = console.log;

        console.log = function (message) {
            consoleOutput += message + '\n';
            log.apply(console, arguments);
        };
        eval(userCode);
        console.log = log;

        if (challengeNum == 1) {
            let sum = x + y;
            // Check if the output matches the expected output
            if (consoleOutput === sum + '\n') {
                $("#" + outputId).removeClass("text-danger").addClass("text-success").text("Correct!");
            } else {
                $("#" + outputId).text("Incorrect: Please check your code.");
            }
        }
        else if (challengeNum == 2) {
            // Define the expected console output and variable value
            const expectedOutput = raiseTo ** 4;
            // Check if the output matches the expected output
            if (consoleOutput === expectedOutput + '\n') {
                $("#" + outputId).removeClass("text-danger").addClass("text-success").text("Correct!");
            } else {
                $("#" + outputId).text("Incorrect: Please check your code.");
            }
        }
        else {
            // Check if the message matches the expected message
            if (consoleOutput === '5\n') {
                $("#" + outputId).removeClass("text-danger").addClass("text-success").text("Correct!");
            } else {
                $("#" + outputId).text("Incorrect: Please check your code.");
            }
        }
        $('#test_result').val($("#" + outputId).text());
    } catch (error) {
        $("#" + outputId).text("Error: " + error.message);
    }
    $('#update_stats').submit();
}

/*=====================================
||     Level 5 challenges checker     ||
=====================================*/
function level_5_challenges(editorId, outputId, challengeNum) {
    // Get the user's code from the editor
    const userCode = ace.edit(editorId).getValue();

    $('#answer_input').val(userCode);
    $('#challenge_id').val(challengeNum + 12);

    $("#" + outputId).removeClass("text-success").addClass("text-danger");
    try {

        // Evaluate the code and capture the console output
        let consoleOutput = '';
        const log = console.log;

        console.log = function (message) {
            consoleOutput += message + '\n';
            log.apply(console, arguments);
        };
        eval(userCode);
        console.log = log;

        if (challengeNum == 1) {
            // Check if the output matches the expected output
            if (consoleOutput === '13\n' && x !== undefined && y !== undefined) {
                $("#" + outputId).removeClass("text-danger").addClass("text-success").text("Correct!");
            } else {
                $("#" + outputId).text("Incorrect: Please check your code.");
            }
        }
        else if (challengeNum == 2) {
            // Check if the output matches the expected output
            if (consoleOutput === '4\n' && num1 !== undefined && num2 !== undefined) {
                $("#" + outputId).removeClass("text-danger").addClass("text-success").text("Correct!");
            } else {
                $("#" + outputId).text("Incorrect: Please check your code.");
            }
        }
        else {
            // Check if the message matches the expected message
            if (consoleOutput === 'IzukuMidoriya\n' && name1 !== undefined && name2 !== undefined) {
                $("#" + outputId).removeClass("text-danger").addClass("text-success").text("Correct!");
            } else {
                $("#" + outputId).text("Incorrect: Please check your code.");
            }
        }
        $('#test_result').val($("#" + outputId).text());
    } catch (error) {
        $("#" + outputId).text("Error: " + error.message);
    }
    $('#update_stats').submit();
}

/*=====================================
||     Level 6 challenges checker     ||
=====================================*/
function level_6_challenges(editorId, outputId, challengeNum) {
    // Get the user's code from the editor
    const userCode = ace.edit(editorId).getValue();

    $('#answer_input').val(userCode);
    $('#challenge_id').val(challengeNum + 15);

    $("#" + outputId).removeClass("text-success").addClass("text-danger");
    try {

        // Evaluate the code and capture the console output
        let consoleOutput = '';
        const log = console.log;

        console.log = function (message) {
            consoleOutput += message + '\n';
            log.apply(console, arguments);
        };
        eval(userCode);
        console.log = log;

        if (challengeNum == 1) {
            // Check if the output matches the expected output
            if (name1 == name2 && consoleOutput === true + '\n') {
                $("#" + outputId).removeClass("text-danger").addClass("text-success").text("Correct!");
            } else {
                $("#" + outputId).text("Incorrect: Please check your code.");
            }
        }
        else if (challengeNum == 2) {
            // Check if the output matches the expected output
            if (consoleOutput === false + '\n' && x === 15 && y === 10) {
                $("#" + outputId).removeClass("text-danger").addClass("text-success").text("Correct!");
            } else {
                $("#" + outputId).text("Incorrect: Please check your code.");
            }
        }
        else {
            // Check if the message matches the expected message
            if (consoleOutput === false + '\n' && stringNum === '17' && num === 17) {
                $("#" + outputId).removeClass("text-danger").addClass("text-success").text("Correct!");
            } else {
                $("#" + outputId).text("Incorrect: Please check your code.");
            }
        }
        $('#test_result').val($("#" + outputId).text());
    } catch (error) {
        $("#" + outputId).text("Error: " + error.message);
    }
    $('#update_stats').submit();
}

/*=====================================
||     Level 7 challenges checker     ||
=====================================*/
function level_7_challenges(editorId, outputId, challengeNum) {
    // Get the user's code from the editor
    const userCode = ace.edit(editorId).getValue();

    $('#answer_input').val(userCode);
    $('#challenge_id').val(challengeNum + 18);

    $("#" + outputId).removeClass("text-success").addClass("text-danger");
    try {

        // Evaluate the code and capture the console output
        let consoleOutput = '';
        const log = console.log;

        console.log = function (message) {
            consoleOutput += message + '\n';
            log.apply(console, arguments);
        };
        eval(userCode);
        console.log = log;

        if (challengeNum == 1) {
            // Check if the output matches the expected output
            if (x === true && y === false && consoleOutput === false + '\n') {
                $("#" + outputId).removeClass("text-danger").addClass("text-success").text("Correct!");
            } else {
                $("#" + outputId).text("Incorrect: Please check your code.");
            }
        }
        else if (challengeNum == 2) {
            // Check if the output matches the expected output
            if (consoleOutput === false + '\n' && num1 !== undefined && num2 !== undefined) {
                $("#" + outputId).removeClass("text-danger").addClass("text-success").text("Correct!");
            } else {
                $("#" + outputId).text("Incorrect: Please check your code.");
            }
        }
        else {
            // Check if the message matches the expected message
            if (consoleOutput === true + '\n' && boolean1 === true && boolean2 === false) {
                $("#" + outputId).removeClass("text-danger").addClass("text-success").text("Correct!");
            } else {
                $("#" + outputId).text("Incorrect: Please check your code.");
            }
        }
        $('#test_result').val($("#" + outputId).text());
    } catch (error) {
        $("#" + outputId).text("Error: " + error.message);
    }
    $('#update_stats').submit();
}

// // Define the function to check the code for a specific challenge
// function checkCode(editorId, outputId) {
//     $("#" + outputId).removeClass("text-success").addClass("text-danger");
//     try {
//         const code = ace.edit(editorId).getValue();
//         eval(code);
//         if (typeof fruit !== "undefined" && fruit === "mango" ||
//             typeof color !== "undefined" && color === "blue" ||
//             typeof add === "function" && add(2, 3) === 5) {

//             $("#" + outputId).removeClass("text-danger").addClass("text-success").text("Correct!");
//         } else {
//             $("#" + outputId).text("Incorrect: Please check your code.");
//         }
//     } catch (error) {
//         $("#" + outputId).text("Error: " + error.message);
//     }
// }