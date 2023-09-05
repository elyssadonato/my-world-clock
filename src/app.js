function updateCurrentTime() {
  let phoenixElement = document.querySelector("#phoenix");
  let phoenixDateElement = phoenixElement.querySelector(".date");
  let phoenixTimeElement = phoenixElement.querySelector(".time");
  let currentPhoenixTime = moment().tz("America/Phoenix");
  phoenixDateElement.innerHTML = currentPhoenixTime.format("MMMM Do, YYYY");
  phoenixTimeElement.innerHTML = currentPhoenixTime.format(
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
}
updateCurrentTime();
setInterval(updateCurrentTime);
