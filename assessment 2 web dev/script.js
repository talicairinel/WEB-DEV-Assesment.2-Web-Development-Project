
// Big Planetarium JavaScript file



// Wait until the full HTML page has loaded
document.addEventListener("DOMContentLoaded", function () {

    // High contrast toggle
    // This adds or removes the 'high-contrast'
    
    var contrastButton = document.getElementById("contrast-toggle");

    if (contrastButton) {
        contrastButton.addEventListener("click", function () {
            document.body.classList.toggle("high-contrast");
        });
    }

    
    // Large text toggle
    // This adds or removes the 'large-text'
    
    var textButton = document.getElementById("text-toggle");

    if (textButton) {
        textButton.addEventListener("click", function () {
            document.body.classList.toggle("large-text");
        });
    }

    
    // Home page galaxy fact button
    // This changes the text content to a random Milky way
  
    var homeFactButton = document.getElementById("home-fact-button");
    var homeFactText = document.getElementById("home-fact-text");

    if (homeFactButton && homeFactText) {
        var galaxyFacts = [
            "The Milky Way contains billions of stars.",
            "Our Solar System is located inside the Milky Way.",
            "The Milky Way is a spiral galaxy.",
            "From Earth, the Milky Way can look like a glowing band in the sky."
        ];

        homeFactButton.addEventListener("click", function () {
            var randomIndex = Math.floor(Math.random() * galaxyFacts.length);
            homeFactText.textContent = galaxyFacts[randomIndex];
        });
    }


    // Mars fact button
    // This displays a random Mars fact.
    
    var marsFactButton = document.getElementById("mars-fact-button");
    var marsFactText = document.getElementById("fact-text");
    var marsResetButton = document.getElementById("mars-reset-button");

    if (marsFactButton && marsFactText) {
        var marsFacts = [
            "Mars has the tallest volcano in the Solar System called Olympus Mons.",
            "Mars has two moons called Phobos and Deimos.",
            "A day on Mars is only a little longer than a day on Earth.",
            "Scientists use rovers to explore the surface of Mars."
        ];

        marsFactButton.addEventListener("click", function () {
            var randomIndex = Math.floor(Math.random() * marsFacts.length);
            marsFactText.textContent = marsFacts[randomIndex];
        });
    }

    // Reset the Mars fact text
    if (marsResetButton && marsFactText) {
        marsResetButton.addEventListener("click", function () {
            marsFactText.textContent = "A Mars fact will appear here.";
        });
    }

    
    // Mission form feedback
    // This checks the form and prints a custom response.
    
    var missionForm = document.getElementById("mission-form");
    var missionFeedback = document.getElementById("mission-feedback");

    if (missionForm && missionFeedback) {
        missionForm.addEventListener("submit", function (event) {
            event.preventDefault();

            var interestLevel = document.getElementById("interest-level").value;
            var missionReason = document.getElementById("mission-reason").value.trim();

            if (interestLevel === "" || missionReason === "") {
                missionFeedback.textContent = "Please choose an interest level and write a reason before submitting.";
            } else if (interestLevel === "curious") {
                missionFeedback.textContent = "You are curious about Mars. That is a great first step into learning about space exploration.";
            } else if (interestLevel === "enthusiastic") {
                missionFeedback.textContent = "You sound very enthusiastic about Mars. You would make a great supporter of space science.";
            } else if (interestLevel === "astronaut") {
                missionFeedback.textContent = "You are ready for Mars. Future astronauts will need courage, curiosity, and scientific knowledge.";
            }
        });
    }


    // Quiz checker
    // This counts the number of correct answers and prints the score.
    
    var quizForm = document.getElementById("space-quiz");
    var quizFeedback = document.getElementById("quiz-feedback");
    var quizReset = document.getElementById("quiz-reset");

    if (quizForm && quizFeedback) {
        quizForm.addEventListener("submit", function (event) {
            event.preventDefault();

            var score = 0;

            var answer1 = document.querySelector('input[name="q1"]:checked');
            var answer2 = document.querySelector('input[name="q2"]:checked');
            var answer3 = document.querySelector('input[name="q3"]:checked');

            if (!answer1 || !answer2 || !answer3) {
                quizFeedback.textContent = "Please answer all three questions before submitting the quiz.";
                return;
            }

            if (answer1.value === "correct") {
                score = score + 1;
            }

            if (answer2.value === "correct") {
                score = score + 1;
            }

            if (answer3.value === "correct") {
                score = score + 1;
            }

            quizFeedback.textContent = "You scored " + score + " out of 3.";
        });
    }

    // Reset the quiz
    if (quizReset && quizForm && quizFeedback) {
        quizReset.addEventListener("click", function () {
            quizForm.reset();
            quizFeedback.textContent = "Your score will appear here after you submit the quiz.";
        });
    }
});
