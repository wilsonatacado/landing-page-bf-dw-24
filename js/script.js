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


        
        // Defina a data e hora de término
        var countDownDate = new Date("Nov 1, 2024 00:00:00").getTime();
        // Atualize a contagem regressiva a cada 1 segundo
        var countdownfunction = setInterval(function () {
            // Obtenha a data e hora atuais
            var now = new Date().getTime();
            // Encontre a distância entre agora e a data de término
            var distance = countDownDate - now;
            // Cálculos de tempo para dias, horas, minutos e segundos
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            // Exiba o resultado nos elementos correspondentes
            document.getElementById("day").innerHTML = days;
            document.getElementById("hrs").innerHTML = hours;
            document.getElementById("min").innerHTML = minutes;
            document.getElementById("seg").innerHTML = seconds;
            // Se a contagem regressiva terminar, escreva algum texto
            if (distance < 0) {
                clearInterval(countdownfunction);
                document.getElementById("day").innerHTML = "";
                document.getElementById("hrs").innerHTML = "";
                document.getElementById("min").innerHTML = "";
                document.getElementById("seg").innerHTML = "EXPIRADO";
            }
        }, 1000);

        

        // Get the slider container and boxes
        const sliderCont = document.querySelector('.slider-cont');
        const sliderBoxes = sliderCont.querySelectorAll('.slider-box');

        // Set the active box
        let activeBox = 0;
        sliderBoxes[activeBox].classList.add('active');

        // Apply the transform effect to all slider boxes
        sliderBoxes.forEach((sliderBox, i) => {
        sliderBox.style.transform = `translateX(${(i - activeBox + sliderBoxes.length) % sliderBoxes.length * 125}%)`;
        });

        // Add event listeners to the arrow buttons
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

        // Function to set the active box
        function setActiveBox(index) {
        // Remove active class from all boxes
        sliderBoxes.forEach((sliderBox) => {
            sliderBox.classList.remove('active');
        });

        // Set the new active box, with loop effect
        activeBox = (index + sliderBoxes.length) % sliderBoxes.length;
        sliderBoxes[activeBox].classList.add('active');

        // Animate the transition
        sliderBoxes.forEach((sliderBox, i) => {
            sliderBox.style.transform = `translateX(${(i - activeBox) * 125}%)`;
        });
        }
    

        (function() {
        // Get all elements with the class "parallax"
        const elems = document.querySelectorAll(".parallax");

        // Add event listener
        document.addEventListener("mousemove", parallax);

        // Define the perspective value and rotation speed
        const perspective = 750;
        const rotationSpeed = 0.05;

        // Magic happens here
        function parallax(e) {
            elems.forEach((elem) => {
            const _w = elem.offsetWidth / 2;
            const _h = elem.offsetHeight / 2;
            const _mouseX = e.clientX;
            const _mouseY = e.clientY;
            const elemRect = elem.getBoundingClientRect(); // Get the element's bounding rectangle
            const isHovering = (_mouseX >= elemRect.left && _mouseX <= elemRect.right && _mouseY >= elemRect.top && _mouseY <= elemRect.bottom); // Check if the cursor is hovering over the element

            if (isHovering) {
                const rotateX = `rotateX(${(-(_mouseY - elemRect.top) / elemRect.height + 0.5) * rotationSpeed * 180}deg)`; // Rotate X axis based on cursor position relative to the element (inverted)
                const rotateY = `rotateY(${((_mouseX - elemRect.left) / elemRect.width - 0.5) * rotationSpeed * 180}deg)`; // Rotate Y axis based on cursor position relative to the element
                const transform = `perspective(${perspective}px) ${rotateX} ${rotateY}`;
                elem.style.transform = transform;
            } else {
                elem.style.transform = ""; // Reset transform when not hovering
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
    

    
        // Constants
        const FAQ_ARROW_SELECTOR = '.faq-arrow';
        const FAQ_ITEM_SELECTOR = '.faq-item';
        const FAQ_ANSWER_SELECTOR = '.faq-answer';
        const OPENED_CLASS = 'opened';

        // Get all FAQ arrows
        const faqArrows = document.querySelectorAll(FAQ_ARROW_SELECTOR);

        // Add event listener to each FAQ arrow
        faqArrows.forEach(faqArrow => {
        faqArrow.addEventListener('click', () => {
            // Get the closest FAQ item
            const faqItem = faqArrow.closest(FAQ_ITEM_SELECTOR);

            // Close all other FAQ items
            closeAllOtherFaqItems(faqItem);

            // Toggle the clicked FAQ item
            toggleFaqItem(faqItem);
        });
        });

        // Close all other FAQ items except the given one
        function closeAllOtherFaqItems(exceptFaqItem) {
        document.querySelectorAll(FAQ_ITEM_SELECTOR).forEach(faqItem => {
            if (faqItem!== exceptFaqItem) {
            faqItem.classList.remove(OPENED_CLASS);
            const faqAnswer = faqItem.querySelector(FAQ_ANSWER_SELECTOR);
            faqAnswer.style.height = '0px';
            faqAnswer.style.opacity = 0;
            }
        });
        }

        // Toggle the FAQ item
        function toggleFaqItem(faqItem) {
        faqItem.classList.toggle(OPENED_CLASS);
        const faqAnswer = faqItem.querySelector(FAQ_ANSWER_SELECTOR);
        faqAnswer.style.height = faqItem.classList.contains(OPENED_CLASS)? faqAnswer.scrollHeight + 'px' : '0px';
        faqAnswer.style.opacity = faqItem.classList.contains(OPENED_CLASS)? 1 : 0;
        }



// Selecione a barra de navegação
const navBar = document.querySelector('.nav-bar');

// Variável para armazenar a posição do scroll anterior
let lastScrollY = window.scrollY;

// Função para esconder ou mostrar a barra de navegação
function toggleNavBar() {
  // Verifique se a página foi rolada para baixo ou para cima
  if (window.scrollY > lastScrollY) {
    // Verifique se a largura da tela é maior ou igual a 768px
    if (window.innerWidth >= 769) {
      // Se rolou para baixo, adicione a classe para esconder a barra
      navBar.classList.add('hide-nav');
    }
  } else {
    // Se rolou para cima, remova a classe para mostrar a barra
    navBar.classList.remove('hide-nav');
  }
  
  // Atualize a posição do scroll anterior
  lastScrollY = window.scrollY;
}

// Adicione o evento de rolagem à janela
window.addEventListener('scroll', toggleNavBar);



    // Selecione todos os links com a classe "links-nav"
        const links = document.querySelectorAll('.links-nav');

        // Adicione o evento de clique em cada link
        links.forEach((link) => {
        link.addEventListener('click', (e) => {
            // Previna o comportamento padrão do link
            e.preventDefault();

            // Pegue o atributo "href" do link
            const href = link.getAttribute('href');

            // Selecione o elemento que corresponde ao href
            const target = document.querySelector(href);

            // Adicione a classe "smooth-scroll" ao corpo do documento
            document.body.classList.add('smooth-scroll');

            // Anime o scroll até o elemento alvo
            window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth',
            });

            // Remova a classe "smooth-scroll" após a animação
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
        
        cnpjInput.setAttribute('maxlength', 18); // 14 caracteres + 4 caracteres de formatação (pontos e traço)
        phoneInput.setAttribute('maxlength', 15); // 11 caracteres + 4 caracteres de formatação (parênteses e traço)
        
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