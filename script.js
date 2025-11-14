document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("clickBtn");
  const output = document.getElementById("output");

  btn.addEventListener("click", () => {
    output.innerText = "Button clicked! App is working beautifully!";
    output.classList.add("show");
  });
});
