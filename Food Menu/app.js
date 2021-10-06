const menu = [
  {
    id: 1,
    title: "Special Bread",
    category: "breakfast",
    price: 800,
    img: "./images/bread.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "snacks",
    category: "lunch",
    price: 850,
    img: "./images/snack.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 1150,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 1400,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "jollof rice",
    category: "dinner",
    price: 1300,
    img: "./images/jollof.jpg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 6,
    title: "ofada and sauce",
    category: "dinner",
    price: 1500,
    img: "./images/ofada.jpg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 7,
    title: "oreo dream",
    category: "shakes",
    price: 900,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 8,
    title: "bread and beans",
    category: "breakfast",
    price: 600,
    img: "./images/beans.jpg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 9,
    title: "ijebu garri",
    category: "lunch",
    price: 450,
    img: "./images/garri.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 10,
    title: "yogurt",
    category: "shakes",
    price: 850,
    img: "./images/yogurt.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 11,
    title: "shawarma",
    category: "lunch",
    price: 700,
    img: "./images/shawarma.jpg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 12,
    title: "semovita and egusi soup",
    category: "dinner",
    price: 1600,
    img: "./images/semo.jpg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 13,
    title: "indomie and egg",
    category: "breakfast",
    price: 630,
    img: "./images/indomie.jpg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 14,
    title: "grilled meat",
    category: "lunch",
    price: 890,
    img: "./images/soya.jpg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 15,
    title: "amala and ewedu",
    category: "dinner",
    price: 1300,
    img: "./images/amala.jpg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 16,
    title: "fruits",
    category: "iftar",
    price: 0,
    img: "./images/fruit.jpg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 17,
    title: "fruit",
    category: "iftar",
    price: 0,
    img: "./images/fruit.jpg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 18,
    title: "pap and akara",
    category: "iftar",
    price: 700,
    img: "./images/pap.jpg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  }
];

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
const filterBtns = document.querySelectorAll(".filter-btn");

window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
});

filterBtns.forEach(function(btn) {
  btn.addEventListener("click", function(e) {
    const category = e.currentTarget.dataset.id;
    const menuCategory = menu.filter(function(menuItems) {
      if(menuItems.category === category) {
        return menuItems;
      }
    })

    if(category === "all"){
      displayMenuItems(menu)
    }
    else{
      displayMenuItems(menuCategory)
    }
  })
})

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<article class="menu-item">
            <img src="${item.img}" alt="${item.title}" class="photo" />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">#${item.price}</h4>
              </header>
              <p class="item-text">${item.desc}</p>
            </div>
          </article>`;
  });
  displayMenu = displayMenu.join('');
  sectionCenter.innerHTML = displayMenu;
}

