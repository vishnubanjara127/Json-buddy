# JSON Editor

A full-screen, ad-free JSON editor with formatting, compression, and search capabilities built with Angular.

## Features

- **Format JSON**: Beautify and format JSON with proper indentation
- **Compress JSON**: Minify JSON by removing all whitespace
- **Search JSON**: Search for specific terms within JSON and navigate through results
- **Full Screen**: Large text areas for comfortable editing
- **No Ads**: Clean, distraction-free interface
- **Copy to Clipboard**: Easy copying of formatted/compressed JSON
- **Swap Input/Output**: Quickly move output back to input for further editing

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1. Navigate to the project directory:
```bash
cd json-editor
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:4200`

### Building for Production

To build the project for production:

```bash
npm run build
```

The build artifacts will be stored in the `dist/json-editor` directory.

## Usage

1. **Format JSON**: Paste your JSON in the input area and click "Format" to beautify it
2. **Compress JSON**: Click "Compress" to minify your JSON
3. **Search**: Enter a search term and click "Search" to find all occurrences. Use "Prev" and "Next" buttons to navigate through results
4. **Copy**: Click "Copy" to copy the output to your clipboard
5. **Swap**: Click "Swap" to move the output back to the input area

## Technologies

- Angular 17
- TypeScript
- CSS3
- HTML5

## License

This project is for personal use.
