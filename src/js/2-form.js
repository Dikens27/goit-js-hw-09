const FEEDBACK_DATA_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");

try {
    const initialFormData = JSON.parse(localStorage.getItem(FEEDBACK_DATA_KEY));

    Array.from(form.elements).forEach(element => {
        const storageValue = initialFormData[element.name];
        if (storageValue) {
            element.value = storageValue;
        }
    })
} catch (e) {
    console.error("Помилка парсингу даних локального сховища");
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
    localStorage.removeItem(FEEDBACK_DATA_KEY);
    // if (event.currentTarget.value) {
    //     window.alert("Поле не може бути пустим")
    // }
    const formData = new FormData(event.currentTarget);
    console.log(createFormObj(formData));
    event.currentTarget.reset();
});

