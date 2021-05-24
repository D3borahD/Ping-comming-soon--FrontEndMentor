const btn = document.querySelector("#button");

btn.addEventListener("click", () => {
  const form = document.querySelector("form");
  const email = document.querySelector("#email").value;
  const text = document.querySelector(".error");
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email.match(pattern)) {
    form.classList.add("valid");
    form.classList.remove("invalid");
  } else {
    form.classList.remove("valid");
    form.classList.add("invalid");
    text.innerHTML = "Please providea valid email adress";

    // text.style.color = hsl(354, 100%, 66%);
  }
});
