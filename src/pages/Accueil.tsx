import  { useState, useEffect } from 'react';
import {  GitBranch, Network, Share2, TrendingUp } from 'lucide-react';
import { useTheme } from "../Context/ThemeContext"

export default function GraphTheoryLanding() {
  const { isDark } = useTheme();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const nodes = [
    { id: 1, x: 20, y: 30, delay: 0 },
    { id: 2, x: 45, y: 15, delay: 0.1 },
    { id: 3, x: 70, y: 25, delay: 0.2 },
    { id: 4, x: 35, y: 60, delay: 0.3 },
    { id: 5, x: 60, y: 70, delay: 0.4 },
    { id: 6, x: 80, y: 55, delay: 0.5 },
  ];

  const edges = [
    { from: 1, to: 2 },
    { from: 2, to: 3 },
    { from: 1, to: 4 },
    { from: 4, to: 5 },
    { from: 3, to: 6 },
    { from: 5, to: 6 },
    { from: 2, to: 4 },
  ];

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

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }

        @keyframes draw-line {
          from { stroke-dashoffset: 1000; }
          to { stroke-dashoffset: 0; }
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

        .graph-node {
          animation: pulse-glow 3s ease-in-out infinite;
        }

        .graph-edge {
          stroke-dasharray: 1000;
          animation: draw-line 2s ease-out forwards;
        }

        .feature-card {
          backdrop-filter: blur(20px);
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .feature-card:hover {
          transform: translateY(-8px) scale(1.02);
        }

        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .gradient-text-light {
          background: linear-gradient(135deg, #14b8a6 0%, #0d9488 50%, #0f766e 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      {/* Animated background grid */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className={`absolute inset-0 ${isDark ? 'bg-slate-900' : 'bg-teal-100'}`} 
             style={{
               backgroundImage: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, ${isDark ? 'rgba(99, 102, 241, 0.15)' : 'rgba(20, 184, 166, 0.2)'}, transparent 50%)`,
             }}
        />
      </div>

      {/* Theme Toggle */}
    

      <div className="relative container mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:flex lg:justify-between gap-16 my-auto mb-32">
            <div className="space-y-8">
            
              
              <h1 className="animate-fade-in-up" style={{ animationDelay: '0.15s', opacity: 0 }}>
                <span className={`block text-3xl lg:text-6xl font-bold leading-none mb-2 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  Théorie
                </span>
                <span className={`block text-3xl lg:text-6xl font-bold leading-none ${
                  isDark ? 'gradient-text' : 'gradient-text-light'
                }`}>
                  des Graphes
                </span>
              </h1>

              <p className={`text-sm lg:text-xl font-light leading-relaxed animate-fade-in-up ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`} style={{ animationDelay: '0.3s', opacity: 0 }}>
              Un graphe est une structure mathématique composée de sommets reliés par des arêtes, utilisée pour représenter des relations entre objets. En recherche opérationnelle, il sert à modéliser et optimiser des réseaux complexes comme le transport, la logistique ou les communications, mettant en lumière la logique des relations qui structurent les systèmes et facilitant la compréhension de leur organisation.
              </p>

              <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.45s', opacity: 0 }}>
               
                <a href='/theoriesDesGraphes.pdf' target='_bank' className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 backdrop-blur-sm ${
                  isDark 
                    ? 'border-2 border-indigo-400/50 text-indigo-300 hover:bg-indigo-500/10' 
                    : 'border-2 border-teal-500/50 text-teal-700 hover:bg-teal-500/10'
                }`}>
                 Télécharger le pdf
                </a>
              </div>
            </div>

            {/* Interactive Graph Visualization */}
            <div className="relative animate-fade-in-up w-[130%] h-[130%]" style={{ animationDelay: '0.6s', opacity: 0 }}>
              <div className={`relative  aspect-square rounded-3xl  ${
                isDark 
                  ? 'bg-linear-to-br from-indigo-950/50 to-purple-950/50 border border-indigo-500/20' 
                  : 'bg-linear-to-br from-teal-100/50 to-cyan-100/50 border border-teal-300/40'
              } backdrop-blur-xl shadow-2xl`}>
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  {/* Edges */}
                  <g className="graph-edges">
                    {edges.map((edge, i) => {
                      const from = nodes.find(n => n.id === edge.from)!;
                      const to = nodes.find(n => n.id === edge.to)!;
                      return (
                        <line
                          key={i}
                          x1={from.x}
                          y1={from.y}
                          x2={to.x}
                          y2={to.y}
                          className="graph-edge"
                          stroke={isDark ? '#818cf8' : '#14b8a6'}
                          strokeWidth="0.5"
                          opacity="0.6"
                          style={{ animationDelay: `${i * 0.15}s` }}
                        />
                      );
                    })}
                  </g>
                  
                  {/* Nodes */}
                  <g className="graph-nodes">
                    {nodes.map((node) => (
                      <g key={node.id} style={{ animationDelay: `${node.delay}s` }}>
                        <circle
                          cx={node.x}
                          cy={node.y}
                          r="4"
                          className="graph-node"
                          fill={isDark ? '#6366f1' : '#14b8a6'}
                          opacity="0.3"
                        />
                        <circle
                          cx={node.x}
                          cy={node.y}
                          r="2"
                          fill={isDark ? '#a5b4fc' : '#5eead4'}
                        />
                      </g>
                    ))}
                  </g>
                </svg>
              </div>
              
              {/* Floating decorative elements */}
              <div className={`absolute -top-6 -right-6 w-32 h-32 rounded-full blur-3xl ${
                isDark ? 'bg-purple-600/30' : 'bg-cyan-400/30'
              }`} style={{ animation: 'float 6s ease-in-out infinite' }} />
              <div className={`absolute -bottom-6 -left-6 w-40 h-40 rounded-full blur-3xl ${
                isDark ? 'bg-indigo-600/30' : 'bg-teal-400/30'
              }`} style={{ animation: 'float 8s ease-in-out infinite', animationDelay: '1s' }} />
            </div>
          </div>

          {/* Features Grid - Basé sur le plan de travail */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              { icon: Network, title: 'Fondations', desc: 'Concepts, terminologie et structures de base', part: 'PARTIE I' },
              { icon: GitBranch, title: 'Typologie', desc: 'Graphes orientés, pondérés et bipartis', part: 'PARTIE II' },
              { icon: Share2, title: 'Propriétés', desc: 'Métriques, cycles et théorèmes essentiels', part: 'PARTIE III' },
              { icon: TrendingUp, title: 'Algorithmique', desc: 'BFS, DFS et algorithmes d\'optimisation', part: 'PARTIE IV' },
            ].map((feature, i) => (
              <div
                key={i}
                className={`feature-card p-8 rounded-2xl border ${
                  isDark 
                    ? 'bg-slate-900/40 border-indigo-500/20 hover:border-indigo-400/40' 
                    : 'bg-white/40 border-teal-300/30 hover:border-teal-400/50'
                } animate-fade-in-up`}
                style={{ animationDelay: `${0.8 + i * 0.1}s`, opacity: 0 }}
              >
                <div className={`inline-flex p-4 rounded-xl mb-4 ${
                  isDark ? 'bg-indigo-500/20' : 'bg-teal-400/20'
                }`}>
                  <feature.icon size={28} className={isDark ? 'text-indigo-300' : 'text-teal-600'} />
                </div>
                <div className={`mono text-xs tracking-widest uppercase mb-2 ${
                  isDark ? 'text-indigo-400' : 'text-teal-600'
                }`}>
                  {feature.part}
                </div>
                <h3 className={`text-2xl font-semibold mb-3 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  {feature.title}
                </h3>
                <p className={`leading-relaxed ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          {/* PARTIE I - Fondations Théoriques */}
          <div className={`mb-16 p-10 rounded-3xl border backdrop-blur-xl animate-fade-in-up ${
            isDark 
              ? 'bg-linear-to-br from-indigo-950/30 to-purple-950/30 border-indigo-500/20' 
              : 'bg-linear-to-br from-teal-50/50 to-cyan-50/50 border-teal-300/30'
          }`} style={{ animationDelay: '0.9s', opacity: 0 }}>
            <div className={`mono text-xs tracking-widest uppercase mb-6 ${
              isDark ? 'text-indigo-400' : 'text-teal-600'
            }`}>
              PARTIE I • FONDATIONS THÉORIQUES
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Introduction générale */}
              <div className={`p-6 rounded-2xl ${isDark ? 'bg-slate-900/30' : 'bg-white/40'}`}>
                <h4 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  1. Introduction Générale
                </h4>
                <div className="mb-4">
                  <svg className="w-full h-32" viewBox="0 0 120 80">
                    {/* Graphe simple */}
                    <circle cx="30" cy="40" r="8" fill={isDark ? '#6366f1' : '#14b8a6'} opacity="0.6"/>
                    <circle cx="90" cy="40" r="8" fill={isDark ? '#6366f1' : '#14b8a6'} opacity="0.6"/>
                    <circle cx="60" cy="20" r="8" fill={isDark ? '#6366f1' : '#14b8a6'} opacity="0.6"/>
                    <circle cx="60" cy="60" r="8" fill={isDark ? '#6366f1' : '#14b8a6'} opacity="0.6"/>
                    <line x1="30" y1="40" x2="60" y2="20" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                    <line x1="30" y1="40" x2="60" y2="60" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                    <line x1="90" y1="40" x2="60" y2="20" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                    <line x1="90" y1="40" x2="60" y2="60" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                  </svg>
                </div>
                <ul className={`text-sm space-y-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  <li>• Concept de graphe</li>
                  <li>• Place en mathématiques</li>
                  <li>• Systèmes modernes</li>
                </ul>
              </div>

              {/* Historique */}
              <div className={`p-6 rounded-2xl ${isDark ? 'bg-slate-900/30' : 'bg-white/40'}`}>
                <h4 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  2. Historique & Évolution
                </h4>
                <div className="mb-4">
                  <svg className="w-full h-32" viewBox="0 0 200 80">
                    {/* Ponts de Königsberg simplifié */}
                    <ellipse cx="100" cy="40" rx="25" ry="18" fill={isDark ? '#4f46e5' : '#14b8a6'} opacity="0.3"/>
                    <line x1="75" y1="40" x2="35" y2="20" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="3"/>
                    <line x1="75" y1="40" x2="35" y2="60" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="3"/>
                    <line x1="125" y1="40" x2="165" y2="20" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="3"/>
                    <line x1="125" y1="40" x2="165" y2="60" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="3"/>
                    <circle cx="35" cy="20" r="10" fill={isDark ? '#6366f1' : '#14b8a6'} opacity="0.5"/>
                    <circle cx="35" cy="60" r="10" fill={isDark ? '#6366f1' : '#14b8a6'} opacity="0.5"/>
                    <circle cx="165" cy="20" r="10" fill={isDark ? '#6366f1' : '#14b8a6'} opacity="0.5"/>
                    <circle cx="165" cy="60" r="10" fill={isDark ? '#6366f1' : '#14b8a6'} opacity="0.5"/>
                    <text x="100" y="75" textAnchor="middle" className={`text-xs ${isDark ? 'fill-indigo-300' : 'fill-teal-600'}`}>1736</text>
                  </svg>
                </div>
                <ul className={`text-sm space-y-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  <li>• Euler et les ponts</li>
                  <li>• Développements essentiels</li>
                  <li>• Influence algorithmique</li>
                </ul>
              </div>

              {/* Terminologie */}
              <div className={`p-6 rounded-2xl ${isDark ? 'bg-slate-900/30' : 'bg-white/40'}`}>
                <h4 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  3. Terminologie de Base
                </h4>
                <div className="mb-4">
                  <svg className="w-full h-32" viewBox="0 0 120 80">
                    {/* Graphe avec labels */}
                    <line x1="30" y1="30" x2="90" y2="30" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                    <line x1="30" y1="30" x2="60" y2="60" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                    <line x1="90" y1="30" x2="60" y2="60" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                    <circle cx="30" cy="30" r="8" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                    <circle cx="90" cy="30" r="8" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                    <circle cx="60" cy="60" r="8" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                    <text x="30" y="20" textAnchor="middle" className={`text-xs ${isDark ? 'fill-indigo-300' : 'fill-teal-600'}`}>v1</text>
                    <text x="90" y="20" textAnchor="middle" className={`text-xs ${isDark ? 'fill-indigo-300' : 'fill-teal-600'}`}>v2</text>
                    <text x="60" y="75" textAnchor="middle" className={`text-xs ${isDark ? 'fill-indigo-300' : 'fill-teal-600'}`}>v3</text>
                  </svg>
                </div>
                <ul className={`text-sm space-y-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  <li>• Sommets & Arêtes</li>
                  <li>• Boucles & Multigraphes</li>
                  <li>• Graphes simples</li>
                </ul>
              </div>
            </div>
          </div>

          {/* PARTIE II - Typologie & Structures */}
          <div className={`mb-16 p-10 rounded-3xl border backdrop-blur-xl animate-fade-in-up ${
            isDark 
              ? 'bg-linear-to-br from-purple-950/30 to-indigo-950/30 border-purple-500/20' 
              : 'bg-linear-to-br from-cyan-50/50 to-teal-50/50 border-cyan-300/30'
          }`} style={{ animationDelay: '1s', opacity: 0 }}>
            <div className={`mono text-xs tracking-widest uppercase mb-6 ${
              isDark ? 'text-purple-400' : 'text-cyan-600'
            }`}>
              PARTIE II • TYPOLOGIE & STRUCTURES
            </div>
            
            <div className="grid lg:grid-cols-4 gap-6">
              {/* Graphes orientés */}
              <div className={`p-6 rounded-2xl ${isDark ? 'bg-slate-900/30' : 'bg-white/40'}`}>
                <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  4. Orientés vs Non-orientés
                </h4>
                <svg className="w-full h-24 mb-3" viewBox="0 0 100 60">
                  <defs>
                    <marker id={`arrow-${isDark ? 'dark' : 'light'}`} markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                      <polygon points="0 0, 10 3, 0 6" fill={isDark ? '#818cf8' : '#14b8a6'} />
                    </marker>
                  </defs>
                  <line x1="25" y1="30" x2="70" y2="30" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2" markerEnd={`url(#arrow-${isDark ? 'dark' : 'light'})`}/>
                  <circle cx="25" cy="30" r="6" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                  <circle cx="75" cy="30" r="6" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                </svg>
                <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Différenciation conceptuelle
                </p>
              </div>

              {/* Graphes pondérés */}
              <div className={`p-6 rounded-2xl ${isDark ? 'bg-slate-900/30' : 'bg-white/40'}`}>
                <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  5. Pondérés & Bipartis
                </h4>
                <svg className="w-full h-24 mb-3" viewBox="0 0 100 60">
                  <line x1="20" y1="30" x2="80" y2="30" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                  <circle cx="20" cy="30" r="6" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                  <circle cx="80" cy="30" r="6" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                  <text x="50" y="20" textAnchor="middle" className={`text-sm font-semibold ${isDark ? 'fill-purple-300' : 'fill-cyan-600'}`}>5</text>
                </svg>
                <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Poids sur les arêtes
                </p>
              </div>

              {/* Graphes connexes */}
              <div className={`p-6 rounded-2xl ${isDark ? 'bg-slate-900/30' : 'bg-white/40'}`}>
                <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  6. Connexité & Planaires
                </h4>
                <svg className="w-full h-24 mb-3" viewBox="0 0 100 60">
                  <line x1="25" y1="20" x2="50" y2="40" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                  <line x1="50" y1="40" x2="75" y2="20" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                  <line x1="25" y1="20" x2="75" y2="20" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                  <circle cx="25" cy="20" r="6" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                  <circle cx="75" cy="20" r="6" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                  <circle cx="50" cy="40" r="6" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                </svg>
                <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Composantes connexes
                </p>
              </div>

              {/* Matrices */}
              <div className={`p-6 rounded-2xl ${isDark ? 'bg-slate-900/30' : 'bg-white/40'}`}>
                <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  7-8. Matrices & Listes
                </h4>
                <div className="mb-3 font-mono text-xs">
                  <div className={`grid grid-cols-3 gap-1 ${isDark ? 'text-indigo-300' : 'text-teal-600'}`}>
                    <div className="text-center border border-current p-1">0</div>
                    <div className="text-center border border-current p-1">1</div>
                    <div className="text-center border border-current p-1">1</div>
                    <div className="text-center border border-current p-1">1</div>
                    <div className="text-center border border-current p-1">0</div>
                    <div className="text-center border border-current p-1">1</div>
                    <div className="text-center border border-current p-1">1</div>
                    <div className="text-center border border-current p-1">1</div>
                    <div className="text-center border border-current p-1">0</div>
                  </div>
                </div>
                <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Représentations
                </p>
              </div>
            </div>
          </div>

          {/* PARTIE III - Propriétés & Théorèmes */}
          <div className={`mb-16 p-10 rounded-3xl border backdrop-blur-xl animate-fade-in-up ${
            isDark 
              ? 'bg-linear-to-br from-indigo-950/30 to-purple-950/30 border-indigo-500/20' 
              : 'bg-linear-to-br from-teal-50/50 to-cyan-50/50 border-teal-300/30'
          }`} style={{ animationDelay: '1.1s', opacity: 0 }}>
            <div className={`mono text-xs tracking-widest uppercase mb-6 ${
              isDark ? 'text-indigo-400' : 'text-teal-600'
            }`}>
              PARTIE III • PROPRIÉTÉS & THÉORÈMES
            </div>
            
            <div className="grid lg:grid-cols-4 gap-6">
              {/* Propriétés métriques */}
              <div className={`p-6 rounded-2xl ${isDark ? 'bg-slate-900/30' : 'bg-white/40'}`}>
                <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  9. Propriétés Métriques
                </h4>
                <svg className="w-full h-24 mb-3" viewBox="0 0 100 60">
                  <circle cx="50" cy="30" r="6" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                  <line x1="50" y1="30" x2="30" y2="15" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                  <line x1="50" y1="30" x2="70" y2="15" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                  <line x1="50" y1="30" x2="50" y2="50" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                  <circle cx="30" cy="15" r="5" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                  <circle cx="70" cy="15" r="5" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                  <circle cx="50" cy="50" r="5" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                  <text x="50" y="35" textAnchor="middle" className={`text-xs font-bold ${isDark ? 'fill-indigo-300' : 'fill-teal-600'}`}>d=3</text>
                </svg>
                <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Degré, distance, diamètre
                </p>
              </div>

              {/* Cycles */}
              <div className={`p-6 rounded-2xl ${isDark ? 'bg-slate-900/30' : 'bg-white/40'}`}>
                <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  10. Cycles & Chemins
                </h4>
                <svg className="w-full h-24 mb-3" viewBox="0 0 100 60">
                  <path d="M 30 30 L 50 15 L 70 30 L 50 45 Z" 
                        fill="none" 
                        stroke={isDark ? '#818cf8' : '#14b8a6'} 
                        strokeWidth="2"/>
                  <circle cx="30" cy="30" r="5" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                  <circle cx="50" cy="15" r="5" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                  <circle cx="70" cy="30" r="5" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                  <circle cx="50" cy="45" r="5" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                </svg>
                <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Détection de cycles
                </p>
              </div>

              {/* Euler */}
              <div className={`p-6 rounded-2xl ${isDark ? 'bg-slate-900/30' : 'bg-white/40'}`}>
                <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  11. Théorème d'Euler
                </h4>
                <svg className="w-full h-24 mb-3" viewBox="0 0 100 60">
                  <circle cx="30" cy="30" r="15" fill="none" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                  <circle cx="70" cy="30" r="15" fill="none" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                  <circle cx="30" cy="30" r="4" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                  <circle cx="70" cy="30" r="4" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                  <line x1="45" y1="30" x2="55" y2="30" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                </svg>
                <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Cycles eulériens
                </p>
              </div>

              {/* Kuratowski */}
              <div className={`p-6 rounded-2xl ${isDark ? 'bg-slate-900/30' : 'bg-white/40'}`}>
                <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  12. Kuratowski & Ponts
                </h4>
                <svg className="w-full h-24 mb-3" viewBox="0 0 100 60">
                  <line x1="20" y1="20" x2="80" y2="40" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                  <line x1="80" y1="20" x2="20" y2="40" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                  <circle cx="20" cy="20" r="5" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                  <circle cx="80" cy="20" r="5" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                  <circle cx="20" cy="40" r="5" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                  <circle cx="80" cy="40" r="5" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                </svg>
                <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Planarité
                </p>
              </div>
            </div>
          </div>

          {/* PARTIE IV - Algorithmique */}
          <div className={`mb-16 p-10 rounded-3xl border backdrop-blur-xl animate-fade-in-up ${
            isDark 
              ? 'bg-linear-to-br from-purple-950/30 to-indigo-950/30 border-purple-500/20' 
              : 'bg-linear-to-br from-cyan-50/50 to-teal-50/50 border-cyan-300/30'
          }`} style={{ animationDelay: '1.2s', opacity: 0 }}>
            <div className={`mono text-xs tracking-widest uppercase mb-6 ${
              isDark ? 'text-purple-400' : 'text-cyan-600'
            }`}>
              PARTIE IV • ALGORITHMIQUE
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              {/* BFS */}
              <div className={`p-8 rounded-2xl ${isDark ? 'bg-slate-900/30' : 'bg-white/40'}`}>
                <h4 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  13. Parcours en Largeur (BFS)
                </h4>
                <svg className="w-full h-32 mb-4" viewBox="0 0 180 80">
                  {/* Arbre de parcours BFS */}
                  <line x1="90" y1="20" x2="50" y2="50" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                  <line x1="90" y1="20" x2="130" y2="50" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                  <line x1="50" y1="50" x2="30" y2="70" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                  <line x1="50" y1="50" x2="70" y2="70" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                  <line x1="130" y1="50" x2="110" y2="70" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                  <line x1="130" y1="50" x2="150" y2="70" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                  
                  <circle cx="90" cy="20" r="8" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                  <text x="90" y="25" textAnchor="middle" className="text-xs fill-white font-bold">1</text>
                  
                  <circle cx="50" cy="50" r="8" fill={isDark ? '#6366f1' : '#14b8a6'} opacity="0.8"/>
                  <text x="50" y="55" textAnchor="middle" className="text-xs fill-white font-bold">2</text>
                  
                  <circle cx="130" cy="50" r="8" fill={isDark ? '#6366f1' : '#14b8a6'} opacity="0.8"/>
                  <text x="130" y="55" textAnchor="middle" className="text-xs fill-white font-bold">3</text>
                  
                  <circle cx="30" cy="70" r="6" fill={isDark ? '#6366f1' : '#14b8a6'} opacity="0.6"/>
                  <circle cx="70" cy="70" r="6" fill={isDark ? '#6366f1' : '#14b8a6'} opacity="0.6"/>
                  <circle cx="110" cy="70" r="6" fill={isDark ? '#6366f1' : '#14b8a6'} opacity="0.6"/>
                  <circle cx="150" cy="70" r="6" fill={isDark ? '#6366f1' : '#14b8a6'} opacity="0.6"/>
                </svg>
                <div className={`p-4 rounded-lg ${isDark ? 'bg-indigo-950/30' : 'bg-teal-50'}`}>
                  <p className={`mono text-xs mb-2 ${isDark ? 'text-indigo-300' : 'text-teal-700'}`}>
                    Complexité: O(V + E)
                  </p>
                  <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Exploration niveau par niveau
                  </p>
                </div>
              </div>

              {/* DFS */}
              <div className={`p-8 rounded-2xl ${isDark ? 'bg-slate-900/30' : 'bg-white/40'}`}>
                <h4 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  14. Parcours en Profondeur (DFS)
                </h4>
                <svg className="w-full h-32 mb-4" viewBox="0 0 180 80">
                  {/* Arbre de parcours DFS */}
                  <line x1="90" y1="20" x2="60" y2="40" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                  <line x1="60" y1="40" x2="40" y2="60" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                  <line x1="40" y1="60" x2="30" y2="75" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                  <line x1="90" y1="20" x2="120" y2="40" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2" opacity="0.5"/>
                  
                  <circle cx="90" cy="20" r="8" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                  <text x="90" y="25" textAnchor="middle" className="text-xs fill-white font-bold">1</text>
                  
                  <circle cx="60" cy="40" r="8" fill={isDark ? '#6366f1' : '#14b8a6'} opacity="0.8"/>
                  <text x="60" y="45" textAnchor="middle" className="text-xs fill-white font-bold">2</text>
                  
                  <circle cx="40" cy="60" r="8" fill={isDark ? '#6366f1' : '#14b8a6'} opacity="0.7"/>
                  <text x="40" y="65" textAnchor="middle" className="text-xs fill-white font-bold">3</text>
                  
                  <circle cx="30" cy="75" r="6" fill={isDark ? '#6366f1' : '#14b8a6'} opacity="0.6"/>
                  <circle cx="120" cy="40" r="6" fill={isDark ? '#6366f1' : '#14b8a6'} opacity="0.4"/>
                </svg>
                <div className={`p-4 rounded-lg ${isDark ? 'bg-purple-950/30' : 'bg-cyan-50'}`}>
                  <p className={`mono text-xs mb-2 ${isDark ? 'text-purple-300' : 'text-cyan-700'}`}>
                    Complexité: O(V + E)
                  </p>
                  <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Exploration en profondeur d'abord
                  </p>
                </div>
              </div>
            </div>

            {/* Algorithmes d'optimisation */}
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Dijkstra */}
              <div className={`p-6 rounded-2xl ${isDark ? 'bg-slate-900/30' : 'bg-white/40'}`}>
                <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  15. Dijkstra
                </h4>
                <svg className="w-full h-24 mb-3" viewBox="0 0 120 60">
                  <line x1="20" y1="30" x2="50" y2="30" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                  <line x1="50" y1="30" x2="100" y2="30" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                  <circle cx="20" cy="30" r="6" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                  <circle cx="50" cy="30" r="6" fill={isDark ? '#a78bfa' : '#5eead4'} opacity="0.8"/>
                  <circle cx="100" cy="30" r="6" fill={isDark ? '#c4b5fd' : '#99f6e4'} opacity="0.6"/>
                  <text x="35" y="20" className={`text-xs ${isDark ? 'fill-indigo-300' : 'fill-teal-600'}`}>3</text>
                  <text x="75" y="20" className={`text-xs ${isDark ? 'fill-indigo-300' : 'fill-teal-600'}`}>5</text>
                </svg>
                <p className={`mono text-xs mb-2 ${isDark ? 'text-indigo-300' : 'text-teal-600'}`}>O(E log V)</p>
                <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Plus court chemin</p>
              </div>

              {/* Bellman-Ford */}
              <div className={`p-6 rounded-2xl ${isDark ? 'bg-slate-900/30' : 'bg-white/40'}`}>
                <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  15. Bellman-Ford
                </h4>
                <svg className="w-full h-24 mb-3" viewBox="0 0 120 60">
                  <line x1="30" y1="30" x2="90" y2="30" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                  <path d="M 90 25 Q 60 10 30 25" fill="none" stroke={isDark ? '#f87171' : '#fb923c'} strokeWidth="2"/>
                  <circle cx="30" cy="30" r="6" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                  <circle cx="90" cy="30" r="6" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                  <text x="60" y="45" className={`text-xs ${isDark ? 'fill-indigo-300' : 'fill-teal-600'}`}>5</text>
                  <text x="60" y="10" className={`text-xs ${isDark ? 'fill-red-400' : 'fill-orange-600'}`}>-2</text>
                </svg>
                <p className={`mono text-xs mb-2 ${isDark ? 'text-indigo-300' : 'text-teal-600'}`}>O(VE)</p>
                <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Poids négatifs</p>
              </div>

              {/* Kruskal & Prim */}
              <div className={`p-6 rounded-2xl ${isDark ? 'bg-slate-900/30' : 'bg-white/40'}`}>
                <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  16. Prim & Kruskal
                </h4>
                <svg className="w-full h-24 mb-3" viewBox="0 0 120 60">
                  <line x1="30" y1="20" x2="60" y2="40" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="3"/>
                  <line x1="60" y1="40" x2="90" y2="20" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="3"/>
                  <line x1="30" y1="20" x2="90" y2="20" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2" opacity="0.3"/>
                  <circle cx="30" cy="20" r="6" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                  <circle cx="90" cy="20" r="6" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                  <circle cx="60" cy="40" r="6" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                </svg>
                <p className={`mono text-xs mb-2 ${isDark ? 'text-indigo-300' : 'text-teal-600'}`}>O(E log V)</p>
                <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Arbres couvrants</p>
              </div>
            </div>
          </div>

          {/* PARTIE V - Applications & Exercices */}
          <div className={`mb-16 p-10 rounded-3xl border backdrop-blur-xl animate-fade-in-up ${
            isDark 
              ? 'bg-linear-to-br from-indigo-950/30 to-purple-950/30 border-indigo-500/20' 
              : 'bg-linear-to-br from-teal-50/50 to-cyan-50/50 border-teal-300/30'
          }`} style={{ animationDelay: '1.3s', opacity: 0 }}>
            <div className={`mono text-xs tracking-widest uppercase mb-6 ${
              isDark ? 'text-indigo-400' : 'text-teal-600'
            }`}>
              PARTIE V • APPLICATIONS & EXERCICES
            </div>
            
            <h3 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              17. Applications Pratiques
            </h3>
            
            <div className="grid lg:grid-cols-3 gap-6 mb-8">
              {/* Réseaux sociaux */}
              <div className={`p-8 rounded-2xl ${isDark ? 'bg-slate-900/30' : 'bg-white/40'}`}>
                <div className="mb-4">
                  <svg className="w-full h-32" viewBox="0 0 120 80">
                    {/* Réseau social */}
                    <circle cx="60" cy="25" r="8" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                    <circle cx="30" cy="55" r="6" fill={isDark ? '#6366f1' : '#14b8a6'} opacity="0.8"/>
                    <circle cx="60" cy="55" r="6" fill={isDark ? '#6366f1' : '#14b8a6'} opacity="0.8"/>
                    <circle cx="90" cy="55" r="6" fill={isDark ? '#6366f1' : '#14b8a6'} opacity="0.8"/>
                    <line x1="60" y1="33" x2="30" y2="49" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                    <line x1="60" y1="33" x2="60" y2="49" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                    <line x1="60" y1="33" x2="90" y2="49" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                    <line x1="30" y1="55" x2="60" y2="55" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="1" opacity="0.5"/>
                    <line x1="60" y1="55" x2="90" y2="55" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="1" opacity="0.5"/>
                  </svg>
                </div>
                <h4 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Réseaux Sociaux
                </h4>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Modélisation des relations, recommandations, analyse d'influence
                </p>
              </div>

              {/* Navigation GPS */}
              <div className={`p-8 rounded-2xl ${isDark ? 'bg-slate-900/30' : 'bg-white/40'}`}>
                <div className="mb-4">
                  <svg className="w-full h-32" viewBox="0 0 120 80">
                    {/* Carte routière */}
                    <circle cx="20" cy="20" r="6" fill={isDark ? '#22c55e' : '#14b8a6'}/>
                    <circle cx="100" cy="60" r="6" fill={isDark ? '#ef4444' : '#f97316'}/>
                    <circle cx="60" cy="30" r="5" fill={isDark ? '#6366f1' : '#14b8a6'} opacity="0.6"/>
                    <circle cx="80" cy="45" r="5" fill={isDark ? '#6366f1' : '#14b8a6'} opacity="0.6"/>
                    <line x1="20" y1="20" x2="60" y2="30" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                    <line x1="60" y1="30" x2="80" y2="45" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="3" opacity="0.8"/>
                    <line x1="80" y1="45" x2="100" y2="60" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="3" opacity="0.8"/>
                    <text x="30" y="15" className={`text-xs ${isDark ? 'fill-indigo-300' : 'fill-teal-600'}`}>3km</text>
                    <text x="70" y="40" className={`text-xs ${isDark ? 'fill-indigo-300' : 'fill-teal-600'}`}>5km</text>
                  </svg>
                </div>
                <h4 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Navigation GPS
                </h4>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Plus courts chemins, optimisation de routes, trafic en temps réel
                </p>
              </div>

              {/* Réseaux informatiques */}
              <div className={`p-8 rounded-2xl ${isDark ? 'bg-slate-900/30' : 'bg-white/40'}`}>
                <div className="mb-4">
                  <svg className="w-full h-32" viewBox="0 0 120 80">
                    {/* Topologie réseau */}
                    <circle cx="60" cy="25" r="8" fill={isDark ? '#6366f1' : '#14b8a6'}/>
                    <rect x="15" y="50" width="20" height="15" rx="3" fill={isDark ? '#6366f1' : '#14b8a6'} opacity="0.6"/>
                    <rect x="50" y="50" width="20" height="15" rx="3" fill={isDark ? '#6366f1' : '#14b8a6'} opacity="0.6"/>
                    <rect x="85" y="50" width="20" height="15" rx="3" fill={isDark ? '#6366f1' : '#14b8a6'} opacity="0.6"/>
                    <line x1="60" y1="33" x2="25" y2="50" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                    <line x1="60" y1="33" x2="60" y2="50" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                    <line x1="60" y1="33" x2="95" y2="50" stroke={isDark ? '#818cf8' : '#14b8a6'} strokeWidth="2"/>
                  </svg>
                </div>
                <h4 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Réseaux Informatiques
                </h4>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Topologie, routage de paquets, détection de pannes
                </p>
              </div>
            </div>

            {/* Exercices proposés */}
            <div className={`p-6 rounded-2xl border ${
              isDark ? 'bg-indigo-950/20 border-indigo-500/20' : 'bg-teal-50/50 border-teal-300/20'
            }`}>
              <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Série d'Exercices d'Application
              </h4>
              <ul className={`space-y-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                <li>• Série d'exercices courts couvrant toute la matière</li>
                <li>• Correction détaillée fournie pour chaque exercice</li>
                <li>• Objectif : évaluer la compréhension globale du groupe</li>
              </ul>
            </div>
          </div>

          {/* Stats Section */}
          <div className={`mt-32 p-12 rounded-3xl border backdrop-blur-xl animate-fade-in-up ${
            isDark 
              ? 'bg-linear-to-r from-indigo-950/40 to-purple-950/40 border-indigo-500/20' 
              : 'bg-linear-to-r from-teal-100/40 to-cyan-100/40 border-teal-300/30'
          }`} style={{ animationDelay: '1.4s', opacity: 0 }}>
            <div className="grid md:grid-cols-3 gap-12 text-center">
              {[
                { value: '17', label: 'Responsables • Groupe de travail' },
                { value: '5', label: 'Parties du programme' },
                { value: '1736', label: 'Problème des ponts de Königsberg' },
              ].map((stat, i) => (
                <div key={i}>
                  <div className={`text-5xl lg:text-6xl font-bold mb-3 ${
                    isDark ? 'gradient-text' : 'gradient-text-light'
                  }`}>
                    {stat.value}
                  </div>
                  <div className={`mono text-sm tracking-wide uppercase ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}