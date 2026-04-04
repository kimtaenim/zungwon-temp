document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('.site-header');
  const hamburger = document.querySelector('.hamburger');
  const overlay = document.querySelector('.mobile-menu-overlay');
  const closeBtn = document.querySelector('.mobile-menu-close');

  // --- Scroll: toggle .scrolled on header ---
  function onScroll() {
    if (window.scrollY > 80) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // --- Active menu highlight based on pathname ---
  var path = location.pathname;
  document.querySelectorAll('.gnb > li > a').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href && href !== '#' && path.indexOf(href) !== -1) {
      link.classList.add('active');
    }
  });

  // --- Mobile hamburger menu ---
  if (hamburger && overlay) {
    hamburger.addEventListener('click', function () {
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', function () {
        overlay.classList.remove('open');
        document.body.style.overflow = '';
      });
    }

    overlay.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        overlay.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }
});
