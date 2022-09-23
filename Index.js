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

const web = "https://jsonplaceholder.typicode.com/posts?_limit=3";

function getProjects() {
  fetch(web)
    .then((item) => item.json())
    .then((item2) => {
      let infoApi = "";
      item2.forEach((post) => {
        infoApi += `
      <div role="listitem" class="collection-item"> 
        <div class="project-card">
                <div class="project-image">
                  <img
                    src="./project-assets/projects-section/${post.id}.jpg"
                    alt="project-${post.id}"
                    class="project-card-image"
                  />
                </div>
                <div class="project-content">
                  <div class="project-text">
                    <div class="project-title">${post.title.slice(0, 20)}</div>
                    <div class="project-title project-description">
                    ${post.body.slice(0, 20)}
                    </div>
                    <a href="./projects.html" target="_blank" class="project-link"
                      >Learn More</a
                    >
                  </div>
                </div>
              </div>
            </div>
        `;
      });
      document.querySelector(".collection-list").innerHTML = infoApi;
    })
    .catch((error) => console.log(error));
}

getProjects();
