import"./assets/styles-c01d67e0.js";const a="feedback-form-state",o=document.querySelector(".feedback-form");try{const e=JSON.parse(localStorage.getItem(a));Array.from(o.elements).forEach(t=>{const r=e[t.name];r&&(t.value=r)})}catch{console.error("Помилка парсингу даних локального сховища")}const n=e=>{const t={};return e.forEach((r,c)=>{t[c]=r}),t};o.addEventListener("input",()=>{const e=new FormData(o);localStorage.setItem(a,JSON.stringify(n(e)))});o.addEventListener("submit",e=>{e.preventDefault(),localStorage.removeItem(a);const t=new FormData(o);console.log(n(t)),o.reset()});
//# sourceMappingURL=commonHelpers2.js.map