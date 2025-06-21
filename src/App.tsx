import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import compl from "@/assets/compl.jpg"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import React from "react"

export default function App() {
  const [tabValue, setTabValue] = React.useState("sante")

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 space-y-12">
      {/* Header Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {/* Mobile/Tablet Title on Top */}
        <div className="md:hidden mb-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-center">Inflammox – Complément Alimentaire Naturel</h1>
        </div>

        <Card className="overflow-hidden">
              <img
                src={compl}
                alt="Inflammox"
                className="object-cover  ml-2
                 mr-6 h-auto max-h-[600px] rounded-md shadow-md"
              />
            </Card>

        <div className="space-y-4">
          {/* Desktop Title */}
          <h1 className="hidden md:block text-3xl font-bold">Inflammox – Complément Alimentaire Naturel</h1>
          <p className="text-gray-600">Boîte de 30 gélules végétales</p>
          <p className="text-green-700 text-xl font-semibold">Prix : À venir</p>
          <p className="text-gray-700">
            Inflammox est un complément alimentaire 100 % naturel, formulé à partir de poudres de feuilles de Ziziphus
            lotus et de Pistacia lentiscus, deux plantes méditerranéennes reconnues pour leurs propriétés
            anti-inflammatoires et antioxydantes. Il est destiné à soutenir les personnes souffrant de maladies
            chroniques en aidant à réduire l'inflammation et à protéger les cellules contre le stress oxydatif.
          </p>
          <Button className="w-full md:w-auto">Ajouter au panier</Button>
        </div>
      </div>

      {/* Tabs Navigation */}
      <Tabs value={tabValue} onValueChange={setTabValue} className="space-y-8">
        <div className="bg-gray-100 py-4 px-2 rounded-md shadow-sm">
          <TabsList className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <TabsTrigger value="sante">✅ Allégations santé</TabsTrigger>
            <TabsTrigger value="composition">🧪 Composition</TabsTrigger>
            <TabsTrigger value="posologie">📦 Posologie</TabsTrigger>
            <TabsTrigger value="bienfaits">🌟 Bienfaits</TabsTrigger>
            <TabsTrigger value="precautions">⚠️ Précautions</TabsTrigger>
            <TabsTrigger value="conservation">🧴 Conservation</TabsTrigger>
            <TabsTrigger value="conseils">💡 Conseils</TabsTrigger>
          </TabsList>
        </div>

        {/* Tab Contents */}
        {tabSections.map(({ value, title, items }) => (
          <TabCardContent key={value} value={value} title={title} items={items} />
        ))}
      </Tabs>

      {/* Quality + Safety */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
        <Card className="p-6 space-y-4">
          <h2 className="text-xl font-semibold">♻️ Engagements qualité</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Formule 100 % naturelle, sans additifs ni conservateurs</li>
            <li>Gélules végétales adaptées aux régimes végétariens et végans</li>
            <li>Emballage recyclable</li>
          </ul>
        </Card>

        <Card className="p-6 space-y-4">
          <h2 className="text-xl font-semibold">🧪 Sécurité & Toxicité</h2>
          <p className="text-gray-700">
            🔬 Inflammox a été soumis à une évaluation de la toxicité. Les résultats ont montré l'absence de toxicité
            aux doses recommandées. Il peut donc être utilisé en toute sécurité dans le cadre d’une cure de 30 jours.
          </p>
        </Card>
      </div>
    </div>
  )
}

function TabCardContent({ value, title, items }: { value: string; title: string; items: string[] }) {
  return (
    <TabsContent value={value}>
      <div className="flex justify-center">
        <Card className="w-full max-w-3xl p-6">
          <Section title={title} items={items} />
        </Card>
      </div>
    </TabsContent>
  )
}

function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

const tabSections = [
  {
    value: "sante",
    title: "✅ Allégations santé",
    items: [
      "Aide à réduire l'inflammation chronique",
      "Contribue à protéger les cellules contre le stress oxydatif",
      "Soutient le confort articulaire et musculaire",
      "Favorise l'équilibre immunitaire",
    ],
  },
  {
    value: "composition",
    title: "🧪 Composition",
    items: [
      "Poudre de feuilles de Ziziphus lotus",
      "Poudre de feuilles de Pistacia lentiscus",
      "Amidon (agent de charge naturel)",
      "Gélule végétale HPMC (hypromellose)",
    ],
  },
  {
    value: "posologie",
    title: "📦 Format et posologie",
    items: [
      "Boîte de 30 gélules végétales",
      "Posologie recommandée : 1 gélule par jour, le matin avec un grand verre d'eau",
      "Durée de la cure : 30 jours",
    ],
  },
  {
    value: "bienfaits",
    title: "🌟 Bienfaits observés",
    items: [
      "Atténuation des symptômes inflammatoires dans des troubles comme l’arthrite, les douleurs intestinales, ou les allergies",
      "Soutien du système immunitaire, grâce aux antioxydants naturels",
      "Protection cellulaire contre le stress oxydatif, retardant le vieillissement",
      "Amélioration du confort digestif en cas d'inflammation du côlon ou d'irritation gastrique",
      "Effet détoxifiant doux, favorisant l’élimination des toxines",
      "Soutien du bien-être global pour les maladies chroniques inflammatoires",
      "Effet apaisant sur le système nerveux en cas de stress chronique",
      "Contribution à la santé cardiovasculaire par action anti-inflammatoire",
      "Réduction de la fatigue liée à l'inflammation",
    ],
  },
  {
    value: "precautions",
    title: "⚠️ Précautions d'emploi",
    items: [
      "Réservé à l'adulte",
      "Déconseillé aux femmes enceintes ou allaitantes",
      "Ne pas dépasser la dose journalière recommandée",
      "Tenir hors de portée des enfants",
      "Ne se substitue pas à une alimentation variée et équilibrée et à un mode de vie sain",
    ],
  },
  {
    value: "conservation",
    title: "🧴 Conservation",
    items: [
      "Conserver à l'abri de la lumière, de la chaleur et de l'humidité, dans son emballage d'origine bien fermé",
    ],
  },
  {
    value: "conseils",
    title: "💡 Conseils d'utilisation",
    items: [
      "Adoptez une alimentation équilibrée, riche en fruits et légumes",
      "Pratiquez une activité physique régulière",
      "Consultez un professionnel de santé en cas de traitement médical en cours",
    ],
  },
]
