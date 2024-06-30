document.addEventListener('DOMContentLoaded', async () => {
    try {
      // fetch the data for each laptop and wait for responses
      const response = await fetch('/api/laptops');
      const laptopData = await response.json();
      const cardsContainer = document.querySelector('.cards-container');


      // create a card for each laptop
      laptopData.forEach(laptop => {
        const card = document.createElement('figure');
        card.classList.add('card');
        card.innerHTML = `
          <div class="card__hero">
            <img src="data/img/${laptop.image}" alt="${laptop.productName}" class="card__img">
          </div>
          <h2 class="card__name">${laptop.productName}</h2>
          <p class="card__detail"><span class="emoji-left">🖥</span> ${laptop.screen}</p>
          <p class="card__detail"><span class="emoji-left">🧮</span> ${laptop.cpu}</p>
          <div class="card__footer">
            <p class="card__price">$${laptop.price}</p>
            <a href="/laptop/${laptop.id}" class="card__link">Check it out <span class="emoji-right">👉</span></a>
          </div>
        `;
        cardsContainer.appendChild(card);
      });
    } catch (error) {
      console.error('Error fetching laptop data:', error);
    }
  });