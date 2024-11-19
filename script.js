const products = [
  {
    id: 1,
    name: "Male Brown Boots",
    price: 15,
    image:
      "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&q=80&w=150&h=150",
  },
  {
    id: 2,
    name: "White Canvas",
    price: 39,
    image:
      "https://images.unsplash.com/photo-1579338559194-a162d19bf842?auto=format&fit=crop&q=80&w=150&h=150",
  },
  {
    id: 3,
    name: "Smart Binoculars",
    price: 198,
    image:
      "https://images.unsplash.com/photo-1551524358-f34c0214781d?auto=format&fit=crop&q=80&w=150&h=150",
  },
  {
    id: 4,
    name: "Black Sneakers",
    price: 23,
    image:
      "https://martinvalen.com/27409-mv_large_default/chunky-sneakers-shoes-all-black.jpg",
  },
  {
    id: 5,
    name: "Jeans",
    price: 22,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9SpyzDhUKbVRNhUTWWqOB42kXMkVOThs8cw&s",
  },
  {
    id: 6,
    name: "Seven Zero T-Shirt",
    price: 30,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT37f0G6pbFyrKahdJCEh_ivxNci_wHK3g_vg&s",
  },
  {
    id: 7,
    name: "Tablet",
    price: 350,
    image:
      "https://imagenes.elpais.com/resizer/v2/3XVOVO7OWJE3XADYWXIBWNCXW4.jpg?auth=c89ed0d5ee739f44789ab2380c13ffc964a6050272c800a6bcb93ba9496894a8&width=414",
  },
  {
    id: 8,
    name: "Beats Studio Pro",
    price: 310,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSslDzKpkA9wvc7Apy-qsETEMgM7AEzDnQhtQ&s",
  },
];

const searchInput = document.getElementById("searchInput");
const productList = document.getElementById("productList");

function createProductElement(product) {
  return `
        <div class="product-item">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-details">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">$${product.price}</p>
            </div>
        </div>
    `;
}

function filterProducts(searchTerm) {
  const filtered = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (filtered.length === 0) {
    productList.innerHTML = `
            <div class="no-results">
                No products found matching "${searchTerm}"
            </div>
        `;
  } else {
    productList.innerHTML = filtered.map(createProductElement).join("");
  }
}

// Initial render
filterProducts("");

// Search handler
searchInput.addEventListener("input", (e) => filterProducts(e.target.value));
