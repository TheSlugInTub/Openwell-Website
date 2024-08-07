document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab-link');
    const projects = document.querySelectorAll('.project-link'); // This will be empty if there are no .project-link elements
    const contentArea = document.getElementById('content-area');

    function loadContent(url) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                contentArea.innerHTML = data;
            })
            .catch(error => console.error('Error loading content:', error));
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', function (event) {
            event.preventDefault();
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            loadContent(this.getAttribute('data-content'));
        });
    });

    projects.forEach(project => {
        project.addEventListener('click', function (event) {
            event.preventDefault();
            loadContent(this.getAttribute('data-content'));

            console.log("DONE");
        });
    });

    // Load the default content if present
    if (document.querySelector('.tab-link')) {
        document.querySelector('.tab-link').click();
    }
});
