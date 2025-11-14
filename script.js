console.log("JS connected and ready!");

const btn = document.getElementById("clickBtn");
const output = document.getElementById("output");

btn.addEventListener("click", () => {
  output.innerText = "Button clicked! App is working!";
  output.classList.add("show");
});
