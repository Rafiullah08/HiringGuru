
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
    document.getElementById('btn' + sectionId.charAt(sectionId.length - 1)).classList.add('active');
}

function toggleCollapsible(event) {
    const button = event.target;
    button.classList.toggle("active");
    const content = button.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}

function selectPlan(planElement) {
    // Remove 'selected' class from all plans
    document.querySelectorAll('.plan').forEach(function(el) {
        el.classList.remove('selected');
    });

    // Add 'selected' class to the selected plan
    planElement.classList.add('selected');
}

function addMilestone() {
    const table = document.getElementById('milestoneTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    newRow.innerHTML = `
        <td contenteditable="true" data-label="Milestone">New milestone</td>
        <td data-label="Duration (hours)"><input type="number" class="hours" value="0" min="0" onchange="updateTotals()"></td>
        <td contenteditable="true" data-label="Cost">$0</td>
        <td data-label="Action"><button onclick="deleteRow(this)">Delete</button></td>
    `;
    updateTotals();
}

function deleteRow(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
    updateTotals();
}

function updateTotals() {
    const table = document.getElementById('milestoneTable');
    let totalHours = 0;
    let totalCost = 0;

    for (let i = 1, row; row = table.rows[i]; i++) {
        if (i >= table.rows.length - 1) break;
        const hours = parseInt(row.querySelector('.hours').value) || 0;
        const cost = parseInt(row.cells[2].innerText.replace('$', '')) || 0;
        totalHours += hours;
        totalCost += cost;
    }

    document.getElementById('totalHours').innerText = totalHours + ' hours';
    document.getElementById('totalCost').innerText = totalCost;
}

document.addEventListener('DOMContentLoaded', function() {
    showSection('section1');
    var coll = document.getElementsByClassName("collapsible");
    for (var i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }
});

document.addEventListener('input', function (event) {
    if (event.target.closest('td[contenteditable="true"]') || event.target.classList.contains('hours')) {
        updateTotals();
    }
});
