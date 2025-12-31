// ตั้งวันที่งาน (ใช้รูปแบบที่ browser เข้าใจแน่นอน)
const weddingDate = new Date("2026-02-21T00:00:00").getTime();

setInterval(function () {
    const now = new Date().getTime();
    const diff = weddingDate - now;

    if (diff < 0) return; // กันค่าติดลบ

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = String(days).padStart(2, "0");
    document.getElementById("hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("mins").textContent = String(mins).padStart(2, "0");
    document.getElementById("secs").textContent = String(secs).padStart(2, "0");

}, 1000);
