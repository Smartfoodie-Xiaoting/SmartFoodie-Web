function changeLanguage(lang) {
    document.querySelectorAll('[data-lang-' + lang + ']').forEach(elem => {
        elem.textContent = elem.getAttribute('data-lang-' + lang);
    });
    
    // 更新按钮激活状态
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector('.lang-btn[onclick="changeLanguage(\'' + lang + '\')"]').classList.add('active');
    
    localStorage.setItem('preferredLanguage', lang);
}

document.addEventListener('DOMContentLoaded', () => {
    const preferredLanguage = localStorage.getItem('preferredLanguage') || 'en';
    changeLanguage(preferredLanguage);
});