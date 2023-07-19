document.addEventListener("DOMContentLoaded", function() {
    const rocks = document.getElementById("rocks");
    const papers = document.getElementById("papers");
    const scissors = document.getElementById("scissors");
    const playButton = document.getElementById("button02");
    const resultImage = document.getElementById("resultimage");
    const resultMessage = document.getElementById("manu");
    const shakeSound = new Audio("rocktheme.mp3");
    const b = document.getElementById("resulname");
  
    const options = [rocks, papers, scissors];
  
    playButton.addEventListener("click", function() {
      let selectedOption = null;
      for (const option of options) {
        if (option.classList.contains("selected")) {
          selectedOption = option;
          break;
        }
      }
  
      if (!selectedOption) {
        resultMessage.textContent = "Please select at least one option from below.";
        resultMessage.style.color = "#fff";
        return;
      }
  
      // Reset styling and animations
      options.forEach(option => {
        option.style.border = "none";
        option.classList.remove("shakePlayer");
      });
      playButton.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...';
  
      setTimeout(function() {
        const computerChoices = [
          "https://res.cloudinary.com/dqrttxm5s/image/upload/v1689056995/computerScissors-removebg-preview_c3pamv.png",
          "https://res.cloudinary.com/dqrttxm5s/image/upload/v1689056995/computerPaper-removebg-preview_1_wwiieb.png",
          "https://res.cloudinary.com/dqrttxm5s/image/upload/v1689056369/computerRock-removebg-preview_1_ac3ejs.png"
        ];
        const computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  
        resultImage.src = computerChoice;
        resultImage.classList.remove("shakeComputer"); // Remove the animation class
        void resultImage.offsetWidth; // Trigger reflow
        resultImage.classList.add("shakeComputer"); // Add the animation class again
  
        selectedOption.style.border = "1px solid #E3BC3F";
        selectedOption.classList.add("shakePlayer");
  
        shakeSound.play();
  
        resultMessage.classList.remove("won", "lose", "draw");
  
        setTimeout(function() {
          if (selectedOption.id === "rocks") {
            if (computerChoice === "https://res.cloudinary.com/dqrttxm5s/image/upload/v1689056369/computerRock-removebg-preview_1_ac3ejs.png") {
              resultMessage.textContent = "Game Draw";
              resultMessage.classList.add("draw");
            } else if (computerChoice === "https://res.cloudinary.com/dqrttxm5s/image/upload/v1689056995/computerScissors-removebg-preview_c3pamv.png") {
              resultMessage.textContent = "Congratulations! You Won";
              resultMessage.classList.add("won");
            } else {
              resultMessage.textContent = "Sorry! You Lose";
              resultMessage.classList.add("lose");
            }
          } else if (selectedOption.id === "papers") {
            if (computerChoice === "https://res.cloudinary.com/dqrttxm5s/image/upload/v1689056995/computerPaper-removebg-preview_1_wwiieb.png") {
              resultMessage.textContent = "Game Draw";
              resultMessage.classList.add("draw");
            } else if (computerChoice === "https://res.cloudinary.com/dqrttxm5s/image/upload/v1689056369/computerRock-removebg-preview_1_ac3ejs.png") {
              resultMessage.textContent = "Congratulations! You Won";
              resultMessage.classList.add("won");
            } else {
              resultMessage.textContent = "Sorry! You Lose";
              resultMessage.classList.add("lose");
            }
          } else if (selectedOption.id === "scissors") {
            if (computerChoice === "https://res.cloudinary.com/dqrttxm5s/image/upload/v1689056369/computerRock-removebg-preview_1_ac3ejs.png") {
              resultMessage.textContent = "Sorry! You Lose";
              resultMessage.classList.add("lose");
            } else if (computerChoice === "https://res.cloudinary.com/dqrttxm5s/image/upload/v1689056995/computerScissors-removebg-preview_c3pamv.png") {
              resultMessage.textContent = "Game Draw";
              resultMessage.classList.add("draw");
            } else {
              resultMessage.textContent = "Congratulations! You Won";
              resultMessage.classList.add("won");
            }
          }
  
          // Update the result text based on computerChoice
          let resultText = "";
          if (computerChoice === "https://res.cloudinary.com/dqrttxm5s/image/upload/v1689056369/computerRock-removebg-preview_1_ac3ejs.png") {
            resultText = "Rock";
          } else if (computerChoice === "https://res.cloudinary.com/dqrttxm5s/image/upload/v1689056995/computerScissors-removebg-preview_c3pamv.png") {
            resultText = "Scissors";
          } else {
            resultText = "Paper";
          }
          b.textContent = resultText;
  
          playButton.innerHTML = "Play Now";
        }, 1000);
      }, 1000);
    });
  
    // Add click event listeners to the options
    options.forEach(option => {
      option.addEventListener("click", function() {
        options.forEach(opt => {
          opt.classList.remove("selected");
          opt.style.border = "none"; // Reset border for all options
        });
        this.classList.add("selected");
        this.style.border = "1px solid #E3BC3F"; // Apply border to the selected option
  
        // Clear previous result
        resultMessage.textContent = "";
      });
    });
  });
  