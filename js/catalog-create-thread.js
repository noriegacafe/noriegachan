/*fold create new thread in catalog*/
$('document').ready(function () {
  createThreadShowing = false;
  $('.show-create-thread-catalog').on("click",function() {
    if (!createThreadShowing) {
      $('.show-create-thread-catalog').html('['+_('Create thread')+']');
      $('#create-thread-catalog').css('display', 'table');
      createThreadShowing = true;
    } else {
      $('.show-create-thread-catalog').html('['+_('Create thread')+']');
      $('#create-thread-catalog').css('display', 'none');
      createThreadShowing = false;
    }
    return false;
  });
});
