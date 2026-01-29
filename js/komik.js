const daftarKomik = [
  {
    id: "How-to-Send-Your-Husband-to-Hell",
    judul: "How to Send Your Husband to Hell",
    cover: "https://drive.google.com/uc?export=view&id=1wWi_W6-cEA4TZA2J9w0jd50ZKBI3mEpy",
    chapterTerbaru: 5
  }
];

const list = document.getElementById("listKomik");

daftarKomik.forEach(k => {
  list.innerHTML += `
    <div>
      <h3>${k.judul}</h3>
      <a href="chapter.html?id=${k.id}&ch=1">Baca Chapter 1</a>
    </div>
  `;
});
        
