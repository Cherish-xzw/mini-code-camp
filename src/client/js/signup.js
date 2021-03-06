$(document).ready(function () {
  function validate() {
    let $username = $('#username');
    let $password = $('#password');
    let $confirm = $('#confirm');
    $username.val() ? $username.parent().removeClass('has-error') : $username.parent().addClass('has-error');
    $password.val() ? $password.parent().removeClass('has-error') : $password.parent().addClass('has-error');
    $confirm.val() && $password.val() === $confirm.val() ?
      $confirm.parent().removeClass('has-error') :
      $confirm.parent().addClass('has-error');
    return $username.val() && $password.val() && $confirm.val() && $password.val() === $confirm.val();
  }

  $('#signup').submit((event) => {
    if (!validate()) {
      event.preventDefault();
    }
  });
});
