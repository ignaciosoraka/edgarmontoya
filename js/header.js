$(document).ready(function() {
    // Añade clase 'wow' y 'fadeInUp' a las imágenes para activar las animaciones
    $('.seguro-img').addClass('wow fadeInUp');

    // Habilita el efecto de "flotar" al pasar el mouse sobre las imágenes
    $('.seguro-img').hover(
      function() {
        $(this).css('transform', 'scale(1.1)');
        $(this).css('box-shadow', '0 0 20px rgba(0, 0, 0, 0.3)');
      },
      function() {
        $(this).css('transform', 'scale(1)');
        $(this).css('box-shadow', 'none');
      }
    );
  });