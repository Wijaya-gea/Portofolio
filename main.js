let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function(e) {
  document.querySelector('body').classList.toggle('mobile-nav-active');
  this.classList.toggle('fa-xmark')
})

var typed = new Typed('.auto-input', {
  strings : ['Front-End developer!','Freelancer!','UI Designer!'], 
  typeSpeed : 100,
  backSpeed : 100,
  backDelay : 2000,
  loop : true, 
})