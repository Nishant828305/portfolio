import pypandoc

readme = r"""# Nishant.dev — Personal Portfolio

A modern, responsive developer portfolio built to showcase my skills, projects, experience, and contact information. The interface uses a dark visual theme, subtle gradients, responsive layouts, and motion effects.

## Features

- Responsive portfolio layout for desktop, tablet, and mobile
- Hero and About sections
- Skills section with category-based filtering
- Projects section populated from a backend API
- Project cards with preview images, technology tags, GitHub links, and live demos
- Contact section with email and social profile links
- Copy-email interaction
- Animated UI elements using Framer Motion
- Footer with automatically updated copyright year

## Tech Stack

### Frontend
- React
- JavaScript
- Tailwind CSS
- Framer Motion
- Axios

### Backend integration
- Node.js and Express API
- MongoDB (for project data, if configured in the backend)

## Getting Started

### Prerequisites

Install the following before running the project:

- Node.js (LTS recommended)
- npm
- Git

If you want to load projects dynamically, you also need to run the portfolio backend and its database.

### 1. Clone the repository

```bash
git clone https://github.com/Nishant828305/portfolio.git
cd portfolio
```

### 2. Open the frontend folder

```bash
cd frontend
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL printed in your terminal by Vite (usually `http://localhost:5173`).

## Backend API

The Projects section currently requests project data from:

```text
GET http://localhost:5000/api/projects
```

Make sure the backend is running on port `5000` and that this endpoint returns a JSON array.

Example project object:

```json
{
  "_id": "example-project-id",
  "title": "AI-Powered Document Assistant",
  "description": "An assistant that answers questions about uploaded documents using retrieval-augmented generation.",
  "image": "https://example.com/project-preview.png",
  "github": "https://github.com/yourusername/your-project",
  "demo": "https://your-live-demo.example",
  "technologies": ["Python", "LangChain", "Ollama", "FAISS", "Streamlit"]
}
```

Update the API URL in `Projects.jsx` if your backend uses a different host or port. For deployment, configure the API base URL using an environment variable rather than keeping a localhost URL in the code.

## Project Structure

The frontend is organized into reusable React components. The structure may look like this:

```text
portfolio/
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── Navbar.jsx
    │   │   ├── Hero.jsx
    │   │   ├── About.jsx
    │   │   ├── Skills.jsx
    │   │   ├── Projects.jsx
    │   │   └── Contact.jsx
    │   ├── img/
    │   ├── App.jsx
    │   └── index.css
    ├── package.json
    └── ...
```

Your actual folder structure may differ depending on how the project is organized.

## Customization

- Update personal details and introduction in `Hero.jsx` and `About.jsx`.
- Update skills and categories in `Skills.jsx`.
- Add or edit project records through the backend API/database.
- Update email and social profile URLs in `Contact.jsx`.
- Adjust shared colors, typography, and global styles in `index.css` and the relevant components.

## Build for Production

From the `frontend` directory, run:

```bash
npm run build
```

The production-ready files are generated in the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

## Contact

- **Email:** kumarnishantmahato123@gmail.com
- **GitHub:** [Nishant828305](https://github.com/Nishant828305)
- **LinkedIn:** [Nishant Kumar](https://www.linkedin.com/in/nishantkrmahato007/)
- **LeetCode:** [Nishant Kumar Mahato](https://leetcode.com/u/Nishant_kumar_mahato/)

## License

This project is intended as a personal portfolio. If you reuse or adapt parts of it, please provide appropriate attribution.
"""

output_path = "/mnt/data/README.md"
pypandoc.convert_text(readme, "md", format="md", outputfile=output_path, extra_args=["--standalone"])
print(f"Created: {output_path}")
