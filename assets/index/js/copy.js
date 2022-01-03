function copy() {
  let copyText = document.getElementById("tel");
  navigator.clipboard.writeText(copyText.textContent);
  swal("Номер телефона скопирован", `${copyText.textContent}`, "success");
}
