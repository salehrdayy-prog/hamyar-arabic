// ==========================================
// داده‌های افعال - ۱۴ صیغه با معنی فارسی
// ==========================================
const verbs = [
  {
    root: "كَتَبَ", meaning: "نوشتن",
    madi: {
      "هُوَ":       { form: "كَتَبَ",     fa: "او نوشت" },
      "هُمَا":     { form: "كَتَبَا",    fa: "آن دو (مذکر) نوشتند" },
      "هُمْ":      { form: "كَتَبُوا",   fa: "آن‌ها (مذکر) نوشتند" },
      "هِيَ":      { form: "كَتَبَتْ",   fa: "او (مؤنث) نوشت" },
      "هُمَا (مؤنث)": { form: "كَتَبَتَا", fa: "آن دو (مؤنث) نوشتند" },
      "هُنَّ":     { form: "كَتَبْنَ",   fa: "آن‌ها (مؤنث) نوشتند" },
      "أَنْتَ":    { form: "كَتَبْتَ",   fa: "تو (مذکر) نوشتی" },
      "أَنْتُمَا (مذکر)": { form: "كَتَبْتُمَا", fa: "شما دو نفر (مذکر) نوشتید" },
      "أَنْتُمَا (مؤنث)": { form: "كَتَبْتُمَا", fa: "شما دو نفر (مؤنث) نوشتید" },
      "أَنْتُمْ":  { form: "كَتَبْتُمْ", fa: "شما (مذکر) نوشتید" },
      "أَنْتِ":    { form: "كَتَبْتِ",   fa: "تو (مؤنث) نوشتی" },
      "أَنْتُنَّ": { form: "كَتَبْتُنَّ", fa: "شما (مؤنث) نوشتید" },
      "أَنَا":     { form: "كَتَبْتُ",   fa: "من نوشتم" },
      "نَحْنُ":    { form: "كَتَبْنَا",  fa: "ما نوشتیم" }
    },
    mozare: {
      "هُوَ":       { form: "يَكْتُبُ",    fa: "او می‌نویسد" },
      "هُمَا":     { form: "يَكْتُبَانِ",  fa: "آن دو (مذکر) می‌نویسند" },
      "هُمْ":      { form: "يَكْتُبُونَ",  fa: "آن‌ها (مذکر) می‌نویسند" },
      "هِيَ":      { form: "تَكْتُبُ",    fa: "او (مؤنث) می‌نویسد" },
      "هُمَا (مؤنث)": { form: "تَكْتُبَانِ", fa: "آن دو (مؤنث) می‌نویسند" },
      "هُنَّ":     { form: "يَكْتُبْنَ",   fa: "آن‌ها (مؤنث) می‌نویسند" },
      "أَنْتَ":    { form: "تَكْتُبُ",    fa: "تو (مذکر) می‌نویسی" },
      "أَنْتُمَا (مذکر)": { form: "تَكْتُبَانِ", fa: "شما دو نفر (مذکر) می‌نویسید" },
      "أَنْتُمَا (مؤنث)": { form: "تَكْتُبَانِ", fa: "شما دو نفر (مؤنث) می‌نویسید" },
      "أَنْتُمْ":  { form: "تَكْتُبُونَ",  fa: "شما (مذکر) می‌نویسید" },
      "أَنْتِ":    { form: "تَكْتُبِينَ",  fa: "تو (مؤنث) می‌نویسی" },
      "أَنْتُنَّ": { form: "تَكْتُبْنَ",   fa: "شما (مؤنث) می‌نویسید" },
      "أَنَا":     { form: "أَكْتُبُ",    fa: "من می‌نویسم" },
      "نَحْنُ":    { form: "نَكْتُبُ",    fa: "ما می‌نویسیم" }
    }
  },

  {
    root: "ذَهَبَ", meaning: "رفتن",
    madi: {
      "هُوَ":       { form: "ذَهَبَ",     fa: "او رفت" },
      "هُمَا":     { form: "ذَهَبَا",    fa: "آن دو (مذکر) رفتند" },
      "هُمْ":      { form: "ذَهَبُوا",   fa: "آن‌ها (مذکر) رفتند" },
      "هِيَ":      { form: "ذَهَبَتْ",   fa: "او (مؤنث) رفت" },
      "هُمَا (مؤنث)": { form: "ذَهَبَتَا", fa: "آن دو (مؤنث) رفتند" },
      "هُنَّ":     { form: "ذَهَبْنَ",   fa: "آن‌ها (مؤنث) رفتند" },
      "أَنْتَ":    { form: "ذَهَبْتَ",   fa: "تو (مذکر) رفتی" },
      "أَنْتُمَا (مذکر)": { form: "ذَهَبْتُمَا", fa: "شما دو نفر (مذکر) رفتید" },
      "أَنْتُمَا (مؤنث)": { form: "ذَهَبْتُمَا", fa: "شما دو نفر (مؤنث) رفتید" },
      "أَنْتُمْ":  { form: "ذَهَبْتُمْ", fa: "شما (مذکر) رفتید" },
      "أَنْتِ":    { form: "ذَهَبْتِ",   fa: "تو (مؤنث) رفتی" },
      "أَنْتُنَّ": { form: "ذَهَبْتُنَّ", fa: "شما (مؤنث) رفتید" },
      "أَنَا":     { form: "ذَهَبْتُ",   fa: "من رفتم" },
      "نَحْنُ":    { form: "ذَهَبْنَا",  fa: "ما رفتیم" }
    },
    mozare: {
      "هُوَ":       { form: "يَذْهَبُ",    fa: "او می‌رود" },
      "هُمَا":     { form: "يَذْهَبَانِ",  fa: "آن دو (مذکر) می‌روند" },
      "هُمْ":      { form: "يَذْهَبُونَ",  fa: "آن‌ها (مذکر) می‌روند" },
      "هِيَ":      { form: "تَذْهَبُ",    fa: "او (مؤنث) می‌رود" },
      "هُمَا (مؤنث)": { form: "تَذْهَبَانِ", fa: "آن دو (مؤنث) می‌روند" },
      "هُنَّ":     { form: "يَذْهَبْنَ",   fa: "آن‌ها (مؤنث) می‌روند" },
      "أَنْتَ":    { form: "تَذْهَبُ",    fa: "تو (مذکر) می‌روی" },
      "أَنْتُمَا (مذکر)": { form: "تَذْهَبَانِ", fa: "شما دو نفر (مذکر) می‌روید" },
      "أَنْتُمَا (مؤنث)": { form: "تَذْهَبَانِ", fa: "شما دو نفر (مؤنث) می‌روید" },
      "أَنْتُمْ":  { form: "تَذْهَبُونَ",  fa: "شما (مذکر) می‌روید" },
      "أَنْتِ":    { form: "تَذْهَبِينَ",  fa: "تو (مؤنث) می‌روی" },
      "أَنْتُنَّ": { form: "تَذْهَبْنَ",   fa: "شما (مؤنث) می‌روید" },
      "أَنَا":     { form: "أَذْهَبُ",    fa: "من می‌روم" },
      "نَحْنُ":    { form: "نَذْهَبُ",    fa: "ما می‌رویم" }
    }
  },

  {
    root: "عَلِمَ", meaning: "دانستن",
    madi: {
      "هُوَ":       { form: "عَلِمَ",     fa: "او دانست" },
      "هُمَا":     { form: "عَلِمَا",    fa: "آن دو (مذکر) دانستند" },
      "هُمْ":      { form: "عَلِمُوا",   fa: "آن‌ها (مذکر) دانستند" },
      "هِيَ":      { form: "عَلِمَتْ",   fa: "او (مؤنث) دانست" },
      "هُمَا (مؤنث)": { form: "عَلِمَتَا", fa: "آن دو (مؤنث) دانستند" },
      "هُنَّ":     { form: "عَلِمْنَ",   fa: "آن‌ها (مؤنث) دانستند" },
      "أَنْتَ":    { form: "عَلِمْتَ",   fa: "تو (مذکر) دانستی" },
      "أَنْتُمَا (مذکر)": { form: "عَلِمْتُمَا", fa: "شما دو نفر (مذکر) دانستید" },
      "أَنْتُمَا (مؤنث)": { form: "عَلِمْتُمَا", fa: "شما دو نفر (مؤنث) دانستید" },
      "أَنْتُمْ":  { form: "عَلِمْتُمْ", fa: "شما (مذکر) دانستید" },
      "أَنْتِ":    { form: "عَلِمْتِ",   fa: "تو (مؤنث) دانستی" },
      "أَنْتُنَّ": { form: "عَلِمْتُنَّ", fa: "شما (مؤنث) دانستید" },
      "أَنَا":     { form: "عَلِمْتُ",   fa: "من دانستم" },
      "نَحْنُ":    { form: "عَلِمْنَا",  fa: "ما دانستیم" }
    },
    mozare: {
      "هُوَ":       { form: "يَعْلَمُ",    fa: "او می‌داند" },
      "هُمَا":     { form: "يَعْلَمَانِ",  fa: "آن دو (مذکر) می‌دانند" },
      "هُمْ":      { form: "يَعْلَمُونَ",  fa: "آن‌ها (مذکر) می‌دانند" },
      "هِيَ":      { form: "تَعْلَمُ",    fa: "او (مؤنث) می‌داند" },
      "هُمَا (مؤنث)": { form: "تَعْلَمَانِ", fa: "آن دو (مؤنث) می‌دانند" },
      "هُنَّ":     { form: "يَعْلَمْنَ",   fa: "آن‌ها (مؤنث) می‌دانند" },
      "أَنْتَ":    { form: "تَعْلَمُ",    fa: "تو (مذکر) می‌دانی" },
      "أَنْتُمَا (مذکر)": { form: "تَعْلَمَانِ", fa: "شما دو نفر (مذکر) می‌دانید" },
      "أَنْتُمَا (مؤنث)": { form: "تَعْلَمَانِ", fa: "شما دو نفر (مؤنث) می‌دانید" },
      "أَنْتُمْ":  { form: "تَعْلَمُونَ",  fa: "شما (مذکر) می‌دانید" },
      "أَنْتِ":    { form: "تَعْلَمِينَ",  fa: "تو (مؤنث) می‌دانی" },
      "أَنْتُنَّ": { form: "تَعْلَمْنَ",   fa: "شما (مؤنث) می‌دانید" },
      "أَنَا":     { form: "أَعْلَمُ",    fa: "من می‌دانم" },
      "نَحْنُ":    { form: "نَعْلَمُ",    fa: "ما می‌دانیم" }
    }
  },

  {
    root: "نَصَرَ", meaning: "یاری کردن",
    madi: {
      "هُوَ":       { form: "نَصَرَ",     fa: "او یاری کرد" },
      "هُمَا":     { form: "نَصَرَا",    fa: "آن دو (مذکر) یاری کردند" },
      "هُمْ":      { form: "نَصَرُوا",   fa: "آن‌ها (مذکر) یاری کردند" },
      "هِيَ":      { form: "نَصَرَتْ",   fa: "او (مؤنث) یاری کرد" },
      "هُمَا (مؤنث)": { form: "نَصَرَتَا", fa: "آن دو (مؤنث) یاری کردند" },
      "هُنَّ":     { form: "نَصَرْنَ",   fa: "آن‌ها (مؤنث) یاری کردند" },
      "أَنْتَ":    { form: "نَصَرْتَ",   fa: "تو (مذکر) یاری کردی" },
      "أَنْتُمَا (مذکر)": { form: "نَصَرْتُمَا", fa: "شما دو نفر (مذکر) یاری کردید" },
      "أَنْتُمَا (مؤنث)": { form: "نَصَرْتُمَا", fa: "شما دو نفر (مؤنث) یاری کردید" },
      "أَنْتُمْ":  { form: "نَصَرْتُمْ", fa: "شما (مذکر) یاری کردید" },
      "أَنْتِ":    { form: "نَصَرْتِ",   fa: "تو (مؤنث) یاری کردی" },
      "أَنْتُنَّ": { form: "نَصَرْتُنَّ", fa: "شما (مؤنث) یاری کردید" },
      "أَنَا":     { form: "نَصَرْتُ",   fa: "من یاری کردم" },
      "نَحْنُ":    { form: "نَصَرْنَا",  fa: "ما یاری کردیم" }
    },
    mozare: {
      "هُوَ":       { form: "يَنْصُرُ",    fa: "او یاری می‌کند" },
      "هُمَا":     { form: "يَنْصُرَانِ",  fa: "آن دو (مذکر) یاری می‌کنند" },
      "هُمْ":      { form: "يَنْصُرُونَ",  fa: "آن‌ها (مذکر) یاری می‌کنند" },
      "هِيَ":      { form: "تَنْصُرُ",    fa: "او (مؤنث) یاری می‌کند" },
      "هُمَا (مؤنث)": { form: "تَنْصُرَانِ", fa: "آن دو (مؤنث) یاری می‌کنند" },
      "هُنَّ":     { form: "يَنْصُرْنَ",   fa: "آن‌ها (مؤنث) یاری می‌کنند" },
      "أَنْتَ":    { form: "تَنْصُرُ",    fa: "تو (مذکر) یاری می‌کنی" },
      "أَنْتُمَا (مذکر)": { form: "تَنْصُرَانِ", fa: "شما دو نفر (مذکر) یاری می‌کنید" },
      "أَنْتُمَا (مؤنث)": { form: "تَنْصُرَانِ", fa: "شما دو نفر (مؤنث) یاری می‌کنید" },
      "أَنْتُمْ":  { form: "تَنْصُرُونَ",  fa: "شما (مذکر) یاری می‌کنید" },
      "أَنْتِ":    { form: "تَنْصُرِينَ",  fa: "تو (مؤنث) یاری می‌کنی" },
      "أَنْتُنَّ": { form: "تَنْصُرْنَ",   fa: "شما (مؤنث) یاری می‌کنید" },
      "أَنَا":     { form: "أَنْصُرُ",    fa: "من یاری می‌کنم" },
      "نَحْنُ":    { form: "نَنْصُرُ",    fa: "ما یاری می‌کنیم" }
    }
  },

  {
    root: "فَتَحَ", meaning: "باز کردن",
    madi: {
      "هُوَ":       { form: "فَتَحَ",     fa: "او باز کرد" },
      "هُمَا":     { form: "فَتَحَا",    fa: "آن دو (مذکر) باز کردند" },
      "هُمْ":      { form: "فَتَحُوا",   fa: "آن‌ها (مذکر) باز کردند" },
      "هِيَ":      { form: "فَتَحَتْ",   fa: "او (مؤنث) باز کرد" },
      "هُمَا (مؤنث)": { form: "فَتَحَتَا", fa: "آن دو (مؤنث) باز کردند" },
      "هُنَّ":     { form: "فَتَحْنَ",   fa: "آن‌ها (مؤنث) باز کردند" },
      "أَنْتَ":    { form: "فَتَحْتَ",   fa: "تو (مذکر) باز کردی" },
      "أَنْتُمَا (مذکر)": { form: "فَتَحْتُمَا", fa: "شما دو نفر (مذکر) باز کردید" },
      "أَنْتُمَا (مؤنث)": { form: "فَتَحْتُمَا", fa: "شما دو نفر (مؤنث) باز کردید" },
      "أَنْتُمْ":  { form: "فَتَحْتُمْ", fa: "شما (مذکر) باز کردید" },
      "أَنْتِ":    { form: "فَتَحْتِ",   fa: "تو (مؤنث) باز کردی" },
      "أَنْتُنَّ": { form: "فَتَحْتُنَّ", fa: "شما (مؤنث) باز کردید" },
      "أَنَا":     { form: "فَتَحْتُ",   fa: "من باز کردم" },
      "نَحْنُ":    { form: "فَتَحْنَا",  fa: "ما باز کردیم" }
    },
    mozare: {
      "هُوَ":       { form: "يَفْتَحُ",    fa: "او باز می‌کند" },
      "هُمَا":     { form: "يَفْتَحَانِ",  fa: "آن دو (مذکر) باز می‌کنند" },
      "هُمْ":      { form: "يَفْتَحُونَ",  fa: "آن‌ها (مذکر) باز می‌کنند" },
      "هِيَ":      { form: "تَفْتَحُ",    fa: "او (مؤنث) باز می‌کند" },
      "هُمَا (مؤنث)": { form: "تَفْتَحَانِ", fa: "آن دو (مؤنث) باز می‌کنند" },
      "هُنَّ":     { form: "يَفْتَحْنَ",   fa: "آن‌ها (مؤنث) باز می‌کنند" },
      "أَنْتَ":    { form: "تَفْتَحُ",    fa: "تو (مذکر) باز می‌کنی" },
      "أَنْتُمَا (مذکر)": { form: "تَفْتَحَانِ", fa: "شما دو نفر (مذکر) باز می‌کنید" },
      "أَنْتُمَا (مؤنث)": { form: "تَفْتَحَانِ", fa: "شما دو نفر (مؤنث) باز می‌کنید" },
      "أَنْتُمْ":  { form: "تَفْتَحُونَ",  fa: "شما (مذکر) باز می‌کنید" },
      "أَنْتِ":    { form: "تَفْتَحِينَ",  fa: "تو (مؤنث) باز می‌کنی" },
      "أَنْتُنَّ": { form: "تَفْتَحْنَ",   fa: "شما (مؤنث) باز می‌کنید" },
      "أَنَا":     { form: "أَفْتَحُ",    fa: "من باز می‌کنم" },
      "نَحْنُ":    { form: "نَفْتَحُ",    fa: "ما باز می‌کنیم" }
    }
  },

  {
    root: "سَمِعَ", meaning: "شنیدن",
    madi: {
      "هُوَ":       { form: "سَمِعَ",     fa: "او شنید" },
      "هُمَا":     { form: "سَمِعَا",    fa: "آن دو (مذکر) شنیدند" },
      "هُمْ":      { form: "سَمِعُوا",   fa: "آن‌ها (مذکر) شنیدند" },
      "هِيَ":      { form: "سَمِعَتْ",   fa: "او (مؤنث) شنید" },
      "هُمَا (مؤنث)": { form: "سَمِعَتَا", fa: "آن دو (مؤنث) شنیدند" },
      "هُنَّ":     { form: "سَمِعْنَ",   fa: "آن‌ها (مؤنث) شنیدند" },
      "أَنْتَ":    { form: "سَمِعْتَ",   fa: "تو (مذکر) شنیدی" },
      "أَنْتُمَا (مذکر)": { form: "سَمِعْتُمَا", fa: "شما دو نفر (مذکر) شنیدید" },
      "أَنْتُمَا (مؤنث)": { form: "سَمِعْتُمَا", fa: "شما دو نفر (مؤنث) شنیدید" },
      "أَنْتُمْ":  { form: "سَمِعْتُمْ", fa: "شما (مذکر) شنیدید" },
      "أَنْتِ":    { form: "سَمِعْتِ",   fa: "تو (مؤنث) شنیدی" },
      "أَنْتُنَّ": { form: "سَمِعْتُنَّ", fa: "شما (مؤنث) شنیدید" },
      "أَنَا":     { form: "سَمِعْتُ",   fa: "من شنیدم" },
      "نَحْنُ":    { form: "سَمِعْنَا",  fa: "ما شنیدیم" }
    },
    mozare: {
      "هُوَ":       { form: "يَسْمَعُ",    fa: "او می‌شنود" },
      "هُمَا":     { form: "يَسْمَعَانِ",  fa: "آن دو (مذکر) می‌شنوند" },
      "هُمْ":      { form: "يَسْمَعُونَ",  fa: "آن‌ها (مذکر) می‌شنوند" },
      "هِيَ":      { form: "تَسْمَعُ",    fa: "او (مؤنث) می‌شنود" },
      "هُمَا (مؤنث)": { form: "تَسْمَعَانِ", fa: "آن دو (مؤنث) می‌شنوند" },
      "هُنَّ":     { form: "يَسْمَعْنَ",   fa: "آن‌ها (مؤنث) می‌شنوند" },
      "أَنْتَ":    { form: "تَسْمَعُ",    fa: "تو (مذکر) می‌شنوی" },
      "أَنْتُمَا (مذکر)": { form: "تَسْمَعَانِ", fa: "شما دو نفر (مذکر) می‌شنوید" },
      "أَنْتُمَا (مؤنث)": { form: "تَسْمَعَانِ", fa: "شما دو نفر (مؤنث) می‌شنوید" },
      "أَنْتُمْ":  { form: "تَسْمَعُونَ",  fa: "شما (مذکر) می‌شنوید" },
      "أَنْتِ":    { form: "تَسْمَعِينَ",  fa: "تو (مؤنث) می‌شنوی" },
      "أَنْتُنَّ": { form: "تَسْمَعْنَ",   fa: "شما (مؤنث) می‌شنوید" },
      "أَنَا":     { form: "أَسْمَعُ",    fa: "من می‌شنوم" },
      "نَحْنُ":    { form: "نَسْمَعُ",    fa: "ما می‌شنویم" }
    }
  }
];

// ==========================================
// سیستم ذخیره‌سازی آمار
// ==========================================
const Stats = {
  data: { quizTotal: 0, quizCorrect: 0, quizWrong: 0, gameBest: 0, practiceTotal: 0, practiceCorrect: 0 },

  load() {
    const saved = localStorage.getItem("arabicVerbStats");
    if (saved) this.data = JSON.parse(saved);
    this.render();
  },
  save() {
    localStorage.setItem("arabicVerbStats", JSON.stringify(this.data));
    this.render();
  },
  reset() {
    this.data = { quizTotal: 0, quizCorrect: 0, quizWrong: 0, gameBest: 0, practiceTotal: 0, practiceCorrect: 0 };
    this.save();
  },
  addQuiz(isCorrect) {
    this.data.quizTotal++;
    isCorrect ? this.data.quizCorrect++ : this.data.quizWrong++;
    this.save();
  },
  addPractice(isCorrect) {
    this.data.practiceTotal++;
    if (isCorrect) this.data.practiceCorrect++;
    this.save();
  },
  updateGameBest(score) {
    if (score > this.data.gameBest) { this.data.gameBest = score; this.save(); }
  },
  getLevel() {
    const total = this.data.quizTotal + this.data.practiceTotal;
    if (total < 5) return "مبتدی";
    if (total < 20) return "در حال یادگیری";
    if (total < 50) return "متوسط";
    if (total < 100) return "پیشرفته";
    return "استاد 🏆";
  },
  getPercent() {
    const all = this.data.quizTotal + this.data.practiceTotal;
    if (all === 0) return 0;
    const correct = this.data.quizCorrect + this.data.practiceCorrect;
    return Math.round((correct / all) * 100);
  },
  render() {
    document.getElementById("statQuizTotal").textContent = this.data.quizTotal;
    document.getElementById("statCorrect").textContent = this.data.quizCorrect + this.data.practiceCorrect;
    document.getElementById("statWrong").textContent = this.data.quizWrong;
    document.getElementById("statGameBest").textContent = this.data.gameBest;
    document.getElementById("statPercent").textContent = this.getPercent() + "%";
    document.getElementById("statLevel").textContent = this.getLevel();
    document.getElementById("progressFill").style.width = this.getPercent() + "%";
  }
};

// ==========================================
// منوی اصلی
// ==========================================
document.querySelectorAll(".nav-btn").forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById(btn.dataset.section).classList.add("active");
  };
});

// ==========================================
// بخش ۱: صرف فعل (با معنی فارسی)
// ==========================================
const verbsGrid = document.getElementById("verbsGrid");
const conjugationSection = document.getElementById("conjugationSection");
const verbTitle = document.getElementById("verbTitle");
const conjugationTable = document.getElementById("conjugationTable");
let currentVerb = null;
let currentTense = "madi";

verbs.forEach((verb, index) => {
  const btn = document.createElement("button");
  btn.className = "verb-btn";
  btn.innerHTML = `${verb.root}<span class="meaning">${verb.meaning}</span>`;
  btn.onclick = () => selectVerb(index, btn);
  verbsGrid.appendChild(btn);
});

function selectVerb(index, btn) {
  document.querySelectorAll(".verb-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  currentVerb = verbs[index];
  currentTense = "madi";
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  document.querySelector('.tab[data-tense="madi"]').classList.add("active");
  showConjugation();
  conjugationSection.style.display = "block";
}

function showConjugation() {
  if (!currentVerb) return;
  verbTitle.textContent = `صرف فعل «${currentVerb.root}» (${currentVerb.meaning})`;
  const data = currentVerb[currentTense];
  const tenseName = currentTense === "madi" ? "ماضی" : "مضارع";

  let html = `<table class="conj-table">
    <thead><tr>
      <th>#</th><th>ضمیر</th><th>${tenseName}</th><th>معنی فارسی</th>
    </tr></thead><tbody>`;

  let i = 1;
  for (const [pronoun, obj] of Object.entries(data)) {
    html += `<tr>
      <td>${i}</td>
      <td class="pronoun">${pronoun}</td>
      <td class="arabic">${obj.form}</td>
      <td class="meaning-cell">${obj.fa}</td>
    </tr>`;
    i++;
  }
  html += "</tbody></table>";
  conjugationTable.innerHTML = html;
}

document.querySelectorAll(".tab").forEach(tab => {
  tab.onclick = () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    currentTense = tab.dataset.tense;
    showConjugation();
  };
});

// ==========================================
// تابع کمکی: ساخت سؤال تصادفی (۴ نوع سؤال)
// ==========================================
function makeRandomQuestion() {
  const verb = verbs[Math.floor(Math.random() * verbs.length)];
  const tense = Math.random() < 0.5 ? "madi" : "mozare";
  const pronouns = Object.keys(verb[tense]);
  const pronoun = pronouns[Math.floor(Math.random() * pronouns.length)];
  const correctObj = verb[tense][pronoun];

  // نوع سؤال: 0 = عربی از ضمیر | 1 = معنی از عربی | 2 = ضمیر از عربی | 3 = عربی از معنی
  const qType = Math.floor(Math.random() * 4);

  let questionText = "";
  let correctAnswer = "";
  let optionPool = [];

  if (qType === 0) {
    questionText = `صرف <b>${tense === "madi" ? "ماضی" : "مضارع"}</b> فعل «${verb.root}» برای ضمیر «<b>${pronoun}</b>» چیست؟`;
    correctAnswer = correctObj.form;
    optionPool = Object.values(verb[tense]).map(o => o.form);
  } else if (qType === 1) {
    questionText = `معنی «<b>${correctObj.form}</b>» چیست؟ (فعل ${verb.root})`;
    correctAnswer = correctObj.fa;
    optionPool = Object.values(verb[tense]).map(o => o.fa);
    // اطمینان از یکتا بودن
    optionPool = [...new Set(optionPool)];
  } else if (qType === 2) {
    questionText = `فعل «<b>${correctObj.form}</b>» مربوط به کدام ضمیر است؟`;
    correctAnswer = pronoun;
    optionPool = pronouns;
  } else {
    questionText = `کدام فعل عربی معنی «<b>${correctObj.fa}</b>» را می‌دهد؟`;
    correctAnswer = correctObj.form;
    optionPool = Object.values(verb[tense]).map(o => o.form);
  }

  const options = new Set([correctAnswer]);
  let attempts = 0;
  while (options.size < 4 && attempts < 100) {
    const rand = optionPool[Math.floor(Math.random() * optionPool.length)];
    if (rand) options.add(rand);
    attempts++;
  }
  // اگر کمتر از ۴ گزینه بود، از کل افعال اضافه کن
  const allForms = verbs.flatMap(v => Object.values(v[tense]).map(o => qType === 1 ? o.fa : o.form));
  while (options.size < 4) {
    options.add(allForms[Math.floor(Math.random() * allForms.length)]);
  }

  return {
    verb, tense, pronoun,
    correct: correctAnswer,
    options: [...options].sort(() => Math.random() - 0.5),
    questionText
  };
}

// ==========================================
// بخش ۳: تمرین
// ==========================================
const startPractice = document.getElementById("startPractice");
const nextPractice = document.getElementById("nextPractice");
const practiceQuestion = document.getElementById("practiceQuestion");
const practiceOptions = document.getElementById("practiceOptions");
let practiceAnswered = false;
let practiceCurrent = null;

startPractice.onclick = () => {
  startPractice.style.display = "none";
  nextPracticeQuestion();
};

function nextPracticeQuestion() {
  practiceAnswered = false;
  nextPractice.style.display = "none";
  practiceOptions.innerHTML = "";
  practiceCurrent = makeRandomQuestion();
  practiceQuestion.innerHTML = practiceCurrent.questionText + '<span class="arabic-big">؟</span>';

  practiceCurrent.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = opt;
    btn.onclick = () => checkPractice(btn, opt);
    practiceOptions.appendChild(btn);
  });
}

function checkPractice(btn, selected) {
  if (practiceAnswered) return;
  practiceAnswered = true;
  const buttons = practiceOptions.querySelectorAll(".option-btn");
  buttons.forEach(b => {
    b.disabled = true;
    if (b.textContent === practiceCurrent.correct) b.classList.add("correct");
  });
  const isCorrect = selected === practiceCurrent.correct;
  if (isCorrect) btn.classList.add("correct");
  else btn.classList.add("wrong");
  Stats.addPractice(isCorrect);
  nextPractice.style.display = "inline-block";
}

nextPractice.onclick = nextPracticeQuestion;

// ==========================================
// بخش ۴: بازی
// ==========================================
const startGame = document.getElementById("startGame");
const gameQuestion = document.getElementById("gameQuestion");
const gameOptions = document.getElementById("gameOptions");
const timerEl = document.getElementById("timer");
const gameScoreEl = document.getElementById("gameScore");

let gameTime = 60, gameScore = 0, gameTimer = null, gameRunning = false;

startGame.onclick = () => {
  if (gameRunning) return;
  gameRunning = true;
  gameTime = 60;
  gameScore = 0;
  timerEl.textContent = gameTime;
  gameScoreEl.textContent = gameScore;
  startGame.style.display = "none";

  gameTimer = setInterval(() => {
    gameTime--;
    timerEl.textContent = gameTime;
    if (gameTime <= 0) endGame();
  }, 1000);
  nextGameQuestion();
};

function nextGameQuestion() {
  if (!gameRunning) return;
  gameOptions.innerHTML = "";
  gameCurrent = makeRandomQuestion();
  gameQuestion.innerHTML = gameCurrent.questionText;

  gameCurrent.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = opt;
    btn.onclick = () => {
      if (opt === gameCurrent.correct) {
        gameScore++;
        gameScoreEl.textContent = gameScore;
        nextGameQuestion();
      } else {
        btn.classList.add("wrong");
        setTimeout(() => nextGameQuestion(), 400);
      }
    };
    gameOptions.appendChild(btn);
  });
}

let gameCurrent = null;

function endGame() {
  clearInterval(gameTimer);
  gameRunning = false;
  Stats.updateGameBest(gameScore);
  gameQuestion.innerHTML = `⏰ زمان تمام شد!<br>امتیاز شما: <b>${gameScore}</b>`;
  gameOptions.innerHTML = "";
  startGame.textContent = "🔄 بازی مجدد";
  startGame.style.display = "inline-block";
}

// ==========================================
// بخش ۵: آزمون (۲۰ سؤال)
// ==========================================
const startQuiz = document.getElementById("startQuiz");
const nextQuestion = document.getElementById("nextQuestion");
const quizQuestion = document.getElementById("quizQuestion");
const quizOptions = document.getElementById("quizOptions");
const scoreEl = document.getElementById("score");
const totalEl = document.getElementById("total");

let score = 0, total = 0, quizAnswered = false, quizCurrent = null;

startQuiz.onclick = () => {
  score = 0; total = 0;
  scoreEl.textContent = 0; totalEl.textContent = 0;
  startQuiz.style.display = "none";
  nextQuizQuestion();
};

function nextQuizQuestion() {
  if (total >= 20) {
    quizQuestion.innerHTML = `🎉 آزمون تمام شد!<br>امتیاز: <b>${score}</b> از ۲۰`;
    quizOptions.innerHTML = "";
    nextQuestion.style.display = "none";
    startQuiz.textContent = "🔄 آزمون مجدد";
    startQuiz.style.display = "inline-block";
    return;
  }
  quizAnswered = false;
  nextQuestion.style.display = "none";
  quizOptions.innerHTML = "";
  quizCurrent = makeRandomQuestion();
  quizQuestion.innerHTML = quizCurrent.questionText;

  quizCurrent.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = opt;
    btn.onclick = () => checkQuiz(btn, opt);
    quizOptions.appendChild(btn);
  });
}

function checkQuiz(btn, selected) {
  if (quizAnswered) return;
  quizAnswered = true;
  total++;
  const buttons = quizOptions.querySelectorAll(".option-btn");
  buttons.forEach(b => {
    b.disabled = true;
    if (b.textContent === quizCurrent.correct) b.classList.add("correct");
  });
  const isCorrect = selected === quizCurrent.correct;
  if (isCorrect) { score++; btn.classList.add("correct"); }
  else btn.classList.add("wrong");
  Stats.addQuiz(isCorrect);
  scoreEl.textContent = score;
  totalEl.textContent = total;
  nextQuestion.style.display = "inline-block";
}

nextQuestion.onclick = nextQuizQuestion;

// ==========================================
// پاک کردن آمار
// ==========================================
document.getElementById("resetStats").onclick = () => {
  if (confirm("آیا مطمئنی می‌خواهی همه آمار پاک شود؟")) Stats.reset();
};

// ============================================================
// بخش ۷: امتحان تعاملی (کلیک روی ضمیر)
// ============================================================

const examVerbSelect = document.getElementById("examVerbSelect");
const pronounGrid = document.getElementById("pronounGrid");
const examResult = document.getElementById("examResult");
const examVerbDisplay = document.getElementById("examVerbDisplay");
const examMeaningDisplay = document.getElementById("examMeaningDisplay");
const examHintDisplay = document.getElementById("examHintDisplay");
const examTabs = document.querySelectorAll(".exam-tab");

let examCurrentVerb = verbs[0];
let examCurrentTense = "madi";
let examCurrentPronoun = null;

// ===== پر کردن dropdown افعال =====
function fillExamVerbSelect() {
  if (!examVerbSelect) return;
  examVerbSelect.innerHTML = "";
  verbs.forEach((v, i) => {
    const opt = document.createElement("option");
    opt.value = i;
    opt.textContent = `${v.root} (${v.meaning})`;
    examVerbSelect.appendChild(opt);
  });
  examVerbSelect.value = 0;
}

// ===== ساخت دکمه‌های ضمیر =====
function buildPronounGrid() {
  if (!pronounGrid) return;
  pronounGrid.innerHTML = "";

  const pronouns = Object.keys(examCurrentVerb[examCurrentTense]);

  pronouns.forEach(pronoun => {
    const btn = document.createElement("button");
    btn.className = "pronoun-btn";
    btn.type = "button";
    btn.textContent = pronoun;

    btn.onclick = () => selectExamPronoun(pronoun, btn);
    pronounGrid.appendChild(btn);
  });
}

// ===== کلیک روی ضمیر =====
function selectExamPronoun(pronoun, btn) {
  // حالت فعال
  document.querySelectorAll(".pronoun-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");

  examCurrentPronoun = pronoun;

  // گرفتن فعل
  const verbData = examCurrentVerb[examCurrentTense][pronoun];
  const form = verbData.form;
  const meaning = verbData.fa;

  // نمایش نتیجه
  examResult.classList.add("filled");
  examVerbDisplay.textContent = form;
  examVerbDisplay.classList.remove("show");
  void examVerbDisplay.offsetWidth; // reflow
  examVerbDisplay.classList.add("show");

  examMeaningDisplay.textContent = meaning;
  examHintDisplay.textContent = "";

  // دکمه صوتی روی فعل
  addExamSpeakButton(form);
}

// ===== دکمه صوتی داخل جعبه نتیجه =====
function addExamSpeakButton(formText) {
  // حذف دکمه قبلی
  const oldBtn = examVerbDisplay.parentNode.querySelector(".exam-speak-btn");
  if (oldBtn) oldBtn.remove();

  // اگر voice.js بارگذاری شده
  if (typeof window.speakArabic !== "function") return;

  const btn = document.createElement("button");
  btn.className = "speak-btn exam-speak-btn";
  btn.type = "button";
  btn.innerHTML = "🔊";
  btn.title = "شنیدن تلفظ";
  btn.style.cssText = `
    background: rgba(118, 75, 162, 0.1);
    border: 1px solid rgba(118, 75, 162, 0.3);
    border-radius: 50%;
    cursor: pointer;
    font-size: 16px;
    width: 36px;
    height: 36px;
    padding: 0;
    margin-top: 12px;
    transition: 0.2s;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  `;
  btn.onclick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    window.speakArabic(formText);
  };

  examVerbDisplay.parentNode.insertBefore(btn, examVerbDisplay.nextSibling);
}

// ===== رویداد تغییر فعل =====
if (examVerbSelect) {
  examVerbSelect.onchange = () => {
    examCurrentVerb = verbs[parseInt(examVerbSelect.value)];
    examCurrentPronoun = null;
    buildPronounGrid();
    resetExamResult();
  };
}

// ===== رویداد تب‌های زمان =====
examTabs.forEach(tab => {
  tab.onclick = () => {
    examTabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    examCurrentTense = tab.dataset.tense;
    examCurrentPronoun = null;
    buildPronounGrid();
    resetExamResult();
  };
});

// ===== ریست نتیجه =====
function resetExamResult() {
  examResult.classList.remove("filled");
  examVerbDisplay.textContent = "—";
  examVerbDisplay.classList.remove("show");
  examMeaningDisplay.textContent = "";
  examHintDisplay.textContent = "یک ضمیر انتخاب کن";

  // حذف دکمه صوتی
  const oldBtn = examResult.querySelector(".exam-speak-btn");
  if (oldBtn) oldBtn.remove();
}

// ===== راه‌اندازی =====
fillExamVerbSelect();
buildPronounGrid();

// ============================================================
// نصب PWA
// ============================================================
let deferredPrompt = null;
const installBar = document.getElementById("installBar");
const installBtn = document.getElementById("installBtn");

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  if (installBar) installBar.style.display = "block";
});

if (installBtn) {
  installBtn.addEventListener("click", async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      console.log("برنامه نصب شد ✅");
    }
    deferredPrompt = null;
    if (installBar) installBar.style.display = "none";
  });
}

window.addEventListener("appinstalled", () => {
  if (installBar) installBar.style.display = "none";
  deferredPrompt = null;
});

// ============================================================
// 🔄 سیستم بروزرسانی خودکار
// ============================================================

const UPDATE_KEY = "appUpdateClicked";
const CURRENT_VERSION = "1.2.0"; // ← هر بار نسخه جدید دادی، این را عوض کن

const updateBar = document.getElementById("updateBar");
const updateBtn = document.getElementById("updateBtn");

// ===== بررسی نیاز به نمایش دکمه =====
function checkUpdateNeeded() {
  if (!updateBar || !updateBtn) return;

  // اگر قبلاً کلیک کرده، دیگر نشان نده
  const hasClicked = localStorage.getItem(UPDATE_KEY);
  if (hasClicked === "true") {
    updateBar.style.display = "none";
    return;
  }

  // بررسی نسخه
  const savedVersion = localStorage.getItem("appVersion");
  if (savedVersion === CURRENT_VERSION) {
    // نسخه یکسان است، نیازی به بروزرسانی نیست
    updateBar.style.display = "none";
    return;
  }

  // نمایش دکمه
  updateBar.style.display = "block";
}

// ===== پاک‌سازی کامل داده‌های مرورگر =====
async function clearBrowserData() {
  console.log("🧹 شروع پاک‌سازی داده‌ها...");

  // 1. پاک کردن localStorage
  try {
    localStorage.clear();
    console.log("✅ localStorage پاک شد");
  } catch (e) {
    console.warn("خطا در پاک‌سازی localStorage:", e);
  }

  // 2. پاک کردن sessionStorage
  try {
    sessionStorage.clear();
    console.log("✅ sessionStorage پاک شد");
  } catch (e) {
    console.warn("خطا در پاک‌سازی sessionStorage:", e);
  }

  // 3. پاک کردن IndexedDB
  try {
    if (window.indexedDB && indexedDB.databases) {
      const databases = await indexedDB.databases();
      for (const db of databases) {
        if (db.name) {
          indexedDB.deleteDatabase(db.name);
          console.log("✅ IndexedDB پاک شد:", db.name);
        }
      }
    }
  } catch (e) {
    console.warn("خطا در پاک‌سازی IndexedDB:", e);
  }

  // 4. پاک کردن Cache Storage (Service Worker Cache)
  try {
    if ("caches" in window) {
      const cacheNames = await caches.keys();
      await Promise.all(
        cacheNames.map(name => {
          console.log("✅ Cache پاک شد:", name);
          return caches.delete(name);
        })
      );
    }
  } catch (e) {
    console.warn("خطا در پاک‌سازی Cache:", e);
  }

  // 5. لغو ثبت Service Worker
  try {
    if ("serviceWorker" in navigator) {
      const registrations = await navigator.serviceWorker.getRegistrations();
      for (const reg of registrations) {
        await reg.unregister();
        console.log("✅ Service Worker لغو شد");
      }
    }
  } catch (e) {
    console.warn("خطا در لغو Service Worker:", e);
  }

  console.log("🎉 پاک‌سازی کامل شد!");
}

// ===== کلیک روی دکمه بروزرسانی =====
if (updateBtn) {
  updateBtn.onclick = async () => {
    // حالت loading
    updateBtn.classList.add("loading");
    updateBtn.textContent = "در حال بروزرسانی...";

    // پیام به کاربر
    if (updateBar) {
      const hint = updateBar.querySelector(".update-hint");
      if (hint) hint.textContent = "لطفاً صبر کنید...";
    }

    // پاک‌سازی داده‌ها
    await clearBrowserData();

    // علامت‌گذاری که کاربر کلیک کرده (تا دیگر نشان داده نشود)
    localStorage.setItem(UPDATE_KEY, "true");
    localStorage.setItem("appVersion", CURRENT_VERSION);

    // پیام موفقیت
    updateBtn.textContent = "✅ بروزرسانی شد!";
    updateBtn.style.background = "linear-gradient(135deg, #4caf50, #45a049)";

    if (updateBar) {
      const hint = updateBar.querySelector(".update-hint");
      if (hint) hint.textContent = "در حال بارگذاری نسخه جدید...";
    }

    // بعد از ۱.۵ ثانیه، صفحه را دوباره بارگذاری کن
    setTimeout(() => {
      // راه‌های مختلف برای بارگذاری مجدد بدون کش
      try {
        // بارگذاری مجدد با پاک کردن کش
        window.location.reload(true);
      } catch (e) {
        // اگر مرورگر پشتیبانی نکرد، از روش جایگزین
        window.location.href = window.location.href + "?v=" + Date.now();
      }
    }, 1500);
  };
}

// ===== اجرای اولیه =====
checkUpdateNeeded();

// ===== (اختیاری) اگر می‌خواهی دکمه بعد از مدتی دوباره بیاید =====
// مثلاً هر ۳۰ روز یک بار:
/*
const lastUpdate = localStorage.getItem("lastUpdateTime");
const now = Date.now();
const THIRTY_DAYS = 30 * 24 * 60 * 60 * 1000;

if (!lastUpdate || (now - parseInt(lastUpdate)) > THIRTY_DAYS) {
  localStorage.removeItem(UPDATE_KEY);
}
localStorage.setItem("lastUpdateTime", now.toString());
*/

// ==========================================
// بارگذاری
// ==========================================
Stats.load();