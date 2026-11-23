/* ============================================================
   Hannah's Reading Workshop · Exercise 2 (Matching)
   1) 段落分句与高亮   2) 选项题渲染与判分   3) 双向联动
   ============================================================ */
(function () {
  'use strict';

  /* ---------- 0. 常量 ---------- */
  var PALETTE = [
    '#FFD666', '#7BD88F', '#6FB6F2', '#FF9BB0', '#C79BF0',
    '#FFB566', '#71D6C7', '#A8B6F5', '#D9C48A'
  ];
  var PASSAGES = (window.PASSAGES || []).slice().sort(function (a, b) { return a.no - b.no; });

  (function mergeExtra() {
    var ex = window.EXTRA || {};
    PASSAGES.forEach(function (p) {
      var e = ex[p.id];
      if (!e) return;
      if (e.vocab && e.vocab.length) p.vocab = (p.vocab || []).concat(e.vocab);
      if (e.syntax && e.syntax.length) p.syntax = (p.syntax || []).concat(e.syntax);
    });
  })();

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ---------- 1. 工具 ---------- */
  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function hex2rgb(h) {
    h = h.replace('#', '');
    return [parseInt(h.substr(0, 2), 16), parseInt(h.substr(2, 2), 16), parseInt(h.substr(4, 2), 16)];
  }
  function rgba(h, a) { var c = hex2rgb(h); return 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',' + a + ')'; }

  function norm(s) {
    return String(s).replace(/[\u2018\u2019]/g, "'").replace(/[\u201C\u201D]/g, '"')
      .replace(/\s+/g, ' ').trim().toLowerCase();
  }
  function align(s) {
    return String(s).replace(/[\u2018\u2019]/g, "'").replace(/[\u201C\u201D]/g, '"');
  }

  /* ---------- 2. 分句 ---------- */
  var ABBR = /(?:\b(?:a\.m|p\.m|mr|mrs|ms|dr|prof|no|st|e\.g|i\.e|etc|vs|fig)|\b[A-Z])\.$/;

  function splitSentences(text) {
    var used = /[.!?][\u201D\u2019"']?\s+(?=[A-Z0-9\u201C\u2018"'(£])/g;
    var parts = [], last = 0, m;
    while ((m = used.exec(text)) !== null) {
      parts.push({ t: text.slice(last, m.index + m[0].trim().length), i: last });
      last = m.index + m[0].length;
    }
    parts.push({ t: text.slice(last), i: last });

    var merged = [];
    for (var k = 0; k < parts.length; k++) {
      var p = parts[k];
      if (merged.length && ABBR.test(merged[merged.length - 1].t.trim())) {
        merged[merged.length - 1].t += ' ' + p.t;
        parts[k + 1] && (parts[k + 1].i = p.i);
      } else merged.push({ t: p.t, i: p.i });
    }
    return merged.map(function (x) { return x.t.trim(); }).filter(function (t) { return t.length; });
  }

  /* ---------- 3. 索引 ---------- */
  function buildIndex(p) {
    var sents = [];
    p.sections.forEach(function (sec) {
      splitSentences(sec.text).forEach(function (t, si) {
        sents.push({
          sid: 's' + sec.key + (si + 1),
          sec: sec.key,
          secName: sec.label || '',
          no: si + 1,
          text: t,
          search: norm(t)
        });
      });
    });

    var bad = [];
    p.questions.forEach(function (q, qi) {
      q._c = PALETTE[qi % PALETTE.length];
      q._hit = null;
      var keys = q.key ? (Array.isArray(q.key) ? q.key : [q.key]) : [];
      for (var ki = 0; ki < keys.length && !q._hit; ki++) {
        var nk = norm(keys[ki]);
        for (var i = 0; i < sents.length; i++) {
          if (sents[i].search.indexOf(nk) >= 0) {
            q._hit = { sid: sents[i].sid, sec: sents[i].sec, secName: sents[i].secName, sent: sents[i].text, phrase: keys[ki], no: sents[i].no };
            break;
          }
        }
        if (!q._hit) bad.push(q.no + ' → ' + keys[ki]);
      }
      if (!keys.length) bad.push(q.no + ' → 缺少 key');
    });

    p._sents = sents;
    p._bad = bad;

    sents.forEach(function (s) {
      s.qs = [];
      p.questions.forEach(function (q) {
        if (q._hit && q._hit.sid === s.sid && s.qs.indexOf(q.no) < 0) s.qs.push(q.no);
      });
    });

    function posOf(q) {
      var nk = norm(q || '');
      for (var i = 0; i < sents.length; i++) if (sents[i].search.indexOf(nk) >= 0) return i;
      return 9999;
    }
    if (p.vocab) p.vocab.sort(function (a, b) { return posOf(a.q) - posOf(b.q); });
    if (p.syntax) p.syntax.sort(function (a, b) { return posOf(a.q) - posOf(b.q); });

    return p;
  }

  /* ---------- 4. 渲染原文 ---------- */
  function renderArticle(p) {
    var byId = {};
    p._sents.forEach(function (s) { byId[s.sid] = s; });

    var html = '';
    p.sections.forEach(function (sec) {
      var sents = splitSentences(sec.text);
      var inner = sents.map(function (t, si) {
        var s = byId['s' + sec.key + (si + 1)];
        return '<span class="sent" data-sid="' + s.sid + '">' + decorate(s, p) + '</span>';
      }).join(' ');
      html += '<section class="sec" data-sec="' + sec.key + '">' +
        '<div class="sec-hd"><span class="sec-key">' + esc(sec.key) + '</span>' +
        (sec.label ? '<span class="sec-name">' + esc(sec.label) + '</span>' : '') +
        (sec.tag ? '<span class="sec-tag">' + esc(sec.tag) + '</span>' : '') +
        '</div><p class="para">' + inner + '</p></section>';
    });
    $('#article').innerHTML = html;
  }

  function decorate(s, p) {
    if (!s.qs.length) return esc(s.text);

    var marks = [];
    s.qs.forEach(function (qno) {
      var q = p.questions.filter(function (x) { return x.no === qno; })[0];
      if (!q || !q._hit) return;
      var hay = align(s.text).toLowerCase();
      var needle = align(q._hit.phrase).toLowerCase();
      var at = hay.indexOf(needle);
      if (at < 0) return;
      marks.push({ s: at, e: at + needle.length, q: qno, c: q._c });
    });
    marks.sort(function (a, b) { return a.s - b.s || b.e - a.e; });

    var merged = [];
    marks.forEach(function (m) {
      var last = merged[merged.length - 1];
      if (last && m.s === last.s && m.e === last.e) { last.qs.push(m.q); last.cs.push(m.c); return; }
      if (last && m.s < last.e) return;
      merged.push({ s: m.s, e: m.e, qs: [m.q], cs: [m.c] });
    });

    var out = '', cur = 0;
    merged.forEach(function (m) {
      out += esc(s.text.slice(cur, m.s));
      var style, cls = 'hl';
      if (m.qs.length > 1) {
        cls += ' multi';
        style = 'background:repeating-linear-gradient(45deg,' + rgba(m.cs[0], .42) + ' 0 6px,' +
          rgba(m.cs[1], .42) + ' 6px 12px);box-shadow:inset 0 -2px 0 ' + m.cs[0] + ';';
      } else {
        style = '--bgc:' + rgba(m.cs[0], .38) + ';--bgc-2:' + rgba(m.cs[0], .58) +
          ';--bgc-focus:' + rgba(m.cs[0], .72) + ';--line-c:' + m.cs[0] + ';';
      }
      out += '<span class="' + cls + '" data-q="' + m.qs.join(',') + '" data-no="' +
        m.qs.join(' ') + '" style="' + style + '">' + esc(s.text.slice(m.s, m.e)) + '</span>';
      cur = m.e;
    });
    out += esc(s.text.slice(cur));
    return out;
  }

  /* ---------- 5. 渲染题目 ---------- */
  function letters(p) {
    return p.sections.map(function (s) { return s.key; });
  }

  function renderQuestions(p) {
    var opts = letters(p);
    var html = p.questions.map(function (q) {
      var loc = q._hit ? '段落 <b>' + q._hit.sec + '</b>' + (q._hit.secName ? ' · ' + q._hit.secName : '') + '　第 ' + q._hit.no + ' 句' : '未定位';
      return '' +
        '<div class="qcard" data-q="' + q.no + '" style="--c:' + q._c + '">' +
          '<div class="qhead" tabindex="0" role="button" aria-label="查看 (' + q.no + ') 解析">' +
            '<span class="qno">(' + q.no + ')</span>' +
            '<div class="qstem">' + esc(q.stem) + '<span class="qmarks">' + q.marks + ' 分</span></div>' +
          '</div>' +
          '<div class="qloc">答案段 · ' + loc + '　点击题号可定位原文</div>' +
          '<div class="answer">' +
            '<div class="letters" role="group" aria-label="选择段落">' +
              opts.map(function (k) { return '<button class="ltn" data-pick="' + k + '">' + k + '</button>'; }).join('') +
            '</div>' +
            '<button class="checkbtn" data-act="check">对答案</button>' +
            '<button class="checkbtn reveal" data-act="reveal">解析</button>' +
          '</div>' +
          '<div class="keyline"></div>' +
          '<div class="detail">' +
            '<div class="drow"><div class="dlabel">定位</div><div class="dtext"><span class="quote">' +
              esc(q._hit ? q._hit.sent : '（未找到答案句）') + '</span>' +
              (q._hit ? '<button class="jump" data-jump="' + q.no + '">跳到原文</button>' : '') + '</div></div>' +
            '<div class="drow"><div class="dlabel">同义替换</div><div class="dtext">' + esc(q.para || '—') + '</div></div>' +
            '<div class="drow"><div class="dlabel">为什么</div><div class="dtext">' + esc(q.why || '—') + '</div></div>' +
            '<div class="drow"><div class="dlabel">陷阱</div><div class="dtext">' + esc(q.trap || '—') + '</div></div>' +
          '</div>' +
        '</div>';
    }).join('');
    return html || '<div class="empty">暂无题目</div>';
  }

  /* ---------- 6. 词汇 / 长难句 ---------- */
  function renderVocab(p) {
    if (!p.vocab || !p.vocab.length) return '<div class="empty">本篇暂无词汇条目</div>';
    return p.vocab.map(function (v, i) {
      var s = p._sents.filter(function (x) { return x.search.indexOf(norm(v.q)) >= 0; })[0];
      var sent = s ? s.text : '';
      var hl = esc(sent);
      if (s) {
        var at = align(sent).toLowerCase().indexOf(align(v.q).toLowerCase());
        if (at >= 0) {
          hl = esc(sent.slice(0, at)) + '<mark>' + esc(sent.slice(at, at + v.q.length)) + '</mark>' +
            esc(sent.slice(at + v.q.length));
        }
      }
      return '<div class="vitem" data-v="' + i + '" data-q2="' + esc(v.q) + '">' +
        '<span class="lv ' + v.lvl + '">' + v.lvl + '</span>' +
        '<div class="vbody">' +
          '<div class="vword">' + esc(v.w) + '<span>' + esc(v.pos || '') + '</span></div>' +
          (v.def ? '<div class="vdef">' + esc(v.def) + '</div>' : '') +
          '<div class="vcn">' + esc(v.cn) + '</div>' +
          (v.col ? '<div class="vcol">搭配　' + esc(v.col) + '</div>' : '') +
          (sent ? '<div class="vsent">' + hl + '</div>' : '') +
        '</div></div>';
    }).join('');
  }

  function renderSyntax(p) {
    if (!p.syntax || !p.syntax.length) return '<div class="empty">本篇暂无长难句条目</div>';
    return p.syntax.map(function (sx) {
      var s = p._sents.filter(function (x) { return x.search.indexOf(norm(sx.q)) >= 0; })[0];
      var en = s ? s.text : sx.q;
      var at = align(en).toLowerCase().indexOf(align(sx.q).toLowerCase());
      var marked = at >= 0
        ? esc(en.slice(0, at)) + '<b>' + esc(en.slice(at, at + sx.q.length)) + '</b>' + esc(en.slice(at + sx.q.length))
        : esc(en);
      return '<div class="sx" data-q2="' + esc(sx.q) + '">' +
        '<div class="sx-tags">' + (sx.tags || []).map(function (t) { return '<span class="sx-tag">' + esc(t) + '</span>'; }).join('') + '</div>' +
        '<div class="sx-en">' + marked + '</div>' +
        (sx.main ? '<div class="sx-main"><span>主干</span>' + esc(sx.main) + '</div>' : '') +
        '<ul class="sx-parts">' + (sx.parts || []).map(function (p2) {
          return '<li><span class="r">' + esc(p2.r) + '</span><span>' + esc(p2.t) + '</span></li>';
        }).join('') + '</ul>' +
        '<div class="sx-cn">' + esc(sx.cn) + '</div>' +
        (sx.note ? '<div class="sx-note"><span>考点</span>' + esc(sx.note) + '</div>' : '') +
      '</div>';
    }).join('');
  }

  /* ---------- 7. 状态 ---------- */
  var state = { idx: 0, tab: 'q', focus: null, noHl: false, store: {} };
  function cur() { return PASSAGES[state.idx]; }
  function ensure(p) { if (!p._built) { buildIndex(p); p._built = true; } return p; }

  /* ---------- 8. 渲染 ---------- */
  function renderAll() {
    var p = ensure(cur());
    var answers = state.store[p.id] || (state.store[p.id] = {});

    $('#metaPaper').textContent = p.paper;
    $('#metaTopic').textContent = p.topic;
    $('#metaMarks').textContent = p.questions.reduce(function (a, q) { return a + q.marks; }, 0) + ' 分 · ' + p.questions.length + ' 题';
    $('#aTitle').textContent = p.title;
    $('#aIntro').textContent = p.intro || '';

    $('#legend').innerHTML = p.questions.map(function (q) {
      return '<button class="lg" data-jump-q="' + q.no + '"><i style="background:' + q._c + '"></i>(' + q.no + ')</button>';
    }).join('');

    renderArticle(p);
    $('#cQ').textContent = p.questions.length;
    $('#cV').textContent = (p.vocab || []).length;
    $('#cS').textContent = (p.syntax || []).length;

    renderTab();
    syncScore();

    Object.keys(answers).forEach(function (qno) {
      var card = $('.qcard[data-q="' + qno + '"]');
      if (!card) return;
      var a = answers[qno];
      $$('.ltn', card).forEach(function (b) { b.classList.toggle('is-pick', b.dataset.pick === a.pick); });
      drawResult(card, p.questions.filter(function (x) { return x.no === qno; })[0], a.res, a.pick);
    });

    state.focus = null;
    $('#aScroll').classList.remove('is-focus');
    $('#aScroll').scrollTop = 0;
    $('#bScroll').scrollTop = 0;
  }

  function renderTab() {
    var p = cur();
    $$('.tab').forEach(function (t) { t.classList.toggle('is-on', t.dataset.tab === state.tab); });
    var box = $('#tabbody');
    box.innerHTML = state.tab === 'q' ? renderQuestions(p)
      : state.tab === 'v' ? renderVocab(p)
      : renderSyntax(p);
  }

  /* ---------- 9. 判分 ---------- */
  function syncScore() {
    var p = cur(), answers = state.store[p.id] || {};
    var got = 0, total = 0;
    p.questions.forEach(function (q) {
      total += q.marks;
      var a = answers[q.no];
      if (a && a.res && a.res.ok) got += q.marks;
    });
    $('#scoreChip').textContent = got + ' / ' + total;
  }

  function drawResult(card, q, res, pick) {
    var kl = card.querySelector('.keyline');
    if (!res) { kl.className = 'keyline'; kl.innerHTML = ''; return; }
    var cls = res.ok ? 'keyline good' : 'keyline bad';
    var head;
    if (res.reveal) head = '<span class="tag">参考答案</span><span class="ans">' + esc(q.ans) + '</span>';
    else if (res.ok) head = '<span class="tag">✓ 正确</span>参考答案：<span class="ans">' + esc(q.ans) + '</span>';
    else head = '<span class="tag">✗ 再想想</span>你选了 ' + esc(pick || '—') + '，参考答案：<span class="ans">' + esc(q.ans) + '</span>';
    kl.className = cls;
    kl.innerHTML = head;
  }

  /* ---------- 10. 聚焦联动 ---------- */
  function scrollIn(container, el, ratio) {
    if (!container || !el) return;
    var c = container.getBoundingClientRect();
    var e = el.getBoundingClientRect();
    var top = container.scrollTop + (e.top - c.top) - container.clientHeight * (ratio == null ? 0.35 : ratio);
    container.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
  }

  function focusQ(qno, scrollArticle) {
    var p = cur();
    var q = p.questions.filter(function (x) { return x.no === qno; })[0];
    if (!q) return;
    if (state.focus === qno) { clearFocus(); return; }
    state.focus = qno;

    $('#aScroll').classList.add('is-focus');
    $$('.hl', $('#article')).forEach(function (el) {
      el.classList.toggle('on', (el.dataset.q || '').split(',').indexOf(qno) >= 0);
    });
    $$('.qcard').forEach(function (c) { c.classList.toggle('is-active', c.dataset.q === qno); });
    $$('.lg').forEach(function (l) { l.classList.toggle('is-on', l.dataset.jumpQ === qno); });

    if (scrollArticle !== false) {
      var first = $('.hl[data-q~="' + qno + '"]', $('#article'));
      if (first) {
        scrollIn($('#aScroll'), first, 0.3);
        first.classList.add('flash');
        setTimeout(function () { first.classList.remove('flash'); }, 1200);
      }
      var card = $('.qcard[data-q="' + qno + '"]');
      if (card && state.tab === 'q') scrollIn($('#bScroll'), card, 0.06);
    }
  }

  function clearFocus() {
    state.focus = null;
    $('#aScroll').classList.remove('is-focus');
    $$('.hl', $('#article')).forEach(function (el) { el.classList.remove('on'); });
    $$('.qcard').forEach(function (c) { c.classList.remove('is-active'); });
    $$('.lg').forEach(function (l) { l.classList.remove('is-on'); });
  }

  /* ---------- 11. 事件 ---------- */
  var sel = $('#pSelect');
  sel.innerHTML = PASSAGES.map(function (p, i) {
    return '<option value="' + i + '">' + p.no + '. ' + esc(p.title) + '　·　' + esc(p.topic) + '　·　p.' + p.page + '</option>';
  }).join('');
  sel.addEventListener('change', function () { state.idx = +sel.value; renderAll(); });
  $('#prevP').addEventListener('click', function () {
    state.idx = (state.idx - 1 + PASSAGES.length) % PASSAGES.length;
    sel.value = state.idx; renderAll();
  });
  $('#nextP').addEventListener('click', function () {
    state.idx = (state.idx + 1) % PASSAGES.length;
    sel.value = state.idx; renderAll();
  });

  $('#btnToggle').addEventListener('click', function () {
    state.noHl = !state.noHl;
    $('#aScroll').classList.toggle('no-hl', state.noHl);
    this.textContent = state.noHl ? '显示高亮' : '隐藏高亮';
    this.classList.toggle('is-off', state.noHl);
  });

  $('#btnReset').addEventListener('click', function () {
    delete state.store[cur().id];
    renderAll();
  });

  $('#tabs').addEventListener('click', function (e) {
    var b = e.target.closest('.tab'); if (!b) return;
    state.tab = b.dataset.tab;
    renderTab();
    $('#bScroll').scrollTop = 0;
    if (state.tab !== 'q') { state.focus = null; clearFocus(); }
  });

  $('#article').addEventListener('click', function (e) {
    var el = e.target.closest('.hl'); if (!el) return;
    var qs = (el.dataset.q || '').split(',');
    var qno = qs[0];
    if (state.tab !== 'q') { state.tab = 'q'; renderTab(); }
    var card = $('.qcard[data-q="' + qno + '"]');
    if (card) scrollIn($('#bScroll'), card, 0.06);
    if (state.focus !== qno) focusQ(qno, false);
  });

  $('#legend').addEventListener('click', function (e) {
    var b = e.target.closest('.lg'); if (!b) return;
    if (state.tab !== 'q') { state.tab = 'q'; renderTab(); }
    if (state.focus === b.dataset.jumpQ) clearFocus();
    else focusQ(b.dataset.jumpQ, true);
  });

  $('#tabbody').addEventListener('click', function (e) {
    var card = e.target.closest('.qcard');
    var vitem = e.target.closest('.vitem');
    if (vitem) { jumpTo(vitem.dataset.q2); return; }
    if (!card) return;

    var p = cur();
    var q = p.questions.filter(function (x) { return x.no === card.dataset.q; })[0];
    var store = state.store[p.id] || (state.store[p.id] = {});

    var pickBtn = e.target.closest('[data-pick]');
    if (pickBtn) {
      var v = pickBtn.dataset.pick;
      $$('.ltn', card).forEach(function (b) { b.classList.toggle('is-pick', b === pickBtn); });
      store[q.no] = { pick: v, res: (store[q.no] || {}).res || null };
      return;
    }

    var act = e.target.dataset.act;
    if (act === 'check') {
      var picked = (store[q.no] || {}).pick;
      if (!picked) {
        var kl = card.querySelector('.keyline');
        kl.className = 'keyline bad';
        kl.innerHTML = '<span class="tag">请先选一个段落</span>';
        return;
      }
      var res = { ok: picked === q.ans };
      store[q.no] = { pick: picked, res: res };
      drawResult(card, q, res, picked);
      syncScore();
      if (state.focus !== q.no) focusQ(q.no, true);
      return;
    }
    if (act === 'reveal') {
      store[q.no] = { pick: (store[q.no] || {}).pick || null, res: { reveal: true, ok: false } };
      drawResult(card, q, { reveal: true });
      if (state.focus !== q.no) focusQ(q.no, true);
      return;
    }
    if (e.target.closest('[data-jump]')) { focusQ(card.dataset.q, true); return; }
    if (e.target.closest('.qhead')) { focusQ(card.dataset.q, true); }
  });

  $('#tabbody').addEventListener('keydown', function (e) {
    if (e.key !== 'Enter') return;
    var head = e.target.closest('.qhead');
    if (head) { e.preventDefault(); focusQ(head.closest('.qcard').dataset.q, true); }
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') clearFocus(); });

  function jumpTo(phrase) {
    var p = cur();
    var s = p._sents.filter(function (x) { return x.search.indexOf(norm(phrase)) >= 0; })[0];
    if (!s) return;
    var el = $('.sent[data-sid="' + s.sid + '"]');
    if (!el) return;
    scrollIn($('#aScroll'), el, 0.35);
    el.classList.add('flash');
    setTimeout(function () { el.classList.remove('flash'); }, 1200);
  }

  $('#fabQ').addEventListener('click', function () {
    $('.pane-b').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  /* ---------- 12. 启动 ---------- */
  if (!PASSAGES.length) {
    $('#article').innerHTML = '<div class="empty">数据未加载</div>';
  } else {
    renderAll();
  }

  window.__RW = { PASSAGES: PASSAGES, buildIndex: buildIndex, splitSentences: splitSentences, state: state };
})();
