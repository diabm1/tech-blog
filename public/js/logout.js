function logout() {
  fetch("/api/user/logout", {
    method: "post",
    headers: { "Content-Type": "application/json" },
  })
    .then(function () {
      document.location.replace("/");
    })
    .catch((err) => console.log(err));
}

const logoutButton = document.querySelector("#logout-link");

if (logoutButton) {
  logoutButton.addEventListener("click", logout);
}
