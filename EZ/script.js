
// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo1").style.width = "218px";
    document.getElementById("size").style.fontSize = "18px";
    document.getElementById("size2").style.fontSize = "18px";
    document.getElementById("size3").style.fontSize = "18px";
    document.getElementById("size4").style.fontSize = "18px";
    
    
  } else {
    document.getElementById("navbar").style.padding = "79px 10px";
    document.getElementById("logo1").style.width = "424px";
    document.getElementById("size").style.fontSize = "30px";
    document.getElementById("size2").style.fontSize = "30px";
    document.getElementById("size3").style.fontSize = "30px";
    document.getElementById("size4").style.fontSize = "30px";
    
  }
}


//########################################################################################
//     MENU BUTTON SCROLL 

document.addEventListener("DOMContentLoaded", function () 
{
  // Get all elements with class "scrollLink"
  const scrollLinks = document.querySelectorAll(".scrollLink");

  // Add click event listener to each scroll link
  scrollLinks.forEach(function (scrollLink) 
  {
      scrollLink.addEventListener("click", function (event) 
      {
          event.preventDefault(); // Prevent the default behavior of the anchor link

          // Get the target element to scroll to based on the link's "href" attribute
          const targetId = scrollLink.getAttribute("href").slice(1); // Remove the "#" from href
          const targetElement = document.getElementById(targetId);

          // Calculate the middle of the screen
          const middleOfScreen = window.innerHeight / 4.6;

          // Calculate the position to scroll to, taking the middle of the screen into account
          const targetOffset = targetElement.getBoundingClientRect().top + window.pageYOffset;
          const scrollToPosition = targetOffset - middleOfScreen;

          // Use smooth scrolling to scroll to the adjusted position
          window.scrollTo({ top: scrollToPosition, behavior: "smooth" });
      });
  });
});
