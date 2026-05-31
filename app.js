const STORAGE_KEY = "tabellenvorhersage-2026-27";
const BUNDESLIGA_LOGOS = "germany-bundesliga-2025-2026.football-logos.cc/128x128";
const ZWEITE_LOGOS = "germany-2-bundesliga-2025-2026.football-logos.cc/128x128";
const leagueLogos = {
  bundesliga: "germany_bundesliga.football-logos.cc.svg",
  zweite: "germany_2-bundesliga.football-logos.cc.svg",
};

const positionMarkers = {
  bundesliga: {
    1: [
      { label: "Meister", tone: "champion", crown: true },
      { label: "CL", tone: "cl" },
    ],
    2: [{ label: "CL", tone: "cl" }],
    3: [{ label: "CL", tone: "cl" }],
    4: [{ label: "CL", tone: "cl" }],
    5: [{ label: "EL", tone: "el" }],
    6: [{ label: "ECL", tone: "ecl" }],
    16: [{ label: "Relegation", tone: "playoff" }],
    17: [{ label: "Abstieg", tone: "down" }],
    18: [{ label: "Abstieg", tone: "down" }],
  },
  zweite: {
    1: [
      { label: "Meister", tone: "champion", crown: true },
      { label: "Aufstieg", tone: "up" },
    ],
    2: [{ label: "Aufstieg", tone: "up" }],
    3: [{ label: "Relegation", tone: "playoff" }],
    16: [{ label: "Relegation", tone: "playoff" }],
    17: [{ label: "Abstieg", tone: "down" }],
    18: [{ label: "Abstieg", tone: "down" }],
  },
};

const markerColors = {
  champion: { bg: "#f8c24e", ink: "#2f2100" },
  cl: { bg: "#2563eb", ink: "#ffffff" },
  el: { bg: "#f97316", ink: "#111827" },
  ecl: { bg: "#16a34a", ink: "#ffffff" },
  up: { bg: "#0f766e", ink: "#ffffff" },
  playoff: { bg: "#eab308", ink: "#111827" },
  down: { bg: "#dc2626", ink: "#ffffff" },
};

const logoPaths = {
  "fc-bayern-munchen": `${BUNDESLIGA_LOGOS}/bayern-munchen.football-logos.cc.png`,
  "borussia-dortmund": `${BUNDESLIGA_LOGOS}/borussia-dortmund.football-logos.cc.png`,
  "bayer-04-leverkusen": `${BUNDESLIGA_LOGOS}/bayer-leverkusen.football-logos.cc.png`,
  "eintracht-frankfurt": `${BUNDESLIGA_LOGOS}/eintracht-frankfurt.football-logos.cc.png`,
  "sc-freiburg": `${BUNDESLIGA_LOGOS}/freiburg.football-logos.cc.png`,
  "rb-leipzig": `${BUNDESLIGA_LOGOS}/rb-leipzig.football-logos.cc.png`,
  "1-fsv-mainz-05": `${BUNDESLIGA_LOGOS}/mainz-05.football-logos.cc.png`,
  "borussia-monchengladbach": `${BUNDESLIGA_LOGOS}/borussia-monchengladbach.football-logos.cc.png`,
  "werder-bremen": `${BUNDESLIGA_LOGOS}/werder-bremen.football-logos.cc.png`,
  "vfb-stuttgart": `${BUNDESLIGA_LOGOS}/vfb-stuttgart.football-logos.cc.png`,
  "1-fc-koln": `${BUNDESLIGA_LOGOS}/koln.football-logos.cc.png`,
  "hamburger-sv": `${BUNDESLIGA_LOGOS}/hamburger-sv.football-logos.cc.png`,
  "tsg-hoffenheim": `${BUNDESLIGA_LOGOS}/hoffenheim.football-logos.cc.png`,
  "fc-augsburg": `${BUNDESLIGA_LOGOS}/augsburg.football-logos.cc.png`,
  "union-berlin": `${BUNDESLIGA_LOGOS}/union-berlin.football-logos.cc.png`,
  "fc-schalke-04": `${ZWEITE_LOGOS}/schalke-04.football-logos.cc.png`,
  "sv-elversberg": `${ZWEITE_LOGOS}/sv-elversberg.football-logos.cc.png`,
  "sc-paderborn": `${ZWEITE_LOGOS}/paderborn.football-logos.cc.png`,
  "vfl-wolfsburg": `${BUNDESLIGA_LOGOS}/wolfsburg.football-logos.cc.png`,
  "fc-st-pauli": `${BUNDESLIGA_LOGOS}/st-pauli.football-logos.cc.png`,
  "1-fc-heidenheim": `${BUNDESLIGA_LOGOS}/fc-heidenheim.football-logos.cc.png`,
  "hannover-96": `${ZWEITE_LOGOS}/hannover-96.football-logos.cc.png`,
  "sv-darmstadt-98": `${ZWEITE_LOGOS}/darmstadt.football-logos.cc.png`,
  "1-fc-kaiserslautern": `${ZWEITE_LOGOS}/fc-kaiserslautern.football-logos.cc.png`,
  "hertha-bsc": `${ZWEITE_LOGOS}/hertha-bsc.football-logos.cc.png`,
  "1-fc-nurnberg": `${ZWEITE_LOGOS}/fc-nurnberg.football-logos.cc.png`,
  "vfl-bochum": `${ZWEITE_LOGOS}/vfl-bochum.football-logos.cc.png`,
  "karlsruher-sc": `${ZWEITE_LOGOS}/karlsruher.football-logos.cc.png`,
  "dynamo-dresden": `${ZWEITE_LOGOS}/dynamo-dresden.football-logos.cc.png`,
  "holstein-kiel": `${ZWEITE_LOGOS}/holstein-kiel.football-logos.cc.png`,
  "arminia-bielefeld": `${ZWEITE_LOGOS}/arminia-bielefeld.football-logos.cc.png`,
  "1-fc-magdeburg": `${ZWEITE_LOGOS}/1-fc-magdeburg.football-logos.cc.png`,
  "eintracht-braunschweig": `${ZWEITE_LOGOS}/eintracht-braunschweig.football-logos.cc.png`,
  "spvgg-greuther-furth": `${ZWEITE_LOGOS}/spvgg-greuther-furth.football-logos.cc.png`,
  "vfl-osnabruck": "germany_osnabruck.football-logos.cc.svg",
  "energie-cottbus": "germany_energie-cottbus.football-logos.cc.svg",
};

const teams = {
  bundesliga: [
    club("FC Bayern München", "FCB", "#dc052d", "#ffffff", "#0066b3", "round", "impact"),
    club("Borussia Dortmund", "BVB", "#fdeb19", "#101010", "#000000", "round", "condensed"),
    club("Bayer 04 Leverkusen", "B04", "#e32221", "#ffffff", "#111111", "shield", "condensed"),
    club("Eintracht Frankfurt", "SGE", "#111111", "#ffffff", "#d71920", "eagle", "serif"),
    club("SC Freiburg", "SCF", "#d50032", "#ffffff", "#000000", "shield", "serif"),
    club("RB Leipzig", "RBL", "#ffffff", "#111827", "#d50032", "shield", "condensed"),
    club("1. FSV Mainz 05", "M05", "#c8102e", "#ffffff", "#ffffff", "round", "serif"),
    club("Borussia Mönchengladbach", "BMG", "#ffffff", "#111827", "#00965e", "diamond", "serif"),
    club("Werder Bremen", "SVW", "#1d9053", "#ffffff", "#ffffff", "diamond", "serif"),
    club("VfB Stuttgart", "VFB", "#ffffff", "#111827", "#e30613", "shield", "serif"),
    club("1. FC Köln", "KOE", "#ed1c24", "#ffffff", "#ffffff", "round", "serif"),
    club("Hamburger SV", "HSV", "#005ca9", "#ffffff", "#000000", "diamond", "serif"),
    club("TSG Hoffenheim", "TSG", "#005ca9", "#ffffff", "#ffffff", "shield", "condensed"),
    club("FC Augsburg", "FCA", "#ba0c2f", "#ffffff", "#007a3d", "shield", "serif"),
    club("Union Berlin", "FCU", "#e30613", "#ffd100", "#ffffff", "shield", "serif"),
    club("FC Schalke 04", "S04", "#004b9b", "#ffffff", "#ffffff", "round", "condensed"),
    club("SV Elversberg", "SVE", "#111111", "#ffffff", "#e30613", "shield", "condensed"),
    club("SC Paderborn", "SCP", "#005baa", "#ffffff", "#111111", "shield", "condensed"),
  ],
  zweite: [
    club("VfL Wolfsburg", "WOB", "#65b32e", "#ffffff", "#ffffff", "round", "condensed"),
    club("FC St. Pauli", "STP", "#5a3825", "#ffffff", "#c8102e", "round", "serif"),
    club("1. FC Heidenheim", "FCH", "#d50032", "#ffffff", "#005baa", "shield", "condensed"),
    club("Hannover 96", "H96", "#00843d", "#ffffff", "#111111", "round", "serif"),
    club("SV Darmstadt 98", "SVD", "#005baa", "#ffffff", "#ffffff", "shield", "serif"),
    club("1. FC Kaiserslautern", "FCK", "#d50032", "#ffffff", "#111111", "shield", "serif"),
    club("Hertha BSC", "BSC", "#005baa", "#ffffff", "#ffffff", "flag", "serif"),
    club("1. FC Nürnberg", "FCN", "#941b1f", "#ffffff", "#ffffff", "round", "serif"),
    club("VfL Bochum", "BOC", "#005ca9", "#ffffff", "#ffffff", "shield", "condensed"),
    club("Karlsruher SC", "KSC", "#005baa", "#ffffff", "#ffffff", "shield", "serif"),
    club("Dynamo Dresden", "SGD", "#ffd100", "#111111", "#000000", "diamond", "condensed"),
    club("Holstein Kiel", "KSV", "#005baa", "#ffffff", "#e30613", "shield", "serif"),
    club("Arminia Bielefeld", "DSC", "#111111", "#ffffff", "#005baa", "shield", "condensed"),
    club("1. FC Magdeburg", "FCM", "#005baa", "#ffffff", "#ffffff", "shield", "serif"),
    club("Eintracht Braunschweig", "EBS", "#f7c600", "#111111", "#005baa", "shield", "serif"),
    club("SpVgg Greuther Fürth", "SGF", "#00843d", "#ffffff", "#ffffff", "clover", "serif"),
    club("VfL Osnabrück", "OSN", "#5d2a86", "#ffffff", "#ffffff", "round", "condensed"),
    club("Energie Cottbus", "FCE", "#d50032", "#ffffff", "#ffffff", "shield", "condensed"),
  ],
};

let state = loadState();
let dragged = null;
let pointerDrag = null;

function club(name, short, bg, ink, accent, shape, fontStyle) {
  const id = slug(name);
  return { id, name, short, bg, ink, accent, shape, fontStyle, logo: logoPaths[id] };
}

function slug(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function loadState() {
  const fallback = {
    author: "",
    bundesliga: teams.bundesliga.map((team) => team.id),
    zweite: teams.zweite.map((team) => team.id),
    takes: { bundesliga: ["", "", ""], zweite: ["", "", ""] },
  };

  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!stored) return fallback;

    return {
      author: typeof stored.author === "string" ? stored.author : "",
      bundesliga: mergeOrder(stored.bundesliga, teams.bundesliga),
      zweite: mergeOrder(stored.zweite, teams.zweite),
      takes: {
        bundesliga: normalizeTakes(stored.takes?.bundesliga),
        zweite: normalizeTakes(stored.takes?.zweite),
      },
    };
  } catch {
    return fallback;
  }
}

function mergeOrder(savedOrder, teamList) {
  const ids = new Set(teamList.map((team) => team.id));
  const clean = Array.isArray(savedOrder) ? savedOrder.filter((id) => ids.has(id)) : [];
  const missing = teamList.map((team) => team.id).filter((id) => !clean.includes(id));
  return [...clean, ...missing];
}

function normalizeTakes(saved) {
  const list = Array.isArray(saved) ? saved : [];
  return [list[0] ?? "", list[1] ?? "", list[2] ?? ""];
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function getTeam(league, id) {
  return teams[league].find((team) => team.id === id);
}

function render() {
  renderAuthor();
  renderLeague("bundesliga", document.querySelector("#bundesligaList"));
  renderLeague("zweite", document.querySelector("#zweiteList"));
  renderTakes("bundesliga");
  renderTakes("zweite");
}

function renderAuthor() {
  const input = document.querySelector("#authorInput");
  if (input && input.value !== state.author) {
    input.value = state.author;
  }
}

function renderLeague(league, listElement) {
  listElement.innerHTML = "";

  state[league].forEach((teamId, index) => {
    const team = getTeam(league, teamId);
    const markers = getPositionMarkers(league, index);
    const row = document.createElement("li");
    row.className = "team-row";
    row.draggable = false;
    row.tabIndex = 0;
    row.dataset.id = team.id;
    row.dataset.league = league;
    row.style.setProperty("--club-bg", team.bg);
    row.style.setProperty("--club-ink", team.ink);
    row.style.setProperty("--club-accent", team.accent);

    row.innerHTML = `
      <span class="rank">${index + 1}</span>
      <img class="crest" src="${crestSource(team)}" alt="Wappen ${team.name}" />
      <span class="club-name" style="font-family: ${fontStack(team.fontStyle)}">${team.name}</span>
      <span class="position-markers">${renderMarkerBadges(markers)}</span>
      <span class="drag-handle" aria-hidden="true">${"<span></span>".repeat(6)}</span>
    `;

    row.addEventListener("pointerdown", onPointerDown);
    listElement.appendChild(row);
  });
}

function refreshLeagueRowMeta(listElement) {
  const league = listElement.dataset.league;
  [...listElement.querySelectorAll(".team-row")].forEach((row, index) => {
    row.querySelector(".rank").textContent = String(index + 1);
    row.querySelector(".position-markers").innerHTML = renderMarkerBadges(getPositionMarkers(league, index));
  });
}

function rowRects(listElement) {
  return new Map(
    [...listElement.querySelectorAll(".team-row")].map((row) => [
      row.dataset.id,
      row.getBoundingClientRect(),
    ]),
  );
}

function animateRowsFrom(listElement, beforeRects) {
  const rows = [...listElement.querySelectorAll(".team-row")];
  rows.forEach((row) => {
    if (row.classList.contains("dragging")) return;
    const before = beforeRects.get(row.dataset.id);
    if (!before) return;

    const after = row.getBoundingClientRect();
    const deltaX = before.left - after.left;
    const deltaY = before.top - after.top;
    if (!deltaX && !deltaY) return;

    row.style.transition = "none";
    row.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
  });

  requestAnimationFrame(() => {
    rows.forEach((row) => {
      if (row.classList.contains("dragging")) return;
      row.style.transition = "transform 210ms cubic-bezier(.2,.8,.2,1)";
      row.style.transform = "";
    });
  });
}

function reorderPreview(source, target, after) {
  const listElement = source.closest(".team-list");
  if (!listElement || source === target) return;

  const beforeRects = rowRects(listElement);
  const reference = after ? target.nextSibling : target;
  if (reference === source || source.nextSibling === reference) return;

  listElement.insertBefore(source, reference);
  refreshLeagueRowMeta(listElement);
  animateRowsFrom(listElement, beforeRects);
}

function commitDomOrder(listElement) {
  const league = listElement.dataset.league;
  state[league] = [...listElement.querySelectorAll(".team-row")].map((row) => row.dataset.id);
  saveState();
  refreshLeagueRowMeta(listElement);
}

function setLeagueOrder(league, order, animate = false) {
  const listElement = document.querySelector(`.team-list[data-league="${league}"]`);
  const beforeRects = animate ? rowRects(listElement) : null;
  state[league] = order;
  saveState();
  renderLeague(league, listElement);
  if (animate) {
    animateRowsFrom(listElement, beforeRects);
  }
}

function getPositionMarkers(league, index) {
  return positionMarkers[league][index + 1] ?? [];
}

function renderMarkerBadges(markers) {
  return markers
    .map((marker) => {
      const crown = marker.crown ? '<span class="crown" aria-hidden="true">♕</span>' : "";
      return `<span class="marker marker-${marker.tone}">${crown}${marker.label}</span>`;
    })
    .join("");
}

function renderTakes(league) {
  const wrapper = document.querySelector(`.take-stack[data-league="${league}"]`);
  wrapper.innerHTML = "";

  for (let index = 0; index < 3; index += 1) {
    const field = document.createElement("div");
    field.className = "take-field";
    field.innerHTML = `
      <label for="${league}-take-${index}">Hot Take ${index + 1}</label>
      <textarea id="${league}-take-${index}" maxlength="140" placeholder="z. B. Ein Aufsteiger landet einstellig."></textarea>
    `;

    const textarea = field.querySelector("textarea");
    textarea.value = state.takes[league][index];
    textarea.addEventListener("input", () => {
      state.takes[league][index] = textarea.value;
      saveState();
    });

    wrapper.appendChild(field);
  }
}

function onDragStart(event) {
  dragged = {
    id: event.currentTarget.dataset.id,
    league: event.currentTarget.dataset.league,
  };
  event.currentTarget.classList.add("dragging");
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData("text/plain", dragged.id);
}

function onDragOver(event) {
  event.preventDefault();
  clearDropMarkers();
  const row = event.currentTarget;
  const rect = row.getBoundingClientRect();
  const after = event.clientY > rect.top + rect.height / 2;
  row.classList.add(after ? "drop-after" : "drop-before");
}

function onDrop(event) {
  event.preventDefault();
  if (!dragged) return;

  const target = event.currentTarget;
  const league = target.dataset.league;
  if (league !== dragged.league || target.dataset.id === dragged.id) {
    clearDropMarkers();
    return;
  }

  const rect = target.getBoundingClientRect();
  const after = event.clientY > rect.top + rect.height / 2;
  const order = state[league].filter((id) => id !== dragged.id);
  const targetIndex = order.indexOf(target.dataset.id);
  order.splice(targetIndex + (after ? 1 : 0), 0, dragged.id);
  clearDropMarkers();
  setLeagueOrder(league, order, true);
}

function onDragEnd() {
  dragged = null;
  clearDropMarkers();
  document.querySelectorAll(".dragging").forEach((node) => node.classList.remove("dragging"));
}

function clearDropMarkers() {
  document.querySelectorAll(".drop-before, .drop-after").forEach((node) => {
    node.classList.remove("drop-before", "drop-after");
  });
}

function onPointerDown(event) {
  if (event.button !== 0) return;
  const row = event.currentTarget;
  event.preventDefault();
  pointerDrag = {
    pointerId: event.pointerId,
    id: row.dataset.id,
    league: row.dataset.league,
    source: row,
    list: row.closest(".team-list"),
    startX: event.clientX,
    startY: event.clientY,
    lastX: event.clientX,
    lastY: event.clientY,
    targetId: null,
    after: false,
    active: false,
  };
  row.setPointerCapture?.(event.pointerId);
  document.addEventListener("pointermove", onPointerMove);
  document.addEventListener("pointerup", onPointerUp);
  document.addEventListener("pointercancel", onPointerCancel);
}

function onPointerMove(event) {
  if (!pointerDrag || event.pointerId !== pointerDrag.pointerId) return;

  const distance = Math.hypot(event.clientX - pointerDrag.startX, event.clientY - pointerDrag.startY);
  if (distance < 6 && !pointerDrag.active) return;

  pointerDrag.active = true;
  pointerDrag.source.classList.add("dragging");
  pointerDrag.lastX = event.clientX;
  pointerDrag.lastY = event.clientY;
  pointerDrag.source.style.transform = `translate(${event.clientX - pointerDrag.startX}px, ${event.clientY - pointerDrag.startY}px) scale(1.015)`;
  clearDropMarkers();

  const previousPointerEvents = pointerDrag.source.style.pointerEvents;
  pointerDrag.source.style.pointerEvents = "none";
  const row = document.elementFromPoint(event.clientX, event.clientY)?.closest(".team-row");
  pointerDrag.source.style.pointerEvents = previousPointerEvents;

  if (!row || row.dataset.league !== pointerDrag.league || row.dataset.id === pointerDrag.id) {
    pointerDrag.targetId = null;
    return;
  }

  const rect = row.getBoundingClientRect();
  pointerDrag.after = event.clientY > rect.top + rect.height / 2;
  pointerDrag.targetId = row.dataset.id;
  reorderPreview(pointerDrag.source, row, pointerDrag.after);
  row.classList.add(pointerDrag.after ? "drop-after" : "drop-before");
  event.preventDefault();
}

function onPointerUp(event) {
  if (!pointerDrag || event.pointerId !== pointerDrag.pointerId) return;
  const current = pointerDrag;
  if (current.source.hasPointerCapture?.(event.pointerId)) {
    current.source.releasePointerCapture(event.pointerId);
  }

  if (current.active) {
    commitDomOrder(current.list);
  }

  current.source.style.transform = "";
  finishPointerDrag();
}

function onPointerCancel() {
  finishPointerDrag();
}

function finishPointerDrag() {
  if (pointerDrag?.source) {
    pointerDrag.source.style.transform = "";
  }
  pointerDrag = null;
  document.removeEventListener("pointermove", onPointerMove);
  document.removeEventListener("pointerup", onPointerUp);
  document.removeEventListener("pointercancel", onPointerCancel);
  clearDropMarkers();
  document.querySelectorAll(".dragging").forEach((node) => node.classList.remove("dragging"));
}

function fontStack(style) {
  const stacks = {
    condensed: '"Arial Narrow", "Roboto Condensed", "Impact", sans-serif',
    impact: '"Arial Black", Impact, system-ui, sans-serif',
    serif: 'Georgia, "Times New Roman", serif',
  };
  return stacks[style] ?? "Inter, system-ui, sans-serif";
}

function crestDataUri(team) {
  const svg = crestSvg(team);
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

function crestSource(team) {
  return team.logo || crestDataUri(team);
}

function crestSvg(team) {
  const shape = shapeMarkup(team);
  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96">
      <defs>
        <filter id="s" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="5" stdDeviation="5" flood-color="#000000" flood-opacity=".28"/>
        </filter>
      </defs>
      <g filter="url(#s)">
        ${shape}
        <path d="M23 58h50" stroke="${team.accent}" stroke-width="8" stroke-linecap="round" opacity=".95"/>
        <text x="48" y="48" fill="${team.ink}" text-anchor="middle" dominant-baseline="middle"
          font-family="Arial Black, Impact, sans-serif" font-size="${team.short.length > 3 ? 22 : 26}" font-weight="900">${team.short}</text>
      </g>
    </svg>
  `;
}

function shapeMarkup(team) {
  const border = team.ink === "#ffffff" ? "rgba(255,255,255,.95)" : "#ffffff";
  const fill = team.bg;
  const accent = team.accent;
  const common = `fill="${fill}" stroke="${border}" stroke-width="6"`;

  if (team.shape === "round") {
    return `<circle cx="48" cy="48" r="38" ${common}/><circle cx="48" cy="48" r="27" fill="none" stroke="${accent}" stroke-width="5" opacity=".9"/>`;
  }

  if (team.shape === "diamond") {
    return `<path d="M48 8 88 48 48 88 8 48Z" ${common}/><path d="M48 18 78 48 48 78 18 48Z" fill="none" stroke="${accent}" stroke-width="5" opacity=".9"/>`;
  }

  if (team.shape === "flag") {
    return `<path d="M16 18h60v44H28l-12 16Z" ${common}/><path d="M21 30h50M21 44h50" stroke="${accent}" stroke-width="5" opacity=".9"/>`;
  }

  if (team.shape === "clover") {
    return `<path d="M48 15c8-13 29-5 24 12 17-5 25 16 12 24 13 8 5 29-12 24 5 17-16 25-24 12-8 13-29 5-24-12-17 5-25-16-12-24-13-8-5-29 12-24-5-17 16-25 24-12Z" ${common}/>`;
  }

  if (team.shape === "eagle") {
    return `<path d="M14 17h68v35c0 22-14 33-34 39-20-6-34-17-34-39Z" ${common}/><path d="M24 39c15-11 33-11 48 0-11 3-17 9-24 23-7-14-13-20-24-23Z" fill="${accent}" opacity=".9"/>`;
  }

  return `<path d="M16 14h64v38c0 20-13 32-32 39-19-7-32-19-32-39Z" ${common}/><path d="M27 25h42v24c0 12-8 20-21 25-13-5-21-13-21-25Z" fill="none" stroke="${accent}" stroke-width="5" opacity=".9"/>`;
}

async function exportCanvas() {
  const scale = 2;
  const width = 1400;
  const margin = 48;
  const gap = 28;
  const colWidth = (width - margin * 2 - gap) / 2;
  const rowHeight = 50;
  const headerHeight = 132;
  const tableHeaderHeight = 58;
  const tableHeight = tableHeaderHeight + 18 * (rowHeight + 8) + 12;
  const takesHeight = 252;
  const height = margin + headerHeight + tableHeight + 24 + takesHeight + margin;
  const canvas = document.createElement("canvas");
  canvas.width = width * scale;
  canvas.height = height * scale;
  const ctx = canvas.getContext("2d");
  ctx.scale(scale, scale);
  ctx.imageSmoothingQuality = "high";

  drawExportBackground(ctx, width, height);
  drawTitle(ctx, margin, margin);
  await drawLeagueExport(ctx, "bundesliga", margin, margin + headerHeight, colWidth, tableHeight);
  await drawLeagueExport(ctx, "zweite", margin + colWidth + gap, margin + headerHeight, colWidth, tableHeight);
  await drawTakesExport(ctx, "bundesliga", margin, margin + headerHeight + tableHeight + 24, colWidth, takesHeight);
  await drawTakesExport(ctx, "zweite", margin + colWidth + gap, margin + headerHeight + tableHeight + 24, colWidth, takesHeight);

  return canvas;
}

function drawExportBackground(ctx, width, height) {
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, "#eef6f5");
  gradient.addColorStop(0.48, "#f6f7f9");
  gradient.addColorStop(1, "#f7eeee");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
}

function drawTitle(ctx, x, y) {
  ctx.fillStyle = "#64748b";
  ctx.font = "800 17px Arial, sans-serif";
  ctx.fillText("Bundesliga Predictor", x, y + 21);
  ctx.fillStyle = "#111827";
  ctx.font = "900 58px Arial, sans-serif";
  ctx.fillText("Tabellenvorhersage Saison 2026/27", x, y + 84);
  ctx.fillStyle = "#334155";
  ctx.font = "800 22px Arial, sans-serif";
  ctx.fillText(`Von: ${state.author.trim() || "Unbekannt"}`, x, y + 118);
}

async function drawLeagueExport(ctx, league, x, y, width, height) {
  drawPanel(ctx, x, y, width, height);
  const leagueLogo = await loadImage(leagueLogos[league]);
  ctx.drawImage(leagueLogo, x + 20, y + 16, 44, 44);
  ctx.fillStyle = "#64748b";
  ctx.font = "800 14px Arial, sans-serif";
  ctx.fillText(league === "bundesliga" ? "1. BUNDESLIGA" : "2. BUNDESLIGA", x + 78, y + 28);
  ctx.fillStyle = "#111827";
  ctx.font = "900 28px Arial, sans-serif";
  ctx.fillText("Deine Tabelle", x + 78, y + 60);

  let rowY = y + 80;
  for (const [index, teamId] of state[league].entries()) {
    const team = getTeam(league, teamId);
    const markers = getPositionMarkers(league, index);
    drawTeamRowBackground(ctx, x + 16, rowY, width - 32, 50, 7, team);

    ctx.fillStyle = team.ink;
    ctx.font = "900 18px Arial, sans-serif";
    ctx.textAlign = "right";
    ctx.fillText(String(index + 1), x + 48, rowY + 32);
    ctx.textAlign = "left";

    const image = await loadImage(crestSource(team));
    ctx.drawImage(image, x + 62, rowY + 7, 36, 36);

    const markerWidth = drawExportMarkers(ctx, markers, x + width - 24, rowY + 14);
    ctx.fillStyle = team.ink;
    ctx.font = `900 ${fitFont(ctx, team.name, width - 142 - markerWidth, 21, fontStack(team.fontStyle))}px ${fontStack(team.fontStyle)}`;
    ctx.fillText(team.name, x + 112, rowY + 32);
    rowY += 58;
  }
}

function drawTeamRowBackground(ctx, x, y, width, height, radius, team) {
  drawRoundedRect(ctx, x, y, width, height, radius, team.bg);

  ctx.save();
  roundedPath(ctx, x, y, width, height, radius);
  ctx.clip();

  const rowGradient = ctx.createLinearGradient(x, y, x + width, y);
  rowGradient.addColorStop(0, hexToRgba(team.accent, 0.18));
  rowGradient.addColorStop(0.48, hexToRgba(team.accent, 0));
  ctx.fillStyle = rowGradient;
  ctx.fillRect(x, y, width, height);

  const leftGradient = ctx.createLinearGradient(x, y, x + 108, y);
  leftGradient.addColorStop(0, hexToRgba(team.accent, 0.32));
  leftGradient.addColorStop(1, hexToRgba(team.accent, 0.12));
  ctx.fillStyle = leftGradient;
  ctx.fillRect(x, y, 108, height);

  ctx.restore();
}

function hexToRgba(hex, alpha) {
  const clean = hex.replace("#", "");
  const full = clean.length === 3
    ? clean.split("").map((char) => char + char).join("")
    : clean;
  const value = Number.parseInt(full, 16);
  const red = (value >> 16) & 255;
  const green = (value >> 8) & 255;
  const blue = value & 255;
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

function drawExportMarkers(ctx, markers, rightX, y) {
  if (!markers.length) return 0;

  let cursor = rightX;
  const gap = 6;
  ctx.save();
  ctx.font = "900 12px Arial, sans-serif";
  ctx.textBaseline = "middle";

  [...markers].reverse().forEach((marker) => {
    const colors = markerColors[marker.tone];
    const text = `${marker.crown ? "♕ " : ""}${marker.label}`;
    const width = Math.ceil(ctx.measureText(text).width) + 16;
    const left = cursor - width;
    drawRoundedRect(ctx, left, y, width, 22, 11, colors.bg);
    ctx.fillStyle = colors.ink;
    ctx.fillText(text, left + 8, y + 11);
    cursor = left - gap;
  });

  ctx.restore();
  return rightX - cursor;
}

async function drawTakesExport(ctx, league, x, y, width, height) {
  drawPanel(ctx, x, y, width, height);
  const leagueLogo = await loadImage(leagueLogos[league]);
  ctx.drawImage(leagueLogo, x + 20, y + 16, 38, 38);
  ctx.fillStyle = "#64748b";
  ctx.font = "800 14px Arial, sans-serif";
  ctx.fillText(league === "bundesliga" ? "1. BUNDESLIGA" : "2. BUNDESLIGA", x + 72, y + 28);
  ctx.fillStyle = "#111827";
  ctx.font = "900 28px Arial, sans-serif";
  ctx.fillText("Hot Takes", x + 72, y + 60);

  state.takes[league].forEach((take, index) => {
    const boxY = y + 82 + index * 52;
    drawRoundedRect(ctx, x + 16, boxY, width - 32, 42, 7, "#ffffff");
    ctx.fillStyle = "#64748b";
    ctx.font = "900 13px Arial, sans-serif";
    ctx.fillText(`${index + 1}.`, x + 32, boxY + 26);
    ctx.fillStyle = "#111827";
    ctx.font = "700 16px Arial, sans-serif";
    drawWrappedText(ctx, take || "Noch offen", x + 58, boxY + 26, width - 96, 18, 2);
  });
}

function drawPanel(ctx, x, y, width, height) {
  ctx.save();
  ctx.shadowColor = "rgba(18, 25, 38, .13)";
  ctx.shadowBlur = 24;
  ctx.shadowOffsetY = 12;
  drawRoundedRect(ctx, x, y, width, height, 8, "rgba(255,255,255,.88)");
  ctx.restore();
  ctx.strokeStyle = "rgba(20,28,40,.12)";
  ctx.lineWidth = 1;
  strokeRoundedRect(ctx, x, y, width, height, 8);
}

function drawRoundedRect(ctx, x, y, width, height, radius, fill) {
  ctx.beginPath();
  roundedPath(ctx, x, y, width, height, radius);
  ctx.fillStyle = fill;
  ctx.fill();
}

function strokeRoundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  roundedPath(ctx, x, y, width, height, radius);
  ctx.stroke();
}

function roundedPath(ctx, x, y, width, height, radius) {
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
}

function drawWrappedText(ctx, text, x, y, maxWidth, lineHeight, maxLines) {
  const words = text.trim().split(/\s+/);
  let line = "";
  let lines = 0;

  for (const word of words) {
    const test = line ? `${line} ${word}` : word;
    if (ctx.measureText(test).width > maxWidth && line) {
      ctx.fillText(line, x, y + lines * lineHeight);
      line = word;
      lines += 1;
      if (lines >= maxLines - 1) break;
    } else {
      line = test;
    }
  }

  if (line && lines < maxLines) {
    ctx.fillText(line, x, y + lines * lineHeight);
  }
}

function fitFont(ctx, text, maxWidth, startSize, family) {
  let size = startSize;
  while (size > 12) {
    ctx.font = `900 ${size}px ${family}`;
    if (ctx.measureText(text).width <= maxWidth) return size;
    size -= 1;
  }
  return size;
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = src;
  });
}

async function downloadPng() {
  const canvas = await exportCanvas();
  canvas.toBlob((blob) => {
    downloadBlob(blob, "tabellenvorhersage-2026-27.png");
  }, "image/png");
}

async function downloadPdf() {
  const canvas = await exportCanvas();
  const dataUrl = canvas.toDataURL("image/jpeg", 0.92);
  const pdfBlob = createPdfFromJpeg(dataUrl, canvas.width, canvas.height);
  downloadBlob(pdfBlob, "tabellenvorhersage-2026-27.pdf");
}

function createPdfFromJpeg(dataUrl, pixelWidth, pixelHeight) {
  const base64 = dataUrl.split(",")[1];
  const binary = atob(base64);
  const imgBytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) {
    imgBytes[index] = binary.charCodeAt(index);
  }

  const pageWidth = 595.28;
  const pageHeight = pageWidth * (pixelHeight / pixelWidth);
  const imageStream = binary;
  const contentStream = `q\n${pageWidth.toFixed(2)} 0 0 ${pageHeight.toFixed(2)} 0 0 cm\n/Im0 Do\nQ\n`;
  const objects = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pageWidth.toFixed(2)} ${pageHeight.toFixed(2)}] /Resources << /XObject << /Im0 4 0 R >> >> /Contents 5 0 R >>`,
    `<< /Type /XObject /Subtype /Image /Width ${pixelWidth} /Height ${pixelHeight} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${imgBytes.length} >>\nstream\n${imageStream}\nendstream`,
    `<< /Length ${contentStream.length} >>\nstream\n${contentStream}endstream`,
  ];

  let pdf = "%PDF-1.4\n";
  const offsets = [0];
  objects.forEach((object, index) => {
    offsets.push(pdf.length);
    pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
  });
  const xrefOffset = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  offsets.slice(1).forEach((offset) => {
    pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
  });
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;

  const bytes = new Uint8Array(pdf.length);
  for (let index = 0; index < pdf.length; index += 1) {
    bytes[index] = pdf.charCodeAt(index) & 0xff;
  }
  return new Blob([bytes], { type: "application/pdf" });
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function resetAll() {
  state = {
    author: "",
    bundesliga: teams.bundesliga.map((team) => team.id),
    zweite: teams.zweite.map((team) => team.id),
    takes: { bundesliga: ["", "", ""], zweite: ["", "", ""] },
  };
  saveState();
  render();
}

document.querySelector("#authorInput").addEventListener("input", (event) => {
  state.author = event.target.value;
  saveState();
});
document.querySelector("#pngButton").addEventListener("click", downloadPng);
document.querySelector("#pdfButton").addEventListener("click", downloadPdf);
document.querySelector("#resetButton").addEventListener("click", resetAll);

window.__predictor = {
  exportCanvas,
  createPdfFromJpeg,
  getState: () => JSON.parse(JSON.stringify(state)),
};

render();
