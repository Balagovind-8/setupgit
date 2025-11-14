document.getElementById("clickBtn").addEventListener("click", function () {
  const output = document.getElementById("output");
  output.innerText = "Button clicked! App is working beautifully!";
  output.classList.add("show");
});
