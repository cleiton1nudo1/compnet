$(function() {

    $('tbody:first').addClass('table-body');
    
    $('body').addClass('container');

    $('table').replaceWith('div'+ $(this).text() + 'div');

    $('tr').replaceWith('div'+ $(this).text() + 'div');

    $('td').replaceWith('div'+ $(this).text() + 'div');

});