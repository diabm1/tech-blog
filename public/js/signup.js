const signupFormHandler = async function (e) {
  e.preventDefault();

  const usernameEl = document.querySelector("#username-input-signup").value;
  const passwordEl = document.querySelector("#password-input-signup").value;
  console.log(usernameEl);
  fetch("/api/user", {
    method: "post",
    body: JSON.stringify({
      username: usernameEl,
      password: passwordEl,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(function () {
      console.log("are we here");
      document.location.href = "/dashboard";
    })
    .catch((err) => console.log(err));
};

document
  .querySelector("#signup-form")
  .addEventListener("submit", signupFormHandler);
