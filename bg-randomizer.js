$(document).ready(function() {
    var colors = ["#FFEBEE", "#FCE4EC", "#F3E5F5", "#EDE7F6", "#E8EAF6", "#E3F2FD", "#E1F5FE", "#E0F7FA", "#E0F2F1", "#E8F5E9", "#F1F8E9", "#F9FBE7", "#FFFDE7", "#FFF8E1", "#FFF3E0", "#FBE9E7"];
    $(".randombg").each(function() {
        var rand = Math.floor(Math.random() * colors.length);
        $(this).css("background-color", colors[rand]);

    });
});