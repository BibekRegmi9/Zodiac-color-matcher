const zodiac = document.getElementById("zodiac");
const body = document.body;
const changeBg = () => {
  switch (zodiac.value) {
    case "aries":
      body.style.backgroundColor = "Red";
      break;

    case "taurus":
      body.style.backgroundColor = "Green";
      break;

    case "taurus":
      body.style.backgroundColor = "#00ff00";
      break;

    case "gemini":
      body.style.backgroundColor = "Yellow";
      break;

    case "cancer":
      body.style.backgroundColor = "Silver";
      break;

    case "leo":
      body.style.backgroundColor = "Gold";
      break;

    case "virgo":
      body.style.backgroundColor = "Brown";
      break;

    case "libra":
      body.style.backgroundColor = "Pink";
      break;

    case "scorpius":
      body.style.backgroundColor = "Black";
      break;

    case "sagittarius":
      body.style.backgroundColor = "Purple";
      break;

    case "capricornus":
      body.style.backgroundColor = "Grey";
      break;

    case "aquarius":
      body.style.backgroundColor = "Blue";
      break;

    case "pisces":
      body.style.backgroundColor = "#90ee90";
      break;

    default:
      break;
  }
};
