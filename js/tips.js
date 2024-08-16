const tipsSlider = [
  {
    tipsSlider: `
      <img src="/img/renders/tips-discount-price.png" class="render-05" alt="Defina os descontos dos produtos">
      <h3 class="heading-2">Defina os descontos dos produtos</h3>
      <p class="paragraph-1">Você pode conceder reduções de preços mais conservadoras e aproveitar para instigar os clientes para promoções do fim de novembro.</p>
    `
  },
  {
    tipsSlider: `
      <img src="/img/renders/tips-progressive-discount.png" class="render-05" alt="Aposte em descontos progressivos">
      <h3 class="heading-2">Aposte em descontos progressivos</h3>
      <p class="paragraph-1">Encoraje o consumidor a adquirir mais produtos. Quanto mais itens ele comprar, maior será o abatimento no valor final de compra.</p>
    `
  },
  {
    tipsSlider: `
      <img src="/img/renders/tips-social-media.png" class="render-05" alt="Divulgue nas redes sociais">
      <h3 class="heading-2">Divulgue nas redes sociais</h3>
      <p class="paragraph-1">Você pode divulgar cupons de descontos nos stories e criar enquetes, por exemplo.</p>
    `
  },
  {
    tipsSlider: `
      <img src="/img/renders/tips-promo-kit.png" class="render-05" alt="Faça kits promocionais">
      <h3 class="heading-2">Faça kits promocionais</h3>
      <p class="paragraph-1">Isso é especialmente válido para conseguir dar vazão aos itens que não saem com tanta facilidade.</p>
    `
  },
  {
    tipsSlider: `
      <img src="/img/renders/tips-pre-sale.png" class="render-05" alt="Pré-Venda Exclusiva">
      <h3 class="heading-2">Pré-Venda Exclusiva</h3>
      <p class="paragraph-1">Ao oferecer Pré-Venda para clientes cadastrados, você recompensa sua fidelidade e o incentiva à fazer compras antecipadas.</p>
    `
  },
  {
    tipsSlider: `
      <img src="/img/renders/tips-fast-shipping.png" class="render-05 alt="Ofereça Entrega Rápida e Frete Grátis">
      <h3 class="heading-2">Ofereça Entrega Rápida e Frete Grátis</h3>
      <p class="paragraph-1">Garantir que os clientes recebam seus calçados rapidamente pode aumentar a satisfação e incentivar a finalização de compras.</p>
    `
  }
];

const tipsSliderCont = document.querySelector('.tips-slider-cont');
const tipsSliderWrapper = document.querySelector('.tips-slider-wrapper');

tipsSlider.forEach(tip => {
  const li = document.createElement('swiper-slide');
  li.classList.add('tips-slider');
  li.innerHTML = tip.tipsSlider;
  tipsSliderWrapper.appendChild(li);
});





