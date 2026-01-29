// ===== AMBIL PARAMETER URL =====
const params = new URLSearchParams(window.location.search);
const manhwaId = params.get("id");
const chapter = params.get("ch");

// ===== CEK PARAMETER =====
if (!manhwaId || !chapter) {
  document.getElementById("reader").innerHTML =
    "<p style='color:#aaa;text-align:center'>Chapter tidak ditemukan.</p>";
  throw new Error("Parameter id / ch kosong");
}

// ===== GANTI ID FOLDER GOOGLE DRIVE DI SINI =====
const DRIVE_FOLDER_ID = "GANTI_DENGAN_ID_FOLDER_MANHWA";

// ===== TARGET READER =====
const reader = document.getElementById("reader");

// ===== LOAD GAMBAR CHAPTER =====
let halaman = 1;
const maxHalaman = 100; // batas aman

function loadPage() {
  if (halaman > maxHalaman) return;

  const nomor = String(halaman).padStart(3, "0");
  const img = document.createElement("img");

  img.src = `https://drive.google.com/uc?id=${DRIVE_FOLDER_ID}/${manhwaId}/chapter-${chapter}/${nomor}.jpg`;
  img.className = "page";
  img.loading = "lazy";

  img.onerror = () => {
    img.remove(); // kalau gambar habis → berhenti
  };

  img.onload = () => {
    halaman++;
    loadPage(); // lanjut halaman berikutnya
  };

  reader.appendChild(img);
}

// ===== JALANKAN =====
loadPage();

// ===== TOMBOL NEXT / PREV =====
const prevBtn = document.getElementById("prevChapter");
const nextBtn = document.getElementById("nextChapter");

if (prevBtn) {
  prevBtn.onclick = () => {
    if (chapter > 1) {
      window.location.href = `chapter.html?id=${manhwaId}&ch=${Number(chapter) - 1}`;
    }
  };
}

if (nextBtn) {
  nextBtn.onclick = () => {
    window.location.href = `chapter.html?id=${manhwaId}&ch=${Number(chapter) + 1}`;
  };
                                       }
                                       
