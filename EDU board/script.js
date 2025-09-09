document.addEventListener("DOMContentLoaded", () => {
  // ----------------------------
  // Profile image header
  // ----------------------------
  const studentNameEl = document.getElementById("student-name");
  const studentNameimg = document.getElementById("name-initials");

  if (studentNameEl && studentNameimg) {
    const studentName = studentNameEl.textContent.trim();
    if (studentName) {
      const initials = studentName
        .split(" ")
        .map((name) => name.charAt(0).toUpperCase())
        .slice(0, 2)
        .join("");
      studentNameimg.textContent = initials || "NA";
    }
  }

  // ----------------------------
  // Notification Dropdown
  // ----------------------------
  const notifBtn = document.getElementById("notif-btn");
  const notifList = document.getElementById("notif-list");
  const dot = notifBtn.querySelector(".dot");

  if (notifList.children.length === 0) {
    dot.style.display = "none";
  } else {
    dot.style.display = "block";
  }

  notifBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent closing immediately
    const isOpen = notifList.style.display === "block";
    notifList.style.display = isOpen ? "none" : "block";
    notifBtn.setAttribute("aria-expanded", !isOpen);
  });

  document.addEventListener("click", (e) => {
    if (!notifBtn.contains(e.target) && !notifList.contains(e.target)) {
      notifList.style.display = "none";
      notifBtn.setAttribute("aria-expanded", "false");
    }
  });

  // ----------------------------
  // Profile Card with initials
  // ----------------------------
  const profileData = {
    name: "Sri Ram",
    rollnumber: "123456",
    branch: "Computer Science",
    email: "sriram@gmail.com",
    phone: "+91 12345 67890",
    location: "Hyderabad, India",
  };

  const profileCard = document.getElementById("profile-card");

  const initials = profileData.name
    .split(" ")
    .map((word) => word[0].toUpperCase())
    .slice(0, 2)
    .join("");

  profileCard.innerHTML = `
      <div class="profile-avatar-initials">${initials}</div>
      
      <section class="profile-info">
        <header>
          <hgroup>
            <h2>${profileData.name}</h2>
            <h3>Roll No: ${profileData.rollnumber}</h3>
            <h3>${profileData.branch}</h3>
          </hgroup>
        </header>
        <address>
          <p><strong>Email:</strong> <a href="mailto:${profileData.email}">${
    profileData.email
  }</a></p>
          <p><strong>Phone:</strong> <a href="tel:${profileData.phone.replace(
            /\s+/g,
            ""
          )}">${profileData.phone}</a></p>
          <p><strong>Location:</strong> ${profileData.location}</p>
        </address>
      </section>
  `;

  // ----------------------------
  // Dashboard Cards
  // ----------------------------
  const dashboardData = [
    { title: "Attendance", value: "92%", type: "progress", progress: 92 },
    { title: "Exams", value: "3 Upcoming" },
    { title: "GPA", value: "8.7/10" },
    { title: "Credits", value: "170/240" },
    { title: "Library Books", value: "3 Borrowed" },
    {
      title: "Assignments Due",
      value: "3",
      type: "badge",
      badge: "Due this week",
    },
    {
      title: "Rank",
      value: "#5 in Class",
      type: "trend",
      trend: "Top 5 performer",
    },
    { title: "Certificates", value: "5 Earned" },
    { title: "Backlogs", value: "0" },
    { title: "Sports", value: "Basketball Team" },
  ];

  const dashboardContainer = document.querySelector(
    "#dashboard .overview-cards"
  );

  dashboardData.forEach((item) => {
    const card = document.createElement("section");
    card.classList.add("card");
    card.setAttribute("role", "listitem");
    card.setAttribute("aria-label", item.title);

    let extra = "";
    let icon = item.icon ? `<div class="card__icon">${item.icon}</div>` : "";

    if (item.type === "progress") {
      extra = `
        <div class="progress" aria-label="${item.title} progress">
          <div 
            class="progress__bar" 
            style="--value:${item.progress}%" 
            role="progressbar" 
            aria-valuenow="${item.progress}" 
            aria-valuemin="0" 
            aria-valuemax="100"></div>
        </div>`;
    }

    if (item.type === "badge") {
      extra = `<span class="badge">${item.badge}</span>`;
    }

    if (item.type === "trend") {
      extra = `<div class="trend">📈 ${item.trend}</div>`;
    }

    card.innerHTML = `
      ${icon}
      <h4 class="card__title">${item.title}</h4>
      <p class="card__value">${item.value}</p>
      ${extra}
    `;
    dashboardContainer.appendChild(card);
  });

  // ----------------------------
  // Subjects Table
  // ----------------------------
  const subjectsData = [
    {
      name: "Data Structures",
      completion: 78,
      attendance: 95,
      grade: "A",
      badgeColor: "green",
    },
    {
      name: "Database Systems",
      completion: 64,
      attendance: 88,
      grade: "B+",
      badgeColor: "amber",
    },
    {
      name: "Operating Systems",
      completion: 90,
      attendance: 93,
      grade: "A+",
      badgeColor: "green",
    },
    {
      name: "Computer Networks",
      completion: 52,
      attendance: 84,
      grade: "B",
      badgeColor: "red",
    },
    {
      name: "Web Development",
      completion: 68,
      attendance: 90,
      grade: "A-",
      badgeColor: "amber",
    },
  ];

  const tableBody = document.querySelector("#subjects-table tbody");

  subjectsData.forEach((subject) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${subject.name}</td>
      <td>${subject.completion}%</td>
      <td>${subject.attendance}%</td>
      <td><span class="grade-badge ${subject.badgeColor}">${subject.grade}</span></td>
    `;
    tableBody.appendChild(tr);
  });

  // ----------------------------
  // Upcoming Deadlines
  // ----------------------------
  const deadlinesData = [
    {
      title: "Data Structures Assignment 3",
      description: "Implement Linked List operations",
      date: "2025-09-15",
    },
    {
      title: "Database Systems Quiz",
      description: "Chapters 4-6",
      date: "2025-09-18",
    },
    {
      title: "Operating Systems Project",
      description: "CPU Scheduling Simulation",
      date: "2025-09-20",
    },
    {
      title: "Web Development Assignment",
      description: "Build responsive portfolio page",
      date: "2025-09-22",
    },
  ];

  const deadlinesList = document.getElementById("deadlines-list");

  deadlinesData.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("deadline-item");

    li.innerHTML = `
      <time class="deadline-date" datetime="${item.date}">${new Date(
      item.date
    ).toLocaleDateString("en-GB", { day: "2-digit", month: "short" })}</time>
      <section class="deadline-info">
        <h4 class="title">${item.title}</h4>
        <p class="description">${item.description}</p>
      </section>
    `;
    deadlinesList.appendChild(li);
  });
});
