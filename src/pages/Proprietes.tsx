
import {  Ruler, Activity, Award, Map } from 'lucide-react';
import { useTheme } from '../Context/ThemeContext';
export default function Proprietes() {
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
        
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        .pulse-ring { animation: pulse-ring 2s ease-out infinite; }
      `}</style>

      <div className="relative container mx-auto px-6 py-8">
      

        <div className="max-w-6xl mx-auto mt-12">
         
          <h1 className={`text-2xl md:text-3xl xl:text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Propriétés & Théorèmes
          </h1>
          <p className={`text-xl ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
            Métriques fondamentales et théorèmes essentiels de la théorie des graphes
          </p>
        </div>

        {/* 9. Propriétés Métriques */}
        <div className={`max-w-6xl mx-auto mb-12 p-8 rounded-2xl border ${
          isDark 
            ? 'bg-linear-to-br from-indigo-950/40 to-purple-950/40 border-indigo-500/20' 
            : 'bg-white border-teal-200/40 shadow-lg'
        }`}>
          <div className="flex items-center gap-3 mb-6">
            <div className={`p-3 rounded-xl ${isDark ? 'bg-indigo-500/20' : 'bg-teal-100'}`}>
              <Ruler className={isDark ? 'text-indigo-300' : 'text-teal-600'} size={24} />
            </div>
            <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              9. Propriétés Métriques
            </h2>
          </div>

          {/* Le Degré */}
          <div className="mb-8">
            <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-indigo-300' : 'text-teal-700'}`}>
               Le Degré d'un Sommet
            </h3>

            <div className="grid lg:grid-cols-2 gap-6">
              <div>
                <p className={`text-lg mb-4 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  Le <strong>degré d'un sommet</strong> est le nombre d'arêtes qui lui sont connectées.
                </p>

                <div className={`p-5 rounded-xl mb-4 ${isDark ? 'bg-slate-900/40' : 'bg-teal-50'}`}>
                  <h4 className={`font-semibold mb-3 ${isDark ? 'text-indigo-300' : 'text-teal-700'}`}>
                     Notations
                  </h4>
                  <div className="space-y-2 font-mono text-sm">
                    <div className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                      <strong className={isDark ? 'text-indigo-400' : 'text-teal-600'}>deg(v)</strong> : degré du sommet v
                    </div>
                    <div className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                      <strong className={isDark ? 'text-indigo-400' : 'text-teal-600'}>deg⁺(v)</strong> : degré sortant (graphe orienté)
                    </div>
                    <div className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                      <strong className={isDark ? 'text-indigo-400' : 'text-teal-600'}>deg⁻(v)</strong> : degré entrant (graphe orienté)
                    </div>
                  </div>
                </div>

                <div className={`p-4 rounded-lg border-l-4 ${
                  isDark ? 'bg-indigo-950/20 border-indigo-400' : 'bg-teal-50 border-teal-400'
                }`}>
                  <p className={`font-semibold mb-2 ${isDark ? 'text-indigo-300' : 'text-teal-700'}`}>
                     Importance
                  </p>
                  <ul className={`text-sm space-y-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    <li>• Mesure l'importance d'un sommet</li>
                    <li>• En réseau social : grand degré = personne très connectée</li>
                    <li>• En réseau routier : carrefours importants</li>
                  </ul>
                </div>
              </div>

              <div className={`p-6 rounded-xl ${isDark ? 'bg-slate-900/40' : 'bg-linear-to-br from-teal-50 to-cyan-50'}`}>
                <svg className="w-full h-64" viewBox="0 0 200 180">
                  {/* Sommet central avec degré 4 */}
                  <line x1="100" y1="90" x2="60" y2="50" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="3"/>
                  <line x1="100" y1="90" x2="140" y2="50" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="3"/>
                  <line x1="100" y1="90" x2="60" y2="130" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="3"/>
                  <line x1="100" y1="90" x2="140" y2="130" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="3"/>
                  
                  <circle cx="60" cy="50" r="10" fill={isDark ? '#6366f1' : '#14b8a6'} opacity="0.6"/>
                  <circle cx="140" cy="50" r="10" fill={isDark ? '#6366f1' : '#14b8a6'} opacity="0.6"/>
                  <circle cx="60" cy="130" r="10" fill={isDark ? '#6366f1' : '#14b8a6'} opacity="0.6"/>
                  <circle cx="140" cy="130" r="10" fill={isDark ? '#6366f1' : '#14b8a6'} opacity="0.6"/>
                  
                  {/* Sommet central avec animation */}
                  <circle cx="100" cy="90" r="20" fill={isDark ? '#6366f1' : '#14b8a6'} opacity="0.2" className="pulse-ring"/>
                  <circle cx="100" cy="90" r="15" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                  
                  <text x="100" y="95" textAnchor="middle" className={`text-sm font-bold ${isDark ? 'fill-white' : 'fill-white'}`}>A</text>
                  
                  {/* Label degré */}
                  <rect x="70" y="155" width="60" height="25" rx="5" fill={isDark ? '#4f46e5' : '#14b8a6'}/>
                  <text x="100" y="172" textAnchor="middle" className={`text-sm font-bold ${isDark ? 'fill-white' : 'fill-white'}`}>deg(A) = 4</text>
                </svg>
              </div>
            </div>
          </div>

          {/* Distance */}
          <div className="mb-8">
            <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-indigo-300' : 'text-teal-700'}`}>
               Distance dans un Graphe
            </h3>

            <div className="grid lg:grid-cols-2 gap-6">
              <div className={`p-6 rounded-xl ${isDark ? 'bg-slate-900/40' : 'bg-linear-to-br from-teal-50 to-cyan-50'}`}>
                <svg className="w-full h-64" viewBox="0 0 240 160">
                  {/* Chemin A -> D */}
                  <line x1="40" y1="80" x2="90" y2="80" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="3"/>
                  <line x1="90" y1="80" x2="140" y2="50" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="3"/>
                  <line x1="140" y1="50" x2="200" y2="80" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="3"/>
                  <line x1="90" y1="80" x2="140" y2="110" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2" opacity="0.3"/>
                  
                  <circle cx="40" cy="80" r="12" fill={isDark ? '#22c55e' : '#14b8a6'}/>
                  <circle cx="90" cy="80" r="12" fill={isDark ? '#6366f1' : '#5eead4'}/>
                  <circle cx="140" cy="50" r="12" fill={isDark ? '#6366f1' : '#5eead4'}/>
                  <circle cx="140" cy="110" r="10" fill={isDark ? '#6366f1' : '#5eead4'} opacity="0.5"/>
                  <circle cx="200" cy="80" r="12" fill={isDark ? '#ef4444' : '#f97316'}/>
                  
                  <text x="40" y="70" textAnchor="middle" className={`text-xs font-bold ${isDark ? 'fill-green-300' : 'fill-teal-700'}`}>A</text>
                  <text x="90" y="70" textAnchor="middle" className={`text-xs font-bold ${isDark ? 'fill-white' : 'fill-white'}`}>B</text>
                  <text x="140" y="40" textAnchor="middle" className={`text-xs font-bold ${isDark ? 'fill-white' : 'fill-white'}`}>C</text>
                  <text x="200" y="70" textAnchor="middle" className={`text-xs font-bold ${isDark ? 'fill-white' : 'fill-white'}`}>D</text>
                  
                  {/* Distance labels */}
                  <text x="65" y="70" textAnchor="middle" className={`text-xs ${isDark ? 'fill-indigo-300' : 'fill-teal-600'}`}>1</text>
                  <text x="115" y="60" textAnchor="middle" className={`text-xs ${isDark ? 'fill-indigo-300' : 'fill-teal-600'}`}>1</text>
                  <text x="170" y="60" textAnchor="middle" className={`text-xs ${isDark ? 'fill-indigo-300' : 'fill-teal-600'}`}>1</text>
                  
                  <rect x="80" y="130" width="80" height="25" rx="5" fill={isDark ? '#4f46e5' : '#14b8a6'}/>
                  <text x="120" y="147" textAnchor="middle" className={`text-sm font-bold ${isDark ? 'fill-white' : 'fill-white'}`}>d(A, D) = 3</text>
                </svg>
              </div>

              <div>
                <p className={`text-lg mb-4 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  La <strong>distance d(u, v)</strong> est la longueur du plus court chemin entre u et v.
                </p>

                <div className={`p-5 rounded-xl mb-4 ${isDark ? 'bg-slate-900/40' : 'bg-teal-50'}`}>
                  <h4 className={`font-semibold mb-3 ${isDark ? 'text-indigo-300' : 'text-teal-700'}`}>
                    Types de distances
                  </h4>
                  <div className={`space-y-3 text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    <div className={`p-3 rounded-lg ${isDark ? 'bg-slate-800' : 'bg-white'}`}>
                      <strong className={isDark ? 'text-indigo-300' : 'text-teal-700'}>Graphe non pondéré :</strong>
                      <br/>Chaque arête compte 1. Utilise BFS.
                    </div>
                    <div className={`p-3 rounded-lg ${isDark ? 'bg-slate-800' : 'bg-white'}`}>
                      <strong className={isDark ? 'text-indigo-300' : 'text-teal-700'}>Graphe pondéré :</strong>
                      <br/>Somme minimale des poids. Utilise Dijkstra.
                    </div>
                  </div>
                </div>

                <div className={`p-4 rounded-lg ${isDark ? 'bg-indigo-950/20' : 'bg-yellow-50'}`}>
                  <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Si aucun chemin n'existe : <strong className="font-mono">d(u, v) = ∞</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Diamètre */}
          <div>
            <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-indigo-300' : 'text-teal-700'}`}>
               Diamètre d'un Graphe
            </h3>

            <div className="grid lg:grid-cols-2 gap-6">
              <div>
                <p className={`text-lg mb-4 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  Le <strong>diamètre</strong> est la plus grande distance entre deux sommets quelconques du graphe.
                </p>

                <div className={`p-5 rounded-xl mb-4 ${isDark ? 'bg-slate-900/40' : 'bg-teal-50'}`}>
                  <div className="font-mono text-center text-2xl mb-3">
                    <span className={isDark ? 'text-indigo-300' : 'text-teal-700'}>Diamètre(G) = max</span>
                    <sub className="text-sm">u,v</sub>
                    <span className={isDark ? 'text-indigo-300' : 'text-teal-700'}> d(u,v)</span>
                  </div>
                  <p className={`text-sm text-center ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Plus le diamètre est faible, plus tout est relié efficacement
                  </p>
                </div>

                <div className={`p-4 rounded-lg border-l-4 ${
                  isDark ? 'bg-indigo-950/20 border-indigo-400' : 'bg-teal-50 border-teal-400'
                }`}>
                  <p className={`font-semibold mb-2 ${isDark ? 'text-indigo-300' : 'text-teal-700'}`}>
                     Applications
                  </p>
                  <ul className={`text-sm space-y-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    <li>• Mesurer la performance d'un réseau</li>
                    <li>• Phénomène "small-world" en réseaux sociaux</li>
                    <li>• Efficacité des réseaux électriques</li>
                  </ul>
                </div>
              </div>

              <div className={`p-6 rounded-xl ${isDark ? 'bg-slate-900/40' : 'bg-linear-to-br from-teal-50 to-cyan-50'}`}>
                <svg className="w-full h-64" viewBox="0 0 220 180">
                  {/* Graphe en ligne montrant le diamètre */}
                  <line x1="30" y1="90" x2="70" y2="90" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="3"/>
                  <line x1="70" y1="90" x2="110" y2="90" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="3"/>
                  <line x1="110" y1="90" x2="150" y2="90" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="3"/>
                  <line x1="150" y1="90" x2="190" y2="90" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="3"/>
                  
                  <circle cx="30" cy="90" r="12" fill={isDark ? '#22c55e' : '#14b8a6'}/>
                  <circle cx="70" cy="90" r="10" fill={isDark ? '#6366f1' : '#5eead4'}/>
                  <circle cx="110" cy="90" r="10" fill={isDark ? '#6366f1' : '#5eead4'}/>
                  <circle cx="150" cy="90" r="10" fill={isDark ? '#6366f1' : '#5eead4'}/>
                  <circle cx="190" cy="90" r="12" fill={isDark ? '#ef4444' : '#f97316'}/>
                  
                  <text x="30" y="75" textAnchor="middle" className={`text-xs font-bold ${isDark ? 'fill-green-300' : 'fill-teal-700'}`}>A</text>
                  <text x="70" y="75" textAnchor="middle" className={`text-xs font-bold ${isDark ? 'fill-white' : 'fill-white'}`}>B</text>
                  <text x="110" y="75" textAnchor="middle" className={`text-xs font-bold ${isDark ? 'fill-white' : 'fill-white'}`}>C</text>
                  <text x="150" y="75" textAnchor="middle" className={`text-xs font-bold ${isDark ? 'fill-white' : 'fill-white'}`}>D</text>
                  <text x="190" y="75" textAnchor="middle" className={`text-xs font-bold ${isDark ? 'fill-white' : 'fill-white'}`}>E</text>
                  
                  {/* Flèche double entre A et E */}
                  <path d="M 30 110 Q 110 140 190 110" fill="none" stroke={isDark ? '#ef4444' : '#f97316'} strokeWidth="2" strokeDasharray="5,5"/>
                  <text x="110" y="155" textAnchor="middle" className={`text-sm font-bold ${isDark ? 'fill-red-400' : 'fill-orange-600'}`}>Distance maximale = 4</text>
                  
                  <rect x="60" y="20" width="100" height="25" rx="5" fill={isDark ? '#4f46e5' : '#14b8a6'}/>
                  <text x="110" y="37" textAnchor="middle" className={`text-sm font-bold ${isDark ? 'fill-white' : 'fill-white'}`}>Diamètre = 4</text>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* 10. Cycles, Chemins & Composantes */}
        <div className={`max-w-6xl mx-auto mb-12 p-8 rounded-2xl border ${
          isDark 
            ? 'bg-linear-to-br from-purple-950/40 to-indigo-950/40 border-purple-500/20' 
            : 'bg-white border-cyan-200/40 shadow-lg'
        }`}>
          <div className="flex items-center gap-3 mb-6">
            <div className={`p-3 rounded-xl ${isDark ? 'bg-purple-500/20' : 'bg-cyan-100'}`}>
              <Activity className={isDark ? 'text-purple-300' : 'text-cyan-600'} size={24} />
            </div>
            <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              10. Cycles, Chemins & Composantes
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Chemin Simple */}
            <div className={`p-6 rounded-xl ${isDark ? 'bg-slate-900/40' : 'bg-linear-to-br from-cyan-50 to-blue-50'}`}>
              <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-purple-300' : 'text-cyan-700'}`}>
                 Chemin Simple
              </h3>
              
              <svg className="w-full h-32 mb-4" viewBox="0 0 180 80">
                <line x1="30" y1="40" x2="70" y2="40" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="3"/>
                <line x1="70" y1="40" x2="110" y2="40" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="3"/>
                <line x1="110" y1="40" x2="150" y2="40" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="3"/>
                
                <circle cx="30" cy="40" r="10" fill={isDark ? '#22c55e' : '#14b8a6'}/>
                <circle cx="70" cy="40" r="10" fill={isDark ? '#6366f1' : '#5eead4'}/>
                <circle cx="110" cy="40" r="10" fill={isDark ? '#6366f1' : '#5eead4'}/>
                <circle cx="150" cy="40" r="10" fill={isDark ? '#ef4444' : '#f97316'}/>
                
                <text x="30" y="30" textAnchor="middle" className={`text-xs font-bold ${isDark ? 'fill-green-300' : 'fill-teal-700'}`}>A</text>
                <text x="70" y="30" textAnchor="middle" className={`text-xs font-bold ${isDark ? 'fill-white' : 'fill-white'}`}>B</text>
                <text x="110" y="30" textAnchor="middle" className={`text-xs font-bold ${isDark ? 'fill-white' : 'fill-white'}`}>C</text>
                <text x="150" y="30" textAnchor="middle" className={`text-xs font-bold ${isDark ? 'fill-white' : 'fill-white'}`}>D</text>
                
                <text x="90" y="70" textAnchor="middle" className={`text-sm ${isDark ? 'fill-purple-300' : 'fill-cyan-600'}`}>A → B → C → D</text>
              </svg>

              <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Suite de sommets où <strong>chaque sommet est visité une seule fois</strong>.
              </p>
            </div>

            {/* Cycle */}
            <div className={`p-6 rounded-xl ${isDark ? 'bg-slate-900/40' : 'bg-linear-to-br from-blue-50 to-indigo-50'}`}>
              <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-purple-300' : 'text-cyan-700'}`}>
                 Cycle (Circuit)
              </h3>
              
              <svg className="w-full h-32 mb-4" viewBox="0 0 140 100">
                <path d="M 70 20 L 110 50 L 90 90 L 50 90 L 30 50 Z" 
                      fill="none" 
                      stroke={isDark ? '#818cf8' : '#14b8a6'} 
                      strokeWidth="3"/>
                
                <circle cx="70" cy="20" r="10" fill={isDark ? '#22c55e' : '#14b8a6'}/>
                <circle cx="110" cy="50" r="10" fill={isDark ? '#6366f1' : '#5eead4'}/>
                <circle cx="90" cy="90" r="10" fill={isDark ? '#6366f1' : '#5eead4'}/>
                <circle cx="50" cy="90" r="10" fill={isDark ? '#6366f1' : '#5eead4'}/>
                <circle cx="30" cy="50" r="10" fill={isDark ? '#6366f1' : '#5eead4'}/>
                
                <text x="70" y="15" textAnchor="middle" className={`text-xs font-bold ${isDark ? 'fill-green-300' : 'fill-teal-700'}`}>A</text>
              </svg>

              <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Chemin qui <strong>commence et se termine au même sommet</strong>, sans répéter d'arête.
              </p>
            </div>

            {/* Détection de cycle */}
            <div className={`p-6 rounded-xl ${isDark ? 'bg-slate-900/40' : 'bg-linear-to-br from-indigo-50 to-purple-50'}`}>
              <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-purple-300' : 'text-cyan-700'}`}>
                 Détection de Cycle
              </h3>
              
              <div className={`p-4 rounded-lg mb-3 ${isDark ? 'bg-purple-950/40' : 'bg-white'}`}>
                <p className={`font-semibold mb-2 text-sm ${isDark ? 'text-purple-300' : 'text-cyan-700'}`}>
                  Méthodes :
                </p>
                <ul className={`text-sm space-y-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  <li>• DFS : revisite un sommet du chemin en cours</li>
                  <li>• BFS avec suivi des parents</li>
                  <li>• Coloration (blanc, gris, noir)</li>
                </ul>
              </div>

              <div className={`p-3 rounded-lg ${isDark ? 'bg-purple-950/20' : 'bg-cyan-50'}`}>
                <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Essentiel pour détecter les dépendances circulaires
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 11. Théorèmes Essentiels (1) */}
        <div className={`max-w-6xl mx-auto mb-12 p-8 rounded-2xl border ${
          isDark 
            ? 'bg-linear-to-br from-indigo-950/40 to-purple-950/40 border-indigo-500/20' 
            : 'bg-white border-teal-200/40 shadow-lg'
        }`}>
          <div className="flex items-center gap-3 mb-6">
            <div className={`p-3 rounded-xl ${isDark ? 'bg-indigo-500/20' : 'bg-teal-100'}`}>
              <Award className={isDark ? 'text-indigo-300' : 'text-teal-600'} size={24} />
            </div>
            <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              11. Théorèmes Essentiels (1)
            </h2>
          </div>

          {/* Théorème d'Euler */}
          <div className="mb-8">
            <div className={`p-6 rounded-xl border-l-4 mb-6 ${
              isDark ? 'bg-indigo-950/30 border-indigo-400' : 'bg-teal-50 border-teal-500'
            }`}>
              <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-indigo-300' : 'text-teal-700'}`}>
                 Théorème d'Euler (Cycles Eulériens)
              </h3>
              <p className={`text-lg ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                Un graphe connexe possède un <strong>cycle eulérien</strong> (parcours passant une seule fois 
                par chaque arête et revenant au départ) si et seulement si <strong>tous les sommets ont un degré pair</strong>.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <div>
                <div className={`p-5 rounded-xl mb-4 ${isDark ? 'bg-slate-900/40' : 'bg-teal-50'}`}>
                  <h4 className={`font-semibold mb-3 ${isDark ? 'text-indigo-300' : 'text-teal-700'}`}>
                    Conditions pour un chemin eulérien :
                  </h4>
                  <ul className={`space-y-2 text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    <li className={`p-3 rounded-lg ${isDark ? 'bg-slate-800' : 'bg-white'}`}>
                      <strong>Cycle eulérien :</strong> Tous les sommets de degré pair (départ = arrivée)
                    </li>
                    <li className={`p-3 rounded-lg ${isDark ? 'bg-slate-800' : 'bg-white'}`}>
                      <strong>Chemin eulérien :</strong> Exactement 2 sommets de degré impair (départ ≠ arrivée)
                    </li>
                  </ul>
                </div>

                <div className={`p-4 rounded-lg border-l-4 ${
                  isDark ? 'bg-indigo-950/20 border-indigo-400' : 'bg-yellow-50 border-yellow-500'
                }`}>
                  <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    <strong>Application historique :</strong> Problème des ponts de Königsberg (1736)
                  </p>
                </div>
              </div>

              <div className={`p-6 rounded-xl ${isDark ? 'bg-slate-900/40' : 'bg-linear-to-br from-teal-50 to-cyan-50'}`}>
                <h4 className={`text-lg font-semibold mb-4 text-center ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Exemple : Cycle Eulérien ✓
                </h4>
                <svg className="w-full h-48" viewBox="0 0 200 140">
                  {/* Rectangle avec diagonales */}
                  <line x1="50" y1="40" x2="150" y2="40" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="3"/>
                  <line x1="150" y1="40" x2="150" y2="100" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="3"/>
                  <line x1="150" y1="100" x2="50" y2="100" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="3"/>
                  <line x1="50" y1="100" x2="50" y2="40" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="3"/>
                  <line x1="50" y1="40" x2="150" y2="100" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="3"/>
                  <line x1="150" y1="40" x2="50" y2="100" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="3"/>
                  
                  <circle cx="50" cy="40" r="12" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                  <circle cx="150" cy="40" r="12" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                  <circle cx="150" cy="100" r="12" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                  <circle cx="50" cy="100" r="12" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                  
                  {/* Degrés */}
                  <text x="30" y="40" textAnchor="middle" className={`text-xs font-bold ${isDark ? 'fill-indigo-300' : 'fill-teal-600'}`}>deg=4</text>
                  <text x="170" y="40" textAnchor="middle" className={`text-xs font-bold ${isDark ? 'fill-indigo-300' : 'fill-teal-600'}`}>deg=4</text>
                  <text x="170" y="100" textAnchor="middle" className={`text-xs font-bold ${isDark ? 'fill-indigo-300' : 'fill-teal-600'}`}>deg=4</text>
                  <text x="30" y="100" textAnchor="middle" className={`text-xs font-bold ${isDark ? 'fill-indigo-300' : 'fill-teal-600'}`}>deg=4</text>
                  
                  <text x="100" y="130" textAnchor="middle" className={`text-sm font-bold ${isDark ? 'fill-green-400' : 'fill-green-600'}`}>
                    ✓ Tous les sommets ont un degré pair
                  </text>
                </svg>
              </div>
            </div>
          </div>

          {/* Théorème de Dirac */}
          <div>
            <div className={`p-6 rounded-xl border-l-4 mb-6 ${
              isDark ? 'bg-purple-950/30 border-purple-400' : 'bg-cyan-50 border-cyan-500'
            }`}>
              <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-purple-300' : 'text-cyan-700'}`}>
                 Théorème de Dirac (Cycles Hamiltoniens)
              </h3>
              <p className={`text-lg ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                Un graphe simple ayant au moins <strong>n ≥ 3 sommets</strong> est hamiltonien 
                (possède un cycle passant une fois par chaque sommet) si chaque sommet a un degré <strong>≥ n/2</strong>.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <div className={`p-6 rounded-xl ${isDark ? 'bg-slate-900/40' : 'bg-linear-to-br from-cyan-50 to-blue-50'}`}>
                <h4 className={`text-lg font-semibold mb-4 text-center ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Exemple : K₄ (Graphe Complet)
                </h4>
                <svg className="w-full h-48" viewBox="0 0 160 140">
                  {/* Tétraèdre */}
                  <line x1="80" y1="30" x2="40" y2="90" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                  <line x1="80" y1="30" x2="120" y2="90" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                  <line x1="80" y1="30" x2="80" y2="110" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                  <line x1="40" y1="90" x2="120" y2="90" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                  <line x1="40" y1="90" x2="80" y2="110" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                  <line x1="120" y1="90" x2="80" y2="110" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                  
                  <circle cx="80" cy="30" r="12" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                  <circle cx="40" cy="90" r="12" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                  <circle cx="120" cy="90" r="12" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                  <circle cx="80" cy="110" r="12" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                  
                  <text x="80" y="135" textAnchor="middle" className={`text-xs ${isDark ? 'fill-purple-300' : 'fill-cyan-600'}`}>
                    n=4, deg=3 ≥ n/2=2 ✓
                  </text>
                </svg>
              </div>

              <div>
                <div className={`p-5 rounded-xl mb-4 ${isDark ? 'bg-slate-900/40' : 'bg-cyan-50'}`}>
                  <h4 className={`font-semibold mb-3 ${isDark ? 'text-purple-300' : 'text-cyan-700'}`}>
                    Différence Euler vs Dirac
                  </h4>
                  <div className={`space-y-2 text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    <div className={`p-3 rounded-lg ${isDark ? 'bg-slate-800' : 'bg-white'}`}>
                      <strong className={isDark ? 'text-indigo-300' : 'text-teal-700'}>Euler :</strong> 
                      Traverse toutes les <strong>arêtes</strong> une fois
                    </div>
                    <div className={`p-3 rounded-lg ${isDark ? 'bg-slate-800' : 'bg-white'}`}>
                      <strong className={isDark ? 'text-purple-300' : 'text-cyan-700'}>Dirac :</strong> 
                      Visite tous les <strong>sommets</strong> une fois
                    </div>
                  </div>
                </div>

                <div className={`p-4 rounded-lg ${isDark ? 'bg-purple-950/20' : 'bg-yellow-50'}`}>
                  <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                     Le théorème de Dirac donne une <strong>condition suffisante</strong>, pas nécessaire.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 12. Théorèmes Essentiels (2) */}
        <div className={`max-w-6xl mx-auto mb-12 p-8 rounded-2xl border ${
          isDark 
            ? 'bg-linear-to-br from-purple-950/40 to-indigo-950/40 border-purple-500/20' 
            : 'bg-white border-cyan-200/40 shadow-lg'
        }`}>
          <div className="flex items-center gap-3 mb-6">
            <div className={`p-3 rounded-xl ${isDark ? 'bg-purple-500/20' : 'bg-cyan-100'}`}>
              <Map className={isDark ? 'text-purple-300' : 'text-cyan-600'} size={24} />
            </div>
            <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              12. Théorèmes Essentiels (2)
            </h2>
          </div>

          {/* Kuratowski */}
          <div className="mb-8">
            <div className={`p-6 rounded-xl border-l-4 mb-6 ${
              isDark ? 'bg-purple-950/30 border-purple-400' : 'bg-cyan-50 border-cyan-500'
            }`}>
              <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-purple-300' : 'text-cyan-700'}`}>
                 Théorème de Kuratowski (1930)
              </h3>
              <p className={`text-lg mb-3 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                Un graphe fini est <strong>planaire</strong> si et seulement s'il ne contient pas de sous-graphe 
                qui soit une <strong>subdivision de K₅ ou K₃,₃</strong>.
              </p>
              <div className={`p-4 rounded-lg ${isDark ? 'bg-purple-950/40' : 'bg-white'}`}>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  En d'autres termes : K₅ et K₃,₃ sont les "plus petits" graphes non planaires.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* K5 */}
              <div className={`p-6 rounded-xl border-2 ${
                isDark ? 'bg-red-950/20 border-red-500/50' : 'bg-red-50 border-red-300'
              }`}>
                <h4 className={`text-xl font-bold mb-4 text-center ${isDark ? 'text-red-400' : 'text-red-700'}`}>
                   K₅ - Non Planaire
                </h4>
                <svg className="w-full h-48" viewBox="0 0 160 160">
                  <line x1="80" y1="30" x2="130" y2="60" stroke={isDark ? '#f87171' : '#fb923c'} strokeWidth="2"/>
                  <line x1="80" y1="30" x2="120" y2="120" stroke={isDark ? '#f87171' : '#fb923c'} strokeWidth="2"/>
                  <line x1="80" y1="30" x2="40" y2="120" stroke={isDark ? '#f87171' : '#fb923c'} strokeWidth="2"/>
                  <line x1="80" y1="30" x2="30" y2="60" stroke={isDark ? '#f87171' : '#fb923c'} strokeWidth="2"/>
                  <line x1="130" y1="60" x2="120" y2="120" stroke={isDark ? '#f87171' : '#fb923c'} strokeWidth="2"/>
                  <line x1="130" y1="60" x2="40" y2="120" stroke={isDark ? '#f87171' : '#fb923c'} strokeWidth="2"/>
                  <line x1="130" y1="60" x2="30" y2="60" stroke={isDark ? '#f87171' : '#fb923c'} strokeWidth="2"/>
                  <line x1="120" y1="120" x2="40" y2="120" stroke={isDark ? '#f87171' : '#fb923c'} strokeWidth="2"/>
                  <line x1="120" y1="120" x2="30" y2="60" stroke={isDark ? '#f87171' : '#fb923c'} strokeWidth="2"/>
                  <line x1="40" y1="120" x2="30" y2="60" stroke={isDark ? '#f87171' : '#fb923c'} strokeWidth="2"/>
                  
                  <circle cx="80" cy="30" r="8" fill={isDark ? '#ef4444' : '#f97316'}/>
                  <circle cx="130" cy="60" r="8" fill={isDark ? '#ef4444' : '#f97316'}/>
                  <circle cx="120" cy="120" r="8" fill={isDark ? '#ef4444' : '#f97316'}/>
                  <circle cx="40" cy="120" r="8" fill={isDark ? '#ef4444' : '#f97316'}/>
                  <circle cx="30" cy="60" r="8" fill={isDark ? '#ef4444' : '#f97316'}/>
                  
                  <text x="80" y="150" textAnchor="middle" className={`text-xs font-semibold ${isDark ? 'fill-red-400' : 'fill-red-600'}`}>
                    5 sommets tous reliés
                  </text>
                </svg>
              </div>

              {/* K3,3 */}
              <div className={`p-6 rounded-xl border-2 ${
                isDark ? 'bg-red-950/20 border-red-500/50' : 'bg-red-50 border-red-300'
              }`}>
                <h4 className={`text-xl font-bold mb-4 text-center ${isDark ? 'text-red-400' : 'text-red-700'}`}>
                   K₃,₃ - Non Planaire
                </h4>
                <svg className="w-full h-48" viewBox="0 0 180 160">
                  <line x1="40" y1="40" x2="110" y2="100" stroke={isDark ? '#f87171' : '#fb923c'} strokeWidth="2"/>
                  <line x1="40" y1="40" x2="110" y2="130" stroke={isDark ? '#f87171' : '#fb923c'} strokeWidth="2"/>
                  <line x1="40" y1="40" x2="140" y2="115" stroke={isDark ? '#f87171' : '#fb923c'} strokeWidth="2"/>
                  <line x1="90" y1="40" x2="110" y2="100" stroke={isDark ? '#f87171' : '#fb923c'} strokeWidth="2"/>
                  <line x1="90" y1="40" x2="110" y2="130" stroke={isDark ? '#f87171' : '#fb923c'} strokeWidth="2"/>
                  <line x1="90" y1="40" x2="140" y2="115" stroke={isDark ? '#f87171' : '#fb923c'} strokeWidth="2"/>
                  <line x1="140" y1="40" x2="110" y2="100" stroke={isDark ? '#f87171' : '#fb923c'} strokeWidth="2"/>
                  <line x1="140" y1="40" x2="110" y2="130" stroke={isDark ? '#f87171' : '#fb923c'} strokeWidth="2"/>
                  <line x1="140" y1="40" x2="140" y2="115" stroke={isDark ? '#f87171' : '#fb923c'} strokeWidth="2"/>
                  
                  <circle cx="40" cy="40" r="8" fill={isDark ? '#ef4444' : '#f97316'}/>
                  <circle cx="90" cy="40" r="8" fill={isDark ? '#ef4444' : '#f97316'}/>
                  <circle cx="140" cy="40" r="8" fill={isDark ? '#ef4444' : '#f97316'}/>
                  <circle cx="110" cy="100" r="8" fill={isDark ? '#fca5a5' : '#fdba74'}/>
                  <circle cx="110" cy="130" r="8" fill={isDark ? '#fca5a5' : '#fdba74'}/>
                  <circle cx="140" cy="115" r="8" fill={isDark ? '#fca5a5' : '#fdba74'}/>
                  
                  <text x="90" y="155" textAnchor="middle" className={`text-xs font-semibold ${isDark ? 'fill-red-400' : 'fill-red-600'}`}>
                    3 maisons • 3 usines
                  </text>
                </svg>
              </div>
            </div>

            <div className={`p-5 rounded-xl ${isDark ? 'bg-slate-900/40' : 'bg-linear-to-r from-cyan-50 to-blue-50'}`}>
              <h4 className={`font-semibold mb-3 ${isDark ? 'text-purple-300' : 'text-cyan-700'}`}>
                 Importance et Applications
              </h4>
              <ul className={`space-y-2 text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                <li>• Réduit le problème de planarité à la recherche de deux graphes spécifiques</li>
                <li>• Application en conception de circuits électroniques (éviter les croisements coûteux)</li>
                <li>• Base théorique pour les algorithmes de test de planarité</li>
              </ul>
            </div>
          </div>

          {/* Conditions de Planarité */}
          <div>
            <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-purple-300' : 'text-cyan-700'}`}>
               Conditions de Planarité
            </h3>

            <div className="grid lg:grid-cols-2 gap-6">
              <div className={`p-6 rounded-xl ${isDark ? 'bg-slate-900/40' : 'bg-linear-to-br from-cyan-50 to-blue-50'}`}>
                <h4 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Formule d'Euler
                </h4>
                
                <div className={`p-4 rounded-lg mb-4 ${isDark ? 'bg-purple-950/40' : 'bg-white'}`}>
                  <p className="text-center font-mono text-2xl mb-2">
                    <span className={isDark ? 'text-purple-300' : 'text-cyan-700'}>s - a + f = 2</span>
                  </p>
                  <div className={`text-sm space-y-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    <p>• s = nombre de sommets</p>
                    <p>• a = nombre d'arêtes</p>
                    <p>• f = nombre de faces (+ face extérieure)</p>
                  </div>
                </div>

                <div className={`p-4 rounded-lg border-l-4 ${
                  isDark ? 'bg-purple-950/20 border-purple-400' : 'bg-cyan-50 border-cyan-400'
                }`}>
                  <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    <strong>Note :</strong> Une face est une région du plan délimitée par des arêtes
                  </p>
                </div>
              </div>

              <div className={`p-6 rounded-xl ${isDark ? 'bg-slate-900/40' : 'bg-linear-to-br from-blue-50 to-indigo-50'}`}>
                <h4 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Inégalités Importantes
                </h4>
                
                <div className="space-y-3">
                  <div className={`p-4 rounded-lg ${isDark ? 'bg-purple-950/40' : 'bg-white'}`}>
                    <p className={`font-semibold mb-2 ${isDark ? 'text-purple-300' : 'text-cyan-700'}`}>
                      Théorème 1 : Graphe simple
                    </p>
                    <p className="font-mono text-lg mb-2">
                      <span className={isDark ? 'text-indigo-300' : 'text-teal-600'}>a ≤ 3s - 6</span>
                    </p>
                    <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      Pour s ≥ 3 sommets
                    </p>
                  </div>

                  <div className={`p-4 rounded-lg ${isDark ? 'bg-purple-950/40' : 'bg-white'}`}>
                    <p className={`font-semibold mb-2 ${isDark ? 'text-purple-300' : 'text-cyan-700'}`}>
                      Théorème 2 : Sans triangles
                    </p>
                    <p className="font-mono text-lg mb-2">
                      <span className={isDark ? 'text-indigo-300' : 'text-teal-600'}>a ≤ 2s - 4</span>
                    </p>
                    <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      Si pas de cycle de longueur 3
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Théorème des Ponts */}
        <div className={`max-w-6xl mx-auto mb-12 p-8 rounded-2xl border ${
          isDark 
            ? 'bg-linear-to-br from-indigo-950/40 to-purple-950/40 border-indigo-500/20' 
            : 'bg-white border-teal-200/40 shadow-lg'
        }`}>
          <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
             Application : Ponts de Königsberg
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <p className={`text-lg mb-4 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                Au 18ème siècle, la ville de Königsberg possédait <strong>7 ponts</strong> reliant 
                <strong> 4 zones</strong>. Question : peut-on traverser chaque pont exactement une fois ?
              </p>

              <div className={`p-5 rounded-xl mb-4 ${isDark ? 'bg-slate-900/40' : 'bg-teal-50'}`}>
                <h4 className={`font-semibold mb-3 ${isDark ? 'text-indigo-300' : 'text-teal-700'}`}>
                  Solution d'Euler (1736)
                </h4>
                <p className={`text-sm mb-3 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Les 4 zones avaient des degrés : <strong>3, 3, 3, 5</strong> (tous impairs)
                </p>
                <div className={`p-3 rounded-lg border-l-4 ${
                  isDark ? 'bg-indigo-950/20 border-red-500' : 'bg-red-50 border-red-400'
                }`}>
                  <p className={`text-sm font-semibold ${isDark ? 'text-red-400' : 'text-red-600'}`}>
                     Impossible ! Plus de 2 sommets de degré impair
                  </p>
                </div>
              </div>

              <div className={`p-4 rounded-lg ${isDark ? 'bg-indigo-950/20' : 'bg-yellow-50'}`}>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Ce résultat marque la <strong>naissance de la théorie des graphes</strong> !
                </p>
              </div>
            </div>

            <div className={`p-6 rounded-xl ${isDark ? 'bg-slate-900/40' : 'bg-linear-to-br from-teal-50 to-cyan-50'}`}>
              <svg className="w-full h-full" viewBox="0 0 240 200">
                <path d="M 0 80 Q 60 70 120 80 T 240 80" fill="none" stroke={isDark ? '#1e293b' : '#94a3b8'} strokeWidth="40" opacity="0.3"/>
                <path d="M 0 120 Q 60 130 120 120 T 240 120" fill="none" stroke={isDark ? '#1e293b' : '#94a3b8'} strokeWidth="40" opacity="0.3"/>
                
                <ellipse cx="120" cy="100" rx="35" ry="25" fill={isDark ? '#4f46e5' : '#14b8a6'} opacity="0.4"/>
                <text x="120" y="105" textAnchor="middle" className={`text-sm font-bold ${isDark ? 'fill-indigo-200' : 'fill-teal-700'}`}>Île</text>
                
                <line x1="85" y1="100" x2="40" y2="60" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="4"/>
                <line x1="85" y1="100" x2="40" y2="140" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="4"/>
                <line x1="155" y1="100" x2="200" y2="60" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="4"/>
                <line x1="155" y1="100" x2="200" y2="140" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="4"/>
                <line x1="120" y1="75" x2="120" y2="30" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="4"/>
                <line x1="120" y1="125" x2="120" y2="170" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="4"/>
                <line x1="100" y1="90" x2="60" y2="100" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="4"/>
                
                <circle cx="40" cy="60" r="15" fill={isDark ? '#6366f1' : '#14b8a6'} opacity="0.6"/>
                <text x="40" y="50" textAnchor="middle" className={`text-xs ${isDark ? 'fill-indigo-300' : 'fill-teal-700'}`}>deg=3</text>
                
                <circle cx="40" cy="140" r="15" fill={isDark ? '#6366f1' : '#14b8a6'} opacity="0.6"/>
                <text x="40" y="160" textAnchor="middle" className={`text-xs ${isDark ? 'fill-indigo-300' : 'fill-teal-700'}`}>deg=3</text>
                
                <circle cx="200" cy="60" r="15" fill={isDark ? '#6366f1' : '#14b8a6'} opacity="0.6"/>
                <text x="200" y="50" textAnchor="middle" className={`text-xs ${isDark ? 'fill-indigo-300' : 'fill-teal-700'}`}>deg=3</text>
                
                <circle cx="200" cy="140" r="15" fill={isDark ? '#6366f1' : '#14b8a6'} opacity="0.6"/>
                <text x="120" y="195" textAnchor="middle" className={`text-sm ${isDark ? 'fill-indigo-300' : 'fill-teal-600'}`}>7 ponts • 4 zones</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}