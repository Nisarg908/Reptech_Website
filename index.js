  // Function to set the clicked nav-link as active
  function setActiveNavLink(event) {
    $('.scroll').removeClass('active');
    $(event.target).addClass('active');
  }

  // Add click event listener to the nav-links
  $(document).ready(function() {
    $('.scroll').on('click', setActiveNavLink);
  });

  // Function to add the active class to the corresponding nav-link based on the scroll position
  function setActiveNavByScroll() {
    const scrollPosition = $(window).scrollTop();

    $('section').each(function(index) {
      const offsetTop = $(this).offset().top;
      const offsetBottom = offsetTop + $(this).outerHeight();

      if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
        $('.scroll').removeClass('active');
        $('.scroll').eq(index).addClass('active');
      }
    });
  }

  // Add event listener to the scroll event
  $(window).on('scroll', setActiveNavByScroll);

//   // Call setActiveNavByScroll on page load
  $(window).on('load', setActiveNavByScroll);



// $(document).ready(function(){
//     $(window).scroll(function(){
//         var scroll = $(window).scrollTop();
//         const offsetTop = $(this).offset().top;
//       const offsetBottom = offsetTop + $(this).outerHeight();

//       if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
//         $('.scroll').removeClass('active');
//         $('.scroll').eq(index).addClass('active');
//       }
//         if (scroll > 300) {
//           $(".black").css("background" , "blue");
//         }
  
//         else{
//             $(".black").css("background" , "#333");  	
//         }
//     })
//   })