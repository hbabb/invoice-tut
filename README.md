# Invoice Management App Tutorial

A modern invoice management application built following Colby Fayock's tutorial, featuring user authentication, database integration, payment processing, and email notifications.

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework with TypeScript support
- [shadcn/ui](https://ui.shadcn.com/) - Re-usable UI components
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Clerk](https://clerk.com/) - Authentication and user management
- [Xata](https://xata.io/) - Serverless database platform
- [Stripe](https://stripe.com/) - Payment processing
- [Resend](https://resend.com/) - Email delivery service
- [Drizzle ORM](https://orm.drizzle.team/) - TypeScript ORM

## Features

- User authentication and authorization
- Create, read, update, and delete invoices
- Secure payment processing
- Email notifications
- Responsive design
- Type-safe database operations

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn
- A Clerk account
- A Stripe account
- A Xata account
- A Resend account

### Installation

1.  Clone the repository:

    ```bash
    git clone [your-repo-url]
    cd invoice-management-app
    ```

2.  Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

3.  Set up environment variables:
    Create a `.env.local` file in the root directory and add the following:

        ```.env
        NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
        CLERK_SECRET_KEY=
        NEXT_PUBLIC_CLERK_SIGN_IN_URL=
        NEXT_PUBLIC_CLERK_SIGN_UP_URL=
        NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
        NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=

        XATA_API_KEY=
        XATA_BRANCH=

        STRIPE_SECRET_KEY=
        STRIPE_WEBHOOK_SECRET=
        NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=

        RESEND_API_KEY=
        ```

4.  Initialize the database:

    ```bash
    npx xata init
    ```

5.  Run the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```tree
├── app/
│   ├── api/
│   ├── dashboard/
│   └── ...
├── components/
│   ├── ui/
│   └── ...
├── lib/
│   ├── db/
│   └── utils/
├── public/
└── ...
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- [Colby Fayock](https://www.colbyfayock.com/) for the original tutorial
- [Tutorial Link] - Add your tutorial link here
