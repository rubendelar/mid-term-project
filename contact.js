const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

/*FECH*/

document.querySelector("#email-form").addEventListener("submit", addPost);

const url = "https://jsonplaceholder.typicode.com/comments";

function addPost(preventForm) {
  preventForm.preventDefault();
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#name-2").value;
  let phone = document.querySelector("#name-3").value;
  let message = document.querySelector("#field").value;

  //   fetch().then().then().then().catch();
  console.log(`Estic a la funcio`);
  fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Accept: "application/json, text/plain",
    },
    body: JSON.stringify({
      name: name,
      email: email,
      phone: phone,
      body: message,
    }),
  })
    .then((response) => response.json())
    .then((formulario) => {
      console.log(formulario);
    })
    .then(() => {
      let message = "";
      message += `
        
      <div class="w-form-done">
      <p>Thank you! Your submission has been received!</p>
      </div>

        `;
      document.querySelector(".w-form-done").innerHTML = message;

      document.querySelector("#name").value = "";
      document.querySelector("#name-2").value = "";
      document.querySelector("#name-3").value = "";
      document.querySelector("#field").value = "";
    })
    .catch(() => {
      let message = "";
      message += `
        
      <div class="w-form-fail">
      <p>Oops! Something went wrong while submitting the form.</p>
      </div>

        `;
      document.querySelector(".w-form-fail").innerHTML = message;
    });
}
