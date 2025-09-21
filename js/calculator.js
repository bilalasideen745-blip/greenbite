document.getElementById("calcForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Inputs
    const age = parseInt(document.getElementById("age").value);
    const gender = document.getElementById("gender").value;
    const height = parseInt(document.getElementById("height").value);
    const weight = parseInt(document.getElementById("weight").value);
    const activity = parseFloat(document.getElementById("activity").value);

    // BMR Calculation
    let bmr;
    if (gender === "male") {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    // TDEE Calculation
    const tdee = bmr * activity;

    // Macros
    const carbs = Math.round((tdee * 0.5) / 4);
    const protein = Math.round((tdee * 0.2) / 4);
    const fat = Math.round((tdee * 0.3) / 9);

    // Display Results
    document.getElementById("results").style.display = "block";
    document.getElementById("bmr").textContent = `BMR: ${Math.round(bmr)} calories/day`;
    document.getElementById("tdee").textContent = `TDEE: ${Math.round(tdee)} calories/day`;
    document.getElementById("carbs").textContent = `Carbs: ${carbs} g/day`;
    document.getElementById("protein").textContent = `Protein: ${protein} g/day`;
    document.getElementById("fat").textContent = `Fat: ${fat} g/day`;
});
