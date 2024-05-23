const schedules = {
    "CMSC 10": ["CMSC 10 Mon 1:00 PM - 2:30 PM", "CMSC 10 Wed 1:00 PM - 2:30 PM"],
    "CMSC 11": ["CMSC 11 Tue 9:00 AM - 10:30 AM", "CMSC 11 Thu 9:00 AM - 10:30 AM"],
    "CMSC 123": ["CMSC 123 Mon 10:00 AM - 11:30 AM", "CMSC 123 Wed 10:00 AM - 11:30 AM"],
    "CMSC 124": ["CMSC 124 Tue 2:00 PM - 3:30 PM", "CMSC 124 Thu 2:00 PM - 3:30 PM"],
    "CMSC 128": ["CMSC 128 Mon 3:00 PM - 4:30 PM", "CMSC 128 Wed 3:00 PM - 4:30 PM"],
    "CMSC 129": ["CMSC 129 Tue 11:00 AM - 12:30 PM", "CMSC 129 Thu 11:00 AM - 12:30 PM"],
    "CMSC 131": ["CMSC 131 Mon 8:00 AM - 9:30 AM", "CMSC 131 Wed 8:00 AM - 9:30 AM"],
    "CMSC 134": ["CMSC 134 Tue 1:00 PM - 2:30 PM", "CMSC 134 Thu 1:00 PM - 2:30 PM"],
    "CMSC 137": ["CMSC 137 Mon 4:00 PM - 5:30 PM", "CMSC 137 Wed 4:00 PM - 5:30 PM"],
    "CMSC 141": ["CMSC 141 Tue 10:00 AM - 11:30 AM", "CMSC 141 Thu 10:00 AM - 11:30 AM"],
    "CMSC 151": ["CMSC 151 Mon 2:00 PM - 3:30 PM", "CMSC 151 Wed 2:00 PM - 3:30 PM"],
    "CMSC 192": ["CMSC 192 Tue 3:00 PM - 4:30 PM", "CMSC 192 Thu 3:00 PM - 4:30 PM"],
    "CMSC 197": ["CMSC 197 Mon 9:00 AM - 10:30 AM", "CMSC 197 Wed 9:00 AM - 10:30 AM"],
    "CMSC 198.1": ["CMSC 198.1 Tue 8:00 AM - 9:30 AM", "CMSC 198.1 Thu 8:00 AM - 9:30 AM"],
    "CMSC 22": ["CMSC 22 Mon 11:00 AM - 12:30 PM", "CMSC 22 Wed 11:00 AM - 12:30 PM"],
    "CMSC 56": ["CMSC 56 Tue 4:00 PM - 5:30 PM", "CMSC 56 Thu 4:00 PM - 5:30 PM"]
};

function displaySchedule() {
    const subjectDropdown = document.getElementById("subjectDropdown");
    const scheduleBox = document.getElementById("scheduleBox");
    const selectedSubject = subjectDropdown.value;

    scheduleBox.innerHTML = "";

    if (selectedSubject && schedules[selectedSubject]) {
        schedules[selectedSubject].forEach(schedule => {
            const scheduleElement = document.createElement("div");
            scheduleElement.textContent = schedule;
            scheduleElement.className = 'schedule-item';
            scheduleBox.appendChild(scheduleElement);
        });
    }
}

function planSchedule() {
    window.location.href = "plan.html";
}

function addSubject() {
    const subjectDropdown = document.getElementById("subjectDropdown");
    const selectedSubject = subjectDropdown.value;

    if (selectedSubject) {
        alert(`${selectedSubject} added.`);
    } else {
        alert("Please select a subject.");
    }
}

function goBack() {
    window.history.back();
}

