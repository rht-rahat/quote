const form = document.getElementById("quoteForm");
const cardContainer = document.getElementById("cardContainer");

// Load from localstroage
window.addEventListener("DOMContentLoaded", () => {
  const savedQuotes = JSON.parse(localStorage.getItem("quotes")) || [];
  savedQuotes.reverse().forEach(({ name, quote }) => {
    addCard(name, quote);
  });
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();

  if (!name) {
    alert("Please Weite Your Name");
    return;
  }

  const res = await fetch("https://api.kanye.rest/");
  const data = await res.json();
  const quote = data.quote;

  // Show card
  addCard(name, quote);

  // Save localStorage
  const savedQuotes = JSON.parse(localStorage.getItem("quotes")) || [];
  savedQuotes.push({ name, quote });
  localStorage.setItem("quotes", JSON.stringify(savedQuotes));

  form.reset();
});

// new card making
function addCard(name, quote) {
  const card = document.createElement("div");
  card.className = "col-md-6 mb-4";

  card.innerHTML = `
    <div class="card shadow h-100">
      <div class="card-body">
        <h5 class="card-title">নাম: ${name}</h5>
        <p class="card-text"><strong>কোট:</strong> "${quote}"</p>
      </div>
    </div>
  `;

  cardContainer.prepend(card);
}