$(document).ready(function(){
  $('a.thumbnail').bind('click', function(e){
    var a = $(e.target).parent();
    var img = $('<img>').attr('src', a.attr('href')).width('800px');
    var div = $('<div>').append(img);
    $(div).dialog({width:800});
    return false;
  });
});