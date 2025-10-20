let cardCount = 0;
const mahasiswaList = [
  { nama: 'Agi', email: 'agi@mail.com', kom: 'B', nim: '251402059' },
];

// Tambah Card
document.getElementById('addCard').addEventListener('click', () => {
  cardCount++;
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <button class="close-btn">X</button>
    <p>Ini card ke-${cardCount}</p>
  `;
  card.querySelector('.close-btn').addEventListener('click', () => {
    card.remove();
  });
  document.getElementById('cardContainer').appendChild(card);
});

// Mode Malam/Pagi
document.getElementById('toggleMode').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const modeBtn = document.getElementById('toggleMode');
  modeBtn.textContent = document.body.classList.contains('dark-mode') ? 'Mode Pagi' : 'Mode Malam';
});

// Tampilkan Modal Form
document.getElementById('showModalBtn').addEventListener('click', () => {
  document.getElementById('modalOverlay').classList.remove('hidden');
});

// Tutup Modal Form
document.getElementById('closeModalBtn').addEventListener('click', () => {
  document.getElementById('modalOverlay').classList.add('hidden');
});

// Submit Form Mahasiswa
document.getElementById('submitForm').addEventListener('click', () => {
  const nama = document.getElementById('namaInput').value.trim();
  const email = document.getElementById('emailInput').value.trim();

  if (nama && email && kom && nim) {
    mahasiswaList.push({ nama, email, kom, nim });
    alert('Mahasiswa ditambahkan!');
    document.getElementById('namaInput').value = '';
    document.getElementById('emailInput').value = '';
    document.getElementById('modalOverlay').classList.add('hidden');
  } else {
    alert('Isi semua field!');
  }
});

// Cari Kom Mahasiswa via NIM
document.getElementById('searchMahasiswaBtn').addEventListener('click', () => {
  const nim = prompt("Masukkan NIM Mahasiswa TI:");

  if (nim === null || nim.trim() === "") {
    alert("NIM tidak boleh kosong!");
    return;
  }

  const hasil = mahasiswaList.find(m => m.nim === nim.trim());
  if (hasil) {
    alert(`NIM ${hasil.nim} berada di KOM ${hasil.kom}`);
  } else {
    alert("Mahasiswa dengan NIM tersebut tidak ditemukan.");
  }
});