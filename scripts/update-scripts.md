# Netlify Integration Instructions

To complete the Netlify integration, please add these scripts to your package.json:

```json
"scripts": {
  "dev": "vite",
  "build": "tsc && vite build",
  "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
  "preview": "vite preview",
  "lovable-tagger": "lovable-tagger",
  "check-types": "tsc --noEmit",
  "check-format": "prettier --check .",
  "check-all": "npm run check-format && npm run check-types && npm run lint && npm run build",
  "format": "prettier --write .",
  "prepare": "husky install",
  "pre-commit": "lint-staged",
  "netlify": "netlify",
  "netlify:dev": "netlify dev",
  "netlify:deploy": "netlify deploy",
  "netlify:deploy:prod": "netlify deploy --prod"
}
```

## Deployment Steps

1. Install Netlify CLI globally (if not already installed):
   ```
   npm install -g netlify-cli
   ```

2. Login to Netlify:
   ```
   netlify login
   ```

3. Initialize your project with Netlify:
   ```
   netlify init
   ```

4. For local development with Netlify functions:
   ```
   npm run netlify:dev
   ```

5. To deploy a preview:
   ```
   npm run netlify:deploy
   ```

6. To deploy to production:
   ```
   npm run netlify:deploy:prod
   ```

## Coinbase Commerce Integration

The basic structure for Coinbase Commerce integration is set up with a placeholder serverless function. To complete this integration:

1. Create a Coinbase Commerce account if you don't have one
2. Set up your API keys in the Netlify environment variables
3. Implement the actual payment flow in the frontend
4. Complete the webhook handler in `netlify/functions/coinbase-webhook.js`

For security, you should set these environment variables in the Netlify dashboard:
- COINBASE_COMMERCE_API_KEY
- COINBASE_COMMERCE_WEBHOOK_SECRET
