
import {  Zap, Route, Search, TrendingUp } from 'lucide-react';
import { useTheme} from '../Context/ThemeContext';

export default function Algorithmique() {
  const {isDark}= useTheme()

  return (
    <div className={`min-h-screen transition-colors duration-700 ${
      isDark 
        ? 'bg-linear-to-br from-slate-950 via-slate-900 to-indigo-950' 
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
        
        @keyframes bfs-wave {
          0% { opacity: 0.3; r: 8; }
          50% { opacity: 0.6; r: 12; }
          100% { opacity: 1; r: 15; }
        }
        
        @keyframes path-trace {
          from { stroke-dashoffset: 1000; }
          to { stroke-dashoffset: 0; }
        }
      `}</style>

      <div className="relative container mx-auto px-6 py-8">
      

        <div className="max-w-6xl mx-auto mt-12">
        
          <h1 className={`text-2xl md:text-3xl xl:text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Algorithmique
          </h1>
          <p className={`text-xl ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
            Algorithmes fondamentaux de parcours et d'optimisation sur les graphes
          </p>
        </div>

        {/* 13. BFS - Parcours en Largeur */}
        <div className={`max-w-6xl mx-auto mb-12 p-8 rounded-2xl border ${
          isDark 
            ? 'bg-linear-to-br from-indigo-950/40 to-purple-950/40 border-indigo-500/20' 
            : 'bg-white border-teal-200/40 shadow-lg'
        }`}>
          <div className="flex items-center gap-3 mb-6">
            <div className={`p-3 rounded-xl ${isDark ? 'bg-indigo-500/20' : 'bg-teal-100'}`}>
              <Zap className={isDark ? 'text-indigo-300' : 'text-teal-700'} size={24} />
            </div>
            <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              13. Parcours en Largeur (BFS)
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-6">
            {/* Concept */}
            <div>
              <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-indigo-300' : 'text-teal-700'}`}>
                 Concept
              </h3>
              <p className={`text-lg mb-4 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                <strong>Breadth-First Search</strong> explore le graphe par <strong>couches successives</strong>, 
                en visitant d'abord tous les voisins proches avant de passer aux suivants.
              </p>

              <div className={`p-5 rounded-xl mb-4 ${isDark ? 'bg-slate-900/40' : 'bg-teal-50'}`}>
                <h4 className={`font-semibold mb-3 ${isDark ? 'text-indigo-300' : 'text-teal-700'}`}>
                  ✓ Caractéristiques
                </h4>
                <ul className={`space-y-2 text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  <li>• Utilise une <strong>file (queue)</strong></li>
                  <li>• Exploration niveau par niveau</li>
                  <li>• Trouve le plus court chemin (non pondéré)</li>
                  <li>• Complexité : <span className="font-mono">O(V + E)</span></li>
                </ul>
              </div>

              <div className={`p-4 rounded-lg border-l-4 ${
                isDark ? 'bg-indigo-950/20 border-indigo-400' : 'bg-teal-50 border-teal-500'
              }`}>
                <p className={`font-semibold mb-2 ${isDark ? 'text-indigo-300' : 'text-teal-700'}`}>
                   Cas d'usage
                </p>
                <ul className={`text-sm space-y-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  <li>• Calcul des distances minimales</li>
                  <li>• Identification des composantes connexes</li>
                  <li>• Résolution de labyrinthes</li>
                </ul>
              </div>
            </div>

            {/* Visualisation BFS */}
            <div className={`p-6 rounded-xl ${isDark ? 'bg-slate-900/40' : 'bg-linear-to-br from-teal-50 to-emerald-50'}`}>
              <h4 className={`text-lg font-semibold mb-4 text-center ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Exploration par Niveaux
              </h4>
              <svg className="w-full h-80" viewBox="0 0 240 220">
                {/* Niveau 0 - Source */}
                <circle cx="120" cy="30" r="15" fill={isDark ? '#22c55e' : '#14b8a6'}/>
                <text x="120" y="35" textAnchor="middle" className="text-sm font-bold fill-white">S</text>
                <text x="120" y="60" textAnchor="middle" className={`text-xs ${isDark ? 'fill-green-400' : 'fill-teal-700'}`}>Niveau 0</text>
                
                {/* Niveau 1 */}
                <line x1="120" y1="45" x2="60" y2="95" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                <line x1="120" y1="45" x2="180" y2="95" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                
                <circle cx="60" cy="100" r="12" fill={isDark ? '#6366f1' : '#5eead4'}/>
                <text x="60" y="105" textAnchor="middle" className="text-xs font-bold fill-white">A</text>
                
                <circle cx="180" cy="100" r="12" fill={isDark ? '#6366f1' : '#5eead4'}/>
                <text x="180" y="105" textAnchor="middle" className="text-xs font-bold fill-white">B</text>
                
                <text x="120" y="125" textAnchor="middle" className={`text-xs ${isDark ? 'fill-indigo-300' : 'fill-teal-700'}`}>Niveau 1</text>
                
                {/* Niveau 2 */}
                <line x1="60" y1="112" x2="30" y2="155" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                <line x1="60" y1="112" x2="90" y2="155" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                <line x1="180" y1="112" x2="150" y2="155" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                <line x1="180" y1="112" x2="210" y2="155" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                
                <circle cx="30" cy="160" r="10" fill={isDark ? '#a78bfa' : '#99f6e4'}/>
                <text x="30" y="164" textAnchor="middle" className="text-xs font-bold fill-white">C</text>
                
                <circle cx="90" cy="160" r="10" fill={isDark ? '#a78bfa' : '#99f6e4'}/>
                <text x="90" y="164" textAnchor="middle" className="text-xs font-bold fill-white">D</text>
                
                <circle cx="150" cy="160" r="10" fill={isDark ? '#a78bfa' : '#99f6e4'}/>
                <text x="150" y="164" textAnchor="middle" className="text-xs font-bold fill-white">E</text>
                
                <circle cx="210" cy="160" r="10" fill={isDark ? '#a78bfa' : '#99f6e4'}/>
                <text x="210" y="164" textAnchor="middle" className="text-xs font-bold fill-white">F</text>
                
                <text x="120" y="185" textAnchor="middle" className={`text-xs ${isDark ? 'fill-indigo-300' : 'fill-teal-700'}`}>Niveau 2</text>
                
                {/* Légende */}
                <rect x="40" y="195" width="160" height="20" rx="5" fill={isDark ? '#4f46e5' : '#14b8a6'}/>
                <text x="120" y="209" textAnchor="middle" className="text-xs font-bold fill-white">
                  Ordre : S → A,B → C,D,E,F
                </text>
              </svg>
            </div>
          </div>

          {/* Pseudo-code */}
          <div className={`p-6 rounded-xl ${isDark ? 'bg-slate-900/40' : 'bg-linear-to-r from-teal-50 to-emerald-50'}`}>
            <h4 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
               Pseudo-code
            </h4>
            <div className={`p-5 rounded-lg font-mono text-sm ${isDark ? 'bg-slate-950/50 text-green-400' : 'bg-white text-teal-900 border border-teal-200'}`}>
              <pre className="overflow-x-auto">
{`BFS(graphe, source):
    créer une file vide
    marquer source comme visité
    enfiler source
    
    tant que file non vide:
        sommet = défiler()
        
        pour chaque voisin de sommet:
            si voisin non visité:
                marquer voisin comme visité
                enfiler voisin
                distance[voisin] = distance[sommet] + 1`}
              </pre>
            </div>
          </div>
        </div>

        {/* 14. DFS - Parcours en Profondeur */}
        <div className={`max-w-6xl mx-auto mb-12 p-8 rounded-2xl border ${
          isDark 
            ? 'bg-linear-to-br from-purple-950/40 to-indigo-950/40 border-purple-500/20' 
            : 'bg-white border-teal-200/40 shadow-lg'
        }`}>
          <div className="flex items-center gap-3 mb-6">
            <div className={`p-3 rounded-xl ${isDark ? 'bg-purple-500/20' : 'bg-teal-100'}`}>
              <Search className={isDark ? 'text-purple-300' : 'text-teal-700'} size={24} />
            </div>
            <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              14. Parcours en Profondeur (DFS)
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-6">
            {/* Visualisation DFS */}
            <div className={`p-6 rounded-xl ${isDark ? 'bg-slate-900/40' : 'bg-linear-to-br from-teal-50 to-emerald-50'}`}>
              <h4 className={`text-lg font-semibold mb-4 text-center ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Exploration en Profondeur
              </h4>
              <svg className="w-full h-80" viewBox="0 0 220 240">
                {/* Arbre DFS */}
                <line x1="110" y1="30" x2="70" y2="80" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="3"/>
                <line x1="70" y1="80" x2="50" y2="130" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="3"/>
                <line x1="50" y1="130" x2="40" y2="180" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="3"/>
                <line x1="110" y1="30" x2="150" y2="80" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2" opacity="0.4"/>
                <line x1="70" y1="80" x2="90" y2="130" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2" opacity="0.4"/>
                
                {/* Sommets avec ordre de visite */}
                <circle cx="110" cy="30" r="15" fill={isDark ? '#22c55e' : '#14b8a6'}/>
                <text x="110" y="35" textAnchor="middle" className="text-sm font-bold fill-white">A</text>
                <text x="135" y="35" textAnchor="start" className={`text-xs font-bold ${isDark ? 'fill-green-400' : 'fill-teal-700'}`}>①</text>
                
                <circle cx="70" cy="80" r="12" fill={isDark ? '#6366f1' : '#5eead4'}/>
                <text x="70" y="85" textAnchor="middle" className="text-xs font-bold fill-white">B</text>
                <text x="90" y="85" textAnchor="start" className={`text-xs font-bold ${isDark ? 'fill-indigo-300' : 'fill-teal-700'}`}>②</text>
                
                <circle cx="50" cy="130" r="12" fill={isDark ? '#a78bfa' : '#99f6e4'}/>
                <text x="50" y="135" textAnchor="middle" className="text-xs font-bold fill-white">C</text>
                <text x="68" y="135" textAnchor="start" className={`text-xs font-bold ${isDark ? 'fill-purple-300' : 'fill-teal-700'}`}>③</text>
                
                <circle cx="40" cy="180" r="10" fill={isDark ? '#c4b5fd' : '#ccfbf1'}/>
                <text x="40" y="184" textAnchor="middle" className="text-xs font-bold fill-slate-900">D</text>
                <text x="55" y="184" textAnchor="start" className={`text-xs font-bold ${isDark ? 'fill-purple-300' : 'fill-teal-700'}`}>④</text>
                
                <circle cx="90" cy="130" r="10" fill={isDark ? '#6366f1' : '#5eead4'} opacity="0.4"/>
                <text x="90" y="134" textAnchor="middle" className="text-xs font-bold fill-white">E</text>
                
                <circle cx="150" cy="80" r="10" fill={isDark ? '#6366f1' : '#5eead4'} opacity="0.4"/>
                <text x="150" y="84" textAnchor="middle" className="text-xs font-bold fill-white">F</text>
                
                {/* Flèches indiquant le retour */}
                <path d="M 45 175 Q 55 155 55 135" fill="none" stroke={isDark ? '#f87171' : '#fb923c'} strokeWidth="2" strokeDasharray="3,3" markerEnd="url(#arrow)"/>
                <path d="M 55 125 Q 65 105 65 85" fill="none" stroke={isDark ? '#f87171' : '#fb923c'} strokeWidth="2" strokeDasharray="3,3"/>
                
                <text x="110" y="210" textAnchor="middle" className={`text-xs ${isDark ? 'fill-purple-300' : 'fill-teal-700'}`}>
                  Descend au maximum
                </text>
                <text x="110" y="225" textAnchor="middle" className={`text-xs ${isDark ? 'fill-red-400' : 'fill-orange-600'}`}>
                  puis remonte (backtrack)
                </text>
              </svg>
            </div>

            {/* Concept */}
            <div>
              <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-purple-300' : 'text-teal-700'}`}>
                 Concept
              </h3>
              <p className={`text-lg mb-4 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                <strong>Depth-First Search</strong> explore en profondeur : on suit un chemin jusqu'au bout 
                avant de revenir en arrière (<strong>backtracking</strong>).
              </p>

              <div className={`p-5 rounded-xl mb-4 ${isDark ? 'bg-slate-900/40' : 'bg-teal-50'}`}>
                <h4 className={`font-semibold mb-3 ${isDark ? 'text-purple-300' : 'text-teal-700'}`}>
                  ✓ Caractéristiques
                </h4>
                <ul className={`space-y-2 text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  <li>• Utilise une <strong>pile (stack)</strong> ou récursion</li>
                  <li>• Explore un chemin jusqu'au bout</li>
                  <li>• Retour en arrière (backtracking)</li>
                  <li>• Complexité : <span className="font-mono">O(V + E)</span></li>
                </ul>
              </div>

              <div className={`p-4 rounded-lg border-l-4 ${
                isDark ? 'bg-purple-950/20 border-purple-400' : 'bg-teal-50 border-teal-500'
              }`}>
                <p className={`font-semibold mb-2 ${isDark ? 'text-purple-300' : 'text-teal-700'}`}>
                   Cas d'usage
                </p>
                <ul className={`text-sm space-y-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  <li>• Détection de cycles</li>
                  <li>• Ordonnancement topologique (DAG)</li>
                  <li>• Résolution de puzzles</li>
                  <li>• Parcours d'arbres</li>
                </ul>
              </div>

              <div className={`mt-4 p-4 rounded-lg ${isDark ? 'bg-purple-950/20' : 'bg-yellow-50'}`}>
                <p className={`text-sm font-semibold ${isDark ? 'text-purple-300' : 'text-orange-700'}`}>
                   Astuce : DFS utilise moins de mémoire que BFS pour les graphes profonds
                </p>
              </div>
            </div>
          </div>

          {/* Pseudo-code */}
          <div className={`p-6 rounded-xl ${isDark ? 'bg-slate-900/40' : 'bg-linear-to-r from-teal-50 to-emerald-50'}`}>
            <h4 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
               Pseudo-code (Récursif)
            </h4>
            <div className={`p-5 rounded-lg font-mono text-sm ${isDark ? 'bg-slate-950/50 text-green-400' : 'bg-white text-teal-900 border border-teal-200'}`}>
              <pre className="overflow-x-auto">
{`DFS(graphe, sommet):
    marquer sommet comme visité
    traiter sommet
    
    pour chaque voisin de sommet:
        si voisin non visité:
            DFS(graphe, voisin)
    
// Version itérative avec pile
DFS_iteratif(graphe, source):
    créer une pile vide
    empiler source
    
    tant que pile non vide:
        sommet = dépiler()
        si sommet non visité:
            marquer sommet comme visité
            pour chaque voisin de sommet:
                empiler voisin`}
              </pre>
            </div>
          </div>
        </div>

        {/* Comparaison BFS vs DFS */}
        <div className={`max-w-6xl mx-auto mb-12 p-8 rounded-2xl border ${
          isDark 
            ? 'bg-linear-to-br from-indigo-950/40 to-purple-950/40 border-indigo-500/20' 
            : 'bg-white border-teal-200/40 shadow-lg'
        }`}>
          <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
             Comparaison BFS vs DFS
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className={isDark ? 'border-b-2 border-indigo-500/30' : 'border-b-2 border-teal-300'}>
                  <th className={`p-4 text-left ${isDark ? 'text-indigo-300' : 'text-teal-700'}`}>Critère</th>
                  <th className={`p-4 text-left ${isDark ? 'text-indigo-300' : 'text-teal-700'}`}>BFS</th>
                  <th className={`p-4 text-left ${isDark ? 'text-purple-300' : 'text-teal-700'}`}>DFS</th>
                </tr>
              </thead>
              <tbody className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                <tr className={isDark ? 'border-b border-slate-700' : 'border-b border-teal-100'}>
                  <td className="p-4 font-semibold">Structure de données</td>
                  <td className="p-4">File (Queue)</td>
                  <td className="p-4">Pile (Stack) / Récursion</td>
                </tr>
                <tr className={isDark ? 'border-b border-slate-700' : 'border-b border-teal-100'}>
                  <td className="p-4 font-semibold">Stratégie</td>
                  <td className="p-4">Largeur d'abord (niveau par niveau)</td>
                  <td className="p-4">Profondeur d'abord (jusqu'au bout)</td>
                </tr>
                <tr className={isDark ? 'border-b border-slate-700' : 'border-b border-teal-100'}>
                  <td className="p-4 font-semibold">Plus court chemin</td>
                  <td className="p-4">✅ Oui (non pondéré)</td>
                  <td className="p-4">❌ Non</td>
                </tr>
                <tr className={isDark ? 'border-b border-slate-700' : 'border-b border-teal-100'}>
                  <td className="p-4 font-semibold">Mémoire</td>
                  <td className="p-4">O(largeur max)</td>
                  <td className="p-4">O(profondeur max)</td>
                </tr>
                <tr className={isDark ? 'border-b border-slate-700' : 'border-b border-teal-100'}>
                  <td className="p-4 font-semibold">Complexité</td>
                  <td className="p-4">O(V + E)</td>
                  <td className="p-4">O(V + E)</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Meilleur pour</td>
                  <td className="p-4">Distance minimale, graphes larges</td>
                  <td className="p-4">Détection de cycles, graphes profonds</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 15. Dijkstra & Bellman-Ford */}
        <div className={`max-w-6xl mx-auto mb-12 p-8 rounded-2xl border ${
          isDark 
            ? 'bg-linear-to-br from-purple-950/40 to-indigo-950/40 border-purple-500/20' 
            : 'bg-white border-teal-200/40 shadow-lg'
        }`}>
          <div className="flex items-center gap-3 mb-6">
            <div className={`p-3 rounded-xl ${isDark ? 'bg-purple-500/20' : 'bg-teal-100'}`}>
              <Route className={isDark ? 'text-purple-300' : 'text-teal-700'} size={24} />
            </div>
            <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              15. Dijkstra & Bellman-Ford
            </h2>
          </div>

          {/* Dijkstra */}
          <div className="mb-10">
            <div className={`p-6 rounded-xl border-l-4 mb-6 ${
              isDark ? 'bg-purple-950/30 border-purple-400' : 'bg-teal-50 border-teal-500'
            }`}>
              <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-purple-300' : 'text-teal-700'}`}>
                 Algorithme de Dijkstra
              </h3>
              <p className={`text-lg ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                Algorithme <strong>glouton (greedy)</strong> qui trouve le plus court chemin depuis une source 
                vers tous les autres sommets dans un graphe à <strong>poids positifs</strong>.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-6">
              <div>
                <div className={`p-5 rounded-xl mb-4 ${isDark ? 'bg-slate-900/40' : 'bg-teal-50'}`}>
                  <h4 className={`font-semibold mb-3 ${isDark ? 'text-purple-300' : 'text-teal-700'}`}>
                     Principe
                  </h4>
                  <ol className={`space-y-2 text-sm list-decimal list-inside ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    <li>Sélectionner le sommet non traité avec la plus petite distance</li>
                    <li>Mettre à jour (relaxer) les distances de ses voisins</li>
                    <li>Répéter jusqu'à ce que tous les sommets soient traités</li>
                  </ol>
                </div>

                <div className={`p-5 rounded-xl mb-4 ${isDark ? 'bg-slate-900/40' : 'bg-teal-50'}`}>
                  <h4 className={`font-semibold mb-3 ${isDark ? 'text-purple-300' : 'text-teal-700'}`}>
                    ✓ Caractéristiques
                  </h4>
                  <ul className={`space-y-2 text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    <li>• File de priorité (tas binaire)</li>
                    <li>• <strong>Complexité :</strong> <span className="font-mono">O(E log V)</span></li>
                    <li>•  <strong>Condition :</strong> poids ≥ 0</li>
                  </ul>
                </div>

                <div className={`p-4 rounded-lg border-l-4 ${
                  isDark ? 'bg-purple-950/20 border-purple-400' : 'bg-yellow-50 border-yellow-500'
                }`}>
                  <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                     <strong>Application :</strong> GPS, systèmes de navigation, réseaux routiers
                  </p>
                </div>
              </div>

              {/* Visualisation Dijkstra */}
              <div className={`p-6 rounded-xl ${isDark ? 'bg-slate-900/40' : 'bg-linear-to-br from-teal-50 to-emerald-50'}`}>
                <h4 className={`text-lg font-semibold mb-4 text-center ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Exemple : Plus Court Chemin
                </h4>
                <svg className="w-full h-64" viewBox="0 0 240 180">
                  {/* Graphe pondéré */}
                  <line x1="40" y1="90" x2="100" y2="60" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="3"/>
                  <line x1="100" y1="60" x2="160" y2="90" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="4" opacity="0.8"/>
                  <line x1="160" y1="90" x2="200" y2="120" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="4" opacity="0.8"/>
                  <line x1="40" y1="90" x2="100" y2="120" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2" opacity="0.3"/>
                  <line x1="100" y1="120" x2="160" y2="90" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2" opacity="0.3"/>
                  
                  {/* Sommets */}
                  <circle cx="40" cy="90" r="15" fill={isDark ? '#22c55e' : '#14b8a6'}/>
                  <text x="40" y="95" textAnchor="middle" className="text-sm font-bold fill-white">A</text>
                  <text x="40" y="75" textAnchor="middle" className={`text-xs font-bold ${isDark ? 'fill-green-400' : 'fill-teal-700'}`}>0</text>
                  
                  <circle cx="100" cy="60" r="12" fill={isDark ? '#6366f1' : '#5eead4'}/>
                  <text x="100" y="64" textAnchor="middle" className="text-xs font-bold fill-white">B</text>
                  <text x="100" y="45" textAnchor="middle" className={`text-xs font-bold ${isDark ? 'fill-indigo-300' : 'fill-teal-700'}`}>4</text>
                  
                  <circle cx="160" cy="90" r="12" fill={isDark ? '#a78bfa' : '#99f6e4'}/>
                  <text x="160" y="94" textAnchor="middle" className="text-xs font-bold fill-white">C</text>
                  <text x="160" y="75" textAnchor="middle" className={`text-xs font-bold ${isDark ? 'fill-purple-300' : 'fill-teal-700'}`}>7</text>
                  
                  <circle cx="200" cy="120" r="12" fill={isDark ? '#ef4444' : '#f97316'}/>
                  <text x="200" y="124" textAnchor="middle" className="text-xs font-bold fill-white">D</text>
                  <text x="200" y="140" textAnchor="middle" className={`text-xs font-bold ${isDark ? 'fill-red-400' : 'fill-orange-600'}`}>12</text>
                  
                  <circle cx="100" cy="120" r="10" fill={isDark ? '#6366f1' : '#5eead4'} opacity="0.4"/>
                  <text x="100" y="124" textAnchor="middle" className="text-xs font-bold fill-white">E</text>
                  
                  {/* Poids */}
                  <rect x="60" y="68" width="20" height="16" rx="3" fill={isDark ? '#4f46e5' : '#14b8a6'}/>
                  <text x="70" y="79" textAnchor="middle" className="text-xs font-bold fill-white">4</text>
                  
                  <rect x="125" y="68" width="20" height="16" rx="3" fill={isDark ? '#4f46e5' : '#14b8a6'}/>
                  <text x="135" y="79" textAnchor="middle" className="text-xs font-bold fill-white">3</text>
                  
                  <rect x="175" y="100" width="20" height="16" rx="3" fill={isDark ? '#4f46e5' : '#14b8a6'}/>
                  <text x="185" y="111" textAnchor="middle" className="text-xs font-bold fill-white">5</text>
                  
                  <text x="120" y="165" textAnchor="middle" className={`text-sm font-bold ${isDark ? 'fill-green-400' : 'fill-teal-700'}`}>
                    Chemin optimal : A → B → C → D (coût = 12)
                  </text>
                </svg>
              </div>
            </div>

            {/* Pseudo-code Dijkstra */}
            <div className={`p-6 rounded-xl ${isDark ? 'bg-slate-900/40' : 'bg-linear-to-r from-teal-50 to-emerald-50'}`}>
              <h4 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                 Pseudo-code
              </h4>
              <div className={`p-5 rounded-lg font-mono text-sm ${isDark ? 'bg-slate-950/50 text-green-400' : 'bg-white text-teal-900 border border-teal-200'}`}>
                <pre className="overflow-x-auto">
{`Dijkstra(graphe, source):
    pour chaque sommet v:
        distance[v] = ∞
        précédent[v] = null
    
    distance[source] = 0
    créer une file de priorité Q avec tous les sommets
    
    tant que Q non vide:
        u = extraire min de Q (sommet avec plus petite distance)
        
        pour chaque voisin v de u:
            alt = distance[u] + poids(u, v)
            si alt < distance[v]:
                distance[v] = alt
                précédent[v] = u`}
                </pre>
              </div>
            </div>
          </div>

          {/* Bellman-Ford */}
          <div>
            <div className={`p-6 rounded-xl border-l-4 mb-6 ${
              isDark ? 'bg-indigo-950/30 border-indigo-400' : 'bg-teal-50 border-teal-500'
            }`}>
              <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-indigo-300' : 'text-teal-700'}`}>
                 Algorithme de Bellman-Ford
              </h3>
              <p className={`text-lg ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                Plus général que Dijkstra, il peut gérer des <strong>poids négatifs</strong> et 
                détecter les <strong>cycles négatifs</strong>.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-6">
              {/* Visualisation Bellman-Ford */}
              <div className={`p-6 rounded-xl ${isDark ? 'bg-slate-900/40' : 'bg-linear-to-br from-teal-50 to-emerald-50'}`}>
                <h4 className={`text-lg font-semibold mb-4 text-center ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Exemple : Poids Négatifs
                </h4>
                <svg className="w-full h-64" viewBox="0 0 220 180">
                  {/* Graphe avec poids négatif */}
                  <line x1="40" y1="90" x2="110" y2="90" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="3"/>
                  <line x1="110" y1="90" x2="180" y2="90" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="3"/>
                  <path d="M 180 85 Q 110 50 40 85" fill="none" stroke={isDark ? '#f87171' : '#fb923c'} strokeWidth="3"/>
                  
                  {/* Sommets */}
                  <circle cx="40" cy="90" r="15" fill={isDark ? '#22c55e' : '#14b8a6'}/>
                  <text x="40" y="95" textAnchor="middle" className="text-sm font-bold fill-white">S</text>
                  
                  <circle cx="110" cy="90" r="12" fill={isDark ? '#6366f1' : '#5eead4'}/>
                  <text x="110" y="94" textAnchor="middle" className="text-xs font-bold fill-white">A</text>
                  
                  <circle cx="180" cy="90" r="12" fill={isDark ? '#a78bfa' : '#99f6e4'}/>
                  <text x="180" y="94" textAnchor="middle" className="text-xs font-bold fill-white">B</text>
                  
                  {/* Poids */}
                  <rect x="65" y="80" width="20" height="16" rx="3" fill={isDark ? '#4f46e5' : '#14b8a6'}/>
                  <text x="75" y="91" textAnchor="middle" className="text-xs font-bold fill-white">4</text>
                  
                  <rect x="135" y="80" width="20" height="16" rx="3" fill={isDark ? '#4f46e5' : '#14b8a6'}/>
                  <text x="145" y="91" textAnchor="middle" className="text-xs font-bold fill-white">5</text>
                  
                  <rect x="100" y="55" width="25" height="16" rx="3" fill={isDark ? '#ef4444' : '#fb923c'}/>
                  <text x="112" y="66" textAnchor="middle" className="text-xs font-bold fill-white">-3</text>
                  
                  {/* Distances finales */}
                  <text x="40" y="125" textAnchor="middle" className={`text-xs ${isDark ? 'fill-green-400' : 'fill-teal-700'}`}>dist = 0</text>
                  <text x="110" y="125" textAnchor="middle" className={`text-xs ${isDark ? 'fill-indigo-300' : 'fill-teal-700'}`}>dist = 1</text>
                  <text x="180" y="125" textAnchor="middle" className={`text-xs ${isDark ? 'fill-purple-300' : 'fill-teal-700'}`}>dist = 6</text>
                  
                  <text x="110" y="155" textAnchor="middle" className={`text-sm ${isDark ? 'fill-slate-400' : 'fill-slate-600'}`}>
                    S→B→A = 4-3 = 1 (meilleur que S→A = 4)
                  </text>
                </svg>
              </div>

              <div>
                <div className={`p-5 rounded-xl mb-4 ${isDark ? 'bg-slate-900/40' : 'bg-teal-50'}`}>
                  <h4 className={`font-semibold mb-3 ${isDark ? 'text-indigo-300' : 'text-teal-700'}`}>
                     Principe
                  </h4>
                  <p className={`text-sm mb-3 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    <strong>Relaxation répétée :</strong> passe sur toutes les arêtes et améliore les distances. 
                    Répète <strong>|V| - 1 fois</strong>.
                  </p>
                </div>

                <div className={`p-5 rounded-xl mb-4 ${isDark ? 'bg-slate-900/40' : 'bg-teal-50'}`}>
                  <h4 className={`font-semibold mb-3 ${isDark ? 'text-indigo-300' : 'text-teal-700'}`}>
                    ✓ Avantages
                  </h4>
                  <ul className={`space-y-2 text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    <li>•  Gère les poids négatifs</li>
                    <li>•  Détecte les cycles négatifs</li>
                    <li>• <strong>Complexité :</strong> <span className="font-mono">O(VE)</span></li>
                  </ul>
                </div>

                <div className={`p-4 rounded-lg border-l-4 ${
                  isDark ? 'bg-indigo-950/20 border-indigo-400' : 'bg-yellow-50 border-yellow-500'
                }`}>
                  <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    💡 <strong>Application :</strong> Protocoles de routage (RIP), analyse financière
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tableau comparatif */}
          <div className={`p-6 rounded-xl ${isDark ? 'bg-slate-900/40' : 'bg-linear-to-r from-teal-50 to-emerald-50'}`}>
            <h4 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
               Dijkstra vs Bellman-Ford
            </h4>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className={isDark ? 'border-b-2 border-indigo-500/30' : 'border-b-2 border-teal-300'}>
                    <th className={`p-3 text-left ${isDark ? 'text-indigo-300' : 'text-teal-700'}`}>Critère</th>
                    <th className={`p-3 text-left ${isDark ? 'text-purple-300' : 'text-teal-700'}`}>Dijkstra</th>
                    <th className={`p-3 text-left ${isDark ? 'text-indigo-300' : 'text-teal-700'}`}>Bellman-Ford</th>
                  </tr>
                </thead>
                <tbody className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                  <tr className={isDark ? 'border-b border-slate-700' : 'border-b border-teal-100'}>
                    <td className="p-3 font-semibold">Approche</td>
                    <td className="p-3">Glouton (greedy)</td>
                    <td className="p-3">Relaxation répétée</td>
                  </tr>
                  <tr className={isDark ? 'border-b border-slate-700' : 'border-b border-teal-100'}>
                    <td className="p-3 font-semibold">Poids négatifs</td>
                    <td className="p-3"> Non</td>
                    <td className="p-3"> Oui</td>
                  </tr>
                  <tr className={isDark ? 'border-b border-slate-700' : 'border-b border-teal-100'}>
                    <td className="p-3 font-semibold">Détection cycles négatifs</td>
                    <td className="p-3"> Non</td>
                    <td className="p-3"> Oui</td>
                  </tr>
                  <tr className={isDark ? 'border-b border-slate-700' : 'border-b border-teal-100'}>
                    <td className="p-3 font-semibold">Complexité</td>
                    <td className="p-3">O(E log V)</td>
                    <td className="p-3">O(VE)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">Rapidité</td>
                    <td className="p-3"> Plus rapide</td>
                    <td className="p-3"> Plus lent mais plus général</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 16. Prim & Kruskal */}
        <div className={`max-w-6xl mx-auto mb-12 p-8 rounded-2xl border ${
          isDark 
            ? 'bg-linear-to-br from-indigo-950/40 to-purple-950/40 border-indigo-500/20' 
            : 'bg-white border-teal-200/40 shadow-lg'
        }`}>
          <div className="flex items-center gap-3 mb-6">
            <div className={`p-3 rounded-xl ${isDark ? 'bg-indigo-500/20' : 'bg-teal-100'}`}>
              <TrendingUp className={isDark ? 'text-indigo-300' : 'text-teal-700'} size={24} />
            </div>
            <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              16. Prim & Kruskal - Arbres Couvrants Minimum
            </h2>
          </div>

          <div className={`p-6 rounded-xl border-l-4 mb-8 ${
            isDark ? 'bg-indigo-950/30 border-indigo-400' : 'bg-teal-50 border-teal-500'
          }`}>
            <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-indigo-300' : 'text-teal-700'}`}>
               Arbre Couvrant Minimum (MST - Minimum Spanning Tree)
            </h3>
            <p className={`text-lg ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              Sous-ensemble d'arêtes qui <strong>connecte tous les sommets</strong> avec un <strong>coût total minimal</strong>, 
              sans former de cycle.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Prim */}
            <div className={`p-6 rounded-xl ${isDark ? 'bg-slate-900/40' : 'bg-linear-to-br from-teal-50 to-emerald-50'}`}>
              <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-indigo-300' : 'text-teal-700'}`}>
                 Algorithme de Prim
              </h3>
              
              <p className={`text-sm mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Construit l'arbre en ajoutant progressivement les <strong>arêtes les moins coûteuses</strong> 
                reliées à l'arbre en cours.
              </p>

              <svg className="w-full h-48 mb-4" viewBox="0 0 200 140">
                {/* Étapes de Prim */}
                <line x1="50" y1="50" x2="100" y2="30" stroke={isDark ? '#22c55e' : '#14b8a6'} strokeWidth="4"/>
                <line x1="100" y1="30" x2="150" y2="50" stroke={isDark ? '#22c55e' : '#14b8a6'} strokeWidth="4"/>
                <line x1="150" y1="50" x2="100" y2="90" stroke={isDark ? '#22c55e' : '#14b8a6'} strokeWidth="4"/>
                <line x1="50" y1="50" x2="100" y2="90" stroke={isDark ? '#818cf8' : '#5eead4'} strokeWidth="2" opacity="0.3"/>
                <line x1="100" y1="30" x2="100" y2="90" stroke={isDark ? '#818cf8' : '#5eead4'} strokeWidth="2" opacity="0.3"/>
                
                <circle cx="50" cy="50" r="12" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                <circle cx="100" cy="30" r="12" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                <circle cx="150" cy="50" r="12" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                <circle cx="100" cy="90" r="12" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                
                <text x="75" y="35" className={`text-xs font-bold ${isDark ? 'fill-green-400' : 'fill-teal-700'}`}>1</text>
                <text x="125" y="35" className={`text-xs font-bold ${isDark ? 'fill-green-400' : 'fill-teal-700'}`}>2</text>
                <text x="130" y="75" className={`text-xs font-bold ${isDark ? 'fill-green-400' : 'fill-teal-700'}`}>3</text>
                
                <text x="100" y="120" textAnchor="middle" className={`text-sm ${isDark ? 'fill-indigo-300' : 'fill-teal-700'}`}>
                  Coût total : 1+2+3 = 6
                </text>
              </svg>

              <div className={`p-4 rounded-lg ${isDark ? 'bg-indigo-950/30' : 'bg-white'}`}>
                <p className={`text-sm font-semibold mb-2 ${isDark ? 'text-indigo-300' : 'text-teal-700'}`}>
                  Étapes :
                </p>
                <ol className={`text-xs space-y-1 list-decimal list-inside ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  <li>Partir d'un sommet initial</li>
                  <li>Ajouter l'arête de coût min vers un nouveau sommet</li>
                  <li>Répéter jusqu'à couvrir tous les sommets</li>
                </ol>
              </div>
            </div>

            {/* Kruskal */}
            <div className={`p-6 rounded-xl ${isDark ? 'bg-slate-900/40' : 'bg-linear-to-br from-emerald-50 to-teal-50'}`}>
              <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-purple-300' : 'text-teal-700'}`}>
                 Algorithme de Kruskal
              </h3>
              
              <p className={`text-sm mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Trie toutes les arêtes par poids et les ajoute <strong>une à une</strong> si elles ne créent pas de cycle.
              </p>

              <svg className="w-full h-48 mb-4" viewBox="0 0 200 140">
                {/* Mêmes arêtes mais ordre différent */}
                <line x1="50" y1="50" x2="100" y2="30" stroke={isDark ? '#22c55e' : '#14b8a6'} strokeWidth="4"/>
                <line x1="100" y1="30" x2="150" y2="50" stroke={isDark ? '#22c55e' : '#14b8a6'} strokeWidth="4"/>
                <line x1="150" y1="50" x2="100" y2="90" stroke={isDark ? '#22c55e' : '#14b8a6'} strokeWidth="4"/>
                
                <circle cx="50" cy="50" r="12" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                <circle cx="100" cy="30" r="12" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                <circle cx="150" cy="50" r="12" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                <circle cx="100" cy="90" r="12" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                
                <text x="100" y="120" textAnchor="middle" className={`text-sm ${isDark ? 'fill-purple-300' : 'fill-teal-700'}`}>
                  Même résultat : coût = 6
                </text>
              </svg>

              <div className={`p-4 rounded-lg ${isDark ? 'bg-purple-950/30' : 'bg-white'}`}>
                <p className={`text-sm font-semibold mb-2 ${isDark ? 'text-purple-300' : 'text-teal-700'}`}>
                  Étapes :
                </p>
                <ol className={`text-xs space-y-1 list-decimal list-inside ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  <li>Trier toutes les arêtes par poids croissant</li>
                  <li>Ajouter l'arête de plus faible coût sans créer de cycle</li>
                  <li>Répéter jusqu'à V-1 arêtes</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Comparaison */}
          <div className={`p-6 rounded-xl ${isDark ? 'bg-slate-900/40' : 'bg-linear-to-r from-teal-50 to-emerald-50'}`}>
            <h4 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
               Prim vs Kruskal
            </h4>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className={isDark ? 'border-b-2 border-indigo-500/30' : 'border-b-2 border-teal-300'}>
                    <th className={`p-3 text-left ${isDark ? 'text-indigo-300' : 'text-teal-700'}`}>Critère</th>
                    <th className={`p-3 text-left ${isDark ? 'text-indigo-300' : 'text-teal-700'}`}>Prim</th>
                    <th className={`p-3 text-left ${isDark ? 'text-purple-300' : 'text-teal-700'}`}>Kruskal</th>
                  </tr>
                </thead>
                <tbody className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                  <tr className={isDark ? 'border-b border-slate-700' : 'border-b border-teal-100'}>
                    <td className="p-3 font-semibold">Approche</td>
                    <td className="p-3">Arbre qui grandit</td>
                    <td className="p-3">Trie toutes les arêtes</td>
                  </tr>
                  <tr className={isDark ? 'border-b border-slate-700' : 'border-b border-teal-100'}>
                    <td className="p-3 font-semibold">Structure</td>
                    <td className="p-3">File de priorité</td>
                    <td className="p-3">Union-Find</td>
                  </tr>
                  <tr className={isDark ? 'border-b border-slate-700' : 'border-b border-teal-100'}>
                    <td className="p-3 font-semibold">Complexité</td>
                    <td className="p-3">O(E log V)</td>
                    <td className="p-3">O(E log E)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">Meilleur pour</td>
                    <td className="p-3">Graphes denses</td>
                    <td className="p-3">Graphes clairsemés</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Application */}
          <div className={`mt-6 p-5 rounded-xl border-l-4 ${
            isDark ? 'bg-indigo-950/20 border-indigo-400' : 'bg-yellow-50 border-yellow-500'
          }`}>
            <p className={`font-semibold mb-2 ${isDark ? 'text-indigo-300' : 'text-orange-700'}`}>
               Application Concrète
            </p>
            <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Relier un ensemble de villes avec un <strong>coût minimal de construction de routes</strong>, 
              ou concevoir un réseau électrique avec le câblage le moins cher.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}