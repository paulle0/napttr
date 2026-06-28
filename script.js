(function () {
  var STORAGE_KEY = "napttr-theme";
  var toggle = document.getElementById("theme-toggle");

  function setIcon(theme) {
    toggle.textContent = theme === "dark" ? "☾" : "☀";
  }

  /* Sync button icon with theme set by inline head script */
  setIcon(document.documentElement.getAttribute("data-theme") || "light");

  toggle.addEventListener("click", function () {
    var next =
      document.documentElement.getAttribute("data-theme") === "dark"
        ? "light"
        : "dark";
    document.documentElement.setAttribute("data-theme", next);
    setIcon(next);
    localStorage.setItem(STORAGE_KEY, next);
  });
})();
