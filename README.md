# Personal Portfolio Website

A personal portfolio website showcasing my background, technical skills, and a way to get in touch. Built during my internship at **The Developers Arena** — starting from pure semantic HTML (Week 1) and now styled with modern, responsive CSS (Week 2).

## 🔗 Live Preview
Open `index.html` in your browser to view the site locally.

## 📌 Project Overview
The portfolio includes three main sections:
- **About Me** — a short introduction about who I am and what I'm looking for
- **Skills** — a card-based grid of my current technical skills
- **Contact** — a styled form to reach out via name, email, and message

## 🛠️ Built With
- **HTML5** — semantic page structure
- **CSS3** — external stylesheet (`style.css`) using CSS variables, Flexbox, and CSS Grid
- **Google Fonts** — Poppins

## 📂 Folder Structure
```
Personal-Portfolio/
│
├── index.html            # Main HTML file with all sections
├── style.css              # External stylesheet — layout, colors, responsiveness
├── README.md              # Project documentation
├── images/
│   └── profile.jfif        # Profile picture used in the header
└── screenshots/
    ├── about.png
    ├── skills.png
    └── contact.png
```

## ✅ Features Implemented

### Week 1 — HTML Structure
- Semantic HTML5 tags: `<header>`, `<nav>`, `<main>`, `<footer>`
- Three content sections: About, Skills, Contact
- Internal navigation using anchor links (`#about`, `#skills`, `#contact`)
- Image with descriptive `alt` text for accessibility
- A contact form with `name`, `email`, and `message` fields, using proper `<label>` and `required` validation

### Week 2 — CSS Styling
- External `style.css` linked in the document `<head>`
- Custom color scheme and design tokens defined with CSS variables (`:root`)
- Multiple selector types used: element, class, `:hover`, `:focus`, `:active`, and `::after` pseudo-elements
- Hover effects on the profile image, nav links (animated underline), skill cards, and the submit button
- Skills section laid out with **CSS Grid**; header, navbar, and footer laid out with **Flexbox**
- Fully responsive design with three breakpoints (900px, 768px, 480px) for tablet and mobile
- Google Font (Poppins) integration for consistent typography
- Sticky header with a subtle shadow for better usability while scrolling

## 🚀 How to Run Locally
1. Clone this repository:
   ```
   git clone https://github.com/Dev-manish005/Personal-Portfolio.git
   ```
2. Navigate into the project folder:
   ```
   cd Personal-Portfolio
   ```
3. Open `index.html` in your browser (double-click the file, or use a Live Server extension in VS Code).

## 📖 What I Learned
**Week 1:**
- Structuring a webpage using semantic HTML5 elements instead of generic `<div>`s
- Creating accessible forms with labels and input validation
- Implementing internal page navigation using anchor tags and `id` attributes

**Week 2:**
- Linking and organizing an external stylesheet
- Using CSS variables for a consistent, easily-editable color scheme
- Building layouts with Flexbox and CSS Grid instead of floats/tables
- Writing hover, focus, and active states to improve interactivity
- Making a layout responsive with media queries across multiple breakpoints

## 👤 Author
**Manish Pradhan**
B.Sc. Information Technology, University of Mumbai

## 📄 License
This project is open for learning purposes.