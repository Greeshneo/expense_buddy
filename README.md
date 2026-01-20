# Expense Buddy

A modern expense tracking application built with React, TypeScript, and Tailwind CSS.

## About

Expense Buddy is a web application designed to help users track their spending, categorize expenses, and visualize their spending patterns with ease.

## Technologies Used

This project is built with:

- **Vite** - Fast build tool and development server
- **TypeScript** - Type-safe JavaScript
- **React** - UI library
- **shadcn-ui** - High-quality component library
- **Tailwind CSS** - Utility-first CSS framework
- **React Hook Form** - Efficient form management
- **Recharts** - Data visualization library

## Getting Started

### Prerequisites

- Node.js & npm installed ([install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating))

### Installation

```sh
# Clone the repository
git clone https://github.com/Greeshneo/expense_buddy.git

# Navigate to the project directory
cd expense_buddy

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:5173`

## Development

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build
- `npm run test` - Run tests with Vitest
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/        # Reusable React components
│   ├── expense/      # Expense-related components
│   └── ui/           # UI components from shadcn-ui
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
├── pages/            # Page components
├── types/            # TypeScript type definitions
└── main.tsx          # Application entry point
```

## Features

- Add and manage expenses
- Categorize expenses by type
- View spending summary
- Visualize spending patterns with charts
- Responsive design for all devices

## Contributing

Feel free to open issues and pull requests to help improve Expense Buddy!

## License

This project is open source and available under the MIT License.
