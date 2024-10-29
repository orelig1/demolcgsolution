import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import en from './locales/en.json';
import fr from './locales/fr.json';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {en: {translation: en}, fr: {translation: fr}};
const language = navigator.language || navigator.userLanguage;

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: language.substring(0,2),
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false
    }
  });

  const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
