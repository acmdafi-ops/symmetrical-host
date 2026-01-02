let score = 0;

function showMateri(m) {
    const c = document.getElementById("content");

    if (m === "pendahuluan") {
        c.innerHTML = `
        <div class="card">
            <h3>Pendahuluan</h3>
            <p>
                Puasa merupakan salah satu ibadah yang sangat penting dalam ajaran Islam.
                Ibadah puasa tidak hanya menahan diri dari makan dan minum, tetapi juga
                melatih pengendalian diri dari perbuatan tercela, perkataan buruk, dan
                segala hal yang dapat mengurangi pahala puasa.
            </p>
            <p>
                Puasa mendidik umat Islam agar menjadi pribadi yang disiplin, jujur,
                sabar, serta memiliki kepedulian sosial terhadap sesama.
            </p>
        </div>`;
    }

    else if (m === "pengertian") {
        c.innerHTML = `
        <div class="card">
            <h3>Pengertian Puasa</h3>
            <p>
                Secara bahasa, puasa berarti menahan diri. Menurut istilah syariat Islam,
                puasa adalah menahan diri dari makan, minum, dan segala sesuatu yang
                membatalkan puasa mulai dari terbit fajar hingga terbenam matahari
                disertai niat karena Allah SWT.
            </p>
        </div>`;
    }

    else if (m === "hukum") {
        c.innerHTML = `
        <div class="card">
            <h3>Hukum Puasa</h3>
            <p>Hukum puasa dalam Islam terbagi menjadi beberapa bagian:</p>
            <ul>
                <li>Puasa Ramadhan: Wajib bagi setiap muslim yang memenuhi syarat</li>
                <li>Puasa Nazar: Wajib karena janji kepada Allah SWT</li>
                <li>Puasa Qadha: Wajib sebagai pengganti puasa Ramadhan</li>
                <li>Puasa Sunnah: Dianjurkan dan berpahala</li>
                <li>Puasa Haram: Dilarang pada hari tertentu</li>
            </ul>
        </div>`;
    }

    else if (m === "dalil") {
        c.innerHTML = `
        <div class="card">
            <h3>Dalil Puasa</h3>
            <p><strong>QS. Al-Baqarah ayat 183:</strong></p>
            <p>
                “Wahai orang-orang yang beriman, diwajibkan atas kamu berpuasa
                sebagaimana diwajibkan atas orang-orang sebelum kamu agar kamu bertakwa.”
            </p>
        </div>`;
    }

    else if (m === "macam") {
        c.innerHTML = `
        <div class="card">
            <h3>Macam-Macam Puasa</h3>
            <ul>
                <li>Puasa Ramadhan</li>
                <li>Puasa Sunnah Senin dan Kamis</li>
                <li>Puasa Arafah</li>
                <li>Puasa Asyura</li>
                <li>Puasa Nazar</li>
                <li>Puasa Qadha</li>
            </ul>
        </div>`;
    }

    else if (m === "syarat") {
        c.innerHTML = `
        <div class="card">
            <h3>Syarat Puasa</h3>
            <p><strong>Syarat Wajib:</strong></p>
            <ul>
                <li>Beragama Islam</li>
                <li>Baligh</li>
                <li>Berakal sehat</li>
                <li>Mampu menjalankan puasa</li>
            </ul>
            <p><strong>Syarat Sah:</strong></p>
            <ul>
                <li>Niat</li>
                <li>Suci dari haid dan nifas</li>
                <li>Mengetahui waktu puasa</li>
            </ul>
        </div>`;
    }

    else if (m === "rukun") {
        c.innerHTML = `
        <div class="card">
            <h3>Rukun Puasa</h3>
            <ol>
                <li>Niat karena Allah SWT</li>
                <li>Menahan diri dari hal-hal yang membatalkan puasa</li>
            </ol>
        </div>`;
    }

    else if (m === "batal") {
        c.innerHTML = `
        <div class="card">
            <h3>Hal-Hal yang Membatalkan Puasa</h3>
            <ul>
                <li>Makan dan minum dengan sengaja</li>
                <li>Muntah dengan sengaja</li>
                <li>Keluar mani dengan sengaja</li>
                <li>Haid dan nifas</li>
                <li>Gila atau hilang akal</li>
            </ul>
        </div>`;
    }

    else if (m === "sunah") {
        c.innerHTML = `
        <div class="card">
            <h3>Amalan Sunnah Saat Puasa</h3>
            <ul>
                <li>Menyegerakan berbuka puasa</li>
                <li>Mengakhirkan sahur</li>
                <li>Memperbanyak membaca Al-Qur’an</li>
                <li>Menjaga lisan dan perbuatan</li>
                <li>Berdoa ketika berbuka</li>
            </ul>
        </div>`;
    }

    else if (m === "hikmah") {
        c.innerHTML = `
        <div class="card">
            <h3>Hikmah Puasa</h3>
            <p>
                Puasa memiliki banyak hikmah, di antaranya meningkatkan ketakwaan,
                melatih kesabaran, mengendalikan hawa nafsu, menumbuhkan empati
                kepada orang lain, serta menjaga kesehatan jasmani dan rohani.
            </p>
        </div>`;
    }

    else if (m === "nilai") {
        c.innerHTML = `
        <div class="card">
            <h3>Nilai-Nilai Pendidikan dalam Puasa</h3>
            <ul>
                <li>Nilai religius dan ketakwaan</li>
                <li>Nilai kejujuran</li>
                <li>Nilai disiplin</li>
                <li>Nilai kepedulian sosial</li>
                <li>Nilai tanggung jawab</li>
            </ul>
        </div>`;
    }

    else if (m === "quiz") {
        score = 0;
        c.innerHTML = `
        <div class="card">
            <h3>Evaluasi Pembelajaran</h3>

            <p>1. Puasa Ramadhan hukumnya?</p>
            <button class="quiz-btn" onclick="answer(true)">Wajib</button>
            <button class="quiz-btn" onclick="answer(false)">Sunnah</button>

            <p>2. Rukun puasa adalah?</p>
            <button class="quiz-btn" onclick="answer(true)">Niat</button>
            <button class="quiz-btn" onclick="answer(false)">Berbuka</button>

            <p id="result"></p>
            <button onclick="resetQuiz()">Reset Evaluasi</button>
        </div>`;
    }
}

function answer(correct) {
    const r = document.getElementById("result");
    if (correct) {
        score += 10;
        r.innerHTML = "Jawaban benar. Skor: " + score;
        r.style.color = "green";
    } else {
        r.innerHTML = "Jawaban salah. Skor: " + score;
        r.style.color = "red";
    }
}

function resetQuiz() {
    score = 0;
    document.getElementById("result").innerHTML = "Skor direset menjadi 0";
}
