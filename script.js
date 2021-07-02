const pageTopBtn = document.querySelector('#page-top');
pageTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

const targetElement = document.querySelectorAll(".animationTarget");
document.addEventListener("scroll", function() {
  for (let i = 0; i < targetElement.length; i++) {
    const getElementDistance = targetElement[i].getBoundingClientRect().top + targetElement[i].clientHeight * .3
    if (window.innerHeight > getElementDistance) {
      targetElement[i].classList.add("show");
    }
  }
});

const parentMenu = document.querySelectorAll(".inquiry-wrapper > .inquiry > .q");
for (let i = 0; i < parentMenu.length; i++) {
  parentMenu[i].addEventListener("click", function() {
    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("active");
  });
}

