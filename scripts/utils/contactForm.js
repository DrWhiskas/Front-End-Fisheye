function displayModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "none";
}

const submit = document.getElementById("contact__submit");
const form = document.getElementById("form");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  let name = checkName();
  let last = checkLast();
  let email = checkEmail(myEmail);
  let message = checkMessage();
  if (name == false || last == false || email == false || message == false) {
  } else {
    console.clear();
    console.log("name : " + myFirstname.value);
    console.log("Lastname : " + myLastname.value);
    console.log("email : " + myEmail.value);
    console.log("message : " + myMessage.value);
    closeModal();
    form.reset();
  }
});
let myFirstname = document.getElementById("first");
let myLastname = document.getElementById("last");
let myEmail = document.getElementById("email");
let myMessage = document.getElementById("message");

function checkName() {
  if (myFirstname.value == "" || myFirstname.value.length < 2) {
    myFirstname.style.border = "2px solid red";
    return false;
  } else {
    myFirstname.style.border = "none";
    return true;
  }
}
function checkLast() {
  if (myLastname.value == "" || myLastname.value.length < 2) {
    myLastname.style.border = "2px solid red";
    return false;
  } else {
    myLastname.style.border = "none";
    return true;
  }
}
function checkEmail(myEmail) {
  let emailRegExp = new RegExp(
    "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$",
    "g"
  );
  if (emailRegExp.test(myEmail.value)) {
    myEmail.style.border = "none";
    return true;
  } else {
    myEmail.style.border = "2px solid red";
    return false;
  }
}
function checkMessage() {
  if (myMessage.value == "") {
    myEmail.style.border = "2px solid red";
    return false;
  } else {
    myMessage.style.border = "none";
    return true;
  }
}
