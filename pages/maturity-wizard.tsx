'use client' 
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import { ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';
import "../app/globals.css";

const MaturityWizard = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showReflection, setShowReflection] = useState(false);

  const stages = [
    {
      title: "Phase 1: Erkundung",
      questions: [
        "Haben Sie bereits KI Use Cases identifiziert?",
        "Gibt es ein grundlegendes Verständnis von KI im Management?",
        "Wurden erste Ressourcen für KI-Exploration bereitgestellt?",
        "Existiert eine Vision für KI-Einsatz?"
      ]
    },
    {
      title: "Phase 2: Experimentieren",
      questions: [
        "Laufen bereits erste Proof of Concepts?",
        "Gibt es ein Budget für KI-Pilotprojekte?",
        "Existiert ein Team für KI-Experimente?",
        "Wurden erste Erfolge/Misserfolge dokumentiert?"
      ]
    },
    {
      title: "Phase 3: Formalisierung",
      questions: [
        "Gibt es standardisierte Prozesse für KI-Projekte?",
        "Existiert eine KI-Governance?",
        "Sind Produktivumgebungen für KI vorhanden?",
        "Wurden KPIs für KI-Projekte definiert?"
      ]
    },
    {
      title: "Phase 4: Transformation",
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
    <div key={index} className="mb-4 p-4 bg-gray-50 rounded-lg">
      <div className="flex justify-between items-center">
        <p className="text-lg">{question}</p>
        <div className="space-x-2">
          <button
            onClick={() => handleAnswer(index, 'yes')}
            className={`px-4 py-2 rounded ${
              answers[`${currentStep}-${index}` as keyof typeof answers] === 'yes'
                ? 'bg-green-500 text-white'
                : 'bg-gray-200'
            }`}
          >
            Ja
          </button>
          <button
            onClick={() => handleAnswer(index, 'no')}
            className={`px-4 py-2 rounded ${
              answers[`${currentStep}-${index}` as keyof typeof answers] === 'no'
                ? 'bg-red-500 text-white'
                : 'bg-gray-200'
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

  const renderSummary = () => (
    <div className="space-y-4">
      <h2 className="text-xl font-bold mb-4">Zusammenfassung</h2>
      {stages.map((stage, index) => {
        const maturity = calculateStageMaturity(index);
        return (
          <div key={index} className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-bold">{stage.title}</h3>
            <div className="flex items-center mt-2">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${maturity || 0}%` }}
                ></div>
              </div>
              <span className="ml-2">{maturity}%</span>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">
          KI-Reifegradanalyse
        </CardTitle>
      </CardHeader>
      <CardContent>
        {!showReflection ? (
          <>
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-4">{stages[currentStep].title}</h2>
              {stages[currentStep].questions.map((q, i) => renderQuestion(q, i))}
            </div>
            <div className="flex justify-between mt-4">
              <button
                onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                disabled={currentStep === 0}
                className="flex items-center px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Zurück
              </button>
              {currentStep < stages.length - 1 ? (
                <button
                  onClick={() => setCurrentStep(currentStep + 1)}
                  className="flex items-center px-4 py-2 bg-blue-500 text-white rounded"
                >
                  Weiter
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              ) : (
                <button
                  onClick={() => setShowReflection(true)}
                  className="flex items-center px-4 py-2 bg-green-500 text-white rounded"
                >
                  Zur Reflexion
                  <CheckCircle className="w-4 h-4 ml-2" />
                </button>
              )}
            </div>
          </>
        ) : (
          <>
            {renderSummary()}
            {renderReflection()}
            <button
              onClick={() => setShowReflection(false)}
              className="mt-4 flex items-center px-4 py-2 bg-blue-500 text-white rounded"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück zur Analyse
            </button>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default MaturityWizard;