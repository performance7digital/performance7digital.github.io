# Performance 7 Digital — Landing Page

Static landing page built with HTML and CSS. It needs no build process, dependencies or JavaScript, and can be published directly with GitHub Pages.

## Structure

```text
.
├── index.html              # Semantic markup and page metadata
├── assets/
│   ├── css/
│   │   └── main.css        # Design tokens, components and responsive styles
│   └── images/
│       └── logo.png        # Original brand image, unchanged
├── .gitignore
└── README.md
```

## Run locally

Open `index.html` in your browser, or serve this folder with a static HTTP server (for example, `python -m http.server 8000`). No package installation is required. The Inter font is loaded from Google Fonts and falls back to a local sans-serif font if unavailable.

## Deploy to GitHub Pages

Use the contents of this folder as the repository root. In your repository, go to **Settings → Pages → Build and deployment**, choose **Deploy from a branch**, then select the publishing branch and **/(root)**. GitHub Pages will serve `index.html`.

## Refactoring notes

- Moved embedded CSS to `assets/css/main.css`.
- Moved the existing logo to `assets/images/logo.png`, retaining the original file bytes.
- Used semantic landmarks (`header`, `nav`, `main`, `section`, `footer`) and accessible image text.
- Added a concise SEO description, retained the existing content and visual styling, and organized CSS into sections with reusable color variables.
- Removed unused rules for buttons, which do not exist in the supplied page.
- Kept the original responsive behavior: the navigation is hidden at viewports up to 900px wide.

**Pending content:** The original “Contact” navigation item was `href="#"` and no contact email, URL or form was provided. It remains a placeholder so an unverified contact address is not invented. Replace its destination when the real contact channel is available. The copyright year is also unchanged from the source.
