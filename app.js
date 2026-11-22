const icons = {
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"/></svg>',
  dept: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 21V5l8-3 8 3v16M2 21h20M8 8h2m4 0h2M8 12h2m4 0h2M8 16h2m4 0h2"/></svg>',
  book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V5H6.5A2.5 2.5 0 0 0 4 7.5z"/><path d="M4 7.5v12M8 7h8"/></svg>',
  people: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="9" cy="8" r="3"/><path d="M3 21v-2a6 6 0 0 1 12 0v2M16 5a3 3 0 0 1 0 6m3 10v-2a6 6 0 0 0-3-5.2"/></svg>',
  logout: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M10 17l5-5-5-5m5 5H3m11-9h7v18h-7"/></svg>',
  bell: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/></svg>'
};

const resources = [
  { type: "Past Paper", title: "Object-Oriented Programming", meta: "Spring 2024 • 42 KB", category: "Past Papers", description: "Previous examination paper for OOP." },
  { type: "Past Paper", title: "Data Structures & Algorithms", meta: "Fall 2023 • 38 KB", category: "Past Papers", description: "DSA theory and practical examination paper." },
  { type: "Notes", title: "Computer Architecture", meta: "Semester 3 • 1.2 MB", category: "Notes", description: "Processor organization and architecture notes." },
  { type: "Notes", title: "Database Systems", meta: "Semester 4 • 860 KB", category: "Notes", description: "SQL, normalization and transaction notes." },
  { type: "Past Paper", title: "Operating Systems", meta: "Spring 2023 • 56 KB", category: "Past Papers", description: "Processes, memory and file system paper." },
  { type: "Notes", title: "Computer Networks", meta: "Semester 6 • 930 KB", category: "Notes", description: "Network layers, protocols and security notes." }
];

const faculty = [
  { name: "Head of Department", role: "Department Head", bio: "Please replace with the verified official profile.", initials: "HOD" },
  { name: "Verified Faculty Member", role: "Assistant Professor", bio: "Profile details pending university confirmation.", initials: "AF" },
  { name: "Verified Faculty Member", role: "Lecturer", bio: "Profile details pending university confirmation.", initials: "LF" },
  { name: "Verified Faculty Member", role: "Lecturer", bio: "Profile details pending university confirmation.", initials: "LF" }
];

const staff = [
  { name: "Department Clerk", role: "Administrative Staff", bio: "For forms, schedules and departmental records.", initials: "DC" },
  { name: "Computer Laboratory", role: "Lab Support", bio: "For laboratory access and practical support.", initials: "LAB" }
];

const app = document.getElementById("app");

function brand() {
  return `<div class="brand">
    <div class="brand-mark">GU</div>
    <div class="brand-text"><strong>Ghazi University</strong><span>Dera Ghazi Khan</span></div>
  </div>`;
}

function loginPage() {
  app.innerHTML = `<main class="login-shell">
    <section class="login-showcase">
      ${brand()}
      <div class="showcase-copy">
        <div class="eyebrow">Student information system</div>
        <h1>Learning starts with access.</h1>
        <p>Past papers, course notes, department updates and faculty information—all in one simple student portal.</p>
      </div>
    </section>
    <section class="login-panel">
      <form class="login-card" id="login-form">
        <div class="eyebrow">Ghazi University</div>
        <h2>Welcome back</h2>
        <p>Sign in to your student workspace.</p>
        <label class="field"><span>University email or roll number</span><input id="login-id" required placeholder="e.g. se-1234" /></label>
        <label class="field"><span>Password</span><input id="login-password" required type="password" placeholder="Enter your password" /></label>
        <div class="login-options">
          <label><input type="checkbox" checked /> Remember me</label>
          <a href="#home" onclick="document.querySelector('#login-id').focus()">Need help?</a>
        </div>
        <button class="primary-btn" type="submit">Sign in</button>
        <div class="demo-note"><strong>Demo mode:</strong> This static login demonstrates the interface only. It does not create or verify accounts. Use Firebase or another secure authentication service before storing real student access.</div>
      </form>
    </section>
  </main>`;

  document.getElementById("login-form").onsubmit = (event) => {
    event.preventDefault();
    const id = document.getElementById("login-id").value.trim();
    sessionStorage.setItem("gu-demo-user", id || "Student");
    location.hash = "#home";
    render();
  };
}

function shell(content) {
  const route = location.hash.slice(1) || "home";
  const labels = { home: "Student Dashboard", department: "Department", resources: "Notes & Past Papers", people: "Faculty & Staff" };
  app.innerHTML = `<div class="app-shell">
    <aside class="sidebar" id="sidebar">
      ${brand()}
      <nav class="sidebar-nav">
        <a class="nav-link ${route === "home" ? "active" : ""}" href="#home">${icons.home}<span>Overview</span></a>
        <a class="nav-link ${route === "department" ? "active" : ""}" href="#department">${icons.dept}<span>Department</span></a>
        <a class="nav-link ${route === "resources" ? "active" : ""}" href="#resources">${icons.book}<span>Resources</span></a>
        <a class="nav-link ${route === "people" ? "active" : ""}" href="#people">${icons.people}<span>Faculty & Staff</span></a>
      </nav>
      <div class="sidebar-footer">
        <div class="student-mini">
          <div class="avatar">ST</div>
          <div><strong>${sessionStorage.getItem("gu-demo-user") || "Student"}</strong><span>Computer Science &amp; IT</span></div>
        </div>
        <button class="nav-link" id="logout-btn" style="width:100%;border:0;background:none;color:rgba(255,255,255,.68);cursor:pointer">${icons.logout}<span>Sign out</span></button>
      </div>
    </aside>
    <main class="main">
      <header class="topbar">
        <div style="display:flex;align-items:center">
          <button class="icon-btn menu-btn" id="menu-btn" aria-label="Open menu">☰</button>
          <div class="topbar-title"><strong>${labels[route] || "Student Portal"}</strong><span>Department of Computer Science &amp; IT</span></div>
        </div>
        <div class="top-actions"><button class="icon-btn" aria-label="Notifications">${icons.bell}</button></div>
      </header>
      <div class="content">${content}</div>
    </main>
  </div>`;

  document.getElementById("menu-btn")?.addEventListener("click", () => document.getElementById("sidebar").classList.toggle("open"));
  document.getElementById("logout-btn").addEventListener("click", () => {
    sessionStorage.removeItem("gu-demo-user");
    location.hash = "";
    render();
  });
}

function homePage() {
  const rows = resources.slice(0, 3).map(r => `<div class="resource-row">
    <div class="file-icon">${r.type === "Notes" ? "PDF" : "PPR"}</div>
    <div><strong>${r.title}</strong><span>${r.meta}</span></div>
    <button class="download-btn" aria-label="Download ${r.title}" onclick="alert('Add the real PDF or document link in app.js')">↓</button>
  </div>`).join("");

  return shell(`<div class="page-head">
      <div><div class="eyebrow">Computer Science &amp; IT</div><h1>Good afternoon</h1></div>
    </div>
    <section class="hero-card">
      <div class="hero-copy"><div class="eyebrow" style="color:#cfdfd6">Department portal</div><h2>Your semester, all in one place.</h2><p>Access learning resources, examination material and department information for Ghazi University students.</p></div>
      <div class="hero-stat"><strong>BS</strong><span>CS &amp; IT</span></div>
    </section>
    <section class="stats-grid">
      <div class="stat-card"><span>Programs</span><strong>CS &amp; IT</strong></div>
      <div class="stat-card"><span>Duration</span><strong>4 Years</strong></div>
      <div class="stat-card"><span>Semesters</span><strong>8</strong></div>
      <div class="stat-card"><span>Resources</span><strong>${resources.length}</strong></div>
    </section>
    <section class="section-grid">
      <div class="panel"><div class="panel-head"><h3>Latest resources</h3><a class="text-link" href="#resources">View all</a></div><div class="resource-list">${rows}</div></div>
      <div class="panel"><div class="panel-head"><h3>Department notices</h3></div>
        <div class="notice"><strong>Semester information</strong><span>Official schedule pending verification</span></div>
        <div class="notice"><strong>Resource submissions</strong><span>Contribute verified past papers and notes</span></div>
        <div class="notice"><strong>Faculty directory</strong><span>Official profile information is being reviewed</span></div>
      </div>
    </section>`);
}

function departmentPage() {
  return shell(`<div class="page-head"><div><div class="eyebrow">About us</div><h1>Computer Science &amp; Information Technology</h1></div></div>
    <div class="dept-layout">
      <section class="about-card">
        <div class="eyebrow" style="color:#cfdfd6">Department at Ghazi University</div>
        <h2>Building capable software professionals.</h2>
        <p>The Department of Computer Science &amp; Information Technology offers study in computing, programming, information systems, networking and emerging technologies. Final curriculum and course details should be checked against the university's official academic documents.</p>
        <div class="feature-list">
          <div class="feature"><strong>4-year degree</strong><span>Undergraduate program</span></div>
          <div class="feature"><strong>8 semesters</strong><span>Structured study plan</span></div>
          <div class="feature"><strong>Practical learning</strong><span>Labs and project work</span></div>
          <div class="feature"><strong>Student support</strong><span>Faculty and department services</span></div>
        </div>
      </section>
      <section class="panel"><div class="panel-head"><h3>Study plan</h3></div>
        <div class="semester-list">${[1,2,3,4,5,6,7,8].map(n => `<div class="semester"><strong>Semester ${n}</strong><span>→</span></div>`).join("")}</div>
      </section>
    </div>`);
}

let activeFilter = "All";
function resourcePage() {
  const content = shell(`<div class="page-head"><div><div class="eyebrow">Library</div><h1>Notes & Past Papers</h1></div><input class="search" id="resource-search" placeholder="Search resources..." /></div>
    <div class="filter-bar"><button class="filter-btn ${activeFilter === "All" ? "active" : ""}" data-filter="All">All</button><button class="filter-btn ${activeFilter === "Notes" ? "active" : ""}" data-filter="Notes">Notes</button><button class="filter-btn ${activeFilter === "Past Papers" ? "active" : ""}" data-filter="Past Papers">Past papers</button></div>
    <div class="resource-grid" id="resource-grid"></div>`);
  renderResources();
  document.querySelectorAll(".filter-btn").forEach(btn => btn.addEventListener("click", () => {
    activeFilter = btn.dataset.filter;
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.toggle("active", b === btn));
    renderResources();
  }));
  document.getElementById("resource-search").addEventListener("input", renderResources);
  return content;
}

function renderResources() {
  const grid = document.getElementById("resource-grid");
  if (!grid) return;
  const query = (document.getElementById("resource-search")?.value || "").toLowerCase().trim();
  const filtered = resources.filter(r => (activeFilter === "All" || r.category === activeFilter) && (r.title.toLowerCase().includes(query) || r.description.toLowerCase().includes(query)));
  grid.innerHTML = filtered.length ? filtered.map(r => `<article class="resource-card">
    <div class="resource-card-top"><div class="file-icon">${r.type === "Notes" ? "PDF" : "PPR"}</div><span class="tag">${r.category}</span></div>
    <h3>${r.title}</h3><p>${r.description}</p>
    <div class="card-actions"><span>${r.meta}</span><button class="download-btn" onclick="alert('Upload the real file and replace this demo action')" aria-label="Download ${r.title}">↓</button></div>
  </article>`).join("") : `<div class="empty-state">No resources match your search.</div>`;
}

function peoplePage() {
  function cards(list) {
    return list.map(p => `<article class="person-card"><div class="person-photo"><div class="initials">${p.initials}</div></div><div class="person-info"><strong>${p.name}</strong><span class="role">${p.role}</span><p>${p.bio}</p></div></article>`).join("");
  }
  shell(`<div class="page-head"><div><div class="eyebrow">Directory</div><h1>Faculty & Staff</h1></div><input class="search" id="people-search" placeholder="Search directory..." /></div>
    <div class="panel-head"><h3>Faculty</h3></div><div class="people-grid" id="faculty-grid">${cards(faculty)}</div>
    <div class="panel-head" style="margin-top:24px"><h3>Administrative & Support Staff</h3></div><div class="people-grid" id="staff-grid">${cards(staff)}</div>`);

  document.getElementById("people-search").addEventListener("input", (event) => {
    const query = event.target.value.toLowerCase().trim();
    const filterCards = (list) => list.filter(p =>
      p.name.toLowerCase().includes(query) ||
      p.role.toLowerCase().includes(query) ||
      p.bio.toLowerCase().includes(query)
    );
    document.getElementById("faculty-grid").innerHTML = cards(filterCards(faculty)) || `<div class="empty-state">No faculty match your search.</div>`;
    document.getElementById("staff-grid").innerHTML = cards(filterCards(staff)) || `<div class="empty-state">No staff match your search.</div>`;
  });
}

function render() {
  const route = location.hash.slice(1);
  if (!route || route === "login") {
    loginPage();
    return;
  }
  if (route === "department") departmentPage();
  else if (route === "resources") resourcePage();
  else if (route === "people") peoplePage();
  else homePage();
}

window.addEventListener("hashchange", render);
render();
