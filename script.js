document.addEventListener("DOMContentLoaded", function() {
  const features = document.querySelectorAll('.key-feature');

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, options);

  features.forEach(feature => {
    observer.observe(feature);
  });

  const downloadButton = document.querySelector('.button[href$="spidey.apk"]');

  downloadButton.addEventListener('mouseover', function() {
    const message = "Only demo is available now";
    const alertBox = document.createElement('div');
    alertBox.setAttribute('class', 'alert-box');
    alertBox.textContent = message;
    document.body.appendChild(alertBox);

    setTimeout(function() {
      alertBox.remove();
    }, 2000); // Adjust the timeout duration as needed (in milliseconds)
  });
});
