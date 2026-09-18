import { Question } from '../types';

export const INITIAL_QUESTIONS: Question[] = [
  // =========================================================================
  // BAGIAN 1: PILIHAN GANDA (25 BUTIR SOAL: NO. 1 - 25)
  // Setiap soal memiliki 4 opsi jawaban (A, B, C, D) dengan 1 jawaban benar.
  // =========================================================================
  {
    id: 1,
    type: 'pg',
    topic: 'Siklus Air & Istilah Ilmiah',
    difficulty: 'Mudah',
    text: `Perhatikan bagan siklus air berikut!

Air di permukaan bumi menguap karena panas matahari, lalu uap air berkumpul di atmosfer membentuk awan tebal. Ketika awan jenuh, butiran-butiran air jatuh kembali ke bumi sebagai hujan.

Berdasarkan teks dan diagram, tahapan proses perubahan air dari permukaan bumi menjadi uap air yang membumbung ke atmosfer (nomor 1) disebut...`,
    imageSvg: `<svg viewBox="0 0 520 250" class="w-full max-w-lg h-auto mx-auto" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#bae6fd" />
      <stop offset="100%" stop-color="#e0f2fe" />
    </linearGradient>
    <linearGradient id="seaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="100%" stop-color="#0284c7" />
    </linearGradient>
  </defs>
  <!-- Background Langit & Daratan -->
  <rect x="0" y="0" width="520" height="250" rx="12" fill="url(#skyGrad)" />
  <path d="M 0 190 Q 140 175 280 190 T 520 190 L 520 250 L 0 250 Z" fill="url(#seaGrad)" />
  <path d="M 0 170 Q 90 140 180 175 L 180 250 L 0 250 Z" fill="#86efac" opacity="0.9" />
  <path d="M 20 185 L 140 185 L 120 250 L 0 250 Z" fill="#65a30d" opacity="0.3" />
  <!-- Matahari -->
  <circle cx="80" cy="55" r="28" fill="#facc15" stroke="#eab308" stroke-width="3" />
  <g stroke="#f59e0b" stroke-width="2" stroke-linecap="round">
    <line x1="80" y1="18" x2="80" y2="8" />
    <line x1="80" y1="92" x2="80" y2="102" />
    <line x1="43" y1="55" x2="33" y2="55" />
    <line x1="117" y1="55" x2="127" y2="55" />
    <line x1="54" y1="29" x2="46" y2="21" />
    <line x1="106" y1="81" x2="114" y2="89" />
    <line x1="54" y1="81" x2="46" y2="89" />
    <line x1="106" y1="29" x2="114" y2="21" />
  </g>
  <!-- 1. Panah Evaporasi -->
  <path d="M 120 175 C 115 140, 135 125, 130 100" fill="none" stroke="#0284c7" stroke-width="3" stroke-dasharray="4,4" />
  <polygon points="130,95 125,107 135,107" fill="#0284c7" />
  <rect x="70" y="115" width="115" height="26" rx="6" fill="#ffffff" fill-opacity="0.9" stroke="#0284c7" stroke-width="1.5" />
  <text x="127" y="132" font-size="11" font-weight="bold" fill="#0369a1" text-anchor="middle">1. Evaporasi</text>
  <!-- 2. Awan Kondensasi -->
  <g transform="translate(210, 45)">
    <ellipse cx="60" cy="40" rx="45" ry="24" fill="#ffffff" stroke="#94a3b8" stroke-width="2" />
    <circle cx="40" cy="30" r="24" fill="#ffffff" />
    <circle cx="75" cy="26" r="26" fill="#ffffff" />
    <rect x="15" y="68" width="125" height="26" rx="6" fill="#ffffff" fill-opacity="0.9" stroke="#64748b" stroke-width="1.5" />
    <text x="77" y="85" font-size="11" font-weight="bold" fill="#334155" text-anchor="middle">2. Kondensasi</text>
  </g>
  <!-- 3. Hujan Presipitasi -->
  <g transform="translate(380, 50)">
    <ellipse cx="50" cy="35" rx="42" ry="22" fill="#94a3b8" stroke="#64748b" stroke-width="2" />
    <circle cx="32" cy="26" r="22" fill="#94a3b8" />
    <circle cx="65" cy="24" r="24" fill="#94a3b8" />
    <!-- Tetes Hujan -->
    <g stroke="#0284c7" stroke-width="2.5" stroke-linecap="round">
      <line x1="30" y1="70" x2="25" y2="90" />
      <line x1="50" y1="70" x2="45" y2="90" />
      <line x1="70" y1="70" x2="65" y2="90" />
    </g>
    <rect x="-10" y="100" width="125" height="26" rx="6" fill="#ffffff" fill-opacity="0.9" stroke="#0284c7" stroke-width="1.5" />
    <text x="52" y="117" font-size="11" font-weight="bold" fill="#0369a1" text-anchor="middle">3. Presipitasi</text>
  </g>
  <!-- Laut & Tanah Label -->
  <text x="420" y="225" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">Lautan / Danau</text>
  <text x="70" y="225" font-size="12" font-weight="bold" fill="#166534" text-anchor="middle">Daratan</text>
</svg>`,
    options: [
      { id: 'A', text: 'Kondensasi' },
      { id: 'B', text: 'Evaporasi' },
      { id: 'C', text: 'Presipitasi' },
      { id: 'D', text: 'Infiltrasi' },
    ],
    correctAnswer: 'B',
    explanation:
      'Tahap nomor 1 adalah evaporasi, yaitu proses penguapan air dari perairan (laut, sungai, danau) akibat radiasi energi panas sinar matahari menjadi uap air ke atmosfer.',
  },
  {
    id: 2,
    type: 'pg',
    topic: 'Pengertian Teks Eksplanasi',
    difficulty: 'Mudah',
    text: 'Teks yang berisi uraian sistematis mengenai proses "mengapa" dan "bagaimana" suatu peristiwa alam, sosial, ilmu pengetahuan, atau budaya dapat terjadi disebut teks...',
    options: [
      { id: 'A', text: 'Narasi imajinatif' },
      { id: 'B', text: 'Eksplanasi ilmiah' },
      { id: 'C', text: 'Deskripsi subjektif' },
      { id: 'D', text: 'Eksposisi bujukan' },
    ],
    correctAnswer: 'B',
    explanation:
      'Teks eksplanasi ilmiah adalah teks yang menjelaskan proses terjadinya atau terbentuknya suatu fenomena alam, sosial, atau budaya secara logis dan ilmiah berdasarkan fakta.',
  },
  {
    id: 3,
    type: 'pg',
    topic: 'Ciri-Ciri Teks Eksplanasi',
    difficulty: 'Mudah',
    text: 'Ciri utama informasi yang termuat di dalam teks eksplanasi adalah...',
    options: [
      { id: 'A', text: 'Berisi khayalan dan dongeng pengantar tidur' },
      { id: 'B', text: 'Memuat fakta nyata (faktual) dan bersifat ilmiah' },
      { id: 'C', text: 'Berisi opini pribadi untuk memengaruhi pembaca agar membeli produk' },
      { id: 'D', text: 'Memiliki alur petualangan tokoh dengan dialog rekaan' },
    ],
    correctAnswer: 'B',
    explanation:
      'Ciri khas utama teks eksplanasi adalah memuat fakta nyata (faktual) yang dapat dibuktikan kebenarannya secara ilmiah, bukan cerita rekaan (fiksi) ataupun bujukan iklan.',
  },
  {
    id: 4,
    type: 'pg',
    topic: 'Hubungan Sebab-Akibat Fenomena Alam',
    difficulty: 'Sedang',
    text: `Cermati diagram proses terjadinya pelangi berikut!

Pelangi muncul ketika sinar matahari yang berwarna putih mengenai tetesan air hujan di atmosfer. Cahaya tersebut kemudian dibiaskan, dipantulkan di bagian dalam tetesan air, dan diuraikan menjadi berkas spektrum warna yang beragam (me-ji-ku-hi-bi-ni-u).

Berdasarkan penjelasan dan ilustrasi, penyebab utama sinar putih matahari terurai menjadi warna-warni pelangi adalah terjadinya proses...`,
    imageSvg: `<svg viewBox="0 0 520 240" class="w-full max-w-lg h-auto mx-auto" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="dropGrad" cx="45%" cy="40%" r="55%">
      <stop offset="0%" stop-color="#e0f2fe" />
      <stop offset="70%" stop-color="#38bdf8" />
      <stop offset="100%" stop-color="#0284c7" />
    </radialGradient>
  </defs>
  <rect x="0" y="0" width="520" height="240" rx="12" fill="#0f172a" />
  <!-- Sinar Matahari Datang -->
  <line x1="20" y1="80" x2="170" y2="105" stroke="#fde047" stroke-width="5" stroke-linecap="round" />
  <text x="85" y="70" font-size="12" font-weight="bold" fill="#fef08a">Sinar Putih Matahari</text>
  <!-- Butiran Tetes Air Hujan -->
  <circle cx="230" cy="120" r="65" fill="url(#dropGrad)" stroke="#7dd3fc" stroke-width="2.5" opacity="0.9" />
  <text x="230" y="125" font-size="11" font-weight="bold" fill="#082f49" text-anchor="middle">Tetesan Air Hujan</text>
  <!-- Garis Pembiasan di dalam air -->
  <line x1="170" y1="105" x2="285" y2="135" stroke="#fde047" stroke-width="3" stroke-dasharray="3,3" />
  <line x1="285" y1="135" x2="215" y2="175" stroke="#fde047" stroke-width="2.5" stroke-dasharray="3,3" />
  <!-- Berkas Pelangi Keluar -->
  <g transform="translate(215, 175)">
    <line x1="0" y1="0" x2="270" y2="-40" stroke="#ef4444" stroke-width="4" />
    <line x1="0" y1="2" x2="270" y2="-28" stroke="#f97316" stroke-width="4" />
    <line x1="0" y1="4" x2="270" y2="-16" stroke="#eab308" stroke-width="4" />
    <line x1="0" y1="6" x2="270" y2="-4" stroke="#22c55e" stroke-width="4" />
    <line x1="0" y1="8" x2="270" y2="8" stroke="#06b6d4" stroke-width="4" />
    <line x1="0" y1="10" x2="270" y2="20" stroke="#3b82f6" stroke-width="4" />
    <line x1="0" y1="12" x2="270" y2="32" stroke="#a855f7" stroke-width="4" />
  </g>
  <text x="390" y="100" font-size="12" font-weight="bold" fill="#f8fafc">Spektrum Warna Pelangi</text>
  <text x="390" y="120" font-size="10" fill="#94a3b8">(Pembiasan &amp; Pemantulan)</text>
</svg>`,
    options: [
      { id: 'A', text: 'Pembiasan dan penguraian cahaya (dispersi) oleh tetes air' },
      { id: 'B', text: 'Pencampuran zat pewarna kimia di langit' },
      { id: 'C', text: 'Bayangan awan hitam yang menutupi matahari' },
      { id: 'D', text: 'Penguapan uap minyak dari permukaan tanah' },
    ],
    correctAnswer: 'A',
    explanation:
      'Pelangi terjadi karena sinar matahari dibiaskan saat menembus tetes air hujan, dipantulkan di bagian dalam tetesan, lalu mengalami penguraian cahaya (dispersi) menjadi berbagai spektrum warna karena setiap warna memiliki panjang gelombang dan sudut pembiasan berbeda.',
  },
  {
    id: 5,
    type: 'pg',
    topic: 'Struktur Teks: Pernyataan Umum',
    difficulty: 'Mudah',
    text: `Bacalah kutipan teks berikut!
"Banjir merupakan fenomena alam berupa meluapnya air yang menggenangi daratan yang biasanya kering. Peristiwa ini dapat timbul akibat curah hujan yang sangat tinggi maupun akibat ulah manusia yang merusak resapan air."

Bagian struktur teks eksplanasi pada paragraf di atas adalah...`,
    options: [
      { id: 'A', text: 'Pernyataan Umum (Pembuka)' },
      { id: 'B', text: 'Deretan Penjelas (Urutan Sebab-Akibat)' },
      { id: 'C', text: 'Interpretasi (Ulasan/Simpulan)' },
      { id: 'D', text: 'Koda (Pesan Moral Dongeng)' },
    ],
    correctAnswer: 'A',
    explanation:
      'Paragraf tersebut berisi definisi dan gambaran awal pengenalan fenomena banjir, sehingga termasuk ke dalam bagian Pernyataan Umum (Pembuka).',
  },
  {
    id: 6,
    type: 'pg',
    topic: 'Struktur Teks: Deretan Penjelas',
    difficulty: 'Sedang',
    text: `Perhatikan kutipan teks eksplanasi berikut!
"Saat lempeng samudera dan benua bertumbukan di dasar laut, terjadi dislokasi atau patahan mendadak. Hal ini menyebabkan kolom air laut di atasnya terangkat secara vertikal. Akibatnya, timbullah gelombang air laut berkecapatan tinggi yang merambat menuju daratan."

Kutipan tersebut tergolong bagian struktur...`,
    options: [
      { id: 'A', text: 'Pernyataan umum' },
      { id: 'B', text: 'Deretan penjelas' },
      { id: 'C', text: 'Interpretasi' },
      { id: 'D', text: 'Daftar pustaka' },
    ],
    correctAnswer: 'B',
    explanation:
      'Bagian deretan penjelas berisi uraian mendalam mengenai urutan rangkaian proses dan hubungan sebab-akibat terjadinya gelombang tsunami.',
  },
  {
    id: 7,
    type: 'pg',
    topic: 'Struktur Teks: Interpretasi',
    difficulty: 'Sedang',
    text: `Bacalah paragraf berikut!
"Oleh karena itu, masyarakat di daerah rawan gempa hendaknya senantiasa waspada dan memahami langkah mitigasi penyelamatan diri saat terjadi bencana. Edukasi mitigasi terbukti mampu menekan jumlah korban jiwa secara signifikan."

Paragraf penutup di atas dalam struktur teks eksplanasi dinamakan...`,
    options: [
      { id: 'A', text: 'Pernyataan umum' },
      { id: 'B', text: 'Deretan penjelas' },
      { id: 'C', text: 'Interpretasi' },
      { id: 'D', text: 'Orientasi tokoh' },
    ],
    correctAnswer: 'C',
    explanation:
      'Interpretasi merupakan bagian penutup teks eksplanasi yang memuat kesimpulan, intisari, pandangan, atau saran ulasan penulis terkait fenomena yang telah dijelaskan.',
  },
  {
    id: 8,
    type: 'pg',
    topic: 'Bagan Struktur Teks Eksplanasi',
    difficulty: 'Mudah',
    text: `Perhatikan bagan struktur teks eksplanasi berikut!

Urutan struktur pembangun teks eksplanasi yang tepat dari awal hingga akhir adalah...`,
    imageSvg: `<svg viewBox="0 0 520 180" class="w-full max-w-lg h-auto mx-auto" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="520" height="180" rx="12" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5" />
  <!-- Kotak 1: Pernyataan Umum -->
  <g transform="translate(20, 35)">
    <rect x="0" y="0" width="135" height="100" rx="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="2" />
    <rect x="15" y="12" width="28" height="24" rx="6" fill="#3b82f6" />
    <text x="29" y="29" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">1</text>
    <text x="68" y="55" font-size="12" font-weight="bold" fill="#1e3a8a" text-anchor="middle">Pernyataan</text>
    <text x="68" y="73" font-size="12" font-weight="bold" fill="#1e3a8a" text-anchor="middle">Umum</text>
    <text x="68" y="92" font-size="9" fill="#64748b" text-anchor="middle">Pengenalan Topik</text>
  </g>
  <!-- Panah 1 -->
  <path d="M 165 85 L 185 85" stroke="#3b82f6" stroke-width="3" stroke-linecap="round" />
  <polygon points="190,85 182,80 182,90" fill="#3b82f6" />
  <!-- Kotak 2: Deretan Penjelas -->
  <g transform="translate(195, 35)">
    <rect x="0" y="0" width="140" height="100" rx="10" fill="#ecfdf5" stroke="#10b981" stroke-width="2" />
    <rect x="15" y="12" width="28" height="24" rx="6" fill="#10b981" />
    <text x="29" y="29" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">2</text>
    <text x="70" y="55" font-size="12" font-weight="bold" fill="#064e3b" text-anchor="middle">Deretan</text>
    <text x="70" y="73" font-size="12" font-weight="bold" fill="#064e3b" text-anchor="middle">Penjelas</text>
    <text x="70" y="92" font-size="9" fill="#047857" text-anchor="middle">Sebab - Akibat</text>
  </g>
  <!-- Panah 2 -->
  <path d="M 345 85 L 365 85" stroke="#10b981" stroke-width="3" stroke-linecap="round" />
  <polygon points="370,85 362,80 362,90" fill="#10b981" />
  <!-- Kotak 3: Interpretasi -->
  <g transform="translate(375, 35)">
    <rect x="0" y="0" width="125" height="100" rx="10" fill="#fffbeb" stroke="#f59e0b" stroke-width="2" />
    <rect x="15" y="12" width="28" height="24" rx="6" fill="#f59e0b" />
    <text x="29" y="29" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">3</text>
    <text x="63" y="60" font-size="12" font-weight="bold" fill="#78350f" text-anchor="middle">Interpretasi</text>
    <text x="63" y="85" font-size="9" fill="#b45309" text-anchor="middle">Ulasan / Simpulan</text>
  </g>
</svg>`,
    options: [
      { id: 'A', text: 'Interpretasi → Pernyataan Umum → Deretan Penjelas' },
      { id: 'B', text: 'Pernyataan Umum → Deretan Penjelas → Interpretasi' },
      { id: 'C', text: 'Deretan Penjelas → Interpretasi → Orientasi' },
      { id: 'D', text: 'Pernyataan Umum → Resolusi → Komplikasi' },
    ],
    correctAnswer: 'B',
    explanation:
      'Struktur baku teks eksplanasi secara kronologis terdiri atas: (1) Pernyataan Umum (pengenalan fenomena), (2) Deretan Penjelas (penjelasan sebab-akibat), dan (3) Interpretasi (ulasan/kesimpulan penutup).',
  },
  {
    id: 9,
    type: 'pg',
    topic: 'Kaidah Kebahasaan: Konjungsi Kausalitas',
    difficulty: 'Mudah',
    text: `Perhatikan kalimat berikut!
"Tanah di lereng perbukitan menjadi gembur dan kehilangan daya ikatnya (...) penebangan pohon secara liar terus dilakukan."

Konjungsi kausalitas (sebab-akibat) yang paling tepat untuk melengkapi bagian rumpang di atas adalah...`,
    options: [
      { id: 'A', text: 'kemudian' },
      { id: 'B', text: 'karena' },
      { id: 'C', text: 'setelah itu' },
      { id: 'D', text: 'walaupun' },
    ],
    correctAnswer: 'B',
    explanation:
      'Kata "karena" merupakan konjungsi kausalitas yang menjelaskan hubungan sebab: tanah perbukitan kehilangan daya ikatnya disebabkan oleh penebangan pohon secara liar.',
  },
  {
    id: 10,
    type: 'pg',
    topic: 'Kaidah Kebahasaan: Konjungsi Kronologis',
    difficulty: 'Mudah',
    text: 'Kalimat berikut yang memuat konjungsi kronologis (hubungan urutan waktu) adalah...',
    options: [
      { id: 'A', text: 'Suhu bumi meningkat drastis akibat emisi gas buang kendaraan.' },
      { id: 'B', text: 'Uap air berkumpul menjadi awan, kemudian tertiup angin menuju pegunungan.' },
      { id: 'C', text: 'Gempa bumi tektonik terjadi karena adanya pergeseran lempeng litosfer.' },
      { id: 'D', text: 'Banjir bandang melanda pemukiman sehingga warga harus mengungsi.' },
    ],
    correctAnswer: 'B',
    explanation:
      'Kata "kemudian" pada opsi B adalah konjungsi kronologis yang menyatakan urutan peristiwa setelah uap air berkumpul menjadi awan.',
  },
  {
    id: 11,
    type: 'pg',
    topic: 'Kaidah Kebahasaan: Kata Kerja Pasif',
    difficulty: 'Sedang',
    text: 'Ciri kebahasaan teks eksplanasi banyak menggunakan kata kerja pasif. Kalimat berikut yang menggunakan kata kerja pasif adalah...',
    options: [
      { id: 'A', text: 'Matahari memancarkan sinar hangat ke seluruh permukaan bumi.' },
      { id: 'B', text: 'Masyarakat menanam pohon bakau untuk mencegah abrasi pantai.' },
      { id: 'C', text: 'Pelangi terbentuk akibat cahaya matahari yang dibiaskan oleh tetesan air.' },
      { id: 'D', text: 'Para peneliti mengamati getaran seismik menggunakan alat canggih.' },
    ],
    correctAnswer: 'C',
    explanation:
      'Kata "terbentuk" dan "dibiaskan" merupakan bentuk kata kerja pasif (ditandai dengan awalan ter- dan di-) yang lazim digunakan untuk menjelaskan fenomena alam.',
  },
  {
    id: 12,
    type: 'pg',
    topic: 'Makna Istilah Ilmiah',
    difficulty: 'Mudah',
    text: 'Di dalam teks eksplanasi tentang terjadinya hujan, terdapat istilah ilmiah "Kondensasi". Arti dari istilah tersebut adalah proses...',
    options: [
      { id: 'A', text: 'Perubahan wujud benda padat menjadi gas' },
      { id: 'B', text: 'Pengembunan atau perubahan uap air menjadi titik-titik air cair' },
      { id: 'C', text: 'Peresapan air ke dalam pori-pori lapisan tanah' },
      { id: 'D', text: 'Penguapan air dari jaringan tubuh tumbuhan' },
    ],
    correctAnswer: 'B',
    explanation:
      'Kondensasi adalah proses perubahan wujud uap air menjadi cairan (pengembunan) akibat penurunan suhu udara di atmosfer sehingga membentuk gumpalan awan.',
  },
  {
    id: 13,
    type: 'pg',
    topic: 'Menganalisis Informasi Gambar & Teks Vulkanisme',
    difficulty: 'Sedang',
    text: `Perhatikan gambar irisan penampang gunung berapi berikut!

Magma cair yang berpijar dari dalam perut bumi terdorong naik melalui saluran pipa kepundan karena adanya tekanan gas yang sangat kuat. Material batuan pijar, awan panas, dan abu vulkanik menyembur keluar melalui mulut kawah.

Bagian saluran utama tempat naiknya magma menuju kawah (nomor 2) disebut...`,
    imageSvg: `<svg viewBox="0 0 520 250" class="w-full max-w-lg h-auto mx-auto" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="520" height="250" rx="12" fill="#f1f5f9" />
  <!-- Awan Panas Vulkanik -->
  <g transform="translate(230, 20)">
    <ellipse cx="30" cy="30" rx="48" ry="24" fill="#64748b" opacity="0.9" />
    <circle cx="10" cy="20" r="24" fill="#475569" />
    <circle cx="50" cy="18" r="28" fill="#334155" />
    <text x="30" y="35" font-size="10" font-weight="bold" fill="#f8fafc" text-anchor="middle">Awan Abu Vulkanik</text>
  </g>
  <!-- Tubuh Gunung -->
  <polygon points="90,210 260,75 430,210" fill="#78350f" stroke="#451a03" stroke-width="2" />
  <polygon points="120,210 260,75 400,210" fill="#92400e" />
  <!-- Kawah Kepundan (Nomor 1) -->
  <ellipse cx="260" cy="75" rx="22" ry="7" fill="#dc2626" />
  <!-- Pipa Magma / Saluran Utama (Nomor 2) -->
  <path d="M 252 75 L 250 200 L 270 200 L 268 75 Z" fill="#ef4444" stroke="#b91c1c" stroke-width="1.5" />
  <!-- Dapur Magma (Nomor 3) -->
  <ellipse cx="260" cy="220" rx="65" ry="22" fill="#dc2626" stroke="#991b1b" stroke-width="2" />
  <text x="260" y="224" font-size="11" font-weight="bold" fill="#fef2f2" text-anchor="middle">3. Dapur Magma</text>
  <!-- Label & Panah Saluran Pipa (Nomor 2) -->
  <rect x="330" y="130" width="135" height="26" rx="6" fill="#ffffff" stroke="#ef4444" stroke-width="1.5" />
  <text x="397" y="147" font-size="11" font-weight="bold" fill="#991b1b" text-anchor="middle">2. Pipa Kepundan</text>
  <path d="M 330 143 L 275 143" stroke="#ef4444" stroke-width="2" stroke-dasharray="3,3" />
  <!-- Label Kawah Puncak (Nomor 1) -->
  <rect x="70" y="55" width="120" height="26" rx="6" fill="#ffffff" stroke="#f59e0b" stroke-width="1.5" />
  <text x="130" y="72" font-size="11" font-weight="bold" fill="#b45309" text-anchor="middle">1. Kawah Puncak</text>
  <path d="M 190 68 L 240 73" stroke="#f59e0b" stroke-width="2" stroke-dasharray="3,3" />
</svg>`,
    options: [
      { id: 'A', text: 'Pipa kepundan (saluran magma)' },
      { id: 'B', text: 'Lapisan atmosfer' },
      { id: 'C', text: 'Palung samudera' },
      { id: 'D', text: 'Sungai lahar dingin' },
    ],
    correctAnswer: 'A',
    explanation:
      'Saluran utama tempat mengalirnya magma panas dari dapur magma bawah tanah menuju lubang kawah di puncak gunung disebut pipa kepundan.',
  },
  {
    id: 14,
    type: 'pg',
    topic: 'Penggunaan Kata Tanya (Adiksimba)',
    difficulty: 'Mudah',
    text: `Perhatikan kalimat jawaban berikut!
"Tsunami terjadi karena adanya pergeseran lempeng bawah laut secara mendadak yang memicu kenaikan volume kolom air laut dalam jumlah masif."

Kata tanya yang tepat untuk memperoleh jawaban di atas adalah...`,
    options: [
      { id: 'A', text: 'Di mana tsunami pernah terjadi?' },
      { id: 'B', text: 'Mengapa bencana tsunami dapat terjadi?' },
      { id: 'C', text: 'Siapa yang pertama kali mencatat istilah tsunami?' },
      { id: 'D', text: 'Kapan tsunami terakhir melanda Indonesia?' },
    ],
    correctAnswer: 'B',
    explanation:
      'Kata tanya "mengapa" digunakan untuk menanyakan penyebab atau alasan terjadinya suatu peristiwa/fenomena.',
  },
  {
    id: 15,
    type: 'pg',
    topic: 'Fakta vs Opini dalam Teks Eksplanasi',
    difficulty: 'Sedang',
    text: 'Kalimat berikut yang merupakan FAKTA dan layak dicantumkan dalam teks eksplanasi ilmiah adalah...',
    options: [
      { id: 'A', text: 'Gerhana matahari total sepertinya akan menjadi tontonan yang sangat menakutkan bagi anak-anak.' },
      { id: 'B', text: 'Menurut saya, fenomena aurora sebaiknya terjadi juga di langit wilayah khatulistiwa.' },
      { id: 'C', text: 'Air mendidih pada suhu 100 derajat Celcius pada tekanan udara standar 1 atmosfer.' },
      { id: 'D', text: 'Bunga bangkai mungkin merupakan tumbuhan terindah yang ada di hutan tropis.' },
    ],
    correctAnswer: 'C',
    explanation:
      'Opsi C adalah fakta ilmiah teruji (dapat diverifikasi secara objektif). Pilihan A, B, dan D mengandung kata opini subjektif ("sepertinya", "menurut saya", "mungkin").',
  },
  {
    id: 16,
    type: 'pg',
    topic: 'Kalimat Efektif dalam Teks Eksplanasi',
    difficulty: 'Sedang',
    text: `Bacalah kalimat rancu berikut!
"Banjir yang mana merendam pemukiman itu adalah disebabkan karena oleh curah hujan yang teramat sangat deras sekali."

Perbaikan kalimat di atas agar menjadi kalimat efektif yang baku dan hemat kata adalah...`,
    options: [
      { id: 'A', text: 'Banjir yang merendam pemukiman disebabkan oleh curah hujan yang sangat deras.' },
      { id: 'B', text: 'Banjir merendam pemukiman karena oleh sebab hujan teramat sangat deras.' },
      { id: 'C', text: 'Disebabkan karena curah hujan deras sekali yang mana banjir merendam warga.' },
      { id: 'D', text: 'Curah hujan deras sekali banjir merendam pemukiman yang mana warga basah.' },
    ],
    correctAnswer: 'A',
    explanation:
      'Kalimat A efektif karena menghilangkan kata berulang yang mubazir ("disebabkan karena oleh", "teramat sangat deras sekali") dan kata penghubung tidak baku ("yang mana").',
  },
  {
    id: 17,
    type: 'pg',
    topic: 'Eksplanasi Fenomena Sosial',
    difficulty: 'Mudah',
    text: `Selain fenomena alam, teks eksplanasi juga dapat menjelaskan proses terjadinya fenomena sosial. Contoh topik fenomena sosial yang tepat adalah...`,
    options: [
      { id: 'A', text: 'Terjadinya gerhana bulan total' },
      { id: 'B', text: 'Siklus hidup kupu-kupu melalui metamorfosis' },
      { id: 'C', text: 'Faktor pendorong tingginya angka pengangguran di perkotaan' },
      { id: 'D', text: 'Proses pembentukan batu bara dari fosil purba' },
    ],
    correctAnswer: 'C',
    explanation:
      'Pengangguran di perkotaan merupakan fenomena sosial yang terjadi di tengah kehidupan masyarakat, sedangkan gerhana bulan, metamorfosis, dan pembentukan batu bara adalah fenomena alam.',
  },
  {
    id: 18,
    type: 'pg',
    topic: 'Analisis Kronologi Terjadinya Tsunami',
    difficulty: 'Sedang',
    text: `Cermati gambar skema terjadinya gelombang tsunami berikut!

Gelombang tsunami di tengah samudera memiliki panjang gelombang ratusan kilometer dengan tinggi permukaan yang relatif rendah. Namun, saat mendekati garis pantai yang dangkal, kecepatan gelombang berkurang drastis sehingga energinya tertekan ke atas dan memicu...`,
    imageSvg: `<svg viewBox="0 0 520 240" class="w-full max-w-lg h-auto mx-auto" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="520" height="240" rx="12" fill="#e0f2fe" />
  <!-- Dasar Laut & Daratan Landai -->
  <path d="M 0 170 L 220 180 L 400 120 L 520 80 L 520 240 L 0 240 Z" fill="#94a3b8" />
  <path d="M 400 120 L 520 80 L 520 240 L 400 240 Z" fill="#86efac" />
  <polygon points="460,78 470,55 480,78" fill="#15803d" />
  <polygon points="490,75 500,50 510,75" fill="#15803d" />
  <!-- Patahan Gempa di Dasar Laut -->
  <g stroke="#ef4444" stroke-width="3">
    <line x1="100" y1="170" x2="90" y2="225" />
    <line x1="100" y1="170" x2="135" y2="175" />
  </g>
  <polygon points="85,150 95,140 105,150" fill="#ef4444" />
  <text x="95" y="135" font-size="10" font-weight="bold" fill="#b91c1c" text-anchor="middle">Dislokasi Sesar</text>
  <!-- Gelombang Laut Merambat Menuju Pantai -->
  <!-- 1. Tengah laut (gelombang rendah) -->
  <path d="M 0 135 Q 60 130 120 135 T 240 135" fill="none" stroke="#0284c7" stroke-width="3" />
  <path d="M 0 135 Q 60 130 120 135 T 240 135 L 240 180 L 0 170 Z" fill="#38bdf8" opacity="0.6" />
  <!-- 2. Dekat Pantai (gelombang meninggi secara vertikal) -->
  <path d="M 240 135 C 290 135, 330 80, 365 75 C 385 70, 400 110, 430 115" fill="none" stroke="#0284c7" stroke-width="4" />
  <path d="M 240 135 C 290 135, 330 80, 365 75 C 385 70, 400 110, 430 115 L 430 240 L 240 240 Z" fill="#0284c7" opacity="0.5" />
  <!-- Panah & Label -->
  <text x="365" y="55" font-size="12" font-weight="bold" fill="#0369a1" text-anchor="middle">Dinding Gelombang Raksasa</text>
  <text x="465" y="115" font-size="11" font-weight="bold" fill="#166534">Daratan / Pesisir</text>
  <text x="140" y="160" font-size="10" fill="#0369a1">Gelombang merambat cepat</text>
</svg>`,
    options: [
      { id: 'A', text: 'Dinding gelombang air yang menjulang tinggi dan menyapu daratan' },
      { id: 'B', text: 'Air laut mengering selamanya hingga menjadi gurun pasir' },
      { id: 'C', text: 'Pusaran air yang tenang tanpa menimbulkan arus bahaya' },
      { id: 'D', text: 'Penurunan suhu air laut menjadi gumpalan es padat' },
    ],
    correctAnswer: 'A',
    explanation:
      'Ketika gelombang tsunami mencapai perairan dangkal, gesekan dasar laut memperlambat laju gelombang, tetapi energi kinetiknya terkonversi menjadi ketinggian gelombang (shoaling effect) hingga menjadi dinding air raksasa yang menerjang pesisir.',
  },
  {
    id: 19,
    type: 'pg',
    topic: 'Makna Kosakata Teknis Geologi',
    difficulty: 'Sedang',
    text: 'Dalam teks eksplanasi tentang gempa bumi, titik pusat terjadinya getaran gempa yang berada jauh di dalam perut bumi dinamakan...',
    options: [
      { id: 'A', text: 'Episentrum' },
      { id: 'B', text: 'Hiposentrum' },
      { id: 'C', text: 'Magnitudo' },
      { id: 'D', text: 'Barometer' },
    ],
    correctAnswer: 'B',
    explanation:
      'Hiposentrum (fokus gempa) adalah titik sumber getaran gempa di dalam lapisan bumi, sedangkan episentrum adalah titik di permukaan bumi yang tepat tegak lurus di atas hiposentrum.',
  },
  {
    id: 20,
    type: 'pg',
    topic: 'Menyusun Urutan Kalimat Acak Menjadi Paragraf Eksplanasi',
    difficulty: 'Sedang',
    text: `Cermati kalimat-kalimat acak berikut!
(1) Setelah awan mencapai titik jenuh dan tak mampu menampung berat air, jatuhlah butir-butir hujan ke tanah.
(2) Panas matahari memicu penguapan air di permukaan bumi menjadi uap air.
(3) Uap air yang membumbung tinggi mengalami pendinginan dan memadat membentuk awan.
(4) Air hujan tersebut kemudian meresap ke dalam tanah dan mengalir kembali ke laut.

Urutan yang tepat agar menjadi teks eksplanasi proses siklus hujan yang padu adalah...`,
    options: [
      { id: 'A', text: '(2) - (3) - (1) - (4)' },
      { id: 'B', text: '(3) - (2) - (4) - (1)' },
      { id: 'C', text: '(2) - (1) - (3) - (4)' },
      { id: 'D', text: '(1) - (4) - (2) - (3)' },
    ],
    correctAnswer: 'A',
    explanation:
      'Urutan logis siklus hujan: (2) Penguapan air oleh matahari -> (3) Uap air memadat membentuk awan -> (1) Butir hujan jatuh setelah awan jenuh -> (4) Air meresap dan mengalir kembali ke laut.',
  },
  {
    id: 21,
    type: 'pg',
    topic: 'Menemukan Gagasan Pokok Paragraf',
    difficulty: 'Sedang',
    text: `Bacalah paragraf berikut!
"Aurora merupakan pancaran cahaya spektakuler yang menari-nari di langit malam kawasan kutub. Fenomena optik ini tercipta akibat interaksi antara partikel bermuatan listrik dari angin matahari dengan partikel gas di atmosfer bumi, seperti oksigen dan nitrogen. Tumbukan partikel tersebut melepaskan energi berupa cahaya warna-warni yang memesona."

Gagasan pokok paragraf di atas adalah...`,
    options: [
      { id: 'A', text: 'Kawasan kutub bumi sangat dingin dan gelap sepanjang tahun' },
      { id: 'B', text: 'Penyebab terciptanya fenomena cahaya aurora di kutub' },
      { id: 'C', text: 'Kandungan gas oksigen dan nitrogen di langit antariksa' },
      { id: 'D', text: 'Bahaya partikel angin matahari bagi astronot' },
    ],
    correctAnswer: 'B',
    explanation:
      'Seluruh kalimat dalam paragraf tersebut berfokus menjelaskan asal-usul atau penyebab terciptanya fenomena pancaran cahaya aurora di wilayah kutub.',
  },
  {
    id: 22,
    type: 'pg',
    topic: 'Proses Terjadinya Gerhana Bulan',
    difficulty: 'Sedang',
    text: `Perhatikan posisi Matahari, Bumi, dan Bulan pada diagram gerhana bulan berikut!

Gerhana bulan dapat terjadi karena cahaya matahari ke arah bulan terhalangi oleh bumi. Hal ini terjadi ketika Matahari, Bumi, dan Bulan berada pada satu garis lurus, sehingga bayangan inti gelap bumi yang menutupi bulan disebut...`,
    imageSvg: `<svg viewBox="0 0 520 220" class="w-full max-w-lg h-auto mx-auto" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="520" height="220" rx="12" fill="#090d16" />
  <!-- Matahari -->
  <circle cx="65" cy="110" r="45" fill="#f59e0b" stroke="#fcd34d" stroke-width="3" />
  <text x="65" y="115" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">Matahari</text>
  <!-- Garis Cahaya Matahari ke Bumi -->
  <polygon points="65,65 260,86 480,95 480,125 260,134 65,155" fill="#fef08a" opacity="0.12" />
  <!-- Kerucut Bayangan Umbra (Inti Gelap) -->
  <polygon points="260,86 480,102 480,118 260,134" fill="#000000" opacity="0.85" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="3,3" />
  <!-- Kerucut Penumbra -->
  <polygon points="260,86 480,60 480,160 260,134" fill="#475569" opacity="0.2" />
  <!-- Bumi (Tengah) -->
  <circle cx="260" cy="110" r="24" fill="#0284c7" stroke="#38bdf8" stroke-width="2" />
  <ellipse cx="256" cy="108" rx="8" ry="14" fill="#22c55e" opacity="0.7" />
  <text x="260" y="148" font-size="11" font-weight="bold" fill="#7dd3fc" text-anchor="middle">Bumi</text>
  <!-- Bulan Masuk ke Bayangan Umbra -->
  <circle cx="430" cy="110" r="12" fill="#b91c1c" stroke="#f87171" stroke-width="1.5" />
  <text x="430" y="90" font-size="11" font-weight="bold" fill="#fca5a5" text-anchor="middle">Bulan</text>
  <text x="430" y="140" font-size="10" font-weight="bold" fill="#ef4444" text-anchor="middle">Di area Umbra</text>
  <!-- Label Umbra -->
  <rect x="330" y="25" width="110" height="24" rx="5" fill="#1e293b" stroke="#ef4444" stroke-width="1" />
  <text x="385" y="41" font-size="10" font-weight="bold" fill="#fca5a5" text-anchor="middle">Bayangan Umbra</text>
  <line x1="385" y1="50" x2="385" y2="105" stroke="#ef4444" stroke-width="1" stroke-dasharray="2,2" />
</svg>`,
    options: [
      { id: 'A', text: 'Umbra' },
      { id: 'B', text: 'Penumbra' },
      { id: 'C', text: 'Atmosfer' },
      { id: 'D', text: 'Kromosfer' },
    ],
    correctAnswer: 'A',
    explanation:
      'Umbra adalah daerah bayangan inti paling gelap di mana seluruh sumber cahaya terhalangi total oleh bumi. Ketika bulan masuk ke dalam area umbra bumi, terjadi fenomena gerhana bulan total.',
  },
  {
    id: 23,
    type: 'pg',
    topic: 'Menentukan Simpulan Teks Eksplanasi',
    difficulty: 'Sedang',
    text: `Bacalah teks berikut!
"Penggunaan kantong plastik sekali pakai membutuhkan waktu ratusan tahun untuk dapat terurai secara alami di tanah. Tumpukan sampah plastik yang menyumbat aliran sungai dan selokan menjadi pemicu utama timbulnya banjir genangan saat musim penghujan tiba di kawasan perkotaan."

Simpulan yang paling tepat dari isi teks di atas adalah...`,
    options: [
      { id: 'A', text: 'Sampah plastik mudah hancur dalam hitungan minggu di dalam air sungai.' },
      { id: 'B', text: 'Penyumbatan saluran air oleh sampah plastik yang sulit terurai memicu banjir perkotaan.' },
      { id: 'C', text: 'Masyarakat kota lebih suka membuang sampah di selokan daripada di tempat sampah.' },
      { id: 'D', text: 'Banjir perkotaan hanya dapat diatasi dengan membuat sungai buatan baru.' },
    ],
    correctAnswer: 'B',
    explanation:
      'Simpulan merangkum inti sebab-akibat: sifat plastik yang sulit terurai menyumbat saluran air, sehingga menjadi pemicu terjadinya bencana banjir genangan di kawasan perkotaan.',
  },
  {
    id: 24,
    type: 'pg',
    topic: 'Tujuan Penulisan Teks Eksplanasi',
    difficulty: 'Mudah',
    text: 'Tujuan utama seorang penulis menyusun teks eksplanasi ilmiah bagi pembaca adalah untuk...',
    options: [
      { id: 'A', text: 'Menghibur pembaca dengan cerita jenaka' },
      { id: 'B', text: 'Menjelaskan fakta dan proses terjadinya suatu fenomena secara gamblang dan logis' },
      { id: 'C', text: 'Mempromosikan barang dagangan dengan diskon menarik' },
      { id: 'D', text: 'Menceritakan riwayat hidup sang penulis dari masa kecil' },
    ],
    correctAnswer: 'B',
    explanation:
      'Tujuan teks eksplanasi adalah memberikan penjelasan faktual dan logis kepada pembaca mengenai latar belakang serta proses terjadinya suatu peristiwa.',
  },
  {
    id: 25,
    type: 'pg',
    topic: 'Penggunaan Kata Baku dalam Teks Eksplanasi',
    difficulty: 'Sedang',
    text: `Perhatikan kalimat berikut!
"Aktivitas volkanik di zona subduksi itu sangat aktip sehingga memicu terjadinya gempa tektonik."

Penulisan kata baku yang tepat untuk menggantikan dua kata bergaris bawah ("volkanik" dan "aktip") menurut KBBI adalah...`,
    options: [
      { id: 'A', text: 'Vulkanis dan aktip' },
      { id: 'B', text: 'Vulkanik dan aktif' },
      { id: 'C', text: 'Polkanik dan aktif' },
      { id: 'D', text: 'Vulkanik dan aktip' },
    ],
    correctAnswer: 'B',
    explanation:
      'Menurut Pedoman Umum Ejaan Bahasa Indonesia (PUEBI) dan KBBI, bentuk kata baku yang tepat adalah "vulkanik" dan "aktif".',
  },

  // =========================================================================
  // BAGIAN 2: PILIHAN GANDA KOMPLEKS (PGK: 5 BUTIR SOAL: NO. 26 - 30)
  // Setiap soal memiliki 3 pilihan jawaban (A, B, C).
  // Kemungkinan terdapat lebih dari 1 pilihan jawaban benar.
  // =========================================================================
  {
    id: 26,
    type: 'pgk',
    topic: 'Karakteristik Teks Eksplanasi',
    difficulty: 'Sedang',
    text: `Pilihlah pernyataan yang merupakan ciri-ciri utama dari sebuah teks eksplanasi ilmiah! (Jawaban benar bisa lebih dari satu)`,
    options: [
      { id: 'A', text: 'Memuat informasi nyata (faktual) yang dapat dipertanggungjawabkan secara keilmuan' },
      { id: 'B', text: 'Memuat urutan hubungan sebab-akibat (kausalitas) dan kronologis peristiwa' },
      { id: 'C', text: 'Menggunakan tokoh binatang yang dapat berbicara layaknya manusia seperti fabel' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      'Ciri teks eksplanasi memuat fakta ilmiah (A) dan tersusun atas pola hubungan sebab-akibat serta kronologi (B). Pilihan C merupakan ciri cerita fabel/fiksi.',
  },
  {
    id: 27,
    type: 'pgk',
    topic: 'Konjungsi Kausalitas dalam Eksplanasi',
    difficulty: 'Sedang',
    text: `Manakah di antara kalimat berikut yang memuat konjungsi kausalitas (sebab-akibat)? (Jawaban benar bisa lebih dari satu)`,
    options: [
      { id: 'A', text: 'Tanaman layu dan mengering karena tanah kekurangan pasokan air tanah.' },
      { id: 'B', text: 'Para siswa memasuki laboratorium setelah bel tanda masuk berbunyi nyaring.' },
      { id: 'C', text: 'Erosi tanah terus terjadi di lereng bukit sehingga memicu terjadinya tanah longsor.' },
    ],
    correctAnswer: ['A', 'C'],
    explanation:
      'Kalimat A menggunakan konjungsi kausalitas "karena", dan kalimat C menggunakan konjungsi kausalitas "sehingga". Kalimat B menggunakan konjungsi temporal "setelah".',
  },
  {
    id: 28,
    type: 'pgk',
    topic: 'Fakta Ilmiah Terjadinya Hujan Asam',
    difficulty: 'Sukar',
    text: `Perhatikan diagram proses terjadinya hujan asam berikut!

Berdasarkan ilustrasi dan pemahaman teks eksplanasi, manakah pernyataan yang benar mengenai proses terjadinya hujan asam? (Jawaban benar bisa lebih dari satu)`,
    imageSvg: `<svg viewBox="0 0 520 240" class="w-full max-w-lg h-auto mx-auto" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="520" height="240" rx="12" fill="#f8fafc" />
  <!-- Pabrik & Polutan Emisi -->
  <g transform="translate(40, 120)">
    <rect x="0" y="30" width="80" height="60" fill="#475569" />
    <rect x="20" y="5" width="16" height="30" fill="#334155" />
    <rect x="50" y="15" width="14" height="20" fill="#334155" />
    <text x="40" y="105" font-size="11" font-weight="bold" fill="#334155" text-anchor="middle">Asap Industri</text>
  </g>
  <!-- Asap Polutan Naik: SO2 & NOx -->
  <path d="M 68 120 C 70 80, 140 70, 190 60" fill="none" stroke="#ef4444" stroke-width="3" stroke-dasharray="4,4" />
  <polygon points="195,59 184,55 186,65" fill="#ef4444" />
  <rect x="85" y="45" width="95" height="24" rx="5" fill="#fee2e2" stroke="#ef4444" stroke-width="1.2" />
  <text x="132" y="61" font-size="11" font-weight="bold" fill="#b91c1c" text-anchor="middle">Gas SO₂ &amp; NOₓ</text>
  <!-- Awan Bereaksi Asam -->
  <g transform="translate(210, 30)">
    <ellipse cx="60" cy="35" rx="50" ry="26" fill="#94a3b8" stroke="#64748b" stroke-width="2" />
    <circle cx="35" cy="25" r="25" fill="#64748b" />
    <circle cx="80" cy="25" r="28" fill="#475569" />
    <text x="60" y="38" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">Awan Asam</text>
  </g>
  <!-- Hujan Asam Turun Menimpa Pohon & Danau -->
  <g stroke="#dc2626" stroke-width="2.5" stroke-linecap="round">
    <line x1="280" y1="95" x2="275" y2="120" />
    <line x1="310" y1="95" x2="305" y2="120" />
    <line x1="340" y1="95" x2="335" y2="120" />
  </g>
  <!-- Pohon Mati Rusak -->
  <g transform="translate(350, 130)">
    <polygon points="40,20 40,80" stroke="#78350f" stroke-width="6" />
    <line x1="40" y1="40" x2="20" y2="25" stroke="#78350f" stroke-width="3" />
    <line x1="40" y1="55" x2="60" y2="40" stroke="#78350f" stroke-width="3" />
    <text x="40" y="98" font-size="10" font-weight="bold" fill="#991b1b" text-anchor="middle">Kerusakan Hutan</text>
  </g>
  <!-- Tanah & Danau Tercemar -->
  <path d="M 0 210 L 520 210 L 520 240 L 0 240 Z" fill="#65a30d" opacity="0.3" />
  <rect x="255" y="130" width="85" height="22" rx="4" fill="#fecaca" />
  <text x="297" y="145" font-size="10" font-weight="bold" fill="#991b1b" text-anchor="middle">Hujan Asam</text>
</svg>`,
    options: [
      { id: 'A', text: 'Gas buang belerang dioksida (SO₂) dan nitrogen oksida (NOₓ) bereaksi dengan uap air di atmosfer' },
      { id: 'B', text: 'Hujan asam dapat menyebabkan kerusakan pada vegetasi hutan dan mencemari ekosistem perairan' },
      { id: 'C', text: 'Hujan asam sangat bermanfaat untuk menyuburkan cat kendaraan dan memperkuat struktur besi jembatan' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      'Hujan asam terbentuk dari reaksi gas polutan industri SO2 dan NOx dengan uap air (A) yang menghasilkan senyawa asam perusak tanaman dan ekosistem (B). Opsi C keliru karena asam justru mempercepat karat dan merusak cat.',
  },
  {
    id: 29,
    type: 'pgk',
    topic: 'Bagian Struktur Fisik Teks Eksplanasi',
    difficulty: 'Mudah',
    text: `Manakah di antara bagian berikut yang TERMASUK dalam struktur baku teks eksplanasi? (Jawaban benar bisa lebih dari satu)`,
    options: [
      { id: 'A', text: 'Klimaks pertikaian tokoh utama' },
      { id: 'B', text: 'Deretan penjelas (rangkaian proses sebab-akibat)' },
      { id: 'C', text: 'Pernyataan umum (gambaran umum fenomena)' },
    ],
    correctAnswer: ['B', 'C'],
    explanation:
      'Struktur baku teks eksplanasi terdiri dari Pernyataan Umum (C), Deretan Penjelas (B), dan Interpretasi. Opsi A (klimaks tokoh) adalah bagian dari teks narasi / cerpen.',
  },
  {
    id: 30,
    type: 'pgk',
    topic: 'Pemilihan Topik Teks Eksplanasi Ilmiah',
    difficulty: 'Mudah',
    text: `Manakah topik berikut yang tepat dikembangkan menjadi teks eksplanasi ilmiah? (Jawaban benar bisa lebih dari satu)`,
    options: [
      { id: 'A', text: 'Proses terjadinya gerhana matahari cincin' },
      { id: 'B', text: 'Kisah kancil mencuri ketimun di kebun pak tani' },
      { id: 'C', text: 'Mekanisme terjadinya angin puting beliung' },
    ],
    correctAnswer: ['A', 'C'],
    explanation:
      'Topik A (gerhana matahari) dan C (puting beliung) adalah fenomena alam nyata yang dapat dijelaskan secara ilmiah. Opsi B adalah cerita dongeng fiksi.',
  },

  // =========================================================================
  // BAGIAN 3: PILIHAN GANDA KOMPLEKS KATEGORI (10 BUTIR SOAL: NO. 31 - 40)
  // Setiap soal menyajikan stimulus teks/situasi dan 3 pernyataan deskripsi.
  // Setiap pernyataan harus direspons dengan pilihan: Benar atau Salah.
  // =========================================================================
  {
    id: 31,
    type: 'pgk_kategori',
    topic: 'Proses Terjadinya Petir',
    difficulty: 'Sedang',
    text: `Cermati kutipan teks eksplanasi berikut!
"Petir merupakan kilatan listrik di atmosfer yang terjadi akibat pelepasan muatan listrik statis. Awan badai mengandung partikel air dan kristal es yang saling bergesekan, menyebabkan muatan negatif terkumpul di dasar awan dan muatan positif di puncak awan. Ketika perbedaan potensial antara awan dan bumi melebihi batas isolasi udara, terjadilah lompatan muatan listrik berupa kilatan cahaya berkecepatan tinggi yang disusul suara gemuruh guntur."

Tentukan apakah pernyataan berikut Benar atau Salah berdasarkan kutipan di atas!`,
    statements: [
      {
        id: 's1',
        text: 'Petir timbul karena adanya pelepasan muatan listrik statis akibat gesekan partikel di dalam awan badai.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Muatan listrik positif biasanya terkumpul di dasar awan dan muatan negatif di puncak awan.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Teks di atas merupakan bagian deretan penjelas karena memaparkan urutan proses terjadinya kilatan petir.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan 1 Benar (sesuai teks). Pernyataan 2 Salah (teks menyebutkan muatan negatif di dasar awan dan positif di puncak). Pernyataan 3 Benar (menjelaskan kronologi proses sebab-akibat petir).',
  },
  {
    id: 32,
    type: 'pgk_kategori',
    topic: 'Pemanasan Global (Global Warming)',
    difficulty: 'Sedang',
    text: `Bacalah stimulus teks eksplanasi berikut!
"Pemanasan global adalah kenaikan suhu rata-rata permukaan bumi akibat terperangkapnya radiasi panas matahari oleh gas rumah kaca seperti karbon dioksida (CO₂) dan metana. Akibatnya, lapisan es di kutub mencair lebih cepat sehingga menyebabkan permukaan air laut dunia terus naik dan mengancam pemukiman pesisir pantai."

Tentukan status kebenaran dari setiap pernyataan berikut!`,
    statements: [
      {
        id: 's1',
        text: 'Karbon dioksida dan gas metana merupakan contoh gas rumah kaca pemicu pemanasan global.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Mencairnya es kutub bumi berakibat langsung pada turunnya permukaan air laut global.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Hubungan sebab-akibat pada teks menunjukkan bahwa radiasi panas yang terperangkap memicu kenaikan suhu bumi.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan 1 Benar (CO2 dan metana tergolong gas rumah kaca). Pernyataan 2 Salah (mencairnya es kutub menaikkan permukaan air laut, bukan menurunkannya). Pernyataan 3 Benar (merupakan hubungan sebab-akibat utama teks).',
  },
  {
    id: 33,
    type: 'pgk_kategori',
    topic: 'Kaidah Kebahasaan Teks Eksplanasi',
    difficulty: 'Mudah',
    text: `Dalam menyusun teks eksplanasi, penulis harus mematuhi kaidah kebahasaan baku yang berlaku dalam bahasa Indonesia ilmiah.

Tentukan apakah pernyataan kaidah kebahasaan berikut Benar atau Salah!`,
    statements: [
      {
        id: 's1',
        text: 'Teks eksplanasi ilmiah banyak memanfaatkan istilah teknis keilmuan seperti evaporasi, seismik, dan fotosintesis.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Penulisan teks eksplanasi harus menggunakan gaya bahasa bermajas hiperbola dan dialog percakapan khayalan.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Kata kerja pasif seperti "dipengaruhi", "dihasilkan", dan "disebabkan" kerap digunakan dalam teks eksplanasi.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan 1 Benar (istilah teknis adalah ciri khas kebahasaan eksplanasi). Pernyataan 2 Salah (teks eksplanasi bersifat faktual dan objektif, bukan bermajas hiperbola atau fiksi). Pernyataan 3 Benar (fokus pada peristiwa/proses sehingga memakai verba pasif).',
  },
  {
    id: 34,
    type: 'pgk_kategori',
    topic: 'Analisis Diagram Gempa Bumi Tektonik',
    difficulty: 'Sedang',
    text: `Perhatikan diagram penampang terjadinya gempa bumi tektonik berikut!

Berdasarkan ilustrasi dan konsep teks eksplanasi geologi, tentukan kebenaran dari pernyataan berikut!`,
    imageSvg: `<svg viewBox="0 0 520 240" class="w-full max-w-lg h-auto mx-auto" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="520" height="240" rx="12" fill="#f8fafc" />
  <!-- Lapisan Kerak Bumi Kiri & Kanan -->
  <polygon points="20,100 240,120 220,220 20,220" fill="#cbd5e1" stroke="#475569" stroke-width="1.5" />
  <polygon points="245,115 500,90 500,220 235,220" fill="#94a3b8" stroke="#475569" stroke-width="1.5" />
  <!-- Garis Patahan / Sesar -->
  <line x1="240" y1="110" x2="230" y2="220" stroke="#dc2626" stroke-width="3" stroke-dasharray="4,4" />
  <!-- Titik Hiposentrum (Dalam Bumi) -->
  <circle cx="235" cy="180" r="10" fill="#ef4444" stroke="#991b1b" stroke-width="2" />
  <!-- Gelombang Seismik Merambat -->
  <circle cx="235" cy="180" r="28" fill="none" stroke="#ef4444" stroke-width="1.5" opacity="0.6" />
  <circle cx="235" cy="180" r="50" fill="none" stroke="#ef4444" stroke-width="1.5" opacity="0.4" />
  <circle cx="235" cy="180" r="75" fill="none" stroke="#ef4444" stroke-width="1" opacity="0.3" />
  <text x="140" y="185" font-size="11" font-weight="bold" fill="#b91c1c">Hiposentrum</text>
  <!-- Garis Tegak Lurus ke Episentrum -->
  <line x1="235" y1="180" x2="238" y2="114" stroke="#2563eb" stroke-width="2" stroke-dasharray="3,3" />
  <!-- Titik Episentrum (Permukaan) -->
  <circle cx="238" cy="114" r="8" fill="#2563eb" stroke="#1d4ed8" stroke-width="2" />
  <polygon points="238,98 245,108 231,108" fill="#1d4ed8" />
  <text x="320" y="112" font-size="11" font-weight="bold" fill="#1e40af">Episentrum (Permukaan)</text>
  <!-- Rumah Bergetar -->
  <g transform="translate(380, 65)">
    <polygon points="25,0 0,18 50,18" fill="#ea580c" />
    <rect x="8" y="18" width="34" height="25" fill="#f8fafc" stroke="#64748b" />
    <text x="25" y="-6" font-size="9" font-weight="bold" fill="#c2410c" text-anchor="middle">Pemukiman Warga</text>
  </g>
</svg>`,
    statements: [
      {
        id: 's1',
        text: 'Hiposentrum adalah titik pusat gempa yang berada di kedalaman lapisan bumi.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Episentrum adalah titik di permukaan bumi yang berada tepat tegak lurus di atas hiposentrum.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Gelombang gempa merambat semakin kuat jika jarak pemukiman semakin jauh dari titik episentrum.',
        correctAnswer: false,
      },
    ],
    explanation:
      'Pernyataan 1 Benar (definisi hiposentrum). Pernyataan 2 Benar (definisi episentrum). Pernyataan 3 Salah (semakin jauh jarak dari pusat episentrum, energi rambat gelombang gempa justru semakin melemah).',
  },
  {
    id: 35,
    type: 'pgk_kategori',
    topic: 'Fenomena Sosial: Masalah Sampah di Perkotaan',
    difficulty: 'Mudah',
    text: `Bacalah stimulus teks eksplanasi sosial berikut!
"Pertumbuhan penduduk yang pesat di perkotaan tanpa diimbangi kesadaran membuang sampah pada tempatnya menimbulkan persoalan lingkungan yang pelik. Saluran pembuangan air dan kali menjadi tersumbat oleh sampah anorganik. Saat hujan lebat tiba, air meluap membanjiri jalanan dan perumahan warga, sehingga mengganggu aktivitas ekonomi dan memicu wabah penyakit kulit serta pencernaan."

Tentukan status kebenaran dari setiap pernyataan berikut!`,
    statements: [
      {
        id: 's1',
        text: 'Pertumbuhan penduduk yang pesat diiringi perilaku buruk membuang sampah sembarangan menjadi faktor penyebab banjir.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Banjir luapan sampah hanya berdampak pada keindahan pemandangan tanpa mempengaruhi kondisi kesehatan warga.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Teks di atas memuat hubungan sebab-akibat fenomena sosial dalam kehidupan masyarakat perkotaan.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan 1 Benar (merupakan faktor penyebab utama dalam teks). Pernyataan 2 Salah (teks menegaskan banjir memicu wabah penyakit kulit dan pencernaan). Pernyataan 3 Benar (teks menguraikan sebab-akibat masalah sosial sampah).',
  },
  {
    id: 36,
    type: 'pgk_kategori',
    topic: 'Fungsi Struktur Teks Eksplanasi',
    difficulty: 'Sedang',
    text: `Setiap bagian struktur dalam teks eksplanasi memiliki fungsi spesifik dalam menyampaikan informasi ilmiah kepada pembaca.

Tentukan apakah pernyataan fungsi struktur berikut Benar atau Salah!`,
    statements: [
      {
        id: 's1',
        text: 'Bagian Pernyataan Umum berfungsi mengenalkan fenomena apa yang akan dijelaskan serta definisi awalnya.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Bagian Deretan Penjelas berfungsi memberikan rincian proses tahapan terjadinya fenomena secara logis dan kronologis.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Bagian Interpretasi wajib memuat konflik perselisihan antar tokoh cerita hingga berakhir bahagia.',
        correctAnswer: false,
      },
    ],
    explanation:
      'Pernyataan 1 Benar (fungsi pembuka/definisi). Pernyataan 2 Benar (fungsi inti sebab-akibat). Pernyataan 3 Salah (konflik tokoh cerita adalah ciri cerpen/dongeng; interpretasi berisi simpulan/ulasan penulis).',
  },
  {
    id: 37,
    type: 'pgk_kategori',
    topic: 'Langkah-Langkah Menyusun Teks Eksplanasi',
    difficulty: 'Sedang',
    text: `Cermati alur tahapan dalam menulis teks eksplanasi ilmiah berikut!

Tentukan apakah pernyataan mengenai tahapan penulisan teks eksplanasi berikut Benar atau Salah!`,
    imageSvg: `<svg viewBox="0 0 520 180" class="w-full max-w-lg h-auto mx-auto" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="520" height="180" rx="12" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.5" />
  <!-- Langkah 1 -->
  <g transform="translate(15, 30)">
    <circle cx="20" cy="20" r="16" fill="#2563eb" />
    <text x="20" y="25" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">1</text>
    <rect x="42" y="5" width="90" height="46" rx="6" fill="#ffffff" stroke="#2563eb" stroke-width="1.5" />
    <text x="87" y="23" font-size="10" font-weight="bold" fill="#1e3a8a" text-anchor="middle">Menentukan</text>
    <text x="87" y="38" font-size="10" font-weight="bold" fill="#1e3a8a" text-anchor="middle">Topik Nyata</text>
  </g>
  <!-- Langkah 2 -->
  <g transform="translate(140, 30)">
    <circle cx="20" cy="20" r="16" fill="#059669" />
    <text x="20" y="25" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">2</text>
    <rect x="42" y="5" width="90" height="46" rx="6" fill="#ffffff" stroke="#059669" stroke-width="1.5" />
    <text x="87" y="23" font-size="10" font-weight="bold" fill="#065f46" text-anchor="middle">Mengumpulkan</text>
    <text x="87" y="38" font-size="10" font-weight="bold" fill="#065f46" text-anchor="middle">Fakta Ilmiah</text>
  </g>
  <!-- Langkah 3 -->
  <g transform="translate(265, 30)">
    <circle cx="20" cy="20" r="16" fill="#d97706" />
    <text x="20" y="25" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">3</text>
    <rect x="42" y="5" width="90" height="46" rx="6" fill="#ffffff" stroke="#d97706" stroke-width="1.5" />
    <text x="87" y="23" font-size="10" font-weight="bold" fill="#92400e" text-anchor="middle">Menyusun</text>
    <text x="87" y="38" font-size="10" font-weight="bold" fill="#92400e" text-anchor="middle">Kerangka</text>
  </g>
  <!-- Langkah 4 -->
  <g transform="translate(390, 30)">
    <circle cx="20" cy="20" r="16" fill="#7c3aed" />
    <text x="20" y="25" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">4</text>
    <rect x="42" y="5" width="80" height="46" rx="6" fill="#ffffff" stroke="#7c3aed" stroke-width="1.5" />
    <text x="82" y="23" font-size="10" font-weight="bold" fill="#5b21b6" text-anchor="middle">Mengembangkan</text>
    <text x="82" y="38" font-size="10" font-weight="bold" fill="#5b21b6" text-anchor="middle">Teks Utuh</text>
  </g>
  <text x="260" y="140" font-size="12" font-weight="bold" fill="#1e293b" text-anchor="middle">Alur Runtun Penyusunan Teks Eksplanasi Ilmiah</text>
</svg>`,
    statements: [
      {
        id: 's1',
        text: 'Langkah awal sebelum menulis adalah memilih topik fenomena nyata yang dapat dijelaskan secara ilmiah.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Pengumpulan data fakta ilmiah dapat digantikan dengan mengarang cerita imajinasi bebas tanpa sumber pustaka.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Kerangka teks disusun berdasarkan urutan struktur pernyataan umum, deretan penjelas, dan interpretasi.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan 1 Benar (menentukan topik nyata). Pernyataan 2 Salah (teks eksplanasi wajib berbasis fakta ilmiah, tidak boleh diganti karangan fiksi bebas). Pernyataan 3 Benar (kerangka mengacu pada struktur teks eksplanasi).',
  },
  {
    id: 38,
    type: 'pgk_kategori',
    topic: 'Terjadinya Pasang Surut Air Laut',
    difficulty: 'Sedang',
    text: `Bacalah stimulus teks eksplanasi ilmiah berikut!
"Pasang surut air laut merupakan fenomena naik dan turunnya ketinggian permukaan air laut secara berkala. Peristiwa ini terjadi karena adanya gaya gravitasi bulan dan matahari terhadap bumi yang berputar pada porosnya. Karena jarak bulan jauh lebih dekat ke bumi dibandingkan matahari, pengaruh gaya tarik gravitasi bulan menjadi faktor penentu utama terjadinya pasang air laut."

Tentukan status kebenaran dari setiap pernyataan berikut!`,
    statements: [
      {
        id: 's1',
        text: 'Gaya gravitasi bulan memiliki pengaruh yang lebih besar terhadap pasang surut laut bumi dibandingkan gaya tarik matahari.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Pasang surut air laut terjadi semata-mata karena tiupan hembusan angin kencang di pesisir pantai.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Fenomena pasang surut terjadi secara berkala dan dapat diprediksi secara ilmiah.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan 1 Benar (karena jarak bulan jauh lebih dekat ke bumi). Pernyataan 2 Salah (disebabkan oleh gravitasi bulan dan matahari, bukan tiupan angin). Pernyataan 3 Benar (terjadi secara berkala dan teratur).',
  },
  {
    id: 39,
    type: 'pgk_kategori',
    topic: 'Perbandingan Teks Eksplanasi dengan Teks Narasi',
    difficulty: 'Sedang',
    text: `Membedakan jenis teks merupakan keterampilan literasi penting dalam pelajaran Bahasa Indonesia.

Tentukan apakah perbandingan antara teks eksplanasi dan teks narasi berikut Benar atau Salah!`,
    statements: [
      {
        id: 's1',
        text: 'Teks eksplanasi berfokus pada proses dan hubungan sebab-akibat suatu fenomena, sedangkan teks narasi berfokus pada alur kisah tokoh.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Teks eksplanasi bersifat objektif berdasarkan fakta, sedangkan teks narasi dapat memuat unsur fiksi dan imajinasi pengarang.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Teks eksplanasi selalu menghadirkan percakapan langsung antar tokoh utama dan tokoh antagonis.',
        correctAnswer: false,
      },
    ],
    explanation:
      'Pernyataan 1 Benar (perbedaan fokus tema). Pernyataan 2 Benar (objektivitas fakta vs fiksi). Pernyataan 3 Salah (dialog antar tokoh merupakan ciri teks narasi/drama, bukan eksplanasi).',
  },
  {
    id: 40,
    type: 'pgk_kategori',
    topic: 'Proses Fotosintesis Tumbuhan Hijau',
    difficulty: 'Sukar',
    text: `Cermati kutipan teks eksplanasi ilmiah tumbuhan berikut!
"Fotosintesis adalah proses biokimia yang dilakukan tumbuhan berklorofil untuk memproduksi energi makanan sendiri. Dengan bantuan energi cahaya matahari, klorofil pada daun menyerap air (H₂O) dari akar dan karbon dioksida (CO₂) dari udara. Melalui serangkaian reaksi kimia, tumbuhan menghasilkan glukosa sebagai sumber energi serta melepaskan gas oksigen (O₂) ke udara yang sangat bermanfaat bagi kelangsungan hidup manusia dan hewan."

Tentukan apakah setiap pernyataan berikut Benar atau Salah berdasarkan teks!`,
    statements: [
      {
        id: 's1',
        text: 'Zat yang dibutuhkan tumbuhan dalam proses fotosintesis meliputi cahaya matahari, air, dan karbon dioksida.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Hasil akhir fotosintesis yang dilepaskan ke udara bebas dan dihirup oleh makhluk hidup adalah gas karbon monoksida.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Teks di atas termasuk eksplanasi ilmiah karena menjelaskan tahapan reaksi biologis pembentukan makanan pada tumbuhan.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan 1 Benar (sesuai bahan fotosintesis). Pernyataan 2 Salah (gas yang dilepaskan adalah oksigen O2, bukan karbon monoksida). Pernyataan 3 Benar (menjelaskan proses ilmiah terjadinya fotosintesis).',
  },
];
