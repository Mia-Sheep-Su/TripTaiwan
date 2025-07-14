# **App Name**: Tour Guide Taiwan

## Core Features:

- Tabbed Navigation: Display two tabs: 'Taipei Tour' and 'Lanyu Tour'. The selected tab will have a filled background, creating a folder tab effect.
- Key Visual Component: Show a Key Visual (KV) component at the top, that allows swiping between images fetched from data files.
- Interactive Map Component: Render a map component that displays points of interest from data, leveraging Leaflet.js and React Leaflet.
- Daily Itinerary Card: Create a card component for each day's itinerary, with dynamic content including a title, subtitles, descriptions and carousel of images.
- Responsive Layout: Implement two versions of the daily itinerary card layout (desktop/tablet vs mobile).
- Floating Return Button: Display a floating button that appears when the user scrolls past the map area, allowing them to quickly navigate back to the map component.
- Data Management: Organize data into JSON files (Taipei.json, Lanyu.json) to store itinerary details and color themes, facilitating data fetching and management.

## Style Guidelines:

- For Taipei Tour: primary color is #82B0D9, with a light background or hover state of #A3BFD9. Accent color: #7F8B3F. Highlight color: #575923. Block background and information backdrop: #D9BFA0 or #FFFFFF.
- For Lanyu Tour: primary color is #03738C, highlight color for emphasis/interaction: #04ADBF. Background: #84B4BF or #FFFFFF.  Auxiliary colors: #262401 (text, bottom background), #403C01 (small block embellishments).
- Header background: #F5F1EC, Logo color: #03738C, Hover color: #04ADBF, Selected state background: #03738C, Unselected text color: #403C01
- Body and headline font: 'Inria Sans' (sans-serif), as requested by the user. Note: currently only Google Fonts are supported.
- Organize project directory with src/components, src/data, pages and public folders. The public folder will store images and other assets.
- Use custom map pin icons, to match the travel destination themes.
- For desktop and tablet versions, alternate the text and image placement on each daily itinerary card to make the visual layout different.