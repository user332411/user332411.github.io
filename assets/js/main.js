
// let btnLeft = document.querySelector("#mainbanner .btn-left");
// let btnRight = document.querySelector("#mainbanner .btn-right");

// console.log(btnLeft);
// console.log(btnRight);

// btnLeft.addEventListener("click", function(){
//     if (btnLeft.classList.contains("anime")){
//        btnLeft.classList.remove("anime")
//     }
//     else{
//          btnLeft.classList.add("anime");
//     }
// });
// btnRight.addEventListener("click", function(){
//     if (btnRight.classList.contains("anime")){
//        btnRight.classList.remove("anime")
//     }
//     else{
//          btnRight.classList.add("anime");
//     }
// });

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


var tabs = document.querySelectorAll(".products-block__tab");
var wrappers = document.querySelectorAll(".products-block__wrapper");

console.log(tabs);
console.log(wrappers);

tabs.forEach(element => {
  element.addEventListener("click", function (e) {
    console.log(this.hasAttribute('data-id'));

    if (this.hasAttribute('data-id')) {
      var id = this.getAttribute('data-id');
      console.log(id);
    }
    tabs.forEach(tab => {
      tab.classList.remove('active');
      if (tab.dataset.data - id == id) {
        tab.classList.add('active');
      }
    });
  });
});


const toggleContentByTab = () => {

  let tabs = document.querySelectorAll('.products-block__tab');
  let contents = document.querySelectorAll('.products-block__wrapper');

  // console.log(tabs);
  // console.log(contents);

  tabs.forEach((tab, index) => {
    console.log(tab);

    tab.addEventListener('click', () => {

      tabs.forEach((tab_2) => {
        tab_2.classList.remove('active');
      })
      contents.forEach((content) => {
        content.classList.remove('active');
      })

      tab.classList.add('active');
      contents[index].classList.add('active');
    })

  })

}

toggleContentByTab()



let burger = document.querySelector('.burger');
let mobile_menu = document.querySelector('.mobile_menu');
let closer = document.querySelector('.mobile_menu .closer');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
  }
);
closer.addEventListener('click', () => {
    burger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});


let basket = document.querySelector('.basket');
let basketMenu = document.querySelector('.basket_menu');
let closer2 = document.querySelector('.basket_menu__closer');

basket.addEventListener('click', () => {
   basket.classList.toggle('active');
   basket_menu.classList.toggle('active');
}
);
closer2.addEventListener('click', () => {
  basket.classList.toggle('active');
  basket_menu.classList.toggle('active');
}
);




//  burger.addEventListener('click', () => {
//   burger.forEach((burger) =>
//     burger.classList.remove('active');
//     )}
//  burger.classList.add('active');