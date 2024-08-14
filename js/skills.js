const skillsData = {
  Frontend: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React"],
  Backend: ["Node.js", "Python", "Java"],
  Creative: ["Photoshop", "Canva", "Figma"],
  Database: ["MySQL", "MongoDB"],
};

document.addEventListener("DOMContentLoaded", () => {
  const skillCards = document.querySelectorAll(".skill-card");

  skillCards.forEach((card) => {
    const category = card.dataset.category;
    const skills = skillsData[category];

    const skillList = document.createElement("div");
    skillList.className = "skill-list";

    const ul = document.createElement("ul");
    skills.forEach((skill) => {
      const li = document.createElement("li");
      li.textContent = skill;
      ul.appendChild(li);
    });

    skillList.appendChild(ul);
    card.appendChild(skillList);
  });
});
