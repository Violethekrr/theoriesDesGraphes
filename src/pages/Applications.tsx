import { useState } from 'react';
import {  Smartphone, Navigation, Wifi, Database, Cpu, Users, CheckCircle } from 'lucide-react';
import { useTheme } from '../Context/ThemeContext';

export default function Applications() {
  const {isDark} = useTheme()
  const [selectedExercise, setSelectedExercise] = useState<number | null>(null);

  const exercises = [
    {
      id: 1,
      title: "Exercice 1 - Matrice d'adjacence",
      enonce: "Construis la matrice d'adjacence du graphe suivant : Sommets = {A, B, C, D}, Arêtes = {A–B, A–C, B–C, C–D}.",
      correction: "Matrice 4×4 : A[0,1,1,0], B[1,0,1,0], C[1,1,0,1], D[0,0,1,0]"
    },
    {
      id: 2,
      title: "Exercice 2 - Liste d'adjacence",
      enonce: "Donne la liste d'adjacence du graphe précédent.",
      correction: "A:[B,C], B:[A,C], C:[A,B,D], D:[C]"
    },
    {
      id: 3,
      title: "Exercice 3 - Graphe eulérien",
      enonce: "Vérifie si le graphe précédent est eulérien.",
      correction: "Degrés : A=2, B=2, C=3, D=1. Deux sommets (C et D) ont un degré impair → Non eulérien"
    },
    {
      id: 4,
      title: "Exercice 4 - Graphe hamiltonien (Dirac)",
      enonce: "Le graphe complet K₄ est-il hamiltonien selon Dirac ?",
      correction: "n=4, deg=3. Condition : deg ≥ n/2=2. Ici 3≥2 ✓ → K₄ est hamiltonien"
    },
    {
      id: 5,
      title: "Exercice 5 - Connexité",
      enonce: "Le graphe {A,B,C,D} avec arêtes {A–B, B–C} est-il connexe ?",
      correction: "D est isolé → pas de chemin vers D → Non connexe"
    },
    {
      id: 6,
      title: "Exercice 6 - Planarité",
      enonce: "Le graphe complet K₅ est-il planaire ?",
      correction: "Par Kuratowski, K₅ contient une subdivision de lui-même → Non planaire"
    },
    {
      id: 7,
      title: "Exercice 7 - BFS",
      enonce: "Applique BFS sur {A,B,C,D,E} avec arêtes {A–B, A–C, B–D, C–E}, départ A.",
      correction: "Niveau 0: A | Niveau 1: B,C | Niveau 2: D,E. Distances: d(A)=0, d(B)=1, d(C)=1, d(D)=2, d(E)=2"
    },
    {
      id: 8,
      title: "Exercice 8 - DFS",
      enonce: "Applique DFS sur le même graphe en partant de A.",
      correction: "Ordre de visite : A → B → D → C → E"
    },
    {
      id: 9,
      title: "Exercice 9 - Dijkstra",
      enonce: "Graphe pondéré : {A,B,C}, arêtes A–B(2), A–C(5), B–C(1). Plus court chemin A→C ?",
      correction: "A→C direct = 5. A→B→C = 2+1 = 3. Plus court : A–B–C (distance = 3)"
    },
    {
      id: 10,
      title: "Exercice 10 - Prim vs Kruskal",
      enonce: "Graphe : {A,B,C,D}, arêtes A–B(1), B–C(2), C–D(3), A–D(4). Compare Prim et Kruskal.",
      correction: "Prim (départ A) : A–B(1), B–C(2), C–D(3). Kruskal : trie → 1,2,3,4 → ajoute A–B, B–C, C–D. Résultat identique : coût total = 6"
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-700 ${
      isDark 
        ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950' 
        : 'bg-[#F8F8FA]'
    }`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@200;400;600;700&family=JetBrains+Mono:wght@400;600&display=swap');
        
        * { font-family: 'Crimson Pro', serif; }
        .mono { font-family: 'JetBrains Mono', monospace; }

        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        
        @keyframes pulse-network {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
      `}</style>

      <div className="relative container mx-auto px-6 py-8">
       

        <div className="max-w-6xl mx-auto mb-12">
          <div className={`mono text-xs tracking-widest uppercase mb-4 ${
            isDark ? 'text-indigo-400' : 'text-teal-700'
          }`}>
            PARTIE V
          </div>
          <h1 className={`text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Applications & Exercices
          </h1>
          <p className={`text-xl ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
            Applications pratiques de la théorie des graphes et exercices d'évaluation
          </p>
        </div>

        {/* 17. Applications Pratiques */}
        <div className={`max-w-6xl mx-auto mb-12 p-8 rounded-2xl border ${
          isDark 
            ? 'bg-linear-to-br from-indigo-950/40 to-purple-950/40 border-indigo-500/20' 
            : 'bg-white border-teal-200/40 shadow-lg'
        }`}>
          <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            17. Applications Pratiques
          </h2>

          <p className={`text-lg mb-8 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
            La théorie des graphes est omniprésente dans notre vie quotidienne. Voici quelques domaines d'application majeurs.
          </p>

          {/* Réseaux Sociaux */}
          <div className={`mb-8 p-8 rounded-2xl ${isDark ? 'bg-slate-900/40' : 'bg-linear-to-br from-teal-50 to-emerald-50'}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-3 rounded-xl ${isDark ? 'bg-indigo-500/20' : 'bg-teal-100'}`}>
                <Users className={isDark ? 'text-indigo-300' : 'text-teal-700'} size={28} />
              </div>
              <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                 Réseaux Sociaux
              </h3>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <p className={`text-lg mb-4 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  Chaque utilisateur est un <strong>sommet</strong>, chaque relation d'amitié est une <strong>arête</strong>.
                </p>

                <div className={`p-5 rounded-xl mb-4 ${isDark ? 'bg-slate-950/50' : 'bg-white'}`}>
                  <h4 className={`font-semibold mb-3 ${isDark ? 'text-indigo-300' : 'text-teal-700'}`}>
                     Applications
                  </h4>
                  <ul className={`space-y-2 text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    <li>• <strong>Recommandations d'amis :</strong> suggérer des amis d'amis</li>
                    <li>• <strong>Analyse d'influence :</strong> identifier les personnes centrales</li>
                    <li>• <strong>Détection de communautés :</strong> groupes d'intérêts communs</li>
                    <li>• <strong>Propagation d'information :</strong> viralité du contenu</li>
                  </ul>
                </div>

                <div className={`p-4 rounded-lg border-l-4 ${
                  isDark ? 'bg-indigo-950/20 border-indigo-400' : 'bg-teal-50 border-teal-500'
                }`}>
                  <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    <strong>Algorithmes utilisés :</strong> BFS (amis suggérés), centralité de degré, clustering
                  </p>
                </div>
              </div>

              <div className={`p-6 rounded-xl ${isDark ? 'bg-slate-950/50' : 'bg-linear-to-br from-teal-100 to-emerald-100'}`}>
                <svg className="w-full h-80" viewBox="0 0 240 200">
                  {/* Réseau social avec hub central */}
                  <circle cx="120" cy="100" r="18" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                  <text x="120" y="105" textAnchor="middle" className="text-sm font-bold fill-white">Alice</text>
                  
                  {/* Connexions niveau 1 */}
                  <line x1="120" y1="82" x2="80" y2="40" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                  <line x1="120" y1="82" x2="160" y2="40" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                  <line x1="102" y1="100" x2="40" y2="100" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                  <line x1="138" y1="100" x2="200" y2="100" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                  <line x1="120" y1="118" x2="80" y2="160" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                  <line x1="120" y1="118" x2="160" y2="160" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                  
                  {/* Connexions niveau 2 (amis d'amis) */}
                  <line x1="80" y1="40" x2="40" y2="20" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="1" opacity="0.4" strokeDasharray="3,3"/>
                  <line x1="160" y1="40" x2="200" y2="20" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="1" opacity="0.4" strokeDasharray="3,3"/>
                  <line x1="80" y1="160" x2="40" y2="180" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="1" opacity="0.4" strokeDasharray="3,3"/>
                  
                  {/* Niveau 1 - Amis directs */}
                  <circle cx="80" cy="40" r="12" fill={isDark ? '#6366f1' : '#5eead4'}/>
                  <circle cx="160" cy="40" r="12" fill={isDark ? '#6366f1' : '#5eead4'}/>
                  <circle cx="40" cy="100" r="12" fill={isDark ? '#6366f1' : '#5eead4'}/>
                  <circle cx="200" cy="100" r="12" fill={isDark ? '#6366f1' : '#5eead4'}/>
                  <circle cx="80" cy="160" r="12" fill={isDark ? '#6366f1' : '#5eead4'}/>
                  <circle cx="160" cy="160" r="12" fill={isDark ? '#6366f1' : '#5eead4'}/>
                  
                  {/* Niveau 2 - Amis d'amis */}
                  <circle cx="40" cy="20" r="8" fill={isDark ? '#a78bfa' : '#99f6e4'} opacity="0.6"/>
                  <circle cx="200" cy="20" r="8" fill={isDark ? '#a78bfa' : '#99f6e4'} opacity="0.6"/>
                  <circle cx="40" cy="180" r="8" fill={isDark ? '#a78bfa' : '#99f6e4'} opacity="0.6"/>
                  
                  <text x="120" y="195" textAnchor="middle" className={`text-xs ${isDark ? 'fill-indigo-300' : 'fill-teal-700'}`}>
                    Alice (degré = 6) • Suggestions d'amis en pointillés
                  </text>
                </svg>
              </div>
            </div>
          </div>

          {/* Navigation GPS */}
          <div className={`mb-8 p-8 rounded-2xl ${isDark ? 'bg-slate-900/40' : 'bg-linear-to-br from-emerald-50 to-teal-50'}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-3 rounded-xl ${isDark ? 'bg-purple-500/20' : 'bg-teal-100'}`}>
                <Navigation className={isDark ? 'text-purple-300' : 'text-teal-700'} size={28} />
              </div>
              <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                 Navigation GPS & Transports
              </h3>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className={`p-6 rounded-xl ${isDark ? 'bg-slate-950/50' : 'bg-linear-to-br from-emerald-100 to-teal-100'}`}>
                <svg className="w-full h-80" viewBox="0 0 240 200">
                  {/* Carte routière stylisée */}
                  <line x1="40" y1="40" x2="100" y2="40" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="3"/>
                  <line x1="100" y1="40" x2="160" y2="80" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="3"/>
                  <line x1="160" y1="80" x2="200" y2="120" stroke={isDark ? '#22c55e' : '#14b8a6'} strokeWidth="5"/>
                  <line x1="40" y1="40" x2="80" y2="100" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2" opacity="0.4"/>
                  <line x1="80" y1="100" x2="160" y2="80" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2" opacity="0.4"/>
                  <line x1="100" y1="40" x2="100" y2="120" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2" opacity="0.4"/>
                  
                  {/* Points d'intérêt */}
                  <circle cx="40" cy="40" r="15" fill={isDark ? '#22c55e' : '#14b8a6'}/>
                  <text x="40" y="45" textAnchor="middle" className="text-sm font-bold fill-white"></text>
                  <text x="40" y="30" textAnchor="middle" className={`text-xs ${isDark ? 'fill-green-400' : 'fill-teal-700'}`}>Départ</text>
                  
                  <circle cx="100" cy="40" r="12" fill={isDark ? '#6366f1' : '#5eead4'}/>
                  <circle cx="80" cy="100" r="10" fill={isDark ? '#6366f1' : '#5eead4'} opacity="0.5"/>
                  <circle cx="100" cy="120" r="10" fill={isDark ? '#6366f1' : '#5eead4'} opacity="0.5"/>
                  <circle cx="160" cy="80" r="12" fill={isDark ? '#6366f1' : '#5eead4'}/>
                  
                  <circle cx="200" cy="120" r="15" fill={isDark ? '#ef4444' : '#f97316'}/>
                  <text x="200" y="125" textAnchor="middle" className="text-sm font-bold fill-white"></text>
                  <text x="200" y="140" textAnchor="middle" className={`text-xs ${isDark ? 'fill-red-400' : 'fill-orange-600'}`}>Arrivée</text>
                  
                  {/* Distances */}
                  <rect x="60" y="30" width="30" height="16" rx="3" fill={isDark ? '#4f46e5' : '#14b8a6'}/>
                  <text x="75" y="41" textAnchor="middle" className="text-xs font-bold fill-white">3 km</text>
                  
                  <rect x="125" y="55" width="30" height="16" rx="3" fill={isDark ? '#4f46e5' : '#14b8a6'}/>
                  <text x="140" y="66" textAnchor="middle" className="text-xs font-bold fill-white">4 km</text>
                  
                  <rect x="175" y="95" width="30" height="16" rx="3" fill={isDark ? '#22c55e' : '#14b8a6'}/>
                  <text x="190" y="106" textAnchor="middle" className="text-xs font-bold fill-white">5 km</text>
                  
                  <text x="120" y="170" textAnchor="middle" className={`text-sm font-bold ${isDark ? 'fill-green-400' : 'fill-teal-700'}`}>
                    Plus court chemin : 12 km
                  </text>
                  <text x="120" y="185" textAnchor="middle" className={`text-xs ${isDark ? 'fill-indigo-300' : 'fill-teal-600'}`}>
                    Algorithme : Dijkstra
                  </text>
                </svg>
              </div>

              <div>
                <p className={`text-lg mb-4 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  Les intersections sont des <strong>sommets</strong>, les routes sont des <strong>arêtes pondérées</strong> par la distance ou le temps.
                </p>

                <div className={`p-5 rounded-xl mb-4 ${isDark ? 'bg-slate-950/50' : 'bg-white'}`}>
                  <h4 className={`font-semibold mb-3 ${isDark ? 'text-purple-300' : 'text-teal-700'}`}>
                     Applications
                  </h4>
                  <ul className={`space-y-2 text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    <li>• <strong>Itinéraires optimaux :</strong> plus court chemin A → B</li>
                    <li>• <strong>Évitement du trafic :</strong> ajustement des poids en temps réel</li>
                    <li>• <strong>Optimisation de livraison :</strong> problème du voyageur de commerce</li>
                    <li>• <strong>Transports publics :</strong> correspondances et horaires</li>
                  </ul>
                </div>

                <div className={`p-4 rounded-lg border-l-4 ${
                  isDark ? 'bg-purple-950/20 border-purple-400' : 'bg-teal-50 border-teal-500'
                }`}>
                  <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    <strong>Algorithmes utilisés :</strong> Dijkstra, A* (heuristique), Bellman-Ford
                  </p>
                </div>

                <div className={`mt-4 p-4 rounded-lg ${isDark ? 'bg-purple-950/20' : 'bg-yellow-50'}`}>
                  <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                     Google Maps traite des <strong>milliards de calculs</strong> de plus courts chemins chaque jour !
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Réseaux Informatiques */}
          <div className={`mb-8 p-8 rounded-2xl ${isDark ? 'bg-slate-900/40' : 'bg-linear-to-br from-teal-50 to-cyan-50'}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-3 rounded-xl ${isDark ? 'bg-indigo-500/20' : 'bg-teal-100'}`}>
                <Wifi className={isDark ? 'text-indigo-300' : 'text-teal-700'} size={28} />
              </div>
              <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                 Réseaux Informatiques
              </h3>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <p className={`text-lg mb-4 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  Les serveurs et routeurs sont des <strong>sommets</strong>, les connexions sont des <strong>arêtes</strong>.
                </p>

                <div className={`p-5 rounded-xl mb-4 ${isDark ? 'bg-slate-950/50' : 'bg-white'}`}>
                  <h4 className={`font-semibold mb-3 ${isDark ? 'text-indigo-300' : 'text-teal-700'}`}>
                     Applications
                  </h4>
                  <ul className={`space-y-2 text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    <li>• <strong>Routage de paquets :</strong> trouver le chemin optimal</li>
                    <li>• <strong>Topologie réseau :</strong> conception efficace</li>
                    <li>• <strong>Détection de pannes :</strong> identifier les points critiques</li>
                    <li>• <strong>Équilibrage de charge :</strong> répartition du trafic</li>
                  </ul>
                </div>

                <div className={`p-4 rounded-lg border-l-4 ${
                  isDark ? 'bg-indigo-950/20 border-indigo-400' : 'bg-teal-50 border-teal-500'
                }`}>
                  <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    <strong>Algorithmes utilisés :</strong> Dijkstra (OSPF), Bellman-Ford (RIP), arbres couvrants (STP)
                  </p>
                </div>
              </div>

              <div className={`p-6 rounded-xl ${isDark ? 'bg-slate-950/50' : 'bg-linear-to-br from-cyan-100 to-teal-100'}`}>
                <svg className="w-full h-80" viewBox="0 0 240 200">
                  {/* Topologie réseau */}
                  <circle cx="120" cy="40" r="15" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                  <text x="120" y="45" textAnchor="middle" className="text-sm font-bold fill-white">🖥️</text>
                  <text x="120" y="30" textAnchor="middle" className={`text-xs ${isDark ? 'fill-indigo-300' : 'fill-teal-700'}`}>Serveur</text>
                  
                  {/* Routeurs niveau 1 */}
                  <line x1="120" y1="55" x2="60" y2="100" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="3" className="pulse-network"/>
                  <line x1="120" y1="55" x2="180" y2="100" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="3" className="pulse-network"/>
                  
                  <circle cx="60" cy="100" r="12" fill={isDark ? '#6366f1' : '#5eead4'}/>
                  <text x="60" y="104" textAnchor="middle" className="text-xs font-bold fill-white">R1</text>
                  
                  <circle cx="180" cy="100" r="12" fill={isDark ? '#6366f1' : '#5eead4'}/>
                  <text x="180" y="104" textAnchor="middle" className="text-xs font-bold fill-white">R2</text>
                  
                  {/* Clients niveau 2 */}
                  <line x1="60" y1="112" x2="30" y2="150" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                  <line x1="60" y1="112" x2="90" y2="150" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                  <line x1="180" y1="112" x2="150" y2="150" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                  <line x1="180" y1="112" x2="210" y2="150" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                  
                  <rect x="20" y="150" width="20" height="20" rx="3" fill={isDark ? '#a78bfa' : '#99f6e4'}/>
                  <text x="30" y="163" textAnchor="middle" className="text-xs fill-white">💻</text>
                  
                  <rect x="80" y="150" width="20" height="20" rx="3" fill={isDark ? '#a78bfa' : '#99f6e4'}/>
                  <text x="90" y="163" textAnchor="middle" className="text-xs fill-white">💻</text>
                  
                  <rect x="140" y="150" width="20" height="20" rx="3" fill={isDark ? '#a78bfa' : '#99f6e4'}/>
                  <text x="150" y="163" textAnchor="middle" className="text-xs fill-white">📱</text>
                  
                  <rect x="200" y="150" width="20" height="20" rx="3" fill={isDark ? '#a78bfa' : '#99f6e4'}/>
                  <text x="210" y="163" textAnchor="middle" className="text-xs fill-white">📱</text>
                  
                  <text x="120" y="190" textAnchor="middle" className={`text-xs ${isDark ? 'fill-indigo-300' : 'fill-teal-700'}`}>
                    Topologie hiérarchique : Serveur → Routeurs → Clients
                  </text>
                </svg>
              </div>
            </div>
          </div>

          {/* Autres applications */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Bases de données */}
            <div className={`p-6 rounded-xl ${isDark ? 'bg-slate-900/40' : 'bg-linear-to-br from-teal-50 to-emerald-50'}`}>
              <div className="flex items-center gap-3 mb-4">
                <Database className={isDark ? 'text-indigo-300' : 'text-teal-700'} size={24} />
                <h4 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Bases de Données
                </h4>
              </div>
              <ul className={`space-y-2 text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                <li>• Requêtes relationnelles</li>
                <li>• Dépendances entre tables</li>
                <li>• Graphes de connaissances</li>
              </ul>
            </div>

            {/* Circuits électroniques */}
            <div className={`p-6 rounded-xl ${isDark ? 'bg-slate-900/40' : 'bg-linear-to-br from-emerald-50 to-teal-50'}`}>
              <div className="flex items-center gap-3 mb-4">
                <Cpu className={isDark ? 'text-purple-300' : 'text-teal-700'} size={24} />
                <h4 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Circuits Électroniques
                </h4>
              </div>
              <ul className={`space-y-2 text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                <li>• Conception de circuits (PCB)</li>
                <li>• Planarité pour éviter croisements</li>
                <li>• Optimisation énergétique</li>
              </ul>
            </div>

            {/* Intelligence Artificielle */}
            <div className={`p-6 rounded-xl ${isDark ? 'bg-slate-900/40' : 'bg-linear-to-br from-teal-50 to-cyan-50'}`}>
              <div className="flex items-center gap-3 mb-4">
                <Smartphone className={isDark ? 'text-indigo-300' : 'text-teal-700'} size={24} />
                <h4 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Intelligence Artificielle
                </h4>
              </div>
              <ul className={`space-y-2 text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                <li>• Réseaux de neurones</li>
                <li>• Graphes de calcul (TensorFlow)</li>
                <li>• Raisonnement sur graphes</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Démonstrations de Calculs Concrets */}
        <div className={`max-w-6xl mx-auto mb-12 p-8 rounded-2xl border ${
          isDark 
            ? 'bg-linear-to-br from-indigo-950/40 to-purple-950/40 border-indigo-500/20' 
            : 'bg-white border-teal-200/40 shadow-lg'
        }`}>
          <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
             Démonstrations de Calculs Concrets
          </h2>

          <p className={`text-lg mb-8 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
            Voyons comment effectuer les calculs essentiels étape par étape avec des exemples visuels.
          </p>

          {/* Calcul 1 : Degré */}
          <div className={`mb-8 p-6 rounded-xl ${isDark ? 'bg-slate-900/40' : 'bg-linear-to-br from-teal-50 to-emerald-50'}`}>
            <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-indigo-300' : 'text-teal-700'}`}>
               Calcul 1 : Degré d'un Sommet
            </h3>
            <div className="grid lg:grid-cols-2 gap-6">
              <div className={`p-6 rounded-xl ${isDark ? 'bg-slate-950/50' : 'bg-white'}`}>
                <svg className="w-full h-56" viewBox="0 0 200 160">
                  <line x1="100" y1="80" x2="60" y2="40" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="3"/>
                  <line x1="100" y1="80" x2="140" y2="40" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="3"/>
                  <line x1="100" y1="80" x2="60" y2="120" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="3"/>
                  <line x1="100" y1="80" x2="140" y2="120" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="3"/>
                  <line x1="100" y1="80" x2="100" y2="30" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="3"/>
                  
                  <circle cx="60" cy="40" r="10" fill={isDark ? '#6366f1' : '#14b8a6'} opacity="0.6"/>
                  <circle cx="140" cy="40" r="10" fill={isDark ? '#6366f1' : '#14b8a6'} opacity="0.6"/>
                  <circle cx="60" cy="120" r="10" fill={isDark ? '#6366f1' : '#14b8a6'} opacity="0.6"/>
                  <circle cx="140" cy="120" r="10" fill={isDark ? '#6366f1' : '#14b8a6'} opacity="0.6"/>
                  <circle cx="100" cy="30" r="10" fill={isDark ? '#6366f1' : '#14b8a6'} opacity="0.6"/>
                  
                  <circle cx="100" cy="80" r="18" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                  <text x="100" y="85" textAnchor="middle" className="text-sm font-bold fill-white">A</text>
                  
                  <text x="80" y="55" className={`text-xs font-bold ${isDark ? 'fill-yellow-400' : 'fill-orange-600'}`}>①</text>
                  <text x="120" y="55" className={`text-xs font-bold ${isDark ? 'fill-yellow-400' : 'fill-orange-600'}`}>②</text>
                  <text x="80" y="105" className={`text-xs font-bold ${isDark ? 'fill-yellow-400' : 'fill-orange-600'}`}>③</text>
                  <text x="120" y="105" className={`text-xs font-bold ${isDark ? 'fill-yellow-400' : 'fill-orange-600'}`}>④</text>
                  <text x="105" y="55" className={`text-xs font-bold ${isDark ? 'fill-yellow-400' : 'fill-orange-600'}`}>⑤</text>
                </svg>
              </div>

              <div>
                <div className={`p-5 rounded-xl mb-4 ${isDark ? 'bg-slate-950/50' : 'bg-white'}`}>
                  <h4 className={`font-semibold mb-3 ${isDark ? 'text-indigo-300' : 'text-teal-700'}`}>📝 Calcul étape par étape :</h4>
                  <div className={`space-y-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    <p><strong>Étape 1 :</strong> Compter arêtes connectées à A</p>
                    <ul className="ml-4 space-y-1 text-sm">
                      <li>• A → B, C, D, E, F</li>
                    </ul>
                    <p className="pt-3"><strong>Étape 2 :</strong> Total = 5</p>
                  </div>
                </div>

                <div className={`p-4 rounded-lg border-l-4 ${isDark ? 'bg-green-950/20 border-green-500' : 'bg-green-50 border-green-500'}`}>
                  <p className={`font-bold text-lg ${isDark ? 'text-green-400' : 'text-green-700'}`}>✅ deg(A) = 5</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Exercices d'Application */}
        <div className={`max-w-6xl mx-auto mb-12 p-8 rounded-2xl border ${
          isDark 
            ? 'bg-linear-to-br from-purple-950/40 to-indigo-950/40 border-purple-500/20' 
            : 'bg-white border-teal-200/40 shadow-lg'
        }`}>

          <div className="flex items-center gap-3 mb-6">
            <div className={`p-3 rounded-xl ${isDark ? 'bg-purple-500/20' : 'bg-teal-100'}`}>
              <CheckCircle className={isDark ? 'text-purple-300' : 'text-teal-700'} size={28} />
            </div>
            <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
               Exercices d'Application
            </h2>
          </div>

          <div className={`p-5 rounded-xl mb-8 border-l-4 ${
            isDark ? 'bg-purple-950/30 border-purple-400' : 'bg-teal-50 border-teal-500'
          }`}>
            <p className={`text-lg ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              Série d'exercices courts couvrant toute la matière avec <strong>corrections détaillées</strong> 
              pour évaluer la compréhension globale du groupe de 17 personnes.
            </p>
          </div>

          <div className="space-y-4">
            {exercises.map((exercise) => (
              <div
                key={exercise.id}
                className={`rounded-xl border transition-all duration-300 ${
                  isDark 
                    ? 'bg-slate-900/40 border-indigo-500/20 hover:border-indigo-400/40' 
                    : 'bg-linear-to-r from-teal-50 to-emerald-50 border-teal-200 hover:border-teal-400'
                }`}
              >
                <button
                  onClick={() => setSelectedExercise(selectedExercise === exercise.id ? null : exercise.id)}
                  className="w-full p-6 text-left"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                        isDark ? 'bg-indigo-500 text-white' : 'bg-teal-600 text-white'
                      }`}>
                        {exercise.id}
                      </div>
                      <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {exercise.title}
                      </h3>
                    </div>
                    <div className={`transform transition-transform ${
                      selectedExercise === exercise.id ? 'rotate-180' : ''
                    }`}>
                      <svg className={`w-6 h-6 ${isDark ? 'text-indigo-300' : 'text-teal-700'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </button>

                {selectedExercise === exercise.id && (
                  <div className={`px-6 pb-6 space-y-4 border-t ${
                    isDark ? 'border-indigo-500/20' : 'border-teal-200'
                  }`}>
                    <div className={`mt-4 p-4 rounded-lg ${isDark ? 'bg-slate-950/50' : 'bg-white'}`}>
                      <p className={`font-semibold mb-2 ${isDark ? 'text-indigo-300' : 'text-teal-700'}`}>
                        📋 Énoncé :
                      </p>
                      <p className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                        {exercise.enonce}
                      </p>
                    </div>

                    <div className={`p-4 rounded-lg border-l-4 ${
                      isDark ? 'bg-green-950/20 border-green-500' : 'bg-green-50 border-green-500'
                    }`}>
                      <p className={`font-semibold mb-2 ${isDark ? 'text-green-400' : 'text-green-700'}`}>
                         Correction :
                      </p>
                      <p className={`font-mono text-sm ${isDark ? 'text-green-300' : 'text-green-800'}`}>
                        {exercise.correction}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Récapitulatif */}
          <div className={`mt-8 p-6 rounded-xl ${isDark ? 'bg-slate-900/40' : 'bg-linear-to-r from-teal-50 to-emerald-50'}`}>
            <h4 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
               Récapitulatif
            </h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className={`p-4 rounded-lg text-center ${isDark ? 'bg-slate-950/50' : 'bg-white'}`}>
                <div className={`text-3xl font-bold mb-2 ${isDark ? 'text-indigo-400' : 'text-teal-700'}`}>
                  10
                </div>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Exercices
                </p>
              </div>
              <div className={`p-4 rounded-lg text-center ${isDark ? 'bg-slate-950/50' : 'bg-white'}`}>
                <div className={`text-3xl font-bold mb-2 ${isDark ? 'text-indigo-400' : 'text-teal-700'}`}>
                  5
                </div>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Parties du programme
                </p>
              </div>
              <div className={`p-4 rounded-lg text-center ${isDark ? 'bg-slate-950/50' : 'bg-white'}`}>
                <div className={`text-3xl font-bold mb-2 ${isDark ? 'text-indigo-400' : 'text-teal-700'}`}>
                  17
                </div>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Membres du groupe
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className={`max-w-6xl mx-auto p-8 rounded-2xl border ${
          isDark 
            ? 'bg-linear-to-br from-indigo-950/40 to-purple-950/40 border-indigo-500/20' 
            : 'bg-linear-to-r from-teal-100 to-emerald-100 border-teal-300 shadow-lg'
        }`}>
          <h2 className={`text-3xl font-bold mb-4 text-center ${isDark ? 'text-white' : 'text-slate-900'}`}>
             Conclusion
          </h2>
          <p className={`text-lg text-center mb-6 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
            La théorie des graphes est un outil puissant et universel qui modélise notre monde connecté. 
            Des réseaux sociaux aux circuits électroniques, des GPS aux algorithmes d'IA, les graphes sont partout !
          </p>
          
          <div className="flex justify-center gap-4">
            <div className={`px-6 py-3 rounded-lg ${isDark ? 'bg-indigo-500/20' : 'bg-teal-600 text-white'}`}>
              <p className={`font-semibold ${isDark ? 'text-indigo-300' : 'text-white'}`}>
                 Objectif atteint : Exposé complet et structuré
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
