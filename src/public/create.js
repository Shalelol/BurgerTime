$(function() {
  $('#datetimepicker1').datetimepicker({
    inline: true,
    sideBySide: true
  }).data("DateTimePicker").minDate(new Date());
  $('.start-burgertime').on('click', function() {
      window.location = '/?time=' + $('#datetimepicker1').data("DateTimePicker").date().valueOf()
  });
});
