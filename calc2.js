alert('Кэлькулятор версия 2!\nСчитаем вместе!');

function ins(num) {
  document.getElementById('enter').value += num;
}

function erase() {
  document.getElementById('enter').value = '';
}

function result() {
  let res = document.getElementById('enter').value;
  if (res) {
    document.getElementById('enter').value = eval(res);
  }
}
