// tombol download
document.getElementById('downloadBtn').addEventListener('click', function(e){
  e.preventDefault();
  const html = "<!doctype html>\n" + document.documentElement.outerHTML;
  const blob = new Blob([html], {type: "text/html"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = "index.html";
  a.click();
  URL.revokeObjectURL(url);
});
