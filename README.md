# Gary's Personal Portfolio Site

A modern, responsive portfolio website built with React, TypeScript, and Vite. This project showcases a clean, performant, and maintainable codebase using current web development best practices.

## 🚀 Technologies

- **Frontend Framework:** React 18
- **Language:** TypeScript
- **Build Tool:** Vite
- **Styling:** CSS Modules
- **State Management:** React Hooks
- **Package Manager:** npm
- **Version Control:** Git
- **Linting:** ESLint with TypeScript support

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/     # React components
│   ├── assets/        # Static assets
│   ├── theme.ts       # Theme configuration
│   └── main.tsx       # Application entry point
├── public/            # Public static files
├── index.html         # HTML entry point
└── vite.config.ts     # Vite configuration
```

## 🛠️ Setup and Development

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/garyorsargos/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors

## 🔍 Code Quality

### ESLint Configuration

The project uses a comprehensive ESLint setup with:
- Type-aware lint rules
- React-specific linting (eslint-plugin-react-x)
- DOM-specific linting (eslint-plugin-react-dom)

### TypeScript Configuration

Strict TypeScript configuration with:
- Strict type checking
- Separate configs for app and node environments
- Full type coverage requirement

## 🌐 Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## 📦 Dependencies

### Core Dependencies
- React 18.x
- TypeScript 5.x
- Vite 5.x

### Development Dependencies
- ESLint
- TypeScript ESLint
- Prettier
- Various React-specific ESLint plugins

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
