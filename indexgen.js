const files = [
    { name: "在kemono实验网络爬虫"},
  ];
const ol = document.createElement("ol");
files.forEach((file) => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  li.className="index";
  a.textContent = file.name;
  a.href = "javascript:void(0)";
  a.onclick=function() {
    toggleIframe('preview', "pages/"+file.name+".html");
  };
  li.appendChild(a);
  ol.appendChild(li);
});
document.getElementById("index").appendChild(ol);