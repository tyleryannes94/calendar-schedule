// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  // event listener that saves the item to localStorage when the save button is pressed.
  $(".saveBtn").click(function() {
    const hour = $(this).parent().attr("id");
    const text = $(this).siblings(".description").val();
    localStorage.setItem(hour, text);
  });

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //

  // Pulls data from localStorage to the correct time slot
  $(".time-block").each(function() {
    var hour = $(this).attr("id");
    var text = localStorage.getItem(hour);

    if (text) {
      $(this).find(".description").val(text);
    }

  // TODO: Add code to display the current date in the header of the page.
  $("#currentDay").text(dayjs().format('MMMM D, YYYY, HH:mm:ss'));

})
});
