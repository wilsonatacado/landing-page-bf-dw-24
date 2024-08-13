const promoSliderCont = document.getElementById("promo-slider-cont");

const categories = [
  {
    title: "Tendências",
    text:
      "Está precisando de novas indicações para a sua loja?<br><br>Aqui na Wilson, você encontra diversos modelos no atacado. Aproveite para se preparar com as melhores tendências e aumentar a sua margem de lucro.",
    image: "/img/renders/category-render-trend.png"
  },
  {
    title: "Tênis & Botas",
    text:
      "A coleção indispensável para o inverno inclui o mix de tênis e botas, entre elas temos promoções. <br><br>Portanto, a melhor opção é se preparar com marcas renomadas de calçados fechados para aquecer suas vendas nesta estação.",
    image: "/img/renders/category-render-boots.png"
  },
  {
    title: "Promoções",
    text:
      "Aumente suas margens de lucro e atraia mais clientes com nossa categoria de Promoções de Calçados no Atacado.<br><br>Esta é a oportunidade ideal para lojistas que desejam maximizar seus ganhos e oferecer produtos de qualidade a preços competitivos.",
    image: "/img/renders/category-render-sale.png"
  },
  {
    title: "Infantil",
    text:
      "Se você é um revendedor que busca encantar pais e responsáveis com produtos de qualidade, nosso catálogo de calçados infantis no atacado é a resposta. <br><br>Abasteça seu estoque!",
    image: "/img/renders/category-render-baby.png"
  },
  {
    title: "Masculino",
    text:
      "Seja destaque na moda masculina, apresentando aos seus clientes as últimas tendências em calçados. <br><br>Impulsione suas vendas e faça com que cada passo seja uma declaração de estilo. Junte-se a nós no emocionante mundo dos calçados masculinos no atacado e dê aos seus clientes uma experiência única em moda para os pés. Compre no atacado!",
    image: "/img/renders/category-render-male.png"
  },
  {
    title: "Feminino",
    text:
      "Nossa coleção é mais do que simplesmente sapatos; são expressões de estilo e personalidade. <br><br>Cada par é escolhido para elevar a confiança da mulher moderna, proporcionando conforto e elegância em cada passo. Adquira já no atacado!",
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
              <a href="#" class="case-promo-bottom">
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