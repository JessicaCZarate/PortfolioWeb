//Navigation Bar Effects on Scroll

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

//Service Section - Modal

const serviceModals = document.querySelectorAll(".service-modal");
const learnmoreBtns = document.querySelectorAll(".learn-more-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

var modal = function (modalClick) {
  serviceModals[modalClick].classList.add("active");
};

learnmoreBtns.forEach((learnmorebtn, i) => {
  learnmorebtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloseBtns.forEach((modalCloseBtns) => {
  modalCloseBtns.addEventListener("click", () => {
    serviceModals.forEach((modalView) => {
      modalView.classList.remove("active");
    });
  });
});

//Portfolio Section - Modal

const portfolioModals = document.querySelectorAll(".portfolio-modal");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

var portfolioModal = function (modalClick) {
  portfolioModals[modalClick].classList.add("active");
};

imgCards.forEach((imgCard, i) => {
  imgCard.addEventListener("click", () => {
    portfolioModal(i);
  });
});

portfolioCloseBtns.forEach((portfolioCloseBtn) => {
  portfolioCloseBtn.addEventListener("click", () => {
    portfolioModals.forEach((portfolioModalView) => {
      portfolioModalView.classList.remove("active");
    });
  });
});

//Scroll to top button

const scrolltotopbtn = document.querySelector(".scrolltotop-btn");

window.addEventListener("scroll", function () {
  scrolltotopbtn.classList.toggle("active", window.scrollY > 500);
});

scrolltotopbtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

//Navigation menu-items on pagescroll
// window.addEventListener("scroll", () => {
//   const sections = document.querySelectorAll("section");
//   const scrollY = window.pageYOffset;

//   sections.forEach((current) => {
//     let sectionHeight = current.offsetHeight;
//     let sectionTop = current.offsetTop - 50;
//     let id = current.getAttribute("id");

//     if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//       document
//         .querySelector(".nav-items a[href*=" + id + "]")
//         .classList.add("active");
//     } else {
//       document
//         .querySelector(".nav-items a[href*=" + id + "]")
//         .classList.remove("active");
//     }
//   });
// });
