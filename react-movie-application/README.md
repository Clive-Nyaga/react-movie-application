# React Movie Application

A modern React application for browsing and managing your favorite movies using The Movie Database (TMDB) API.

## Features

- Browse popular movies
- Search for movies by title
- Add/remove movies to/from favorites
- Persistent favorites using localStorage
- Responsive design
- React Router for navigation

## Tech Stack

- **React 19** - Frontend framework
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Context API** - State management for favorites
- **TMDB API** - Movie data source
- **CSS3** - Styling

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn
- TMDB API key

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory
   - Add your TMDB API key:
     ```
     VITE_TMDB_API_KEY=your_api_key_here
     ```

4. Start the development server:
   ```bash
   npm run dev
   ```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/     # Reusable components
├── contexts/       # React Context providers
├── css/           # Stylesheets
├── pages/         # Page components
├── services/      # API services
├── App.jsx        # Main app component
└── main.jsx       # Entry point
```

## API

This application uses [The Movie Database (TMDB) API](https://www.themoviedb.org/documentation/api) to fetch movie data. You'll need to register for a free API key to use this application.
