# Meal Planning App
About
- This app lets you view your meal plan monthly or weekly with custom entries and allows for easy access to an inbuilt shopping list.
- It allows to connect multiple google accounts so household members can easily add items and make requests.

Features
 - Use without an account
 - Connect multiple google accounts into a family group
 - Completely ad-free.
 - Night mode

Screenshots
<img width="323" height="688" alt="Screenshot 2026-01-23 130705" src="https://github.com/user-attachments/assets/388e03d1-ad57-44e3-b95b-8065c1f2ac85" />
<img width="307" height="662" alt="Screenshot 2026-01-23 130739" src="https://github.com/user-attachments/assets/6d6e2da2-3517-4edb-ab80-a3ef3cddcd97" />
<img width="297" height="675" alt="Screenshot 2026-01-23 130753" src="https://github.com/user-attachments/assets/2152dd24-9b6c-409c-a4c5-d43c94439449" />
<img width="303" height="679" alt="Screenshot 2026-01-23 130800" src="https://github.com/user-attachments/assets/d4b4056a-76ae-4e31-95af-dd141d2c8376" />

# Meal Planning Mobile App

This is a code bundle for Meal Planning Mobile App. The original project is available at https://www.figma.com/design/ljDP1QwOX7OfWMfwvMkl1h/Meal-Planning-Mobile-App.

## Running the code

Run `npm i` to install the dependencies.

Run `npm run dev` to start the development server.

## Firebase setup

Create a Firebase project, enable Email/Password and Google sign-in in Authentication, then copy the config values into a local `.env` file using `.env.example` as the template.

## Deploying to Firebase Hosting

Build the web app with `npm run build`, then deploy with `npm run deploy:web` from the project root. The Android app still comes from the same web bundle through Capacitor, so run `npm run copy:android` after building if you want to refresh the native app package.
