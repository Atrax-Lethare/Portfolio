 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function (e) {
         e.preventDefault();
         document.querySelector(this.getAttribute('href')).scrollIntoView({
             behavior: 'smooth'
         });
     });
 });

const trigger = document.getElementById('profile');
const popup = document.getElementById('nav-profile');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    
    if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
      popup.classList.add('show');
    } else {
      popup.classList.remove('show');
    }
    
  });
}, { threshold: 0 }); 

observer.observe(trigger);


