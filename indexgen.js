const files = [
  "实现简单的网络爬虫",
  "估计1形状类似Watson引理的积分估计"
];
const ol = document.createElement("ol");
files.forEach((file) => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  li.className="index";
  a.textContent = file;
  a.href = "javascript:void(0)";
  a.onclick=function() {
    toggleIframe('preview', "pages/"+file+".html");
  };
  li.appendChild(a);
  ol.appendChild(li);
});
document.getElementById("index").appendChild(ol);