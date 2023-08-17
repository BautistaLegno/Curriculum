function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("show");
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    const sectionPosition = section.getBoundingClientRect().top;
    const offsetPosition = sectionPosition + window.pageYOffset;

    window.scrollTo({
        top: offsetPosition - 50,
        behavior: "smooth"
    });

    const menu = document.getElementById("menu");
    menu.classList.remove("show");
}

// moverse
const menuLinks = document.querySelectorAll(".menu a");
menuLinks.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const sectionId = link.getAttribute("href").slice(1);
        scrollToSection(sectionId);
    });
});


// Valores
const htmlProgress = 90; //conocimientos en HTML
const cssProgress = 85; //CSS
const jsProgress = 70; //JavaScript
const sqlProgress = 60; //sql

// barra de progreso
document.getElementById("html-progress").style.width = htmlProgress + "%";
document.getElementById("html-progress").textContent = `HTML ${htmlProgress}%`;

document.getElementById("css-progress").style.width = cssProgress + "%";
document.getElementById("css-progress").textContent = `CSS ${cssProgress}%`;

document.getElementById("js-progress").style.width = jsProgress + "%";
document.getElementById("js-progress").textContent = `JavaScript ${jsProgress}%`;

document.getElementById("sql-progress").style.width = sqlProgress + "%";
document.getElementById("sql-progress").textContent = `sql ${sqlProgress}%`;




// Función para activar el efecto de carga secuencial
function activateFadeInEffect() {
    const fadeElements = document.querySelectorAll('.fade-in');
    const windowHeight = window.innerHeight;

    function checkFadeElements() {
      fadeElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop - windowHeight <= 0) {
          element.classList.add('visible');
        }
      });
    }

    // Llama a la función al cargar la página y en cada evento de scroll
    window.addEventListener('load', checkFadeElements);
    window.addEventListener('scroll', checkFadeElements);
  }

  activateFadeInEffect();

