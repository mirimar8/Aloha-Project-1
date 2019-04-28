document.addEventListener('DOMContentLoaded', function() {

    const navLinks = document.querySelectorAll('.nav-list li a');

    navLinks.forEach(function(element) {
        // console.log(element);
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

        
    


    // forms['form']['email']




    // const about = document.getElementById('about');
    // const shop = document.getElementById('shop');
    // const featured = document.getElementById('featured');
    // const updates = document.getElementById('updates');

    // about.addEventListener('click', function(event) {
    //     event.preventDefault();
    //     document.querySelector('.about-section').scrollIntoView({ 
    //         behavior: 'smooth' 
    //       })
    //       console.log('about', event.target.hash);
    // });

    // shop.addEventListener('click', function(event) {
    //     event.preventDefault();
    //     document.querySelector('.products-section').scrollIntoView({ 
    //         behavior: 'smooth' 
    //       })
    //       console.log('shop', event);

    // });


    // featured.addEventListener('click', function(event) {
    //     event.preventDefault();
    //     document.querySelector('.featured-section').scrollIntoView({ 
    //         behavior: 'smooth' 
    //       })
    //       console.log('featured', event);

    // });


    // updates.addEventListener('click', function(event) {
    //     event.preventDefault();
    //     document.querySelector('.updates-section').scrollIntoView({ 
    //         behavior: 'smooth' 
    //       })
    //       console.log('updates', event);

    // });


    

    
    
    
    
    
    




    
});