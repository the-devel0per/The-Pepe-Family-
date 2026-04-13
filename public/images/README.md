# 🐸 Drop Your Pepe Images Here!

Place your carousel images in this folder.

Then in `src/components/HeroCarousel.jsx`, update the SLIDES array:

```js
const SLIDES = [
  {
    id: 1,
    label: 'THE OG PEPE 🐸',
    emoji: '🐸',
    caption: 'feels good man',
    image: '/images/1.png',  // ← add this line!
  },
  // ...
]
```

Supported formats: .png, .jpg, .gif, .webp
