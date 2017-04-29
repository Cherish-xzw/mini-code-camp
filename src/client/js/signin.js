$(document).ready(function () {
    let form = {
        validate: function () {
            let $username = $('#username');
            let $password = $('#password');
            $username.val() ? $username.parent().removeClass('has-error') : $username.parent().addClass('has-error');
            $password.val() ? $password.parent().removeClass('has-error') : $password.parent().addClass('has-error');
            return $username.val() && $password.val();
        },
        submit: function () {
            $('#signin').submit();
        }
    };
    $('#signin_btn').click(function () {
        if (form.validate()) {
            form.submit();
        }
    });
});
