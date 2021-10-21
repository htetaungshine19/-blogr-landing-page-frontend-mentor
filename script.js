document.querySelector("#pro").onclick = (e) => {
  e.preventDefault();
  document.querySelector("#proh").style.height = "initial";
  document.querySelector("#proh").style.color = "black";
  document.querySelector("#conh").style.height = "0";
  document.querySelector("#conh").style.color = "transparent";
  document.querySelector("#comh").style.height = "0";
  document.querySelector("#comh").style.color = "transparent";
};

document.querySelector("#con").onclick = (e) => {
  e.preventDefault();
  document.querySelector("#conh").style.height = "initial";
  document.querySelector("#conh").style.color = "black";
  document.querySelector("#proh").style.height = "0";
  document.querySelector("#proh").style.color = "transparent";
  document.querySelector("#comh").style.height = "0";
  document.querySelector("#comh").style.color = "transparent";
};
document.querySelector("#com").onclick = (e) => {
  e.preventDefault();
  document.querySelector("#comh").style.height = "initial";
  document.querySelector("#comh").style.color = "black";
  document.querySelector("#conh").style.height = "0";
  document.querySelector("#conh").style.color = "transparent";
  document.querySelector("#proh").style.height = "0";
  document.querySelector("#proh").style.color = "transparent";
};
if (window.innerWidth < 900) {
  document.querySelector("#fix").style.display = "none";
} else {
  document.querySelector("#fix").style.display = "flex";
}
window.addEventListener("resize", () => {
  if (window.innerWidth < 900) {
    document.querySelector("#fix").style.display = "none";
  } else {
    document.querySelector("#fix").style.display = "flex";
  }
});
document.querySelector("#mobileh").onclick = (e) => {
  e.preventDefault();
  if (document.getElementById("fix").style.display == "none") {
    document.getElementById("fix").style.display = "flex";
  } else {
    document.getElementById("fix").style.display = "none";
  }
};
