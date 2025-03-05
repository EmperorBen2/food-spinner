function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

const meats = ["chicken", "beef", "turkey"];
const vegetables = ["cabbage", "broccoli"];
const carbs = ["rice", "spaghetti", "rotini", "potatoes"];

function spinFoodWheel() {
    const selectedMeat = getRandomItem(meats);
    const selectedVegetable = getRandomItem(vegetables);
    const selectedCarb = getRandomItem(carbs);
    
    document.getElementById("result").textContent = `Your meal: ${selectedMeat} with ${selectedVegetable} and ${selectedCarb}`;
}

document.getElementById("spinButton").addEventListener("click", spinFoodWheel);
