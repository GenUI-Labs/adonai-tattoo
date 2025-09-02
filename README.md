# Adonai Tattoo Website

A faith-inspired tattoo studio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Faith-Centered Branding**: Christian values and aesthetics throughout
- **Responsive Design**: Mobile-first approach with red/black color scheme
- **Gallery Integration**: Ready for Cloudinary or Supabase image management
- **Contact Integration**: Direct links to Messenger and phone calls
- **Interactive Map**: Embedded Google Maps for location
- **Smooth Animations**: Framer Motion for enhanced user experience

## Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Create environment file**:
   Create `.env.local` in the root directory:
   ```env
   NEXT_PUBLIC_MESSENGER_URL=https://m.me/your-messenger-handle
   NEXT_PUBLIC_PHONE_NUMBER=+1-812-555-0123
   NEXT_PUBLIC_ADDRESS=Your Full Address, City, State
   ```

3. **Add gallery images**:
   Place your tattoo portfolio images in `/public/gallery/` named:
   - `sample1.jpg`
   - `sample2.jpg`
   - `sample3.jpg`
   - `sample4.jpg`
   - `sample5.jpg`
   - `sample6.jpg`

4. **Run development server**:
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)** in your browser

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Manual Build
```bash
npm run build
npm start
```

## Gallery Integration Options

### Option 1: Cloudinary (Recommended)
- Free tier available
- Automatic image optimization
- Easy upload interface
- Add these env vars to `.env.local`:
  ```env
  CLOUDINARY_CLOUD_NAME=your-cloud-name
  CLOUDINARY_API_KEY=your-api-key
  CLOUDINARY_API_SECRET=your-api-secret
  CLOUDINARY_FOLDER=adonai-gallery
  ```

### Option 2: Supabase Storage
- Free tier available
- Simple file storage
- Good for basic needs

## Customization

### Colors
Brand colors are defined in `tailwind.config.ts`:
- `brand-red`: #dc2626 (main red)
- `brand-black`: #0b0b0b (deep black)

### Content
- Update business information in `/src/app/page.tsx`
- Modify scripture quotes and values
- Adjust contact information and hours

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **TypeScript**: Full type safety
- **Deployment**: Vercel-ready

## Support

Built by [GenUI Labs](https://genuilabs.com) for Adonai Tattoo.

For technical support or modifications, contact the development team.