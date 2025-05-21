const form = document.getElementById("quoteForm");
const cardContainer = document.getElementById("cardContainer");


form.addEventListener("submit", async (e) => {
  e.preventDefault(); // Turn off reload
  const name = document.getElementById("name").value.trim();

  if (!name) {
    alert("Please Write Your name");
    return;
  }
  // fetch
  const res = await fetch("https://api.kanye.rest/");
  const data = await res.json();

  // New card
  const card = document.createElement("div");
  card.className = "col-md-6 mb-4";

  card.innerHTML = `
    <div class="card shadow h-100">
      <div class="card-body">
        <h5 class="card-title">নাম: ${name}</h5>
        <p class="card-text"><strong>কোট:</strong> "${data.quote}"</p>
      </div>
    </div>
  `;

  cardContainer.prepend(card); // উপরে দেখানোর জন্য prepend ব্যবহার করছি

  // From Reset
  form.reset();
});