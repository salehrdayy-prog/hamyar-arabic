// ============================================================
//  voice.js — تلفظ صحیح فعل‌های عربی + شناسه‌ها
//  نسخه نهایی برای همیار دانش‌آموز
// ============================================================

(function() {
    'use strict';

    // ===== تنظیمات =====
    const VOICE_LANG = 'ar-SA';
    const VOICE_RATE = 0.7;
    const VOICE_PITCH = 1;

    // ============================================================
    // 🗺️ نقشه تلفظ فعل‌ها و ضمایر
    // ============================================================
    const PRONUNCIATION_MAP = {
        // ===== کَتَبَ — ماضی =====
        "كَتَبَ": "كَتَبَ",
        "كَتَبَا": "كَتَبا",
        "كَتَبُوا": "كَتَبوا",
        "كَتَبَتْ": "كَتَبَت",
        "كَتَبَتَا": "كَتَبَتا",
        "كَتَبْنَ": "كَتَبنَ",
        "كَتَبْتَ": "كَتَبتَ",
        "كَتَبْتُمَا": "كَتَبتُما",
        "كَتَبْتُمْ": "كَتَبتُم",
        "كَتَبْتِ": "كَتَبتِ",
        "كَتَبْتُنَّ": "كَتَبتُنَّ",
        "كَتَبْتُ": "كَتَبتُ",
        "كَتَبْنَا": "كَتَبنا",

        // ===== کَتَبَ — مضارع =====
        "يَكْتُبُ": "يَكتُبُ",
        "يَكْتُبَانِ": "يَكتُبانِ",
        "يَكْتُبُونَ": "يَكتُبونَ",
        "تَكْتُبُ": "تَكتُبُ",
        "تَكْتُبَانِ": "تَكتُبانِ",
        "يَكْتُبْنَ": "يَكتُبنَ",
        "تَكْتُبِينَ": "تَكتُبينَ",
        "أَكْتُبُ": "أَكتُبُ",
        "نَكْتُبُ": "نَكتُبُ",

        // ===== ذَهَبَ — ماضی =====
        "ذَهَبَ": "ذَهَبَ",
        "ذَهَبَا": "ذَهَبا",
        "ذَهَبُوا": "ذَهَبوا",
        "ذَهَبَتْ": "ذَهَبَت",
        "ذَهَبَتَا": "ذَهَبَتا",
        "ذَهَبْنَ": "ذَهَبنَ",
        "ذَهَبْتَ": "ذَهَبتَ",
        "ذَهَبْتُمَا": "ذَهَبتُما",
        "ذَهَبْتُمْ": "ذَهَبتُم",
        "ذَهَبْتِ": "ذَهَبتِ",
        "ذَهَبْتُنَّ": "ذَهَبتُنَّ",
        "ذَهَبْتُ": "ذَهَبتُ",
        "ذَهَبْنَا": "ذَهَبنا",

        // ===== ذَهَبَ — مضارع =====
        "يَذْهَبُ": "يَذهَبُ",
        "يَذْهَبَانِ": "يَذهَبانِ",
        "يَذْهَبُونَ": "يَذهَبونَ",
        "تَذْهَبُ": "تَذهَبُ",
        "تَذْهَبَانِ": "تَذهَبانِ",
        "يَذْهَبْنَ": "يَذهَبنَ",
        "تَذْهَبِينَ": "تَذهَبينَ",
        "أَذْهَبُ": "أَذهَبُ",
        "نَذْهَبُ": "نَذهَبُ",

        // ===== عَلِمَ — ماضی =====
        "عَلِمَ": "عَلِمَ",
        "عَلِمَا": "عَلِما",
        "عَلِمُوا": "عَلِموا",
        "عَلِمَتْ": "عَلِمَت",
        "عَلِمَتَا": "عَلِمَتا",
        "عَلِمْنَ": "عَلِمنَ",
        "عَلِمْتَ": "عَلِمتَ",
        "عَلِمْتُمَا": "عَلِمتُما",
        "عَلِمْتُمْ": "عَلِمتُم",
        "عَلِمْتِ": "عَلِمتِ",
        "عَلِمْتُنَّ": "عَلِمتُنَّ",
        "عَلِمْتُ": "عَلِمتُ",
        "عَلِمْنَا": "عَلِمنا",

        // ===== عَلِمَ — مضارع =====
        "يَعْلَمُ": "يَعلَمُ",
        "يَعْلَمَانِ": "يَعلَمانِ",
        "يَعْلَمُونَ": "يَعلَمونَ",
        "تَعْلَمُ": "تَعلَمُ",
        "تَعْلَمَانِ": "تَعلَمانِ",
        "يَعْلَمْنَ": "يَعلَمنَ",
        "تَعْلَمِينَ": "تَعلَمينَ",
        "أَعْلَمُ": "أَعلَمُ",
        "نَعْلَمُ": "نَعلَمُ",

        // ===== نَصَرَ — ماضی =====
        "نَصَرَ": "نَصَرَ",
        "نَصَرَا": "نَصَرا",
        "نَصَرُوا": "نَصَروا",
        "نَصَرَتْ": "نَصَرَت",
        "نَصَرَتَا": "نَصَرَتا",
        "نَصَرْنَ": "نَصَرنَ",
        "نَصَرْتَ": "نَصَرتَ",
        "نَصَرْتُمَا": "نَصَرتُما",
        "نَصَرْتُمْ": "نَصَرتُم",
        "نَصَرْتِ": "نَصَرتِ",
        "نَصَرْتُنَّ": "نَصَرتُنَّ",
        "نَصَرْتُ": "نَصَرتُ",
        "نَصَرْنَا": "نَصَرنا",

        // ===== نَصَرَ — مضارع =====
        "يَنْصُرُ": "يَنصُرُ",
        "يَنْصُرَانِ": "يَنصُرانِ",
        "يَنْصُرُونَ": "يَنصُرونَ",
        "تَنْصُرُ": "تَنصُرُ",
        "تَنْصُرَانِ": "تَنصُرانِ",
        "يَنْصُرْنَ": "يَنصُرنَ",
        "تَنْصُرِينَ": "تَنصُرينَ",
        "أَنْصُرُ": "أَنصُرُ",
        "نَنْصُرُ": "نَنصُرُ",

        // ===== فَتَحَ — ماضی =====
        "فَتَحَ": "فَتَحَ",
        "فَتَحَا": "فَتَحا",
        "فَتَحُوا": "فَتَحوا",
        "فَتَحَتْ": "فَتَحَت",
        "فَتَحَتَا": "فَتَحَتا",
        "فَتَحْنَ": "فَتَحنَ",
        "فَتَحْتَ": "فَتَحتَ",
        "فَتَحْتُمَا": "فَتَحتُما",
        "فَتَحْتُمْ": "فَتَحتُم",
        "فَتَحْتِ": "فَتَحتِ",
        "فَتَحْتُنَّ": "فَتَحتُنَّ",
        "فَتَحْتُ": "فَتَحتُ",
        "فَتَحْنَا": "فَتَحنا",

        // ===== فَتَحَ — مضارع =====
        "يَفْتَحُ": "يَفتَحُ",
        "يَفْتَحَانِ": "يَفتَحانِ",
        "يَفْتَحُونَ": "يَفتَحونَ",
        "تَفْتَحُ": "تَفتَحُ",
        "تَفْتَحَانِ": "تَفتَحانِ",
        "يَفْتَحْنَ": "يَفتَحنَ",
        "تَفْتَحِينَ": "تَفتَحينَ",
        "أَفْتَحُ": "أَفتَحُ",
        "نَفْتَحُ": "نَفتَحُ",

        // ===== سَمِعَ — ماضی =====
        "سَمِعَ": "سَمِعَ",
        "سَمِعَا": "سَمِعا",
        "سَمِعُوا": "سَمِعوا",
        "سَمِعَتْ": "سَمِعَت",
        "سَمِعَتَا": "سَمِعَتا",
        "سَمِعْنَ": "سَمِعna".replace("na", "نَ"),
        "سَمِعْتَ": "سَمِعتَ",
        "سَمِعْتُمَا": "سَمِعتُما",
        "سَمِعْتُمْ": "سَمِعتُم",
        "سَمِعْتِ": "سَمِعتِ",
        "سَمِعْتُنَّ": "سَمِعتُنَّ",
        "سَمِعْتُ": "سَمِعتُ",
        "سَمِعْنَا": "سَمِعنا",

        // ===== سَمِعَ — مضارع =====
        "يَسْمَعُ": "يَسمَعُ",
        "يَسْمَعَانِ": "يَسمَعانِ",
        "يَسْمَعُونَ": "يَسمَعونَ",
        "تَسْمَعُ": "تَسمَعُ",
        "تَسْمَعَانِ": "تَسمَعانِ",
        "يَسْمَعْنَ": "يَسمَعنَ",
        "تَسْمَعِينَ": "تَسمَعينَ",
        "أَسْمَعُ": "أَسمَعُ",
        "نَسْمَعُ": "نَسمَعُ",

        // ===== ضمایر =====
        "هُوَ": "هُوَ",
        "هُمَا": "هُمَا",
        "هُمْ": "هُم",
        "هِيَ": "هِيَ",
        "هُنَّ": "هُنَّ",
        "أَنْتَ": "أَنتَ",
        "أَنْتِ": "أَنتِ",
        "أَنْتُمْ": "أَنتُم",
        "أَنْتُنَّ": "أَنتُنَّ",
        "أَنَا": "أَنا",
        "نَحْنُ": "نَحنُ"
    };

    // ============================================================
    // 🗺️ نقشه تلفظ شناسه‌ها (جدول روش ساخت)
    // ============================================================
    const SUFFIX_PRONUNCIATION = {
        // ===== شناسه‌های ماضی =====
        "ـَ":       "فتحه",
        "ـَا":      "الف",
        "ـُوا":     "واو",
        "ـَتْ":     "تَت",
        "ـَتَا":    "تَتا",
        "ـْنَ":     "نَ",
        "ـْتَ":     "تَ",
        "ـْتُمَا":  "تُما",
        "ـْتُمْ":   "تُم",
        "ـْتِ":     "تِ",
        "ـْتُنَّ":  "تُنَّ",
        "ـْتُ":     "تُ",
        "ـْنَا":    "نا",

        // ===== شناسه‌های مضارع =====
        "ـُ":       "ضمه",
        "ـَانِ":    "انی",
        "ـُونَ":    "ونا",
        "ـِينَ":    "ینا",

        // ===== حروف مضارعه (به نام حرف) =====
        "أ":   "أَلف",
        "ت":   "تاء",
        "ی":   "یاء",
        "ي":   "یاء",
        "ن":   "نون"
    };

    // ============================================================
    // تشخیص پشتیبانی
    // ============================================================
    function isSupported() {
        return 'speechSynthesis' in window;
    }

    // ============================================================
    // پیدا کردن بهترین صدای عربی
    // ============================================================
    let cachedVoice = null;

    function getArabicVoice() {
        if (cachedVoice) return cachedVoice;
        const voices = speechSynthesis.getVoices();

        const priorities = [
            v => v.lang === 'ar-SA' && /hamed|maged/i.test(v.name),
            v => v.lang === 'ar-SA',
            v => v.lang.startsWith('ar-EG'),
            v => v.lang.startsWith('ar'),
        ];

        for (const test of priorities) {
            const found = voices.find(test);
            if (found) {
                cachedVoice = found;
                return found;
            }
        }
        return null;
    }

    // ============================================================
    // نرمال‌سازی متن عربی
    // ============================================================
    function normalizeArabic(text) {
        if (!text) return '';

        let clean = text
            .replace(/\u200c/g, '')
            .replace(/\u200f/g, '')
            .replace(/\u200e/g, '')
            .replace(/\s+/g, ' ')
            .trim();

        // حذف اعداد و ایموجی‌ها (اما کَشیده و حرکات را نگه‌دار)
        clean = clean
            .replace(/[0-9۰-۹]/g, '')
            .replace(/[#️⃣🎯📝🔊🎮📖🎓✏️📊✅❌🏆📈🔥💯➡️⬅️🔄🗑️⏱️؟?]/g, '')
            .replace(/\s+/g, ' ')
            .trim();

        return clean;
    }

    // ============================================================
    // پیدا کردن تلفظ درست
    // ============================================================
    function getPronunciation(text) {
        const clean = normalizeArabic(text);

        // 1. شناسه‌ها (اولویت اول)
        if (SUFFIX_PRONUNCIATION[clean]) {
            return SUFFIX_PRONUNCIATION[clean];
        }

        // 2. فعل‌ها و ضمایر
        if (PRONUNCIATION_MAP[clean]) {
            return PRONUNCIATION_MAP[clean];
        }

        // 3. جستجوی جزئی در نقشه فعل‌ها
        for (const [key, val] of Object.entries(PRONUNCIATION_MAP)) {
            if (clean === key || clean === key.replace(/[\u064B-\u0652]/g, '')) {
                return val;
            }
        }

        // 4. اگر پیدا نشد، خود متن را برگردان
        return clean;
    }

    // ============================================================
    // خواندن متن عربی
    // ============================================================
    function speakArabic(text) {
        if (!isSupported()) {
            alert('مرورگر شما از خواندن صوتی پشتیبانی نمی‌کند. از Chrome استفاده کنید.');
            return;
        }

        const pronunciation = getPronunciation(text);
        if (!pronunciation) return;

        speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(pronunciation);
        utterance.lang = VOICE_LANG;
        utterance.rate = VOICE_RATE;
        utterance.pitch = VOICE_PITCH;
        utterance.volume = 1;

        const voice = getArabicVoice();
        if (voice) utterance.voice = voice;

        utterance.onerror = (e) => console.warn('خطای تلفظ:', e);
        speechSynthesis.speak(utterance);
    }

    // ============================================================
    // ساخت دکمه صوتی
    // ============================================================
    function createSpeakButton(text, options = {}) {
        const { size = 'small' } = options;
        const btn = document.createElement('button');
        btn.className = 'speak-btn';
        btn.type = 'button';
        btn.innerHTML = '🔊';
        btn.title = 'شنیدن تلفظ';
        btn.setAttribute('aria-label', 'شنیدن تلفظ');
        btn.dataset.arabic = text;

        btn.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();

            btn.style.transform = 'scale(1.3)';
            btn.style.background = 'rgba(76, 175, 80, 0.35)';
            setTimeout(() => {
                btn.style.transform = '';
                btn.style.background = '';
            }, 300);

            speakArabic(text);
        };

        if (size === 'small') {
            btn.style.cssText = `
                background: rgba(99, 102, 241, 0.08);
                border: 1px solid rgba(99, 102, 241, 0.25);
                border-radius: 50%;
                cursor: pointer;
                font-size: 12px;
                width: 26px;
                height: 26px;
                padding: 0;
                margin-left: 6px;
                transition: 0.2s;
                vertical-align: middle;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                flex-shrink: 0;
            `;
        } else {
            btn.style.cssText = `
                background: rgba(118, 75, 162, 0.1);
                border: 1px solid rgba(118, 75, 162, 0.3);
                border-radius: 50%;
                cursor: pointer;
                font-size: 15px;
                width: 32px;
                height: 32px;
                padding: 0;
                margin-left: 8px;
                transition: 0.2s;
                vertical-align: middle;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                flex-shrink: 0;
            `;
        }

        btn.onmouseenter = () => {
            btn.style.background = 'rgba(118, 75, 162, 0.25)';
            btn.style.transform = 'scale(1.1)';
        };
        btn.onmouseleave = () => {
            btn.style.background = size === 'small'
                ? 'rgba(99, 102, 241, 0.08)'
                : 'rgba(118, 75, 162, 0.1)';
            btn.style.transform = '';
        };

        return btn;
    }

    // ============================================================
    // توابع افزودن دکمه صوتی
    // ============================================================

    // ۱. جدول‌های صرف (.conj-table td.arabic)
    function addButtonsToTables() {
        document.querySelectorAll('.conj-table td.arabic').forEach(td => {
            if (td.querySelector('.speak-btn')) return;
            const text = td.innerText.trim();
            if (!text || text === '—') return;

            const btn = createSpeakButton(text, { size: 'small' });
            td.insertBefore(btn, td.firstChild);
        });
    }

    // ۲. متن‌های عربی بزرگ (.arabic-big)
    function addButtonsToArabicBig() {
        document.querySelectorAll('.arabic-big').forEach(el => {
            if (el.querySelector('.speak-btn')) return;
            const text = el.innerText.trim();
            if (!text || text === '—' || text === '؟') return;

            const btn = createSpeakButton(text, { size: 'large' });
            el.insertBefore(btn, el.firstChild);
        });
    }

    // ۳. دکمه‌های افعال (.verb-btn)
    function addButtonsToVerbButtons() {
        document.querySelectorAll('.verb-btn').forEach(btn => {
            if (btn.querySelector('.speak-btn')) return;
            const meaningSpan = btn.querySelector('.meaning');
            const arabicText = meaningSpan
                ? btn.innerText.replace(meaningSpan.innerText, '').trim()
                : btn.innerText.trim();
            if (!arabicText || arabicText === '—') return;

            const speakBtn = createSpeakButton(arabicText, { size: 'small' });
            speakBtn.style.position = 'absolute';
            speakBtn.style.top = '6px';
            speakBtn.style.left = '6px';
            speakBtn.style.margin = '0';
            btn.style.position = 'relative';
            btn.appendChild(speakBtn);
        });
    }

    // ۴. گزینه‌های عربی (.option-btn)
    function addButtonsToOptions() {
        document.querySelectorAll('.option-btn').forEach(btn => {
            if (btn.querySelector('.speak-btn')) return;
            if (btn.disabled) return;

            const text = btn.textContent.trim();
            const isArabic = /[\u0600-\u06FF]/.test(text);
            if (!isArabic) return;

            const speakBtn = createSpeakButton(text, { size: 'small' });
            speakBtn.style.position = 'absolute';
            speakBtn.style.top = '6px';
            speakBtn.style.left = '6px';
            speakBtn.style.margin = '0';
            btn.style.position = 'relative';
            btn.appendChild(speakBtn);
        });
    }

    // ۵. ضمایر جدول (.conj-table td.pronoun)
    function addButtonsToPronouns() {
        document.querySelectorAll('.conj-table td.pronoun').forEach(td => {
            if (td.querySelector('.speak-btn')) return;
            const text = td.innerText.trim();
            if (!text) return;

            const btn = createSpeakButton(text, { size: 'small' });
            td.insertBefore(btn, td.firstChild);
        });
    }

    // ۶. شناسه‌ها (جدول روش ساخت + کارت‌های حروف)
    function addButtonsToSuffixes() {
        // شناسه‌ها در جدول روش ساخت
        document.querySelectorAll('#rules .conj-table td.arabic').forEach(td => {
            if (td.querySelector('.speak-btn')) return;

            const text = td.innerText.trim();
            if (!text || text === '—') return;

            // اگر شناسه باشد (شروع با کَشیده ـ) یا حرف تک باشد
            const isSuffix = text.startsWith('ـ') || text.length <= 2;
            if (!isSuffix) return;

            const btn = createSpeakButton(text, { size: 'small' });
            td.insertBefore(btn, td.firstChild);
        });

        // کارت‌های حروف مضارعه
        document.querySelectorAll('.letter-card .arabic-big').forEach(el => {
            if (el.querySelector('.speak-btn')) return;

            const text = el.innerText.trim();
            if (!text || text.length > 2) return;

            const btn = createSpeakButton(text, { size: 'large' });
            btn.style.display = 'block';
            btn.style.margin = '8px auto 0';
            btn.style.marginLeft = 'auto';
            btn.style.marginRight = 'auto';
            el.appendChild(btn);
        });
    }

    // ============================================================
    // راه‌اندازی
    // ============================================================
    function init() {
        if (!isSupported()) {
            console.warn('Web Speech API پشتیبانی نمی‌شود');
            return;
        }

        const refresh = () => {
            addButtonsToTables();
            addButtonsToArabicBig();
            addButtonsToVerbButtons();
            addButtonsToOptions();
            addButtonsToPronouns();
            addButtonsToSuffixes();
        };

        refresh();

        // ناظر برای تغییرات داینامیک
        const pageObserver = new MutationObserver(() => {
            refresh();
        });

        pageObserver.observe(document.body, {
            childList: true,
            subtree: true
        });

        // آماده‌سازی صداها
        speechSynthesis.onvoiceschanged = () => {
            cachedVoice = null;
            getArabicVoice();
        };
    }

    // ===== API عمومی =====
    window.speakArabic = speakArabic;
    window.speakText = speakArabic;

    // ===== اجرا =====
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();