const footer = document.createElement("footer");
document.body.appendChild(footer);

const today = new Date();
const thisYear = today.getFullYear();

const copyright = document.createElement("p");
copyright.innerHTML = `Luis Cruz &copy; ${thisYear}`;

footer.appendChild(copyright); 

const skills = ["HTML", "CSS", "JavaScript", "Customer Service", "Videography"];

const skillsSection = document.querySelector("#Skills");
const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement("li");
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill);   
}

const messageForm = document.querySelector('form[name="leave_message"]'); 

messageForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const usersName = event.target.usersName.value; 
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;

    console.log(usersName); 
    console.log(usersEmail);
    console.log(usersMessage);

    const messageSection = document.querySelector("#messages");
    const messageList = messageSection.querySelector("ul");
    const newMessage = document.createElement("li");

    newMessage.innerHTML = `
        <a href="mailto:${usersEmail}">
            ${usersName}
        </a>  
        <span> wrote: ${usersMessage} </span>
    `;


    const removeButton = document.createElement("button");

    removeButton.innerText = "Remove";
    removeButton.type = "button";  
    removeButton.addEventListener("click", function() {

        const entry = removeButton.parentNode;
        entry.remove();

    });

    newMessage.appendChild(removeButton);

     messageList.appendChild(newMessage);

    event.target.reset();
});

fetch("https://api.github.com/users/luizxcruz/repos")
    .then(function(response) {
        if (!response.ok){
            throw new Error("Failed to fetch repositories");
        }

        return response.json();
    })
    .then(function(repositories){
        console.log(repositories);

        const projectSection = document.querySelector("#Projects");
        const projectList = projectSection.querySelector("ul");

        for (let i = 0; i < repositories.length; i++) {
            const project = document.createElement("li");

            project.innerText = repositories[i].name;

            projectList.appendChild(project);
        }
    })
    .catch(function(error) {
        console.log("Error fetching repositories: ", error);

        const projectSection = document.querySelector("#Projects");
        const projectList = projectSection.querySelector("ul");
        const errorMessage = document.createElement("li");

        errorMessage.innerText = "Sorry, there was an error loading my GitHub projects.";

        projectList.appendChild(errorMessage);
});

