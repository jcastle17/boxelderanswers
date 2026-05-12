function copyShareText() {
  const text = document.getElementById("shareText");
  if (!text) return;
  text.select();
  text.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(text.value).then(function() {
    alert("Copied. Paste it into Facebook.");
  }).catch(function() {
    document.execCommand("copy");
    alert("Copied. Paste it into Facebook.");
  });
}
