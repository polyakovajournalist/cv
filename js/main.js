$(document).ready(function() {
    $('.b-header__burgerMenu').click(function() {
      $(this).toggleClass('active');
      $("nav").toggleClass('m-shown');
    });
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
  });