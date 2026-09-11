# Fitness Club Website

A responsive fitness club website built with plain HTML, CSS and JavaScript. The project presents the club's programs, services, testimonials and contact details through an image- and video-led single-page experience.

## Live demo

[Open the Fitness Club website](https://dimitrisfournarakos.github.io/Fitness-Club-Website/)

## Features

- Full-screen hero section with muted, looping background video.
- Responsive navigation with mobile menu support.
- About section with animated experience and coaching counters.
- Feature and training-program sections.
- Service cards with interactive detail modal windows.
- Testimonials and contact footer with social links.
- Privacy Policy and Terms of Service pages with shared navigation.
- Poster fallback support for the hero and About videos on lower-performance devices.
- Reduced-motion and older-browser fallbacks for smoother, more accessible use.
- Responsive layouts for desktop, tablet and mobile screens.

## Built with

- HTML5
- CSS3
- Vanilla JavaScript
- Font Awesome 4.7.0
- Google Fonts
- Smooth Scroll by Ferdinandi

## Screenshots

### Desktop

![Fitness Club desktop homepage](screenshots/desktop-homepage.png)

### Mobile

![Fitness Club mobile homepage](screenshots/mobile-homepage.png)

## Project structure

```text
.
├── Images/
├── index.html
├── style.css
├── functions.js
├── privacy-policy.html
├── terms-of-service.html
├── LICENSE
├── SECURITY.md
└── README.md
```

## Run locally

No build tools or package installation are required.

1. Clone or download the repository.
2. Open `index.html` in a browser, or serve the folder with a local static server.
3. Keep the `Images` folder beside the HTML files so all media paths resolve correctly.

For example, with a simple local server:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000` in a browser.

## Accessibility and performance

The site uses muted inline videos, semantic navigation labels, image alternative text and reduced-motion support. Devices with limited resources can use poster images instead of videos, while the main content remains available without depending on video playback or animation.

## Legal documents

- [Privacy Policy](privacy-policy.html)
- [Terms of Service](terms-of-service.html)
- [Security Policy](SECURITY.md)
- [MIT License](LICENSE)

## Media attribution

Most of the photographs and videos used in this project were sourced from [Pexels](https://www.pexels.com/) and were available under the Pexels free license. Some logos, icons and other assets may be original project assets or come from third-party services.

The MIT License in this repository applies to the project's original source code. It does not grant rights to third-party photographs, videos, fonts, icons or other media. Check the relevant source and license terms before reusing those assets.

## Author

Developed and designed by [Dimitris Fournarakos](https://github.com/DimitrisFournarakos).
