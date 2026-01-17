# 🔌 دليل التكامل - Integration Guide

## كيفية ربط المكونات الحالية بلوحة التحكم

---

## 📋 نظرة عامة

تم إنشاء لوحة تحكم كاملة، الآن نحتاج لربط المكونات الموجودة (HeroSection, AboutOurKsu, إلخ) لقراءة المحتوى من قاعدة البيانات بدلاً من الكود المباشر.

---

## 🔄 خطوات التكامل

### المرحلة 1: إنشاء Hook للمحتوى

أنشئ ملف `/src/hooks/useContent.tsx`:

```typescript
import { useState, useEffect } from 'react';
import { projectId, publicAnonKey } from '../utils/supabase/info';

export function useContent() {
  const [content, setContent] = useState<any>({});
  const [loading, setLoading] = useState(true);
  
  const serverUrl = `https://${projectId}.supabase.co/functions/v1/make-server-4ca007e5`;

  useEffect(() => {
    const loadContent = async () => {
      try {
        const response = await fetch(`${serverUrl}/content`, {
          headers: { 'Authorization': `Bearer ${publicAnonKey}` }
        });
        const result = await response.json();
        
        if (result.success) {
          setContent(result.data || {});
        }
      } catch (error) {
        console.error('Error loading content:', error);
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, []);

  return { content, loading };
}
```

---

### المرحلة 2: تحديث HeroSection

في `/src/imports/HeroSection.tsx`:

```typescript
import { useContent } from '../hooks/useContent';
import { useLanguage } from '../contexts/LanguageContext';

export default function HeroSection() {
  const { content, loading } = useContent();
  const { language, t } = useLanguage();
  
  // Use content from database, fallback to translations
  const title = content.hero?.[`title${language === 'ar' ? 'Ar' : 'En'}`] 
    || t('hero.title');
  const description = content.hero?.[`description${language === 'ar' ? 'Ar' : 'En'}`] 
    || t('hero.description');

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
    </div>;
  }

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      {/* ... rest of component */}
    </div>
  );
}
```

---

### المرحلة 3: تحديث الصور

لاستخدام الصور من لوحة التحكم:

```typescript
import { useState, useEffect } from 'react';
import { projectId, publicAnonKey } from '../utils/supabase/info';

export function useImage(section: string) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  
  const serverUrl = `https://${projectId}.supabase.co/functions/v1/make-server-4ca007e5`;

  useEffect(() => {
    const loadImage = async () => {
      try {
        const response = await fetch(`${serverUrl}/image/${section}`, {
          headers: { 'Authorization': `Bearer ${publicAnonKey}` }
        });
        const result = await response.json();
        
        if (result.success && result.url) {
          setImageUrl(result.url);
        }
      } catch (error) {
        console.error('Error loading image:', error);
      }
    };

    loadImage();
  }, [section]);

  return imageUrl;
}

// في المكون:
function HeroSection() {
  const heroImage = useImage('hero');
  const fallbackImage = imgHeroImage1; // الصورة الأصلية

  return (
    <img src={heroImage || fallbackImage} alt="Hero" />
  );
}
```

---

### المرحلة 4: تحديث الإحصائيات

في `/src/imports/OurNumbersSection.tsx`:

```typescript
import { useContent } from '../hooks/useContent';

export default function OurNumbersSection() {
  const { content } = useContent();
  
  const stats = content.statistics || {
    resolvedTickets: 15234,
    activeUsers: 8500,
    avgResponseTime: 2
  };

  return (
    <div>
      <Counter end={stats.resolvedTickets} />
      <Counter end={stats.activeUsers} />
      <Counter end={stats.avgResponseTime} />
    </div>
  );
}
```

---

## 🎯 النمط الموصى به

### استخدام Fallback Pattern:

دائماً احتفظ بالمحتوى الأصلي كـ fallback:

```typescript
const title = content.hero?.titleAr || 'العنوان الافتراضي';
const image = dynamicImage || staticImage;
```

هذا يضمن:
- ✅ الموقع يعمل حتى لو كانت لوحة التحكم فارغة
- ✅ لا توجد أخطاء في حالة فشل تحميل المحتوى
- ✅ تجربة مستخدم سلسة

---

## 📊 بنية البيانات الموصى بها

### Hero Section:
```json
{
  "hero": {
    "titleAr": "مرحباً بك في نظام التذاكر",
    "titleEn": "Welcome to KSU Ticketing",
    "descriptionAr": "نظام متكامل...",
    "descriptionEn": "Complete system...",
    "buttonTextAr": "ابدأ الآن",
    "buttonTextEn": "Get Started"
  }
}
```

### Statistics:
```json
{
  "statistics": {
    "resolvedTickets": 15234,
    "activeUsers": 8500,
    "avgResponseTime": 2
  }
}
```

### About Section:
```json
{
  "about": {
    "titleAr": "عن جامعة الملك سعود",
    "titleEn": "About King Saud University",
    "descriptionAr": "تأسست الجامعة...",
    "descriptionEn": "The university was founded...",
    "features": [
      {
        "titleAr": "دعم 24/7",
        "titleEn": "24/7 Support",
        "descriptionAr": "...",
        "descriptionEn": "..."
      }
    ]
  }
}
```

---

## 🔄 تحديث المحتوى تلقائياً

### إضافة Auto-Refresh:

```typescript
export function useContent(refreshInterval?: number) {
  const [content, setContent] = useState<any>({});
  
  useEffect(() => {
    const loadContent = async () => {
      // ... load logic
    };

    loadContent();
    
    // Refresh every X seconds
    if (refreshInterval) {
      const interval = setInterval(loadContent, refreshInterval);
      return () => clearInterval(interval);
    }
  }, [refreshInterval]);

  return { content };
}

// استخدام:
const { content } = useContent(60000); // تحديث كل دقيقة
```

---

## 🎨 Loading States

### إضافة Skeleton Loaders:

```typescript
function HeroSection() {
  const { content, loading } = useContent();

  if (loading) {
    return (
      <div className="animate-pulse">
        <div className="h-12 bg-gray-200 rounded w-3/4 mb-4"></div>
        <div className="h-6 bg-gray-200 rounded w-1/2"></div>
      </div>
    );
  }

  return (
    // ... actual content
  );
}
```

---

## 🔍 التحقق من المحتوى

### إضافة Validation:

```typescript
function validateContent(content: any, section: string) {
  const required = {
    hero: ['titleAr', 'titleEn', 'descriptionAr', 'descriptionEn'],
    statistics: ['resolvedTickets', 'activeUsers', 'avgResponseTime']
  };

  const fields = required[section as keyof typeof required] || [];
  
  return fields.every(field => 
    content[section] && content[section][field] !== undefined
  );
}

// استخدام:
if (!validateContent(content, 'hero')) {
  console.warn('Hero content is incomplete, using defaults');
}
```

---

## 🎯 أفضل الممارسات

### 1. استخدام Context API

أنشئ ContentContext لمشاركة المحتوى:

```typescript
// src/contexts/ContentContext.tsx
import { createContext, useContext } from 'react';
import { useContent } from '../hooks/useContent';

const ContentContext = createContext<any>({});

export function ContentProvider({ children }: { children: React.ReactNode }) {
  const contentData = useContent();
  
  return (
    <ContentContext.Provider value={contentData}>
      {children}
    </ContentContext.Provider>
  );
}

export const useContentContext = () => useContext(ContentContext);
```

### 2. التخزين المؤقت (Caching)

```typescript
const CACHE_KEY = 'ksu_content_cache';
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

function getCachedContent() {
  const cached = localStorage.getItem(CACHE_KEY);
  if (cached) {
    const { data, timestamp } = JSON.parse(cached);
    if (Date.now() - timestamp < CACHE_DURATION) {
      return data;
    }
  }
  return null;
}

function setCachedContent(data: any) {
  localStorage.setItem(CACHE_KEY, JSON.stringify({
    data,
    timestamp: Date.now()
  }));
}
```

### 3. معالجة الأخطاء

```typescript
try {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }
  const result = await response.json();
  // ... process result
} catch (error) {
  console.error('Content load error:', error);
  // Use fallback content
}
```

---

## ✅ Checklist التكامل

قبل النشر:

- [ ] تم إنشاء useContent hook
- [ ] تم إنشاء useImage hook
- [ ] تم تحديث HeroSection
- [ ] تم تحديث AboutOurKsu
- [ ] تم تحديث OurNumbersSection
- [ ] تم اختبار Fallback content
- [ ] تم اختبار Loading states
- [ ] تم اختبار Error handling
- [ ] تم إضافة Caching (اختياري)
- [ ] تم اختبار التكامل الكامل

---

## 🚀 الخطوة التالية

بعد التكامل:

1. ✅ افتح `/admin`
2. ✅ أضف محتوى في لوحة التحكم
3. ✅ احفظ التغييرات
4. ✅ افتح الموقع الرئيسي
5. ✅ تحقق من ظهور المحتوى الجديد

---

## 📞 دعم

راجع:
- [ADMIN_PANEL_GUIDE.md](./ADMIN_PANEL_GUIDE.md) - دليل لوحة التحكم
- [SETUP_GUIDE.md](./SETUP_GUIDE.md) - دليل الإعداد

---

✅ **بالتوفيق في التكامل!**
