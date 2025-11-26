 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function (e) {
         e.preventDefault();
         document.querySelector(this.getAttribute('href')).scrollIntoView({
             behavior: 'smooth'
         });
     });
 });

document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for your message! (This is a demo - in production, it would send via email/API.)');
});

document.getElementsByClassName("project-card")[1].addEventListener("click", function () {
    alert("Project yet to be uploaded.");
});

document.getElementsByClassName("project-card")[2].addEventListener("click", function () {
    alert("Project yet to be uploaded.");
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



