function setCookie(cname, cvalue) {
  var d = new Date();

  d.setTime(d.getTime() + 30 * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  $.cookie("name", cname);
  $.cookie("value", cvalue);
  $.cookie("expires", expires);
  if (cvalue == "Yes") {
    window.location.href = "home.html";
  }
}
