document.addEventListener("DOMContentLoaded", function () {
  const aboutSection = document.querySelector(".about-me-section");
  const colors = [
    { bg: "#ffffff", text: "#333333", accent: "#ff00ff", secondary: "#00ffff" },
    { bg: "#0f0f0f", text: "#ffffff", accent: "#ff1493", secondary: "#1e90ff" },
  ];
  let currentColorIndex = 0;

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
  }

  // Attach event listener to the toggle switch
  document
    .getElementById("toggle-switch")
    .addEventListener("change", function () {
      toggleTheme();
    });
});
