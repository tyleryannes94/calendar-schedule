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

  // Add the past, present, or future class to each time block
  $(".time-block").each(function() {
    var hour = parseInt($(this).attr("id").split("-")[1]);
    var currentHour = dayjs().hour();

    if (hour < currentHour) {
      $(this).addClass("past");
    } else if (hour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });

  // Pulls data from localStorage to the correct time slot
  $(".time-block").each(function() {
    const hour = $(this).attr("id");
    const text = localStorage.getItem(hour);

    if (text) {
      $(this).find(".description").val(text);
    }

  // TODO: Add code to display the current date in the header of the page.
  $("#currentDay").text(dayjs().format('MMMM D, YYYY, HH:mm:ss'));

})
});
