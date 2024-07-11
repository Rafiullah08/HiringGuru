
function showSection(sectionId) {
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        section.classList.remove('active');
    });

    var buttons = document.querySelectorAll('.sidebar button');
    buttons.forEach(function(button) {
        button.classList.remove('active');
    });

    document.getElementById(sectionId).classList.add('active');
    document.getElementById('btn' + sectionId.replace('section', '')).classList.add('active');
}

function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var content = document.getElementById('content');
    sidebar.classList.toggle('show');
    content.classList.toggle('shifted');
}
