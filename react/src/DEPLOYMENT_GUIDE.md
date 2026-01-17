# 🚀 دليل النشر - Deployment Guide

## خيارات النشر المتاحة

---

## 1️⃣ Vercel (موصى به ⭐)

### المميزات:
- ✅ مجاني للمشاريع الصغيرة والمتوسطة
- ✅ نشر تلقائي من Git
- ✅ SSL مجاني
- ✅ CDN عالمي سريع
- ✅ دعم كامل لـ React Router

### خطوات النشر:

1. **أنشئ حساب على Vercel:**
   - اذهب إلى [vercel.com](https://vercel.com)
   - سجل دخول باستخدام GitHub

2. **ارفع الكود إلى GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

3. **اربط المشروع بـ Vercel:**
   - اضغط "New Project"
   - اختر الريبو من GitHub
   - اضغط "Deploy"

4. **الإعدادات (اختياري):**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

✅ **تم! المشروع سينشر تلقائياً على كل Push**

---

## 2️⃣ Netlify

### المميزات:
- ✅ مجاني
- ✅ سهل الاستخدام
- ✅ Forms مجانية
- ✅ Functions serverless

### خطوات النشر:

1. **سجل في Netlify:**
   - [netlify.com](https://netlify.com)

2. **أنشئ ملف `netlify.toml` في المشروع:**
   ```toml
   [build]
     command = "npm run build"
     publish = "dist"

   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

3. **ارفع إلى GitHub ثم اربط بـ Netlify:**
   - New site from Git
   - اختر الريبو
   - Deploy

---

## 3️⃣ GitHub Pages

### المميزات:
- ✅ مجاني بالكامل
- ✅ متكامل مع GitHub

### خطوات النشر:

1. **عدّل `vite.config.ts`:**
   ```typescript
   export default defineConfig({
     base: '/REPO_NAME/', // اسم الريبو
     // ... باقي الإعدادات
   })
   ```

2. **أضف `deploy` script في `package.json`:**
   ```json
   {
     "scripts": {
       "deploy": "npm run build && gh-pages -d dist"
     }
   }
   ```

3. **ثبّت gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

4. **انشر:**
   ```bash
   npm run deploy
   ```

---

## 4️⃣ Self-Hosted (استضافة ذاتية)

### على خادم Linux (Ubuntu):

1. **ثبّت Node.js و Nginx:**
   ```bash
   sudo apt update
   sudo apt install nodejs npm nginx
   ```

2. **استنسخ المشروع:**
   ```bash
   git clone YOUR_REPO_URL
   cd ksu-ticketing-system
   npm install
   npm run build
   ```

3. **انسخ الملفات المبنية:**
   ```bash
   sudo cp -r dist/* /var/www/html/
   ```

4. **أعد Nginx لـ React Router:**
   
   عدّل `/etc/nginx/sites-available/default`:
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
       root /var/www/html;
       index index.html;

       location / {
           try_files $uri $uri/ /index.html;
       }
   }
   ```

5. **أعد تشغيل Nginx:**
   ```bash
   sudo systemctl restart nginx
   ```

---

## 5️⃣ Docker

### إنشاء `Dockerfile`:

```dockerfile
FROM node:18-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### إنشاء `nginx.conf`:

```nginx
server {
    listen 80;
    location / {
        root /usr/share/nginx/html;
        index index.html index.htm;
        try_files $uri $uri/ /index.html;
    }
}
```

### البناء والتشغيل:

```bash
docker build -t ksu-ticketing .
docker run -p 80:80 ksu-ticketing
```

---

## ⚙️ متغيرات البيئة (Environment Variables)

إذا كنت تستخدم API أو مفاتيح خارجية:

### 1. أنشئ ملف `.env`:
```env
VITE_API_URL=https://api.example.com
VITE_APP_NAME=KSU Ticketing System
```

### 2. استخدمها في الكود:
```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

### 3. في منصات النشر:
- **Vercel:** Environment Variables في Dashboard
- **Netlify:** Site settings → Environment variables
- **GitHub Pages:** استخدم GitHub Secrets

---

## 🔒 SSL Certificate (HTTPS)

جميع المنصات المذكورة توفر SSL مجاني تلقائياً ✅

للاستضافة الذاتية، استخدم **Let's Encrypt**:

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

---

## 📊 مراقبة الأداء

### أدوات مقترحة:
- **Google Analytics** - تتبع الزيارات
- **Sentry** - تتبع الأخطاء
- **Vercel Analytics** - تحليلات مدمجة
- **Lighthouse** - قياس الأداء

---

## ✅ Checklist قبل النشر

- [ ] تم استبدال جميع `figma:asset` بصور حقيقية
- [ ] تم اختبار المشروع محلياً: `npm run build && npm run preview`
- [ ] جميع الروابط تعمل بشكل صحيح
- [ ] الموقع متجاوب على جميع الأجهزة
- [ ] لا توجد أخطاء في Console
- [ ] تم تحسين الصور (ضغط)
- [ ] تم اختبار RTL (العربية)
- [ ] تم إعداد `.env` للبيانات الحساسة

---

## 🆘 حل مشاكل شائعة

### المشكلة: "404 على refresh"
**السبب:** عدم تهيئة السيرفر لـ React Router  
**الحل:** أضف redirect rules (راجع الأمثلة أعلاه)

### المشكلة: CSS لا يعمل
**السبب:** مشكلة في base URL  
**الحل:** تأكد من `base` في `vite.config.ts`

### المشكلة: الصور لا تظهر
**السبب:** مسارات خاطئة  
**الحل:** استخدم `import` بدلاً من مسارات ثابتة

---

## 📞 الدعم

للمزيد من المساعدة:
- [Vite Deployment Docs](https://vitejs.dev/guide/static-deploy.html)
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)

---

✅ **بالتوفيق في نشر مشروعك!**
