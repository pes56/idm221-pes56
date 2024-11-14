function toggleMenu() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('hidden');
}

document.addEventListener('click', function(event) {
    const navMenu = document.getElementById('navbar');
    const menuIcon = document.querySelector('.menu-icon');

    if (!navMenu.contains(event.target) && !menuIcon.contains(event.target)) {
        navMenu.classList.add('hidden');
    }
});
function loadHeader() {
    fetch('header.html')
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.text();
        })
        .then(data => {
            document.getElementById('header').innerHTML = data;
        })
        .catch(error => console.error('Error loading header:', error));
}

function loadFooter() {
    fetch('footer.html')
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.text();
        })
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
}

document.addEventListener('DOMContentLoaded', () => {
    loadHeader();
    loadFooter();
});
