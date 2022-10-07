if ("IntersectionObserver" in window) {
  const image = document.querySelectorAll(".image");
  function callback(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.src = entry.target.dataset.src;
        observer.unobserve(entry.target);
      }
    });
  }
  const options = {
    root: null,
    threshold: 0.5,
    rootMargin: "0px",
  };
  const observer = new IntersectionObserver(callback, options);
  image.forEach((img) => observer.observe(img));
}
