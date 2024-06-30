document.addEventListener('DOMContentLoaded', async () => {
  try {
    const laptopId = window.location.pathname.split('/').pop();
    const response = await fetch(`/beni/hw/laptop_store_start/api/laptops/${laptopId}`);
    const laptop = await response.json();

    if (laptop) {
      const laptopContainer = document.querySelector('.laptop');
      laptopContainer.querySelector('.laptop__img').src = `/beni/hw/laptop_store_start/data/img/${laptop.image}`;
      laptopContainer.querySelector('.laptop__price').textContent = `$${laptop.price}`;
      laptopContainer.querySelector('.laptop__name').textContent = laptop.productName;
      laptopContainer.querySelectorAll('.laptop__details p').forEach((p, index) => {
        p.innerHTML = `<span class="emoji-left">${['🖥', '🧮', '💾', '📦'][index]}</span> ${[laptop.screen, laptop.cpu, `${laptop.storage} of storage`, `${laptop.ram} of RAM`][index]}`;
      });
      laptopContainer.querySelector('.laptop__description').textContent = laptop.description;
      const buyButton = laptopContainer.querySelector('.laptop__link');
      buyButton.innerHTML = `Buy now for $${laptop.price} <span class="emoji-right">🥳 😍</span>`;
    } else {
      console.error('Laptop not found');
    }
  } catch (error) {
    console.error('Error fetching laptop data:', error);
  }
});