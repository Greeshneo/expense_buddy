# Expense Tracker

A modern, responsive expense tracking application built with React, TypeScript, and Tailwind CSS. Track your daily spending, visualize expenses by category, and understand your financial habits with intuitive charts and analytics.

## Features

- 📊 **Spending Analytics** - Visualize your expenses with interactive charts
- 💰 **Category Tracking** - Organize expenses by category (Food, Transport, Entertainment, etc.)
- 📈 **Monthly Summary** - See total spending and expense counts
- 🎨 **Modern UI** - Clean, responsive design that works on all devices
- ⚡ **Real-time Updates** - Add and delete expenses instantly
- 💾 **Local Storage** - Your data persists across sessions

## Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **UI Components**: shadcn-ui
- **State Management**: React Hooks
- **Charts**: Recharts

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```sh
# Clone the repository
git clone <YOUR_REPO_URL>

# Navigate to the project directory
cd expense-buddy-main

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:8080`

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run test` - Run tests

## Project Structure

```
src/
├── components/
│   ├── expense/          # Expense-related components
│   │   ├── AddExpenseForm.tsx
│   │   ├── ExpenseList.tsx
│   │   ├── SpendingChart.tsx
│   │   ├── SummaryCards.tsx
│   │   └── CategoryBadge.tsx
│   ├── ui/              # Reusable UI components
│   └── NavLink.tsx
├── hooks/               # Custom React hooks
│   └── useExpenses.ts
├── pages/              # Page components
│   ├── Index.tsx
│   └── NotFound.tsx
├── types/              # TypeScript type definitions
│   └── expense.ts
├── lib/                # Utility functions
│   └── utils.ts
└── App.tsx
```

## Usage

### Adding an Expense

1. Enter the amount you spent
2. Select a category
3. Add a description (optional)
4. Click "Add Expense"

### Viewing Analytics

- Check the spending chart to see expenses by category
- View summary cards for total spending, monthly total, and expense count
- Click on chart segments to get more details

## Deployment

### Deploy to Vercel

```sh
npm install -g vercel
vercel
```

### Deploy to Netlify

```sh
npm run build
# Upload the 'dist' folder to Netlify
```

### Deploy to GitHub Pages

Update `vite.config.ts` base path and push to gh-pages branch.

## Contributing

Feel free to fork this project and submit pull requests for any improvements.

## License

This project is open source and available under the MIT License.

## Support

If you encounter any issues or have suggestions, please open an issue in the repository.
