# Sudoku Game

A React-based Sudoku game built with modern JavaScript and CSS.

## Features

- **Interactive Sudoku Board**: 9x9 grid with clickable cells
- **Smart Number Input**: Keypad for entering numbers 1-9
- **Game Validation**: Built-in Sudoku solution checker
- **Responsive Design**: Clean, modern UI that works on different screen sizes
- **New Game Generation**: Automatically generates new puzzles using a Sudoku algorithm

## How to Play

1. **Start the Game**: The game automatically generates a new Sudoku puzzle
2. **Select a Cell**: Click on any empty cell (white) to select it
3. **Enter Numbers**: Use the number keypad (1-9) to fill in the selected cell
4. **Erase Mistakes**: Use the "Erase" button to clear the selected cell
5. **Check Solution**: Click "Check" to verify if your solution is correct
6. **New Game**: Start a fresh puzzle with the "New Game" button

## Game Rules

- Each row must contain the numbers 1-9 without repetition
- Each column must contain the numbers 1-9 without repetition
- Each 3x3 box must contain the numbers 1-9 without repetition
- Fixed numbers (blue) cannot be changed
- Empty cells (white) can be filled with your solution

## Technical Details

- **Frontend**: React 18 with Class Components
- **Styling**: CSS with responsive design
- **Algorithm**: Custom Sudoku puzzle generator and validator
- **Build Tool**: Create React App

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd sudoku
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── Components/          # React components
│   ├── Board.js        # Main game board
│   ├── Cell.js         # Individual cell component
│   ├── Row.js          # Row component
│   ├── Keypad.js       # Number input keypad
│   └── KeypadCell.js   # Individual keypad button
├── MiddleWare/          # Game logic
│   └── GenerateBoard.js # Sudoku generator and validator
├── Style_Sheets/        # CSS files
│   ├── Board.css       # Board styling
│   └── Cell.css        # Cell styling
├── App.js              # Main app component
├── Home.js             # Home page component
└── index.js            # App entry point
```

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the [MIT License](LICENSE).
