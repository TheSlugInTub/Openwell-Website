document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab-link');
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

    // Load the default content
    document.querySelector('.tab-link').click();
});
