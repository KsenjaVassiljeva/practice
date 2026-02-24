const projects = document.querySelectorAll('.project-item');
projects.forEach(project => {
    project.addEventListener('click', () => {
        alert(`Вы выбрали проект: ${project.textContent}`);
    });
});