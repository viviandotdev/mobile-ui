# Component Preview Images

This directory is for storing preview images for components since they use Expo Router and cannot be rendered on the Next.js web app.

## Current Status

By default, the documentation uses web-based placeholder images from [placehold.co](https://placehold.co).

## To Add Real Screenshots

1. Run the showcase app on a device or emulator
2. Navigate to each component
3. Take screenshots (recommended size: 400x300px)
4. Save them in this directory:
   - `example-component.png` - Example component screenshot
5. Update the corresponding MDX files in `/content/docs/components/` to use local paths instead of placehold.co URLs
