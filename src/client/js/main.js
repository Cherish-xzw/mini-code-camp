function getCookie(name) {
  var cookieName = encodeURIComponent(name) + '=',
    cookieStart = document.cookie.indexOf(cookieName),
    cookieValue = null;
  if (cookieStart > -1) {
    var cookieEnd = document.cookie.indexOf(';', cookieStart);
    if (cookieEnd === -1) {
      cookieEnd = document.cookie.length;
    }
    cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
  }
  return cookieValue;
}

$(document).ready(function () {
  try {
    var user = JSON.parse(getCookie('user'));
    if (user) {
      $('#nav').append('<li><a href="javascript:;" class="text-danger">' + user.name + '</a></li>');
      $('#nav').append('<li><a href="/logout">登出</a></li>');
    } else {
      $('#nav').append('<li><a href="/signin">登录</a></li><li><a href="/signup">注册</a></li>');
    }
  } catch (e) {
    console.error(e);
  }
});
