let themeIndex = 0;

document.getElementById("clickBtn").addEventListener("click", () => {
  const themes = [
    "linear-gradient(135deg, #7b2ff7, #f107a3)", // Purple-Pink
    "linear-gradient(135deg, #001f3f, #0074D9)", // Blue
    "linear-gradient(135deg, #000000, #ff0000)", // Black-Red
  ];

  document.body.style.background = themes[themeIndex];

  // Move to next theme
  themeIndex = (themeIndex + 1) % themes.length;
});
