document.querySelectorAll('.link').forEach(link => {
    link.addEventListener('click', function() {
     
      document.querySelectorAll('.link').forEach(item => item.classList.remove('active'));
      
      
      this.classList.add('active');

      const targetId = this.getAttribute('data-target');
      const targetElement = document.getElementById(targetId); 

     
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  function showInfo(images, description) {
const infoBox = document.getElementById("infoBox");
const imagesContainer = document.getElementById("infoImages");
const text = document.getElementById("infoText");

// Clear previous images
imagesContainer.innerHTML = "";

// Add new images
images.forEach((imgSrc) => {
  const img = document.createElement("img");
  img.src = imgSrc;
  img.alt = "Info Image";
  imagesContainer.appendChild(img);
});

// Set the description
text.textContent = description;

// Show the box
infoBox.style.display = "block";
infoBox.scrollIntoView({ behavior: "smooth" });
}

function closeInfo() {
document.getElementById("infoBox").style.display = "none";
}
