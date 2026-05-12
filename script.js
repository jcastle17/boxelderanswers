const SHARE_TITLE = "Box Elder Answers";
const SHARE_TEXT = "Please sign and share. Box Elder County deserves transparency, accountability, and answers before irreversible action begins.";
const SHARE_URL = "https://boxelderanswers.com/";

async function shareSite(event) {
  if (event) event.preventDefault();

  if (navigator.share) {
    try {
      await navigator.share({
        title: SHARE_TITLE,
        text: SHARE_TEXT,
        url: SHARE_URL
      });
      return false;
    } catch (error) {
      return false;
    }
  }

  window.location.href = "share.html";
  return false;
}

document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('a[href$="share.html"]').forEach(function(link) {
    link.addEventListener("click", shareSite);

    const strong = link.querySelector("strong");
    if (strong) {
      strong.textContent = "Share";
      const textNodes = Array.from(link.childNodes).filter(node => node.nodeType === Node.TEXT_NODE);
      textNodes.forEach(node => node.textContent = "");
    } else {
      link.textContent = "Share";
    }
  });

  document.querySelectorAll(".copy-share, #shareText").forEach(function(el) {
    el.remove();
  });
});
