$(document).ready(function() {
     var tel = $('.fa-phone').next().text().split(' ').reverse().join(' ');
     $('.fa-phone').next().text(tel);
     $('.fa-phone').next().attr('href', 'tel:+33' + tel.substring(1).replace(/ /g,''));

     var email = $('.fa-envelope-o').next().text().replace('[at]', '@');
     $('.fa-envelope-o').next().text(email);
     $('.fa-envelope-o').next().attr('href', 'mailto:' + email);
});
