const sign_up_btn = document.querySelector("#sign-up-btn");
sign_up_btn.addEventListener("click", () => {
  window.location.href = "./singup.html";
});
const form = document.getElementById("loginform");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  let data = {
    email: document.getElementById("username").value,
    password: document.getElementById("password").value,
  };
  try {
    fetch("http://localhost:7000/api/v1.0.0/users/login", {
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
          localStorage.setItem("token", data.token);
          if (data.user.role == "mgr") {
            localStorage.setItem("mgr", data.user);
            window.location.href = "./manger.html";
          } else {
            localStorage.setItem("user", data.user);

            window.location.href = "./job.html";
          }
        } else {
          alert(data.message);
        }
      });
  } catch (err) {
    console.log(err);
  }
});
