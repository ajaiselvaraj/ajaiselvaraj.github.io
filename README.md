# Ajai SP - Developer Portfolio

An ultra-professional, futuristic developer portfolio website built with modern web technologies.

## Features

-   **3D Hero Section**: Interactive 3D elements using React Three Fiber.
-   **Smooth Scrolling**: Premium scroll experience with Lenis.
-   **Advanced Animations**: Scroll-triggered and hover animations powered by Framer Motion.
-   **Glassmorphism Design**: Modern UI with glass effects and subtle gradients.
-   **Responsive**: Fully optimized for all devices (Mobile, Tablet, Desktop).
-   **Custom Cursor**: Interactive cursor follower for a premium feel.
-   **SEO Optimized**: Semantic HTML and meta tags.

## Tech Stack

-   **Frontend**: React, TypeScript, Vite
-   **Styling**: Tailwind CSS
-   **Animations**: Framer Motion, GSAP
-   **3D**: Three.js, React Three Fiber, Dreis
-   **Scrolling**: Lenis
-   **Icons**: Lucide React

## Getting Started

### Prerequisites

-   Node.js (v18 or higher recommended)
-   npm or yarn

### Installation

1.  **Clone the repository** (if applicable) or download the source code.

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```

4.  Open your browser and navigate to `http://localhost:5173`.

## Customization

-   **Personal Details**: Edit `src/components/Hero.tsx` and `src/components/About.tsx`.
-   **Projects**: Update the `projects` array in `src/components/Projects.tsx`.
-   **Experience/Skills**: Modify `src/components/Skills.tsx`.
-   **Services**: Update `src/components/Services.tsx`.
-   **Contact Email**: Update the email in `src/components/Contact.tsx`.

## Deployment

### Deploying to Vercel

1.  Create a [Vercel account](https://vercel.com).
2.  Install Vercel CLI: `npm i -g vercel` or rely on the web dashboard.
3.  Run `vercel` in the project root and follow the instructions.
    -   Or, push your code to GitHub and import the repository in the Vercel dashboard.
4.  Vercel will automatically detect Vite and configure the build settings.

### Build for Production

To create a production build manually:

```bash
npm run build
```

The output will be in the `dist` folder.

## License

This project is open-source and available under the MIT License.
