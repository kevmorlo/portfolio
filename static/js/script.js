const indicator = document.querySelector('.nav_indicateur');
const items = document.querySelectorAll('.nav_a');

function handleIndicator(el) {
  // Boucler sur tous items -> retirer la classe "actif"
  items.forEach(item => {
    item.classList.remove('actif');
    item.removeAttribute('style');
  })
  
  const elementColor = el.dataset.activeColor;
  const target = el.dataset.target;
  
  console.log(target);
  
  // Styliser l'indicateur
  indicator.style.width = `${el.offsetWidth}px`;
  indicator.style.backgroundColor = elementColor;
  indicator.style.left = `${el.offsetLeft}px`;
  
  // Ajout la classe actif
  el.classList.add('actif');
  el.style.color = elementColor;
}

items.forEach((item, index) => {
  item.addEventListener('click', e => {
    handleIndicator(e.target)
  });
  item.classList.contains('actif') && handleIndicator(item);
});