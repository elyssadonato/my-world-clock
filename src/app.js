function updateCurrentTime() {
  let phoenixElement = document.querySelector("#phoenix");
  let phoenixDateElement = phoenixElement.querySelector(".date");
  let phoenixTimeElement = phoenixElement.querySelector(".time");
  let currentPhoenixTime = moment().tz("America/Phoenix");
  phoenixDateElement.innerHTML = currentPhoenixTime.format("MMMM Do, YYYY");
  phoenixTimeElement.innerHTML = currentPhoenixTime.format(
    "h:mm:ss [<small>]A[<small>]"
  );
  let manilaElement = document.querySelector("#manila");
  let manilaDateElement = manilaElement.querySelector(".date");
  let manilaTimeElement = manilaElement.querySelector(".time");
  let currentManilaTime = moment().tz("Asia/Manila");
  manilaDateElement.innerHTML = currentManilaTime.format("MMMM Do, YYYY");
  manilaTimeElement.innerHTML = currentManilaTime.format(
    "h:mm:ss [<small>]A[<small>]"
  );
  let romeElement = document.querySelector("#rome");
  let romeDateElement = romeElement.querySelector(".date");
  let romeTimeElement = romeElement.querySelector(".time");
  let currentRomeTime = moment().tz("Europe/Rome");
  romeDateElement.innerHTML = currentRomeTime.format("MMMM Do, YYYY");
  romeTimeElement.innerHTML = currentRomeTime.format(
    "h:mm:ss [<small>]A[<small>]"
  );
  let seoulElement = document.querySelector("#seoul");
  let seoulDateElement = seoulElement.querySelector(".date");
  let seoulTimeElement = seoulElement.querySelector(".time");
  let currentSeoulTime = moment().tz("Asia/Seoul");
  seoulDateElement.innerHTML = currentSeoulTime.format("MMMM Do, YYYY");
  seoulTimeElement.innerHTML = currentSeoulTime.format(
    "h:mm:ss [<small>]A[<small>]"
  );
  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let currentSydneyTime = moment().tz("Australia/Sydney");
  sydneyDateElement.innerHTML = currentSydneyTime.format("MMMM Do, YYYY");
  sydneyTimeElement.innerHTML = currentSydneyTime.format(
    "h:mm:ss [<small>]A[<small>]"
  );
  let berlinElement = document.querySelector("#berlin");
  let berlinDateElement = berlinElement.querySelector(".date");
  let berlinTimeElement = berlinElement.querySelector(".time");
  let currentBerlinTime = moment().tz("Europe/Berlin");
  berlinDateElement.innerHTML = currentBerlinTime.format("MMMM Do, YYYY");
  berlinTimeElement.innerHTML = currentBerlinTime.format(
    "h:mm:ss [<small>]A[<small>]"
  );
}

function showCurrentCityTime(event) {
  let timeZone = event.target.value;
  if (timeZone === "current") {
    timeZone = moment.tz.guess();
  }
  let cityName = timeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(timeZone);
  let cityElement = document.querySelector("#cities");
  cityElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
       <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
   </div>`;
}
updateCurrentTime();
setInterval(updateCurrentTime);

let citiesSelectElement = document.querySelector("#select");
citiesSelectElement.addEventListener("change", showCurrentCityTime);
