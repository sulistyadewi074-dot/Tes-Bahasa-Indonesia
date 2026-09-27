import { Question } from '../types';

export const INITIAL_QUESTIONS: Question[] = [
  // =========================================================================
  // BAGIAN 1: PILIHAN GANDA (20 BUTIR SOAL: NO. 1 - 20)
  // Setiap soal memiliki 4 opsi jawaban (A, B, C, D) dengan 1 jawaban benar.
  // =========================================================================
  {
    id: 1,
    type: 'pg',
    topic: 'Pengertian Dasar Ikatan & Simpul',
    difficulty: 'Mudah',
    text: `Dalam seni rupa dan keterampilan kriya tekstil, terdapat perbedaan mendasar antara "simpul" dan "ikatan". Pernyataan yang paling tepat mengenai pengertian "simpul" adalah...`,
    options: [
      { id: 'A', text: 'Hubungan pertemuan antara tali dengan seutas tali lainnya atau tali dengan dirinya sendiri' },
      { id: 'B', text: 'Hubungan persambungan antara tali dengan benda lain seperti kayu atau tiang' },
      { id: 'C', text: 'Teknik menenun benang menjadi sehelai kain menggunakan alat tenun' },
      { id: 'D', text: 'Proses merekatkan dua permukaan benda menggunakan bahan lem kayu' }
    ],
    correctAnswer: 'A',
    explanation: `Dalam materi seni kriya dan tali-temali:
- Simpul (knot) adalah bentukan yang dibuat dari seutas tali yang saling mengunci pada dirinya sendiri atau antara dua utas tali.
- Ikatan (lashing/hitch) adalah ikatan antara tali dengan benda lain seperti tongkat, kayu, bambu, atau tiang.`,
  },
  {
    id: 2,
    type: 'pg',
    topic: 'Pengertian Dasar Ikatan',
    difficulty: 'Mudah',
    text: `Ketika kita menghubungkan seutas tali dengan sebuah tongkat kayu atau tiang bambu agar menempel kuat, bentukan tali tersebut dinamakan...`,
    options: [
      { id: 'A', text: 'Anyaman' },
      { id: 'B', text: 'Ikatan' },
      { id: 'C', text: 'Simpul' },
      { id: 'D', text: 'Jahitan' }
    ],
    correctAnswer: 'B',
    explanation: `Bentukan antara tali dengan benda lain (seperti tongkat pramuka, bambu, kayu, atau cincin besi) disebut sebagai ikatan (lashing).`,
  },
  {
    id: 3,
    type: 'pg',
    topic: 'Simpul Hidup (Overhand / Slip Knot)',
    difficulty: 'Mudah',
    text: `Perhatikan karakteristik simpul berikut:
1. Sangat mudah dibuat sebagai simpul dasar
2. Berfungsi mengikat tiang atau hewan ternak
3. Sangat mudah dan cepat untuk dilepaskan kembali hanya dengan menarik salah satu ujung tali

Berdasarkan ciri-ciri di atas, simpul yang dimaksud adalah...`,
    imageSvg: `<svg viewBox="0 0 460 160" class="w-full max-w-md h-auto mx-auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="460" height="160" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <!-- Tiang kayu -->
  <rect x="210" y="20" width="36" height="120" rx="6" fill="#b45309" stroke="#78350f" stroke-width="2"/>
  <line x1="215" y1="35" x2="215" y2="125" stroke="#d97706" stroke-width="1.5" stroke-dasharray="6,4"/>
  <line x1="235" y1="30" x2="235" y2="130" stroke="#92400e" stroke-width="1.5" stroke-dasharray="8,6"/>
  <!-- Tali melingkari tiang membentuk simpul hidup -->
  <path d="M 60 80 Q 150 70 210 75" fill="none" stroke="#2563eb" stroke-width="7" stroke-linecap="round"/>
  <path d="M 210 75 Q 260 70 270 90 Q 280 115 240 115 Q 185 115 195 80 Q 200 55 246 65" fill="none" stroke="#1d4ed8" stroke-width="7" stroke-linecap="round"/>
  <!-- Loop yang bisa ditarik -->
  <path d="M 246 65 Q 320 60 360 85 Q 380 98 350 110 Q 310 115 250 100" fill="none" stroke="#3b82f6" stroke-width="7" stroke-linecap="round"/>
  <!-- Ujung lepas -->
  <path d="M 350 110 L 410 120" fill="none" stroke="#ef4444" stroke-width="6" stroke-linecap="round" stroke-dasharray="5,4"/>
  <!-- Anotasi -->
  <text x="410" y="140" font-size="11" font-weight="bold" fill="#dc2626" text-anchor="middle">Tarik untuk melepas</text>
  <text x="120" y="45" font-size="12" font-weight="bold" fill="#1e293b">Tali Utama</text>
  <text x="228" y="152" font-size="11" font-weight="bold" fill="#78350f" text-anchor="middle">Tiang</text>
</svg>`,
    options: [
      { id: 'A', text: 'Simpul Mati' },
      { id: 'B', text: 'Simpul Hidup' },
      { id: 'C', text: 'Simpul Jangkar' },
      { id: 'D', text: 'Simpul Rantai' }
    ],
    correctAnswer: 'B',
    explanation: `Simpul Hidup berfungsi untuk mengikat tiang atau benda dengan sifat kuat menahan tarikan namun sangat mudah dilepaskan kembali hanya dengan menarik salah satu ujung tali lepasnya.`,
  },
  {
    id: 4,
    type: 'pg',
    topic: 'Simpul Mati (Reef Knot / Square Knot)',
    difficulty: 'Mudah',
    text: `Simpul mati (reef knot) adalah simpul penting yang sering digunakan dalam kehidupan sehari-hari maupun pertolongan pertama. Fungsi utama dari simpul mati adalah...`,
    imageSvg: `<svg viewBox="0 0 460 160" class="w-full max-w-md h-auto mx-auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="460" height="160" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <!-- Tali Merah Kiri -->
  <path d="M 40 60 Q 140 60 180 80 Q 210 95 240 75 Q 260 60 220 50 Q 170 50 170 80 L 170 120 L 100 120" fill="none" stroke="#ef4444" stroke-width="7" stroke-linecap="round"/>
  <!-- Tali Biru Kanan -->
  <path d="M 420 100 Q 320 100 280 80 Q 250 65 220 85 Q 200 100 240 110 Q 290 110 290 80 L 290 40 L 360 40" fill="none" stroke="#2563eb" stroke-width="7" stroke-linecap="round"/>
  <!-- Label -->
  <rect x="50" y="15" width="130" height="26" rx="6" fill="#fee2e2" stroke="#ef4444" stroke-width="1"/>
  <text x="115" y="32" font-size="11" font-weight="bold" fill="#b91c1c" text-anchor="middle">Tali 1 (Sama Besar)</text>
  <rect x="280" y="125" width="130" height="26" rx="6" fill="#dbeafe" stroke="#2563eb" stroke-width="1"/>
  <text x="345" y="142" font-size="11" font-weight="bold" fill="#1d4ed8" text-anchor="middle">Tali 2 (Sama Besar)</text>
</svg>`,
    options: [
      { id: 'A', text: 'Menyambung dua utas tali yang sama besar dan dalam keadaan tidak basah/licin' },
      { id: 'B', text: 'Menyambung dua utas tali yang berbeda ukuran ketebalannya' },
      { id: 'C', text: 'Mengikat leher hewan peliharaan agar tidak tercekik' },
      { id: 'D', text: 'Membuat tandu darurat dengan bambu dan tali rafia' }
    ],
    correctAnswer: 'A',
    explanation: `Simpul mati (square/reef knot) berfungsi menyambung 2 utas tali yang sama besar dan kering. Simpul ini mengunci sangat kuat dan rata, sering digunakan pada ikatan perban P3K dan menyambung tali.`,
  },
  {
    id: 5,
    type: 'pg',
    topic: 'Simpul Pangkal (Clove Hitch)',
    difficulty: 'Sedang',
    text: `Dalam pembuatan karya seni instalasi berbahan bambu atau pembuatan tenda dan pionering, simpul yang selalu digunakan sebagai permulaan (awal) dan penutup ikatan pada tiang adalah...`,
    imageSvg: `<svg viewBox="0 0 460 160" class="w-full max-w-md h-auto mx-auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="460" height="160" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <!-- Tongkat Tegak -->
  <rect x="205" y="15" width="45" height="130" rx="6" fill="#d97706" stroke="#92400e" stroke-width="2"/>
  <line x1="218" y1="20" x2="218" y2="140" stroke="#b45309" stroke-width="1.5" stroke-dasharray="5,4"/>
  <!-- Lilitan Simpul Pangkal menyilang -->
  <path d="M 50 110 Q 150 100 205 70" fill="none" stroke="#059669" stroke-width="7" stroke-linecap="round"/>
  <!-- Lilitan depan 1 -->
  <path d="M 205 70 Q 250 50 250 70" fill="none" stroke="#047857" stroke-width="7"/>
  <!-- Menyilang di tiang -->
  <path d="M 205 85 L 250 55" fill="none" stroke="#10b981" stroke-width="7" stroke-linecap="round"/>
  <!-- Lilitan keluar -->
  <path d="M 205 105 Q 230 115 250 95" fill="none" stroke="#047857" stroke-width="7"/>
  <path d="M 250 95 Q 330 65 410 65" fill="none" stroke="#059669" stroke-width="7" stroke-linecap="round"/>
  <text x="227.5" y="152" font-size="11" font-weight="bold" fill="#78350f" text-anchor="middle">Tiang Tongkat</text>
  <rect x="50" y="25" width="130" height="26" rx="6" fill="#ecfdf5" stroke="#059669" stroke-width="1"/>
  <text x="115" y="42" font-size="11" font-weight="bold" fill="#047857" text-anchor="middle">Lilitan Menyilang</text>
</svg>`,
    options: [
      { id: 'A', text: 'Simpul Pangkal' },
      { id: 'B', text: 'Simpul Rantai' },
      { id: 'C', text: 'Simpul Nelayan' },
      { id: 'D', text: 'Simpul Kembar' }
    ],
    correctAnswer: 'A',
    explanation: `Simpul pangkal (clove hitch) merupakan simpul yang sangat mendasar dan penting, digunakan untuk mengawali dan mengakhiri suatu ikatan pada tiang atau tongkat.`,
  },
  {
    id: 6,
    type: 'pg',
    topic: 'Simpul Jangkar (Cow Hitch)',
    difficulty: 'Sedang',
    text: `Perhatikan gambar simpul yang melingkari ring atau balok kayu berikut!
Simpul ini memiliki bentuk dua lilitan simetris yang menjepit tali dan sering dimanfaatkan untuk membuat tandu darurat atau menalikan jangkar perahu. Simpul tersebut dinamakan...`,
    imageSvg: `<svg viewBox="0 0 460 160" class="w-full max-w-md h-auto mx-auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="460" height="160" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <!-- Balok Kayu Horisontal -->
  <rect x="40" y="60" width="380" height="40" rx="6" fill="#d97706" stroke="#92400e" stroke-width="2"/>
  <!-- Dua lingkaran jerat simpul jangkar -->
  <path d="M 200 140 L 200 80 Q 200 40 220 40 Q 240 40 240 80 L 240 140" fill="none" stroke="#7c3aed" stroke-width="8" stroke-linecap="round"/>
  <path d="M 185 80 L 255 80" fill="none" stroke="#6d28d9" stroke-width="8" stroke-linecap="round"/>
  <text x="220" y="152" font-size="11" font-weight="bold" fill="#5b21b6" text-anchor="middle">Dua Ujung Sejajar</text>
  <text x="350" y="85" font-size="11" font-weight="bold" fill="#78350f">Balok / Palang</text>
</svg>`,
    options: [
      { id: 'A', text: 'Simpul Jangkar' },
      { id: 'B', text: 'Simpul Laso' },
      { id: 'C', text: 'Simpul Kursi' },
      { id: 'D', text: 'Simpul Tarik' }
    ],
    correctAnswer: 'A',
    explanation: `Simpul jangkar (cow hitch) dibentuk dengan melingkarkan kepala tali pada kayu atau ring kemudian kedua ujung tali dimasukkan ke dalam sosok/lingkaran tali tersebut. Sering digunakan untuk mengikat jangkar perahu atau tandu darurat.`,
  },
  {
    id: 7,
    type: 'pg',
    topic: 'Simpul Anyam (Sheet Bend)',
    difficulty: 'Sedang',
    text: `Jika kita ingin menyambung dua utas tali yang memiliki ketebalan atau ukuran diameter TIDAK SAMA (satu tali besar dan satu tali kecil) dalam kondisi kering, simpul yang tepat digunakan adalah...`,
    options: [
      { id: 'A', text: 'Simpul Tiang' },
      { id: 'B', text: 'Simpul Anyam' },
      { id: 'C', text: 'Simpul Mati' },
      { id: 'D', text: 'Simpul Pangkal' }
    ],
    correctAnswer: 'B',
    explanation: `Simpul Anyam (sheet bend) berfungsi khusus untuk menyambung dua utas tali yang tidak sama besarnya dalam keadaan kering. Jika talinya basah atau licin, digunakan Simpul Anyam Berganda.`,
  },
  {
    id: 8,
    type: 'pg',
    topic: 'Simpul Anyam Berganda (Double Sheet Bend)',
    difficulty: 'Sedang',
    text: `Ketika dua utas tali yang tidak sama besar berada dalam keadaan BASAH atau LICIN dan harus disambungkan dengan kuat agar tidak tergelincir, simpul yang paling tepat digunakan adalah...`,
    options: [
      { id: 'A', text: 'Simpul Hidup' },
      { id: 'B', text: 'Simpul Anyam Berganda' },
      { id: 'C', text: 'Simpul Pangkal' },
      { id: 'D', text: 'Simpul Kembar' }
    ],
    correctAnswer: 'B',
    explanation: `Simpul anyam berganda (double sheet bend) memiliki lilitan ganda yang mencegah tali licin/basah terlepas ketika menyambung dua tali berukuran beda.`,
  },
  {
    id: 9,
    type: 'pg',
    topic: 'Simpul Kembar / Nelayan (Fisherman Knot)',
    difficulty: 'Sedang',
    text: `Simpul kembar atau sering disebut simpul nelayan (fisherman's knot) dibuat dengan menyusun dua simpul yang saling berhadapan. Fungsi utama dari simpul kembar adalah...`,
    options: [
      { id: 'A', text: 'Menyambung dua utas tali yang sama besar dan berada dalam kondisi basah atau licin' },
      { id: 'B', text: 'Mengikat tiga tongkat bambu sekaligus' },
      { id: 'C', text: 'Membuat jerat leher binatang buas' },
      { id: 'D', text: 'Menghubungkan tali dengan jangkar kapal' }
    ],
    correctAnswer: 'A',
    explanation: `Simpul kembar (fisherman's knot) berfungsi menyambung dua utas tali yang sama besar dalam keadaan basah atau licin (seperti tali pancing nelayan).`,
  },
  {
    id: 10,
    type: 'pg',
    topic: 'Simpul Tiang (Bowline)',
    difficulty: 'Sukar',
    text: `Perhatikan ciri-ciri simpul berikut:
1. Membentuk sebuah lingkaran/sosok di ujung tali yang tidak bisa mengecil atau membesar meski ditarik kencang
2. Sering digunakan untuk menolong korban bencana/kecelakaan dari dalam jurang atau sumur
3. Digunakan juga untuk menalikan leher hewan ternak agar tidak tercekik

Simpul yang memiliki fungsi penyelamatan ini dinamakan...`,
    options: [
      { id: 'A', text: 'Simpul Laso' },
      { id: 'B', text: 'Simpul Tiang' },
      { id: 'C', text: 'Simpul Mati' },
      { id: 'D', text: 'Simpul Pangkal' }
    ],
    correctAnswer: 'B',
    explanation: `Simpul tiang (bowline knot) menghasilkan kolong/lingkaran tetap yang tidak akan menjerat (tidak mengecil saat ditarik). Sangat aman untuk menolong korban kecelakaan maupun mengikat leher ternak.`,
  },
  {
    id: 11,
    type: 'pg',
    topic: 'Simpul Erat & Simpul Tambat',
    difficulty: 'Sedang',
    text: `Simpul yang digunakan untuk memendekkan tali yang terlalu panjang tanpa perlu memotong tali tersebut adalah...`,
    options: [
      { id: 'A', text: 'Simpul Tiang' },
      { id: 'B', text: 'Simpul Pemendek / Rantai' },
      { id: 'C', text: 'Simpul Pangkal' },
      { id: 'D', text: 'Simpul Mati' }
    ],
    correctAnswer: 'B',
    explanation: `Simpul pemendek (sheepshank) atau simpul rantai berfungsi untuk memendekkan seutas tali yang terlalu panjang tanpa harus memotongnya dan memperkuat tali yang mulai lapuk di bagian tengah.`,
  },
  {
    id: 12,
    type: 'pg',
    topic: 'Seni Kerajinan Makrame',
    difficulty: 'Mudah',
    text: `Salah satu karya seni rupa terapan yang memanfaatkan keterampilan menyusun aneka jenis simpul dan ikatan tali tanpa menggunakan jarum atau mesin tenun disebut seni...`,
    options: [
      { id: 'A', text: 'Batik' },
      { id: 'B', text: 'Makrame' },
      { id: 'C', text: 'Origami' },
      { id: 'D', text: 'Mozaik' }
    ],
    correctAnswer: 'B',
    explanation: `Seni makrame (macramé) adalah seni kerajinan tangan yang memanfaatkan teknik pilinan, ikatan, dan simpul-simpul benang/tali berulang kali hingga membentuk hiasan atau benda pakai fungsional.`,
  },
  {
    id: 13,
    type: 'pg',
    topic: 'Bahan Alami Kerajinan Simpul',
    difficulty: 'Mudah',
    text: `Siswa kelas VI di SD Negeri 3 Loloan Timur ingin membuat karya kriya simpul makrame dengan bahan ramah lingkungan dari serat alam. Contoh serat alam yang tepat untuk bahan tali adalah...`,
    options: [
      { id: 'A', text: 'Tali nilon sintetis' },
      { id: 'B', text: 'Tali serat rami dan serat katun alami' },
      { id: 'C', text: 'Tali rafia plastik' },
      { id: 'D', text: 'Kawat kabel tembaga' }
    ],
    correctAnswer: 'B',
    explanation: `Serat rami (jute), serat daun nanas, sabut kelapa, dan katun (cotton) merupakan bahan alami yang ramah lingkungan, bertekstur estetis, dan sangat cocok untuk kerajinan seni makrame.`,
  },
  {
    id: 14,
    type: 'pg',
    topic: 'Ikatan Palang (Square Lashing)',
    difficulty: 'Sedang',
    text: `Dalam teknik ikatan, jika dua tongkat atau kayu diposisikan saling BERSILANGAN TEGAK LURUS (membentuk sudut 90 derajat), ikatan yang tepat digunakan untuk menyatukan kedua tongkat tersebut adalah...`,
    options: [
      { id: 'A', text: 'Ikatan Palang' },
      { id: 'B', text: 'Ikatan Silang' },
      { id: 'C', text: 'Ikatan Kaki Tiga' },
      { id: 'D', text: 'Ikatan Canggah' }
    ],
    correctAnswer: 'A',
    explanation: `Ikatan palang (square lashing) digunakan untuk mengikat dua tiang/tongkat yang bersilangan tegak lurus membentuk sudut siku-siku (90°).`,
  },
  {
    id: 15,
    type: 'pg',
    topic: 'Ikatan Silang (Diagonal Lashing)',
    difficulty: 'Sedang',
    text: `Jika dua buah tongkat kayu bersilangan tetapi membentuk sudut MIRING atau sudut yang BUKAN 90 derajat (bukan siku-siku), ikatan yang digunakan adalah...`,
    options: [
      { id: 'A', text: 'Ikatan Palang' },
      { id: 'B', text: 'Ikatan Silang' },
      { id: 'C', text: 'Ikatan Canggah' },
      { id: 'D', text: 'Ikatan Pangkal' }
    ],
    correctAnswer: 'B',
    explanation: `Ikatan silang (diagonal lashing) berfungsi mengikat dua batang tongkat yang saling bersilangan membentuk sudut lancip atau tumpul (tidak tegak lurus/bukan 90°).`,
  },
  {
    id: 16,
    type: 'pg',
    topic: 'Ikatan Canggah (Sheer Lashing)',
    difficulty: 'Sedang',
    text: `Untuk menyambung dua batang tongkat kayu secara SEJAJAR lurus agar tongkat menjadi bertambah panjang (misalnya membuat tiang bendera tinggi), ikatan yang digunakan adalah...`,
    options: [
      { id: 'A', text: 'Ikatan Canggah' },
      { id: 'B', text: 'Ikatan Kaki Tiga' },
      { id: 'C', text: 'Ikatan Palang' },
      { id: 'D', text: 'Ikatan Silang' }
    ],
    correctAnswer: 'A',
    explanation: `Ikatan canggah (sheer lashing) digunakan untuk menyambung dua buah tongkat sejajar secara memanjang agar menjadi lebih panjang.`,
  },
  {
    id: 17,
    type: 'pg',
    topic: 'Ikatan Kaki Tiga (Tripod Lashing)',
    difficulty: 'Mudah',
    text: `Ikatan yang digunakan untuk menyatukan tiga batang tiang atau kayu sekaligus di bagian atasnya sehingga dapat diberdirikan menjadi penyangga kerangka tenda atau gantungan panci adalah...`,
    options: [
      { id: 'A', text: 'Ikatan Canggah' },
      { id: 'B', text: 'Ikatan Kaki Tiga' },
      { id: 'C', text: 'Ikatan Palang' },
      { id: 'D', text: 'Ikatan Silang' }
    ],
    correctAnswer: 'B',
    explanation: `Ikatan kaki tiga (tripod lashing) berfungsi menggabungkan 3 tongkat sekaligus untuk membentuk struktur piramida berkaki tiga yang kokoh berdiri.`,
  },
  {
    id: 18,
    type: 'pg',
    topic: 'Simpul Dasar Makrame: Simpul Pipih (Square Knot)',
    difficulty: 'Sedang',
    text: `Dalam pembuatan gelang tali atau gantungan pot makrame, simpul yang dibuat dengan empat helai benang (dua helai tali inti di tengah dan dua helai tali pengikat di kanan-kiri yang disilangkan bergantian) dinamakan...`,
    options: [
      { id: 'A', text: 'Simpul Pipih Ganda (Square Knot)' },
      { id: 'B', text: 'Simpul Nelayan' },
      { id: 'C', text: 'Simpul Tiang' },
      { id: 'D', text: 'Simpul Laso' }
    ],
    correctAnswer: 'A',
    explanation: `Simpul pipih (flat/square knot) pada seni makrame dikerjakan menggunakan 4 helai tali (2 tali pasif/tengah dan 2 tali aktif/kiri-kanan) membentuk ikatan pipih berulang yang kokoh dan artistik.`,
  },
  {
    id: 19,
    type: 'pg',
    topic: 'Fungsi Estetis dan Praktis Seni Ikatan & Simpul',
    difficulty: 'Mudah',
    text: `Karya seni kriya ikatan dan simpul memiliki fungsi pakai (praktis) dan fungsi hias (estetis). Contoh produk simpul yang menonjolkan fungsi ESTETIS atau penghias ruangan adalah...`,
    options: [
      { id: 'A', text: 'Tali pengikat jangkar perahu nelayan' },
      { id: 'B', text: 'Hiasan dinding makrame (wall hanging)' },
      { id: 'C', text: 'Ikatan tenda pengungsian bencana' },
      { id: 'D', text: 'Tali pengikat hewan ternak sapi' }
    ],
    correctAnswer: 'B',
    explanation: `Hiasan dinding makrame (wall hanging) dirancang dengan memadukan variasi simpul yang indah dengan nilai seni estetis tinggi untuk mempercantik dekorasi ruangan.`,
  },
  {
    id: 20,
    type: 'pg',
    topic: 'Perawatan dan Kerapian Hasil Simpul',
    difficulty: 'Mudah',
    text: `Agar karya kerajinan simpul dan makrame yang dihasilkan tampak rapi, indah, dan tidak mudah terurai, langkah yang perlu diperhatikan saat pembuatan adalah...`,
    options: [
      { id: 'A', text: 'Menarik setiap simpul dengan kerapatan dan ketegangan yang konsisten' },
      { id: 'B', text: 'Memotong tali sependek mungkin sebelum membuat simpul' },
      { id: 'C', text: 'Membiarkan tali dalam keadaan kusut dan basah' },
      { id: 'D', text: 'Menyambung tali menggunakan selotip kertas' }
    ],
    correctAnswer: 'A',
    explanation: `Kerapian dan kekuatan karya makrame sangat ditentukan oleh konsistensi tarikan tali, ketelitian langkah, dan keseragaman kerapatan simpul.`,
  },

  // =========================================================================
  // BAGIAN 2: PILIHAN GANDA KOMPLEKS (5 BUTIR SOAL: NO. 21 - 25)
  // Setiap soal memiliki kemungkinan LEBIH DARI 1 pilihan jawaban benar.
  // =========================================================================
  {
    id: 21,
    type: 'pgk',
    topic: 'Fungsi-Fungsi Simpul Dasar',
    difficulty: 'Sedang',
    text: `Pilihlah SEMUA pernyataan yang BENAR mengenai fungsi simpul mati dan simpul hidup dalam kehidupan sehari-hari! (Jawaban benar bisa lebih dari satu)`,
    options: [
      { id: 'A', text: 'Simpul mati berfungsi menyambung dua utas tali yang sama besar dan kering' },
      { id: 'B', text: 'Simpul hidup dapat dibuka dengan mudah hanya dengan menarik salah satu ujung tali' },
      { id: 'C', text: 'Simpul mati digunakan untuk membuat lingkaran penyelamat di ujung tali yang tidak bisa menjerat' },
      { id: 'D', text: 'Simpul hidup sering digunakan untuk mengikat tiang sementara atau hewan ternak' }
    ],
    correctAnswer: ['A', 'B', 'D'],
    explanation: `Pernyataan A, B, dan D bernilai BENAR. Pernyataan C salah karena simpul yang membuat lingkaran tidak menjerat adalah simpul tiang (bowline), bukan simpul mati.`,
  },
  {
    id: 22,
    type: 'pgk',
    topic: 'Bahan-Bahan untuk Kerajinan Makrame',
    difficulty: 'Mudah',
    text: `Manakah bahan-bahan berikut yang lazim dan cocok digunakan untuk membuat kerajinan seni simpul makrame? (Pilihlah semua jawaban yang benar)`,
    options: [
      { id: 'A', text: 'Benang katun tali kur (cotton cord)' },
      { id: 'B', text: 'Tali rami atau goni (jute twine)' },
      { id: 'C', text: 'Kawat duri besi berkarat' },
      { id: 'D', text: 'Tali serat daun nanas atau agel' }
    ],
    correctAnswer: ['A', 'B', 'D'],
    explanation: `Benang katun (cotton cord), tali rami/goni, dan serat agel/daun nanas adalah bahan lentur dan indah yang sangat umum dipakai dalam karya makrame. Kawat duri tidak lazim dan berbahaya.`,
  },
  {
    id: 23,
    type: 'pgk',
    topic: 'Macam-Macam Ikatan pada Tiang / Tongkat',
    difficulty: 'Sedang',
    text: `Manakah di antara pilihan berikut yang termasuk ke dalam jenis-jenis IKATAN (hubungan antara tali dengan kayu/tiang)? (Pilihlah semua jawaban yang benar)`,
    options: [
      { id: 'A', text: 'Ikatan Palang (Square Lashing)' },
      { id: 'B', text: 'Ikatan Silang (Diagonal Lashing)' },
      { id: 'C', text: 'Ikatan Canggah (Sheer Lashing)' },
      { id: 'D', text: 'Simpul Kembar (Fisherman Knot)' }
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation: `Ikatan palang, ikatan silang, dan ikatan canggah adalah bentuk ikatan antara tali dengan tongkat/kayu. Sedangkan simpul kembar adalah simpul (persambungan dua tali).`,
  },
  {
    id: 24,
    type: 'pgk',
    topic: 'Karya Produk Fungsional Hasil Simpul & Ikatan',
    difficulty: 'Mudah',
    text: `Keterampilan membuat simpul dan ikatan dapat menghasilkan aneka benda pakai fungsional dalam kehidupan sehari-hari, antara lain... (Pilihlah semua jawaban yang benar)`,
    options: [
      { id: 'A', text: 'Gantungan pot tanaman hias (plant hanger)' },
      { id: 'B', text: 'Jaring ayunan santai (hammock)' },
      { id: 'C', text: 'Tas belanja jaring dan gantungan kunci (keychain)' },
      { id: 'D', text: 'Lukisan cat minyak di atas kanvas' }
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation: `Gantungan pot, ayunan jaring (hammock), tas jaring, dan gantungan kunci merupakan produk seni terapan berbasis simpul/makrame. Lukisan cat minyak merupakan karya seni lukis dua dimensi.`,
  },
  {
    id: 25,
    type: 'pgk',
    topic: 'Simpul untuk Menyambung Tali',
    difficulty: 'Sedang',
    text: `Ketika bekerja di luar ruangan atau dalam kegiatan pramuka dan seni kriya, simpul yang fungsi utamanya adalah MENYAMBUNG dua utas tali adalah... (Pilihlah semua jawaban yang benar)`,
    options: [
      { id: 'A', text: 'Simpul Mati' },
      { id: 'B', text: 'Simpul Anyam' },
      { id: 'C', text: 'Simpul Kembar / Nelayan' },
      { id: 'D', text: 'Simpul Pangkal' }
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation: `Simpul mati, simpul anyam, dan simpul kembar semuanya berfungsi untuk menyambung dua utas tali. Sedangkan simpul pangkal berfungsi menalikan tali ke tiang/tongkat.`,
  },

  // =========================================================================
  // BAGIAN 3: PILIHAN GANDA KOMPLEKS KATEGORI (5 BUTIR SOAL: NO. 26 - 30)
  // Setiap butir memiliki pernyataan yang harus direspons Benar/Salah atau Sesuai/Tidak Sesuai
  // =========================================================================
  {
    id: 26,
    type: 'pgk_kategori',
    topic: 'Karakteristik Simpul vs Ikatan',
    difficulty: 'Mudah',
    categoryLabels: {
      positive: 'Benar',
      negative: 'Salah',
    },
    text: `Tentukan apakah setiap pernyataan di bawah ini BENAR atau SALAH terkait konsep ikatan dan simpul!`,
    statements: [
      {
        id: 's1',
        text: 'Simpul adalah hubungan antara tali dengan tali lainnya atau tali dengan dirinya sendiri.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Ikatan adalah hubungan antara tali dengan benda lain seperti kayu, tiang, atau bambu.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Simpul pangkal tidak boleh digunakan untuk memulai ikatan pada tiang.',
        correctAnswer: false,
      },
    ],
    explanation: `1. Benar: Simpul adalah pertemuan tali dengan tali.
2. Benar: Ikatan menghubungkan tali dengan benda lain.
3. Salah: Justru simpul pangkal adalah simpul utama yang dipakai mengawali ikatan pada tiang.`,
  },
  {
    id: 27,
    type: 'pgk_kategori',
    topic: 'Kesesuaian Jenis Simpul dengan Fungsinya',
    difficulty: 'Sedang',
    categoryLabels: {
      positive: 'Sesuai',
      negative: 'Tidak Sesuai',
    },
    text: `Tentukan kesesuaian antara jenis simpul dengan fungsinya berikut ini (SESUAI / TIDAK SESUAI):`,
    statements: [
      {
        id: 's1',
        text: 'Simpul mati: Digunakan untuk menyambung dua tali sama besar dalam keadaan kering.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Simpul anyam: Digunakan khusus untuk mengikat leher binatang ternak agar tercekik.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Simpul kembar: Digunakan untuk menyambung dua tali sama besar dalam keadaan basah atau licin.',
        correctAnswer: true,
      },
    ],
    explanation: `1. Sesuai: Simpul mati untuk 2 tali sama besar & kering.
2. Tidak Sesuai: Simpul anyam untuk menyambung 2 tali beda ukuran, bukan untuk leher ternak (leher ternak memakai simpul tiang).
3. Sesuai: Simpul kembar/nelayan untuk tali basah/licin.`,
  },
  {
    id: 28,
    type: 'pgk_kategori',
    topic: 'Kaidah Pembuatan Ikatan Tongkat',
    difficulty: 'Sedang',
    categoryLabels: {
      positive: 'Setuju',
      negative: 'Tidak Setuju',
    },
    text: `Berikan respons SETUJU atau TIDAK SETUJU terhadap pernyataan-pernyataan mengenai teknik ikatan berikut:`,
    statements: [
      {
        id: 's1',
        text: 'Ikatan palang digunakan untuk mengikat dua tongkat yang posisinya bersilangan tegak lurus (90 derajat).',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Ikatan canggah digunakan untuk membuat tandu penyelamat tanpa memerlukan tongkat kayu.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Ikatan silang diawali dengan simpul tambat atau simpul pangkal pada salah satu tongkat.',
        correctAnswer: true,
      },
    ],
    explanation: `1. Setuju: Ikatan palang khusus untuk 2 tongkat bersilangan siku-siku 90°.
2. Tidak Setuju: Ikatan canggah berfungsi menyambung 2 tongkat sejajar agar lebih panjang, bukan membuat tandu tanpa tongkat.
3. Setuju: Ikatan silang diawali dengan simpul tambat/pangkal lalu dililitkan menyilang.`,
  },
  {
    id: 29,
    type: 'pgk_kategori',
    topic: 'Seni Makrame dan Keterampilan Kriya',
    difficulty: 'Mudah',
    categoryLabels: {
      positive: 'Benar',
      negative: 'Salah',
    },
    text: `Tentukan BENAR atau SALAH untuk setiap deskripsi mengenai seni makrame berikut:`,
    statements: [
      {
        id: 's1',
        text: 'Makrame adalah kerajinan tangan yang mengandalkan keahlian membuat aneka simpul benang atau tali.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Dalam membuat makrame, simpul rantai dan simpul pipih merupakan simpul dasar yang sering divariasikan.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Seni makrame hanya dapat dibuat dari bahan benang emas dan perak murni.',
        correctAnswer: false,
      },
    ],
    explanation: `1. Benar: Makrame adalah kriya simpul tali temali.
2. Benar: Simpul pipih (square knot) dan simpul rantai merupakan simpul dasar makrame.
3. Salah: Makrame dapat dibuat dari berbagai bahan terjangkau seperti benang katun, tali kur, rami, atau sabut kelapa.`,
  },
  {
    id: 30,
    type: 'pgk_kategori',
    topic: 'Manfaat dan Nilai Sikap dalam Seni Kriya Simpul',
    difficulty: 'Mudah',
    categoryLabels: {
      positive: 'Sesuai',
      negative: 'Tidak Sesuai',
    },
    text: `Tentukan apakah nilai-nilai berikut SESUAI atau TIDAK SESUAI dengan manfaat yang dilatih saat belajar membuat seni ikatan dan simpul:`,
    statements: [
      {
        id: 's1',
        text: 'Melatih kesabaran, ketelitian, dan ketekunan jari-jemari tangan dalam menyusun pola tali.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Menumbuhkan kreativitas dalam merancang benda hias dan benda pakai dari bahan tali.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Membuat siswa menjadi terburu-buru dan ceroboh dalam menyelesaikan sebuah pekerjaan tangan.',
        correctAnswer: false,
      },
    ],
    explanation: `1. Sesuai: Melatih motorik halus, kesabaran, dan ketelitian.
2. Sesuai: Mengembangkan daya kreasi dan inovasi estetis.
3. Tidak Sesuai: Seni simpul justru melatih ketenangan dan ketelitian, bukan kecerobohan.`,
  },

  // =========================================================================
  // BAGIAN 4: ISIAN SINGKAT (5 BUTIR SOAL: NO. 31 - 35)
  // Siswa mengetikkan jawaban singkat, diperiksa secara cerdas (case-insensitive & variasi jawaban)
  // =========================================================================
  {
    id: 31,
    type: 'isian',
    topic: 'Istilah Kriya Tali-Temali',
    difficulty: 'Mudah',
    text: `Seni kerajinan tangan menyusun simpul dan ikatan tali temali hingga menghasilkan karya fungsional atau hiasan disebut seni...`,
    correctAnswer: 'makrame',
    acceptableAnswers: ['makrame', 'macrame', 'seni makrame', 'kerajinan makrame'],
    explanation: `Seni merangkai tali menggunakan aneka simpul tanpa jarum tenun disebut dengan seni makrame (macramé).`,
  },
  {
    id: 32,
    type: 'isian',
    topic: 'Nama Simpul Pengikat Tiang',
    difficulty: 'Mudah',
    text: `Simpul yang digunakan untuk mengawali dan mengakhiri suatu ikatan pada tiang atau tongkat dinamakan simpul...`,
    correctAnswer: 'pangkal',
    acceptableAnswers: ['pangkal', 'simpul pangkal', 'clove hitch'],
    explanation: `Simpul pangkal (clove hitch) adalah simpul utama yang selalu digunakan untuk mengawali dan mengakhiri ikatan pada tongkat atau tiang.`,
  },
  {
    id: 33,
    type: 'isian',
    topic: 'Nama Simpul Dua Tali Sama Besar',
    difficulty: 'Mudah',
    text: `Simpul yang berfungsi untuk menyambung dua utas tali yang sama besar dalam keadaan kering dinamakan simpul...`,
    correctAnswer: 'mati',
    acceptableAnswers: ['mati', 'simpul mati', 'reef knot', 'square knot'],
    explanation: `Simpul mati (reef knot/square knot) digunakan untuk menyambung dua tali yang berukuran sama besar dan kering.`,
  },
  {
    id: 34,
    type: 'isian',
    topic: 'Nama Ikatan Sudut Siku-Siku',
    difficulty: 'Sedang',
    text: `Ikatan yang digunakan untuk menyatukan dua tongkat yang bersilangan tegak lurus (membentuk sudut 90 derajat) dinamakan ikatan...`,
    correctAnswer: 'palang',
    acceptableAnswers: ['palang', 'ikatan palang', 'square lashing'],
    explanation: `Ikatan palang (square lashing) adalah ikatan yang digunakan untuk mengikat dua batang tiang/kayu yang posisinya saling tegak lurus (90°).`,
  },
  {
    id: 35,
    type: 'isian',
    topic: 'Nama Simpul Lingkaran Tak Tercekik',
    difficulty: 'Sedang',
    text: `Simpul yang menghasilkan lingkaran atau sosok di ujung tali yang tidak bisa menjerat/mengecil saat ditarik dan sering digunakan untuk menolong korban kecelakaan adalah simpul...`,
    correctAnswer: 'tiang',
    acceptableAnswers: ['tiang', 'simpul tiang', 'bowline', 'bowline knot'],
    explanation: `Simpul tiang (bowline knot) menghasilkan kolong lingkaran yang diameternya tetap (tidak menjerat) sehingga aman untuk penyelamatan korban kecelakaan atau menalikan leher ternak.`,
  },
];
