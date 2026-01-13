
import { GitBranch, Network, Grid3x3 } from 'lucide-react';
import { useTheme } from '../Context/ThemeContext';

export default function Typologie() {

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
      `}</style>

      <div className="relative container mx-auto px-6 py-15">
      

        <div className="max-w-6xl mx-auto mb-12">
          
          <h1 className={`text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Typologie & Structures
          </h1>
          <p className={`text-xl ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
            Classification des graphes et leurs différentes représentations
          </p>
        </div>

        {/* 4. Graphes Orientés vs Non Orientés */}
        <div className={`max-w-6xl mx-auto mb-12 p-8 rounded-2xl border ${
          isDark 
            ? 'bg-linear-to-br from-purple-950/40 to-indigo-950/40 border-purple-500/20' 
            : 'bg-white border-cyan-200/40 shadow-lg'
        }`}>
          <div className="flex items-center gap-3 mb-6">
            <div className={`p-3 rounded-xl ${isDark ? 'bg-purple-500/20' : 'bg-cyan-100'}`}>
              <GitBranch className={isDark ? 'text-purple-300' : 'text-cyan-600'} size={24} />
            </div>
            <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              4. Graphes Orientés vs Non Orientés
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Graphe Non Orienté */}
            <div className={`p-6 rounded-xl ${isDark ? 'bg-slate-900/40' : 'bg-linear-to-br from-cyan-50 to-blue-50'}`}>
              <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                 Graphe Non Orienté
              </h3>
              
              <svg className="w-full h-48 mb-4" viewBox="0 0 200 120">
                <line x1="50" y1="40" x2="150" y2="40" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="3"/>
                <line x1="50" y1="40" x2="100" y2="90" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="3"/>
                <line x1="150" y1="40" x2="100" y2="90" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="3"/>
                
                <circle cx="50" cy="40" r="12" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                <circle cx="150" cy="40" r="12" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                <circle cx="100" cy="90" r="12" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                
                <text x="50" y="30" textAnchor="middle" className={`text-xs font-bold ${isDark ? 'fill-indigo-300' : 'fill-cyan-700'}`}>A</text>
                <text x="150" y="30" textAnchor="middle" className={`text-xs font-bold ${isDark ? 'fill-indigo-300' : 'fill-cyan-700'}`}>B</text>
                <text x="100" y="110" textAnchor="middle" className={`text-xs font-bold ${isDark ? 'fill-indigo-300' : 'fill-cyan-700'}`}>C</text>
                
                <text x="100" y="60" textAnchor="middle" className={`text-sm ${isDark ? 'fill-purple-300' : 'fill-cyan-600'}`}>A—B (bidirectionnel)</text>
              </svg>

              <div className={`p-4 rounded-lg mb-4 ${isDark ? 'bg-purple-950/20' : 'bg-white'}`}>
                <p className={`font-semibold mb-2 ${isDark ? 'text-purple-300' : 'text-cyan-700'}`}>
                  ✓ Caractéristiques :
                </p>
                <ul className={`space-y-1 text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  <li>• Les arêtes n'ont pas de sens</li>
                  <li>• A—B signifie connexion dans les deux directions</li>
                  <li>• Relation symétrique</li>
                </ul>
              </div>

              <div className={`p-4 rounded-lg border-l-4 ${
                isDark ? 'bg-purple-950/20 border-purple-400' : 'bg-cyan-50 border-cyan-400'
              }`}>
                <p className={`font-semibold mb-2 ${isDark ? 'text-purple-300' : 'text-cyan-700'}`}>
                  Exemple concret :
                </p>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Relation d'amitié sur Facebook : si A est ami avec B, alors B est ami avec A.
                </p>
              </div>

              <div className={`mt-4 p-3 rounded-lg ${isDark ? 'bg-slate-900/60' : 'bg-teal-50'}`}>
                <p className={`text-sm font-semibold ${isDark ? 'text-indigo-300' : 'text-teal-700'}`}>
                  Connexe : on peut aller de n'importe quel sommet à n'importe quel autre
                </p>
              </div>
            </div>

            {/* Graphe Orienté */}
            <div className={`p-6 rounded-xl ${isDark ? 'bg-slate-900/40' : 'bg-linear-to-br from-blue-50 to-indigo-50'}`}>
              <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                 Graphe Orienté
              </h3>
              
              <svg className="w-full h-48 mb-4" viewBox="0 0 200 120">
                <defs>
                  <marker id={`arrow-${isDark ? 'dark' : 'light'}`} markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <polygon points="0 0, 10 3, 0 6" fill={isDark ? '#818cf8' : '#14b8a6'} />
                  </marker>
                </defs>
                
                <line x1="50" y1="40" x2="140" y2="40" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="3" markerEnd={`url(#arrow-${isDark ? 'dark' : 'light'})`}/>
                <line x1="50" y1="40" x2="95" y2="80" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="3" markerEnd={`url(#arrow-${isDark ? 'dark' : 'light'})`}/>
                <path d="M 150 45 Q 125 70 105 85" fill="none" stroke={isDark ? '#f87171' : '#fb923c'} strokeWidth="3" markerEnd={`url(#arrow-${isDark ? 'dark' : 'light'})`}/>
                
                <circle cx="50" cy="40" r="12" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                <circle cx="150" cy="40" r="12" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                <circle cx="100" cy="90" r="12" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                
                <text x="50" y="30" textAnchor="middle" className={`text-xs font-bold ${isDark ? 'fill-purple-300' : 'fill-cyan-700'}`}>A</text>
                <text x="150" y="30" textAnchor="middle" className={`text-xs font-bold ${isDark ? 'fill-purple-300' : 'fill-cyan-700'}`}>B</text>
                <text x="100" y="110" textAnchor="middle" className={`text-xs font-bold ${isDark ? 'fill-purple-300' : 'fill-cyan-700'}`}>C</text>
                
                <text x="100" y="30" textAnchor="middle" className={`text-sm ${isDark ? 'fill-purple-300' : 'fill-cyan-600'}`}>A → B</text>
              </svg>

              <div className={`p-4 rounded-lg mb-4 ${isDark ? 'bg-purple-950/20' : 'bg-white'}`}>
                <p className={`font-semibold mb-2 ${isDark ? 'text-purple-300' : 'text-cyan-700'}`}>
                  ✓ Caractéristiques :
                </p>
                <ul className={`space-y-1 text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  <li>• Les arêtes ont un sens (arcs)</li>
                  <li>• A → B ne signifie pas B → A</li>
                  <li>• Relation asymétrique possible</li>
                </ul>
              </div>

              <div className={`p-4 rounded-lg border-l-4 ${
                isDark ? 'bg-purple-950/20 border-purple-400' : 'bg-blue-50 border-blue-400'
              }`}>
                <p className={`font-semibold mb-2 ${isDark ? 'text-purple-300' : 'text-cyan-700'}`}>
                  Exemple concret :
                </p>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Réseau de rues à sens unique : on peut aller de A vers B mais pas forcément de B vers A.
                </p>
              </div>

              <div className={`mt-4 p-3 rounded-lg ${isDark ? 'bg-slate-900/60' : 'bg-indigo-50'}`}>
                <p className={`text-sm font-semibold ${isDark ? 'text-purple-300' : 'text-indigo-700'}`}>
                   Fortement connexe : pour chaque A et B, il existe A → B et B → A
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 5. Graphes Pondérés, Réguliers & Bipartis */}
        <div className={`max-w-6xl mx-auto mb-12 p-8 rounded-2xl border ${
          isDark 
            ? 'bg-linear-to-br from-indigo-950/40 to-purple-950/40 border-indigo-500/20' 
            : 'bg-white border-teal-200/40 shadow-lg'
        }`}>
          <div className="flex items-center gap-3 mb-6">
            <div className={`p-3 rounded-xl ${isDark ? 'bg-indigo-500/20' : 'bg-teal-100'}`}>
              <Network className={isDark ? 'text-indigo-300' : 'text-teal-600'} size={24} />
            </div>
            <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              5. Graphes Pondérés, Réguliers & Bipartis
            </h2>
          </div>

          {/* Graphe Pondéré */}
          <div className="mb-8">
            <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-indigo-300' : 'text-teal-700'}`}>
               Graphe Pondéré
            </h3>
            
            <div className="grid lg:grid-cols-2 gap-6">
              <div>
                <p className={`text-lg mb-4 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  Chaque arête est associée à une valeur numérique appelée <strong>poids</strong>.
                </p>
                
                <div className={`p-4 rounded-lg mb-4 ${isDark ? 'bg-slate-900/40' : 'bg-teal-50'}`}>
                  <p className={`font-semibold mb-2 ${isDark ? 'text-indigo-300' : 'text-teal-700'}`}>
                    Le poids peut représenter :
                  </p>
                  <ul className={`space-y-1 text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    <li>• Distance (km)</li>
                    <li>• Énergie / Coût</li>
                    <li>•  Durée (temps)</li>
                    <li>• Capacité / Charge</li>
                  </ul>
                </div>

                <div className={`p-4 rounded-lg border-l-4 ${
                  isDark ? 'bg-indigo-950/20 border-indigo-400' : 'bg-teal-50 border-teal-400'
                }`}>
                  <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    <strong>Utilisation :</strong> GPS, réseaux logistiques, optimisation de routes
                  </p>
                </div>
              </div>

              <div className={`p-6 rounded-xl ${isDark ? 'bg-slate-900/40' : 'bg-linear-to-br from-teal-50 to-cyan-50'}`}>
                <svg className="w-full h-56" viewBox="0 0 200 140">
                  <line x1="40" y1="40" x2="100" y2="40" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="3"/>
                  <line x1="40" y1="40" x2="160" y2="70" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="3"/>
                  <line x1="100" y1="40" x2="160" y2="70" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="3"/>
                  <line x1="160" y1="70" x2="100" y2="110" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="3"/>
                  
                  <circle cx="40" cy="40" r="12" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                  <circle cx="100" cy="40" r="12" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                  <circle cx="160" cy="70" r="12" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                  <circle cx="100" cy="110" r="12" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                  
                  <text x="40" y="30" textAnchor="middle" className={`text-xs font-bold ${isDark ? 'fill-white' : 'fill-white'}`}>A</text>
                  <text x="100" y="30" textAnchor="middle" className={`text-xs font-bold ${isDark ? 'fill-white' : 'fill-white'}`}>C</text>
                  <text x="160" y="60" textAnchor="middle" className={`text-xs font-bold ${isDark ? 'fill-white' : 'fill-white'}`}>B</text>
                  <text x="100" y="120" textAnchor="middle" className={`text-xs font-bold ${isDark ? 'fill-white' : 'fill-white'}`}>D</text>
                  
                  {/* Poids */}
                  <text x="70" y="30" textAnchor="middle" className={`text-lg font-bold ${isDark ? 'fill-indigo-300' : 'fill-teal-600'}`}>2</text>
                  <text x="90" y="50" textAnchor="middle" className={`text-lg font-bold ${isDark ? 'fill-indigo-300' : 'fill-teal-600'}`}>5</text>
                  <text x="130" y="50" textAnchor="middle" className={`text-lg font-bold ${isDark ? 'fill-indigo-300' : 'fill-teal-600'}`}>4</text>
                  <text x="135" y="95" textAnchor="middle" className={`text-lg font-bold ${isDark ? 'fill-indigo-300' : 'fill-teal-600'}`}>3</text>
                </svg>
              </div>
            </div>
          </div>

          {/* Graphe Régulier */}
          <div className="mb-8">
            <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-indigo-300' : 'text-teal-700'}`}>
              🔷 Graphe k-Régulier
            </h3>
            
            <div className="grid lg:grid-cols-2 gap-6">
              <div className={`p-6 rounded-xl ${isDark ? 'bg-slate-900/40' : 'bg-linear-to-br from-teal-50 to-cyan-50'}`}>
                <svg className="w-full h-56" viewBox="0 0 200 160">
                  {/* Hexagone - 3-régulier */}
                  <line x1="100" y1="30" x2="150" y2="60" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="3"/>
                  <line x1="150" y1="60" x2="150" y2="110" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="3"/>
                  <line x1="150" y1="110" x2="100" y2="140" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="3"/>
                  <line x1="100" y1="140" x2="50" y2="110" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="3"/>
                  <line x1="50" y1="110" x2="50" y2="60" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="3"/>
                  <line x1="50" y1="60" x2="100" y2="30" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="3"/>
                  
                  <circle cx="100" cy="30" r="10" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                  <circle cx="150" cy="60" r="10" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                  <circle cx="150" cy="110" r="10" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                  <circle cx="100" cy="140" r="10" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                  <circle cx="50" cy="110" r="10" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                  <circle cx="50" cy="60" r="10" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                  
                  <text x="100" y="155" textAnchor="middle" className={`text-sm font-semibold ${isDark ? 'fill-indigo-300' : 'fill-teal-600'}`}>Graphe 2-régulier (cycle)</text>
                </svg>
              </div>

              <div>
                <p className={`text-lg mb-4 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  Un graphe est dit <strong>k-régulier</strong> lorsque tous les sommets ont exactement <strong>k arêtes</strong>.
                </p>
                
                <div className={`p-4 rounded-lg ${isDark ? 'bg-slate-900/40' : 'bg-teal-50'}`}>
                  <p className={`font-semibold mb-2 ${isDark ? 'text-indigo-300' : 'text-teal-700'}`}>
                    ✓ Caractéristiques :
                  </p>
                  <ul className={`space-y-1 text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    <li>• Structure parfaitement équilibrée</li>
                    <li>• Chaque sommet a le même degré</li>
                    <li>• Les cycles sont 2-réguliers</li>
                    <li>• Très utilisé en cryptographie</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Graphe Biparti */}
          <div>
            <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-indigo-300' : 'text-teal-700'}`}>
               Graphe Biparti
            </h3>
            
            <div className="grid lg:grid-cols-2 gap-6">
              <div>
                <p className={`text-lg mb-4 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  Sommets séparés en <strong>deux ensembles A et B</strong>, où toutes les arêtes 
                  relient un sommet de A à un sommet de B.
                </p>
                
                <div className={`p-4 rounded-lg ${isDark ? 'bg-slate-900/40' : 'bg-teal-50'}`}>
                  <p className={`font-semibold mb-2 ${isDark ? 'text-indigo-300' : 'text-teal-700'}`}>
                    ✓ Propriétés :
                  </p>
                  <ul className={`space-y-1 text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    <li>• Aucun cycle impair</li>
                    <li>• Deux partitions distinctes</li>
                    <li>• Aucune arête interne aux ensembles</li>
                  </ul>
                </div>

                <div className={`mt-4 p-4 rounded-lg border-l-4 ${
                  isDark ? 'bg-indigo-950/20 border-indigo-400' : 'bg-teal-50 border-teal-400'
                }`}>
                  <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    <strong>Application :</strong> Systèmes d'affectation, matching (emploi-candidat, projet-ressource)
                  </p>
                </div>
              </div>

              <div className={`p-6 rounded-xl ${isDark ? 'bg-slate-900/40' : 'bg-linear-to-br from-teal-50 to-cyan-50'}`}>
                <svg className="w-full h-64" viewBox="0 0 240 180">
                  {/* Ensemble A */}
                  <rect x="20" y="20" width="80" height="140" rx="10" fill="none" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2" strokeDasharray="5,5"/>
                  <text x="60" y="40" textAnchor="middle" className={`text-sm font-bold ${isDark ? 'fill-indigo-300' : 'fill-teal-600'}`}>Ensemble A</text>
                  
                  {/* Ensemble B */}
                  <rect x="140" y="20" width="80" height="140" rx="10" fill="none" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2" strokeDasharray="5,5"/>
                  <text x="180" y="40" textAnchor="middle" className={`text-sm font-bold ${isDark ? 'fill-indigo-300' : 'fill-teal-600'}`}>Ensemble B</text>
                  
                  {/* Arêtes */}
                  <line x1="80" y1="70" x2="160" y2="70" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                  <line x1="80" y1="90" x2="160" y2="100" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                  <line x1="80" y1="110" x2="160" y2="130" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                  <line x1="80" y1="90" x2="160" y2="130" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                  
                  {/* Sommets A */}
                  <circle cx="60" cy="70" r="10" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                  <circle cx="60" cy="90" r="10" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                  <circle cx="60" cy="110" r="10" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                  
                  {/* Sommets B */}
                  <circle cx="180" cy="70" r="10" fill={isDark ? '#a78bfa' : '#5eead4'}/>
                  <circle cx="180" cy="100" r="10" fill={isDark ? '#a78bfa' : '#5eead4'}/>
                  <circle cx="180" cy="130" r="10" fill={isDark ? '#a78bfa' : '#5eead4'}/>
                  
                  <text x="120" y="175" textAnchor="middle" className={`text-sm ${isDark ? 'fill-indigo-300' : 'fill-teal-600'}`}>Arêtes entre A et B uniquement</text>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* 6. Connexité & Planarité */}
        <div className={`max-w-6xl mx-auto mb-12 p-8 rounded-2xl border ${
          isDark 
            ? 'bg-linear-to-br from-purple-950/40 to-indigo-950/40 border-purple-500/20' 
            : 'bg-white border-cyan-200/40 shadow-lg'
        }`}>
          <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            6. Connexité & Planarité
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Connexité */}
            <div>
              <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-purple-300' : 'text-cyan-700'}`}>
                 Connexité
              </h3>
              
              <div className={`p-5 rounded-xl mb-4 ${isDark ? 'bg-slate-900/40' : 'bg-cyan-50'}`}>
                <h4 className={`font-semibold mb-2 ${isDark ? 'text-purple-300' : 'text-cyan-700'}`}>
                  Graphe Connexe
                </h4>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Il existe au moins un chemin entre chaque paire de sommets. Le graphe forme un seul bloc.
                </p>
              </div>

              <div className={`p-5 rounded-xl mb-4 ${isDark ? 'bg-slate-900/40' : 'bg-cyan-50'}`}>
                <h4 className={`font-semibold mb-2 ${isDark ? 'text-purple-300' : 'text-cyan-700'}`}>
                  Graphe Fortement Connexe
                </h4>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  (Graphes orientés) Pour chaque couple de sommets, on peut aller de l'un à l'autre et revenir.
                </p>
              </div>

              <div className={`p-5 rounded-xl ${isDark ? 'bg-slate-900/40' : 'bg-cyan-50'}`}>
                <h4 className={`font-semibold mb-2 ${isDark ? 'text-purple-300' : 'text-cyan-700'}`}>
                  Composante Connexe
                </h4>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Si un graphe n'est pas connexe, il est divisé en plusieurs parties isolées.
                </p>
              </div>
            </div>

            {/* Illustration connexité */}
            <div className={`p-6 rounded-xl ${isDark ? 'bg-slate-900/40' : 'bg-linear-to-br from-cyan-50 to-blue-50'}`}>
              <svg className="w-full h-full" viewBox="0 0 200 220">
                <text x="100" y="20" textAnchor="middle" className={`text-sm font-semibold ${isDark ? 'fill-purple-300' : 'fill-cyan-700'}`}>Graphe Non Connexe</text>
                
                {/* Composante 1 */}
                <line x1="40" y1="60" x2="80" y2="60" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                <line x1="40" y1="60" x2="60" y2="90" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                <line x1="80" y1="60" x2="60" y2="90" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                
                <circle cx="40" cy="60" r="8" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                <circle cx="80" cy="60" r="8" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                <circle cx="60" cy="90" r="8" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                
                <text x="60" y="115" textAnchor="middle" className={`text-xs ${isDark ? 'fill-purple-300' : 'fill-cyan-600'}`}>Composante 1</text>
                
                {/* Composante 2 */}
                <line x1="130" y1="70" x2="170" y2="70" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                
                <circle cx="130" cy="70" r="8" fill={isDark ? '#a78bfa' : '#5eead4'}/>
                <circle cx="170" cy="70" r="8" fill={isDark ? '#a78bfa' : '#5eead4'}/>
                
                <text x="150" y="95" textAnchor="middle" className={`text-xs ${isDark ? 'fill-purple-300' : 'fill-cyan-600'}`}>Composante 2</text>
                
                {/* Séparation */}
                <line x1="100" y1="40" x2="100" y2="120" stroke={isDark ? '#ef4444' : '#f97316'} strokeWidth="2" strokeDasharray="5,5"/>
                <text x="100" y="135" textAnchor="middle" className={`text-xs ${isDark ? 'fill-red-400' : 'fill-orange-600'}`}>Pas de chemin entre</text>
              </svg>
            </div>
          </div>

          {/* Planarité */}
          <div>
            <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-purple-300' : 'text-cyan-700'}`}>
              Planarité & Théorème de Kuratowski
            </h3>
            
            <p className={`text-lg mb-4 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              Un graphe est <strong>planaire</strong> s'il peut être dessiné sur un plan sans croisement d'arêtes.
            </p>

            <div className={`p-6 rounded-xl border-l-4 mb-6 ${
              isDark ? 'bg-purple-950/20 border-purple-400' : 'bg-cyan-50 border-cyan-400'
            }`}>
              <p className={`font-bold mb-2 ${isDark ? 'text-purple-300' : 'text-cyan-700'}`}>
                 Théorème de Kuratowski (1930)
              </p>
              <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Un graphe n'est <strong>pas planaire</strong> s'il contient l'un des deux graphes interdits : 
                <strong> K₅</strong> (graphe complet à 5 sommets) ou <strong>K₃,₃</strong> (graphe biparti 3+3).
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* K5 */}
              <div className={`p-6 rounded-xl ${isDark ? 'bg-slate-900/40' : 'bg-linear-to-br from-red-50 to-orange-50'}`}>
                <h4 className={`text-lg font-semibold mb-3 text-center ${isDark ? 'text-red-400' : 'text-red-600'}`}>
                   K₅ (Non Planaire)
                </h4>
                <svg className="w-full h-48" viewBox="0 0 160 160">
                  {/* Pentagone complet */}
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
                  
                  <text x="80" y="150" textAnchor="middle" className={`text-xs ${isDark ? 'fill-red-400' : 'fill-red-600'}`}>5 sommets tous reliés</text>
                </svg>
              </div>

              {/* K3,3 */}
              <div className={`p-6 rounded-xl ${isDark ? 'bg-slate-900/40' : 'bg-linear-to-br from-red-50 to-orange-50'}`}>
                <h4 className={`text-lg font-semibold mb-3 text-center ${isDark ? 'text-red-400' : 'text-red-600'}`}>
                   K₃,₃ (Non Planaire)
                </h4>
                <svg className="w-full h-48" viewBox="0 0 180 160">
                  {/* 3 maisons, 3 usines */}
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
                  
                  <text x="90" y="155" textAnchor="middle" className={`text-xs ${isDark ? 'fill-red-400' : 'fill-red-600'}`}>3 maisons • 3 usines</text>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* 7-8. Représentations */}
        <div className={`max-w-6xl mx-auto mb-12 p-8 rounded-2xl border ${
          isDark 
            ? 'bg-linear-to-br from-indigo-950/40 to-purple-950/40 border-indigo-500/20' 
            : 'bg-white border-teal-200/40 shadow-lg'
        }`}>
          <div className="flex items-center gap-3 mb-6">
            <div className={`p-3 rounded-xl ${isDark ? 'bg-indigo-500/20' : 'bg-teal-100'}`}>
              <Grid3x3 className={isDark ? 'text-indigo-300' : 'text-teal-600'} size={24} />
            </div>
            <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              7-8. Représentations des Graphes
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Matrice d'adjacence */}
            <div>
              <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-indigo-300' : 'text-teal-700'}`}>
                Matrice d'Adjacence
              </h3>
              
              <p className={`text-lg mb-4 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                Matrice carrée <strong>n × n</strong> où A<sub>ij</sub> indique la présence d'une arête entre i et j.
              </p>

              <div className={`p-6 rounded-xl ${isDark ? 'bg-slate-900/40' : 'bg-teal-50'}`}>
                <div className="grid grid-cols-5 gap-2 mb-4">
                  <div></div>
                  <div className={`text-center font-bold text-sm ${isDark ? 'text-indigo-300' : 'text-teal-700'}`}>A</div>
                  <div className={`text-center font-bold text-sm ${isDark ? 'text-indigo-300' : 'text-teal-700'}`}>B</div>
                  <div className={`text-center font-bold text-sm ${isDark ? 'text-indigo-300' : 'text-teal-700'}`}>C</div>
                  <div className={`text-center font-bold text-sm ${isDark ? 'text-indigo-300' : 'text-teal-700'}`}>D</div>
                  
                  <div className={`text-right font-bold text-sm pr-2 ${isDark ? 'text-indigo-300' : 'text-teal-700'}`}>A</div>
                  <div className={`border-2 text-center p-2 ${isDark ? 'border-indigo-400 text-white bg-slate-800' : 'border-teal-400 text-slate-900 bg-white'}`}>0</div>
                  <div className={`border-2 text-center p-2 ${isDark ? 'border-indigo-400 text-white bg-slate-800' : 'border-teal-400 text-slate-900 bg-white'}`}>1</div>
                  <div className={`border-2 text-center p-2 ${isDark ? 'border-indigo-400 text-white bg-slate-800' : 'border-teal-400 text-slate-900 bg-white'}`}>1</div>
                  <div className={`border-2 text-center p-2 ${isDark ? 'border-indigo-400 text-white bg-slate-800' : 'border-teal-400 text-slate-900 bg-white'}`}>0</div>
                  
                  <div className={`text-right font-bold text-sm pr-2 ${isDark ? 'text-indigo-300' : 'text-teal-700'}`}>B</div>
                  <div className={`border-2 text-center p-2 ${isDark ? 'border-indigo-400 text-white bg-slate-800' : 'border-teal-400 text-slate-900 bg-white'}`}>1</div>
                  <div className={`border-2 text-center p-2 ${isDark ? 'border-indigo-400 text-white bg-slate-800' : 'border-teal-400 text-slate-900 bg-white'}`}>0</div>
                  <div className={`border-2 text-center p-2 ${isDark ? 'border-indigo-400 text-white bg-slate-800' : 'border-teal-400 text-slate-900 bg-white'}`}>1</div>
                  <div className={`border-2 text-center p-2 ${isDark ? 'border-indigo-400 text-white bg-slate-800' : 'border-teal-400 text-slate-900 bg-white'}`}>0</div>
                  
                  <div className={`text-right font-bold text-sm pr-2 ${isDark ? 'text-indigo-300' : 'text-teal-700'}`}>C</div>
                  <div className={`border-2 text-center p-2 ${isDark ? 'border-indigo-400 text-white bg-slate-800' : 'border-teal-400 text-slate-900 bg-white'}`}>1</div>
                  <div className={`border-2 text-center p-2 ${isDark ? 'border-indigo-400 text-white bg-slate-800' : 'border-teal-400 text-slate-900 bg-white'}`}>1</div>
                  <div className={`border-2 text-center p-2 ${isDark ? 'border-indigo-400 text-white bg-slate-800' : 'border-teal-400 text-slate-900 bg-white'}`}>0</div>
                  <div className={`border-2 text-center p-2 ${isDark ? 'border-indigo-400 text-white bg-slate-800' : 'border-teal-400 text-slate-900 bg-white'}`}>1</div>
                  
                  <div className={`text-right font-bold text-sm pr-2 ${isDark ? 'text-indigo-300' : 'text-teal-700'}`}>D</div>
                  <div className={`border-2 text-center p-2 ${isDark ? 'border-indigo-400 text-white bg-slate-800' : 'border-teal-400 text-slate-900 bg-white'}`}>0</div>
                  <div className={`border-2 text-center p-2 ${isDark ? 'border-indigo-400 text-white bg-slate-800' : 'border-teal-400 text-slate-900 bg-white'}`}>0</div>
                  <div className={`border-2 text-center p-2 ${isDark ? 'border-indigo-400 text-white bg-slate-800' : 'border-teal-400 text-slate-900 bg-white'}`}>1</div>
                  <div className={`border-2 text-center p-2 ${isDark ? 'border-indigo-400 text-white bg-slate-800' : 'border-teal-400 text-slate-900 bg-white'}`}>0</div>
                </div>

                <div className={`p-3 rounded-lg ${isDark ? 'bg-indigo-950/40' : 'bg-white'}`}>
                  <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    <strong>Complexité spatiale :</strong> O(V²) • <strong>Accès :</strong> O(1)
                  </p>
                </div>
              </div>
            </div>

            {/* Liste d'adjacence */}
            <div>
              <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-indigo-300' : 'text-teal-700'}`}>
                Liste d'Adjacence
              </h3>
              
              <p className={`text-lg mb-4 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                Pour chaque sommet, liste des sommets voisins auxquels il est relié.
              </p>

              <div className={`p-6 rounded-xl ${isDark ? 'bg-slate-900/40' : 'bg-teal-50'}`}>
                <div className="space-y-3 mb-4">
                  {[
                    { vertex: 'A', neighbors: ['B', 'C'] },
                    { vertex: 'B', neighbors: ['A', 'C'] },
                    { vertex: 'C', neighbors: ['A', 'B', 'D'] },
                    { vertex: 'D', neighbors: ['C'] }
                  ].map((item, i) => (
                    <div key={i} className={`flex items-center gap-3 p-3 rounded-lg ${
                      isDark ? 'bg-slate-800' : 'bg-white border border-teal-200'
                    }`}>
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${
                        isDark ? 'bg-indigo-600 text-white' : 'bg-teal-500 text-white'
                      }`}>
                        {item.vertex}
                      </div>
                      <div className="flex-1">
                        <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>→</span>
                        <span className={`ml-2 font-mono ${isDark ? 'text-white' : 'text-slate-900'}`}>
                          [{item.neighbors.join(', ')}]
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className={`p-3 rounded-lg ${isDark ? 'bg-indigo-950/40' : 'bg-white'}`}>
                  <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    <strong>Complexité spatiale :</strong> O(V + E) • <strong>Idéal pour :</strong> graphes clairsemés
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tableau comparatif */}
          <div className={`mt-8 p-6 rounded-xl ${isDark ? 'bg-slate-900/40' : 'bg-linear-to-br from-teal-50 to-cyan-50'}`}>
            <h4 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Comparaison Synthétique
            </h4>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className={isDark ? 'border-b border-indigo-500/30' : 'border-b-2 border-teal-300'}>
                    <th className={`p-3 text-left ${isDark ? 'text-indigo-300' : 'text-teal-700'}`}>Critère</th>
                    <th className={`p-3 text-left ${isDark ? 'text-indigo-300' : 'text-teal-700'}`}>Matrice</th>
                    <th className={`p-3 text-left ${isDark ? 'text-indigo-300' : 'text-teal-700'}`}>Liste</th>
                  </tr>
                </thead>
                <tbody className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                  <tr className={isDark ? 'border-b border-slate-700' : 'border-b border-teal-200'}>
                    <td className="p-3 font-semibold">Mémoire</td>
                    <td className="p-3">O(V²)</td>
                    <td className="p-3">O(V + E)</td>
                  </tr>
                  <tr className={isDark ? 'border-b border-slate-700' : 'border-b border-teal-200'}>
                    <td className="p-3 font-semibold">Vérifier arête</td>
                    <td className="p-3">O(1)</td>
                    <td className="p-3">O(degré)</td>
                  </tr>
                  <tr className={isDark ? 'border-b border-slate-700' : 'border-b border-teal-200'}>
                    <td className="p-3 font-semibold">Lister voisins</td>
                    <td className="p-3">O(V)</td>
                    <td className="p-3">O(1)</td>
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
        </div>
      </div>
    </div>
  );
}