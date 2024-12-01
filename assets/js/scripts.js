// Menu items with placeholders for images
const menuItems = [
    { 
      name: "Christian Cyborg Cookie N Cream Shake", 
      description: "A specialty milkshake featuring cookies and cream flavor.", 
      price: "$6.00", 
      image: "https://via.placeholder.com/150" // Placeholder image
    },
    { 
      name: "Drako JoJo Cocoa Pebble Shake", 
      description: "A milkshake blended with Cocoa Pebbles cereal.", 
      price: "$6.50", 
      image: "https://via.placeholder.com/150" 
    },
    { 
      name: "Buggy Blast Blue Monster Shake", 
      description: "A vibrant blue-colored milkshake, perfect for kids.", 
      price: "$6.00", 
      image: "https://via.placeholder.com/150" 
    },
    { 
      name: "Alien Blue Alpha Centauri", 
      description: "An alien-themed blue ice cream creation with cosmic flavors.", 
      price: "$5.50", 
      image: "https://via.placeholder.com/150" 
    },
    { 
      name: "Jupiter Jayda Reece’s Shake", 
      description: "A rich and creamy milkshake featuring Reese's candy flavors.", 
      price: "$6.75", 
      image: "https://via.placeholder.com/150" 
    },
    { 
      name: "Zeta Zoey Fruity Pebble Shake", 
      description: "A fun milkshake bursting with Fruity Pebbles goodness.", 
      price: "$6.25", 
      image: "https://via.placeholder.com/150" 
    },
    { 
      name: "Alien SangreNada", 
      description: "An alien-themed frozen treat with a refreshing red flavor.", 
      price: "$5.25", 
      image: "https://via.placeholder.com/150" 
    },
    { 
      name: "Alien Red Solstice", 
      description: "A bold and vibrant red-colored ice cream creation.", 
      price: "$5.75", 
      image: "https://via.placeholder.com/150" 
    },
    { 
      name: "Jeseray Jolt Coffee Shake", 
      description: "A strong coffee-flavored milkshake to wake up your taste buds.", 
      price: "$6.50", 
      image: "https://via.placeholder.com/150" 
    },
    { 
      name: "Stardust Queen", 
      description: "A dazzling frozen treat fit for royalty.", 
      price: "$7.00", 
      image: "https://via.placeholder.com/150" 
    },
    { 
      name: "Astro Azlin Cheesecake Shake", 
      description: "A creamy cheesecake milkshake with a cosmic twist.", 
      price: "$6.85", 
      image: "https://via.placeholder.com/150" 
    }
  ];

  itemDiv.innerHTML = `
  <img src="${item.image}" alt="${item.name}" loading="lazy">
  <h3>${item.name}</h3>
  <p>${item.description}</p>
  <p><strong>${item.price}</strong></p>
  <button onclick="addToCart(${JSON.stringify(item).replace(/"/g, '&quot;')})">Add to Cart</button>
`;

// Populate menu items dynamically
  const menuContainer = document.getElementById('menu-items');
  
  menuItems.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('menu-item');
  
    itemDiv.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <p><strong>${item.price}</strong></p>
    `;
  
    menuContainer.appendChild(itemDiv);
  });

  // Back-to-top button functionality
const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Shopping cart functionality
let cart = [];
let total = 0;

// Add items to cart
function addToCart(item) {
  cart.push(item);
  total += parseFloat(item.price.slice(1)); // Remove $ and convert to number
  updateCart();
}

// Update cart display
function updateCart() {
  const cartItemsContainer = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  // Clear existing cart items
  cartItemsContainer.innerHTML = "";

  // Add each item to the cart display
  cart.forEach((item, index) => {
    const cartItem = document.createElement("div");
    cartItem.textContent = `${item.name} - ${item.price}`;
    cartItemsContainer.appendChild(cartItem);
  });

  // Update total
  cartTotal.textContent = total.toFixed(2);
}

// Populate menu items dynamically with "Add to Cart" buttons
menuItems.forEach(item => {
  const itemDiv = document.createElement('div');
  itemDiv.classList.add('menu-item');

  itemDiv.innerHTML = `
    <img src="${item.image}" alt="${item.name}">
    <h3>${item.name}</h3>
    <p>${item.description}</p>
    <p><strong>${item.price}</strong></p>
    <button onclick="addToCart(${JSON.stringify(item).replace(/"/g, '&quot;')})">Add to Cart</button>
  `;

  menuContainer.appendChild(itemDiv);
});


  
  

  