$(function () {
    GetStage();
});


$('#ClickButton').on('click', function (e) {
    var stageId = $('#stageId').val();
    GetStage(stageId);
});

function GetStage(stageId) {
    $.ajax({
        url: '/Home/GetStage',
        type: 'POST',
        cache: false,
        async: true,
        dataType: "html",
        data: stageId
    })
        .done(function (result) {
            $('#stageForm').html(result);
        }).fail(function () {
            alert("Произошел сбой");
        });
}