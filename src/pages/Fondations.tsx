import { useTheme } from "../Context/ThemeContext"
import { Book, Users, Calendar } from 'lucide-react';

export default function FondationsPage() {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-700 ${
      isDark 
        ? 'bg-linear-to-br from-slate-950 via-slate-900 to-indigo-950' 
        : 'bg-[#F8F8FA]'
    }`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@200;400;600;700&family=JetBrains+Mono:wght@400;600&display=swap');
        
        * {
          font-family: 'Crimson Pro', serif;
        }
        
        .mono {
          font-family: 'JetBrains Mono', monospace;
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        @keyframes draw-path {
          from { stroke-dashoffset: 1000; }
          to { stroke-dashoffset: 0; }
        }

        .animate-draw {
          stroke-dasharray: 1000;
          animation: draw-path 2s ease-out forwards;
        }
      `}</style>

      {/* Header */}
      <div className="relative container mx-auto px-6 py-15">
       

        {/* Title Section */}
        <div className="max-w-6xl mx-auto mb-12">
         
          <h1 className={`text-4xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Fondations Théoriques
          </h1>
          <p className={`text-xl ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
            Les bases essentielles de la théorie des graphes : définitions, histoire et terminologie fondamentale
          </p>
        </div>

        {/* 1. Introduction Générale */}
        <div className={`max-w-6xl mx-auto mb-12 p-8 rounded-2xl border ${
          isDark 
            ? 'bg-linear-to-br from-indigo-950/40 to-purple-950/40 border-indigo-500/20' 
            : 'bg-white border-teal-200/40 shadow-lg'
        }`}>
          <div className="flex items-center gap-3 mb-6">
            <div className={`p-3 rounded-xl ${isDark ? 'bg-indigo-500/20' : 'bg-teal-100'}`}>
              <Book className={isDark ? 'text-indigo-300' : 'text-teal-600'} size={24} />
            </div>
            <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              1. Introduction Générale
            </h2>
          </div>

          {/* Concept de graphe */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Concept de Graphe
              </h3>
              <p className={`text-lg mb-4 leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                Un graphe est une structure composée d'un ensemble de <strong>sommets</strong> (ou nœuds) 
                et d'un ensemble d'<strong>arêtes</strong> (ou arcs) qui relient ces sommets.
              </p>
              <div className={`p-4 rounded-xl ${isDark ? 'bg-slate-900/40' : 'bg-teal-50'}`}>
                <p className={`font-semibold mb-2 ${isDark ? 'text-indigo-300' : 'text-teal-700'}`}>
                  Exemple concret :
                </p>
                <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                  Un réseau de transport où les <strong>gares</strong> sont les sommets 
                  et les <strong>lignes ferroviaires</strong> les arêtes.
                </p>
              </div>
            </div>

            {/* Illustration graphe simple */}
            <div className={`p-6 rounded-xl ${isDark ? 'bg-slate-900/40' : 'bg-linear-to-br from-teal-50 to-cyan-50'}`}>
              <svg className="w-full h-64" viewBox="0 0 200 160">
                {/* Arêtes */}
                <line x1="50" y1="50" x2="100" y2="30" className="animate-draw" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="3"/>
                <line x1="100" y1="30" x2="150" y2="50" className="animate-draw" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="3" style={{animationDelay: '0.2s'}}/>
                <line x1="50" y1="50" x2="70" y2="100" className="animate-draw" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="3" style={{animationDelay: '0.4s'}}/>
                <line x1="150" y1="50" x2="130" y2="100" className="animate-draw" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="3" style={{animationDelay: '0.6s'}}/>
                <line x1="70" y1="100" x2="130" y2="100" className="animate-draw" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="3" style={{animationDelay: '0.8s'}}/>
                
                {/* Sommets */}
                <circle cx="50" cy="50" r="12" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                <circle cx="100" cy="30" r="12" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                <circle cx="150" cy="50" r="12" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                <circle cx="70" cy="100" r="12" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                <circle cx="130" cy="100" r="12" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                
                {/* Labels */}
                <text x="50" y="40" textAnchor="middle" className={`text-xs font-bold ${isDark ? 'fill-white' : 'fill-white'}`}>A</text>
                <text x="100" y="20" textAnchor="middle" className={`text-xs font-bold ${isDark ? 'fill-white' : 'fill-white'}`}>B</text>
                <text x="150" y="40" textAnchor="middle" className={`text-xs font-bold ${isDark ? 'fill-white' : 'fill-white'}`}>C</text>
                <text x="70" y="90" textAnchor="middle" className={`text-xs font-bold ${isDark ? 'fill-white' : 'fill-white'}`}>D</text>
                <text x="130" y="90" textAnchor="middle" className={`text-xs font-bold ${isDark ? 'fill-white' : 'fill-white'}`}>E</text>

                {/* Annotations */}
                <text x="100" y="135" textAnchor="middle" className={`text-sm ${isDark ? 'fill-indigo-300' : 'fill-teal-600'}`}>Sommets (nœuds)</text>
                <text x="100" y="150" textAnchor="middle" className={`text-sm ${isDark ? 'fill-indigo-300' : 'fill-teal-600'}`}>Arêtes (connexions)</text>
              </svg>
            </div>
          </div>

          {/* Place et rôle */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className={`p-5 rounded-xl ${isDark ? 'bg-slate-900/40' : 'bg-white border border-teal-200'}`}>
              <h4 className={`font-semibold mb-3 ${isDark ? 'text-indigo-300' : 'text-teal-700'}`}>
                 Mathématiques discrètes
              </h4>
              <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Les graphes traitent d'objets finis et dénombrables, liés à la combinatoire et la logique.
              </p>
            </div>
            
            <div className={`p-5 rounded-xl ${isDark ? 'bg-slate-900/40' : 'bg-white border border-teal-200'}`}>
              <h4 className={`font-semibold mb-3 ${isDark ? 'text-indigo-300' : 'text-teal-700'}`}>
                 Systèmes modernes
              </h4>
              <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Réseaux sociaux, Internet, circuits électroniques, bases de données, transports.
              </p>
            </div>

            <div className={`p-5 rounded-xl ${isDark ? 'bg-slate-900/40' : 'bg-white border border-teal-200'}`}>
              <h4 className={`font-semibold mb-3 ${isDark ? 'text-indigo-300' : 'text-teal-700'}`}>
                 Recherche opérationnelle
              </h4>
              <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Modélisation et résolution de problèmes complexes d'optimisation.
              </p>
            </div>
          </div>
        </div>

        {/* 2. Historique & Évolution */}
        <div className={`max-w-6xl mx-auto mb-12 p-8 rounded-2xl border ${
          isDark 
            ? 'bg-linear-to-br from-purple-950/40 to-indigo-950/40 border-purple-500/20' 
            : 'bg-white border-cyan-200/40 shadow-lg'
        }`}>
          <div className="flex items-center gap-3 mb-6">
            <div className={`p-3 rounded-xl ${isDark ? 'bg-purple-500/20' : 'bg-cyan-100'}`}>
              <Calendar className={isDark ? 'text-purple-300' : 'text-cyan-600'} size={24} />
            </div>
            <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              2. Historique & Évolution
            </h2>
          </div>

          {/* Euler et les ponts de Königsberg */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className={`px-4 py-2 rounded-lg ${isDark ? 'bg-purple-950/40' : 'bg-cyan-50'}`}>
                <span className={`mono text-sm font-bold ${isDark ? 'text-purple-300' : 'text-cyan-700'}`}>
                  1736
                </span>
              </div>
              <h3 className={`text-2xl font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Euler et le Problème des Ponts
              </h3>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <p className={`text-lg mb-4 leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  À <strong>Königsberg</strong>, sept ponts reliaient quatre parties de la ville. 
                  Les habitants voulaient savoir s'il était possible de <strong>traverser tous les ponts une seule fois</strong>.
                </p>
                <p className={`text-lg mb-4 leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  <strong>Leonhard Euler</strong> transforme chaque quartier en point et chaque pont en ligne. 
                  Il démontre que pour faire un tel trajet, chaque point doit avoir un <strong>nombre pair de lignes</strong>.
                </p>
                <div className={`p-4 rounded-xl border-l-4 ${
                  isDark ? 'bg-purple-950/20 border-purple-400' : 'bg-cyan-50 border-cyan-400'
                }`}>
                  <p className={`font-semibold ${isDark ? 'text-purple-300' : 'text-teal-700'}`}>
                    Résultat :
                  </p>
                  <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                    À Königsberg, ce n'était pas le cas, donc le parcours est impossible. 
                    Cette approche marque la <strong>naissance de la théorie des graphes</strong>.
                  </p>
                </div>
              </div>

              {/* Illustration des ponts */}
              <div className={`p-6 rounded-xl ${isDark ? 'bg-slate-900/40' : 'bg-linear-to-br from-cyan-50 to-blue-50'}`}>
                <svg className="w-full h-80" viewBox="0 0 240 200">
                  {/* Rivière */}
                  <path d="M 0 80 Q 60 70 120 80 T 240 80" fill="none" stroke={isDark ? '#1e293b' : '#94a3b8'} strokeWidth="40" opacity="0.3"/>
                  <path d="M 0 120 Q 60 130 120 120 T 240 120" fill="none" stroke={isDark ? '#1e293b' : '#94a3b8'} strokeWidth="40" opacity="0.3"/>
                  
                  {/* Île centrale */}
                  <ellipse cx="120" cy="100" rx="35" ry="25" fill={isDark ? '#4f46e5' : '#14b8a6'} opacity="0.4"/>
                  <text x="120" y="105" textAnchor="middle" className={`text-sm font-bold ${isDark ? 'fill-indigo-200' : 'fill-teal-700'}`}>Île</text>
                  
                  {/* Ponts */}
                  <line x1="85" y1="100" x2="40" y2="60" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="4"/>
                  <line x1="85" y1="100" x2="40" y2="140" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="4"/>
                  <line x1="155" y1="100" x2="200" y2="60" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="4"/>
                  <line x1="155" y1="100" x2="200" y2="140" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="4"/>
                  <line x1="120" y1="75" x2="120" y2="30" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="4"/>
                  <line x1="120" y1="125" x2="120" y2="170" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="4"/>
                  <line x1="100" y1="90" x2="60" y2="100" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="4"/>
                  
                  {/* Zones terrestres */}
                  <circle cx="40" cy="60" r="15" fill={isDark ? '#6366f1' : '#14b8a6'} opacity="0.6"/>
                  <circle cx="40" cy="140" r="15" fill={isDark ? '#6366f1' : '#14b8a6'} opacity="0.6"/>
                  <circle cx="200" cy="60" r="15" fill={isDark ? '#6366f1' : '#14b8a6'} opacity="0.6"/>
                  <circle cx="200" cy="140" r="15" fill={isDark ? '#6366f1' : '#14b8a6'} opacity="0.6"/>
                  <circle cx="120" cy="30" r="15" fill={isDark ? '#6366f1' : '#14b8a6'} opacity="0.6"/>
                  <circle cx="120" cy="170" r="15" fill={isDark ? '#6366f1' : '#14b8a6'} opacity="0.6"/>
                  <circle cx="60" cy="100" r="15" fill={isDark ? '#6366f1' : '#14b8a6'} opacity="0.6"/>
                  
                  <text x="120" y="195" textAnchor="middle" className={`text-sm ${isDark ? 'fill-purple-300' : 'fill-cyan-600'}`}>7 ponts • 4 zones terrestres</text>
                </svg>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className={`p-6 rounded-xl ${isDark ? 'bg-slate-900/40' : 'bg-linear-to-r from-cyan-50 to-blue-50'}`}>
            <h4 className={`text-xl font-semibold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
               Développements Essentiels à Travers les Siècles
            </h4>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className={`px-3 py-1 rounded-lg h-fit ${isDark ? 'bg-purple-950/40' : 'bg-cyan-100'}`}>
                  <span className={`mono text-sm font-bold ${isDark ? 'text-purple-300' : 'text-cyan-700'}`}>
                    XIXe
                  </span>
                </div>
                <div>
                  <p className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                    <strong>Kirchhoff</strong> utilise les graphes pour analyser les circuits électriques. 
                    <strong> Cayley</strong> étudie les arbres en chimie.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className={`px-3 py-1 rounded-lg h-fit ${isDark ? 'bg-purple-950/40' : 'bg-cyan-100'}`}>
                  <span className={`mono text-sm font-bold ${isDark ? 'text-purple-300' : 'text-cyan-700'}`}>
                    XXe
                  </span>
                </div>
                <div>
                  <p className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                    La théorie se structure : graphes planaires, bipartis, cycles, coloriage, connexité. 
                    Algorithmes de <strong>Dijkstra, Kruskal, Prim</strong>.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className={`px-3 py-1 rounded-lg h-fit ${isDark ? 'bg-purple-950/40' : 'bg-cyan-100'}`}>
                  <span className={`mono text-sm font-bold ${isDark ? 'text-purple-300' : 'text-cyan-700'}`}>
                    Aujourd'hui
                  </span>
                </div>
                <div>
                  <p className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                    Omniprésents en algorithmique, réseaux, cybersécurité, biologie, IA, 
                    systèmes de recommandation, et optimisation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Terminologie de Base */}
        <div className={`max-w-6xl mx-auto mb-12 p-8 rounded-2xl border ${
          isDark 
            ? 'bg-linear-to-br from-indigo-950/40 to-purple-950/40 border-indigo-500/20' 
            : 'bg-white border-teal-200/40 shadow-lg'
        }`}>
          <div className="flex items-center gap-3 mb-6">
            <div className={`p-3 rounded-xl ${isDark ? 'bg-indigo-500/20' : 'bg-teal-100'}`}>
              <Users className={isDark ? 'text-indigo-300' : 'text-teal-600'} size={24} />
            </div>
            <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              3. Terminologie de Base
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                term: 'Sommet (Nœud)',
                def: 'Élément de base du graphe (ville, utilisateur, serveur)',
                icon: '⬤'
              },
              {
                term: 'Arête (Arc)',
                def: 'Lien entre deux sommets',
                icon: '─'
              },
              {
                term: 'Chemin',
                def: 'Suite de sommets reliés par des arêtes',
                icon: '↝'
              },
              {
                term: 'Cycle',
                def: 'Chemin qui revient à son point de départ',
                icon: '⭮'
              },
              {
                term: 'Boucle',
                def: 'Arête reliant un sommet à lui-même',
                icon: '↻'
              },
              {
                term: 'Multigraphe',
                def: 'Plusieurs arêtes possibles entre deux sommets',
                icon: '⫸'
              },
              {
                term: 'Graphe Simple',
                def: 'Pas de boucle ni d\'arêtes multiples',
                icon: '◇'
              },
              {
                term: 'Degré',
                def: 'Nombre d\'arêtes connectées à un sommet',
                icon: '#'
              }
            ].map((item, i) => (
              <div key={i} className={`p-5 rounded-xl border ${
                isDark ? 'bg-slate-900/40 border-indigo-500/20' : 'bg-teal-50 border-teal-200'
              }`}>
                <div className="flex items-start gap-4">
                  <div className={`text-3xl ${isDark ? 'text-indigo-400' : 'text-teal-600'}`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className={`font-semibold mb-2 ${isDark ? 'text-indigo-300' : 'text-teal-700'}`}>
                      {item.term}
                    </h4>
                    <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      {item.def}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Illustration terminologie */}
          <div className={`mt-8 p-6 rounded-xl ${isDark ? 'bg-slate-900/40' : 'bg-linear-to-br from-teal-50 to-cyan-50'}`}>
            <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Illustration des Concepts
            </h4>
            <svg className="w-full h-64" viewBox="0 0 300 160">
              {/* Graphe simple */}
              <g>
                <text x="50" y="20" className={`text-sm font-semibold ${isDark ? 'fill-indigo-300' : 'fill-teal-700'}`}>Graphe Simple</text>
                <line x1="30" y1="50" x2="70" y2="50" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                <circle cx="30" cy="50" r="8" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                <circle cx="70" cy="50" r="8" fill={isDark ? '#6366f1' : '#14b8a6'}/>
              </g>

              {/* Boucle */}
              <g>
                <text x="120" y="20" className={`text-sm font-semibold ${isDark ? 'fill-indigo-300' : 'fill-teal-700'}`}>Boucle</text>
                <circle cx="150" cy="60" r="15" fill="none" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                <circle cx="150" cy="50" r="8" fill={isDark ? '#6366f1' : '#14b8a6'}/>
              </g>

              {/* Multigraphe */}
              <g>
                <text x="210" y="20" className={`text-sm font-semibold ${isDark ? 'fill-indigo-300' : 'fill-teal-700'}`}>Multigraphe</text>
                <path d="M 230 50 Q 250 40 270 50" fill="none" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                <path d="M 230 50 Q 250 60 270 50" fill="none" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                <circle cx="230" cy="50" r="8" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                <circle cx="270" cy="50" r="8" fill={isDark ? '#6366f1' : '#14b8a6'}/>
              </g>

              {/* Cycle */}
              <g>
                <text x="40" y="110" className={`text-sm font-semibold ${isDark ? 'fill-indigo-300' : 'fill-teal-700'}`}>Cycle</text>
                <path d="M 40 130 L 60 120 L 80 130 L 60 145 Z" fill="none" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                <circle cx="40" cy="130" r="6" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                <circle cx="60" cy="120" r="6" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                <circle cx="80" cy="130" r="6" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                <circle cx="60" cy="145" r="6" fill={isDark ? '#6366f1' : '#14b8a6'}/>
              </g>

              {/* Chemin */}
              <g>
                <text x="140" y="110" className={`text-sm font-semibold ${isDark ? 'fill-indigo-300' : 'fill-teal-700'}`}>Chemin</text>
                <line x1="130" y1="130" x2="160" y2="130" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                <line x1="160" y1="130" x2="190" y2="145" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                <circle cx="130" cy="130" r="6" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                <circle cx="160" cy="130" r="6" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                <circle cx="190" cy="145" r="6" fill={isDark ? '#6366f1' : '#14b8a6'}/>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}