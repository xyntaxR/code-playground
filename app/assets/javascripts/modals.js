$(document).ready(function () {
    $(document).on("click", "img", function () {
        var image = $(this).attr("src");
        var name = $(this).attr("badge-name");
        var description = $(this).attr("description");

        $('#badge-image').attr('src', image);
        $('#badge-title').text(name);
        $("#description").text(description);
    })

    $("#achievement_notif").fadeOut(10000);
});
