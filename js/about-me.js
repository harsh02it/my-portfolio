document.addEventListener("DOMContentLoaded", function () {
  const particlesOverlay = document.querySelector(".particles-overlay");
  const aboutSection = document.querySelector(".about-me-section");

  // Function to create a particle with a given color
  function createParticle(color) {
    const particle = document.createElement("div");
    particle.classList.add("particle");
    particle.style.backgroundColor = color;
    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";
    particle.style.animationDuration = Math.random() * 20 + 10 + "s";
    particle.style.opacity = Math.random() * 0.3 + 0.1;
    particlesOverlay.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, 30000);
  }

  const colors = [
    { bg: "#ffffff", text: "#333333", accent: "#ff00ff", secondary: "#00ffff" },
    { bg: "#0f0f0f", text: "#ffffff", accent: "#ff1493", secondary: "#1e90ff" },
  ];
  let currentColorIndex = 0;

  // Initial particle color
  let particleColor =
    colors[currentColorIndex].bg === "#ffffff" ? "black" : "white";

  // Create initial particles
  for (let i = 0; i < 100; i++) {
    createParticle(particleColor);
  }

  // Continuously create new particles
  setInterval(() => createParticle(particleColor), 500);

  function toggleTheme() {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    const newColors = colors[currentColorIndex];
    aboutSection.style.backgroundColor = newColors.bg;
    aboutSection.style.color = newColors.text;
    document.documentElement.style.setProperty(
      "--accent-color",
      newColors.accent
    );
    document.documentElement.style.setProperty(
      "--secondary-accent",
      newColors.secondary
    );

    // Update particle color based on the theme
    particleColor = newColors.bg === "#ffffff" ? "black" : "white";
    // Remove existing particles
    particlesOverlay.innerHTML = "";
    // Create new particles with updated color
    for (let i = 0; i < 100; i++) {
      createParticle(particleColor);
    }
  }

  // Attach event listener to the toggle switch
  document
    .getElementById("toggle-switch")
    .addEventListener("change", function () {
      toggleTheme();
    });

  // Initial theme and particle color setup based on the initial theme
  const initialColors = colors[currentColorIndex];
  aboutSection.style.backgroundColor = initialColors.bg;
  aboutSection.style.color = initialColors.text;
  document.documentElement.style.setProperty(
    "--accent-color",
    initialColors.accent
  );
  document.documentElement.style.setProperty(
    "--secondary-accent",
    initialColors.secondary
  );
});
