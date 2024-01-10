let currentIndex = 0;

    function showSlide(index) {
      const track = document.querySelector('.carousel-track');
      const slides = document.querySelectorAll('.events-cards');
      const slideWidth = slides[0].offsetWidth;

      currentIndex = index;

      track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    function nextSlide() {
      const slides = document.querySelectorAll('.events-cards');
      if (currentIndex < slides.length - 1) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      showSlide(currentIndex);
    }

    function prevSlide() {
      const slides = document.querySelectorAll('.events-cards');
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = slides.length - 1;
      }
      showSlide(currentIndex);
    }