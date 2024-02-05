let cont1 = document.querySelector("#cnt1");

let cont2 = document.querySelector("#cnt2");

let cont3 = document.querySelector("#cnt3");

let thrdbtn = document.querySelector(".btn3");

let dataForm = document.querySelector("#data");

let topics = document.querySelector("#topics");

let inputName = document.querySelector("#name");

let inputMail = document.querySelector("#mail");

let name = document.querySelector("#show-name");

let mail = document.querySelector("#show-id");

let subjects = document.querySelector("#show-sub");

dataForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("clicked");
  if (inputName.value.trim() != "" && inputMail.value.trim() != "") {
    localStorage.setItem("userName", inputName.value);
    localStorage.setItem("userMail", inputMail.value);
    cont1.style.display = "none";
    cont2.style.display = "block";
  } else {
    alert("Please enter both name and email before submitting.");
  }
});

topics.addEventListener("submit", (e) => {
  e.preventDefault();
  let selectedSub = Array.from(
    topics.querySelectorAll("input[type = checkbox]:checked")
  )
    .map((item) => item.value)
    .join(",");
  console.log(selectedSub);
  if (selectedSub == "") {
    alert("Please choose at least one subject.");
  } else {
    localStorage.setItem("subjects", selectedSub);
    cont2.style.display = "none";
    cont3.style.display = "block";
  }

  name.innerText = localStorage.getItem("userName");
  mail.innerText = localStorage.getItem("userMail");
  subjects.innerText = localStorage.getItem("subjects");
});

thrdbtn.addEventListener("click", (e) => {
  // localStorage.clear();
  name.innerHTML = " ";
  mail.innerText = " ";
  subjects.innerText = " ";
  cont3.style.display = "none";
  cont1.style.display = "block";
  location.reload();
});
