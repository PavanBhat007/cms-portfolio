export const PROJECTS = [
  {
    id: 1,
    slug: "metabuddy",
    title: "MetaBuddy",
    description:
      "MetaBuddy is a Chrome extension that performs instant, client-side analysis of a webpage's <head>, extracting SEO metadata, Open Graph tags, and script details via DOM inspection.",
    technical_description: `
      <h3>Problem</h3>
      <p>
        Manually inspecting a webpage’s <code>&lt;head&gt;</code> for SEO metadata, Open Graph tags,
        and scripts is time-consuming and error-prone, often requiring developer tools or third-party services.
      </p>

      <h3>Solution</h3>
      <p>
        MetaBuddy is a lightweight Chrome extension that runs entirely client-side. It inspects the DOM
        in real time and presents structured SEO and social metadata instantly in a popup UI.
      </p>

      <h3>Key Features</h3>
      <ul>
        <li>Instant extraction of SEO tags (title, description, canonical, robots)</li>
        <li>Open Graph and Twitter Card analysis</li>
        <li>Detection of all script tags with attributes</li>
        <li>One-click browser popup access</li>
        <li>100% local execution with zero backend</li>
      </ul>

      <h3>Tech Stack</h3>
      <ul>
        <li>JavaScript (ES6+)</li>
        <li>Chrome Extension APIs (Manifest v3)</li>
        <li>DOM parsing and traversal</li>
      </ul>
    `,
    image: "https://opengraph.githubassets.com/1/PavanBhat007/metabuddy",
    link: "https://www.github.com/PavanBhat007/metabuddy",
    languages: ["JavaScript"],
    tools: ["Chrome Extension API"],
    collaborators: ["Nuthan B"],
    year: 2026,
  },

  {
    id: 2,
    slug: "ecg-analyser-demo",
    title: "ECG Analyser Demo",
    description:
      "A prototype ECG analysis system that processes LabChart .adicht files and performs basic arrhythmia classification.",
    technical_description: `
      <h3>Problem</h3>
      <p>
        ECG data stored in proprietary formats like <code>.adicht</code> requires specialized software,
        making rapid feature extraction and analysis difficult.
      </p>

      <h3>Solution</h3>
      <p>
        A Flask-based web application that ingests ECG files, preprocesses signals using NeuroKit2,
        extracts physiological features, and outputs a binary rhythm prediction.
      </p>

      <h3>Key Features</h3>
      <ul>
        <li>Upload and parsing of LabChart ECG files</li>
        <li>R-peak detection and HRV analysis</li>
        <li>Feature extraction for ML classification</li>
        <li>Normal vs arrhythmic prediction</li>
      </ul>

      <h3>Tech Stack</h3>
      <ul>
        <li>Python, Flask</li>
        <li>NeuroKit2</li>
        <li>scikit-learn</li>
        <li>HTML & JavaScript frontend</li>
      </ul>
    `,
    image:
      "https://opengraph.githubassets.com/1/PavanBhat007/ECG-Analyser-Demo",
    link: "https://www.github.com/PavanBhat007/ECG-Analyser-Demo",
    languages: ["Python", "JavaScript"],
    tools: ["Flask", "NeuroKit2"],
    collaborators: ["Nuthan B", "J N Sumanth", "P R Shashank"],
    year: 2025,
  },

  {
    id: 3,
    slug: "food-order-website",
    title: "Food Order Website",
    description:
      "A MERN-based food ordering platform featuring Stripe payments, Redux state management, and media handling.",
    technical_description: `
      <h3>Overview</h3>
      <p>
        A full-stack food ordering application built to simulate real-world e-commerce workflows.
      </p>

      <h3>Key Features</h3>
      <ul>
        <li>Restaurant and menu browsing</li>
        <li>Redux-powered cart and checkout</li>
        <li>Stripe payment integration</li>
        <li>Order history and confirmation emails</li>
      </ul>

      <h3>Tech Stack</h3>
      <ul>
        <li>React, Redux</li>
        <li>Node.js, Express</li>
        <li>MongoDB</li>
        <li>Stripe, Cloudinary, MailTrap</li>
      </ul>
    `,
    image:
      "https://opengraph.githubassets.com/1/PavanBhat007/food-order-website",
    link: "https://www.github.com/PavanBhat007/food-order-website",
    languages: ["ReactJS", "JavaScript", "Redux"],
    tools: ["Stripe", "Cloudinary"],
    collaborators: [],
    year: 2024,
  },

  {
    id: 4,
    slug: "canteen-billing-system",
    title: "Canteen Billing System",
    description:
      "A lightweight token-based billing system for college canteens.",
    technical_description: `
      <h3>Overview</h3>
      <p>
        A Flask-based billing application designed to streamline order handling in high-traffic canteens.
      </p>

      <h3>Key Features</h3>
      <ul>
        <li>Token-based order tracking</li>
        <li>Real-time bill calculation</li>
        <li>SQLite-backed persistence</li>
        <li>Standalone Windows executable</li>
      </ul>

      <h3>Tech Stack</h3>
      <ul>
        <li>Python, Flask</li>
        <li>SQLite</li>
        <li>JavaScript frontend</li>
      </ul>
    `,
    image: "https://opengraph.githubassets.com/1/PavanBhat007/BillingSystem",
    link: "https://www.github.com/PavanBhat007/BillingSystem",
    languages: ["Flask", "JavaScript", "SQLite"],
    tools: [],
    collaborators: [],
    year: 2024,
  },

  {
    id: 5,
    slug: "nasa-space-apps-hackathon-landing-page",
    title: "NASA Space Apps Hackathon Landing Page",
    description:
      "A responsive React landing page for the NASA Space Apps Challenge.",
    technical_description: `
      <h3>Overview</h3>
      <p>
        A single-page React application built for the NASA Space Apps Hackathon at Dayananda Sagar University.
      </p>

      <h3>Key Features</h3>
      <ul>
        <li>Event details and schedule</li>
        <li>Registration links</li>
        <li>Responsive layout</li>
      </ul>

      <h3>Tech Stack</h3>
      <ul>
        <li>React</li>
        <li>JavaScript</li>
        <li>CSS</li>
      </ul>
    `,
    image: "https://opengraph.githubassets.com/1/PavanBhat007/NasaSpaceApp",
    link: "https://www.github.com/PavanBhat007/NasaSpaceApp",
    languages: ["ReactJS", "JavaScript"],
    tools: [],
    collaborators: [],
    year: 2024,
  },

  {
    id: 6,
    slug: "hospital-system-dashboard",
    title: "Hospital System Dashboard",
    description:
      "A multi-service hospital dashboard integrating AI, scheduling, and secure patient records.",
    technical_description: `
      <h3>Overview</h3>
      <p>
        A full-featured healthcare management dashboard designed for secure, scalable hospital workflows.
      </p>

      <h3>Key Features</h3>
      <ul>
        <li>Role-based dashboards</li>
        <li>AI-powered insights via Gemini API</li>
        <li>Google Calendar appointment syncing</li>
        <li>Blockchain-backed patient records</li>
      </ul>

      <h3>Tech Stack</h3>
      <ul>
        <li>React, Node.js, Express</li>
        <li>Flask microservice</li>
        <li>MySQL, Sequelize</li>
        <li>Gemini API, Google Calendar API</li>
      </ul>
    `,
    image: "https://opengraph.githubassets.com/1/PavanBhat007/Hospital-System",
    link: "https://www.github.com/PavanBhat007/Hospital-System",
    languages: ["ReactJS", "JavaScript"],
    tools: ["Gemini API", "Google Calendar API"],
    collaborators: [],
    year: 2024,
  },
];
