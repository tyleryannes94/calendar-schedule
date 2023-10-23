

$(function () {
  // Created these constant variables to create the time blocks in JS rather than in HTML; this way it's more dynamic and cleaner code
  const container = $(".container-lg.px-5");
  const timeBlocks = [
    { id: "hour-9", time: "9AM" },
    { id: "hour-10", time: "10AM" },
    { id: "hour-11", time: "11AM" },
    { id: "hour-12", time: "12pm" },
    { id: "hour-13", time: "1PM" },
    { id: "hour-14", time: "2PM" },
    { id: "hour-15", time: "3PM" },
    { id: "hour-16", time: "4PM" },
    { id: "hour-17", time: "5PM" }
];
// This code runs a loop for each of the timeblock array items to create the calendar timeblock; this was done via HTML but instead I'm using JS to append the time blocks to the container.
timeBlocks.forEach(block => {
  container.append(`<div id="${block.id}" class="row time-block">
      <div class="col-2 col-md-1 hour text-center py-3">${block.time}</div>
      <textarea class="col-8 col-md-10 description" rows="3"></textarea>
      <button class="btn saveBtn col-2 col-md-1" aria-label="save">
          <i class="fas fa-save" aria-hidden="true"></i>
      </button>
  </div>`);
});

  // event listener that saves the item to localStorage when the save button is pressed.
  $(".saveBtn").click(function() {
    const hour = $(this).parent().attr("id");
    const text = $(this).siblings(".description").val();
    localStorage.setItem(hour, text);
  });

  // Add the past, present, or future class to each time block
  $(".time-block").each(function() {
    const hour = parseInt($(this).attr("id").split("-")[1]);
    const currentHour = dayjs().hour();

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

// Displays the current date in the header of the page.
  $("#currentDay").text(dayjs().format('MMMM D, YYYY, HH:mm:ss'));

})
});
