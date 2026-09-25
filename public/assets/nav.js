/* Practice Areas menu. No dependencies.
   Desktop: click or hover "Practice Areas" to open the panel; hover, focus, or click a category on the left
   to show its sub-pages on the right. Every item is a real link, so the menu works with JavaScript off
   (the links are in the HTML) and search engines can follow them.
   Phone: the hamburger opens the menu; each category has a + button that expands its sub-pages. */
(function () {
  var header = document.querySelector('.site-header');
  if (!header) return;
  var item = header.querySelector('.pa-item');
  var toggle = header.querySelector('.pa-toggle');
  var burger = header.querySelector('.burger');
  var tabs = header.querySelectorAll('.pa-tabs li');
  var panes = header.querySelectorAll('.pa-pane');
  var desktop = function () { return window.matchMedia('(min-width: 901px)').matches; };
  var closeTimer;

  function show(key) {
    tabs.forEach(function (t) { t.classList.toggle('active', t.getAttribute('data-key') === key); });
    panes.forEach(function (p) { p.classList.toggle('active', p.getAttribute('data-key') === key); });
  }
  function open(state) {
    item.classList.toggle('pa-open', state);
    toggle.setAttribute('aria-expanded', state ? 'true' : 'false');
  }

  var canHover = window.matchMedia('(hover: hover)').matches;
  toggle.addEventListener('click', function () {
    /* With a mouse, hovering has already opened the panel, so a click must not close it again. */
    if (desktop() && canHover) { open(true); } else { open(!item.classList.contains('pa-open')); }
  });
  item.addEventListener('mouseenter', function () { if (desktop()) { clearTimeout(closeTimer); open(true); } });
  item.addEventListener('mouseleave', function () { if (desktop()) { closeTimer = setTimeout(function () { open(false); }, 180); } });
  tabs.forEach(function (t) {
    var key = t.getAttribute('data-key');
    t.addEventListener('mouseenter', function () { show(key); });
    t.querySelector('a').addEventListener('focus', function () { show(key); });
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { open(false); header.classList.remove('nav-open'); } });
  document.addEventListener('click', function (e) { if (!header.contains(e.target)) { open(false); } });

  if (burger) burger.addEventListener('click', function () {
    var on = header.classList.toggle('nav-open');
    burger.setAttribute('aria-expanded', on ? 'true' : 'false');
  });
  header.querySelectorAll('.pa-acc .row button').forEach(function (b) {
    b.addEventListener('click', function () {
      var li = b.closest('li');
      var on = li.classList.toggle('open');
      b.textContent = on ? '−' : '+';
      b.setAttribute('aria-expanded', on ? 'true' : 'false');
    });
  });

  /* Open the panel on the category the current page belongs to. */
  var current = header.getAttribute('data-current-hub');
  if (current) show(current);
})();
