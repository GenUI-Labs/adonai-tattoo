# Parallax Implementation Guide

## Overview
This project now includes a custom parallax scrolling system that works with both images and videos as background elements.

## How It Works

### 1. Custom Hook: `useParallaxBackground`
Located in `/src/hooks/useParallax.tsx`

**Features:**
- Performance optimized with `requestAnimationFrame`
- Automatic mobile detection and disabling
- GPU acceleration with `translate3d`
- Intersection-based calculations for smooth scrolling

### 2. CSS Classes
Located in `/src/app/globals.css`

- `.parallax-container` - Applied to section wrapper
- `.parallax-bg` - Applied to background element container

### 3. Implementation Example

```tsx
import { useParallaxBackground } from '../hooks/useParallax';

export default function MySection() {
  const parallaxRef = useParallaxBackground({ 
    speed: 0.4, // 0.0 = no movement, 1.0 = moves with scroll
    disabled: typeof window !== 'undefined' && window.innerWidth < 768 // Mobile disable
  });

  return (
    <section 
      ref={parallaxRef}
      className="relative py-20 overflow-hidden parallax-container"
    >
      {/* Background with Parallax */}
      <div className="parallax-bg z-0">
        <Image src="/background.jpg" alt="Background" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Your content here */}
      </div>
    </section>
  );
}
```

## Current Implementation

### Sections with Parallax:
- **HeroSection**: Video background, speed: 0.3
- **AboutSection**: Image background, speed: 0.4  
- **LocationCTA**: Image background, speed: 0.5

### Speed Guidelines:
- `0.3` - Subtle parallax (recommended for video)
- `0.4` - Medium parallax (good for most images)
- `0.5` - More pronounced parallax
- `0.6+` - Very noticeable parallax (use sparingly)

### Mobile Optimization:
- Parallax is automatically disabled on mobile devices (< 768px width)
- Uses `scale(1.05)` instead of `scale(1.1)` on mobile for better performance
- Fallback to static backgrounds maintains visual appeal

## Performance Features:
- Uses `requestAnimationFrame` for smooth 60fps animations
- GPU acceleration with `transform3d`
- Intersection Observer API for efficient viewport detection
- Throttled scroll events to prevent performance issues
- Automatic cleanup of event listeners

## Troubleshooting:
1. **No parallax effect**: Check that the section has `parallax-container` class and background has `parallax-bg` class
2. **Choppy scrolling**: Ensure `will-change: transform` is applied to background elements
3. **Mobile issues**: Parallax is disabled by default on mobile - this is intentional for performance
