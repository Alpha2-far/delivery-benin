document.addEventListener('DOMContentLoaded', () => {
  const origin = document.querySelector('#origin');
  const destination = document.querySelector('#destination');
  const parcel = document.querySelector('#parcel');
  const price = document.querySelector('#price');
  const order = document.querySelector('#order-link');
  const routes = {
    pahou_pahou: ['700 FCFA', 'Tarif local Pahou'], pahou_calavi: ['1 000 FCFA', 'Pahou vers Abomey-Calavi'],
    calavi_pahou: ['1 000 FCFA', 'Abomey-Calavi vers Pahou'], pahou_cotonou: ['1 500–2 000 FCFA', 'Selon le quartier de Cotonou'],
    cotonou_pahou: ['1 500–2 000 FCFA', 'Selon le quartier de Cotonou'], calavi_calavi: ['Sur devis', 'Course locale à confirmer'],
    cotonou_cotonou: ['Sur devis', 'Course locale à confirmer'], calavi_cotonou: ['Sur devis', 'Tarif à confirmer'], cotonou_calavi: ['Sur devis', 'Tarif à confirmer']
  };
  const update = () => {
    if (!origin || !destination || !price || !order) return;
    const [label, detail] = routes[`${origin.value}_${destination.value}`] || ['Sur devis', 'Tarif à confirmer avec notre équipe'];
    price.textContent = label;
    const text = `Bonjour DELIVERY BENIN, je souhaite organiser une livraison. Départ : ${origin.options[origin.selectedIndex].text}. Destination : ${destination.value ? destination.options[destination.selectedIndex].text : 'à préciser'}. Envoi : ${parcel.value}. Tarif estimé : ${label} (${detail}). Merci de confirmer.`;
    order.href = `https://wa.me/2290190192526?text=${encodeURIComponent(text)}`;
  };
  [origin, destination, parcel].forEach(control => control?.addEventListener('change', update));
  update();
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#nav');
  toggle?.addEventListener('click', () => {
    const opened = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(opened));
  });
  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
  }));
});
