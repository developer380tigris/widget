function showBanner() {
    const banner = document.getElementById('banner');
    banner.style.display = 'block';
    
    setTimeout(() => {
        banner.style.display = 'none';
    }, 5000); // Баннер исчезнет через 5 секунд
}

// Появление баннера каждые 2 минуты
setInterval(showBanner, 120000);
