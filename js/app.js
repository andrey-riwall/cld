// swiper
const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  }
});

// tabs
document.querySelectorAll(".step").forEach(function(tabsBtn) {
  tabsBtn.addEventListener("click", function(event) {
    const path = event.currentTarget.dataset.path

    document.querySelectorAll(".tabGroup").forEach(function(tabContent) {
      tabContent.classList.remove('is_active')
    });

    document.querySelector(`[data-target="${path}"]`).classList.add("is_active")
  });
});

const hwwList = document.querySelectorAll(".step");

for (let i = 0; i < hwwList.length; i++) {
  hwwList[i].onclick = function() {
    let j = 0;

    while(j < hwwList.length) {
      hwwList[j++].className = "step";
    };

    hwwList[i].className = "step is_active";
  };

};


// accordion
$( function() {
  $( "#accordion" ).accordion();
});


// burger
const burgerBtn = document.getElementById('burgerBtn');
const burgerMenu = document.getElementById('burgerMenu');

function toggleBurgerMenu () {
  burgerMenu.classList.toggle('is_active');
}

function closeBurgerMenu () {
  burgerMenu.classList.remove('is_active');
}


// search
const searchBtn = document.getElementById('searchBtn');
const searchMenu = document.getElementById('searchMenu');

function toggleSearchMenu () {
  searchMenu.classList.toggle('is_active');
}

function closeSearchMenu () {
  searchMenu.classList.remove('is_active');
}



