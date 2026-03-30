document.addEventListener("DOMContentLoaded", function () {
  var quantityContainers = document.querySelectorAll(".quantity-container");
  quantityContainers.forEach(function (container) {
    var input = container.querySelector(".quantity-amount");
    var decrease = container.querySelector(".decrease");
    var increase = container.querySelector(".increase");
    if (!input || !decrease || !increase) {
      return;
    }
    decrease.addEventListener("click", function () {
      var current = parseInt(input.value, 10);
      if (isNaN(current)) {
        current = 1;
      }
      if (current > 1) {
        input.value = current - 1;
      }
    });
    increase.addEventListener("click", function () {
      var current = parseInt(input.value, 10);
      if (isNaN(current)) {
        current = 1;
      }
      input.value = current + 1;
    });
  });
  var animatedSections = document.querySelectorAll(".hero, .product-section, .why-choose-section, .testimonial-section, .blog-section, .untree_co-section, .footer-section");
  var options = {
    threshold: 0.15
  };
  function handleIntersection(entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("section-visible");
        observer.unobserve(entry.target);
      }
    });
  }
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(handleIntersection, options);
    animatedSections.forEach(function (section) {
      section.classList.add("section-hidden");
      observer.observe(section);
    });
  } else {
    animatedSections.forEach(function (section) {
      section.classList.add("section-visible");
    });
  }
  var navLinks = document.querySelectorAll(".custom-navbar-nav a");
  navLinks.forEach(function (link) {
    var href = link.getAttribute("href");
    if (!href || href.charAt(0) !== "/") {
      return;
    }
    link.addEventListener("click", function (event) {
      event.preventDefault();
      var targetFile = href.replace(/^\//, "");
      var currentUrl = window.location.href;
      var lastSlashIndex = currentUrl.lastIndexOf("/");
      var base = currentUrl.slice(0, lastSlashIndex + 1);
      window.location.href = base + targetFile;
    });
  });
  var cartLinks = document.querySelectorAll(".custom-navbar-cta a");
  cartLinks.forEach(function (link) {
    var href = link.getAttribute("href");
    if (!href || href.charAt(0) !== "/") {
      return;
    }
    link.addEventListener("click", function (event) {
      event.preventDefault();
      var targetFile = href.replace(/^\//, "");
      var currentUrl = window.location.href;
      var lastSlashIndex = currentUrl.lastIndexOf("/");
      var base = currentUrl.slice(0, lastSlashIndex + 1);
      window.location.href = base + targetFile;
    });
  });
});