# ✅ قائمة المهام - Migration Checklist

## 📋 خطوات تحويل المشروع من Figma Make إلى Vite

---

## المرحلة 1: إعداد البنية الأساسية ✅

تم إنشاء الملفات التالية (جاهزة):

- [x] `/package.json` - ملف المكتبات
- [x] `/vite.config.ts` - إعدادات Vite
- [x] `/tsconfig.json` - إعدادات TypeScript
- [x] `/tsconfig.node.json` - إعدادات Node
- [x] `/index.html` - ملف HTML الرئيسي
- [x] `/.gitignore` - Git ignore
- [x] `/.eslintrc.cjs` - ESLint config
- [x] `/README.md` - التوثيق الرئيسي
- [x] `/SETUP_GUIDE.md` - دليل الإعداد الكامل
- [x] `/IMAGES_GUIDE.md` - دليل الصور
- [x] `/DEPLOYMENT_GUIDE.md` - دليل النشر

---

## المرحلة 2: نقل الملفات إلى `/src` ⚠️

**يجب عليك نقل الملفات التالية يدوياً:**

### 1. نقل ملف main.tsx:
```bash
# من:
/src/main.tsx (تم إنشاؤه)

# تأكد من أن محتواه:
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

### 2. نقل جميع الملفات الموجودة حالياً إلى `/src`:

```
انقل من الجذر إلى /src:
├── App.tsx           → /src/App.tsx
├── components/       → /src/components/
├── contexts/         → /src/contexts/
├── imports/          → /src/imports/
├── pages/            → /src/pages/
└── styles/           → /src/styles/
```

---

## المرحلة 3: تحديث استيرادات الصور 🖼️

**هذه أهم خطوة!** يجب استبدال `figma:asset` في الملفات التالية:

### ✏️ ملف: `/src/components/Navbar.tsx`
```typescript
// السطر 2
// ❌ قبل:
import imgLogo from "figma:asset/99dd989727a003d1451e90bb5ff2c09e4c24de63.png";

// ✅ بعد:
import imgLogo from "../assets/images/logo.png";
```

### ✏️ ملف: `/src/imports/HeroSection.tsx`
```typescript
// السطر 2
// ❌ قبل:
import imgHeroImage1 from "figma:asset/854fd69d0b03c80d9e26e8ef207b58548b2f4940.png";

// ✅ بعد:
import imgHeroImage1 from "../assets/images/hero-image.png";
```

### ✏️ ملف: `/src/imports/AboutOurKsu.tsx`
```typescript
// السطر 2
// ❌ قبل:
import imgAboutHeroImage1 from "figma:asset/98ba85f888287ff174bf52e04d60cd8363aeaff3.png";

// ✅ بعد:
import imgAboutHeroImage1 from "../assets/images/about-image.png";
```

### ✏️ ملف: `/src/imports/OurNumbersSection.tsx`
```typescript
// السطر 3
// ❌ قبل:
import imgOurNumbersSection from "figma:asset/2de6f0096401685cbf6679b7498e485ca7a407bb.png";

// ✅ بعد:
import imgOurNumbersSection from "../assets/images/stats-image.png";
```

---

## المرحلة 4: إضافة الصور 📸

### 1. أنشئ المجلد:
```bash
mkdir -p src/assets/images
```

### 2. صدّر الصور من Figma وضعها في:
```
src/assets/images/
├── logo.png           (شعار الجامعة - 163x56px)
├── hero-image.png     (صورة Hero - 696x578px)
├── about-image.png    (صورة About - 640x480px)
└── stats-image.png    (صورة Stats - 600x400px)
```

**📌 راجع ملف [IMAGES_GUIDE.md](./IMAGES_GUIDE.md) للتفاصيل**

---

## المرحلة 5: التثبيت والتشغيل 🚀

### 1. ثبّت المكتبات:
```bash
npm install
```

**المكتبات التي سيتم تثبيتها:**
- react & react-dom
- react-router-dom
- lucide-react
- typescript
- vite
- tailwindcss
- وغيرها...

### 2. شغّل المشروع:
```bash
npm run dev
```

### 3. افتح المتصفح:
```
http://localhost:3000
```

---

## المرحلة 6: الاختبار 🧪

تحقق من:

- [ ] الموقع يفتح بدون أخطاء
- [ ] جميع الصور تظهر بشكل صحيح
- [ ] التنقل بين الصفحات يعمل
- [ ] تبديل اللغة يعمل (عربي/إنجليزي)
- [ ] التصميم متجاوب على Mobile/Tablet/Desktop
- [ ] جميع التأثيرات تعمل (fade-in, counter, typing)
- [ ] لا توجد أخطاء في Console
- [ ] RTL يعمل بشكل صحيح في العربية

---

## المرحلة 7: البناء للإنتاج 📦

```bash
npm run build
```

سيتم إنشاء مجلد `/dist` يحتوي على الملفات الجاهزة للنشر.

### معاينة النسخة المبنية:
```bash
npm run preview
```

---

## 🎯 Quick Start للمبرمج الجديد

```bash
# 1. استنسخ المشروع
git clone YOUR_REPO_URL
cd ksu-ticketing-system

# 2. ثبّت المكتبات
npm install

# 3. أنشئ مجلد الصور
mkdir -p src/assets/images

# 4. ضع الصور في src/assets/images/
# (logo.png, hero-image.png, about-image.png, stats-image.png)

# 5. عدّل استيرادات الصور في الملفات الأربعة
# (راجع IMAGES_GUIDE.md)

# 6. شغّل المشروع
npm run dev

# 7. افتح http://localhost:3000
```

---

## 🗂️ الهيكل النهائي المتوقع

```
ksu-ticketing-system/
├── public/                      # ملفات عامة (favicon, إلخ)
├── src/
│   ├── assets/
│   │   └── images/             # الصور (logo, hero, etc)
│   ├── components/
│   │   ├── figma/
│   │   │   └── ImageWithFallback.tsx
│   │   ├── Layout.tsx
│   │   └── Navbar.tsx
│   ├── contexts/
│   │   └── LanguageContext.tsx
│   ├── imports/                # Figma components
│   │   ├── AboutOurKsu.tsx
│   │   ├── CatSection.tsx
│   │   ├── FaqSection.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Home.tsx
│   │   ├── HowItWorksSecton.tsx
│   │   ├── OurNumbersSection.tsx
│   │   └── svg-*.ts
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   └── UnderDevelopment.tsx
│   ├── styles/
│   │   └── globals.css
│   ├── App.tsx
│   └── main.tsx
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── README.md
├── SETUP_GUIDE.md              # 📖 اقرأ هذا أولاً!
├── IMAGES_GUIDE.md             # 🖼️ دليل الصور
├── DEPLOYMENT_GUIDE.md         # 🚀 دليل النشر
├── MIGRATION_CHECKLIST.md      # ✅ هذا الملف
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## 🆘 مشاكل متوقعة وحلولها

### ❌ "Cannot find module './App.tsx'"
**الحل:** تأكد من نقل `App.tsx` إلى `/src/App.tsx`

### ❌ "Cannot find module '../assets/images/logo.png'"
**الحل:** 
1. تأكد من إنشاء المجلد `/src/assets/images/`
2. تأكد من وضع الصور فيه
3. تأكد من أسماء الملفات مطابقة تماماً

### ❌ "Tailwind styles not working"
**الحل:** تأكد من استيراد `globals.css` في `main.tsx`:
```typescript
import './styles/globals.css'
```

### ❌ "404 on page refresh"
**الحل:** هذا طبيعي في التطوير. سيتم حله عند النشر (راجع DEPLOYMENT_GUIDE.md)

---

## 📚 ملفات التوثيق

| الملف | الغرض |
|------|-------|
| **README.md** | نظرة عامة سريعة |
| **SETUP_GUIDE.md** | دليل الإعداد الكامل للمبرمجين |
| **IMAGES_GUIDE.md** | كيفية استبدال استيرادات الصور |
| **DEPLOYMENT_GUIDE.md** | كيفية نشر المشروع (Vercel, Netlify, إلخ) |
| **MIGRATION_CHECKLIST.md** | هذا الملف - قائمة المهام |

---

## 🎓 موارد إضافية

- [React Docs](https://react.dev)
- [TypeScript Docs](https://www.typescriptlang.org/docs)
- [Vite Docs](https://vitejs.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Router Docs](https://reactrouter.com)

---

## ✅ Checklist النهائي

قبل البدء بالتطوير، تأكد من:

- [ ] قرأت `README.md`
- [ ] قرأت `SETUP_GUIDE.md`
- [ ] نفذت `npm install` بنجاح
- [ ] نقلت جميع الملفات إلى `/src`
- [ ] أنشأت مجلد `src/assets/images`
- [ ] وضعت الصور الأربعة
- [ ] عدلت استيرادات `figma:asset` في الملفات الأربعة
- [ ] شغّلت `npm run dev` والموقع يعمل
- [ ] لا توجد أخطاء في Console
- [ ] جميع الصور تظهر
- [ ] التنقل بين الصفحات يعمل
- [ ] اللغة العربية والإنجليزية تعملان

---

✅ **إذا أكملت جميع الخطوات، المشروع جاهز للتطوير!**

للأسئلة أو المشاكل، راجع ملف `SETUP_GUIDE.md` أو `DEPLOYMENT_GUIDE.md`.

---

**آخر تحديث:** ديسمبر 2025  
**الإصدار:** 1.0.0  
**الحالة:** ✅ جاهز للإنتاج
