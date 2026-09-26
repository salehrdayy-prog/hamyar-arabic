// ============================================================
//  voice.js — افزودن خودکار دکمه صوتی به فعل‌های عربی
//  ساخته شده برای همیار دانش‌آموز
// ============================================================

(function() {
    'use strict';

    // ===== تنظیمات =====
    const VOICE_LANG = 'ar-SA';    // زبان عربی (سعودی)
    const VOICE_RATE = 0.75;        // سرعت خواندن (کندتر)
    const VOICE_PITCH = 1;          // زیر و بمی

    // ===== تشخیص پشتیبانی =====
    function isSupported() {
        return 'speechSynthesis' in window;
    }

    // ===== پیدا کردن بهترین صدای عربی =====
    let cachedVoice = null;
    
    function getArabicVoice() {
        if (cachedVoice) return cachedVoice;
        
        const voices = speechSynthesis.getVoices();
        const arabicVoice = voices.find(v => v.lang.startsWith('ar'));
        
        if (arabicVoice) {
            cachedVoice = arabicVoice;
        }
        
        return arabicVoice;
    }

    // ===== خواندن متن عربی =====
    function speakArabic(text) {
        if (!isSupported()) {
            console.warn('مرورگر از صدا پشتیبانی نمی‌کند');
            return;
        }

        // توقف خواندن قبلی
        speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = VOICE_LANG;
        utterance.rate = VOICE_RATE;
        utterance.pitch = VOICE_PITCH;

        const voice = getArabicVoice();
        if (voice) {
            utterance.voice = voice;
        }

        speechSynthesis.speak(utterance);
    }

    // ===== ساخت دکمه صوتی =====
    function createSpeakButton(text, size) {
        const btn = document.createElement('button');
        btn.className = 'speak-btn';
        btn.innerHTML = '🔊';
        btn.title = 'شنیدن تلفظ';
        btn.setAttribute('data-arabic', text);
        btn.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            speakArabic(text);
            
            // افکت
            btn.style.transform = 'scale(1.3)';
            setTimeout(() => btn.style.transform = '', 200);
        };

        if (size === 'small') {
            btn.style.cssText = 'background: transparent; border: none; cursor: pointer; font-size: 14px; padding: 2px 4px; margin-right: 4px; opacity: 0.7; transition: 0.2s;';
        } else {
            btn.style.cssText = 'background: rgba(99, 102, 241, 0.1); border: 1px solid rgba(99, 102, 241, 0.3); border-radius: 50%; cursor: pointer; font-size: 14px; padding: 4px 6px; margin-right: 6px; transition: 0.2s; color: #6366f1;';
        }

        btn.onmouseenter = () => btn.style.opacity = '1';
        btn.onmouseleave = () => btn.style.opacity = size === 'small' ? '0.7' : '1';

        return btn;
    }

    // ===== افزودن دکمه صوتی به جدول‌های صرف =====
    function addButtonsToTables() {
        // جدول‌های صرف
        document.querySelectorAll('.sarf-table td.ar').forEach(td => {
            if (td.querySelector('.speak-btn')) return; // قبلاً اضافه شده
            
            const text = td.innerText.trim();
            if (!text) return;

            const btn = createSpeakButton(text, 'small');
            td.insertBefore(btn, td.firstChild);
        });

        // فعل‌های عربی بزرگ
        document.querySelectorAll('.arabic-big').forEach(el => {
            if (el.querySelector('.speak-btn')) return;
            
            const text = el.innerText.trim();
            if (!text) return;

            const btn = createSpeakButton(text, 'large');
            btn.style.fontSize = '18px';
            el.insertBefore(btn, el.firstChild);
        });

        // فعل‌های داخل example-box
        document.querySelectorAll('.example-box .arabic').forEach(el => {
            if (el.querySelector('.speak-btn')) return;
            
            const text = el.innerText.trim();
            if (!text) return;

            const btn = createSpeakButton(text, 'large');
            el.insertBefore(btn, el.firstChild);
        });

        // فعل‌های فعل‌ساز
        document.querySelectorAll('.builder-verb .verb').forEach(el => {
            if (el.querySelector('.speak-btn')) return;
            
            const text = el.innerText.trim();
            if (!text || text === '—') return;

            const btn = createSpeakButton(text, 'large');
            btn.style.fontSize = '20px';
            btn.style.display = 'inline-block';
            btn.style.marginLeft = '8px';
            el.appendChild(btn);
        });
    }

    // ===== افزودن دکمه صوتی به بخش تعاملی صرف =====
    function addButtonToInteractive() {
        const verbEl = document.getElementById('ivVerb');
        if (!verbEl || verbEl.querySelector('.speak-btn')) return;

        // ناظر برای تغییرات
        const observer = new MutationObserver(function() {
            const currentText = verbEl.childNodes[0]?.nodeValue?.trim() || verbEl.innerText.trim();
            const existingBtn = verbEl.querySelector('.speak-btn');
            
            if (existingBtn) existingBtn.remove();
            
            if (currentText && currentText !== '—') {
                const btn = createSpeakButton(currentText, 'large');
                btn.style.fontSize = '24px';
                btn.style.display = 'inline-block';
                btn.style.verticalAlign = 'middle';
                btn.style.marginRight = '10px';
                verbEl.insertBefore(btn, verbEl.firstChild);
            }
        });

        observer.observe(verbEl, { childList: true, characterData: true, subtree: true });

        // یک بار هم الان اضافه کن
        const currentText = verbEl.innerText.trim();
        if (currentText && currentText !== '—') {
            const btn = createSpeakButton(currentText, 'large');
            btn.style.fontSize = '24px';
            btn.style.display = 'inline-block';
            btn.style.marginRight = '10px';
            verbEl.insertBefore(btn, verbEl.firstChild);
        }
    }

    // ===== تابع کمکی: خواندن هر متن =====
    window.speakArabic = speakArabic;
    window.speakText = speakArabic;

    // ===== راه‌اندازی =====
    function init() {
        if (!isSupported()) {
            console.warn('Web Speech API پشتیبانی نمی‌شود');
            return;
        }

        // اضافه کردن دکمه‌ها
        addButtonsToTables();
        addButtonToInteractive();

        // ناظر کل صفحه (برای بخش‌هایی که به‌صورت داینامیک اضافه می‌شوند)
        const pageObserver = new MutationObserver(function() {
            addButtonsToTables();
        });

        pageObserver.observe(document.body, {
            childList: true,
            subtree: true
        });

        // وقتی صداها لود شدند، کش را پاک کن
        speechSynthesis.onvoiceschanged = function() {
            cachedVoice = null;
            getArabicVoice();
        };
    }

    // ===== اجرا =====
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();