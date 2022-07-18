const newFormHandler = async function (e) {
  e.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const body = document.querySelector('textarea[name="post-body"]').value;

  fetch("/api/post", {
    method: "post",
    body: JSON.stringify({
      title,
      body,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  document.location.replace("/dashboard");
};

document
  .querySelector("#new-post-form")
  .addEventListener("submit", newFormHandler);
