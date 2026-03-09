// Get course ID from URL
function getCourseId() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

document.addEventListener("DOMContentLoaded", async () => {
  const courseId = getCourseId();
  if (!courseId) return alert("No course ID provided!");

  const course = await fetchCourseById(courseId);
  if (!course) return alert("Course not found!");

  // Populate course content
  document.getElementById("course-image").querySelector("img").src = course.image;
  document.getElementById("course-title").textContent = course.title;
  document.getElementById("course-bio").textContent = course.bio;
  document.getElementById("course-teacher").textContent = course.teacher;
  document.getElementById("course-rating").textContent = course.rating + " ⭐";
  document.getElementById("course-price").textContent = "$" + course.price;
  document.getElementById("course-description").textContent = course.description;
});