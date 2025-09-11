# Contributing Guide

## 🤝 Welcome Contributors!

Thank you for your interest in contributing to Tennyson Live! This guide will help you get started with contributing to the project.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Contributing Process](#contributing-process)
- [Coding Standards](#coding-standards)
- [Testing](#testing)
- [Documentation](#documentation)
- [Issue Guidelines](#issue-guidelines)
- [Pull Request Guidelines](#pull-request-guidelines)

## 📜 Code of Conduct

This project follows a code of conduct to ensure a welcoming environment for all contributors. Please:

- Be respectful and inclusive
- Use welcoming and inclusive language
- Accept constructive criticism gracefully
- Focus on what's best for the community
- Show empathy towards other community members

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git
- Docker (optional, for containerized development)

### Fork and Clone

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/tennyson.live-react.git
   cd tennyson.live-react
   ```

3. **Add upstream remote**:
   ```bash
   git remote add upstream https://github.com/tennysonhull/tennyson.live-react.git
   ```

## 🛠️ Development Setup

### Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   ```bash
   cp env.example .env
   # Edit .env with your configuration
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** to `http://localhost:5173`

### Docker Development

```bash
# Build and run development container
docker-compose --profile dev up --build

# Access at http://localhost:5173
```

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run type-check   # Run TypeScript type checking
npm run clean        # Clean build directory
```

## 🔄 Contributing Process

### 1. Choose an Issue

- Look for issues labeled `good first issue` for beginners
- Check the [roadmap](ROADMAP.md) for planned features
- Create a new issue if you have an idea

### 2. Create a Branch

```bash
# Update your fork
git fetch upstream
git checkout main
git merge upstream/main

# Create feature branch
git checkout -b feature/your-feature-name
# or
git checkout -b fix/issue-number
```

### 3. Make Changes

- Write clean, readable code
- Follow the coding standards
- Add tests for new functionality
- Update documentation as needed

### 4. Test Your Changes

```bash
# Run type checking
npm run type-check

# Run linting
npm run lint

# Build the project
npm run build

# Test in browser
npm run preview
```

### 5. Commit Changes

```bash
# Stage changes
git add .

# Commit with descriptive message
git commit -m "feat: add new storyboard block type"
# or
git commit -m "fix: resolve theme toggle animation issue"
```

### 6. Push and Create PR

```bash
# Push to your fork
git push origin feature/your-feature-name

# Create pull request on GitHub
```

## 📝 Coding Standards

### TypeScript

- Use TypeScript for all new code
- Define proper interfaces and types
- Avoid `any` type when possible
- Use strict type checking

```typescript
// Good
interface User {
  id: string;
  name: string;
  email: string;
}

// Avoid
const user: any = { ... };
```

### React Components

- Use functional components with hooks
- Define proper prop interfaces
- Use meaningful component names
- Keep components focused and small

```typescript
// Good
interface ButtonProps {
  variant: 'primary' | 'secondary';
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant, onClick, children }) => {
  return (
    <button className={`btn btn-${variant}`} onClick={onClick}>
      {children}
    </button>
  );
};
```

### Styling

- Use Tailwind CSS classes
- Follow the design system
- Use semantic class names
- Maintain responsive design

```typescript
// Good
<div className="flex items-center justify-center p-4 bg-primary-100 dark:bg-primary-800">
  <h1 className="text-2xl font-bold text-primary-900 dark:text-primary-100">
    Title
  </h1>
</div>
```

### File Organization

- Use PascalCase for component files
- Group related files in directories
- Use index files for clean imports
- Follow the established project structure

```
src/
├── components/
│   ├── ProfileSection/
│   │   ├── ProfileSection.tsx
│   │   ├── ProfileSection.test.tsx
│   │   └── index.ts
│   └── Storyboard/
│       ├── Storyboard.tsx
│       ├── StoryboardBlock.tsx
│       └── index.ts
```

## 🧪 Testing

### Writing Tests

- Write tests for new components
- Test user interactions
- Test edge cases and error conditions
- Maintain good test coverage

```typescript
// Example test
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '../contexts/ThemeContext';
import ThemeToggle from './ThemeToggle';

test('toggles theme when clicked', () => {
  render(
    <ThemeProvider>
      <ThemeToggle />
    </ThemeProvider>
  );
  
  const toggleButton = screen.getByRole('button');
  fireEvent.click(toggleButton);
  
  expect(document.documentElement).toHaveClass('dark');
});
```

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## 📚 Documentation

### Code Documentation

- Add JSDoc comments for functions and components
- Document complex logic and algorithms
- Include usage examples
- Keep documentation up to date

```typescript
/**
 * Renders a storyboard block with the specified type and content
 * @param block - The storyboard block to render
 * @param index - The index of the block in the array
 * @returns JSX element representing the block
 */
const renderBlock = (block: StoryBlock, index: number): JSX.Element => {
  // Implementation
};
```

### README Updates

- Update README.md for new features
- Add setup instructions for new dependencies
- Update deployment instructions
- Include examples and usage

### Architecture Documentation

- Update [ARCHITECTURE.md](ARCHITECTURE.md) for structural changes
- Document new patterns and conventions
- Update component documentation
- Maintain deployment guides

## 🐛 Issue Guidelines

### Bug Reports

When reporting bugs, please include:

1. **Clear description** of the issue
2. **Steps to reproduce** the problem
3. **Expected behavior** vs actual behavior
4. **Environment details** (OS, browser, Node version)
5. **Screenshots** or error messages
6. **Code examples** if applicable

### Feature Requests

For feature requests, please include:

1. **Clear description** of the feature
2. **Use case** and motivation
3. **Proposed implementation** (if you have ideas)
4. **Alternative solutions** considered
5. **Additional context** or examples

### Issue Labels

- `bug` - Something isn't working
- `enhancement` - New feature or request
- `documentation` - Improvements to documentation
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention is needed
- `question` - Further information is requested

## 🔀 Pull Request Guidelines

### PR Title

Use conventional commit format:

```
feat: add new storyboard block type
fix: resolve theme toggle animation issue
docs: update deployment guide
style: improve button hover effects
refactor: simplify theme context logic
test: add unit tests for ProfileSection
```

### PR Description

Include:

1. **Summary** of changes
2. **Motivation** and context
3. **Testing** performed
4. **Screenshots** or demos (if applicable)
5. **Breaking changes** (if any)
6. **Related issues** (closes #123)

### PR Checklist

- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Tests added/updated
- [ ] Documentation updated
- [ ] No breaking changes (or clearly documented)
- [ ] Build passes successfully

### Review Process

1. **Automated checks** must pass
2. **Code review** by maintainers
3. **Testing** in different environments
4. **Documentation** review
5. **Approval** and merge

## 🏷️ Release Process

### Versioning

We use [Semantic Versioning](https://semver.org/):

- `MAJOR` - Breaking changes
- `MINOR` - New features (backward compatible)
- `PATCH` - Bug fixes (backward compatible)

### Release Checklist

- [ ] Update version in package.json
- [ ] Update CHANGELOG.md
- [ ] Update documentation
- [ ] Create release notes
- [ ] Tag release in Git
- [ ] Deploy to production

## 💡 Getting Help

### Community

- **GitHub Discussions** - General questions and ideas
- **GitHub Issues** - Bug reports and feature requests
- **Discord** - Real-time chat (if available)

### Resources

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)

### Contact

- **Email**: hello@tennyson.live
- **GitHub**: [@tennysonhull](https://github.com/tennysonhull)
- **Twitter**: [@tennysonhull](https://twitter.com/tennysonhull)

## 🙏 Recognition

Contributors will be recognized in:

- **README.md** - Contributor list
- **CHANGELOG.md** - Release notes
- **GitHub** - Contributor statistics
- **Website** - Credits page (future)

Thank you for contributing to Tennyson Live! 🎉

---

*This contributing guide is maintained by the project maintainers and updated as needed.*
