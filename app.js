/* ========================================================
   FILMTEREST - Application Logic
   Visual Discovery Platform for Photography & Places
   ======================================================== */

// ---- Data Store ----
const DATA = [
  {
    id: 1,
    title: "Fogbound Kyoto Alley",
    location: "Kyoto, Japan",
    category: "Street",
    description: "Soft neon through mist with a cinematic hush. The old wooden machiya line the narrow lane, their latticed windows glowing against the damp evening air.",
    tags: ["neon", "mist", "35mm", "japan"],
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
    height: 380
  },
  {
    id: 2,
    title: "Dolomites Golden Hour",
    location: "South Tyrol, Italy",
    category: "Landscape",
    description: "Warm granite peaks painted in amber and rose. The last light of day transforms these ancient mountains into a living canvas that photography can barely capture.",
    tags: ["sunset", "alpine", "wide", "mountains"],
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
    height: 320
  },
  {
    id: 3,
    title: "Lisbon Pastel Corners",
    location: "Lisbon, Portugal",
    category: "City",
    description: "Pastel facades, sharp shadows, slow mornings. The tilework catches morning light while a tram rattles by on ancient cobblestones.",
    tags: ["color", "architecture", "travel", "europe"],
    image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=800&q=80",
    height: 420
  },
  {
    id: 4,
    title: "Desert Motel Glow",
    location: "Nevada, USA",
    category: "Roadtrip",
    description: "Warm tungsten over retro signs and soft gravel. The American West distilled into a single frame of lonely beauty.",
    tags: ["retro", "night", "road", "americana"],
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
    height: 280
  },
  {
    id: 5,
    title: "Monsoon Tea Estate",
    location: "Munnar, India",
    category: "Landscape",
    description: "Soft rain, layered greens, and drifting clouds over endless rows of tea bushes. The monsoon breathes life into every leaf.",
    tags: ["green", "rain", "fog", "india"],
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
    height: 360
  },
  {
    id: 6,
    title: "Harbor Light Walk",
    location: "Reykjavik, Iceland",
    category: "Coastal",
    description: "Cold blue hour with glowing harbor details. The still water mirrors the painted houses, creating a symmetry that feels almost surreal.",
    tags: ["blue", "coast", "long exposure", "nordic"],
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    height: 300
  },
  {
    id: 7,
    title: "Sahara Ridges",
    location: "Merzouga, Morocco",
    category: "Desert",
    description: "Wind-drawn dunes and quiet tonal layers. The Sahara speaks in gradients and silence, each ridge a calligraphy of sand.",
    tags: ["sand", "minimal", "texture", "africa"],
    image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=800&q=80",
    height: 340
  },
  {
    id: 8,
    title: "Seoul Afterglow",
    location: "Seoul, South Korea",
    category: "Street",
    description: "Rain-slick asphalt and neon reflections. The city pulses with electric energy as day turns to night in Gangnam.",
    tags: ["night", "neon", "city", "korea"],
    image: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&w=800&q=80",
    height: 400
  },
  {
    id: 9,
    title: "Patagonia Wind",
    location: "Torres del Paine, Chile",
    category: "Adventure",
    description: "Moody skies and glacier-fed lakes beneath towering granite spires. Nature at its most dramatic and untamed.",
    tags: ["wind", "mountain", "adventure", "patagonia"],
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    height: 350
  },
  {
    id: 10,
    title: "Bali Temple Dawn",
    location: "Ubud, Indonesia",
    category: "Culture",
    description: "Soft incense smoke and tropical dawn light filter through ancient stone carvings. A moment of sacred stillness.",
    tags: ["temple", "ritual", "mist", "bali"],
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
    height: 440
  },
  {
    id: 11,
    title: "California Coastline",
    location: "Big Sur, USA",
    category: "Coastal",
    description: "Cliffside drives and Pacific fog rolling over ancient redwoods. Highway 1 at its most iconic.",
    tags: ["ocean", "road", "classic", "california"],
    image: "https://images.unsplash.com/photo-1449034446863-48b3456fe27a?auto=format&fit=crop&w=800&q=80",
    height: 290
  },
  {
    id: 12,
    title: "Nordic Cabin Glow",
    location: "Lofoten, Norway",
    category: "Cabin",
    description: "Warm interior light against arctic blues. The red rorbu stands defiant against the winter darkness, a beacon of hygge.",
    tags: ["cozy", "snow", "hygge", "norway"],
    image: "https://images.unsplash.com/photo-1520769669658-f07657f5a307?auto=format&fit=crop&w=800&q=80",
    height: 370
  },
  {
    id: 13,
    title: "Havana Sunset Ride",
    location: "Havana, Cuba",
    category: "Street",
    description: "Vintage cars cruise beneath pastel facades as golden light floods the Malecon. Time stands still in the best way.",
    tags: ["retro", "sunset", "color", "cuba"],
    image: "https://images.unsplash.com/photo-1500759285222-a95626b934cb?auto=format&fit=crop&w=800&q=80",
    height: 310
  },
  {
    id: 14,
    title: "Rainforest Canopy",
    location: "Costa Rica",
    category: "Nature",
    description: "Emerald canopy with golden fog shafts piercing through ancient trees. Life thrives in every square inch of green.",
    tags: ["rainforest", "green", "wild", "tropical"],
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=800&q=80",
    height: 420
  },
  {
    id: 15,
    title: "Copenhagen Canals",
    location: "Copenhagen, Denmark",
    category: "City",
    description: "Clean lines, calm water, and warm facades of Nyhavn. Scandinavian design philosophy made into a waterfront.",
    tags: ["minimal", "pastel", "architecture", "denmark"],
    image: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&w=800&q=80",
    height: 330
  },
  {
    id: 16,
    title: "Alpine Train Journey",
    location: "Zermatt, Switzerland",
    category: "Travel",
    description: "Window views with a nostalgic rhythm. The Glacier Express threads between snow-laden peaks and pristine valleys.",
    tags: ["train", "mountain", "film", "switzerland"],
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
    height: 360
  },
  {
    id: 17,
    title: "Cape Town Color Blocks",
    location: "Cape Town, South Africa",
    category: "City",
    description: "Bright murals and geometric surfaces of Bo-Kaap. Every house tells a story in vibrant pigment.",
    tags: ["color", "graphic", "street", "cape-town"],
    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=800&q=80",
    height: 300
  },
  {
    id: 18,
    title: "Scottish Highlands",
    location: "Isle of Skye, Scotland",
    category: "Landscape",
    description: "Rolling moors under shifting light and dramatic cloud formations. The landscape changes mood by the minute.",
    tags: ["moody", "clouds", "green", "scotland"],
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
    height: 340
  },
  {
    id: 19,
    title: "Dune Grass Breeze",
    location: "Oregon Coast, USA",
    category: "Coastal",
    description: "Muted tones and soft sea mist. The Pacific Northwest whispers through bending grass and weathered driftwood.",
    tags: ["sea", "calm", "neutral", "pacific"],
    image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&w=800&q=80",
    height: 380
  },
  {
    id: 20,
    title: "Tokyo Vinyl Night",
    location: "Tokyo, Japan",
    category: "Culture",
    description: "Warm lamplight and a hidden listening bar in Golden Gai. The sound of jazz fills a room that seats eight.",
    tags: ["music", "night", "analog", "tokyo"],
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80",
    height: 350
  },
  {
    id: 21,
    title: "Santorini Blue",
    location: "Oia, Greece",
    category: "Travel",
    description: "White-washed walls and cobalt domes against the deepest blue of the Aegean. Perfection in geometry and color.",
    tags: ["blue", "white", "mediterranean", "greece"],
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80",
    height: 410
  },
  {
    id: 22,
    title: "Marrakech Medina",
    location: "Marrakech, Morocco",
    category: "Culture",
    description: "Spice-scented alleyways and intricate zellige tilework. The old city breathes centuries of artisan tradition.",
    tags: ["spice", "pattern", "market", "morocco"],
    image: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&w=800&q=80",
    height: 390
  },
  {
    id: 23,
    title: "Autumn in Kyoto",
    location: "Arashiyama, Japan",
    category: "Nature",
    description: "Bamboo groves and momiji leaves in their peak autumn blaze. Nature puts on its finest performance.",
    tags: ["autumn", "bamboo", "temple", "foliage"],
    image: "https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=800&q=80",
    height: 450
  },
  {
    id: 24,
    title: "Venice Morning Light",
    location: "Venice, Italy",
    category: "City",
    description: "Empty canals reflecting golden light before the crowds wake. La Serenissima at her most serene.",
    tags: ["canal", "golden-hour", "reflection", "italy"],
    image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=800&q=80",
    height: 320
  },
  {
    id: 25,
    title: "Northern Lights Cathedral",
    location: "Tromso, Norway",
    category: "Landscape",
    description: "Aurora borealis dances above the Arctic Cathedral. Green curtains of charged particles paint the polar sky.",
    tags: ["aurora", "night", "arctic", "nordic"],
    image: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?auto=format&fit=crop&w=800&q=80",
    height: 360
  },
  {
    id: 26,
    title: "Petra Rose City",
    location: "Petra, Jordan",
    category: "Culture",
    description: "Rose-red facades carved from living rock. Two thousand years of erosion have only added to the masterpiece.",
    tags: ["ancient", "sandstone", "wonder", "jordan"],
    image: "https://images.unsplash.com/photo-1579606032821-4e6161c81571?auto=format&fit=crop&w=800&q=80",
    height: 400
  },
  {
    id: 27,
    title: "Maldives Overwater",
    location: "Baa Atoll, Maldives",
    category: "Coastal",
    description: "Crystal waters in impossible shades of turquoise. Where the sky meets the sea, there is no horizon.",
    tags: ["tropical", "luxury", "ocean", "paradise"],
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80",
    height: 280
  },
  {
    id: 28,
    title: "Prague Winter Spires",
    location: "Prague, Czech Republic",
    category: "City",
    description: "Gothic spires dusted with fresh snow. The Charles Bridge stands sentinel over the Vltava in winter silence.",
    tags: ["gothic", "winter", "architecture", "europe"],
    image: "https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=800&q=80",
    height: 370
  },
  {
    id: 29,
    title: "Yosemite Granite",
    location: "Yosemite, USA",
    category: "Adventure",
    description: "El Capitan's granite face catches the last rays. Climbers become specks on nature's most famous monolith.",
    tags: ["granite", "climbing", "national-park", "california"],
    image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=800&q=80",
    height: 340
  },
  {
    id: 30,
    title: "Istanbul Twilight",
    location: "Istanbul, Turkey",
    category: "Culture",
    description: "Minarets silhouetted against amber twilight. The call to prayer echoes across the Bosphorus as two continents watch.",
    tags: ["mosque", "twilight", "silhouette", "turkey"],
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=800&q=80",
    height: 390
  },
  {
    id: 31,
    title: "Banff Mirror Lake",
    location: "Banff, Canada",
    category: "Landscape",
    description: "Moraine Lake's turquoise waters perfectly mirror the Valley of the Ten Peaks in breathless symmetry.",
    tags: ["lake", "reflection", "mountains", "canada"],
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
    height: 310
  },
  {
    id: 32,
    title: "Amalfi Lemons",
    location: "Amalfi Coast, Italy",
    category: "Travel",
    description: "Sun-drenched terraces draped in bougainvillea above a turquoise cove. La dolce vita at its finest.",
    tags: ["mediterranean", "summer", "color", "coastal"],
    image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=800&q=80",
    height: 360
  }
];

// ---- State ----
const state = {
  currentPage: 1,
  pageSize: 12,
  activeCategory: "All",
  searchQuery: "",
  savedOnly: false,
  gridMode: "default",
  currentView: "home",
  boards: JSON.parse(localStorage.getItem("ft-boards") || "[]"),
  saved: new Set(JSON.parse(localStorage.getItem("ft-saved") || "[]")),
  modalPinId: null
};

// ---- DOM Refs ----
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const els = {
  header: $("#siteHeader"),
  searchInput: $("#searchInput"),
  categoryScroll: $("#categoryScroll"),
  feedTitle: $("#feedTitle"),
  feedCount: $("#feedCount"),
  savedToggle: $("#savedToggle"),
  grid: $("#masonryGrid"),
  loadMoreBtn: $("#loadMoreBtn"),
  loadMoreWrap: $("#loadMoreWrap"),
  // Modal
  pinModal: $("#pinModal"),
  pinModalContent: $("#pinModalContent"),
  pinModalClose: $("#pinModalClose"),
  modalImage: $("#modalImage"),
  modalCategory: $("#modalCategory"),
  modalTitle: $("#modalTitle"),
  modalDescription: $("#modalDescription"),
  modalLocation: $("#modalLocation"),
  modalTags: $("#modalTags"),
  modalRelated: $("#modalRelated"),
  modalSaveBtn: $("#modalSaveBtn"),
  // Board modal
  boardModal: $("#boardModal"),
  boardModalClose: $("#boardModalClose"),
  createBoardForm: $("#createBoardForm"),
  // Save popover
  savePopover: $("#savePopover"),
  savePopoverList: $("#savePopoverList"),
  savePopoverNew: $("#savePopoverNew"),
  // Profile
  profileSidebar: $("#profileSidebar"),
  profileBackdrop: $("#profileBackdrop"),
  profileBtn: $("#profileBtn"),
  profileSavedCount: $("#profileSavedCount"),
  profileBoardCount: $("#profileBoardCount"),
  // Toast
  toastContainer: $("#toastContainer"),
  // Hero
  heroBanner: $("#heroBanner"),
  heroExploreBtn: $("#heroExploreBtn"),
  heroCreateBoardBtn: $("#heroCreateBoardBtn"),
  // Upload
  uploadBtn: $("#uploadBtn"),
  // Main content
  mainContent: $("#mainContent"),
  // Notif
  notifBtn: $("#notifBtn"),
  // Mobile
  mobileProfileBtn: $("#mobileProfileBtn"),
};

// ---- Utilities ----
function persistSaved() {
  localStorage.setItem("ft-saved", JSON.stringify([...state.saved]));
}

function persistBoards() {
  localStorage.setItem("ft-boards", JSON.stringify(state.boards));
}

function debounce(fn, ms) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), ms);
  };
}

function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  els.toastContainer.appendChild(toast);
  setTimeout(() => {
    toast.classList.add("toast--exit");
    toast.addEventListener("animationend", () => toast.remove());
  }, 2400);
}

// ---- Categories ----
function getCategories() {
  return ["All", ...new Set(DATA.map((d) => d.category))];
}

function renderCategories() {
  const cats = getCategories();
  els.categoryScroll.innerHTML = "";
  cats.forEach((cat) => {
    const chip = document.createElement("button");
    chip.className = `category-chip${cat === state.activeCategory ? " active" : ""}`;
    chip.textContent = cat;
    chip.addEventListener("click", () => {
      state.activeCategory = cat;
      state.currentPage = 1;
      renderCategories();
      renderGrid();
      updateFeedInfo();
    });
    els.categoryScroll.appendChild(chip);
  });
}

// ---- Data Filtering ----
function filteredData() {
  return DATA.filter((item) => {
    const inCategory = state.activeCategory === "All" || item.category === state.activeCategory;
    const inSearch = !state.searchQuery || [item.title, item.location, item.description, ...item.tags]
      .join(" ")
      .toLowerCase()
      .includes(state.searchQuery.toLowerCase());
    const isSaved = !state.savedOnly || state.saved.has(item.id);
    return inCategory && inSearch && isSaved;
  });
}

function paginatedData() {
  const data = filteredData();
  return data.slice(0, state.currentPage * state.pageSize);
}

// ---- Skeleton Loaders ----
function createSkeleton() {
  const heights = [200, 260, 300, 180, 240, 280, 220, 320];
  const h = heights[Math.floor(Math.random() * heights.length)];
  const skel = document.createElement("div");
  skel.className = "skeleton";
  skel.innerHTML = `
    <div class="skeleton__media" style="height:${h}px"></div>
    <div class="skeleton__body">
      <div class="skeleton__line"></div>
      <div class="skeleton__line skeleton__line--short"></div>
      <div class="skeleton__line skeleton__line--xs"></div>
    </div>
  `;
  return skel;
}

function showSkeletons(count = 12) {
  els.grid.innerHTML = "";
  for (let i = 0; i < count; i++) {
    els.grid.appendChild(createSkeleton());
  }
}

// ---- Lazy Loading ----
function setupLazyLoading(img) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const image = entry.target;
          const src = image.dataset.src;
          if (src) {
            image.src = src;
            image.onload = () => image.classList.add("loaded");
            image.onerror = () => {
              image.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' fill='%23e5e5e5'%3E%3Crect width='400' height='300'/%3E%3C/svg%3E";
              image.classList.add("loaded");
            };
          }
          observer.unobserve(image);
        }
      });
    },
    { rootMargin: "200px" }
  );
  observer.observe(img);
}

// ---- Pin Card ----
function createPinCard(item, index) {
  const card = document.createElement("article");
  card.className = "pin-card";
  card.style.animationDelay = `${index * 40}ms`;
  const isSaved = state.saved.has(item.id);

  card.innerHTML = `
    <div class="pin-card__media" style="aspect-ratio: 4/${(3 + Math.random() * 2).toFixed(1)}">
      <img class="pin-card__img" data-src="${item.image}" alt="${item.title}" />
      <div class="pin-card__overlay">
        <div class="pin-card__overlay-top">
          <button class="pin-card__save ${isSaved ? "saved" : ""}" data-id="${item.id}">
            ${isSaved ? "Saved" : "Save"}
          </button>
        </div>
        <div class="pin-card__overlay-bottom">
          <button class="pin-card__more" data-id="${item.id}" title="More options">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
          </button>
        </div>
      </div>
    </div>
    <div class="pin-card__body">
      <div class="pin-card__title">${item.title}</div>
      <div class="pin-card__location">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        ${item.location}
      </div>
    </div>
  `;

  // Lazy load image
  const img = card.querySelector(".pin-card__img");
  setupLazyLoading(img);

  // Click to open modal
  card.addEventListener("click", (e) => {
    if (e.target.closest(".pin-card__save") || e.target.closest(".pin-card__more")) return;
    openPinModal(item.id);
  });

  // Save button
  const saveBtn = card.querySelector(".pin-card__save");
  saveBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleSave(item.id, saveBtn);
  });

  // More button - show save popover
  const moreBtn = card.querySelector(".pin-card__more");
  moreBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    showSavePopover(e, item.id);
  });

  return card;
}

// ---- Grid Rendering ----
function renderGrid() {
  const items = paginatedData();
  const total = filteredData().length;

  // Show skeletons briefly for effect
  showSkeletons(Math.min(state.pageSize, 12));

  setTimeout(() => {
    els.grid.innerHTML = "";

    if (items.length === 0) {
      els.grid.innerHTML = `
        <div style="grid-column:1/-1; text-align:center; padding:80px 20px;">
          <div style="font-size:48px; margin-bottom:16px;">&#128247;</div>
          <h3 style="font-size:18px; font-weight:600; margin-bottom:8px;">No pins found</h3>
          <p style="color:var(--text-tertiary); font-size:14px;">Try adjusting your filters or search query.</p>
        </div>
      `;
      els.loadMoreWrap.style.display = "none";
      return;
    }

    items.forEach((item, i) => {
      els.grid.appendChild(createPinCard(item, i));
    });

    els.loadMoreWrap.style.display = total > items.length ? "flex" : "none";
  }, 500);
}

function updateFeedInfo() {
  const total = filteredData().length;
  els.feedTitle.textContent = state.activeCategory === "All" ? "For You" : state.activeCategory;
  els.feedCount.textContent = `${total} pin${total !== 1 ? "s" : ""}`;
}

// ---- Toggle Save ----
function toggleSave(id, buttonEl) {
  if (state.saved.has(id)) {
    state.saved.delete(id);
    if (buttonEl) {
      buttonEl.classList.remove("saved");
      buttonEl.textContent = "Save";
    }
    showToast("Removed from saved");
  } else {
    state.saved.add(id);
    if (buttonEl) {
      buttonEl.classList.add("saved");
      buttonEl.textContent = "Saved";
    }
    showToast("Pin saved!");
  }
  persistSaved();
  updateProfileStats();

  if (state.savedOnly) {
    renderGrid();
    updateFeedInfo();
  }
}

// ---- Pin Modal ----
function openPinModal(id) {
  const item = DATA.find((d) => d.id === id);
  if (!item) return;

  state.modalPinId = id;

  els.modalImage.src = item.image;
  els.modalImage.alt = item.title;
  els.modalCategory.textContent = item.category;
  els.modalTitle.textContent = item.title;
  els.modalDescription.textContent = item.description;
  els.modalLocation.textContent = item.location;

  // Tags
  els.modalTags.innerHTML = "";
  item.tags.forEach((tag) => {
    const span = document.createElement("span");
    span.className = "modal__tag";
    span.textContent = `#${tag}`;
    span.addEventListener("click", () => {
      closePinModal();
      els.searchInput.value = tag;
      state.searchQuery = tag;
      state.currentPage = 1;
      renderGrid();
      updateFeedInfo();
    });
    els.modalTags.appendChild(span);
  });

  // Save button state
  const isSaved = state.saved.has(id);
  els.modalSaveBtn.textContent = isSaved ? "Saved" : "Save";
  els.modalSaveBtn.classList.toggle("saved", isSaved);

  // Related pins
  renderRelatedPins(item);

  els.pinModal.classList.add("open");
  document.body.classList.add("modal-open");
}

function closePinModal() {
  els.pinModal.classList.remove("open");
  document.body.classList.remove("modal-open");
  state.modalPinId = null;
}

function renderRelatedPins(item) {
  const related = DATA.filter((d) => d.id !== item.id && (d.category === item.category || d.tags.some((t) => item.tags.includes(t))))
    .slice(0, 3);

  els.modalRelated.innerHTML = "";
  related.forEach((pin) => {
    const div = document.createElement("div");
    div.className = "modal__related-item";
    div.innerHTML = `<img src="${pin.image}" alt="${pin.title}" />`;
    div.addEventListener("click", () => openPinModal(pin.id));
    els.modalRelated.appendChild(div);
  });
}

// ---- Board Modal ----
function openBoardModal() {
  els.boardModal.classList.add("open");
  document.body.classList.add("modal-open");
  document.getElementById("boardName").focus();
}

function closeBoardModal() {
  els.boardModal.classList.remove("open");
  if (!els.pinModal.classList.contains("open")) {
    document.body.classList.remove("modal-open");
  }
  document.getElementById("createBoardForm").reset();
}

function createBoard(name, desc, visibility) {
  const board = {
    id: Date.now(),
    name,
    description: desc,
    visibility,
    pins: [],
    createdAt: new Date().toISOString()
  };
  state.boards.push(board);
  persistBoards();
  updateProfileStats();
  showToast(`Board "${name}" created!`);
  return board;
}

// ---- Save Popover ----
let activePopoverPinId = null;

function showSavePopover(event, pinId) {
  activePopoverPinId = pinId;
  const rect = event.target.getBoundingClientRect();

  els.savePopover.style.top = `${rect.bottom + 8}px`;
  els.savePopover.style.left = `${Math.min(rect.left, window.innerWidth - 276)}px`;

  // Render boards
  els.savePopoverList.innerHTML = "";
  state.boards.forEach((board) => {
    const el = document.createElement("div");
    el.className = "save-popover__board";
    const thumbImg = board.pins.length > 0
      ? DATA.find((d) => d.id === board.pins[0])?.image || ""
      : "";
    el.innerHTML = `
      <div class="save-popover__board-thumb">
        ${thumbImg ? `<img src="${thumbImg}" alt="" />` : ""}
      </div>
      <div>
        <div class="save-popover__board-name">${board.name}</div>
        <div class="save-popover__board-count">${board.pins.length} pins</div>
      </div>
    `;
    el.addEventListener("click", () => {
      savePinToBoard(board.id, pinId);
      hideSavePopover();
    });
    els.savePopoverList.appendChild(el);
  });

  if (state.boards.length === 0) {
    els.savePopoverList.innerHTML = `<div style="padding:12px 10px; color:var(--text-tertiary); font-size:13px;">No boards yet. Create one!</div>`;
  }

  els.savePopover.classList.add("open");
}

function hideSavePopover() {
  els.savePopover.classList.remove("open");
  activePopoverPinId = null;
}

function savePinToBoard(boardId, pinId) {
  const board = state.boards.find((b) => b.id === boardId);
  if (!board) return;
  if (!board.pins.includes(pinId)) {
    board.pins.push(pinId);
    persistBoards();
    showToast(`Saved to "${board.name}"`);
  } else {
    showToast("Already in this board");
  }
}

// ---- Profile Sidebar ----
function openProfile() {
  els.profileSidebar.classList.add("open");
  updateProfileStats();
}

function closeProfile() {
  els.profileSidebar.classList.remove("open");
}

function updateProfileStats() {
  els.profileSavedCount.textContent = state.saved.size;
  els.profileBoardCount.textContent = state.boards.length;
}

// ---- Boards View ----
function renderBoardsView() {
  // Check if boards view already exists, if not create it
  let boardsView = document.querySelector(".boards-view");
  if (!boardsView) {
    boardsView = document.createElement("section");
    boardsView.className = "boards-view";
    els.mainContent.appendChild(boardsView);
  }

  boardsView.innerHTML = `
    <div class="boards-view__header">
      <h2 class="boards-view__title">Your Boards</h2>
      <button class="btn btn--primary" id="boardsCreateBtn">+ Create Board</button>
    </div>
    <div class="boards-grid" id="boardsGrid"></div>
  `;

  const boardsGrid = boardsView.querySelector("#boardsGrid");

  // Create board card
  const createCard = document.createElement("div");
  createCard.className = "board-card board-card--create";
  createCard.innerHTML = `
    <div class="board-card--create-content">
      <div class="board-card--create-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
      </div>
      <div class="board-card--create-label">Create Board</div>
    </div>
  `;
  createCard.addEventListener("click", openBoardModal);
  boardsGrid.appendChild(createCard);

  // Existing boards
  state.boards.forEach((board) => {
    const card = document.createElement("div");
    card.className = "board-card";

    const pins = board.pins.map((pid) => DATA.find((d) => d.id === pid)).filter(Boolean);
    const img1 = pins[0]?.image || "";
    const img2 = pins[1]?.image || "";
    const img3 = pins[2]?.image || "";

    card.innerHTML = `
      <div class="board-card__mosaic">
        <div class="board-card__mosaic-main">
          ${img1 ? `<img src="${img1}" alt="" />` : ""}
        </div>
        <div class="board-card__mosaic-sub">
          ${img2 ? `<img src="${img2}" alt="" />` : ""}
        </div>
        <div class="board-card__mosaic-sub">
          ${img3 ? `<img src="${img3}" alt="" />` : ""}
        </div>
      </div>
      <div class="board-card__body">
        <div class="board-card__name">${board.name}</div>
        <div class="board-card__count">${board.pins.length} pin${board.pins.length !== 1 ? "s" : ""}</div>
      </div>
    `;
    boardsGrid.appendChild(card);
  });

  // Create board button
  boardsView.querySelector("#boardsCreateBtn").addEventListener("click", openBoardModal);

  return boardsView;
}

// ---- View Switching ----
function switchView(view) {
  state.currentView = view;

  // Update nav links
  $$(".header__nav-link").forEach((link) => {
    link.classList.toggle("active", link.dataset.view === view);
  });
  $$(".mobile-nav__item[data-view]").forEach((link) => {
    link.classList.toggle("active", link.dataset.view === view);
  });

  // Toggle sections
  const homeSections = [els.heroBanner, $(".categories"), $(".feed-controls"), $(".grid-section")];
  const boardsView = document.querySelector(".boards-view");

  if (view === "boards") {
    homeSections.forEach((s) => { if (s) s.style.display = "none"; });
    const bv = renderBoardsView();
    bv.classList.add("active");
  } else {
    homeSections.forEach((s) => { if (s) s.style.display = ""; });
    if (boardsView) boardsView.classList.remove("active");

    if (view === "explore") {
      els.heroBanner.style.display = "none";
      state.activeCategory = "All";
      renderCategories();
      renderGrid();
      updateFeedInfo();
    }
  }
}

// ---- Grid Mode ----
function setGridMode(mode) {
  state.gridMode = mode;
  els.grid.classList.toggle("compact", mode === "compact");
  $$(".feed-controls__layout-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.cols === mode);
  });
}

// ---- Header Scroll ----
function setupHeaderScroll() {
  let lastScroll = 0;
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    els.header.classList.toggle("header--scrolled", scrollY > 10);
    lastScroll = scrollY;
  }, { passive: true });
}

// ---- Keyboard Shortcuts ----
function setupKeyboard() {
  document.addEventListener("keydown", (e) => {
    // '/' to focus search
    if (e.key === "/" && !e.ctrlKey && !e.metaKey && document.activeElement.tagName !== "INPUT" && document.activeElement.tagName !== "TEXTAREA") {
      e.preventDefault();
      els.searchInput.focus();
    }

    // Escape to close modals
    if (e.key === "Escape") {
      if (els.pinModal.classList.contains("open")) {
        closePinModal();
      } else if (els.boardModal.classList.contains("open")) {
        closeBoardModal();
      } else if (els.profileSidebar.classList.contains("open")) {
        closeProfile();
      } else if (els.savePopover.classList.contains("open")) {
        hideSavePopover();
      }
    }
  });
}

// ---- Event Listeners ----
function setupEvents() {
  // Search
  els.searchInput.addEventListener("input", debounce((e) => {
    state.searchQuery = e.target.value.trim();
    state.currentPage = 1;
    renderGrid();
    updateFeedInfo();
  }, 250));

  // Load More
  els.loadMoreBtn.addEventListener("click", () => {
    state.currentPage++;
    renderGrid();
  });

  // Saved Toggle
  els.savedToggle.addEventListener("click", () => {
    state.savedOnly = !state.savedOnly;
    els.savedToggle.classList.toggle("active", state.savedOnly);
    state.currentPage = 1;
    renderGrid();
    updateFeedInfo();
  });

  // Layout buttons
  $$(".feed-controls__layout-btn").forEach((btn) => {
    btn.addEventListener("click", () => setGridMode(btn.dataset.cols));
  });

  // Pin Modal Close
  els.pinModalClose.addEventListener("click", closePinModal);
  els.pinModal.addEventListener("click", (e) => {
    if (e.target === els.pinModal) closePinModal();
  });

  // Modal Save
  els.modalSaveBtn.addEventListener("click", () => {
    if (state.modalPinId) {
      toggleSave(state.modalPinId, els.modalSaveBtn);
    }
  });

  // Board Modal
  els.boardModalClose.addEventListener("click", closeBoardModal);
  els.boardModal.addEventListener("click", (e) => {
    if (e.target === els.boardModal) closeBoardModal();
  });

  els.createBoardForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("boardName").value.trim();
    const desc = document.getElementById("boardDesc").value.trim();
    const visibility = document.querySelector('input[name="boardVisibility"]:checked').value;
    if (name) {
      createBoard(name, desc, visibility);
      closeBoardModal();
    }
  });

  // Save Popover
  els.savePopoverNew.addEventListener("click", () => {
    hideSavePopover();
    openBoardModal();
  });

  document.addEventListener("click", (e) => {
    if (!els.savePopover.contains(e.target) && !e.target.closest(".pin-card__more")) {
      hideSavePopover();
    }
  });

  // Profile
  els.profileBtn.addEventListener("click", openProfile);
  els.profileBackdrop.addEventListener("click", closeProfile);
  if (els.mobileProfileBtn) {
    els.mobileProfileBtn.addEventListener("click", (e) => {
      e.preventDefault();
      openProfile();
    });
  }

  // Nav links
  $$(".header__nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      switchView(link.dataset.view);
    });
  });

  $$(".mobile-nav__item[data-view]").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      switchView(link.dataset.view);
    });
  });

  // Hero buttons
  els.heroExploreBtn.addEventListener("click", () => switchView("explore"));
  els.heroCreateBoardBtn.addEventListener("click", openBoardModal);

  // Upload button
  els.uploadBtn.addEventListener("click", () => showToast("Upload coming soon!"));

  // Notif button
  els.notifBtn.addEventListener("click", () => showToast("No new notifications"));

  // Brand link
  $("#brandLink").addEventListener("click", (e) => {
    e.preventDefault();
    switchView("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Share & Link buttons in modal
  $("#modalShareBtn").addEventListener("click", () => showToast("Link copied to clipboard!"));
  $("#modalLinkBtn").addEventListener("click", () => showToast("Link copied!"));
}

// ---- Infinite Scroll (optional enhancement) ----
function setupInfiniteScroll() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const total = filteredData().length;
          const loaded = state.currentPage * state.pageSize;
          if (loaded < total) {
            state.currentPage++;
            // Append new cards without re-rendering
            const items = paginatedData();
            const newItems = items.slice(loaded);
            newItems.forEach((item, i) => {
              els.grid.appendChild(createPinCard(item, i));
            });
            els.loadMoreWrap.style.display = items.length < total ? "flex" : "none";
            updateFeedInfo();
          }
        }
      });
    },
    { rootMargin: "400px" }
  );

  observer.observe(els.loadMoreWrap);
}

// ---- Initialize ----
function init() {
  renderCategories();
  renderGrid();
  updateFeedInfo();
  updateProfileStats();
  setupHeaderScroll();
  setupKeyboard();
  setupEvents();

  // Delayed infinite scroll setup
  setTimeout(() => setupInfiniteScroll(), 1000);
}

// Start
document.addEventListener("DOMContentLoaded", init);
