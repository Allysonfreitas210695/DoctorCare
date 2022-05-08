window.addEventListener('scroll', onScroll);

onScroll();

function onScroll() {
  showNavOnScroll();
  showBackToTopButtonOnScroll();

  activateMenuAtCurrentSection(home);
  activateMenuAtCurrentSection(services);
  activateMenuAtCurrentSection(about);
  activateMenuAtCurrentSection(contact);
}

function activateMenuAtCurrentSection( section ){
  const targetLine = scrollY + innerHeight / 2;


  //verificar se a seção passou da linha

  // quais dados vou precisar?

  // o top da seção
  const sectionTop = section.offsetTop;

  // a altura da seção
  const sectionHeight = section.offsetHeight;

  // o topo da secao chegou ou ultrapassou a linha alto
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop;


  // a seçao termina onde?
  const sectionEndAt = sectionTop + sectionHeight;

  // o final da seção passou da linha alvo
  const sectionEndPassedTargetLine = sectionEndAt <= targetLine;

  // limetes da seção
  const sectionBoundaries = sectionTopReachOrPassedTargetline && !sectionEndPassedTargetLine;

  const menuElement = document.querySelector(`.menu a[href*=${section.getAttribute('id')}]`)

  menuElement.classList.remove('active');
  if(sectionBoundaries){
    menuElement.classList.add('active');
  }
}

function showNavOnScroll(){
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }  
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 500) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }  
}

 
function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}


ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,

}).reveal(`
#home, 
#home img, 
#home .stats, 
#services,
#about,
#about header, 
#about .conttent
`);


function sayMyName() {

}