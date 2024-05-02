let btnlogin = document.getElementById("login");
if (localStorage.getItem("user")) {
  btnlogin.style.display = "none";
}
