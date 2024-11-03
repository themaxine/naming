document.addEventListener("DOMContentLoaded", function() {
    const questions = document.querySelectorAll(".faq .question");

    questions.forEach(function(question) {
        question.addEventListener("click", function() {
            this.classList.toggle("active"); /* Alterna a classe "active" na pergunta clicada */
            const answer = this.nextElementSibling; /* Obtém a próxima div, que é a resposta */
            answer.style.display = answer.style.display === "block" ? "none" : "block"; /* Alterna a visibilidade da resposta */
        });
    });
});
