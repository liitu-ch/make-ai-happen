# Make AI Happen - KI-Check für Organisationen

Ein interaktives Tool zur Bewertung der KI-Transformationsreife von Organisationen. Entwickelt mit Next.js, React und Tailwind CSS.

![Make AI Happen Logo](/public/images/logo.png)

## 🎯 Über das Projekt

Make AI Happen unterstützt Organisationen dabei, ihre Position im KI-Transformationsprozess zu bestimmen. Durch eine strukturierte Selbsteinschätzung ermitteln Organisationen ihren KI-Score und erhalten einen Vergleich mit anderen Organisationen.

### ✨ Features

- **4-Phasen-Analyse**: Umfassende Bewertung des KI-Reifegrads
- **Interaktiver Check**: Einfache Ja/Nein-Fragen zur schnellen Selbsteinschätzung
- **Vergleichsanalyse**: Benchmark mit anderen Organisationen
- **Sofortige Auswertung**: Detaillierte Visualisierung der Ergebnisse
- **Share-Funktionalität**: Teilen der Ergebnisse über verschiedene Kanäle

## 🚀 Technologien

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)

## 💻 Installation

1. Repository klonen
```bash
git clone https://github.com/liitu-ch/make-ai-happen.git
cd make-ai-happen
```

2. Dependencies installieren
```bash
npm install
# oder
yarn install
```

3. Development Server starten
```bash
npm run dev
# oder
yarn dev
```

4. Browser öffnen und zu [http://localhost:3000](http://localhost:3000) navigieren

## 🛠 Projektstruktur

```
make-ai-happen/
│
├── app/                    # Next.js App Router
├── components/            # React Komponenten
├── public/               # Statische Assets
│   └── images/          # Bilder und Icons
└── styles/              # CSS Styles
```

## 📦 Hauptkomponenten

- `MaturityWizard`: Hauptkomponente für den KI-Check
- `WelcomeStep`: Willkommensseite mit Einführung
- `Layout`: Grundlegendes Seiten-Layout
- `ContactForm`: Formular für Benutzerdetails

## 🔑 Environment Variables

Erstellen Sie eine `.env.local` Datei im Root-Verzeichnis:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 🤝 Beitragen

Beiträge sind willkommen! Bitte lesen Sie unsere Beitragsrichtlinien, bevor Sie einen Pull Request erstellen.

1. Fork des Repositories
2. Feature Branch erstellen (`git checkout -b feature/AmazingFeature`)
3. Änderungen committen (`git commit -m 'Add some AmazingFeature'`)
4. Branch pushen (`git push origin feature/AmazingFeature`)
5. Pull Request erstellen

## 📝 Lizenz

Dieses Projekt ist unter der MIT Lizenz lizenziert - siehe die [LICENSE](LICENSE) Datei für Details.

## 📧 Kontakt

liitu consulting gmbh - [info@liitu.ch](mailto:info@liitu.ch)

Projektlink: [https://github.com/liitu-ch/make-ai-happen](https://github.com/liitu-ch/make-ai-happen)

## 🙏 Danksagungen

- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Lucide Icons](https://lucide.dev)