# Block Preview Images

This directory is for storing preview images for blocks since the actual blocks use Expo Router and cannot be rendered on the Next.js web app.

## Current Status

By default, the documentation uses web-based placeholder images from [placehold.co](https://placehold.co).

## To Add Real Screenshots

1. Run the showcase app on a device or emulator
2. Navigate to each block
3. Take screenshots (recommended size: 400x600px)
4. Save them in this directory:
   - `get-started.png` - Get Started block screenshot
   - `sign-in.png` - Sign In block screenshot
   - `settings.png` - Settings block screenshot
   - `profile.png` - Profile block screenshot
5. Update the corresponding MDX files in `/content/docs/blocks/` to use local paths instead of placehold.co URLs
