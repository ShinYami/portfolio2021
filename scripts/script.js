(function () {
  const cursor = document.querySelector(".cursor");

  const editCursor = (e) => {
    const { clientX: x, clientY: y } = e;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
  };

  window.addEventListener("mousemove", editCursor);
})();

let content = document.getElementsByTagName("body")[0];
let darkMode = document.getElementById("dark-change");
darkMode.addEventListener("click", function () {
  darkMode.classList.toggle("active");
  content.classList.toggle("night");
});
