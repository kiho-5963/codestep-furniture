
$(function(){
  $('.toggle_btn').on('click', function() {
    // #headerにopenクラスが存在する場合
    if ($('#header').hasClass('open')) {
      $('#header').removeClass('open');
    } else {
      // add
      $('#header').addClass('open');
    }
  });


  $('#mask').on('click', function() {
    $('#header').removeClass('open');
  });
});