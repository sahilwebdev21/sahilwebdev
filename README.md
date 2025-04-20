# SahilWebDev Portfolio

![Portfolio Preview](assets/portfolio-preview.jpg)

A modern, responsive portfolio website showcasing projects, skills, and blog posts. Built with pure HTML, CSS, and JavaScript with a focus on premium UI/UX design.

## 🚀 Features

- **Responsive Design**: Works flawlessly on all devices
- **Interactive UI/UX**: Smooth animations and transitions
- **Multi-page Layout**:
  - Home: Hero section, featured projects, newsletter
  - About: Bio, skills, timeline, CV download
  - Projects: Project gallery with case studies
  - Blog: Articles and technical posts
  - Contact: Form submission with validation
- **Dynamic Components**:
  - Reusable navbar and footer
  - Auto-updating copyright year
  - Dynamic page titles
  - Scroll animations
- **Premium Design Elements**:
  - CSS variables for easy theming
  - Modern grid and flex layouts
  - SVG animations
  - Floating shape effects

## 🛠 Technologies Used

- HTML5
- CSS3 (Flexbox, Grid, Animations)
- Vanilla JavaScript
- Font Awesome Icons
- Git Version Control

## 🌐 Live Preview
[View Live Demo](https://sahilwebdev.vercel.app/)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/SahilWebDev/portfolio.git
```

2. Navigate to project directory:
```bash
cd portfolio
```

3. Open in browser:
```bash
open index.html # or use your local server
```

## 🎨 Customization

### Personal Information
1. Update `components/navbar.html`:
```html
<span class="logo-name">Your Name</span>
```

2. Modify `js/script.js`:
```javascript
document.title = `${pageName} | Your Name`;
```

### Projects
Add projects in `pages/projects.html`:
```html
<article class="project-card">
  <img src="assets/project1.jpg" alt="Project Title">
  <h3>Project Title</h3>
  <p>Project Description</p>
</article>
```

### Styles
Edit CSS variables in `css/styles.css`:
```css
:root {
  --primary: #6C63FF;
  --secondary: #2F2E41;
  --highlight: #FF6584;
}
```
## 📝 License
MIT License - see [LICENSE](LICENSE) file
---
