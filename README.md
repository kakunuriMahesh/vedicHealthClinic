# Medpro Healthcare - React Medical Website

A modern, responsive medical website built with React, TypeScript, and Vite, inspired by the Medpro medical template design.

## Features

- 🏥 **Modern Medical Design** - Clean, professional medical website layout
- 📱 **Fully Responsive** - Optimized for all devices (desktop, tablet, mobile)
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and builds
- 🎨 **Modern UI Components** - Beautiful, accessible components with smooth animations
- 📋 **Appointment Booking** - Interactive contact form for appointment scheduling
- 🩺 **Health Services** - Comprehensive display of medical services and specialties
- 💬 **Patient Testimonials** - Social proof with patient reviews and ratings
- 🎯 **SEO Optimized** - Clean semantic HTML structure for better search visibility

## Tech Stack

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **CSS3** - Modern CSS with custom properties and Grid/Flexbox
- **Lucide React** - Beautiful, customizable icons
- **Framer Motion** - Smooth animations and transitions

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd medpro-clinic
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Services.tsx    # Services grid
│   ├── HealthCheckup.tsx # Health checkup plans
│   ├── Testimonials.tsx # Patient testimonials
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer
├── App.tsx             # Main app component
├── App.css             # Global styles
├── main.tsx            # App entry point
└── index.css           # Base styles
```

## Customization

### Colors
The website uses CSS custom properties for easy theming. Main colors are defined in `App.css`:

```css
:root {
  --primary-blue: #2563eb;
  --accent-green: #10b981;
  --text-dark: #1f2937;
  /* ... more colors */
}
```

### Content
Update the content in each component file to match your medical practice:

- **Header.tsx** - Update contact information and navigation
- **Hero.tsx** - Update main headline and description
- **Services.tsx** - Update medical services offered
- **Contact.tsx** - Update contact form fields and validation

## Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment to any static hosting service.

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify
3. Or connect your Git repository for automatic deployments

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions, please open an issue in the repository or contact the development team.