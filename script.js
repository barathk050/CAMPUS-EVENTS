const exploreButton = document.getElementById("btn");

exploreButton?.addEventListener("click", () => {
    window.location.href = "events.html";
});

document.querySelectorAll("#event-cards button").forEach((button, index) => {
    const originalText = button.textContent;

    button.addEventListener("mouseover", () => {
        button.textContent = `View Event ${index + 1} details →`;
    });

    button.addEventListener("mouseout", () => {
        button.textContent = originalText;
    });
});

const registrationForm = document.getElementById("registration-form");

if (registrationForm) {
    const eventChoice = document.getElementById("event-choice");
    const registrationMessage = document.getElementById("registration-message");
    const eventFromLink = new URLSearchParams(window.location.search).get("event");

    if (eventFromLink && eventChoice.querySelector(`option[value="${eventFromLink}"]`)) {
        eventChoice.value = eventFromLink;
    }

    registrationForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const studentName = document.getElementById("student-name").value.trim();
        registrationMessage.textContent = `Thanks, ${studentName}. This demo does not send or save your registration.`;
        registrationForm.reset();
    });
}
