// js/courses.js

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
          image: "https://via.placeholder.com/600x400.png?text=Physics+101",
          bio: "Learn the fundamentals of Physics with hands-on examples.",
          description: "This course covers Newtonian mechanics, basic thermodynamics, and hands-on lab exercises.",
          price: 49
        },
        {
          id: 2,
          title: "Introduction to Chemistry",
          teacher: "Sarah Johnson",
          rating: 4.6,
          image: "https://via.placeholder.com/600x400.png?text=Chemistry+101",
          bio: "Start your Chemistry journey with basic concepts.",
          description: "This course introduces atomic structure, periodic table, and simple chemical reactions.",
          price: 39
        },
        {
          id: 3,
          title: "Mathematics for Beginners",
          teacher: "Ali Hassan",
          rating: 4.7,
          image: "https://via.placeholder.com/600x400.png?text=Math+101",
          bio: "Understand key mathematical principles and problem solving.",
          description: "Focus on algebra, geometry, and problem-solving skills with real examples.",
          price: 29
        },
      
      ]);
    }, 1000);
  });
}

// Fetch single course by ID
function fetchCourseById(id) {
  return fetchCourses().then(courses => courses.find(c => c.id == id));
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
  const div = document.createElement("a"); // use <a> so it can link
  div.href = `course.html?id=${course.id}`; // pass course id in URL
  div.className = `
    course-card
    bg-white 
    rounded-xl 
    shadow-lg 
    overflow-hidden 
    transform 
    transition duration-300 
    hover:scale-105 
    hover:shadow-2xl 
    cursor-pointer
    w-72
  `;

  div.innerHTML = `
    <img src="${course.image}" alt="${course.title}" class="w-full h-48 object-cover">
    <div class="p-5">
      <h2 class="font-bold text-lg mb-3">${course.title}</h2>
      <p class="text-gray-600 text-sm mb-4">${course.bio}</p>
      <button class="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">View Course</button>
    </div>
  `;

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