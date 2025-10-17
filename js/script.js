function openSubjects(grade) {
  const subjects = {
    "Grade 8": ["Science", "Math", "English"],
    "Grade 9": ["Science", "Math", "Social"],
    "Grade 10": ["Science", "Opt. Maths", "EPH"],
    "Grade 11": ["Physics", "Chemistry", "Biology"],
    "Grade 12": ["Economics", "Business", "Computer"]
  };

  const popup = document.getElementById("subjectPopup");
  const title = document.getElementById("popupTitle");
  const list = document.getElementById("subjectList");

  title.textContent = grade;
  list.innerHTML = "";

  // Check if grade exists
  if (subjects[grade]) {
    subjects[grade].forEach(sub => {
      const btn = document.createElement("button");
      btn.textContent = sub;
      btn.className = "subject-btn";
      btn.onclick = () => openNotes(sub);
      list.appendChild(btn);
    });
  } else {
    list.innerHTML = "<p>No subjects available.</p>";
  }

  popup.style.display = "flex";
}

function closePopup() {
  document.getElementById("subjectPopup").style.display = "none";
}

function openNotes(subject) {
  // Redirect to notes.html with subject in URL
  window.location.href = "notes.html?subject=" + encodeURIComponent(subject);
}

// Optional: Hide popup when clicking outside
window.onclick = function(event) {
  const popup = document.getElementById("subjectPopup");
  if (event.target === popup) {
    popup.style.display = "none";
  }
};