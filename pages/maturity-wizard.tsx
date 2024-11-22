'use client'
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Menu, X, ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
// import ModernLogo from '@/components/modernLogo';
import Image from 'next/image';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Sticky Header */}
      <header className="sticky top-0 bg-white border-b shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              {/* <ModernLogo />*/}
              <Image
                src="/images/logo.jpg"
                alt="Make AI Happen Logo"
                width={40}
                height={40}
                className="mr-3"
                priority
              />
              <div className="flex flex-col">
                <h1 className="text-xl font-bold text-gray-900">Make AI happen 🤖 </h1>
                <span className="text-sm text-gray-500 hidden sm:block">The Art of AI Transformation</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-gray-900">Home</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">Über uns</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">Kontakt</a>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>

          </div>
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Home</a>
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Über uns</a>
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Kontakt</a>
              </div>
            </div>
          )}
        </div>
      </header >

      {/* Main Content */}
      < main className="flex-grow container mx-auto px-4 py-8" >
        {children}
      </main >

      {/* Footer */}
      < footer className="bg-gray-100" >
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="md:flex md:justify-between">
            <div className="mb-8 md:mb-0">
              <h3 className="text-lg font-bold text-gray-900">🤖 Make AI happen</h3>
              <p className="mt-2 text-gray-600">KI-Check für Ihr Unternehmen</p>
            </div>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
              <div>
                <h4 className="font-medium text-gray-900">Links</h4>
                <ul className="mt-4 space-y-2">
                  <li><a href="#" className="text-gray-600 hover:text-gray-900">Datenschutz</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-900">Impressum</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Kontakt</h4>
                <ul className="mt-4 space-y-2">
                  <li className="text-gray-600">info@liitu.ch</li>
                  <li className="text-gray-600">+41 79 403 36 13</li>
                </ul>
              </div>
              {/* Social Media Links auskommentiert
              <div>
                <h4 className="font-medium text-gray-900">Social Media</h4>
                <ul className="mt-4 space-y-2">
                  <li><a href="#" className="text-gray-600 hover:text-gray-900">LinkedIn</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-900">Twitter</a></li>
                </ul>
              </div>
              */}
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8">
            <p className="text-gray-600 text-center">&copy; 2024 liitu consulting gmbh. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer >
    </div >
  );
};

// Füge diese Komponente hinzu
const WelcomeStep = ({ onStart }: { onStart: () => void }) => (
  <div className="space-y-6 text-center">
    <div className="mb-8">
      <h2 className="text-3xl font-bold mb-4">Willkommen zum KI-Check</h2>
      <p className="text-xl text-gray-600">Entdecken Sie das Potenzial von Künstlicher Intelligenz für Ihr Unternehmen</p>
    </div>

    <div className="space-y-6 text-left mb-8">
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Was Sie erwartet:</h3>
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="mr-3 text-2xl">📊</span>
            <div>
              <p className="font-medium">4 Phasen der Analyse</p>
              <p className="text-gray-600">Wo steckt dein Unternehmen im KI-Entwicklungsprozess?</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-2xl">⏱️</span>
            <div>
              <p className="font-medium">Dauer: ca. 3-5 Minuten</p>
              <p className="text-gray-600">Schnelle und effiziente Bewertung</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-2xl">📈</span>
            <div>
              <p className="font-medium">Detaillierte Auswertung</p>
              <p className="text-gray-600">Erhalten Sie einen umfassenden Einblick in Ihre KI-Reife</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Ihre Vorteile:</h3>
        <ul className="space-y-3 list-disc list-inside text-gray-800">
          <li>Identifizieren Sie Ihre Position auf der KI-Reise</li>
          <li>Erkennen Sie Potenziale und Handlungsfelder</li>
          <li>Erhalten Sie konkrete nächste Schritte</li>
          <li>Vergleichen Sie sich mit Best Practices</li>
        </ul>
      </div>
    </div>

    <Button
      onClick={onStart}
      className="w-full md:w-auto md:px-8"
      size="lg"
    >
      Analyse starten
      <ArrowRight className="w-5 h-5 ml-2" />
    </Button>
  </div>
);

const MaturityWizard = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showContactForm, setShowContactForm] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    company: '',
    position: '',
    consent: false
  });


  const [showWelcome, setShowWelcome] = useState(true);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handler für den Start-Button
  const handleStart = () => {
    setShowWelcome(false);
    scrollToTop();
  };
  // Validierung für das Kontaktformular
  const isContactFormValid = () => {
    return (
      contactData.name.trim() !== '' &&
      contactData.email.trim() !== '' &&
      contactData.company.trim() !== '' &&
      contactData.consent
    );
  };

  // Handler für Kontaktformular-Änderungen
  const handleContactChange = (field: string, value: string | boolean) => {
    setContactData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const resetWizard = () => {
    if (window.confirm('Möchten Sie wirklich zum Start zurückkehren? Alle Ihre Antworten werden dabei gelöscht.')) {
      setShowWelcome(true);
      setCurrentStep(0);
      setShowContactForm(false);
      setShowResults(false);
      setAnswers({});
      setContactData({
        name: '',
        email: '',
        company: '',
        position: '',
        consent: false
      });
    }
  };

  // Komponente für das Kontaktformular
  /* const ContactForm = () => (
    <div className="space-y-6">
      <CardTitle className="text-xl">Bitte geben Sie Ihre Kontaktdaten ein</CardTitle>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            type="text"
            value={contactData.name}
            onChange={(e) => handleContactChange('name', e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">E-Mail *</Label>
          <Input
            id="email"
            type="email"
            value={contactData.email}
            onChange={(e) => handleContactChange('email', e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="company">Unternehmen *</Label>
          <Input
            id="company"
            type="text"
            value={contactData.company}
            onChange={(e) => handleContactChange('company', e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="position">Position</Label>
          <Input
            id="position"
            type="text"
            value={contactData.position}
            onChange={(e) => handleContactChange('position', e.target.value)}
          />
        </div>

        <div className="flex items-start space-x-2">
          <Checkbox
            id="consent"
            checked={contactData.consent}
            onCheckedChange={(checked) => handleContactChange('consent', checked)}
          />
          <Label 
            htmlFor="consent" 
            className="text-sm leading-tight"
          >
            Ich willige ein, dass meine Daten gemäss der Datenschutzerklärung gespeichert und verarbeitet werden dürfen. 
            Die Einwilligung kann jederzeit widerrufen werden. *
          </Label>
        </div>

        <p className="text-sm text-muted-foreground">* Pflichtfelder</p>
      </div>

      <div className="flex justify-between mt-6">
        <Button 
          variant="outline" 
          onClick={() => setShowContactForm(false)}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Zurück
        </Button>
        
        <Button
          onClick={() => {
            if (isContactFormValid()) {
              setShowResults(true);
            } else {
              alert('Bitte füllen Sie alle Pflichtfelder aus und akzeptieren Sie die Datenschutzerklärung.');
            }
          }}
          disabled={!isContactFormValid()}
        >
          Ergebnisse anzeigen
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  ); */

  const ContactForm = () => {
    const [formData, setFormData] = useState({
      name: contactData.name,
      email: contactData.email,
      company: contactData.company,
      position: contactData.position,
      consent: contactData.consent
    });

    const isFormValid = () => {
      const errors = {
        name: formData.name.trim() === '',
        email: !formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
        company: formData.company.trim() === '',
        consent: !formData.consent
      };

      const hasErrors = Object.values(errors).some(error => error);

      if (hasErrors) {
        const errorMessages = {
          name: 'Bitte geben Sie Ihren Namen ein.',
          email: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
          company: 'Bitte geben Sie Ihr Unternehmen ein.',
          consent: 'Bitte akzeptieren Sie die Datenschutzerklärung.'
        };

        const activeErrors = Object.entries(errors)
          .filter(([_, hasError]) => hasError)
          .map(([field]) => errorMessages[field as keyof typeof errorMessages]);

        alert(activeErrors.join('\n'));
        return false;
      }

      return true;
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();

      if (isFormValid()) {
        setContactData(formData);
        setShowResults(true);
      }
    };

    return (
      <form onSubmit={handleSubmit} className="space-y-6">
        <CardTitle className="text-xl">Bitte geben Sie Ihre Kontaktdaten ein</CardTitle>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              required
              placeholder="Ihr Name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">E-Mail *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              required
              placeholder="ihre.email@beispiel.de"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Unternehmen *</Label>
            <Input
              id="company"
              type="text"
              value={formData.company}
              onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
              required
              placeholder="Ihr Unternehmen"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="position">Position</Label>
            <Input
              id="position"
              type="text"
              value={formData.position}
              onChange={(e) => setFormData(prev => ({ ...prev, position: e.target.value }))}
              placeholder="Ihre Position (optional)"
            />
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="consent"
              checked={formData.consent}
              onCheckedChange={(checked) =>
                setFormData(prev => ({ ...prev, consent: checked as boolean }))
              }
            />
            <Label
              htmlFor="consent"
              className="text-sm leading-tight cursor-pointer"
            >
              Ich willige ein, dass meine Daten gemäß der Datenschutzerklärung gespeichert und verarbeitet werden dürfen.
              Die Einwilligung kann jederzeit widerrufen werden. *
            </Label>
          </div>

          <p className="text-sm text-muted-foreground">* Pflichtfelder</p>
        </div>

        <div className="flex justify-between mt-6">
          <Button
            type="button"
            variant="outline"
            onClick={() => setShowContactForm(false)}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück
          </Button>

          <Button
            type="submit"
          >
            Ergebnisse anzeigen
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </form>
    );
  };

  // Handler für die Fertigstellung des Assessments
  const handleAssessmentComplete = () => {
    setShowContactForm(true);
  };

  const industryAverages = [
    {
      phase: "Erkundung 🔍",
      average: 65,
      description: "Die meisten Unternehmen haben bereits erste KI Use Cases identifiziert und ein grundlegendes Verständnis aufgebaut."
    },
    {
      phase: "Experimentieren 🧪",
      average: 45,
      description: "Etwa die Hälfte der Unternehmen führt erste Proof of Concepts durch und experimentiert mit KI-Lösungen."
    },
    {
      phase: "Formalisierung 📊",
      average: 30,
      description: "Standardisierte Prozesse und Governance-Strukturen sind bei einem Drittel der Unternehmen etabliert."
    },
    {
      phase: "Transformation 🦋",
      average: 15,
      description: "Nur wenige Unternehmen haben KI bereits vollständig in ihre Geschäftsprozesse integriert."
    }
  ];

  const stages = [
    {
      title: "Phase 1: Entdecken & Verstehen 🔍 ",
      questions: [
        "Haben Sie bereits KI Use Cases identifiziert?",
        "Gibt es ein grundlegendes Verständnis von KI im Management?",
        "Wurden erste Ressourcen für KI-Exploration bereitgestellt?",
        "Existiert eine Vision für KI-Einsatz?"
      ]
    },
    {
      title: "Phase 2: Testen & Lernen 🧪 ",
      questions: [
        "Laufen bereits erste Proof of Concepts?",
        "Gibt es ein Budget für KI-Pilotprojekte?",
        "Existiert ein Team für KI-Experimente?",
        "Wurden erste Erfolge/Misserfolge dokumentiert?"
      ]
    },
    {
      title: "Phase 3: Etablieren & Skalieren 📊 ",
      questions: [
        "Gibt es standardisierte Prozesse für KI-Projekte?",
        "Existiert eine KI-Governance?",
        "Sind Produktivumgebungen für KI vorhanden?",
        "Wurden KPIs für KI-Projekte definiert?"
      ]
    },
    {
      title: "Phase 4: Innovieren & Wachsen 🦋 ",
      questions: [
        "Ist KI Teil der Unternehmensstrategie?",
        "Gibt es eine KI-getriebene Kultur?",
        "Werden Geschäftsprozesse durch KI transformiert?",
        "Existiert ein KI Center of Excellence?"
      ]
    }
  ];

  const reflection = {
    title: "Reflexion zur KI-Reife",
    questions: [
      "Warum ist es wichtig, die KI-Reifephasen zu kennen?",
      "Welche Chancen ergeben sich aus der Reifegradanalyse?",
      "Welche Risiken bestehen bei fehlendem Reifegrad?",
      "Was sind die nächsten Schritte für Ihr Unternehmen?"
    ]
  };
  const PageTransition = ({ children }: { children: React.ReactNode }) => (
    <div className="transition-all duration-300 animate-fadeIn">
      {children}
    </div>
  );


  const handleAnswer = (questionIndex: any, value: string) => {
    setAnswers({
      ...answers,
      [`${currentStep}-${questionIndex}`]: value
    });
  };

  const calculateStageMaturity = (stageIndex: number) => {
    let score = 0;
    let answered = 0;
    for (let i = 0; i < 4; i++) {
      const key = `${stageIndex}-${i}` as keyof typeof answers;
      if (answers[key] === 'yes') {
        score += 1;
        answered += 1;
      } else if (answers[key] === 'no') {
        answered += 1;
      }
    }
    return answered === 4 ? Math.round((score / 4) * 100) : null;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderQuestion = (question: any, index: any) => (
    <div
      key={index}
      className="mb-4 p-4 bg-gray-50 rounded-lg transform transition-all duration-300 hover:scale-[1.01] hover:shadow-md"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <p className="text-lg mb-4 md:mb-0">{question}</p>
        <div className="flex flex-row justify-start md:justify-end gap-3">
          <button
            onClick={() => handleAnswer(index, 'yes')}
            className={`px-6 py-2 rounded-md min-w-[100px] transition-colors ${answers[`${currentStep}-${index}`] === 'yes'
              ? 'bg-green-500 text-white hover:bg-green-600'
              : 'bg-gray-200 hover:bg-gray-300'
              }`}
          >
            Ja
          </button>
          <button
            onClick={() => handleAnswer(index, 'no')}
            className={`px-6 py-2 rounded-md min-w-[100px] transition-colors ${answers[`${currentStep}-${index}`] === 'no'
              ? 'bg-red-500 text-white hover:bg-red-600'
              : 'bg-gray-200 hover:bg-gray-300'
              }`}
          >
            Nein
          </button>
        </div>
      </div>
    </div>
  );

  const renderReflection = () => (
    <div className="space-y-4">
      <h2 className="text-xl font-bold mb-4">Reflexion</h2>
      {reflection.questions.map((question, index) => (
        <div key={index} className="p-4 bg-gray-50 rounded-lg">
          <p className="text-lg mb-2">{question}</p>
          <textarea
            className="w-full p-2 border rounded"
            rows={3}
            placeholder="Ihre Antwort..."
            value={answers[`reflection-${index}` as keyof typeof answers] || ''}
            onChange={(e) =>
              setAnswers({
                ...answers,
                [`reflection-${index}` as keyof typeof answers]: e.target.value
              })
            }
          />
        </div>
      ))}
    </div>
  );

  // Ersetze die renderSummary Funktion
  const renderSummary = () => (
    <div className="space-y-8 animate-fadeIn">
      <div>
        <h2 className="text-2xl font-bold mb-4">Ihre KI-Reife im Überblick</h2>
        <p className="text-gray-600 mb-6">
          Vergleichen Sie Ihre Ergebnisse mit dem Branchendurchschnitt.
        </p>
      </div>

      {stages.map((stage, index) => {
        const maturity = calculateStageMaturity(index);
        const industryAvg = industryAverages[index];

        return (
          <div key={index} className="p-6 bg-gray-50 rounded-lg space-y-4">
            <h3 className="text-xl font-bold">{stage.title}</h3>

            <div className="space-y-4">
              {/* Ihr Ergebnis */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Ihr Ergebnis</span>
                  <span className="text-sm font-medium">{maturity}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${maturity || 0}%` }}
                  />
                </div>
              </div>

              {/* Branchendurchschnitt */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Branchendurchschnitt</span>
                  <span className="text-sm font-medium">{industryAvg.average}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-gray-600 h-2.5 rounded-full"
                    style={{ width: `${industryAvg.average}%` }}
                  />
                </div>
              </div>

              {/* Vergleich und Einordnung */}
              <div className="mt-4 p-4 bg-white rounded-lg border border-gray-200">
                <p className="text-gray-600">{industryAvg.description}</p>
                <div className="mt-3 text-sm">
                  {maturity && maturity > industryAvg.average ? (
                    <div className="text-green-600 font-medium">
                      ✨ Sie liegen über dem Branchendurchschnitt
                    </div>
                  ) : maturity && maturity === industryAvg.average ? (
                    <div className="text-blue-600 font-medium">
                      📊 Sie liegen im Branchendurchschnitt
                    </div>
                  ) : (
                    <div className="text-orange-600 font-medium">
                      💡 Hier besteht Entwicklungspotenzial
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Gesamtbewertung */}
      <div className="p-6 bg-blue-50 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Gesamtbewertung</h3>
        <p className="text-gray-700">
          Basierend auf Ihrer Bewertung haben Sie bereits wichtige Schritte in Ihrer KI-Reise unternommen.
          Nutzen Sie die identifizierten Entwicklungspotenziale, um Ihre KI-Fähigkeiten weiter auszubauen.
        </p>
        <div className="mt-4">
          <Button
            onClick={() => window.location.href = 'mailto:info@liitu.ch?subject=KI-Reifegradanalyse%20Auswertung'}
            className="mt-2"
          >
            Beratungsgespräch vereinbaren
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );

  // Im MaturityWizard Component, passe den Return-Block an:

  return (
    <Layout>
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">
            🧙 KI-Check für Ihr Unternehmen
          </CardTitle>
        </CardHeader>
        <CardContent>
          <PageTransition>
            {showWelcome ? (
              <WelcomeStep onStart={handleStart} />
            ) : !showContactForm && !showResults ? (
              <>
                <div className="mb-6 animate-fadeIn"> {/* Für Fragen */}
                  <h2 className="text-xl font-bold mb-4">{stages[currentStep].title}</h2>
                  {stages[currentStep].questions.map((q, i) => renderQuestion(q, i))}
                </div>
                <div className="flex justify-between mt-4">
                  <Button
                    variant="outline"
                    onClick={() => currentStep === 0 ? setShowWelcome(true) : setCurrentStep(currentStep - 1)}
                    disabled={false} // Entferne disabled={currentStep === 0}
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    {currentStep === 0 ? 'Zum Start' : 'Zurück'}
                  </Button>
                  {currentStep < stages.length - 1 ? (
                    // Im return block, update den Weiter-Button
                    <Button
                      onClick={() => {
                        setCurrentStep(currentStep + 1);
                        scrollToTop();
                      }}
                    >
                      Weiter
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  ) : (
                    <Button onClick={handleAssessmentComplete}>
                      Abschliessen
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  )}
                </div>
              </>
            ) : showContactForm && !showResults ? (
              <ContactForm />
            ) : (
              <>
                {renderSummary()}
                <Button
                  variant="outline"
                  onClick={resetWizard}
                  className="mt-4"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Zurück zum Start
                </Button>
              </>
            )}
          </PageTransition>
        </CardContent>
      </Card>
    </Layout>
  );
};

export default MaturityWizard;