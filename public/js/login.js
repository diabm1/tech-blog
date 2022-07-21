const loginFormHandler = async function (e) {
  e.preventDefault();

  const usernameEl = document.querySelector("#username-input-login").value;
  const passwordEl = document.querySelector("#password-input-login").value;

  fetch("/api/user/login", {
    method: "post",
    body: JSON.stringify({
      username: usernameEl,
      password: passwordEl,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(function (res) {
      return res.json();
    })
    .then((data) => {
      console.log("login data", data);
      document.location.href = "/dashboard";
    })
    .catch((err) => console.log(err));
};

document
  .querySelector("#login-form")
  .addEventListener("submit", loginFormHandler);
