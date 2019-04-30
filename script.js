document.addEventListener('DOMContentLoaded', function() {

    const navLinks = document.querySelectorAll('.nav-list li a');

    navLinks.forEach(function(element) {
        element.addEventListener('click', function(event) {
            event.preventDefault();
            document.querySelector(event.target.hash).scrollIntoView({ 
                behavior: 'smooth' 
              });
            
        });
    
    });

    function subscribe(event) {

        event.preventDefault();
        let email = document.getElementsByClassName('your-email')[0].value;
      
        if (email === '') {
          alert('Please submit a valid email address');
        } else {
          alert('Thanks for subscribing!');
        }
    };

        document.querySelector('.subscribe').addEventListener('click', subscribe);

});