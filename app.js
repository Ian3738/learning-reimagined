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
      quote:'把看不見的足跡，一一找回來。',
      lead:'《海廢大偵探》是一款以校園為地圖的 2D RPG。學生化身偵探，在熟悉的角落中循線追蹤那些「消失」於日常、最終排入海洋的塑膠足跡，並一一辨識流入海洋的五大類廢棄物。',
      problem:'海洋廢棄物對學生而言常是「遙遠而無感」的議題——知道海裡有垃圾，卻覺得與自己無關、也無力改變。如何讓抽象的環境數據，變成學生願意主動追查的線索？',
      approach:'團隊以 Mayer 多媒體學習與情境學習理論為基礎，把知識藏進探索與解謎；並開發 Scanner 2.0 虛擬辨識互動，讓玩家「掃描」物件、即時辨認材質與去向，把看不見的水文與排放網絡視覺化，更串接 Earth Nullschool 全球洋流平台，將校園與真實海洋連起來。',
      building:'它把學生從「被動知道」推向「主動調查」——觀察、提出假設、蒐證、再得出結論。海廢不再是課本上的結論，而是一份可被探究、討論、持續補完的線索；學生因此成為環境知識的建構者，而非接收者。' },
    { id:'g3', no:'02', title:'懂吃懂吃：我們是營養特攻隊', en:'The Nutrition Squad',
      team:'白宇安、陳奕安', domain:'營養教育', tech:'RPG 遊戲 ・ AI 教學影片（ADDIE）',
      quote:'看得懂字，更要會選。',
      lead:'《懂吃懂吃：我們是營養特攻隊》結合 RPG 遊戲與 AI 教學影片，讓營養知識從紙上的標示，走進學生每天的餐桌選擇。',
      problem:'營養標示對中小學生而言過於抽象，難以連結到真實的飲食決策；傳統宣導生硬、難以內化，學生往往「看得懂字，卻不會選」。',
      approach:'團隊以 ADDIE（分析—設計—開發—實施—評鑑）系統化設計課程，並把學習歷程編成五段式故事弧線：HOOK 暖身、EXPLORE 探索、BUILD 建構、APPLY 應用、REFLECT 反思——讓學生在任務中蒐集、比較、統整營養資訊，最後實際做出選擇並回顧修正。',
      building:'五段弧線中的「BUILD（建構）」與「REFLECT（反思）」正是築知的縮影：學生不是背下標準答案，而是把零碎資訊組裝成可用的判斷，再透過回顧不斷優化——讓營養知識在一次次決策中被親手蓋起來。' },
    { id:'g4', no:'03', title:'聲音守護者：一「鄉」情願，「音」為有你', en:'Guardians of Sound',
      team:'王浩宇、王若馨', domain:'文化記憶 ・ 聲音採集', tech:'HTML5 Canvas 2.5D ・ Gemini API ・ LXD',
      quote:'每一種聲音，都是一段等待被聽見的記憶。',
      lead:'《聲音守護者》是一款以學習體驗設計（LXD）為核心的 2.5D 探索遊戲。玩家操控「小音」，在一座失落的文化村落裡採集聲音、循著聲線尋回被遺忘的地方記憶。',
      problem:'地方文化與在地歷史，往往以單向講述的方式被「告知」，學生難以產生情感連結。如何讓一段聲音、一處場景，重新成為值得親近與守護的記憶？',
      approach:'遊戲以 HTML5 Canvas 打造 2.5D 場景，並以 Gemini API 化身 NPC「阿誠師」，把採集到的物理聲音解碼、轉譯為有溫度的地方故事；畫面更以灰階、復古到 1970 年代的視覺濾鏡層層回溯，帶玩家走進城市的舊時光，逐步集成屬於村落的「核心音景圖鑑」。',
      building:'學生不是聆聽既成的歷史，而是親自採集、解碼，並共同累積一份可擴充的「音景圖鑑」——一個能被持續補完、改進的知識物。聲音在這裡成為被建構的文化知識，呼應築知「知識是社群共構成果」的精神。' },
    { id:'g5', no:'04', title:'去去！假訊息走：數位黑魔法防禦術', en:'Defense Against the Digital Dark Arts',
      team:'吳靜炫、曾馨褕', domain:'數位素養 ・ 媒體識讀', tech:'MAGIC 沉浸式教學模組',
      quote:'科技帶來便利，思辨帶來自由。',
      lead:'《去去！假訊息走：數位黑魔法防禦術》是一套為國小高年級設計的沉浸式實戰課程，以闖關遊戲打造學生面對假訊息的「數位免疫力」。',
      problem:'在演算法同溫層、AI 深偽與釣魚詐騙環伺的時代，學生既是資訊的重度使用者，也是最容易受傷的一群。生硬的資安宣導，難以抵禦真實世界的誘惑與陷阱。',
      approach:'課程以自創的 MAGIC 五大模組推進——Mindful 覺知與反思、Analyze 分析與拆解、Guard 守護與防禦、Innovate 創新與實作、Citizenship 公民與實踐；學生在關卡中辨識深偽、拆解內容農場、管理個資隱私，通關後取得搜集到的「出口資訊」與證書。',
      building:'Analyze（拆解）與 Innovate（創新實作）讓學生不再囫圇接收資訊，而是檢驗來源、重構判斷、產出自己的觀點——批判思辨正是知識翻新的核心。誠如作品所言：「做資訊的主人，而非演算法的受眾。」' },
    { id:'g8', no:'05', title:'迷失森林：同理心的真正力量', en:'The Lost Forest · The Power of Empathy',
      team:'陳重睿、李震熙', domain:'社會情緒學習 ・ 同理心', tech:'STAR 敘事 ・ 卡牌機制 ・ KNSH × Kuse AI',
      quote:'先接住情緒，再談解決。',
      lead:'《迷失森林：同理心的真正力量》是一款以「同理心」為核心的敘事互動遊戲，以 STAR 敘事框架與卡牌選擇機制，帶學生走過一段關於理解與陪伴的旅程。',
      problem:'面對他人的困境，孩子常急於「解決問題」，卻忽略了感受與陪伴。同理心難以用講述教會——它需要在一次次選擇與後果中被親身體會。',
      approach:'遊戲以 STAR 敘事框架鋪陳情境，玩家透過「同理心卡牌」在關鍵時刻做出選擇，並對照「無罪宣判」與「深度同理」兩種回應的差異；並運用 KNSH × Kuse AI 生成情境與回饋，引導學生從「急於解決」轉向「接納與陪伴」。',
      building:'同理心也是一種需要被「建構」的知識。透過卡牌選擇與情境試煉，學生反覆修正自己對他人處境的理解，把一次次的情感經驗，蓋成可遷移的社會情緒能力——這是築知在「人」的面向上的實踐。' },
    { id:'g6', no:'06', title:'無人知曉 × 赤壁：天塹棋', en:'A Solo Showcase of Two Works',
      team:'葉子寧（個人展出）', domain:'視覺小說 ・ 策略棋局', tech:'React + TypeScript ・ Minimax α-β 剪枝 ・ Canva',
      quote:'讀懂了文字，才算讀懂了文學。',
      lead:'這是葉子寧的個人展出，收錄兩件題材迥異、卻同樣把「理解」變成主動建構的作品：以視覺小說重啟文學閱讀的《無人知曉》，以及一款支援人機對弈的策略棋局《赤壁：天塹棋》。',
      problem:'文學常被當成「讀過就好」的文字，學生難以走進角色的內心；而策略思考與演算法等抽象概念，也少有讓人「親手做出來」的機會。',
      approach:'《無人知曉》以視覺小說的形式，將太宰治《人間失格》《奔跑吧，美樂斯》等經典化為可互動的敘事，讓讀者在選擇與對話中與文本相遇。《赤壁：天塹棋》則以 React + TypeScript 從零打造 8×10 棋盤，並以 Minimax α-β 剪枝（depth-2）實作三段難度的 AI 對手，棋子美術以 Canva 完成，於 GitHub Pages 即時可玩。',
      building:'兩件作品都把「理解」翻轉為「建造」：讀者在視覺小說裡主動與文本對話，玩家在棋局裡推演與修正策略；尤其親手以演算法「蓋出」一個會思考的對手，正是把知識化為可運作系統的最佳示範——築知的字面與精神，都在這裡。' }
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
  tr.innerHTML = '<div class="transition__mark"><span class="seal">築</span><span>築知</span></div>';
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
    document.title = w.title + ' ｜ 築知 Knowledge Building';
    mount.innerHTML =
      '<div class="work__media" data-reveal><div class="artwork artwork--zoom" id="workPoster" tabindex="0" role="button" aria-label="放大檢視海報">' +
        '<div class="frame"><div class="mat"><div class="canvas"><img src="' + poster(w.id) + '" alt="' + w.title + ' 海報"></div></div></div>' +
        '<span class="artwork__hint">點擊放大閱讀</span></div></div>' +
      '<div class="work__body" data-reveal data-d="120">' +
        '<div class="label__no"><small>Nº</small>' + w.no + '</div>' +
        '<h1 class="label__title" style="font-size:clamp(1.9rem,4vw,2.9rem)">' + w.title + '</h1>' +
        '<p class="label__en">' + w.en + '</p>' +
        (w.quote ? '<p class="work__quote">「' + w.quote + '」</p>' : '') +
        '<ul class="label__meta">' +
          '<li><span class="k">Team</span><span class="v">' + w.team + '</span></li>' +
          '<li><span class="k">領域</span><span class="v">' + w.domain + '</span></li>' +
          '<li><span class="k">技術</span><span class="v">' + w.tech + '</span></li>' +
        '</ul>' +
        '<p class="work__lead">' + w.lead + '</p>' +
        '<section class="work__sec"><h2>教學現場的提問</h2><p>' + w.problem + '</p></section>' +
        '<section class="work__sec"><h2>設計與做法</h2><p>' + w.approach + '</p></section>' +
        '<section class="work__building"><span class="seal" style="--s:46px">築</span><div class="work__building-body"><h2>與「築知」的呼應</h2><p>' + w.building + '</p></div></section>' +
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

  /* ── 首頁：築知 筆畫書寫（楷體常駐；資料就緒才書寫，避免空白與重疊） ── */
  function initHeroDraw(){
    var wrap = document.getElementById('heroDraw');
    var fin = document.getElementById('heroFinal');
    var title = document.querySelector('.hero__title');
    if (!wrap || !fin || reduce || !window.HanziWriter) return;   // 保底：直接顯示楷體
    var fs = parseFloat(getComputedStyle(title).fontSize) || 150;
    var size = Math.round(Math.min(fs, (window.innerWidth * 0.8) / 2));
    // 楷體（fin）預設可見（CSS opacity 1）→ 載入期間絕不空白
    var ready = 0, started = false, failed = false, insts;
    function keepFinal(){            // 保底：維持楷體、不書寫
      if (started || failed) return; failed = true; wrap.style.display = 'none';
    }
    function startDraw(){            // 兩字資料皆就緒，才隱藏楷體並開始書寫
      if (started || failed || ready < 2) return;
      started = true;
      fin.style.opacity = '0';
      wrap.style.opacity = '1';
      (function draw(i){
        if (i >= insts.length) return;            // 寫完保留筆畫，不交叉淡入（避免重疊）
        try { insts[i].animateCharacter({ onComplete: function(){ draw(i + 1); } }); }
        catch (e) { fin.style.opacity = '1'; wrap.style.display = 'none'; }  // 書寫失敗 → 回楷體
      })(0);
    }
    try {
      insts = ['築', '知'].map(function(c){
        var box = document.createElement('span'); box.className = 'hero__glyph'; wrap.appendChild(box);
        return HanziWriter.create(box, c, {
          width: size, height: size, padding: Math.round(size * 0.04),
          showOutline: false, showCharacter: false,
          strokeColor: '#1d1b17', strokeAnimationSpeed: 2.2, delayBetweenStrokes: 24,
          onLoadCharDataSuccess: function(){ ready++; startDraw(); },
          onLoadCharDataError: keepFinal
        });
      });
    } catch (e) { keepFinal(); return; }
    setTimeout(function(){ if (!started) keepFinal(); }, 4500);   // 資料太慢 → 維持楷體
  }

  /* ── 啟動 ── */
  if (PAGE === 'works') renderWorks();
  if (PAGE === 'work') renderWork();
  if (PAGE === 'gallery') renderReel();
  if (PAGE === 'home') initHeroDraw();
  observeReveals();
  onScroll();
  initSmoothScroll();
  setupTransitions();
})();
