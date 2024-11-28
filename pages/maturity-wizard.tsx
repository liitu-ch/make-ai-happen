'use client'
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Menu, X, ArrowRight, ArrowLeft, CheckCircle, Share } from 'lucide-react';
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
                src="/images/logo.png"
                alt="Make AI Happen Logo"
                width={40}
                height={40}
                className="mr-3"
                priority
              />
              <div className="flex flex-col">
                <h1 className="text-xl font-bold text-gray-900">Make AI happen </h1>
                {/*   <span className="text-sm text-gray-500 hidden sm:block">The Art of AI Transformation</span>     */}
              </div>
            </div>

            {/* Desktop Navigation 
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-gray-900">Home</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">Über uns</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">Kontakt</a>
            </nav>
            */}
            {/* Mobile menu button 
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>*/}

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
              <p className="mt-2 text-gray-600">KI-Check für Ihre Organisation</p>
            </div>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
              {/*  <div>
                <h4 className="font-medium text-gray-900">Links</h4>
                <ul className="mt-4 space-y-2">
                  <li><a href="#" className="text-gray-600 hover:text-gray-900">Datenschutz</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-900">Impressum</a></li>
                </ul>
              </div> */}
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
      <p className="text-xl text-gray-600">Entdecken Sie das Potenzial von Künstlicher Intelligenz für Ihre Organisation</p>
    </div>

    <div className="space-y-6 text-left mb-8">
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Was Sie erwartet:</h3>
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="mr-3 text-2xl">📊</span>
            <div>
              <p className="font-medium">4 Phasen des KI-Checks</p>
              <p className="text-gray-600">Wo steht Ihre Organisation in der KI-Transformation?</p>
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
              <p className="text-gray-600">Erhalten Sie einen umfassenden Einblick in Ihre KI-Entwicklung</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Ihre Vorteile:</h3>
        <ul className="space-y-3 list-disc list-inside text-gray-800">
          <li>Bestimmen Sie Ihre Entwicklungsstufe in der KI-Transformation</li>
          <li>Erkennen Sie Potenziale und Handlungsfelder</li>
          <li>Erhalten Sie konkrete nächste Schritte</li>
          <li>Vergleichen Sie sich mit anderen Organisationen</li>
        </ul>
      </div>
    </div>

    <Button
      onClick={onStart}
      className="w-full md:w-auto md:px-8"
      size="lg"
    >
      KI-Check starten
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
    scrollToTop();
    setTimeout(() => {
      setShowWelcome(false);
    }, 100);
  };


  const handleLinkedInShare = () => {
    const totalScore = calculateTotalScore();

    const shareText = encodeURIComponent(`
  🎯 Mein KI-Score: ${totalScore}%
  
  Ich habe gerade den KI-Check von "Make AI Happen" abgeschlossen. 
  
  Meine Ergebnisse:
  ${stages.map((stage, index) => {
      const maturity = calculateStageMaturity(index);
      return `${stage.title}: ${maturity}%`;
    }).join('\n')}
  
  Ermittle auch du deinen KI-Score für deine Organisation:  https://makeaihappen.ch
  `.trim());

  handleShare();

    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=https://makeaihappen.ch&summary=${shareText}`;
    window.open(linkedinUrl, '_blank');
  };


  const calculateTotalScore = () => {
    let totalScore = 0;
    let totalAnswered = 0;

    stages.forEach((_, index) => {
      const maturity = calculateStageMaturity(index);
      if (maturity !== null) {
        totalScore += maturity;
        totalAnswered += 1;
      }
    });

    return totalAnswered === stages.length ? Math.round(totalScore / stages.length) : null;
  };

  const handleShare = () => {
    const totalScore = calculateTotalScore();

    const shareText = `
  🎯 Mein KI-Score: ${totalScore}%
  
  Ich habe gerade den KI-Check von "Make AI Happen" abgeschlossen. 

  Meine Ergebnisse:
  ${stages.map((stage, index) => {
      const maturity = calculateStageMaturity(index);
      return `${stage.title}: ${maturity}%`;
    }).join('\n')}
  
  Ermittle auch du deinen KI-Score für deine Organisation:  https://makeaihappen.ch
    `.trim();

    if (navigator.share) {
      // Mobile Share API
      navigator.share({
        title: 'Mein KI-Score',
        text: shareText,
        url: 'https://makeaihappen.ch'
      }).catch(console.error);
    } else {
      // Fallback: Copy to clipboard
      navigator.clipboard.writeText(shareText)
        .then(() => alert('Ergebnisse wurden in die Zwischenablage kopiert!'))
        .catch(() => alert('Teilen nicht möglich. Bitte kopieren Sie den Text manuell.'));
    }
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
          company: 'Bitte geben Sie Ihre Organisatiion ein.',
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
            <Label htmlFor="company">Organisation *</Label>
            <Input
              id="company"
              type="text"
              value={formData.company}
              onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
              required
              placeholder="Ihre Organisation"
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
              Ich stimme zu, dass meine Daten für anonymisierte Vergleichsanalysen verwendet werden. Die Einwilligung kann jederzeit per E-Mail an info@liitu.ch widerrufen werden. *
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
    scrollToTop();
    setTimeout(() => {
      setShowContactForm(true);
    }, 100);
  };

  const industryAverages = [
    {
      phase: "Erkundung 🔍",
      average: 65,
      description: "Die meisten Organisationen haben bereits erste KI Use Cases identifiziert und ein grundlegendes Verständnis aufgebaut."
    },
    {
      phase: "Experimentieren 🧪",
      average: 45,
      description: "Etwa die Hälfte der Organisationen führt erste Proof of Concepts durch und experimentiert mit KI-Lösungen."
    },
    {
      phase: "Formalisierung 📊",
      average: 30,
      description: "Standardisierte Prozesse und Governance-Strukturen sind bei einem Drittel der Organisationen etabliert."
    },
    {
      phase: "Transformation 🦋",
      average: 15,
      description: "Nur wenige Organisationen haben KI bereits vollständig in ihre Geschäftsprozesse integriert."
    }
  ];

  const stages = [
    {
      title: "Phase 1: Entdecken & Verstehen 🔍 ",
      questions: [
        "Haben Sie bereits KI Use Cases identifiziert?",
        "Gibt es ein grundlegendes Verständnis von KI im Management?",
        "Wurden erste Ressourcen für KI-Exploration bereitgestellt?",
        "Gibt es eine Vision für KI-Einsatz?"
      ]
    },
    {
      title: "Phase 2: Testen & Lernen 🧪 ",
      questions: [
        "Laufen bereits erste Proof of Concepts?",
        "Gibt es ein Budget für KI-Pilotprojekte?",
        "Gibt es ein Team für KI-Experimente?",
        "Wurden erste Erfolge/Misserfolge dokumentiert?"
      ]
    },
    {
      title: "Phase 3: Etablieren & Standardisieren 📊 ",
      questions: [
        "Gibt es standardisierte Prozesse für KI-Projekte?",
        "Gibt es eine KI-Governance?",
        "Sind Produktivumgebungen für KI vorhanden?",
        "Wurden KPIs für KI-Projekte definiert?"
      ]
    },
    {
      title: "Phase 4: Transformation & Skalieren 🦋 ",
      questions: [
        "Ist KI Teil der Organisationsstruktur?",
        "Gibt es eine KI-getriebene Kultur?",
        "Werden Geschäftsprozesse durch KI transformiert?",
        "Gibt es ein KI Center of Excellence?"
      ]
    }
  ];

  const PageTransition = ({ children }: { children: React.ReactNode }) => (
    <div className="transition-all duration-300">
      {children}
    </div>
  );


  const handleAnswer = (questionIndex: any, value: string) => {
    // scrollToTop();
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
            type="button" // Add this
            onClick={(e) => {
              e.preventDefault();
              setTimeout(() => {
                handleAnswer(index, 'yes');
              }, 100);

            }}
            className={`px-6 py-2 rounded-md min-w-[100px] transition-colors ${answers[`${currentStep}-${index}`] === 'yes'
              ? 'bg-green-500 text-white hover:bg-green-600'
              : 'bg-gray-200 hover:bg-gray-300'
              }`}
          >
            Ja
          </button>
          <button
            type="button" // Add this
            onClick={(e) => {
              e.preventDefault();
              handleAnswer(index, 'no');
            }}
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


  // Ersetze die renderSummary Funktion
  const renderSummary = () => (
    <div className="space-y-8 animate-fadeIn">
      <div>
        <h2 className="text-2xl font-bold mb-4">Ihr KI-Score im Überblick</h2>
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
                  <span className="text-sm font-medium">Durchschnitt</span>
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
                      ✨ Sie liegen über dem Durchschnitt
                    </div>
                  ) : maturity && maturity === industryAvg.average ? (
                    <div className="text-blue-600 font-medium">
                      📊 Sie liegen im Durchschnitt
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

      {/* Gesamtbewertung 
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
      </div>*/}


      <div className="p-6 bg-blue-50 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Gesamtbewertung</h3>
        <div className="mb-4">
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium">Ihr Gesamt-Score:</span>
            <span className="text-2xl font-bold text-blue-600">{calculateTotalScore()}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
            <div
              className="bg-blue-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${calculateTotalScore()}%` }}
            />
          </div>
        </div>
        <p className="text-gray-700 mb-6">
          Basierend auf Ihrer Bewertung haben Sie bereits wichtige Schritte in Ihrer KI-Transformation unternommen.
          Nutzen Sie die identifizierten Entwicklungspotenziale, um Ihre KI-Fähigkeiten weiter auszubauen.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            onClick={() => window.location.href = 'mailto:info@liitu.ch?subject=KI-Score%20Auswertung'}
            className="flex-1"
          >
            Beratungsgespräch vereinbaren
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button
            onClick={handleShare}
            variant="outline"
            className="flex-1"
          >
            Resultate teilen
            <Share className="w-4 h-4 ml-2" />
          </Button>
          <Button
            onClick={handleLinkedInShare}
            variant="outline"
            className="flex-1"
            // LinkedIn Blau
            style={{
              backgroundColor: '#FFF',
              color: '0A66C2',
              borderColor: '#0A66C2'
            }}
          >
            Auf LinkedIn teilen
            <Image
              src="/images/linkedin.png"
              alt="LinkedIn"
              width={16}
              height={16}
              className="ml-2"
            />
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
          {/*   <CardTitle className="text-2xl"> 
            🧙 KI-Check für Ihr Unternehmen
          </CardTitle> */}
        </CardHeader>
        <CardContent>
          <PageTransition>
            {showWelcome ? (
              <WelcomeStep onStart={handleStart} />
            ) : !showContactForm && !showResults ? (
              <>
                <div className="mb-6"> {/* Für Fragen */}
                  <h2 className="text-xl font-bold mb-4">{stages[currentStep].title}</h2>
                  {stages[currentStep].questions.map((q, i) => renderQuestion(q, i))}
                </div>
                <div className="flex justify-between mt-4">
                  <Button
                    variant="outline"
                    onClick={() => {
                      scrollToTop();
                      setTimeout(() => {
                        if (currentStep === 0) {
                          setShowWelcome(true);
                        } else {
                          setCurrentStep(currentStep - 1);
                        }
                      }, 100);
                    }}
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    {currentStep === 0 ? 'Zum Start' : 'Zurück'}
                  </Button>
                  {currentStep < stages.length - 1 ? (
                    // Im return block, update den Weiter-Button
                    <Button
                      onClick={() => {
                        scrollToTop();
                        setTimeout(() => {
                          setCurrentStep(currentStep + 1);
                        }, 100);
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