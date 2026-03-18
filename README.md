# PDF to HTML Converter
Convert PDFs to clean, editable HTML with CSS.

## Features ✨
- 📤 Upload PDFs (up to 100MB)
- 🔍 Automatically extract text, fonts, and sizes
- 📝 Generate semantic HTML (h1, h2, h3, p, etc.)
- 🎨 Create typographic CSS based on detected sizes
- 👀 Side-by-side preview (original PDF vs. generated HTML)
- 💾 Download HTML, CSS, and plain text

## Quick Start

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation
```bash
git clone https://github.com/velazquezjimenez60003-star/pdf-to-html-converter.git
cd pdf-to-html-converter
npm install
npm install pdfjs-dist axios
```

### Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage
1. **Upload a PDF**  
   - Click the upload box or drag-and-drop a PDF file  
2. **View Results**  
   - See original PDF on the left  
   - See generated HTML on the right  
3. **Switch Tabs**  
   - Preview: See how HTML looks  
   - HTML: View raw HTML code  
   - CSS: View generated stylesheet  
4. **Download**  
   - Download HTML, CSS, and text files

## How It Works
1. **Parse PDF**  
   - Extract text, fonts, sizes, and coordinates  
2. **Analyze**  
   - Detect typography hierarchy (h1, h2, h3, body)  
3. **Generate**  
   - Create clean, semantic HTML + CSS  
4. **Display**  
   - Show side-by-side comparison  
5. **Export**  
   - Download files for editing

## Tech Stack
- **Next.js 14**  
- React framework  
- **TypeScript**  
- Type safety  
- **Tailwind CSS**  
- Styling  
- **pdf.js**  
- PDF parsing  
- **pdfjs-dist**  
- PDF rendering

## Limitations
- Currently processes first 10 pages (configurable)
- Best with digital PDFs (has text layer)
- Scanned PDFs require OCR (future feature)

## Future Improvements
- [ ] OCR for scanned PDFs  
- [ ] Table detection  
- [ ] Image extraction  
- [ ] Batch processing  
- [ ] Custom font mapping UI  
- [ ] Multi-page handling

## License
MIT License - feel free to use for any purpose.

## Support
For issues or questions, please create a GitHub issue.