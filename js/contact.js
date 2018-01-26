$(document).ready(function() {
     tel = $('.fa-phone').next().text().split(' ').reverse().join(' ');
     $('.fa-phone').next().text(tel);
     $('.fa-phone').next().attr('href', 'callto:+33' + tel.substring(1).replace(/ /g,''));
});

