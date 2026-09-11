# فونت‌های KidsMeals

بر اساس راهنمای تایپوگرافی رسمی KidsMeals، این پروژه از دو خانواده فونت استفاده می‌کند.

## 📝 فونت‌های مورد نیاز

### Dana (برای تیترها و لوگو)
```
fonts/Dana-ExtraBold.woff2   (وزن 800) - برای لوگو
fonts/Dana-Bold.woff2         (وزن 700) - برای تیتر اصلی (H1)
fonts/Dana-SemiBold.woff2     (وزن 600) - برای تیتر بخش (H2)
fonts/Dana-Medium.woff2       (وزن 500) - برای تیتر فرعی (H3)
```

### IRANSans X (اولویت اول برای متن بدنه)
```
fonts/IRANSansX-Regular.woff2 (وزن 400) - متن بدنه (line-height: 1.6-1.8)
fonts/IRANSansX-Medium.woff2  (وزن 500) - متن کوچکتر (Caption)
fonts/IRANSansX-Bold.woff2    (وزن 700) - تأکید در متن
```

### Vazirmatn (فالبک برای متن بدنه)
```
fonts/Vazirmatn-Regular.woff2 (وزن 400)
fonts/Vazirmatn-Medium.woff2  (وزن 500)
fonts/Vazirmatn-Bold.woff2    (وزن 700)
```

## 📊 جدول تایپوگرافی (از راهنمای رسمی)

| استفاده | فونت | وزن | اندازه (rem) | توضیح |
|---------|------|-----|--------------|-------|
| لوگو | Dana | ExtraBold | انعطاف‌پذیر | - |
| تیتر اصلی (H1) | Dana | Bold | 2.5 - 3 | - |
| تیتر بخش (H2) | Dana | SemiBold | 1.75 - 2 | - |
| تیتر فرعی (H3) | Dana | Medium | 1.25 - 1.5 | - |
| متن بدنه | IRANSans X / Vazirmatn | Regular/Light | 1 | پایه: 16px, line-height: 1.6-1.8 |
| متن کوچک (Caption) | IRANSans X / Vazirmatn | Light/Regular | 0.875 | کمی کوچک‌تر از بدنه |
| دکمه (CTA) | Dana | SemiBold | متناسب با بدنه | معمولاً 1rem یا 1.125rem |
| تکلابل | Dana / IRANSansX | Light | 0.8 - 0.9 | کمی کوچک‌تر از بدنه |

## 🔗 منابع دانلود

### Dana
دانلود از: [fontiran.com](https://fontiran.com) یا [github.com/rastikerdar/dana-font](https://github.com/rastikerdar/dana-font)

### IRANSans X
دانلود از: [fontiran.com](https://fontiran.com) یا [github.com/rastikerdar/iransans](https://github.com/rastikerdar/iransans)

### Vazirmatn
دانلود از: [github.com/rastikerdar/vazirmatn](https://github.com/rastikerdar/vazirmatn)

## 🛠️ نصب فونت‌ها

1. فایل‌های `.woff2` را دانلود کنید
2. آن‌ها را در پوشه `public/fonts/` قرار دهید
3. مطمئن شوید نام فایل‌ها دقیقاً با لیست بالا مطابقت دارد
4. فونت‌ها به‌صورت خودکار از `app/globals.css` لود می‌شوند

## ⚠️ نکات مهم

- **حتماً فرمت WOFF2 استفاده کنید** (کوچک‌تر و سریع‌تر از TTF/OTF)
- **font-display: swap** تنظیم شده تا صفحه سریع‌تر لود شود
- اگر فونت‌ها موجود نباشند، به Tahoma فالبک می‌شود
- برای تست: `npm run dev` و در Developer Tools به تب Network → Fonts نگاه کنید

## 📐 Line Height و Spacing

بر اساس راهنمای تایپوگرافی:
- **متن بدنه**: `line-height: 1.6-1.8` (26px-29px برای 16px base)
- **تیترها**: فاصله خط کمتر برای خوانایی بهتر
- **فاصله بین بخش‌ها**: حداقل 2-3 سطر فاصله

---

**نسخه راهنما**: 1.0  
**آخرین بروزرسانی**: بر اساس مستندات رسمی KidsMeals Typography Guide
