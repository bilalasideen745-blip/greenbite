const workouts = {
  full: {
    none: ["Jumping Jacks", "Push-ups", "Squats", "Plank"],
    dumbbells: ["Dumbbell Squats", "Shoulder Press", "Bicep Curls", "Deadlifts"],
    bands: ["Band Squats", "Band Rows", "Chest Press", "Lateral Walks"]
  },
  arms: {
    none: ["Push-ups", "Tricep Dips", "Plank Shoulder Taps"],
    dumbbells: ["Bicep Curls", "Overhead Press", "Hammer Curls"],
    bands: ["Band Bicep Curls", "Band Tricep Extensions", "Band Shoulder Press"]
  },
  legs: {
    none: ["Squats", "Lunges", "Glute Bridges"],
    dumbbells: ["Dumbbell Squats", "Dumbbell Lunges", "Step-Ups"],
    bands: ["Band Squats", "Glute Kickbacks", "Side Steps"]
  },
  core: {
    none: ["Sit-Ups", "Plank", "Leg Raises"],
    dumbbells: ["Russian Twists", "Dumbbell Side Bends", "Weighted Sit-Ups"],
    bands: ["Band Ab Crunches", "Band Side Twists", "Plank with Band Row"]
  }
};

document.getElementById("workout-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const bodyPart = document.getElementById("bodyPart").value;
  const equipment = document.getElementById("equipment").value;

  const exercises = workouts[bodyPart][equipment];
  const planContainer = document.getElementById("workout-plan");

  planContainer.innerHTML = "<h2>Your Workout Plan</h2>";

  exercises.forEach((exercise, index) => {
    const card = document.createElement("div");
    card.classList.add("workout-card");
    card.innerHTML = `
      <h3>${exercise}</h3>
      <p>Duration: 30 seconds</p>
      <button onclick="startTimer(this, 30)">Start Timer</button>
      <div class="timer">00:30</div>
    `;
    planContainer.appendChild(card);
  });
});

function startTimer(button, duration) {
  let time = duration;
  const timerDisplay = button.nextElementSibling;
  button.disabled = true;

  const interval = setInterval(() => {
    const minutes = String(Math.floor(time / 60)).padStart(2, "0");
    const seconds = String(time % 60).padStart(2, "0");
    timerDisplay.textContent = `${minutes}:${seconds}`;
    time--;

    if (time < 0) {
      clearInterval(interval);
      timerDisplay.textContent = "Done!";
      button.disabled = false;
    }
  }, 1000);
}
