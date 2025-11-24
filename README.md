# NOV24_1 - Node.js Express Tutorial

A simple Node.js tutorial project demonstrating how to create an HTTP server using Express.js framework with multiple endpoints.

## Description

This project showcases basic Express.js usage by implementing two GET endpoints:
- `/hello` - Returns "Hello world"
- `/evening` - Returns "Good evening"

Perfect for learning the fundamentals of Node.js backend development and Express.js routing.

## Prerequisites

- **Node.js** version 18.0.0 or higher
- **npm** (comes bundled with Node.js)

Check your versions:
```bash
node --version  # Should be >= 18.0.0
npm --version   # Should be >= 8.0.0
```

## Installation

1. Clone or navigate to the repository:
```bash
cd NOV24_1
```

2. Install dependencies:
```bash
npm install
```

This will install Express.js and nodemon (development tool).

## Usage

### Production Mode

Start the server:
```bash
npm start
```

The server will start on `http://localhost:3000`

### Development Mode

Start the server with auto-reload on file changes:
```bash
npm run dev
```

Useful during development - the server automatically restarts when you modify files.

## Available Endpoints

| Method | Path | Response | Description |
|--------|------|----------|-------------|
| GET | `/` | "Server is running..." | Root endpoint with status message |
| GET | `/hello` | "Hello world" | Returns hello world greeting |
| GET | `/evening` | "Good evening" | Returns evening greeting |

## Testing the Endpoints

### Using a Web Browser

1. Ensure the server is running (`npm start`)
2. Open your browser and navigate to:
   - `http://localhost:3000/hello`
   - `http://localhost:3000/evening`

### Using cURL

```bash
# Test the hello endpoint
curl http://localhost:3000/hello
# Expected output: Hello world

# Test the evening endpoint
curl http://localhost:3000/evening
# Expected output: Good evening

# Test the root endpoint
curl http://localhost:3000/
# Expected output: Server is running. Try /hello or /evening endpoints.
```

## Development Workflow

This project uses **nodemon** for development, which automatically restarts the server when you make changes to the code.

To use the development workflow:

1. Start the server in development mode:
```bash
npm run dev
```

2. Make changes to `server.js`

3. Save the file - nodemon will automatically detect changes and restart the server

4. Test your changes immediately without manually restarting

## Project Structure

```
NOV24_1/
├── .gitignore          # Git ignore patterns for Node.js
├── README.md           # This file
├── package.json        # Project manifest and dependencies
├── server.js           # Main Express server file
└── node_modules/       # Installed dependencies (auto-generated)
```

## Learning Resources

- [Express.js Official Documentation](https://expressjs.com/)
- [Node.js Official Documentation](https://nodejs.org/docs/)
- [npm Documentation](https://docs.npmjs.com/)

## License

ISC
