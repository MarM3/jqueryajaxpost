$(document).ready(function () {
  $("#enviar").click(function () {
    let datos = {"pagina": $("#pagina").val()};
    $.ajax({
        type: "post",
        url: "proceso.php",
        data: datos,
        dataType: "html",
        success: function (respuesta) {
            $("#respuesta").empty();
            $(".container").append("<div id='respuesta'></div>");
            $("#respuesta").append(respuesta);
            }
        });
    });
});