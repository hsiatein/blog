const files = [
    { name: "file", url: "image/test.jpg" },
    { name: "file", url: "image/test.jpg" },
    { name: "file", url: "image/test.jpg" },
    { name: "file", url: "image/test.jpg" },
    { name: "file", url: "image/test.jpg" },
    { name: "file", url: "image/test.jpg" },
    { name: "file", url: "image/test.jpg" },
    { name: "file", url: "image/test.jpg" },
    { name: "file", url: "image/test.jpg" },
    { name: "file", url: "image/test.jpg" },
    { name: "file", url: "image/test.jpg" },
    { name: "file", url: "image/test.jpg" },
  ];
const ol = document.createElement("ol");
files.forEach((file) => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  li.className="index";
  a.textContent = file.name;
  a.href = "javascript:void(0)";
  a.onclick=function() {
    toggleIframe('preview', file.url);
  };
  li.appendChild(a);
  ol.appendChild(li);
});
document.getElementById("index").appendChild(ol);