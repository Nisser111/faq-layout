const faqQuestions = document.querySelectorAll("ul li");
faqQuestions.forEach((el) => {
  el.addEventListener("click", (e) => {
    let element, btn;

    if (e.target.classList.contains("faq-list-item")) {
      element = e.target.lastElementChild;
      btn = e.target.querySelector(".unfold-btn");
    } else {
      element = e.target.parentElement.lastElementChild;
      btn = e.target.parentElement.querySelector(".unfold-btn");
    }

    if (element.style.maxHeight == 0) {
      element.style.maxHeight = element.scrollHeight + "px";
      btn.classList.toggle("active");
    } else {
      btn.classList.toggle("active");
      element.style.maxHeight = "";
    }
  });
});

