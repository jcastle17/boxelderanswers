const isUpdatePage = window.location.pathname.includes("/updates/");
const root = isUpdatePage ? "../" : "";

document.getElementById("site-header").innerHTML = `
<header>
  <div class="topbar">
    <a class="brand" href="${root}index.html">
      <span class="brand-mark">▤</span>
      <span>Box Elder<br>Answers</span>
    </a>
    <nav class="nav">
      <a href="${root}index.html">Home</a>
      <a href="${root}index.html#timeline">Timeline</a>
      <a href="https://www.change.org/p/pause-project-stratos-now-box-elder-deserves-answers" target="_blank" rel="noopener">Petition</a>
      <a href="${root}index.html#documents">Documents</a>
      <a href="${root}index.html#resources">Resources</a>
      <a href="mailto:contact@boxelderanswers.com">Contact</a>
    </nav>
  </div>
</header>
`;

document.getElementById("site-footer").innerHTML = `
<footer>
  <div class="footer-inner">
    <div>Box Elder Answers • contact@boxelderanswers.com</div>
    <div><a href="https://www.change.org/p/pause-project-stratos-now-box-elder-deserves-answers" target="_blank" rel="noopener">Petition Link</a></div>
  </div>
</footer>
`;
