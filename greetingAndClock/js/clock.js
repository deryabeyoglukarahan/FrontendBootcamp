// Kullanıcıdan ismini almak ve ekrana yazdırmak için;

let userName = prompt("Lütfen isminizi giriniz:");
document.getElementById('myName').textContent = userName;

// Saati ve günü göstermek için;

function showTime() {
    const now = new Date();

    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');

    const days = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'];
    const dayName = days[now.getDay()];

// Saat ve günü ekrana yazdırmak için;
    const clockElement = document.getElementById('myClock');
    clockElement.innerHTML = `${hours}:${minutes}:${seconds} ${dayName}`;

    const text2Element = document.querySelector('.text2');
    text2Element.innerHTML = `tarihinde <strong>Kodluyoruz Frontend Web Development Patikası</strong>'nın Javascript bölümü 1. Ödevindesiniz.`;

    }

// Sayfa yüklendiğinde saati her saniye güncellemek için;

    window.onload = function() {
    showTime();
    setInterval(showTime, 1000);
};