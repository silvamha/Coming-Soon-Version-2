## 01 Working Firebase JSON file
{
  "name": "coming-soon",
  "version": "1.0.0",
  "description": "Landing Page",
  "main": "index.js",
  "scripts": {
    "serve": "firebase emulators:start",
    "deploy": "firebase deploy --only hosting",
    "dev": "next dev",
    "build": "next build && next export",
    "start": "next start",
    "lint": "next lint"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "firebase": "^9.0.0",
    "next": "^14.0.4"
  }
}
