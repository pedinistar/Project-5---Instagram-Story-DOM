var arr = [
  { dp: "assets/rm.jfif", story: "assets/rm2.jpg" },
  { dp: "assets/jin.jfif", story: "assets/jin.jfif" },
  { dp: "assets/jhope.jfif", story: "assets/jhope.jfif" },
  { dp: "assets/suga.jfif", story: "assets/suga.jfif" },
  { dp: "assets/jimin.jfif", story: "assets/jimin2.jpg" },
  { dp: "assets/v.jfif", story: "assets/v2.jfif" },
  { dp: "assets/jk.jfif", story: "assets/jk2.jpg" },
];

var clutter = "";
arr.forEach(function (elem, idx) {
  clutter += `<div class="story">
  <img id="${idx}" src="${elem.dp}" alt="" />
</div>`;
});

document.querySelector("#stories").innerHTML = clutter;

document.querySelector("#stories").addEventListener("click", function (dets) {
  var value = arr[dets.target.id].story;
  document.querySelector("#full-screen").style.display = "block";
  document.querySelector(
    "#full-screen"
  ).style.backgroundImage = `url(${value})`;

  setTimeout(function () {
    document.querySelector("#full-screen").style.display = "none";
  }, 3000);
});
