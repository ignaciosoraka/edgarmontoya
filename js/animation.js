document.addEventListener('DOMContentLoaded', function () {
    var participantsElement = document.querySelector('[data-text="Asegurados"]');
    var programsElement = document.querySelector('[data-text="Horas: Tiempo de respuesta"]');
    var speakerElement = document.querySelector('[data-text="Conversaciones"]');
  
    var participantsCount = 0;
    var programsCount = 0;
    var speakerCount = 0;
  
    function animateCount(element, targetCount, intervalSpeed) {
      var currentCount = 0;
      var interval = setInterval(function () {
        if (currentCount >= targetCount) {
          clearInterval(interval);
        } else {
          currentCount += 1;
          element.querySelector('h3').innerText = currentCount + " " + element.dataset.text;
        }
      }, intervalSpeed);
    }
  
    function animateParticipants() {
      animateCount(participantsElement, 120, 50);
    }
  
    function animatePrograms() {
      animateCount(programsElement, 24, 4);
    }
  
    function animateSpeaker() {
      animateCount(speakerElement, 11, 400);
    }
  
    function checkScroll() {
      var scrollPosition = window.scrollY + window.innerHeight;
      var sectionPosition = document.getElementById('detail').offsetTop;
  
      if (scrollPosition > sectionPosition) {
        animateParticipants();
        animatePrograms();
        animateSpeaker();
        window.removeEventListener('scroll', checkScroll);
      }
    }
  
    window.addEventListener('scroll', checkScroll);
  });
  
  
  