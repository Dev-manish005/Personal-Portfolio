# Personal Portfolio Website

A personal portfolio website showcasing my background, technical skills, and a way to get in touch. Built during my internship at **The Developers Arena** — starting from semantic HTML (Week 1), styled with responsive CSS (Week 2), and now made fully interactive with JavaScript (Week 3).

## 🔗 Live Preview
Open `index.html` in your browser to view the site locally.

## 📌 Project Overview
The portfolio includes three main sections:
- **About Me** — a short introduction, with a dynamic availability status
- **Skills** — a card-based grid of my current technical skills
- **Contact** — a fully validated form to reach out via name, email, and message

## 🛠️ Built With
- **HTML5** — semantic page structure
- **CSS3** — external stylesheet (`style.css`) using CSS variables, Flexbox, and CSS Grid
- **JavaScript (Vanilla)** — external script (`script.js`) for form validation, dark mode, and other interactivity
- **Google Fonts** — Poppins

## 📂 Folder Structure
```
Personal-Portfolio/
│
├── index.html            # Main HTML file with all sections
├── style.css              # External stylesheet — layout, colors, responsiveness
├── script.js               # External JavaScript — validation, dark mode, modal, etc.
├── README.md               # Project documentation
├── images/
│   └── profile.jfif         # Profile picture used in the header and modal
└── screenshots/
    ├── about.png / skills.png / contact.png
    ├── light-mode.png / dark-mode.png
    ├── validation-errors.png / invalid-email.png / success.png
    └── console.png
```

## ✅ Features Implemented

### Week 1 — HTML Structure
- Semantic HTML5 tags: `<header>`, `<nav>`, `<main>`, `<footer>`
- Three content sections: About, Skills, Contact
- Internal navigation using anchor links (`#about`, `#skills`, `#contact`)
- Image with descriptive `alt` text for accessibility
- A contact form with `name`, `email`, and `message` fields

### Week 2 — CSS Styling
- External `style.css`, custom color scheme via CSS variables
- Multiple selector types: element, class, `:hover`, `:focus`, `:active`, `::after`
- Hover effects on the profile image, nav links, skill cards, and submit button
- CSS Grid for the skills section; Flexbox for header, navbar, and footer
- Fully responsive design across three breakpoints (900px, 768px, 480px)
- Google Font (Poppins) integration

### Week 3 — JavaScript Interactivity
- **Dark / light mode toggle** — persists the user's choice using `localStorage`
- **Real-time form validation** — name, email, and message are validated as the user types and again on submit, with field-specific error messages (e.g. "Please enter a valid email address.")
- **Profile image modal** — click the profile picture to view it enlarged; closes via the `×` button, clicking outside, or the `Escape` key
- **Scroll-based active navigation** — the nav link for the section currently in view is automatically highlighted
- **Dynamic availability message** — the About section's status text changes based on the current time of day
- Built with reusable functions and DOM manipulation (`classList`, `textContent`, element attributes), driven by `click`, `input`, `submit`, `scroll`, and `keydown` event listeners

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
4. Open the browser console (Right-click → Inspect → Console) to confirm: `Portfolio JavaScript loaded successfully!`

## 📖 What I Learned
**Week 1:**
- Structuring a webpage using semantic HTML5 elements instead of generic `<div>`s
- Creating accessible forms with labels and input validation
- Implementing internal page navigation using anchor tags and `id` attributes

**Week 2:**
- Linking and organizing an external stylesheet
- Using CSS variables for a consistent, easily-editable color scheme
- Building layouts with Flexbox and CSS Grid
- Writing hover, focus, and active states; making a layout responsive with media queries

**Week 3:**
- Selecting and manipulating the DOM with vanilla JavaScript
- Writing real-time form validation with clear, field-specific error messages
- Using `localStorage` to persist user preferences across page reloads
- Attaching and managing multiple event listener types (`click`, `input`, `submit`, `scroll`, `keydown`)
- Structuring JavaScript into small, reusable, named functions instead of one large script

## 👤 Author
**Manish Pradhan**
B.Sc. Information Technology, University of Mumbai

## 📄 License
This project is open for learning purposes.
