const activities = [
  "Go for a walk",
  "Read a book for 15 minutes",
  "Drink a glass of water",
  "Stretch for 2 minutes",
  "Write down 3 things you're grateful for",
  "Do 10 push-ups",
  "Meditate for 5 minutes"
];

document.getElementById("suggest-btn").addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * activities.length);
  document.getElementById("activity").textContent = activities[randomIndex];
});
