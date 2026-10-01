// Inisialisasi array 
let produkToko = [
  { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
  { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
  { id: 3, nama: "Keyboard", harga: 350000, stok: 7 }
];

/**
 * Fungsi untuk menambahkan produk baru ke dalam array produkToko
 * @param {string} nama 
 * @param {number} harga 
 * @param {number} stok 
 */
function tambahProduk(nama, harga, stok) {
  const idBaru = produkToko.length > 0 ? produkToko[produkToko.length - 1].id + 1 : 1;
  
  const produkBaru = {
    id: idBaru,
    nama: nama,
    harga: harga,
    stok: stok
  };

  produkToko.push(produkBaru);
  console.log(`Produk "${nama}" berhasil ditambahkan!`);
}

/**
 * Fungsi untuk menghapus produk berdasarkan ID
 * @param {number} id 
 */
function hapusProduk(id) {
  const index = produkToko.findIndex(produk => produk.id === id);
  
  if (index !== -1) {
    const produkDihapus = produkToko.splice(index, 1);
    console.log(`Produk "${produkdihapus[0].nama}" berhasil dihapus.`);
  } else {
    console.log(`Produk dengan ID ${id} tidak ditemukan.`);
  }
}

function tampilkanProduk() {
  console.log("=== DAFTAR PRODUK TOKO ONLINE ===");
  if (produkToko.length === 0) {
    console.log("Belum ada produk tersedia.");
    return;
  }
  
  produkToko.forEach(produk => {
    const formatHarga = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(produk.harga);
    console.log(`ID: ${produk.id} | Nama: ${produk.nama} | Harga: ${formatHarga} | Stok: ${produk.stok}`);
  });
  console.log("=================================");
}

tampilkanProduk();
tambahProduk("Headset", 150000, 12);
tampilkanProduk();
hapusProduk(2);
tampilkanProduk();