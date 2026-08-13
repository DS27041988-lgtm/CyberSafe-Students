const passwordInput = document.getElementById("password-input");
const checkButton = document.getElementById("check-password");
const passwordResult = document.getElementById("password-result");
const strengthFill = document.getElementById("strength-fill");

checkButton.addEventListener("click", function () {
    const password = passwordInput.value;
    let score = 0;
    const missingRequirements = [];

    if (password.length >= 12) {
        score++;
    } else {
        missingRequirements.push("at least 12 characters");
    }

    if (/[a-z]/.test(password)) {
        score++;
    } else {
        missingRequirements.push("a lowercase letter");
    }

    if (/[A-Z]/.test(password)) {
        score++;
    } else {
        missingRequirements.push("an uppercase letter");
    }

    if (/[0-9]/.test(password)) {
        score++;
    } else {
        missingRequirements.push("a number");
    }

    if (/[^A-Za-z0-9]/.test(password)) {
        score++;
    } else {
        missingRequirements.push("a symbol");
    }

    if (password.length === 0) {
        passwordResult.textContent = "Please enter a sample password.";
        passwordResult.style.color = "#b42318";
        strengthFill.style.width = "0%";
    } else if (score <= 2) {
        passwordResult.textContent =
            "Weak password. Add: " + missingRequirements.join(", ") + ".";
        passwordResult.style.color = "#b42318";
        strengthFill.style.width = "33%";
        strengthFill.style.backgroundColor = "#b42318";
    } else if (score <= 4) {
        passwordResult.textContent =
            "Medium password. Add: " + missingRequirements.join(", ") + ".";
        passwordResult.style.color = "#b26a00";
        strengthFill.style.width = "66%";
        strengthFill.style.backgroundColor = "#b26a00";
    } else {
        passwordResult.textContent =
            "Strong password. It meets all five requirements.";
        passwordResult.style.color = "#18794e";
        strengthFill.style.width = "100%";
        strengthFill.style.backgroundColor = "#18794e";
    }
});

const quizButton = document.getElementById("check-quiz");
const quizResult = document.getElementById("quiz-result");

quizButton.addEventListener("click", function () {
    let score = 0;
    let answeredQuestions = 0;

    for (let questionNumber = 1; questionNumber <= 3; questionNumber++) {
        const selectedAnswer = document.querySelector(
            'input[name="question' + questionNumber + '"]:checked'
        );

        if (selectedAnswer) {
            answeredQuestions++;

            if (selectedAnswer.value === "correct") {
                score++;
            }
        }
    }

    if (answeredQuestions < 3) {
        quizResult.textContent = "Please answer all three questions.";
        quizResult.style.color = "#b42318";
    } else if (score === 3) {
        quizResult.textContent =
            "Excellent! You scored 3 out of 3.";
        quizResult.style.color = "#18794e";
    } else {
        quizResult.textContent =
            "You scored " + score + " out of 3. Review the advice and try again.";
        quizResult.style.color = "#b26a00";
    }
});