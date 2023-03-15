window.addEventListener('scroll', onScroll)
function onScroll() {
 showNavOnScroll()
 showBackToTopButtonOnScroll()
 activateMenuAtCurrentSection(home)
 activateMenuAtCurrentSection(services)
 activateMenuAtCurrentSection(about)
 activateMenuAtCurrentSection(contact)
}


function activateMenuAtCurrentSection(section){
 const targetLine = scrollY + innerHeight / 2

 const sectionTop = section.offsetTop
 const sectionHeight = section.offsetHeight
 const sectionTopReachOrPassedTargetline = targetLine >= sectionTop
 const sectionEndsAt = sectionTop + sectionHeight
 const sectionEndPassedTargetline = sectionEndsAt <= targetLine
 const sectionBoundaries = sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline
 const sectionId = section.getAttribute('id')
 const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)
 menuElement.classList.remove('active')
 if (sectionBoundaries) {
  menuElement.classList.add('active')
}

}

function showNavOnScroll() {
  if ( scrollY > 0 ){
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}
function showBackToTopButtonOnScroll() {
  if ( scrollY > 350 ){
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}
function openMenu(){
  document.body.classList.add('menu-expanded')

}
function closeMenu(){
  document.body.classList.remove('menu-expanded')
}
ScrollReveal({
  origin: 'top',
  distance: '40px',
  duration: 800,
}).reveal(`#home, 
#home img, 
.stats, 
#services,
#services header,
#services .cardm,
#about,
#about header,
#about img,
#contact,
#contact h2,
#contact .content,
#contact a,
#contact img,
footer`)