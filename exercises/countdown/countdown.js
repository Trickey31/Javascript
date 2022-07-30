window.addEventListener("load", function () {
  const daysText = document.querySelector(".days");
  const hoursText = document.querySelector(".hours");
  const minutesText = document.querySelector(".minutes");
  const secondsText = document.querySelector(".seconds");

  function countdown(date) {
    const endDate = new Date(date).getTime();
    const currentDate = new Date().getTime();
    if (isNaN(endDate) || endDate - currentDate <= 0) return;
    setInterval(calculate, 1000);
    function calculate() {
      let days, hours, minutes, seconds;
      const now = new Date();
      const startDate = now.getTime();
      let timeRemaining = parseInt((endDate - startDate) / 1000);
      if (timeRemaining > 0) {
        days = parseInt(timeRemaining / 86400);
        timeRemaining = timeRemaining % 86400;
        hours = parseInt(timeRemaining / 3600);
        timeRemaining = timeRemaining % 3600;
        minutes = parseInt(timeRemaining / 60);
        timeRemaining = timeRemaining % 60;
        seconds = timeRemaining;

        daysText.textContent = `0${days}`.slice(-2);
        hoursText.textContent = `0${hours}`.slice(-2);
        minutesText.textContent = `0${minutes}`.slice(-2);
        secondsText.textContent = `0${seconds}`.slice(-2);
      } else return;
    }
  }
  countdown("Wed Aug 3 2022 07:16:45 GMT+0700 (Giờ Đông Dương)");
});
