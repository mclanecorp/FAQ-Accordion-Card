console.log("hello wolrd");
const questions = document.querySelectorAll(".question");
const answer = document.querySelector(".answer");

questions.forEach((question) =>
  question.addEventListener("click", () => {
    if (question.parentNode.classList.contains("isactive")) {
      question.parentNode.classlist.toggle("isactive");
    } else {
      questions.forEach((question) =>
        question.parentNode.classList.remove("isactive")
      );
      question.parentNode.classList.add("isactive");
    }
  })
);
