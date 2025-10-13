const promoSliderCont = document.getElementById("promo-slider-cont");

const categories = [
  {
    title: "Tendências",
    text:
      "Está planejando seu estoque para a <span class='paragraph-highlight'> Black Friday?</span> <br><br> Na Distribuidora Wilson, você encontra os <span class='paragraph-highlight'>lançamentos e tendências</span> que impulsionam as vendas e mantêm sua loja <span class='paragraph-highlight'>sempre atualizada</span> com o que o consumidor procura.",
    image: "https://i.imgur.com/GzMzLns.png",
    link: "https://www.wilsonatacado.com.br/lancamentos-calcados-atacado.html"
  },
  {
    title: "Tênis & Botas",
    text:
      "Ténis e botas são <span class='paragraph-highlight'>escolhas certeiras</span> para o período de maior movimento do varejo. <br><br> Garanta um mix estratégico de calçados fechados para o seu estoque e mantenha sua loja pronta para atender à <span class='paragraph-highlight'> demanda da temporada.</span>",
    image: "https://i.imgur.com/q8ZtaxD.png",
    link: "https://www.wilsonatacado.com.br/colecao-de-inverno-atacado.html"
  },
  {
    title: "Promoções",
    text:
      "Para quem busca ampliar o mix de produtos com investimento inteligente, <span class='paragraph-highlight'>nossa categoria de oportunidades é ideal.</span><br><br> Planeje-se com antecedência e garanta variedade de modelos com <span class='paragraph-highlight'>excelente potencial de venda no atacado.</span>",
    image: "https://i.imgur.com/Ath9Mgm.png",
    link: "https://www.wilsonatacado.com.br/outlet-calcados-atacado.html"
  },
  {
    title: "Infantil",
    text:
      "O segmento infantil movimenta vendas o ano todo — <span class='paragraph-highlight'>e na Black Friday, não é diferente.</span> <br><br> Monte um estoque completo e atrativo com calçados que encantam pais e crianças, garantindo <span class='paragraph-highlight'>variedade e qualidade na sua vitrine.</span>",
    image: "https://i.imgur.com/fmPGNd8.png",
    link: "https://www.wilsonatacado.com.br/infantil.html"
  },
  {
    title: "Masculino",
    text:
      "Prepare-se para atender o público masculino com <span class='paragraph-highlight'>estilo e estratégia.</span> <br><br> A categoria de calçados masculinos traz modelos versáteis e modernos, perfeitos para quem busca unir <span class='paragraph-highlight'>conforto, tendência e boa margem de venda.</span>",
    image: "https://i.imgur.com/yeMAXRl.png",
    link: "https://www.wilsonatacado.com.br/calcados-masculino-atacado.html"
  },
  {
    title: "Feminino",
    text:
      "Os calçados femininos continuam entre os produtos <span class='paragraph-highlight'>mais desejados pelos consumidores.</span><br><br> Aposte em modelos que traduzem <span class='paragraph-highlight'>estilo, conforto e autenticidade</span> — e destaque sua loja com um mix pensado para encantar em cada detalhe.",
    image: "https://i.imgur.com/rovCT7u.png",
    link: "https://www.wilsonatacado.com.br/calcados-feminino-atacado.html"
  }
];

const casePromoSlider = `
              <swiper-container
                class="promo-slider-cont"
                slides-per-view="auto"
                centered-slides="true"
                grab-cursor="true"
                slide-to-clicked-slide="true"
                pagination="true"
                pagination-clickable="true"
                loop="false">

                ${categories
    .map(
      category => `
          <swiper-slide class="case-slider">
            <div class="case-promo-content">
              <div class="case-promo-img-box">
                <img src="${category.image}" alt="${category.title}" class="render-03">
              </div>
              <h3 class="heading-2">${category.title}</h3>
              <p class="paragraph-1">${category.text}</p>
            </div>
            <div class="case-promo-cta-box">
              <hr class="stroke-division">
              <a href="${category.link}" class="case-promo-bottom">
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
