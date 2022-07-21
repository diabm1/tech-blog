// After a certain amount of time, log the user out
let idleTimer = undefined;

window.addEventListener("focus", function () {
  console.log("focus event");
  console.log("clearing out TimeR", idleTimer);
  window.clearTimeout(idleTimer);
});

window.addEventListener("blur", function () {
  console.log("blur event");
  idleTimer = window.setTimeout(() => {
    fetch("/api/user/logout", {
      method: "post",
      headers: { "Content-Type": "application/json" },
    })
      .then(function () {
        document.location.replace("/");
      })
      .catch((err) => console.log(err));
  }, 600000);
});
