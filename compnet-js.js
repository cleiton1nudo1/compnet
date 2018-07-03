$(function() {

    $('tbody:first').addClass('table-body');
    
    $('body').addClass('container');

    $('table').replaceWith('<div>'+ $(this).text() + '</div>');

});