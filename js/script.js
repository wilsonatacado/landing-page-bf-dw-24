const mobileMenuButton = document.querySelector('.nav-bar-menu-mobile');
const mobileMenuDropdown = document.querySelector('.nav-bar-menu-mobile-dropdown');
const menuFadeBg = document.createElement('div');

menuFadeBg.classList.add('menu-fade-bg');
mobileMenuButton.appendChild(menuFadeBg);

mobileMenuButton.addEventListener('click', () => {
  mobileMenuDropdown.classList.toggle('show');
  menuFadeBg.classList.toggle('show');
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.nav-bar-menu-mobile-dropdown') && !e.target.closest('.nav-bar-menu-mobile')) {
    mobileMenuDropdown.classList.remove('show');
    menuFadeBg.classList.remove('show');
  }
});



var countDownDate = new Date("Nov 1, 2024 00:00:00").getTime();
var countdownfunction = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("day").innerHTML = days;
  document.getElementById("hrs").innerHTML = hours;
  document.getElementById("min").innerHTML = minutes;
  document.getElementById("seg").innerHTML = seconds;
  
  if (distance < 0) {
    clearInterval(countdownfunction);
    document.getElementById("day").innerHTML = "";
    document.getElementById("hrs").innerHTML = "";
    document.getElementById("min").innerHTML = "";
    document.getElementById("seg").innerHTML = "EXPIRADO";
  }
}, 1000);



const sliderCont = document.querySelector('.slider-cont');
const sliderBoxes = sliderCont.querySelectorAll('.slider-box');

let activeBox = 0;
sliderBoxes[activeBox].classList.add('active');

sliderBoxes.forEach((sliderBox, i) => {
  sliderBox.style.transform = `translateX(${(i - activeBox + sliderBoxes.length) % sliderBoxes.length * 125}%)`;
});

sliderBoxes.forEach((sliderBox, index) => {
  const prevArrow = sliderBox.querySelector('.prev');
  const nextArrow = sliderBox.querySelector('.next');

  prevArrow.addEventListener('click', () => {
    setActiveBox(index - 1);
  });

  nextArrow.addEventListener('click', () => {
    setActiveBox(index + 1);
  });
});

function setActiveBox(index) {
  sliderBoxes.forEach((sliderBox) => {
    sliderBox.classList.remove('active');
  });

  activeBox = (index + sliderBoxes.length) % sliderBoxes.length;
  sliderBoxes[activeBox].classList.add('active');

  sliderBoxes.forEach((sliderBox, i) => {
    sliderBox.style.transform = `translateX(${(i - activeBox) * 125}%)`;
  });
}


(function () {
  const elems = document.querySelectorAll(".parallax");

  document.addEventListener("mousemove", parallax);

  const perspective = 750;
  const rotationSpeed = 0.05;

  function parallax(e) {
    elems.forEach((elem) => {
      const _w = elem.offsetWidth / 2;
      const _h = elem.offsetHeight / 2;
      const _mouseX = e.clientX;
      const _mouseY = e.clientY;
      const elemRect = elem.getBoundingClientRect();
      const isHovering = (_mouseX >= elemRect.left && _mouseX <= elemRect.right && _mouseY >= elemRect.top && _mouseY <= elemRect.bottom);

      if (isHovering) {
        const rotateX = `rotateX(${(-(_mouseY - elemRect.top) / elemRect.height + 0.5) * rotationSpeed * 180}deg)`;
        const rotateY = `rotateY(${((_mouseX - elemRect.left) / elemRect.width - 0.5) * rotationSpeed * 180}deg)`;
        const transform = `perspective(${perspective}px) ${rotateX} ${rotateY}`;
        elem.style.transform = transform;
      } else {
        elem.style.transform = "";
      }
    });
  }
})();



document.addEventListener("DOMContentLoaded", () => {
  const maincontent = document.querySelector("#maincontent");
  maincontent.style.maxWidth = "100%";

  const pageHeader = document.querySelector(".page-header")
  pageHeader.remove();

  const footerTop = document.querySelector(".footer-top")
  footerTop.remove();

  const pageFooter = document.querySelector(".page-footer")
  pageFooter.remove();

  const modalPopUp = document.querySelector(".modal-popup")
  modalPopUp.remove();

  const modalWrapper = document.querySelector(".modals-wrapper")
  modalWrapper.remove();

  const amWishList = document.querySelector(".amwishlist-popup-block")
  amWishList.remove();

});



const FAQ_ARROW_SELECTOR = '.faq-arrow';
const FAQ_ITEM_SELECTOR = '.faq-item';
const FAQ_ANSWER_SELECTOR = '.faq-answer';
const OPENED_CLASS = 'opened';

const faqArrows = document.querySelectorAll(FAQ_ARROW_SELECTOR);

faqArrows.forEach(faqArrow => {
  faqArrow.addEventListener('click', () => {
    const faqItem = faqArrow.closest(FAQ_ITEM_SELECTOR);

    closeAllOtherFaqItems(faqItem);

    toggleFaqItem(faqItem);
  });
});

function closeAllOtherFaqItems(exceptFaqItem) {
  document.querySelectorAll(FAQ_ITEM_SELECTOR).forEach(faqItem => {
    if (faqItem !== exceptFaqItem) {
      faqItem.classList.remove(OPENED_CLASS);
      const faqAnswer = faqItem.querySelector(FAQ_ANSWER_SELECTOR);
      faqAnswer.style.height = '0px';
      faqAnswer.style.opacity = 0;
    }
  });
}

function toggleFaqItem(faqItem) {
  faqItem.classList.toggle(OPENED_CLASS);
  const faqAnswer = faqItem.querySelector(FAQ_ANSWER_SELECTOR);
  faqAnswer.style.height = faqItem.classList.contains(OPENED_CLASS) ? faqAnswer.scrollHeight + 'px' : '0px';
  faqAnswer.style.opacity = faqItem.classList.contains(OPENED_CLASS) ? 1 : 0;
}



const navBar = document.querySelector('.nav-bar');

let lastScrollY = window.scrollY;

function toggleNavBar() {
  if (window.scrollY > lastScrollY) {
    if (window.innerWidth >= 769) {
      navBar.classList.add('hide-nav');
    }
  } else {
    navBar.classList.remove('hide-nav');
  }

  lastScrollY = window.scrollY;
}

window.addEventListener('scroll', toggleNavBar);



const links = document.querySelectorAll('.links-nav');

links.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const href = link.getAttribute('href');

    const target = document.querySelector(href);

    document.body.classList.add('smooth-scroll');

    window.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth',
    });

    setTimeout(() => {
      document.body.classList.remove('smooth-scroll');
    }, 500);
  });
});





const inputs = document.querySelectorAll('.input-field');

inputs.forEach(input => {
  input.addEventListener('input', () => {
    if (input.value !== '') {
      input.classList.add('has-text');
      const block = input.closest('.block');
      const finalFormText = block.querySelector('.label-text .final-form-text');
      finalFormText.classList.add('focus');
    } else {
      input.classList.remove('has-text');
      const block = input.closest('.block');
      const finalFormText = block.querySelector('.label-text .final-form-text');
      finalFormText.classList.remove('focus');
    }
  });
});




const cnpjInput = document.querySelector('input[name="cmp9"]');
const phoneInput = document.querySelector('input[name="cmp12_NUM"]');

cnpjInput.setAttribute('maxlength', 18);
phoneInput.setAttribute('maxlength', 15);

cnpjInput.addEventListener('input', (e) => {
  const value = e.target.value.replace(/\D+/g, '');
  if (value.length > 14) {
    e.target.value = value.substring(0, 14);
  }
  const formattedValue = formatCnpj(value);
  e.target.value = formattedValue;
});

phoneInput.addEventListener('input', (e) => {
  const value = e.target.value.replace(/\D+/g, '');
  if (value.length > 11) {
    e.target.value = value.substring(0, 11);
  }
  const formattedValue = formatPhone(value);
  e.target.value = formattedValue;
});

function formatCnpj(value) {
  if (value.length <= 2) return value;
  if (value.length <= 5) return `${value.substring(0, 2)}.${value.substring(2)}`;
  if (value.length <= 8) return `${value.substring(0, 2)}.${value.substring(2, 5)}.${value.substring(5)}`;
  if (value.length <= 12) return `${value.substring(0, 2)}.${value.substring(2, 5)}.${value.substring(5, 8)}/${value.substring(8)}`;
  if (value.length <= 14) return `${value.substring(0, 2)}.${value.substring(2, 5)}.${value.substring(5, 8)}/${value.substring(8, 12)}-${value.substring(12)}`;
  return value;
}

function formatPhone(value) {
  if (value.length === 0) return '';
  if (value.length <= 2) return `(${value}`;
  if (value.length <= 6) return `(${value.substring(0, 2)}) ${value.substring(2)}`;
  if (value.length <= 10) return `(${value.substring(0, 2)}) ${value.substring(2, 6)}-${value.substring(6)}`;
  return `(${value.substring(0, 2)}) ${value.substring(2, 7)}-${value.substring(7)}`;
}





const callback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      observer.unobserve(entry.target);
    }
  });
};

const options = {
  root: null,
  threshold: 0.3
};

const observer = new IntersectionObserver(callback, options);

const elementosParaObservar = document.querySelectorAll('.info-box-01, .info-box-02, h2, .info-box-03, .promo-row, .promo-slider-cont, .brands-mobile, .conditions-cont, .tips.paragraph, .tips-box, .content-blog, .faq-selector');

elementosParaObservar.forEach(elemento => {
  observer.observe(elemento);
});