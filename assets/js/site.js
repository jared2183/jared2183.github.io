// Small progressive enhancements. The site works fully without this file.
(function () {
  var root = document.documentElement;
  root.classList.add('js');

  // Header border once the page has scrolled.
  var header = document.querySelector('.site-header');
  if (header) {
    var update = function () {
      header.classList.toggle('is-stuck', window.scrollY > 8);
    };
    window.addEventListener('scroll', update, { passive: true });
    update();
  }

  // Reveal sections as they enter the viewport.
  var targets = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && targets.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    targets.forEach(function (el) { io.observe(el); });
  } else {
    targets.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // Current year in the footer.
  var year = document.querySelector('[data-year]');
  if (year) year.textContent = String(new Date().getFullYear());
})();
