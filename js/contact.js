$(document).ready(function() {
     var tel = $('#tel').text().split(' ').reverse().join(' ');
     $('#tel').text(tel);
     $('#tel').attr('href', 'tel:+33' + tel.substring(1).replace(/ /g,''));

     var email = $('#email').text().replace('[at]', '@');
     $('#email').text(email);
     $('#email').attr('href', 'mailto:' + email);
});
