document.getElementById("clickBtn").addEventListener("click", () => {
  const output = document.getElementById("output");
  output.textContent = "Button clicked! App is working beautifully!";
  output.classList.add("show");
  console.log("Button clicked"); // debug
});
