// ini Javascript

// Meminta input nama dari pengguna
let name = prompt("Siapakah nama anda?", "");

// Mengecek apakah nama tidak kosong
if (name) {
    document.getElementById("name").textContent = name;
} else {
    document.getElementById("name").textContent = "Tamu";
}

function addData() {
    // Mengambil elemen form
    const nama = document.getElementById("nama").value;
    const tanggalLahir = document.getElementById("tanggal-lahir").value;
    const jenisKelamin = document.querySelector('input[name="jenis-kelamin"]:checked').value;
    const pesan = document.getElementById("pesan").value;

    // Mengambil referensi ke tabel
    const table = document.getElementById("dataTable").getElementsByTagName('tbody')[0];

    // Membuat baris baru
    const newRow = table.insertRow();

    // Menambahkan data ke kolom
    newRow.innerHTML = `
        <td>${nama}</td>
        <td>${tanggalLahir}</td>
        <td>${jenisKelamin}</td>
        <td>${pesan}</td>
        <td class="delete" onclick="deleteRow(this)">🗑️</td>
    `;

    // Mengosongkan form setelah submit
    document.getElementById("messageForm").reset();
}

// Fungsi menghapus baris
function deleteRow(btn) {
    const row = btn.closest('tr');
    row.remove();
}

// Menandai menu aktif berdasarkan scroll
document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section, article');
    const navLinks = document.querySelectorAll('.nav-menu');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 50) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});