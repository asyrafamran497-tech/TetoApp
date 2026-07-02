// loader.js: Cukup simpan ini saja, tidak perlu dipisah-pisah
console.log("System Teto: Inisialisasi Loader...");

// 1. Daftar aset
const assetsToLoad = ['assets/teto_diam.jpg', 'assets/teto_bicara.mp4'];

// 2. Langsung eksekusi pengecekan aset
Promise.all(assetsToLoad.map(url => fetch(url)))
    .then(() => {
        console.log("System Teto: Semua aset berhasil dimuat!");
        // Kirim sinyal bahwa sistem siap
        document.dispatchEvent(new CustomEvent('tetoReady'));
    })
    .catch(err => {
        console.error("System Teto: Gagal memuat aset:", err);
    });
