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
  
  

  