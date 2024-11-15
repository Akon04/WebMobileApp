let heroImage = document.getElementById("hero-image");
let heroName = document.getElementById("hero-name");
let heroUniverse = document.getElementById("hero-universe");
let heroStats = document.getElementById("hero-stats");

let heroData;

async function loadHeroes() {
    const url = "https://akabab.github.io/superhero-api/api/all.json";
    try {
        const response = await fetch(url);
        heroData = await response.json();
        displayRandomHero();
    } catch (error) {
        console.error("Ошибка при загрузке данных о героях:", error);
    }
}

function displayRandomHero() {
    if (!heroData) return;

    const randomHeroIndex = Math.floor(Math.random() * heroData.length);
    const randomHero = heroData[randomHeroIndex];

    heroName.textContent = randomHero.name;
    heroUniverse.textContent = `Universe: ${randomHero.biography.publisher || "Unknown"}`;
    heroImage.src = randomHero.images.md;
    heroImage.alt = randomHero.name;

    heroStats.innerHTML = `
        <p class="hero-stat"><strong>Alignment:</strong> ${randomHero.biography.alignment}</p>
        <p class="hero-stat"><strong>Occupation:</strong> ${randomHero.work.occupation || "Unknown"}</p>
        <p class="hero-stat"><strong>First Appearance:</strong> ${randomHero.biography.firstAppearance || "N/A"}</p>
        <p class="hero-stat"><strong>Full Name:</strong> ${randomHero.biography.fullName || "Unknown"}</p>
        <p class="hero-stat"><strong>Power:</strong> ${randomHero.powerstats.power || "N/A"}</p>
        <p class="hero-stat"><strong>Strength:</strong> ${randomHero.powerstats.strength || "Unknown"}</p>
        <p class="hero-stat"><strong>Speed:</strong> ${randomHero.powerstats.speed || "Not Available"}</p>
        <p class="hero-stat"><strong>Base:</strong> ${randomHero.work.base || "Unknown"}</p>
        <p class="hero-stat"><strong>Group Affiliations:</strong> ${
            randomHero.connections.groupAffiliation || "None"
        }</p>
    `;
}

window.addEventListener("load", loadHeroes);
