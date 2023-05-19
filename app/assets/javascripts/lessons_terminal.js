$(document).ready(function () {
    // Create an instance of the Ace editor 
    let editor = ace.edit("editor");
    editor.setTheme("ace/theme/tomorrow_night");
    editor.session.setMode("ace/mode/javascript");
    // set the element for the console output
    let output = $("#output");
    // override console functions to write to output console
    console.log = function (msg) {
        output.append($("<div>").text(msg));
    };
    console.error = function (msg) {
        output.append($("<div>").css("color", "red").text(msg));
    };
    console.warn = function (msg) {
        output.append($("<div>").css("color", "orange").text(msg));
    };
    // run code on submit button click
    $("#run_code").click(function () {
        // clear output console
        output.empty();
        // get code from editor
        let code = editor.getValue();
        // evaluate code and handle errors
        try {
            eval(code);
        } catch (error) {
            console.error(error.message);
        }
    });
})