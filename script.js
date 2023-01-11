// hide and show navbar
let lastScrollTop = 0;
wrapperNavbar = document.querySelector('.wrapper-navbar');
window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        wrapperNavbar.style.top = '-60px';
    } else {
        wrapperNavbar.style.top = '0';
    };
    lastScrollTop = scrollTop;
});

// hide and show button back-to-top
let lastScrollUp = 0;
backToTop = document.querySelector('.back-to-top');
window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollUp) {
        backToTop.style.bottom = '25px';
    } else {
        backToTop.style.bottom = '-25%';
    };
    lastScrollUp = scrollTop;
});

// get map location when user click the button
const getLocation = document.querySelectorAll('.get-location');
for (let i = 0; i < getLocation.length; i++) {
    const getLoc = getLocation[i]
    getLoc.addEventListener('click', () => {
        window.location.href = 'https://goo.gl/maps/hC1b3q7dfLU9kFT56';
    });
};

// get save date when user click the button
const saveDate = document.querySelectorAll('.save-date');
for (let i = 0; i < saveDate.length; i++) {
    const save = saveDate[i]
    save.addEventListener('click', () => {
        window.location.href = 'https://calendar.google.com/calendar/u/0/r/eventedit/MzBmMTUwa3E4N2xlMnVtYWcwcW1pMThsNzIgZGVkaWluZHJhd2FuODEyQG0?hl=id&pli=1';
    });
};

// create copy clipboard when user click button
const copyRekBtnBca = document.querySelector('.copy-rek-btn-bca');

copyRekBtnBca.addEventListener('click', async () => {
    alert('Nomor Rekening Berhasil di Salin !!');
    const noRekBca = document.querySelector('.no-rek-bca').textContent;
    await navigator.clipboard.writeText(noRekBca);
    const copied = navigator.clipboard.readText();
    console.log(copied);
});

// create copy clipboard when user click button
const copyRekBtnBni = document.querySelector('.copy-rek-btn-bni');

copyRekBtnBni.addEventListener('click', async () => {
    alert('Nomor Rekening Berhasil di Salin !!');
    const noRekBni = document.querySelector('.no-rek-bni').textContent;
    await navigator.clipboard.writeText(noRekBni);
    const copied = navigator.clipboard.readText();
    console.log(copied);
});

// create copy clipboard when user click button
const copyAddress = document.querySelector('.copy-address-btn');

copyAddress.addEventListener('click', async () => {
    alert('Alamat Pengiriman Berhasil di Salin !!');
    const address = document.querySelector('.address').textContent;
    await navigator.clipboard.writeText(address);
    const copied = navigator.clipboard.readText();
    console.log(copied);
});

// set count down time remaining as real time
const target = new Date('Jan 22 2023 08:00:00').getTime();

const countDown = setInterval(function () {
    const now = new Date().getTime();
    const gap = target - now;

    let day = Math.floor(gap / (1000 * 60 * 60 * 24));
    let hour = Math.floor(gap % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minute = Math.floor(gap % (1000 * 60 * 60) / (1000 * 60));
    let second = Math.floor(gap % (1000 * 60) / 1000);

    day = day < 10 ? '0' + day : day;
    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;
    second = second < 10 ? '0' + second : second;

    document.querySelector('.days p').innerHTML = `${day} <br> Hari`;
    document.querySelector('.hours p').innerHTML = `${hour} <br> Jam`;
    document.querySelector('.minutes p').innerHTML = `${minute} <br> Menit`;
    document.querySelector('.seconds p').innerHTML = `${second} <br> Detik`;

    if (gap <= 0) {
        clearInterval(countDown);

        document.querySelector('.day-remaining').innerHTML = `Hitung Mundur Selesai <br> Terimakasih Atas Kehadiran Anda`;

        document.querySelector('.days p').innerHTML = `00 <br> Hari`;
        document.querySelector('.hours p').innerHTML = `00 <br> Jam`;
        document.querySelector('.minutes p').innerHTML = `00 <br> Menit`;
        document.querySelector('.seconds p').innerHTML = `00 <br> Detik`;
    };

}, 1000);