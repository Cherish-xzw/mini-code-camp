$(document).ready(function () {
  function validate() {
    let $username = $('#username');
    let $password = $('#password');
    $username.val() ? $username.parent().removeClass('has-error') : $username.parent().addClass('has-error');
    $password.val() ? $password.parent().removeClass('has-error') : $password.parent().addClass('has-error');
    return $username.val() && $password.val();
  }

  $('#signin').submit((event) => {
    if (!validate()) {
        event.preventDefault();
    }
  });
});
