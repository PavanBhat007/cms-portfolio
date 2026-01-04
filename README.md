# cms-portfolio
CMS based Portfolio website with a monolithic architecture, using NextJS, Tailwind CSS , TypeScript and MongoDB

## Project Structure

This project follows a standard Next.js application structure with additional directories for specific functionalities:

-   `app/`: Contains the main application routes and UI.
    -   `global.css`: Global styles for the application.
    -   `layout.tsx`: Root layout for the application.
    -   `(public)/`: Publicly accessible routes.
        -   `layout.tsx`: Layout for public pages.
        -   `page.tsx`: Homepage for public users.
        -   `login/page.tsx`: Login page.
    -   `admin/`: Administration panel routes.
        -   `layout.tsx`: Layout for admin pages.
        -   `page.tsx`: Admin dashboard page.
    -   `api/`: API routes for backend functionalities.
-   `components/`: Reusable UI components.
-   `lib/`: Utility functions and libraries.
    -   `auth.ts`: Authentication related utilities.
    -   `constants.ts`: Application constants.
    -   `db.ts`: Database connection and utilities (MongoDB).
    -   `validators/`: Data validation logic.
-   `models/`: MongoDB schema definitions.
-   `middleware.ts`: Next.js middleware for request processing.
-   `public/`: Static assets.
-   `styles/`: (Implicitly, if not within `app/`) Global or component-specific styles.
-   `next-env.d.ts`: TypeScript declaration file for Next.js environment.
-   `package.json`: Project dependencies and scripts.
-   `postcss.config.cjs`: PostCSS configuration.
-   `tailwind.config.cjs`: Tailwind CSS configuration.
-   `tsconfig.json`: TypeScript configuration.

## Technologies Used

-   **Next.js**: React framework for production.
-   **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
-   **TypeScript**: Strongly typed JavaScript.
-   **MongoDB**: NoSQL database for data storage.

This monolithic architecture allows for a streamlined development experience, with both frontend and backend logic residing within the same codebase.
