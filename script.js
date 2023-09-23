document.addEventListener("DOMContentLoaded", function () {
  const animal = document.getElementById("animal");

  animal.addEventListener("click", function() {
      requestAnimationFrame(() => {
        const text = document.body.innerHTML;
        const modifiedText = text.replace(/([。、！？])/g, (match, punctuation) => {
          const randomAnimalEmoji = "&#x1f" + (1024 + (Math.floor(Math.random() * 64))).toString(16).slice(-3);
          return randomAnimalEmoji + ' ';
        });
      document.body.innerHTML = modifiedText;
    });
  });
});
