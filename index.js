document.addEventListener("DOMContentLoaded", function () {
    const experienceList = document.getElementById("experience-list");
    const projectList = document.getElementById("project-list");
    const themeToggleBtn = document.getElementById("theme-toggle");
    const body = document.body;
    const contactSection = document.getElementById("contact");
    const showContactButton = document.createElement('button');
    const descriptionContainer = document.getElementById("skill-description");

    // Add Contact Button dynamically
    showContactButton.textContent = 'Contact Me';
    document.body.insertBefore(showContactButton, contactSection);

    // Experiences Array
    const experiences = [
        { company: "Freelance Projects", role: "Front-End Developer (2019 - Present)" },
        { company: "Tech Solutions Ltd", role: "Front-End Developer (2021 - 2023)" },
        { company: "Innovate Web Inc.", role: "UI Engineer (2020 - 2021)" },
        { company: "Startup XYZ", role: "Junior Web Developer (2018 - 2020)" },
        { company: "Local Biz Web Studio", role: "Website Designer & Developer (2020 - 2022)" },
        { company: "E-Commerce Africa", role: "Front-End Engineer (2022 - 2023)" },
        { company: "SwiftCode Solutions", role: "Web Developer (2019 - 2021)" },
        { company: "Neighborhood Print & Web", role: "Freelance Web Developer (2021 - Present)" },
        { company: "Foodie Blog Network", role: "UI Designer & Front-End Developer (2022)" },
        { company: "Gabriel’s Web Services", role: "Founder & Freelance Developer (2023 - Present)" },
    ];

    // Projects Array
    const projects = [
        { title: "E-Commerce Website", description: "Built a fully responsive e-commerce site using React and Tailwind CSS." },
        { title: "Portfolio Website", description: "Designed and developed a sleek portfolio site for a graphic designer." },
        { title: "Real-Time Chat App", description: "Developed a chat app using Firebase and vanilla JavaScript." },
        { title: "Business Website", description: "Created a modern website for a local bakery." },
    ];

    // Skill Descriptions
    const descriptions = {
        html: "HTML (HyperText Markup Language) is the standard markup language used to create web pages. It defines the structure and layout of a webpage.",
        css: "CSS (Cascading Style Sheets) is used to style and layout web pages. It controls the look and feel of a webpage.",
        javascript: "JavaScript is a versatile programming language used to create interactive elements on web pages.",
        react: "React.js is a JavaScript library used to build user interfaces, particularly single-page applications.",
        tailwind: "Tailwind CSS is a utility-first CSS framework that allows for rapid UI development.",
        uiux: "UI/UX Design involves creating intuitive, visually appealing interfaces while ensuring a great user experience."
    };

    // Add Experience and Project Entries
    experiences.forEach(exp => {
        let li = document.createElement("li");
        li.textContent = `${exp.company} - ${exp.role}`;
        experienceList.appendChild(li);
    });

    projects.forEach(project => {
        let li = document.createElement("li");
        li.innerHTML = `<strong>${project.title}</strong>: ${project.description}`;
        projectList.appendChild(li);
    });

    // Dark Mode Toggle
    themeToggleBtn.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        themeToggleBtn.textContent = body.classList.contains("dark-mode") ? "☀️ Toggle Light Mode" : "🌙 Toggle Dark Mode";
    });

    // Highlight Skills on Click and Show/Hide Description
    document.querySelectorAll(".skill").forEach(skill => {
        skill.addEventListener("click", () => {
            const skillName = skill.getAttribute("data-skill");
            const currentDescription = document.querySelector(`#${skillName}-desc`);

            // If the skill description is currently shown, hide it and remove highlight
            if (currentDescription.classList.contains("active")) {
                currentDescription.classList.remove("active");
                skill.classList.remove("highlight");
                skill.style.backgroundColor = "#007BFF"; // Reset background color
            } else {
                // Hide all descriptions
                document.querySelectorAll("#skill-description p").forEach(p => p.classList.remove("active"));
                // Reset all skill highlights
                document.querySelectorAll(".skill").forEach(skillItem => {
                    skillItem.classList.remove("highlight");
                    skillItem.style.backgroundColor = "#007BFF";
                });

                // Show the clicked skill's description and highlight the skill
                currentDescription.classList.add("active");
                currentDescription.textContent = descriptions[skillName];
                skill.classList.add("highlight");
                skill.style.backgroundColor = "#ffcc00"; // Highlight color
            }
        });
    });

    // Show and Hide Contact Section
    showContactButton.addEventListener('click', () => {
        contactSection.classList.toggle('hidden');
        if (contactSection.classList.contains('hidden')) {
            showContactButton.textContent = 'Contact Me';
        } else {
            showContactButton.textContent = 'Hide Contact Info';
        }
    });
});