// Initial activities
let activities = [
  "Go for a walk",
  "Read a book for 15 minutes",
  "Drink a glass of water",
  "Stretch for 2 minutes",
  "Write down 3 things you're grateful for",
  "Do 10 push-ups",
  "Meditate for 5 minutes"
];

// Populate dropdown at start
function renderDropdown() {
  const select = document.getElementById("activity-select");
  select.innerHTML = '<option value="">-- Choose Suggested Activity --</option>';
  activities.forEach((act) => {
    const option = document.createElement("option");
    option.value = act;
    option.textContent = act;
    select.appendChild(option);
  });
}
renderDropdown();

// Suggest random activity
document.getElementById("suggest-btn").addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * activities.length);
  const activity = activities[randomIndex];
  document.getElementById("activity").textContent = activity;
});

// Add custom activity
document.getElementById("add-activity-btn").addEventListener("click", () => {
  const newActivity = document.getElementById("new-activity").value.trim();
  if (newActivity) {
    activities.push(newActivity);
    document.getElementById("new-activity").value = "";
    renderDropdown();
    addToDoneList(newActivity);
  }
});

// Select activity from dropdown
document.getElementById("choose-activity-btn").addEventListener("click", () => {
  const selected = document.getElementById("activity-select").value;
  if (selected) {
    addToDoneList(selected);
  }
});

// ---------------------
// To-Do List Functions
// ---------------------
function addToDoneList(activity) {
  const li = document.createElement("li");
  li.textContent = activity;

  // Add "Mark as Done" button
  const doneBtn = document.createElement("button");
  doneBtn.textContent = "✔ Done";
  doneBtn.classList.add("done-btn");
  doneBtn.onclick = () => {
    li.style.textDecoration = "line-through";
    li.style.opacity = "0.6";
    doneBtn.remove();
  };

  li.appendChild(doneBtn);
  document.getElementById("done-list").appendChild(li);
}
// ---------------------
// Daily Timer Function
// ---------------------
function updateTimer() {
  const now = new Date();
  const options = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric', 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit' 
  };
  document.getElementById("daily-timer").textContent = now.toLocaleString('en-US', options);
}

// update every second
setInterval(updateTimer, 1000);
updateTimer(); // run once at start

