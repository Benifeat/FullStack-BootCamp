document.addEventListener('DOMContentLoaded', async function() {

  try {

    const response = await fetch('/beni/hw/laptop_store_start/api/laptops');

    if (!response.ok) {

      throw new Error('Network response was not ok');

    }

    const laptopData = await response.json();

    const cardsContainer = document.querySelector('.cards-container');



    laptopData.forEach(laptop => {

      const card = document.createElement('figure');

      card.classList.add('card');

      card.innerHTML = `

        <div class="card__hero">

          <img src="/beni/hw/laptop_store_start/data/img/${laptop.image}" alt="${laptop.productName}" class="card__img">

        </div>

        <h2 class="card__name">${laptop.productName}</h2>

        <p class="card__detail"><span class="emoji-left">🖥</span> ${laptop.screen}</p>

        <p class="card__detail"><span class="emoji-left">🧮</span> ${laptop.cpu}</p>

        <div class="card__footer">

          <p class="card__price">$${laptop.price}</p>

          <a href="/beni/hw/laptop_store_start/laptop/${laptop.id}" class="card__link">Check it out <span class="emoji-right">👉</span></a>

        </div>

      `;

      cardsContainer.appendChild(card);

    });

  } catch (error) {

    console.error('Error fetching laptop data:', error);

  }

});