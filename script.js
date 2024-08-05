// Select the gallery container
let scrollContainer = document.querySelector(".gallery");
// Select the next button
let nextBtn = document.getElementById("nextbtn");
// Select the back button
let backBtn = document.getElementById("backbtn");

// Add event listener for mouse wheel scrolling on the gallery
scrollContainer.addEventListener("wheel", (evnt) => {
  evnt.preventDefault(); // Prevent the default scroll behavior
  // Scroll horizontally based on the vertical scroll amount
  scrollContainer.scrollLeft += evnt.deltaY;
  // Set scroll behavior to auto (no smooth scrolling for mouse wheel)
  scrollContainer.style.scrollBehavior = "auto";
});

// Add event listener for click on the next button
nextBtn.addEventListener("click", () => {
  // Set scroll behavior to smooth for smooth scrolling
  scrollContainer.style.scrollBehavior = "smooth";
  // Scroll to the right by 900 pixels
  scrollContainer.scrollLeft += 900;
});

// Add event listener for click on the back button
backBtn.addEventListener("click", () => {
  // Set scroll behavior to smooth for smooth scrolling
  scrollContainer.style.scrollBehavior = "smooth";
  // Scroll to the left by 900 pixels
  scrollContainer.scrollLeft -= 900;
});
