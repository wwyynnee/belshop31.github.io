function opennav() {
  $("#catalog").hide();
  $("#catalog2").show();
  $("#nav").show();
  document.getElementById("nav").style.width = "25%";
  document.getElementById("catalog2").innerHTML = "Каталог ▸";
}
function closenav() {
  $("#catalog").show();
  $("#catalog2").hide();
  $("#nav").hide();
}
