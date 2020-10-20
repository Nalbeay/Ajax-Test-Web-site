$(function () {
    GetStudents();
});


$('#ClickButton').on('click', function (e) {
    var stageId = $('#stageId').val();
    GetStudents(stageId);
});

function GetStudents(filters) {
    $.ajax({
        url: '/Home/Students',
        type: 'POST',
        cache: false,
        async: true,
        dataType: "html",
        data: filters
    })
        .done(function (result) {
            $('#students').html(result);
        });
}