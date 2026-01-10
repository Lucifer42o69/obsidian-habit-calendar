# Contributing to Obsidian Habit Calendar

Thank you for your interest in contributing! This document provides guidelines for contributing to the project.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/yourusername/obsidian-habit-calendar.git`
3. Create a branch: `git checkout -b feature/your-feature-name`
4. Make your changes
5. Test your changes locally
6. Commit your changes: `git commit -m "Add: your feature description"`
7. Push to your fork: `git push origin feature/your-feature-name`
8. Open a Pull Request

## Development Setup

Follow the [Getting Started](README.md#getting-started) section in the README to set up your development environment.

## Code Style

This project uses [Biome](https://biomejs.dev/) for linting and formatting.

Before committing, run:

```bash
pnpm check
```

To automatically fix issues:

```bash
pnpm check:write
```

## Commit Messages

Use clear and descriptive commit messages:

- `Add: new feature description`
- `Fix: bug description`
- `Update: changes to existing feature`
- `Refactor: code improvements`
- `Docs: documentation updates`

## Pull Request Guidelines

- Keep PRs focused on a single feature or fix
- Update documentation if needed
- Ensure all checks pass
- Provide a clear description of changes

## Need Help?

Feel free to open an issue if you have questions or need assistance!
