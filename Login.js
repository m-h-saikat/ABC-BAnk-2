document.getElementById('login').addEventListener('click', function () {
  const AccNum = document.getElementById('AccountNumber').value;


  const Pass = document.getElementById('Password').value;

  if (AccNum == '123-456-789' && Pass == 'saikat123') {
    window.location.href = 'AccountInfo.html'


  } else {
    document.getElementById('incorrectPassword').innerText = 'Please choose Correct Acc. No & password.';
  }

})