const commentFormHandler = async function (e) {
  e.preventDefault();

  const postId = document.querySelector('input[name="post-id"]').value;
  const body = document.querySelector('textarea[name="comment-body"]').value;

  if (body) {
    const res = await fetch("/api/comment", {
      method: "post",
      body: JSON.stringify({
        postId,
        body,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log("comment data", data);
    window.location.reload();
  }
};

document
  .querySelector("#new-comment-form")
  .addEventListener("submit", commentFormHandler);
