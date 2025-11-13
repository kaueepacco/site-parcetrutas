//SCRIPT FORMULARIO
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwHygNUIKjLA1oRVoqsJ87g9CinyTWorPcQz58CFaBKYNld0HOe4Nz0Xo0N36UY5ZI/exec";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formEvento");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
      usuario: document.querySelector("#usuario").value,
      evento: document.querySelector("#evento").value,
    };

    try {
      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        alert("✅ Formulário enviado com sucesso!");
        form.reset();
      } else {
        alert("✅ Formulário enviado com sucesso!");
        form.reset();
      }
    } catch (err) {
      console.error(err);
      alert("❌ Falha de conexão com o servidor.");
    }
  });
});

//SCRIPT SLIDER

document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  let index = 0;
  const total = slides.length;
  const intervalTime = 5000;
  let slideInterval;

  function showSlide(n) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[n].classList.add("active");
  }

  function nextSlide() {
    index = (index + 1) % total;
    showSlide(index);
  }

  function prevSlide() {
    index = (index - 1 + total) % total;
    showSlide(index);
  }

  nextBtn.addEventListener("click", () => {
    nextSlide();
    resetInterval();
  });

  prevBtn.addEventListener("click", () => {
    prevSlide();
    resetInterval();
  });

  function startAutoSlide() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  function resetInterval() {
    clearInterval(slideInterval);
    startAutoSlide();
  }

  startAutoSlide();
});

//SCRIPT MENU

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const nav = document.querySelector(".nav-links");

  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    nav.classList.toggle("active");
  });

  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      toggle.classList.remove("active");
      nav.classList.remove("active");
    });
  });
});

//SCRIPT GALERIA FOTOS

document.addEventListener("DOMContentLoaded", () => {
  const items = Array.from(document.querySelectorAll(".gallery-item"));
  const nextBtn = document.querySelector(".gallery-next");
  const prevBtn = document.querySelector(".gallery-prev");

  if (!items.length) {
    console.error("gallery: nenhum .gallery-item encontrado");
    return;
  }

  let current = 0;

  function update() {
    const len = items.length;
    items.forEach((it, i) => {
      it.classList.remove("active", "prev", "next");
      it.style.order = 0;
    });

    const center = current;
    const prevIndex = (current - 1 + items.length) % items.length;
    const nextIndex = (current + 1) % items.length;

    items[center].classList.add("active");
    items[prevIndex].classList.add("prev");
    items[nextIndex].classList.add("next");

    items[center].style.order = 2;
    items[prevIndex].style.order = 1;
    items[nextIndex].style.order = 3;
  }

  function goNext() {
    current = (current + 1) % items.length;
    update();
  }
  function goPrev() {
    current = (current - 1 + items.length) % items.length;
    update();
  }

  if (nextBtn) nextBtn.addEventListener("click", goNext);
  if (prevBtn) prevBtn.addEventListener("click", goPrev);

  (function addTouch() {
    let startX = 0;
    const container = document.querySelector(".gallery-carousel") || document;
    container.addEventListener("touchstart", e => startX = e.touches[0].clientX, {passive:true});
    container.addEventListener("touchend", e => {
      const endX = e.changedTouches[0].clientX;
      if (startX - endX > 50) goNext();
      if (endX - startX > 50) goPrev();
    }, {passive:true});
  })();

  update();
});

//SCRIPT GALERIA VIDEOS
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".video-item");
  const prevBtn = document.querySelector(".video-prev");
  const nextBtn = document.querySelector(".video-next");
  let current = 0;

  function updateCarousel() {
    items.forEach((item, index) => {
      item.classList.remove("active", "prev", "next");
      if (index === current) {
        item.classList.add("active");
      } else if (index === (current - 1 + items.length) % items.length) {
        item.classList.add("prev");
      } else if (index === (current + 1) % items.length) {
        item.classList.add("next");
      }
    });
  }

  nextBtn.addEventListener("click", () => {
    current = (current + 1) % items.length;
    updateCarousel();
  });

  prevBtn.addEventListener("click", () => {
    current = (current - 1 + items.length) % items.length;
    updateCarousel();
  });

  updateCarousel();
});










  

