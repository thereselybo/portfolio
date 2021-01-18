// This is still a work in progress

const name = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");

export default function ValidateForm() {
    
    const nameValue = name.value.trim();
  const emailValue = email.value.trim();
  const messageValue = message.value.trim();

  if (
    validateElement(nameValue, 3) &&
    validateElement(messageValue, 5) &&
    validateEmail(emailValue)
  ) {
    console.log("huzzah")
  } else {
      console.log("oh no");
  }
}



function validateElement(element, length) {
  const checkedElement = element.id;
  const errorMessage = document.querySelector(`#${checkedElement}Error`);

  if (checkLength(element, length)) {
    errorMessage.style.display = "none";
    return true;
  } else {
    errorMessage.style.display = "block";
    return false;
  }
}

function checkLength(element, length) {
  return element.value.trim().length >= length;
}

export function validateEmail(element) {
  const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const patternMatches = regEx.test(element.value.trim());
  const checkedElement = element.id;
  const errorMessage = document.querySelector(`#${checkedElement}Error`);

  if (checkLength(element, 1)) {
    if (patternMatches) {
      errorMessage.style.display = "none";
      return true;
    } else {
      errorMessage.style.display = "block";
      return false;
    }
  } else {
    errorMessage.style.display = "none";
    return true;
  }
}
