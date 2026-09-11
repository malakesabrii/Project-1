# KidsMeals Images

این پوشه شامل تمام تصاویر واقعی پروژه KidsMeals است.

## 📸 تصاویر مورد نیاز

### Hero Section
از تصاویر ارسالی توسط شما، سه تصویر اصلی برای Hero section داریم:

```
public/images/hero/
├── hero-1-bag-and-food.jpg          (کیسه و ظرف غذای KidsMeals)
├── hero-2-boy-eating.jpg            (پسر ایرانی در حال خوردن غذا)
└── hero-3-girl-soup.jpg             (دختر در حال خوردن سوپ)
```

**توضیحات:**
- **تصویر 1**: کیسه کاغذی سفید با لوگو KidsMeals و ظرف غذا
  - Tagline روی کیسه: "FUELING FUN ADVENTURES!"
  - پس‌زمینه: میز چوبی با طبیعت سبز در پشت
  
- **تصویر 2**: پسر جوان ایرانی در حال خوردن غذا
  - غذا: قرمه سبزی با برنج و خورش کاری
  - کیسه KidsMeals در کنار او
  - محیط: داخل خانه، فضای گرم و صمیمی

- **تصویر 3**: دختر در حال خوردن سوپ
  - ظرف سوپ با لوگو KidsMeals
  - کیسه کاغذی KidsMeals در کنار
  - غذای دیگر: مرغ گریل شده با سبزیجات

### Brand & Team
```
public/images/brand/
├── team-mockup.jpg                  (تیم KidsMeals با آشپزها و پیک)
└── packaging-mockup.jpg             (بسته‌بندی‌های مختلف محصول)
```

## 🎯 نحوه استفاده

### در Hero Component
```tsx
<img 
  src="/images/hero/hero-1-bag-and-food.jpg" 
  alt="کیسه و ظرف غذای گرم KidsMeals"
  className="w-full h-full object-cover rounded-3xl"
/>
```

### بهینه‌سازی برای Web
تصاویر باید:
- فرمت: WebP (با fallback به JPG)
- کیفیت: 80-85%
- اندازه Hero: 1200x900px (4:3 ratio)
- اندازه Thumbnail: 600x450px

### Lazy Loading
```tsx
<img 
  src="/images/hero/hero-1-bag-and-food.jpg"
  loading="lazy"
  decoding="async"
/>
```

## 📝 Alt Text فارسی

همیشه alt text فارسی و توصیفی اضافه کنید:

```tsx
// خوب ✓
alt="پسر جوان در حال لذت بردن از غذای گرم و سالم KidsMeals"

// بد ✗
alt="image"
alt="hero"
```

## 🔄 وضعیت فعلی

- ✅ لوگو (SVG)
- ⏳ **تصاویر Hero نیاز به کپی دارند**
- ⏳ تصاویر Team/Packaging نیاز به کپی دارند

## 📌 نکات مهم

1. **کپی‌رایت**: تمام تصاویر متعلق به KidsMeals هستند
2. **نسبت تصویر**: حفظ نسبت 4:3 برای Hero
3. **حجم فایل**: حداکثر 200KB برای هر تصویر
4. **نام‌گذاری**: kebab-case و توصیفی
5. **Responsive**: تصاویر باید در تمام سایزها خوب به نظر برسند

---

**یادآوری**: تصاویر واقعی از تصاویر ارسالی شما باید به این پوشه کپی شوند.
