const SIGNUP_URI = `${window.location.origin}/api/auth/signup`;
const SIGNIN_URI = `${window.location.origin}/api/auth/signin`;

const createAccountButton = document.getElementById("createAccount");
const signinButton = document.getElementById("signin");
if (createAccountButton) {
  // Adding event listener to submit button
  createAccountButton.addEventListener("click", createAccount);
}

if (signinButton) {
  // Adding event listener to submit button
  signinButton.addEventListener("click", signinAccount);
}

function showAlert(message) {
  alert(message);
}

function createAccount() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (!name) {
    showAlert("Name is not valid");
  }

  if (!email) {
    showAlert("Email is not valid");
  }

  if (password != confirmPassword) {
    showAlert("Password don't match");
  } else {
    fetch(SIGNUP_URI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result && result.success) {
          window.location.replace("/blogs");
        }
      })
      .catch((error) => console.log(error));
  }
}

function signinAccount() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email) {
    showAlert("Email is not valid");
  }
  if (!password) {
    showAlert("Password don't match");
  } else {
    fetch(SIGNIN_URI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result && result.success) {
          window.location.replace("http://localhost:3000/blogs");
        }
      })
      .catch((error) => console.log(error));
  }
}
