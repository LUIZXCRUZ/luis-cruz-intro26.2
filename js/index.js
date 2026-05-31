const footer = document.createElement("footer");
document.body.appendChild(footer);

const today = new Date();
const thisYear = today.getFullYear();

const copyright = document.createElement("p");
copyright.innerHTML = `Luis Cruz &copy ${thisYear}`;

footer.appendChild(copyright); 

const skills = ["HTML", "CSS", "JavaScript", "Customer Service", "Videography"];

const skillsSection = document.querySelector("#Skills");
const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement("li");
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill);   
}