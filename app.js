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

const programs = [
  { name: "BS Computer Science", shortName: "BS CS", duration: "4 years", accent: "#4d78b8" },
  { name: "BS Computing (AI)", shortName: "BS AI", duration: "4 years", accent: "#8b64b5" },
  { name: "BS Data Science", shortName: "BS DS", duration: "4 years", accent: "#cf7b43" },
  { name: "BS Information Technology", shortName: "BS IT", duration: "4 years", accent: "#2f8a78" },
  { name: "BS Software Engineering", shortName: "BS SE", duration: "4 years", accent: "#b75a68" }
];

const departmentContacts = [
  { name: "Dr. Hafiz Gulfam Ahmad Umar", role: "Chairperson / HOD", phone: "0333-5352392" },
  { name: "Ms. Sehrish Zafar", role: "Departmental Focal Person", phone: "0314-6369199" }
];

const faculty = [
  { name: "Dr. Hafiz Gulfam Ahmad Umar", role: "Associate Professor; Chairperson / HOD", bio: "Specialization: Data Security", initials: "HG" },
  { name: "Mr. Mui-zzud-Din", role: "Lecturer", bio: "Specialization: CS & IT", initials: "MD" },
  { name: "Mr. Muhammad Afzal", role: "Lecturer", bio: "Specialization: CS & IT", initials: "MA" },
  { name: "Mr. M. Yasir Bhutta", role: "Lecturer", bio: "Specialization: IT", initials: "MY" },
  { name: "Ms. Zaib-un-Nisa Khosa", role: "Lecturer", bio: "Specialization: CS & IT", initials: "ZN" },
  { name: "Ms. Sehrish Zafar", role: "Visiting Lecturer; Focal Person", bio: "Specialization: IT", initials: "SZ" }
];

const staff = [
  { name: "Ms. Sehrish Zafar", role: "Departmental Focal Person", bio: "Contact: 0314-6369199", initials: "SZ" }
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
        <label class="field"><span>University email or roll number</span><input id="login-id" required placeholder="e.g. cs-1234" /></label>
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
  const programCards = programs.map(program => `<article class="home-program-card" style="--program-accent:${program.accent}">
    <span class="home-program-code">${program.shortName}</span>
    <strong>${program.name}</strong>
  </article>`).join("");

  return shell(`<div class="page-head">
      <div><div class="eyebrow">Computer Science &amp; IT</div><h1>Good afternoon</h1></div>
      <a class="department-link" href="#department">View department <span>→</span></a>
    </div>
    <section class="hero-card">
      <div class="hero-copy"><div class="eyebrow" style="color:#cfdfd6">Department portal</div><h2>Your semester, all in one place.</h2><p>Access learning resources, examination material and department information for Ghazi University students.</p></div>
      <div class="hero-stat"><strong>BS</strong><span>CS &amp; IT</span></div>
    </section>
    <section class="home-programs">
      <div class="panel-head"><div><div class="eyebrow">Faculty of Sciences</div><h3>Programs Offered</h3></div><a class="text-link" href="#department">View all</a></div>
      <div class="home-program-grid">${programCards}</div>
    </section>
    <section class="stats-grid">
      <div class="stat-card"><span>Programs Offered</span><strong>${programs.length}</strong></div>
      <div class="stat-card"><span>Duration</span><strong>4 Years</strong></div>
      <div class="stat-card"><span>Semesters</span><strong>8</strong></div>
      <div class="stat-card"><span>Resources</span><strong>${resources.length}</strong></div>
    </section>
    <section class="section-grid">
      <div class="panel"><div class="panel-head"><h3>Latest resources</h3><a class="text-link" href="#resources">View all</a></div><div class="resource-list">${rows}</div></div>
      <div class="panel"><div class="panel-head"><h3>Department notices</h3></div>
        <div class="notice"><strong>Semester information</strong><span>Official schedule pending verification</span></div>
        <div class="notice"><strong>Resource submissions</strong><span>Contribute verified past papers and notes</span></div>
        <div class="notice"><strong>Department leadership</strong><span>HOD and focal person information added</span></div>
      </div>
    </section>`);
}

function departmentPage() {
  return shell(`<div class="page-head"><div><div class="eyebrow">About us</div><h1>Computer Science &amp; Information Technology</h1></div></div>
    <section class="about-card department-summary">
      <div><div class="eyebrow" style="color:#cfdfd6">Faculty of Sciences</div><h2>Building capable computing professionals.</h2>
      <p>The Department of Computer Science and Information Technology offers undergraduate programs in computing, artificial intelligence, data science, information technology and software engineering.</p></div>
      <div class="department-leaders">
        <div><span>Chairperson / HOD</span><strong>Dr. Hafiz Gulfam Ahmad Umar</strong></div>
        <div><span>Departmental Focal Person</span><strong>Ms. Sehrish Zafar</strong></div>
      </div>
    </section>
    <div class="panel-head programs-heading"><h3>Programs Offered</h3><span>5 undergraduate programs</span></div>
    <div class="program-grid">
      ${programs.map(program => `<article class="program-card" style="--program-accent:${program.accent}"><div class="program-short">${program.shortName}</div><div><strong>${program.name}</strong><span>${program.duration} • Undergraduate</span></div></article>`).join("")}
    </div>
    <div class="section-grid department-bottom">
      <section class="panel"><div class="panel-head"><h3>Department Contacts</h3></div>
        <div class="contact-list">${departmentContacts.map(contact => `<div class="contact-row"><div><strong>${contact.name}</strong><span>${contact.role}</span></div><a href="tel:${contact.phone.replace(/[^0-9+]/g, "")}">${contact.phone}</a></div>`).join("")}</div>
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
  shell(`<div class="page-head"><div><div class="eyebrow">Directory</div><h1>Faculty & Staff</h1></div><input class="search" id="people-search" placeholder="Search faculty or specialization..." /></div>
    <div class="panel-head"><h3>Faculty & Teachers</h3><span>${faculty.length} members</span></div><div class="people-grid" id="faculty-grid">${cards(faculty)}</div>
    <div class="panel-head" style="margin-top:24px"><h3>Departmental Focal Person</h3></div><div class="people-grid" id="staff-grid">${cards(staff)}</div>
    <section class="panel contact-directory"><div class="panel-head"><h3>Contact Details</h3></div>
      <div class="contact-table" role="table" aria-label="Department contact details">
        <div class="contact-table-row contact-table-head" role="row"><strong>Name</strong><strong>Designation</strong><strong>Contact Number</strong></div>
        ${departmentContacts.map(contact => `<div class="contact-table-row" role="row"><span>${contact.name}</span><span>${contact.role}</span><a href="tel:${contact.phone.replace(/[^0-9+]/g, "")}">${contact.phone}</a></div>`).join("")}
      </div>
    </section>`);

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
