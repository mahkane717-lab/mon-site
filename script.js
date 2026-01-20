

document.addEventListener("DOMContentLoaded", () => {
    console.log("🎬 CinéVision prêt !");
});

const filmCards = document.querySelectorAll(".film-card");

filmCards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.05)";
        card.style.transition = "0.3s ease";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
    });
});

const categorySelect = document.querySelector("select");

if (categorySelect) {
    categorySelect.addEventListener("change", () => {
        const selected = categorySelect.value.toLowerCase();

        filmCards.forEach(card => {
            if (
                selected === "" ||
                card.classList.contains(selected)
            ) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
}

const reservationForm = document.querySelector("form");

if (reservationForm) {
    reservationForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const inputs = reservationForm.querySelectorAll("input, select");
        let valid = true;

        inputs.forEach(input => {
            if (input.value.trim() === "") {
                valid = false;
            }
        });

        if (!valid) {
            alert("❌ Veuillez remplir tous les champs");
        } else {
            alert("🎟️ Réservation enregistrée avec succès !");
            reservationForm.reset();
        }
    });
}

const filmsDisponibles = [
    "la bete",
    "les nounous",
    "super man",
    "fast and furious",
    "inception",
    "avatar",
    "titanic",
    "joker",
    "le terminator",
    "the dark knight",
    "kirikou",
    "le seigneur des anneaux",
    "harry potter",
    "pirates des caraibes",
    "la ligne verte",
    "forrest gump",
    "gladiator",
    "matrix",
    "interstellar",
    "the godfather",
    "pulp fiction",
    "the shawshank redemption",
    "the avengers",
    "black panther",
    "wonder woman"

];

function rechercherFilm() {
    const input = document.getElementById("filmInput").value.toLowerCase();
    const resultat = document.getElementById("resultat");

    if (filmsDisponibles.includes(input)) {
        resultat.textContent = "✅ Le film est disponible";
        resultat.style.color = "green";
    } else {
        resultat.textContent = "❌ Film indisponible";
        resultat.style.color = "red";
    }
}

const revealOnScroll = () => {
    filmCards.forEach(card => {
        const position = card.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
            card.style.transition = "0.6s ease";
        }
    });
};

filmCards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
});

window.addEventListener("scroll", revealOnScroll);

const footer = document.querySelector("footer");

if (footer) {
    footer.addEventListener("click", () => {
        alert("📧 Contact : cinevision@email.com");
    });
}
const filmDisponibles = ["action", "amour", "comique", "tragique"];

function rechercherFilm() {
    const input = document.getElementById("filmInput").value.toLowerCase();
    const resultat = document.getElementById("resultat");

    resultat.classList.remove("bounce");

    if (filmsDisponibles.includes(input)) {
        resultat.style.color = "green";
        resultat.textContent = "✅ Film disponible : " + input;
    } else {
        resultat.style.color = "red";
        resultat.textContent = "❌ Film indisponible";
    }

    resultat.classList.add("bounce");
}
window.onload = function () {
    document.getElementById("loader").style.display = "none";
};
function playSound() {
    document.getElementById("clickSound").play();
}
