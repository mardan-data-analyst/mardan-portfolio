// Sample project data
const projectsData = [
  {
    title: 'Analysis New York City Bike data',
    description: 'This analysis was a part 5 day long data analytics tutorial provided by Career Foundry.',
    imageUrl: 'https://github.com/mardan-data-analyst/mardan-data-analyst.github.io/blob/main/images/city-bike.jpg',
    demoUrl: 'https://docs.google.com/spreadsheets/d/1t1Lh2ZEDC30OYTowz0_FOHp2fDMt41UoAEPB2jfE67I/edit?usp=sharing'
  },
  {
    title: 'Project 2',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl: 'path/to/project2-image.jpg',
    demoUrl: 'path/to/project2-demo.html'
  }
];

// Generate project cards dynamically
function generateProjectCards() {
  const projectList = document.getElementById('project-list');

  projectsData.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.classList.add('project-card');

    const image = document.createElement('img');
    image.src = project.imageUrl;
    projectCard.appendChild(image);

    const title = document.createElement('h3');
    title.textContent = project.title;
    projectCard.appendChild(title);

    const description = document.createElement('p');
    description.textContent = project.description;
    projectCard.appendChild(description);

    const demoLink = document.createElement('a');
    demoLink.href = project.demoUrl;
    demoLink.textContent = 'Read more';
    projectCard.appendChild(demoLink);

    projectList.appendChild(projectCard);
  });
}

// Generate project cards on page load
window.addEventListener('load', generateProjectCards, "_blank");
