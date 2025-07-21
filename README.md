# TruFarms Portal

This project is a B2B web portal for TruFarms, a fictional cannabis manufacturing company. The application is designed to showcase the company's services, products, and commitment to quality, while also providing a clear point of contact for potential business partners.

## Tech Stack

This application is built with a modern, server-centric web stack:

-   **Framework**: [Next.js](https://nextjs.org/) (App Router)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **UI Library**: [React](https://react.dev/)
-   **Component Library**: [ShadCN UI](https://ui.shadcn.com/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Generative AI**: [Firebase Genkit](https://firebase.google.com/docs/genkit) with Google AI
-   **Form Management**: [React Hook Form](https://react-hook-form.com/)
-   **Email API**: [Resend](https://resend.com/) for contact form submissions

## Core Features

The application includes several key pages and features:

### 1. **Homepage (`/`)**

The main landing page is structured to guide potential B2B clients through TruFarms' value proposition. It includes the following sections in order:

-   **Hero Section**: An immersive, full-screen introduction with a clear call-to-action.
-   **Our Core Products**: Showcases key product categories like vape cartridges, gummies, and capsules.
-   **Our B2B Process**: A visual workflow detailing the client engagement process from inquiry to delivery.
-   **Industries We Serve**: Highlights the target clients, including microbusinesses, cultivators, and dispensary brands.
-   **B2B Manufacturing Services**: Details the core service offerings like white-label manufacturing and toll processing.
-   **Commitment to Quality & Safety**: Emphasizes the company's dedication to compliance and quality assurance.

### 2. **About Page (`/about`)**

A dedicated, visually-rich page that provides more detail about TruFarms' mission, values, and operations. It features a full-screen, "tech-edgy" design to create a memorable brand experience.

### 3. **Contact Page (`/contact`)**

A comprehensive contact page featuring:
- An interactive form for inquiries.
- Direct contact information (email, phone).
- An embedded map link for location.

### 4. **Legal & Compliance Pages**

The application includes standard legal and informational pages accessible from the footer:
-   `/licensing`: Licensing statement.
-   `/privacy`: Privacy Policy.
-   `/terms`: Terms of Use.
-   `/accessibility`: ADA Accessibility Statement.

## Getting Started

To get started with development, run the following command:

```bash
npm run dev
```

This will start the Next.js development server, typically on `http://localhost:9002`.
