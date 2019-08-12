document.addEventListener('DOMContentLoaded', function () {

  const navLinks = document.querySelectorAll('.nav-list li a');

  navLinks.forEach(function (element) {
    element.addEventListener('click', function (event) {
      console.log(event);
      event.preventDefault();
      document.querySelector(event.target.hash).scrollIntoView({
        behavior: 'smooth'
      });

    });

  });


  function ValidateEmail(event) {
    console.log(event);
    event.preventDefault();

    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const email = document.getElementsByClassName('your-email')[0].value;


    if (mailformat.test(email)) {
      alert('Thanks for subscribing!');
    } else {
      alert("You have entered an invalid email address!")
    }

  };

  document.querySelector('.subscribe').addEventListener('click', ValidateEmail);

});


