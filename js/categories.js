const promoSliderCont = document.getElementById("promo-slider-cont");

const categories = [
  {
    title: "Tendências",
    text:
      "Está precisando de novas indicações para a sua loja?<br><br>Aqui na Wilson, você encontra diversos modelos no atacado. Aproveite para se preparar com as <span class='paragraph-highlight'> melhores tendências e aumentar a sua margem de lucro.</span>",
    image: "/img/renders/category-render-trend.png"
  },
  {
    title: "Tênis & Botas",
    text:
      "A coleção indispensável para o inverno inclui o mix de tênis e botas, entre elas temos <span class='paragraph-highlight'>promoções</span>. <br><br> Portanto, a <span class='paragraph-highlight'>melhor opção</span> é se preparar com marcas renomadas de calçados fechados para <span class='paragraph-highlight'>aquecer suas vendas nesta estação.</span>",
    image: "/img/renders/category-render-boots.png"
  },
  {
    title: "Promoções",
    text:
      "Aumente suas margens de lucro</span> e atraia mais clientes com nossa categoria de <span class='paragraph-highlight'>Promoções de Calçados</span> no Atacado.<br><br>Esta é a oportunidade ideal para lojistas que desejam maximizar seus ganhos e oferecer <span class='paragraph-highlight'>produtos de qualidade a preços competitivos.</span>",
    image: "/img/renders/category-render-sale.png"
  },
  {
    title: "Infantil",
    text:
      "Se você é um revendedor que busca encantar pais e responsáveis com produtos de qualidade, <span class='paragraph-highlight'>nosso catálogo de calçados infantis no atacado é a resposta.</span><br><br> Abasteça seu estoque!",
    image: "/img/renders/category-render-baby.png"
  },
  {
    title: "Masculino",
    text:
      "Destaque-se na moda masculina com as últimas tendências em calçados. <span class='paragraph-highlight'>Aumente suas vendas</span> e transforme cada passo em um símbolo de estilo.<br><br> Entre no mundo dos calçados masculinos no atacado e <span class='paragraph-highlight'>ofereça aos seus clientes uma experiência única.</span> Compre no atacado!",
    image: "/img/renders/category-render-male.png"
  },
  {
    title: "Feminino",
    text:
      "Nossa coleção é mais do que simplesmente sapatos; <span class='paragraph-highlight'>são expressões de estilo e personalidade.</span><br><br>Cada par é escolhido para elevar a confiança da mulher moderna, proporcionando <span class='paragraph-highlight'>conforto e elegância</span> em cada passo. Adquira já no atacado!",
    image: "/img/renders/category-render-female.png"
  }
];

const casePromoSlider = `
  <swiper-container class="promo-slider-cont" slides-per-view="auto" centered-slides="true" grab-cursor="true" slide-to-clicked-slide="true" pagination="true" pagination-clickable="true" loop="true">
    ${categories
      .map(
        category => `
          <swiper-slide class="case-slider">
            <div class="case-promo-content">
              <img src="${category.image}" alt="${category.title}" class="render-03">
              <h2 class="heading-2">${category.title}</h2>
              <p class="paragraph-1">${category.text}</p>
            </div>
            <div class="case-promo-cta-box">
              <hr class="stroke-division">
              <a href="https://www.wilsonatacado.com.br/" class="case-promo-bottom">
                <p class="case-promo-bottom-text">Veja Aqui</p>
                <i class="ri-arrow-right-up-line"></i>
              </a>
            </div>
          </swiper-slide>
        `
      )
      .join('')
    }
  </swiper-container>
`;

promoSliderCont.innerHTML = casePromoSlider;