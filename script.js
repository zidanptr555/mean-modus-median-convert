function calculate() {
    const input = document.getElementById('inputData').value;
    const data = input.split(',').map(Number).filter(n => !isNaN(n));
    
    if (data.length === 0) {
        alert("Masukkan data yang valid!");
        return;
    }

    // Fungsi untuk menghitung mean (rata-rata)
    const mean = data.reduce((a, b) => a + b, 0) / data.length;

    // Fungsi untuk menghitung median
    data.sort((a, b) => a - b);
    let median;
    const middle = Math.floor(data.length / 2);
    if (data.length % 2 === 0) {
        median = (data[middle - 1] + data[middle]) / 2;
    } else {
        median = data[middle];
    }

    // Fungsi untuk menghitung modus
    let frequency = {};
    let maxFreq = 0;
    let modus = [];

    data.forEach(num => {
        frequency[num] = (frequency[num] || 0) + 1;
        if (frequency[num] > maxFreq) {
            maxFreq = frequency[num];
            modus = [num];
        } else if (frequency[num] === maxFreq) {
            if (!modus.includes(num)) {
                modus.push(num);
            }
        }
    });

    if (modus.length === data.length) {
        modus = ["Tidak ada modus (semua elemen unik)"];
    }

    // Menampilkan hasil
    document.getElementById('meanResult').innerText = `Mean: ${mean.toFixed(2)}`;
    document.getElementById('medianResult').innerText = `Median: ${median}`;
    document.getElementById('modusResult').innerText = `Modus: ${modus.join(', ')}`;
}
