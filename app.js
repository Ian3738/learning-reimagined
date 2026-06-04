/* ════════════════════════════════════════════════════
   知識翻新 · Knowledge Building — 共用腳本
   ════════════════════════════════════════════════════ */
(function () {
  'use strict';

  /* ── 資料 ── */
  var PHOTOS = ["IMG_8620","IMG_8621","IMG_8622","IMG_8623","IMG_8624","IMG_8625","IMG_8626","IMG_8633","IMG_8634","IMG_8635","IMG_8636","IMG_8637","IMG_8638","IMG_8639","IMG_8640","IMG_8641","IMG_8642","IMG_8643","IMG_8646","IMG_8647","IMG_8648","IMG_8649","IMG_8650","IMG_8651","IMG_8652","IMG_8653","IMG_8659","IMG_8661","IMG_8662","IMG_8663","IMG_8664","IMG_8665","IMG_8666","IMG_8667","IMG_8668","IMG_8669","IMG_8670","IMG_8671","IMG_8672","IMG_8673","IMG_8674","IMG_8679","IMG_8680","IMG_8681","IMG_8683","IMG_8685","IMG_8686","IMG_8687","IMG_8688","IMG_8689","IMG_8690","IMG_8691","IMG_8692","IMG_8693","IMG_8694","IMG_8695","IMG_8696","IMG_8697","IMG_8698","IMG_8699","IMG_8700","IMG_8701","IMG_8702","IMG_8703","IMG_8706"];

  var WORKS = [
    { id:'g1', no:'01', title:'海廢大偵探：追蹤消失的塑膠足跡', en:'The Marine Debris Detective',
      team:'楊紫琇、高子媗', domain:'海洋環境教育', tech:'2D RPG ・ Scanner 2.0 AR 辨識',
      desc:'以 2D RPG 校園地圖出發，讓學生在遊戲中追蹤排入海洋的五大類廢棄物；結合 Scanner 2.0 虛擬辨識互動，把看不見的水文網絡視覺化，將「被動學習」轉化為「主動解謎」。' },
    { id:'g3', no:'02', title:'懂吃懂吃：我們是營養特攻隊', en:'The Nutrition Squad',
      team:'白宇安、陳奕安', domain:'營養教育', tech:'RPG 遊戲 ・ AI 教學影片（ADDIE）',
      desc:'以 RPG 遊戲與 AI 教學影片，依 ADDIE 模式打造五段式故事弧線（Hook→Explore→Build→Apply→Reflect），讓營養學從紙上走進生活，培養學生的營養辨讀與決策能力。' },
    { id:'g4', no:'03', title:'聲音守護者：一「鄉」情願，「音」為有你', en:'Guardians of Sound',
      team:'王浩宇、王若馨', domain:'文化記憶 ・ 聲音採集', tech:'HTML5 Canvas 2.5D ・ Gemini API',
      desc:'一款 2.5D 聲音採集遊戲，玩家操控「小音」在失落的文化村落中錄音、解謎；以 Gemini API 將聲音轉譯為有溫度的地方故事，重建 1970 年代的城市記憶，以學習體驗設計（LXD）為核心。' },
    { id:'g5', no:'04', title:'去去！假訊息走：數位黑魔法防禦術', en:'Defense Against the Digital Dark Arts',
      team:'吳靜炫、曾馨褕', domain:'數位素養 ・ 媒體識讀', tech:'MAGIC 沉浸式教學模組',
      desc:'面對演算法同溫層、AI 深偽與假訊息，以沉浸式實戰課程打造學生的「數位免疫力」。透過 MAGIC 教學模組（Mindful／Analyze／Guard／Innovate／Citizenship），培養批判思辨與資安意識。' },
    { id:'g8', no:'05', title:'迷失森林：同理心的真正力量', en:'The Lost Forest · The Power of Empathy',
      team:'陳重睿、李震熙', domain:'社會情緒學習 ・ 同理心', tech:'STAR 敘事 ・ KNSH × Kuse AI',
      desc:'一款以「同理心」為核心的敘事互動遊戲，運用 STAR 敘事框架與卡牌選擇機制，結合 KNSH × Kuse AI；引導學生從「急於解決問題」轉向「接納與陪伴」，在虛擬情境中練習換位思考。' },
    { id:'g6', no:'06', title:'無人知曉 × 赤壁：天塹棋', en:'A Solo Showcase of Two Works',
      team:'葉子寧（個人展出）', domain:'視覺小說 ・ 策略棋局', tech:'React + TypeScript ・ Minimax α-β 剪枝 ・ Canva',
      desc:'兩件作品的個人展出。《無人知曉》以視覺小說形式重啟文學閱讀動機，將太宰治《人間失格》等經典融入互動敘事；《赤壁：天塹棋》則是一款以「赤壁」為題、支援人機對弈的策略棋局，以 Minimax α-β 剪枝打造三段難度 AI。' }
  ];
  function poster(id){ return 'assets/posters/' + id + '.jpg'; }
  function full(id){ return 'assets/posters/full/' + id + '.jpg'; }
  function pad2(n){ return String(n).padStart(2, '0'); }
  function shortTitle(t){ return t.split('：')[0].split(' × ')[0].trim(); }
  function el(tag, cls){ var e = document.createElement(tag); if (cls) e.className = cls; return e; }

  var PAGE = document.body.getAttribute('data-page') || '';
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var lenis = null;

  /* ── 注入裝飾層 + 燈箱 + 轉場 ── */
  var atm = el('div', 'atmosphere'); atm.setAttribute('aria-hidden', 'true');
  atm.innerHTML = '<div class="spotlight"></div><div class="grain"></div>';
  var pf = el('div', 'page-frame'); pf.setAttribute('aria-hidden', 'true');
  var pr = el('div', 'progress'); pr.id = 'progress';
  document.body.insertBefore(atm, document.body.firstChild);
  document.body.appendChild(pf);
  document.body.appendChild(pr);

  var lb = el('div', 'lightbox'); lb.id = 'lightbox';
  lb.setAttribute('role', 'dialog'); lb.setAttribute('aria-modal', 'true'); lb.setAttribute('aria-hidden', 'true');
  lb.innerHTML =
    '<button class="lightbox__close" id="lbClose" aria-label="關閉">&times;</button>' +
    '<button class="lightbox__btn lightbox__prev" id="lbPrev" aria-label="上一張">&lsaquo;</button>' +
    '<figure class="lightbox__fig"><img class="lightbox__img" id="lbImg" src="" alt=""><figcaption class="lightbox__cap" id="lbCap"></figcaption></figure>' +
    '<button class="lightbox__btn lightbox__next" id="lbNext" aria-label="下一張">&rsaquo;</button>';
  document.body.appendChild(lb);

  var tr = el('div', 'transition'); tr.id = 'transition'; tr.setAttribute('aria-hidden', 'true');
  tr.innerHTML = '<div class="transition__mark"><span class="seal">翻</span><span>知識翻新</span></div>';
  document.body.appendChild(tr);

  /* ── 導覽列捲動狀態 + 進度條 ── */
  var nav = document.getElementById('nav');
  var ticking = false;
  function onScroll(){
    var y = window.scrollY;
    if (nav) nav.classList.toggle('scrolled', y > 40);
    var h = document.documentElement.scrollHeight - window.innerHeight;
    pr.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
    ticking = false;
  }
  window.addEventListener('scroll', function(){ if (!ticking){ requestAnimationFrame(onScroll); ticking = true; } }, { passive: true });

  /* ── 捲動浮現 ── */
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){ if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
  function observeReveals(){
    document.querySelectorAll('[data-reveal]').forEach(function(elm){
      if (elm.dataset.d) elm.style.setProperty('--d', elm.dataset.d + 'ms');
      io.observe(elm);
    });
  }

  /* ── 燈箱 ── */
  var lbImg = document.getElementById('lbImg'), lbCap = document.getElementById('lbCap');
  var lbItems = [], lbIdx = 0;
  function lbRender(){ var it = lbItems[lbIdx]; if (!it) return; lbImg.src = it.src; lbImg.alt = it.alt || ''; lbCap.innerHTML = it.cap || ''; }
  function lbOpen(items, i){ lbItems = items; lbIdx = i; lbRender(); lb.classList.add('open'); lb.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden'; if (lenis) lenis.stop(); }
  function lbClose(){ lb.classList.remove('open'); lb.setAttribute('aria-hidden','true'); document.body.style.overflow=''; if (lenis) lenis.start(); }
  function lbStep(d){ if (!lbItems.length) return; lbIdx = (lbIdx + d + lbItems.length) % lbItems.length; lbRender(); }
  document.getElementById('lbClose').addEventListener('click', lbClose);
  document.getElementById('lbPrev').addEventListener('click', function(){ lbStep(-1); });
  document.getElementById('lbNext').addEventListener('click', function(){ lbStep(1); });
  lb.addEventListener('click', function(e){ if (e.target === lb) lbClose(); });
  document.addEventListener('keydown', function(e){
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') lbClose();
    else if (e.key === 'ArrowLeft') lbStep(-1);
    else if (e.key === 'ArrowRight') lbStep(1);
  });

  /* ── 平滑慣性捲動（Lenis） ── */
  function initSmoothScroll(){
    if (reduce || !window.Lenis) return;
    lenis = new Lenis({ lerp: 0.085, smoothWheel: true, wheelMultiplier: 1 });
    lenis.on('scroll', function(){ if (window.ScrollTrigger) ScrollTrigger.update(); });
    if (window.gsap){ gsap.ticker.add(function(t){ lenis.raf(t * 1000); }); gsap.ticker.lagSmoothing(0); }
    else { var raf = function(t){ lenis.raf(t); requestAnimationFrame(raf); }; requestAnimationFrame(raf); }
    document.querySelectorAll('a[href^="#"]').forEach(function(a){
      a.addEventListener('click', function(e){ var t = document.querySelector(a.getAttribute('href')); if (t){ e.preventDefault(); lenis.scrollTo(t, { offset: -4 }); } });
    });
  }

  /* ── 頁面轉場（內部連結點擊 → 簾幕覆蓋 → 跳轉） ── */
  function setupTransitions(){
    if (reduce || !window.gsap) return;
    document.addEventListener('click', function(e){
      var a = e.target.closest ? e.target.closest('a') : null;
      if (!a) return;
      var href = a.getAttribute('href');
      if (!href || href.charAt(0) === '#' || a.target === '_blank' || /^(https?:|mailto:|tel:)/.test(href)) return;
      if (a.hasAttribute('data-no-transition')) return;
      e.preventDefault();
      tr.style.pointerEvents = 'auto';
      gsap.fromTo(tr, { yPercent: -100 }, { yPercent: 0, duration: .5, ease: 'power3.inOut', onComplete: function(){ window.location.href = href; } });
    });
  }

  /* ── 作品總覽 ── */
  function renderWorks(){
    var grid = document.getElementById('worksGrid'); if (!grid) return;
    WORKS.forEach(function(w, i){
      var a = el('a', 'work-card'); a.href = 'work.html?id=' + w.id;
      a.setAttribute('data-reveal', ''); a.setAttribute('data-d', (i % 3) * 90);
      a.innerHTML =
        '<div class="artwork"><div class="frame"><div class="mat"><div class="canvas">' +
        '<img src="' + poster(w.id) + '" alt="' + w.title + ' 海報" loading="lazy"></div></div></div></div>' +
        '<div class="work-card__cap"><span class="work-card__no">' + w.no + '</span><span>' +
        '<span class="work-card__title">' + w.title + '</span>' +
        '<span class="work-card__en">' + w.en + '</span>' +
        '<span class="work-card__team">' + w.team + '</span></span></div>';
      grid.appendChild(a);
    });
  }

  /* ── 作品專頁 ── */
  function renderWork(){
    var mount = document.getElementById('workMount'); if (!mount) return;
    var id = new URLSearchParams(location.search).get('id');
    var i = WORKS.map(function(w){ return w.id; }).indexOf(id);
    if (i < 0) i = 0;
    var w = WORKS[i];
    document.title = w.title + ' ｜ 知識翻新 Knowledge Building';
    mount.innerHTML =
      '<div class="work__media" data-reveal><div class="artwork artwork--zoom" id="workPoster" tabindex="0" role="button" aria-label="放大檢視海報">' +
        '<div class="frame"><div class="mat"><div class="canvas"><img src="' + poster(w.id) + '" alt="' + w.title + ' 海報"></div></div></div>' +
        '<span class="artwork__hint">點擊放大閱讀</span></div></div>' +
      '<div class="work__body" data-reveal data-d="120">' +
        '<div class="label__no"><small>Nº</small>' + w.no + '</div>' +
        '<h1 class="label__title" style="font-size:clamp(1.9rem,4vw,2.9rem)">' + w.title + '</h1>' +
        '<p class="label__en">' + w.en + '</p>' +
        '<ul class="label__meta">' +
          '<li><span class="k">Team</span><span class="v">' + w.team + '</span></li>' +
          '<li><span class="k">領域</span><span class="v">' + w.domain + '</span></li>' +
          '<li><span class="k">技術</span><span class="v">' + w.tech + '</span></li>' +
        '</ul>' +
        '<p class="work__desc">' + w.desc + '</p>' +
      '</div>';
    var prev = WORKS[(i - 1 + WORKS.length) % WORKS.length], next = WORKS[(i + 1) % WORKS.length];
    var wnav = document.getElementById('workNav');
    if (wnav){
      wnav.innerHTML =
        '<a href="work.html?id=' + prev.id + '">← 上一件<b>Nº ' + prev.no + '　' + shortTitle(prev.title) + '</b></a>' +
        '<a class="work-nav__home" href="works.html">作品總覽</a>' +
        '<a class="work-nav__next" href="work.html?id=' + next.id + '">下一件 →<b>' + shortTitle(next.title) + '　Nº ' + next.no + '</b></a>';
    }
    var posterEl = document.getElementById('workPoster');
    var items = WORKS.map(function(x){ return { src: full(x.id), alt: x.title, cap: x.team + '　<b>' + x.title + '</b>' }; });
    posterEl.addEventListener('click', function(){ lbOpen(items, i); });
    posterEl.addEventListener('keydown', function(e){ if (e.key === 'Enter' || e.key === ' '){ e.preventDefault(); lbOpen(items, i); } });
  }

  /* ── 膠卷放映廳 ── */
  var stripEls = [];
  function renderReel(){
    var rows = document.getElementById('reelRows'); if (!rows) return;
    var photoItems = PHOTOS.map(function(name, i){
      return { src: 'assets/photos/large/' + name + '.jpg', alt: '展場現場紀實 ' + (i + 1), cap: '展場紀實 · Documentation　<b>' + pad2(i + 1) + ' / ' + PHOTOS.length + '</b>' };
    });
    var N = 3;
    for (var s = 0; s < N; s++){ var st = el('div', 'reel__strip'); rows.appendChild(st); stripEls.push(st); }
    PHOTOS.forEach(function(name, i){
      var cell = el('button', 'cell'); cell.type = 'button';
      cell.setAttribute('data-no', pad2(i + 1) + ' / ' + PHOTOS.length);
      cell.setAttribute('aria-label', '放大檢視 現場紀實 第 ' + (i + 1) + ' 張');
      var img = el('img'); img.src = 'assets/photos/thumb/' + name + '.jpg'; img.alt = '展場現場紀實 ' + (i + 1); img.loading = 'eager'; img.decoding = 'async';
      cell.appendChild(img);
      cell.addEventListener('click', function(){ lbOpen(photoItems, i); });
      stripEls[i % N].appendChild(cell);
    });
    initReel();
  }
  function imagesReady(root, cb){
    var imgs = Array.prototype.slice.call(root.querySelectorAll('img'));
    var n = imgs.filter(function(i){ return !i.complete; }).length;
    if (!n){ cb(); return; }
    var done = function(){ if (--n <= 0) cb(); };
    imgs.forEach(function(i){ if (!i.complete){ i.addEventListener('load', done); i.addEventListener('error', done); } });
  }
  function initReel(){
    var section = document.getElementById('documentation');
    var stage = section.querySelector('.reel__stage');
    var perfs = section.querySelectorAll('.reel__perf i');
    var bar = document.getElementById('reelBar');
    var counter = document.getElementById('reelCounter');
    if (reduce || !window.gsap || !window.ScrollTrigger){ section.classList.add('is-fallback'); return; }
    gsap.registerPlugin(ScrollTrigger);
    var dists = [], maxDist = 1, cells = [];
    function measure(){
      var vw = window.innerWidth;
      dists = stripEls.map(function(st){ return Math.max(0, st.scrollWidth - vw); });
      maxDist = Math.max(1, Math.max.apply(null, dists));
      cells = [];
      stripEls.forEach(function(st, si){
        Array.prototype.forEach.call(st.children, function(c){ cells.push({ el: c, si: si, c: c.offsetLeft + c.offsetWidth / 2, no: c.getAttribute('data-no') }); });
      });
    }
    function layout(p){
      var center = window.innerWidth / 2;
      var sx = dists.map(function(d){ return -p * d; });
      stripEls.forEach(function(st, si){ st.style.transform = 'translate3d(' + sx[si].toFixed(1) + 'px,0,0)'; });
      var best = 2, bestNo = null;
      for (var k = 0; k < cells.length; k++){
        var o = cells[k];
        var cx = sx[o.si] + o.c;
        var nd = Math.min(1, Math.abs(cx - center) / (center * 1.05));
        o.el.style.transform = 'scale(' + (1 - nd * 0.18).toFixed(3) + ')';
        o.el.style.opacity = (1 - nd * 0.62).toFixed(3);
        if (nd < best){ best = nd; bestNo = o.no; }
      }
      var shift = (-p * maxDist * 0.5).toFixed(1) + 'px';
      for (var j = 0; j < perfs.length; j++){ perfs[j].style.backgroundPositionX = shift; }
      if (bar) bar.style.width = (6 + p * 94) + '%';
      if (counter && bestNo) counter.textContent = bestNo;
    }
    measure();
    ScrollTrigger.create({
      trigger: stage, start: 'top top', end: function(){ return '+=' + maxDist; },
      pin: true, anticipatePin: 1, invalidateOnRefresh: true,
      onRefresh: measure, onUpdate: function(self){ layout(self.progress); }
    });
    layout(0);
    imagesReady(stage, function(){ measure(); ScrollTrigger.refresh(); layout(0); });
    window.addEventListener('load', function(){ measure(); ScrollTrigger.refresh(); });
  }

  /* ── 啟動 ── */
  if (PAGE === 'works') renderWorks();
  if (PAGE === 'work') renderWork();
  if (PAGE === 'gallery') renderReel();
  observeReveals();
  onScroll();
  initSmoothScroll();
  setupTransitions();
})();
