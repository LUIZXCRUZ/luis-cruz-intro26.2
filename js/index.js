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
    const messageList = messageSection.querySelector("ul")
    const newMessage = document.createElement("li");

    newMessage.innerHTML = `
        <a href = "mailto:${usersEmail}">
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