const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const ch = params.get("ch");

const reader = document.getElementById("reader");

// 🔴 GANTI DENGAN ID FOLDER DRIVE KAMU
const DRIVE_ID = "1H_S-WpBus2C_rIUQbYeDJWuApN2PI78z";

let i = 1;

function load() {
  const num = String(i).padStart(3,"0");
  const img = document.createElement("img");

  img.src = `https://drive.google.com/uc?id=${DRIVE_ID}/${id}/chapter-${ch}/${num}.jpg`;
  img.className = "page";

  img.onerror = () => img.remove();
  img.onload = () => { i++; load(); };

  reader.appendChild(img);
}

load();
