$(document).ready(function () {
    $('.subBlock').click(function () {
        let blockId = $(this).attr('data-id');
        $.ajax('/api/blocks/' + blockId + '/challenges').done(function (data) {
            let template = Handlebars.compile($('#challenges').html());
            let html = template(data);
            $('#nested' + blockId).html(html);
        });
    });
});
