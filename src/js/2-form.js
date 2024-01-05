const FEEDBACK_DATA_KEY = "feedback-form-state";
const form = document.querySelector(".feedback-form");
const initialFormData = JSON.parse(localStorage.getItem(FEEDBACK_DATA_KEY));

if (initialFormData) {
    try {
        if (initialFormData["email"]) {
            form.elements["email"].value = initialFormData["email"];
        }
        if (initialFormData["message"]) {
            form.elements["message"].value = initialFormData["message"];
        }
    } catch (e) {
        console.error("Помилка парсингу даних локального сховища");
    }
}


const createFormObj = (formData) => {
    const formObj = {};

    formData.forEach((value, key) => {
        formObj[key] = value.trim();
    });

    return formObj;
}; 

form.addEventListener("input", () => {
    const formData = new FormData(form);

    localStorage.setItem(FEEDBACK_DATA_KEY, JSON.stringify(createFormObj(formData)));
});

form.addEventListener("submit", (event) => {
    event.preventDefault(); 

    const data = new FormData(event.target);
    let fill = true;
    
    data.forEach((value) => {
        if (!value) {
            fill = false;
            return;
        }
    });
    if (fill === false) {
        return document.alert("Поле не може бути пустим");
    }
    const formData = new FormData(event.currentTarget);
    console.log(createFormObj(formData));
    event.currentTarget.reset();
    localStorage.removeItem(FEEDBACK_DATA_KEY);
});

 