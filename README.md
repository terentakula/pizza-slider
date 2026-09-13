# Pizza Slider

Interactive animated pizza carousel built with React, TypeScript and Motion.

The project is based on a motion design reference and recreates the experience as a real interactive web interface rather than a pre-rendered animation.

## Live Demo

https://terentakula.github.io/pizza-slider/

## Repository

https://github.com/terentakula/pizza-slider

## Features

- Animated circular pizza carousel
- Infinite next / previous navigation
- Smooth Motion-based transitions
- Animated pizza titles
- Dynamic active item highlighting
- Synchronized text and carousel animations
- Responsive layout
- Mobile adaptation
- GitHub Pages deployment
- Continuous UI and animation refinement

## Tech Stack

- React
- TypeScript
- Vite
- Motion
- CSS
- GitHub Actions
- GitHub Pages

## Project Goal

The goal of this project is to recreate a high-end motion design concept as a fully functional React interface.

Instead of reproducing the original animation frame by frame, the carousel is generated dynamically using:

- React state
- calculated circular positioning
- rotation
- scale
- opacity
- animated transitions

This makes the interaction reusable, responsive and fully controlled by code.

## How It Works

Each pizza is positioned relative to the currently active item.

Its position is calculated using circular geometry:

```ts
const x = Math.sin(radians) * ORBIT_RADIUS;
const y = (1 - Math.cos(radians)) * ORBIT_RADIUS;