(function () {
  const fmt = (n) => Math.round(n).toLocaleString('en-US');
  const short = (n) => n >= 1e6 ? (n / 1e6).toFixed(2).replace(/0$/, '') + 'M' : Math.round(n / 1000) + 'k';
  const raw = [
    { id: 1, project: 'Hillside Park Residences', community: 'Dubai Hills Estate', developer: 'Halcyon Developments', type: '2 BR apartment', beds: '2BR', sqft: 1248, view: 'Floor 14 · Park view', orig: 1850000, pct: 30, pay: 520000, handover: 'Q4 2027', months: 14, construction: 46, php: true, priv: false, mkt: 1.12, tone: '#E7DFD4', x: 38, y: 58, listed: '2 days ago' },
    { id: 2, project: 'Creek Vista Tower B', community: 'Dubai Creek Harbour', developer: 'Noor Estates', type: '1 BR apartment', beds: '1BR', sqft: 742, view: 'Floor 22 · Creek view', orig: 1420000, pct: 40, pay: 498000, handover: 'Q2 2027', months: 8, construction: 68, php: true, priv: false, mkt: 1.09, tone: '#DDE3E4', x: 70, y: 32, listed: '4 days ago' },
    { id: 3, project: 'Lumina Heights', community: 'JVC', developer: 'Crescent Living', type: 'Studio', beds: 'Studio', sqft: 412, view: 'Floor 9 · Pool view', orig: 760000, pct: 20, pay: 140000, handover: 'Q1 2027', months: 5, construction: 74, php: false, priv: false, mkt: 1.08, tone: '#E9E4DA', x: 24, y: 70, listed: '1 week ago' },
    { id: 4, project: 'The Bay Collection', community: 'Business Bay', developer: 'Altura', type: '1 BR apartment', beds: '1BR', sqft: 815, view: 'Floor 31 · Canal view', orig: 1690000, pct: 50, pay: 790000, handover: 'Q4 2026', months: 2, construction: 92, php: false, priv: false, mkt: 1.14, tone: '#E2E0DA', x: 58, y: 40, listed: '3 days ago' },
    { id: 5, project: 'Lagoon Terraces', community: 'Damac Lagoons', developer: 'Marwa Properties', type: '3 BR townhouse', beds: 'Townhouse', sqft: 2150, view: 'Corner unit · Lagoon view', orig: 2780000, pct: 25, pay: 640000, handover: 'Q4 2027', months: 14, construction: 38, php: true, priv: false, mkt: 1.07, tone: '#DCE2DC', x: 30, y: 84, listed: '5 days ago' },
    { id: 6, project: 'Arjan Garden Lofts', community: 'Arjan', developer: 'Crescent Living', type: '1 BR apartment', beds: '1BR', sqft: 690, view: 'Floor 6 · Garden view', orig: 890000, pct: 60, pay: 480000, handover: 'Q4 2026', months: 2, construction: 88, php: false, priv: false, mkt: 1.11, tone: '#EAE2D6', x: 18, y: 62, listed: 'Today' },
    { id: 7, project: 'Hills Crest Villas', community: 'Dubai Hills Estate', developer: 'Halcyon Developments', type: '4 BR villa', beds: 'Villa', sqft: 3420, view: 'Plot 3,900 sqft · Golf view', orig: 4450000, pct: 15, pay: 667500, handover: 'Q2 2028', months: 20, construction: 22, php: true, priv: false, mkt: 1.06, tone: '#E3E1D6', x: 42, y: 52, listed: '1 week ago' },
    { id: 8, project: 'Harbour Point 2', community: 'Dubai Creek Harbour', developer: 'Noor Estates', type: '2 BR apartment', beds: '2BR', sqft: 1105, view: 'Floor 18 · Skyline view', orig: 2240000, pct: 10, pay: 205000, handover: 'Q1 2029', months: 29, construction: 8, php: true, priv: true, mkt: 1.04, tone: '#DFE2E3', x: 74, y: 26, listed: '6 days ago' },
    { id: 9, project: 'Canal Edge Residences', community: 'Business Bay', developer: 'Altura', type: '2 BR apartment', beds: '2BR', sqft: 1320, view: 'Floor 27 · Canal view', orig: 2950000, pct: 35, pay: 960000, handover: 'Q2 2028', months: 20, construction: 31, php: false, priv: false, mkt: 1.10, tone: '#E6E0D8', x: 62, y: 46, listed: '2 weeks ago' },
    { id: 10, project: 'Parkline Studios', community: 'JVC', developer: 'Marwa Properties', type: 'Studio', beds: 'Studio', sqft: 398, view: 'Floor 4 · Community view', orig: 750000, pct: 45, pay: 300000, handover: 'Q4 2026', months: 2, construction: 94, php: false, priv: false, mkt: 1.09, tone: '#E8E3DB', x: 27, y: 66, listed: '3 days ago' },
  ];

  function art(r) {
    let seed = r.id * 7919 + 13;
    const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
    const G = 196, c = r.construction / 100;
    const water = /Creek|Canal|Lagoon/.test(r.view);
    const fl = (r.view.match(/Floor (\d+)/) || [])[1];
    const kind = r.beds === 'Villa' ? 'villa' : r.beds === 'Townhouse' ? 'town' : (fl && +fl >= 15 ? 'tower' : 'mid');
    const facade = ['#DCD2C6', '#D6CEC4', '#DDD5CB', '#D3CBC0'][r.id % 4];
    const side = '#C5B9AC', glass = '#B5C3C8', frame = '#A89B8E', ink = '#6E655F';
    const f = (n) => n.toFixed(1);
    let s = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240" preserveAspectRatio="xMidYMax slice">';
    s += '<defs><linearGradient id="k" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F0E4D5"/><stop offset="1" stop-color="#FAF5EE"/></linearGradient></defs>';
    s += '<rect width="400" height="240" fill="url(#k)"/>';
    s += '<circle cx="' + (60 + (r.id * 71) % 280) + '" cy="56" r="20" fill="#F4D6BA"/>';
    let x = -10;
    while (x < 410) { const w = 20 + rnd() * 26, h = 28 + rnd() * 84; s += '<rect x="' + f(x) + '" y="' + f(G - h) + '" width="' + f(w) + '" height="' + f(h) + '" fill="#E7DED3"/>'; x += w + 4 + rnd() * 16; }
    s += '<rect y="' + G + '" width="400" height="' + (240 - G) + '" fill="#E5DBCE"/>';
    if (water) s += '<rect y="' + (G + 16) + '" width="400" height="30" fill="#CDDADD"/><path d="M40 ' + (G + 25) + 'h50M150 ' + (G + 32) + 'h70M270 ' + (G + 23) + 'h60" stroke="#E3EBED" stroke-width="2" stroke-linecap="round"/>';
    const block = (bx, bw, n, hf, depth, balc, cc, gy) => {
      gy = gy == null ? G : gy;
      const built = Math.max(0, Math.min(n, Math.round(n * cc)));
      const top = gy - n * hf, btop = gy - built * hf;
      let o = '';
      if (built < n) {
        o += '<rect x="' + bx + '" y="' + f(top) + '" width="' + bw + '" height="' + f(btop - top) + '" fill="#F6F1EA" fill-opacity="0.5" stroke="' + frame + '" stroke-width="1.2" stroke-dasharray="3 3"/>';
        for (let i = built + 1; i < n; i++) o += '<line x1="' + bx + '" x2="' + (bx + bw) + '" y1="' + f(gy - i * hf) + '" y2="' + f(gy - i * hf) + '" stroke="' + frame + '" stroke-width="0.7" stroke-dasharray="2 3"/>';
        for (let k = 1; k < 4; k++) o += '<line x1="' + f(bx + bw * k / 4) + '" x2="' + f(bx + bw * k / 4) + '" y1="' + f(top) + '" y2="' + f(btop) + '" stroke="' + frame + '" stroke-width="0.7" stroke-dasharray="2 3"/>';
      }
      if (built > 0) {
        o += '<path d="M' + (bx + bw) + ' ' + f(btop) + 'l' + depth + ' ' + f(-depth * 0.5) + 'V' + f(gy - depth * 0.5) + 'L' + (bx + bw) + ' ' + gy + 'z" fill="' + side + '"/>';
        o += '<rect x="' + bx + '" y="' + f(btop) + '" width="' + bw + '" height="' + f(built * hf) + '" fill="' + facade + '"/>';
        for (let i = 0; i < built; i++) {
          const y = gy - (i + 1) * hf;
          o += '<rect x="' + (bx + 5) + '" y="' + f(y + hf * 0.26) + '" width="' + (bw - 10) + '" height="' + f(hf * 0.48) + '" fill="' + glass + '"/>';
          if (balc) o += '<rect x="' + (bx + 2) + '" y="' + f(y + hf * 0.82) + '" width="' + (bw - 4) + '" height="1.8" fill="#F4EFE8"/>';
        }
      }
      return { o, top };
    };
    const crane = (mx, ty, reach) => '<g stroke="' + ink + '" fill="none" stroke-linecap="round"><path d="M' + mx + ' ' + G + 'V' + ty + 'M' + (mx - 4) + ' ' + G + 'V' + ty + '" stroke-width="1.1"/><path d="M' + (mx - reach) + ' ' + ty + 'H' + (mx + 34) + '" stroke-width="1.4"/><path d="M' + mx + ' ' + (ty - 14) + 'L' + (mx - reach) + ' ' + ty + 'M' + mx + ' ' + (ty - 14) + 'L' + (mx + 34) + ' ' + ty + '" stroke-width="0.8"/><path d="M' + (mx - reach * 0.6) + ' ' + ty + 'v30" stroke-width="0.8"/></g><rect x="' + (mx + 22) + '" y="' + ty + '" width="12" height="7" fill="' + ink + '"/>';
    const palm = (px, h) => { const ty = G - h; let p = '<path d="M' + px + ' ' + G + 'q-4 ' + (-h / 2) + ' 3 ' + (-h) + '" stroke="#A08F7C" stroke-width="3" fill="none" stroke-linecap="round"/>'; [-170, -135, -100, -70, -35, -5, 25, 155].forEach((a) => { p += '<ellipse cx="' + (px + 3) + '" cy="' + ty + '" rx="15" ry="3.6" fill="#A3AD8C" transform="rotate(' + a + ' ' + (px + 3) + ' ' + ty + ') translate(13 0)"/>'; }); return p; };
    let main = '', top = G;
    if (kind === 'tower') { const n = Math.min(32, +fl + 10), b = block(160, 80, n, 156 / n, 16, false, c); main = b.o; top = b.top; }
    else if (kind === 'mid') { const b = block(122, 156, 9, 13, 20, true, c); main = b.o; top = b.top; }
    else if (kind === 'town') { for (let i = 0; i < 3; i++) { const b = block(78 + i * 84, 80, 3, 21, i === 2 ? 14 : 0, true, Math.max(0, Math.min(1, c * 3 - i + 0.4))); main += b.o; top = Math.min(top, b.top); } }
    else { main += '<rect x="70" y="' + (G + 4) + '" width="130" height="9" rx="2" fill="#C6D8DB"/>'; const a = block(110, 190, 1, 40, 18, false, Math.min(1, c * 3)); const u = block(170, 150, 1, 34, 14, false, c >= 0.5 ? 1 : 0, G - 40); main += a.o + u.o; top = G - 74; }
    s += main;
    if (c < 0.95) s += crane(kind === 'tower' ? 270 : kind === 'villa' ? 352 : 312, Math.max(14, top - 22), kind === 'tower' ? 96 : 120);
    if (kind !== 'tower') s += palm(42, 50) + palm(372, 40); else s += palm(110, 46);
    return 'data:image/svg+xml;utf8,' + encodeURIComponent(s + '</svg>');
  }
  const listings = raw.map((r) => {
    const paid = r.orig * r.pct / 100;
    const remaining = r.orig - paid;
    const below = paid - r.pay;
    const belowPct = below / r.orig * 100;
    const total = r.pay + remaining;
    const market = Math.round(r.orig * r.mkt / 10000) * 10000;
    const badges = [];
    if (r.months < 12) badges.push('Handover < 12 months');
    if (r.php) badges.push('Post-handover plan');
    return Object.assign({}, r, {
      paid, remaining, below, belowPct, total, market, badges, art: art(r),
      atCost: below < 1,
      pill: below < 1 ? 'At cost' : belowPct.toFixed(1) + '% below cost',
      paidW: r.pct + '%', buildW: r.construction + '%',
      pin: short(r.pay),
      href: 'Listing Detail.dc.html?id=' + r.id,
      f: {
        orig: fmt(r.orig), paid: fmt(paid), pay: fmt(r.pay), remaining: fmt(remaining), below: fmt(below),
        belowPct: belowPct.toFixed(1) + '%', total: fmt(total), market: fmt(market), equity: fmt(market - total),
        sqft: fmt(r.sqft),
      },
    });
  });
  window.ArvoExit = { listings, fmt, short };
})();
