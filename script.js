// Sample project data
const projectsData = [
  {
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: 'path/to/project1-image.jpg',
    demoUrl: 'path/to/project1-demo.html'
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
    demoLink.textContent = 'Demo';
    projectCard.appendChild(demoLink);

    projectList.appendChild(projectCard);
  });
}

// Generate project cards on page load
window.addEventListener('load', generateProjectCards);

