//You'll create a trivia form with multiple choice or true/false options (your choice).

//The player will have a limited amount of time to finish the quiz.

//The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.
//Don't let the player pick more than one answer per question.
// Don't forget to include a countdown timer.

var panel = $("#quiz-area");



// Question set
var questions = [{
  question: "Who is John Wick?",
  answers: ["Ronald Mcdonald", "Keanu Reeves", "Donald J Trump", "Christopher Walken"],
  correctAnswer: "Keanu Reeves"
}, {
  question: "The Continental hotel's is a safe zone for?",
  answers: ["Assassins", "Ninja Turtles", "Captain Planet", "Cortona"],
  correctAnswer: "Assassins"
}, {
  question: "Which Car was stolen from John Wick?",
  answers: ["71 Ford Pinto", "68 Pontiac GTO", "69 Chevrolet El Camino", "69 Boss 429 Mustang"],
  correctAnswer: "69 Boss 429 Mustang"
}, {
  question: "According to John Wick, he did how many of his own stunts in the film?",
  answers: ["20%", "50%", "none", "90%"],
  correctAnswer: "90%"
}, {
  question: "The body count in this film was..?",
  answers: ["50", "30", "88", "119"],
  correctAnswer: "119"
}, {
  question: "The gun handling John Wick uses in this movie is a unique tactical stance called?",
  answers: ["Central Axis Relock", "Weaver", "Offhand Position", "Low Ready"],
  correctAnswer: "Central Axis Relock"
}, {
  question: "The Fighting style portrayed in the film is an Asian martial art known as?",
  answers: ["Judo", "KungFu", "Muay Thai", "Karate"],
  correctAnswer: "Judo"
}, {
  question: "The Baba Yaga mean's what in russain?",
  answers: ["Not safe", "Mr. Miyagi", "The BoogeyMan", "Putin"],
  correctAnswer: "The BoogeyMan"
}];

// Variable that will hold the setInterval
var timer;
var audio = new Audio("assets/javascript/johnwicksong.mp3");

var game = {

  correct: 0,
  incorrect: 0,
  counter: 160,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#sub-container").prepend("<h2>Time Ends in.. : <span id='counter-number'>120</span> Seconds</h2>");

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      panel.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    panel.append("<button id='done'>Done</button>");
  },

  done: function() {

    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() === questions[5].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() === questions[6].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() === questions[7].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    this.result();

  },

  result: function() {

    clearInterval(timer);

    $("#sub-container h2").remove();

    panel.html("<h2>Your Results.</h2>");
    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }
};

// CLICK EVENTS

$(document).on("click", "#start", function() {
  game.start();
  audio.play();

  
});


$(document).on("click", "#done", function() {
  game.done();
  
});