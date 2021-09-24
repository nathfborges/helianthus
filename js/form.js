const $otp_length = 5;

const element = document.getElementById('OTPInput');
for (let i = 0; i < $otp_length; i++) {
  let inputField = document.createElement('input'); // Creates a new input element
  inputField.className = "form border.focus";
  // Do individual OTP input styling here;
  inputField.id = 'otp-field' + i; // Don't remove
  inputField.maxLength = 1; // Sets individual field length to 1 char
  element.appendChild(inputField); // Adds the input field to the parent div (OTPInput)
}


/*  This is for switching back and forth the input box for user experience */
const inputs = document.querySelectorAll('#OTPInput > *[id]');

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('keydown', function(event) {
    if (event.key === "Backspace") {

      if (inputs[i].value == '') {
        if (i != 0) {
          inputs[i - 1].focus();
        }
      } else {
        inputs[i].value = '';
      }

    } else if (event.key === "ArrowLeft" && i !== 0) {
      inputs[i - 1].focus();
    } else if (event.key === "ArrowRight" && i !== inputs.length - 1) {
      inputs[i + 1].focus();
    } else if (event.key != "ArrowLeft" && event.key != "ArrowRight") {
      inputs[i].setAttribute("type", "text");
      inputs[i].value = ''; // Bug Fix: allow user to change a random otp digit after pressing it
      setTimeout(function() {
        inputs[i].setAttribute("type", "password");
      }, 1000); // Hides the text after 1 sec
    }
  });
  inputs[i].addEventListener('input', function() {
    inputs[i].value = inputs[i].value.toUpperCase(); // Converts to Upper case. Remove .toUpperCase() if conversion isnt required.
    if (i === inputs.length - 1 && inputs[i].value !== '') {
      return true;
    } else if (inputs[i].value !== '') {
      inputs[i + 1].focus();
    }
  });

}
/*  This is to get the value on pressing the submit button
  *   In this example, I used a hidden input box to store the otp after compiling data from each input fields
  *   This hidden input will have a name attribute and all other single character fields won't have a name attribute
  *   This is to ensure that only this hidden input field will be submitted when you submit the form */

document.getElementById('otpSubmit').addEventListener("click", function() {
  const inputs = document.querySelectorAll('#OTPInput > *[id]');
  let compiledOtp = '';
  for (let i = 0; i < inputs.length; i++) {
    compiledOtp += inputs[i].value;
  }
  document.getElementById('otp').value = compiledOtp;
  event.preventDefault();
  console.log(compiledOtp);
  return true;
});