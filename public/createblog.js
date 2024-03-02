const submitButton = document.getElementById("createBlog");

// Adding event listener to submit button
submitButton.addEventListener("click", createBlog);

function createBlog() {
  const blogName = document.getElementById("blogName").value;
  const blogDetails = document.getElementById("blogDetails").value;
  const blogCategory = document.getElementById("blogCategory").value;

  if (blogName && blogDetails && blogCategory) {
    fetch("http://127.0.0.1:3000/api/blogs/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        blogName,
        blogCategory,
        blogDetails,
      }),
    })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }
}
