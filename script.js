// Particles.js
particlesJS("particles-js", {
    "particles": {
        "number": { "value":70, "density": { "enable": true, "value_area": 800 }},
        "color": { "value": ["#38bdf8","#818cf8","#ffffff"] },
        "shape": { "type":"circle" },
        "opacity": { "value":0.3 },
        "size": { "value":3, "random":true },
        "line_linked": { "enable": true, "distance":120, "color":"#38bdf8", "opacity":0.2, "width":1 },
        "move": { "enable":true, "speed":2 }
    }
});

// Scroll animation for cards
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add('active');
  });
},{threshold:0.3});

document.querySelectorAll('.card,.timeline-item').forEach(card => observer.observe(card));
