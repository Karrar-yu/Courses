// js/courses.js

// Fake API function
function fetchCourses() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title: "Physics 101",
          teacher: "Dr. Ahmed Ali",
          rating: 4.8,
          image: "https://via.placeholder.com/300x200.png?text=Physics+101",
          bio: "Learn the fundamentals of Physics with hands-on examples."
        },
        {
          id: 2,
          title: "Introduction to Chemistry",
          teacher: "Sarah Johnson",
          rating: 4.6,
          image: "https://via.placeholder.com/300x200.png?text=Chemistry+101",
          bio: "Start your Chemistry journey with basic concepts."
        },
        {
          id: 3,
          title: "Mathematics for Beginners",
          teacher: "Ali Hassan",
          rating: 4.7,
          image: "https://via.placeholder.com/300x200.png?text=Math+101",
          bio: "Understand key mathematical principles and problem solving."
        },
        {
          id: 3,
          title: "Mathematics for Beginners",
          teacher: "Ali Hassan",
          rating: 4.7,
          image: "https://via.placeholder.com/300x200.png?text=Math+101",
          bio: "Understand key mathematical principles and problem solving."
        },
        {
          id: 3,
          title: "Mathematics for Beginners",
          teacher: "Ali Hassan",
          rating: 4.7,
          image: "https://via.placeholder.com/300x200.png?text=Math+101",
          bio: "Understand key mathematical principles and problem solving."
        },
        {
          id: 3,
          title: "Mathematics for Beginners",
          teacher: "Ali Hassan",
          rating: 4.7,
          image: "https://via.placeholder.com/300x200.png?text=Math+101",
          bio: "Understand key mathematical principles and problem solving."
        },
        {
          id: 3,
          title: "Mathematics for Beginners",
          teacher: "Ali Hassan",
          rating: 4.7,
          image: "https://via.placeholder.com/300x200.png?text=Math+101",
          bio: "Understand key mathematical principles and problem solving."
        }
      ]);
    }, 1000);
  });
}

// Function to create course card HTML
function createCourseCard(course) {
  const div = document.createElement("div");
  div.className = "bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300";

  div.innerHTML = `
    <img src="${course.image}" alt="${course.title}" class="w-full h-48 object-cover">
    <div class="p-4">
      <h3 class="text-lg font-semibold">${course.title}</h3>
      <p class="text-gray-600 mt-2">${course.bio}</p>
      <div class="mt-3 flex items-center justify-between">
        <span class="font-medium">${course.teacher}</span>
        <span class="bg-yellow-400 text-white px-2 py-1 rounded">${course.rating} ⭐</span>
      </div>
    </div>
  `;
  return div;
}
function createCourseCard(course) {
  const div = document.createElement("div");
  div.className = `
    course-card
    bg-white 
    rounded-lg 
    shadow-md 
    overflow-hidden 
    transform 
    transition duration-300 
    hover:scale-105 
    hover:shadow-2xl 
    cursor-pointer
    w-64
  `;

  div.innerHTML = `
    <img src="${course.image}" alt="${course.title}" class="w-full h-48 object-cover">
    <div class="p-4">
      <h3 class="text-lg font-semibold">${course.title}</h3>
      <p class="text-gray-600 mt-2">${course.bio}</p>
      <div class="mt-3 flex items-center justify-between">
        <span class="font-medium">${course.teacher}</span>
        <span class="bg-yellow-400 text-white px-2 py-1 rounded">${course.rating} ⭐</span>
      </div>
    </div>
  `;

  // Add click feedback
  div.addEventListener("click", () => {
    div.classList.add("ring-4", "ring-blue-400");
    setTimeout(() => div.classList.remove("ring-4", "ring-blue-400"), 300);

    // Example: navigate to course page (replace with real link)
    console.log("Clicked course:", course.title);
    // window.location.href = `course-page.html?id=${course.id}`;
  });

  return div;
}

// Fetch and render courses
document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("courses-container");
  container.innerHTML = "<p>Loading courses...</p>";

  const courses = await fetchCourses();

  container.innerHTML = ""; // clear loading text
  courses.forEach(course => {
    const card = createCourseCard(course);
    container.appendChild(card);
  });
});