# Portfolio Website

A modern, clean portfolio website built with React.js, showcasing Lachezar Dimchov's work as a Fullstack Developer and Web Development student.

## Features

- 🎨 Modern, clean design with smooth animations
- 📱 Fully responsive layout (mobile, tablet, desktop)
- 🚀 Smooth scroll navigation with active section highlighting
- ⚡ Fast loading with Vite build tool
- ⚛️ Built with React.js and modern hooks
- ♿ Accessible and semantic HTML

## Sections

1. **Hero/Intro** - Introduction and call-to-action buttons
2. **About** - Personal background and experience
3. **Skills** - Technical skills organized by category
4. **Projects** - Featured portfolio projects
5. **Experience** - Professional work history
6. **Contact** - Contact information and email link

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

To create a production build:

```bash
npm run build
```

The optimized files will be in the `dist/` directory.

To preview the production build:

```bash
npm run preview
```

## Project Structure

```
Portfolio/
├── src/
│   ├── components/      # React components
│   │   ├── Navigation.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx          # Main App component
│   ├── main.jsx         # Entry point
│   └── styles.css       # Global styles
├── index.html           # HTML template
├── package.json         # Dependencies
└── vite.config.js       # Vite configuration
```

## Customization

### Colors

Edit the CSS variables in `src/styles.css`:
```css
:root {
    --primary-color: #2563eb;
    --text-primary: #1f2937;
    /* ... other variables */
}
```

### Content

Update content in the respective component files in `src/components/`:
- Personal info: `src/components/Hero.jsx` and `src/components/About.jsx`
- Skills: `src/components/Skills.jsx`
- Projects: `src/components/Projects.jsx`
- Experience: `src/components/Experience.jsx`
- Contact: `src/components/Contact.jsx`

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with CSS Grid and Flexbox
- **JavaScript ES6+** - Modern JavaScript features
- **Google Fonts (Inter)** - Typography

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 Lachezar Dimchov. All rights reserved.

