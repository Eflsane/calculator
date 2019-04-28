let t = 0;
function calculate() {
  let field1 = Number(document.getElementById('field1').value);
  const field2 = Number(document.getElementById('field2').value);
  const act = document.getElementById('acti').value;
  switch (act) {
    case '+':
      field1 = field1 + field2;
      break;
    case '-':
      field1 = field1 - field2;
      break;
    case '*':
      field1 = field1 * field2;
      break;
    case '/':
      field1 = field1 / field2;
      break;
    default:
      alert('error');
  }
  t += 360;
  document.getElementById('eq1').style.transform = 'rotate('+ t +'deg)';
  document.getElementById('equal').innerHTML = field1;
  document.getElementById('field1').value = field1;
}
