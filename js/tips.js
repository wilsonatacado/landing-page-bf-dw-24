const tipsSlider = [
  {
    tipsSlider: `
      <img src="https://i.imgur.com/0n5azLl.png" class="render-05" alt="Defina os descontos dos produtos">
      <h3 class="heading-2">Defina os descontos dos produtos</h3>
      <p class="paragraph-1">Você pode conceder reduções de preços mais conservadoras e aproveitar para <span class="paragraph-highlight">instigar os clientes para promoções do fim de novembro.</p>
    `
  },
  {
    tipsSlider: `
      <img src="https://i.imgur.com/fcoUzQ3.png" class="render-05" alt="Aposte em descontos progressivos">
      <h3 class="heading-2">Aposte em descontos progressivos</h3>
      <p class="paragraph-1"><span class="paragraph-highlight">Encoraje o consumidor a adquirir mais produtos.</span> Quanto mais itens ele comprar, maior será o abatimento no valor final de compra.</p>
    `
  },
  {
    tipsSlider: `
      <img src="https://i.imgur.com/ZMZLMJ3.png" class="render-05" alt="Divulgue nas redes sociais">
      <h3 class="heading-2">Divulgue nas redes sociais</h3>
      <p class="paragraph-1">Você pode divulgar <span class="paragraph-highlight">cupons de descontos</span> nos stories e criar enquetes, por exemplo.</p>
    `
  },
  {
    tipsSlider: `
      <img src="https://i.imgur.com/2nXgmXK.png" class="render-05" alt="Faça kits promocionais">
      <h3 class="heading-2">Faça kits promocionais</h3>
      <p class="paragraph-1">Isso é especialmente válido para <span class="paragraph-highlight">conseguir dar vazão aos itens</span> que não saem com tanta facilidade.</p>
    `
  },
  {
    tipsSlider: `
      <img src="https://i.imgur.com/Tlq5IXi.png" class="render-05" alt="Pré-Venda Exclusiva">
      <h3 class="heading-2">Pré-Venda Exclusiva</h3>
      <p class="paragraph-1">Ao oferecer Pré-Venda para clientes cadastrados, você <span class="paragraph-highlight">recompensa sua fidelidade</span> e o incentiva à fazer <span class="paragraph-highlight">compras antecipadas.</span></p>
    `
  },
  {
    tipsSlider: `
      <img src="https://i.imgur.com/OfqLy8w.png" class="render-05 alt="Ofereça Entrega Rápida e Frete Grátis">
      <h3 class="heading-2">Ofereça Entrega Rápida e Frete Grátis</h3>
      <p class="paragraph-1">Garantir que os clientes recebam seus calçados rapidamente pode <span class="paragraph-highlight">aumentar a satisfação</span> e <span class="paragraph-highlight">incentivar a finalização de compras.</span></p>
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





