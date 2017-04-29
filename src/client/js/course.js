$(document).ready(function () {
    $('.subBlock').click(function () {
        var blockId = $(this).attr('data-id');
        $.ajax('/api/blocks/' + blockId + '/challenges').done(function (data) {
            var template = Handlebars.compile($('#challenges').html());
            var html = template(data);
            $('#nested'+blockId).html(html);
        });
    });
});
