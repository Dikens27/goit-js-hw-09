const FEEDBACK_MASSAGE_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");
const textarea = form.querySelector("textarea");





form.addEventListener("submit", (event) => {
    event.preventDefault();
});

textarea.addEventListener("input", (event) => {
    const massage = event.currentTarget.value;

    localStorage.setItem(FEEDBACK_MASSAGE_KEY, massage);
})