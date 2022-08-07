function showCity() {
  let ciTy = "524305";

  let out = "";
  let idCity = document.querySelector(".weather__locations-city");
  for (let i = 0; i < idCity.length; i++) {
    if (idCity[i].selected === true) {
      out += `${idCity[i].value}`;
      ciTy = out;
    }
  }

  function datEs() {
    const Data = new Date();
    const Month = Data.getMonth();
    const Day = Data.getDate();
    let months = [
      "января",
      "февраля",
      "марта",
      "апреля",
      "мае",
      "июня",
      "июля",
      "августа",
      "сентября",
      "октября",
      "ноября",
      "декабря",
    ];
    let mmm = [];
    for (let i = 0; i < months.length; i++) {
      mmm.push(months[i]);
      if (Month === mmm.length - 1) {
        Month = mmm[i];
      }
    }
    document.querySelector(".weather__body-date").textContent =
      "Сегодня" + " " + Day + " " + Month;
  }
  datEs();

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?id=${ciTy}&appid=404cbfbbd894d2d47b4f3eb99b98bf71`
  )
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      // console.log(data);
      document.querySelector(".weather__locations-carrent").textContent =
        data["name"];
      document.querySelector(".weather__body-temp").innerHTML =
        Math.round(data["main"]["temp"] - 273) + "&deg";
      document.querySelector(".weather__body-descr").textContent =
        data["weather"][0]["description"];
      document.querySelector(
        ".weather__img"
      ).innerHTML = `<img src="https://openweathermap.org/img/wn/${data["weather"][0]["icon"]}@2x.png">`;
      document.querySelector(
        ".weather__footer-humidity"
      ).textContent = `Влажностьb ${data["main"]["humidity"]}%`;
      document.querySelector(".weather__footer-pressure").textContent =
        "Давление" + " " + data["main"]["pressure"] + " " + "мм рт. ст.";
      document.querySelector(".weather__footer-wind").textContent =
        "Скорость ветра" + " " + data["wind"]["speed"] + " " + "м/c";
    })
    .catch(function () {});
}
document.querySelector(".weather__locations-city").onchange = showCity;
export default showCity;
