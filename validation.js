/* Some JS to handle entering password, adapted from https://www.the-art-of-web.com/javascript/validate-password/ */

function validateFields() {
  var fullname = document.getElementById("grid-name");
  var email = document.getElementById("grid-email");
  var password = document.getElementById("grid-password");
  var passwordAgain = document.getElementById("grid-password-again");

  if (fullname.localCompare("")) {
    alert("Fel: Du måste fylla i ett namn.");
    fullname.focus();
    return false;
  }
}

function checkForm(form) {
  /*
                var pw1 = form.pw.value;
                var pw2 = form.pw-conf.value;

                var same = pw1.localCompare(pw2);
                */
  alert("same");
  //return false;

  if (form.grid - name.value == "") {
    alert("Fel: Du måste fylla i ett namn.");
    form.grid - name.focus();
    return false;
  }

  if (form.grid - email.value == "") {
    alert("Fel: Du måste fylla i en epostadress.");
    form.grid - email.focus();
    return false;
  }

  if (form.pw.value != form.pw - conf.value) {
    alert("Fel: Lösenorden är inte samma.");
    form.pw.focus();
    return false;
  }

  if (form.pw.value != "" && form.pw.value == form.pw - conf.value) {
    if (form.pw.value.length < 6) {
      alert("Fel: Lösenordet måste innehålla minst sex tecken.");
      form.pw.focus();
      return false;
    }
    if (form.pw.value == form.fullname.value) {
      alert("Fel: Lösenordet kan inte vara samma som namnet.");
      form.pw.focus();
      return false;
    }
  } else {
    form.pw.focus();
    alert("Du har inte valt något lösenord.");
    return false;
  }

  alert("You entered a valid password: " + form.pw.value);
  return true;
}
