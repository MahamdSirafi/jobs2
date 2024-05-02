const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});
sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
////////////////////////////manger///////////////////////////////////
let form = document.getElementById("sign-up-mgr");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let data = {
    name: document.getElementById("username").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    company: {
      name: document.getElementById("company").value,
      address: document.getElementById("address").value,
      link: document.getElementById("link").value,
    },
    role: "mgr",
  };
  try {
    fetch("http://localhost:7000/api/v1.0.0/users/signup", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status == "success") {
          localStorage.setItem("jwt", data.token);
          localStorage.setItem("mgr", data.user);
          window.location.href = "./manger.html";
        } else {
          alert(data.message);
        }
      });
  } catch (err) {
    console.log(err);
  }
});
/////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////user////////////////////////////////////////////////
let formuser = document.getElementById("sign-up-user");
formuser.addEventListener("submit", (event) => {
  event.preventDefault();
  let data = {
    name: document.getElementById("username2").value,
    email: document.getElementById("email2").value,
    password: document.getElementById("password2").value,
    role: "user",
  };
  try {
    fetch("http://localhost:7000/api/v1.0.0/users/signup", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status == "success") {
          localStorage.setItem("jwt", data.token);
          localStorage.setItem("user", data.user);
          window.location.href = "./home.html";
        } else {
          alert(data.message);
        }
      });
  } catch (err) {
    console.log(err);
  }
});
