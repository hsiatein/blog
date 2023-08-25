const files = [
  "实现简单的网络爬虫",
  "估计1形状类似Watson引理的积分估计",
  "估计2涉及泊松核的积分估计",
  "估计3有关黎曼勒贝格引理的积分估计",
  "估计4使用围道和极点进行积分估计",
  "个人所写的对数积分题集",
  "估计5一类涉及zeta函数的积分估计表",
  "讨论一下积分变换"
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