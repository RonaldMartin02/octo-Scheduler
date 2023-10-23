
$(document).ready(function () {
  //Save Button
  $(".saveBtn").on("click", function () {
    const userInput = $(this).siblings(".description").val();
    const timeBlockId = $(this).parent().attr("id");
    localStorage.setItem(timeBlockId, userInput);
  });
  //Delete Button
  $(".deleteBtn").on("click", function () {
    const timeBlockId = $(this).parent().attr("id");
    localStorage.removeItem(timeBlockId);
    $(this).siblings(".description").val("");
});
//Updates the style of the time block
  function updateHourStyles() {

    const currentHour = dayjs().hour();
    
    $(".time-block").each(function () {
      const timeBlockId = $(this).attr("id");
      const hour = parseInt(timeBlockId.split("-")[1]);

      if (hour < currentHour) {
        $(this).removeClass("present future").addClass("past");
      } else if (hour === currentHour) {
        $(this).removeClass("past future").addClass("present");
      } else {
        $(this).removeClass("past present").addClass("future");
      }
    });
  }

  updateHourStyles();

  $(".time-block").each(function () {
    const timeBlockId = $(this).attr("id");
    const userInput = localStorage.getItem(timeBlockId);
    $(this).find(".description").val(userInput);
  });
  $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));
});
