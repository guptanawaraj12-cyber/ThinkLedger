function toggleSubjects(id) {
  // Hide all subject lists first
  document.querySelectorAll('.subjects').forEach(function(el){
    if (el.id !== id) el.style.display = "none";
  });
  // Toggle selected one
  const el = document.getElementById(id);
  el.style.display = (el.style.display === "none" || el.style.display === "") ? "block" : "none";
}

function toggleChapters(id) {
  // Hide all chapter lists of given subjects
  document.querySelectorAll('.chapters').forEach(function(el){
    if (el.id !== id) el.style.display = "none";
  });
  // Toggle selected chapters
  const el = document.getElementById(id);
  el.style.display = (el.style.display === "none" || el.style.display === "") ? "block" : "none";
}