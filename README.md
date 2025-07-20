# 🎨 Etch-A-Sketch

> **A modern, interactive browser-based drawing pad inspired by the classic Etch-A-Sketch toy**

Create colorful pixel art by simply moving your mouse! Watch as colors shift and intensify with each pass, creating beautiful gradients and vibrant artwork.

---

## ✨ Features

🌈 **Rainbow Mode** - Progressive color cycling with 10 vibrant colors  
📈 **Opacity Building** - Colors intensify with repeated hovers (20%-100%)  
📏 **Dynamic Grid Sizing** - Choose from 1×1 up to 100×100 grids  
🎯 **Precision Drawing** - Smooth hover-based drawing (no clicking needed)  
🧹 **Instant Reset** - Clear your canvas and start fresh  
📱 **Responsive Design** - Works on desktop and mobile devices  
⚡ **Smooth Animations** - Buttery-smooth color transitions  

---

## 🚀 Quick Start

### Option 1: Try it online
**[🔗 Live Demo](https://berserkxr.github.io/etch-a-sketch/)**

### Option 2: Run locally
```bash
# Clone the repository
git clone https://github.com/your-username/etch-a-sketch.git
cd etch-a-sketch

# Open in your browser
open index.html
# OR double-click the index.html file
# OR run a local server:
python3 -m http.server 8000
```

---

## 🎮 How to Use

| Action | How To |
|--------|--------|
| **Draw** | Move your mouse over the grid squares |
| **Build Color** | Hover over the same square multiple times |
| **New Grid** | Click "New Grid" and enter size (1-100) |
| **Clear Canvas** | Refresh the page or create a new grid |

### 🎨 Drawing Tips
- **Light sketches**: Single quick passes for pastel colors
- **Bold lines**: Multiple hovers for vibrant, solid colors  
- **Gradients**: Vary hover counts for natural depth effects
- **Color patterns**: Each square cycles through 10 unique colors

---

## 🛠️ Tech Stack

| Technology | Purpose | Why This Choice |
|------------|---------|-----------------|
| **HTML5** | Structure | Semantic markup and accessibility |
| **CSS3** | Styling | Flexbox for responsive grid layout |
| **Vanilla JavaScript** | Interactivity | No dependencies, pure DOM manipulation |

### Key JavaScript Concepts Used
- Dynamic DOM element creation
- Event listeners (`mouseenter`)
- Data attributes for state tracking
- Array manipulation and modulo operations
- CSS style manipulation via JavaScript

---

## 🏗️ Project Structure

```
etch-a-sketch/
├── index.html          # Main HTML structure
├── styles.css          # All styling (embedded)
├── script.js           # JavaScript logic (embedded)
└── README.md           # This file
```

---

## 🎯 Learning Objectives

This project demonstrates proficiency in:

- ✅ **DOM Manipulation** - Creating and modifying elements dynamically
- ✅ **Event Handling** - Mouse events and user input validation  
- ✅ **CSS Layout** - Flexbox for responsive grid systems
- ✅ **JavaScript Logic** - Loops, conditionals, and data management
- ✅ **User Experience** - Intuitive interface and smooth interactions
- ✅ **Code Organization** - Clean, readable, and maintainable code

---

## 🔧 Customization

Want to modify the project? Here are some ideas:

```javascript
// Change the color palette
const colors = [
    '#your-color-1',
    '#your-color-2',
    // ... add more colors
];

// Adjust opacity progression
const opacity = Math.min(0.1 + (hoverCount - 1) * 0.15, 1.0);

// Modify grid size limits
if (isNaN(newSize) || newSize < 1 || newSize > 200) {
    // Allow up to 200x200 grid
}
```

---

## 🐛 Known Issues & Future Improvements

### Current Limitations
- No save/export functionality
- Limited to mouse interaction (no touch support)
- Color sequence resets with new grids

### Planned Features
- 🎨 Custom color picker
- 💾 Save artwork as image
- 📱 Touch device support
- 🎵 Sound effects
- 🔄 Undo/Redo functionality

---

## 🤝 Contributing

Contributions are welcome! Please feel free to:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

---

## 📜 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **[The Odin Project](https://www.theodinproject.com/)** - For the original project inspiration
- **Classic Etch-A-Sketch** - For the nostalgic concept
- **Web Development Community** - For continuous learning resources

---

<div align="center">

**Made with ❤️ and JavaScript**

[⭐ Star this repo](https://github.com/berserkxr/etch-a-sketch) if you found it helpful!

</div>