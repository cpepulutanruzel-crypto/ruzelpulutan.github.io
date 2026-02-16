console.log("Script loaded!");   // Check browser console


function showProjects() {
    document.getElementById('profile-pic').style.width = '120px';
    document.getElementById('about-text').style.display = 'none';
    document.getElementById('nav-buttons').style.display = 'none';
    document.getElementById('projects-section').classList.remove('hidden');
}

function showContact() {
    document.getElementById('profile-pic').style.width = '120px';
    document.getElementById('about-text').style.display = 'none';
    document.getElementById('nav-buttons').style.display = 'none';
    document.getElementById('contact-section').classList.remove('hidden');
}

function backToLanding() {
    document.getElementById('profile-pic').style.width = '200px';
    document.getElementById('about-text').style.display = 'block';
    document.getElementById('nav-buttons').style.display = 'block';
    document.getElementById('projects-section').classList.add('hidden');
    document.getElementById('contact-section').classList.add('hidden');
}
function toggleDesc(id) {
    const desc = document.getElementById(id);
    if (desc.classList.contains('hidden')) {
        desc.classList.remove('hidden');
    } else {
        desc.classList.add('hidden');
    }
}
