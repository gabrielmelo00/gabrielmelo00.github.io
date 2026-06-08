(function () {
  var saved = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;
    btn.querySelector('i').className = saved === 'dark' ? 'fas fa-sun' : 'fas fa-moon';

    btn.addEventListener('click', function () {
      var current = document.documentElement.getAttribute('data-theme');
      var next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      btn.querySelector('i').className = next === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    });
  });
})();
