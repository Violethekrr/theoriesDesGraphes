import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Download, Play, RotateCcw } from 'lucide-react';

// Types
interface Node {
  id: number;
  x: number;
  y: number;
  visited: boolean;
}

interface Edge {
  node1: Node;
  node2: Node;
  weight?: number;
  highlighted: boolean;
}

interface PDFCategory {
  id: string;
  title: string;
  description: string;
  files: PDFFile[];
}

interface PDFFile {
  name: string;
  description: string;
  url: string;
}

// Main App Component
const GraphTheoryApp: React.FC = () => {
  const [activeSection, setActiveSection] = useState('intro');

  const sections = [
    { id: 'intro', label: 'Introduction' },
    { id: 'partie1', label: 'Partie I' },
    { id: 'partie2', label: 'Partie II' },
    { id: 'partie3', label: 'Partie III' },
    { id: 'partie4', label: 'Partie IV' },
    { id: 'partie5', label: 'Partie V' },
    { id: 'demos', label: 'Démos' },
    { id: 'pdfs', label: 'PDFs' },
    { id: 'team', label: 'Équipe' },
  ];

  return (
    <div className="app">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=Work+Sans:wght@300;400;500;600&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        :root {
          --bg: #fafaf9;
          --surface: #ffffff;
          --text-primary: #1a1a1a;
          --text-secondary: #666666;
          --text-tertiary: #999999;
          --accent: #2c5f4f;
          --accent-light: #d4e5df;
          --border: #e5e5e5;
          --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
          --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.06);
          --shadow-lg: 0 12px 40px rgba(0, 0, 0, 0.08);
        }
        
        body {
          font-family: 'Work Sans', -apple-system, sans-serif;
          background: var(--bg);
          color: var(--text-primary);
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
        }
        
        .app {
          min-height: 100vh;
        }
        
        /* Header */
        header {
          background: var(--surface);
          border-bottom: 1px solid var(--border);
          padding: 3rem 2rem 2rem;
          text-align: center;
        }
        
        h1 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 300;
          color: var(--text-primary);
          letter-spacing: -0.02em;
          margin-bottom: 0.5rem;
        }
        
        .subtitle {
          font-size: 0.95rem;
          color: var(--text-secondary);
          font-weight: 400;
          letter-spacing: 0.02em;
        }
        
        /* Navigation */
        nav {
          background: var(--surface);
          border-bottom: 1px solid var(--border);
          padding: 0 2rem;
          display: flex;
          gap: 0.5rem;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }
        
        nav::-webkit-scrollbar {
          height: 0;
        }
        
        .nav-btn {
          background: none;
          border: none;
          color: var(--text-secondary);
          padding: 1rem 1.5rem;
          cursor: pointer;
          font-family: 'Work Sans', sans-serif;
          font-size: 0.875rem;
          font-weight: 500;
          transition: all 0.2s ease;
          white-space: nowrap;
          position: relative;
          letter-spacing: 0.01em;
        }
        
        .nav-btn::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--accent);
          transform: scaleX(0);
          transition: transform 0.2s ease;
        }
        
        .nav-btn:hover {
          color: var(--text-primary);
        }
        
        .nav-btn.active {
          color: var(--accent);
        }
        
        .nav-btn.active::after {
          transform: scaleX(1);
        }
        
        /* Container */
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 4rem 2rem;
        }
        
        .section {
          display: none;
          animation: fadeIn 0.4s ease;
        }
        
        .section.active {
          display: block;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Content Card */
        .content-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 2.5rem;
          margin-bottom: 2rem;
          box-shadow: var(--shadow-sm);
          transition: all 0.3s ease;
        }
        
        .content-card:hover {
          box-shadow: var(--shadow-md);
          border-color: var(--accent-light);
        }
        
        .content-card h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2rem;
          font-weight: 400;
          color: var(--accent);
          margin-bottom: 1.5rem;
          letter-spacing: -0.01em;
        }
        
        .content-card h3 {
          font-size: 1.25rem;
          font-weight: 500;
          color: var(--text-primary);
          margin-bottom: 1rem;
          letter-spacing: -0.01em;
        }
        
        .content-card h4 {
          font-size: 1rem;
          font-weight: 600;
          color: var(--accent);
          margin: 1.5rem 0 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-size: 0.8rem;
        }
        
        .content-card ul {
          list-style: none;
          padding: 0;
        }
        
        .content-card li {
          padding: 0.5rem 0;
          padding-left: 1.5rem;
          position: relative;
          color: var(--text-secondary);
          font-size: 0.95rem;
        }
        
        .content-card li::before {
          content: '—';
          position: absolute;
          left: 0;
          color: var(--accent);
          font-weight: 500;
        }
        
        .content-card p {
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 1rem;
        }
        
        /* Info Panel */
        .info-panel {
          background: var(--accent-light);
          border-left: 3px solid var(--accent);
          padding: 2rem;
          margin-bottom: 2rem;
          border-radius: 4px;
        }
        
        .info-panel h3 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.5rem;
          font-weight: 400;
          color: var(--accent);
          margin-bottom: 1rem;
        }
        
        .info-panel p {
          color: var(--text-primary);
          line-height: 1.8;
        }
        
        /* Grid Layout */
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin: 2rem 0;
        }
        
        .grid-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 2rem;
          transition: all 0.3s ease;
        }
        
        .grid-card:hover {
          box-shadow: var(--shadow-md);
          transform: translateY(-4px);
        }
        
        .grid-card h4 {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--accent);
          margin-bottom: 0.5rem;
        }
        
        .grid-card .role {
          font-size: 0.8rem;
          color: var(--text-tertiary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 1rem;
        }
        
        .grid-card .topic {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }
        
        /* Buttons */
        .btn {
          background: var(--accent);
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 4px;
          cursor: pointer;
          font-family: 'Work Sans', sans-serif;
          font-weight: 500;
          font-size: 0.875rem;
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          letter-spacing: 0.01em;
        }
        
        .btn:hover {
          background: #234a3d;
          transform: translateY(-1px);
          box-shadow: var(--shadow-md);
        }
        
        .btn-secondary {
          background: var(--surface);
          color: var(--accent);
          border: 1px solid var(--accent);
        }
        
        .btn-secondary:hover {
          background: var(--accent-light);
        }
        
        .controls {
          display: flex;
          gap: 1rem;
          margin: 2rem 0;
          flex-wrap: wrap;
        }
        
        /* Canvas */
        .canvas-container {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 2rem;
          margin: 2rem 0;
          box-shadow: var(--shadow-sm);
        }
        
        canvas {
          width: 100%;
          height: 500px;
          border-radius: 4px;
          background: var(--bg);
          cursor: crosshair;
        }
        
        /* PDF Section */
        .pdf-category {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 8px;
          margin-bottom: 1.5rem;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        
        .pdf-category:hover {
          box-shadow: var(--shadow-md);
        }
        
        .pdf-header {
          padding: 1.5rem 2rem;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: background 0.2s ease;
        }
        
        .pdf-header:hover {
          background: var(--bg);
        }
        
        .pdf-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
        }
        
        .pdf-description {
          font-size: 0.875rem;
          color: var(--text-secondary);
          margin-top: 0.25rem;
        }
        
        .chevron {
          color: var(--text-tertiary);
          transition: transform 0.3s ease;
        }
        
        .pdf-category.open .chevron {
          transform: rotate(180deg);
        }
        
        .pdf-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease;
        }
        
        .pdf-category.open .pdf-content {
          max-height: 2000px;
        }
        
        .pdf-list {
          padding: 0 2rem 1.5rem;
        }
        
        .pdf-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          margin: 0.5rem 0;
          background: var(--bg);
          border-radius: 4px;
          transition: all 0.2s ease;
        }
        
        .pdf-item:hover {
          background: var(--accent-light);
        }
        
        .pdf-item-info {
          flex: 1;
        }
        
        .pdf-item-name {
          font-weight: 500;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }
        
        .pdf-item-desc {
          font-size: 0.875rem;
          color: var(--text-secondary);
        }
        
        .download-btn {
          background: var(--accent);
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          cursor: pointer;
          font-size: 0.875rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.2s ease;
        }
        
        .download-btn:hover {
          background: #234a3d;
        }
        
        /* Algorithm Steps */
        .algo-steps {
          margin: 2rem 0;
        }
        
        .step {
          padding: 1rem 1.5rem;
          margin: 0.75rem 0;
          background: var(--surface);
          border-left: 3px solid var(--border);
          border-radius: 4px;
          color: var(--text-secondary);
          transition: all 0.2s ease;
        }
        
        .step:hover {
          border-left-color: var(--accent);
          background: var(--accent-light);
        }
        
        .step.active {
          border-left-color: var(--accent);
          background: var(--accent-light);
          color: var(--text-primary);
        }
        
        /* Responsive */
        @media (max-width: 768px) {
          header {
            padding: 2rem 1rem 1.5rem;
          }
          
          h1 {
            font-size: 2rem;
          }
          
          nav {
            padding: 0 1rem;
          }
          
          .container {
            padding: 2rem 1rem;
          }
          
          .content-card {
            padding: 1.5rem;
          }
          
          .grid {
            grid-template-columns: 1fr;
          }
          
          canvas {
            height: 350px;
          }
        }
      `}</style>

      <header>
        <h1>Théorie des Graphes</h1>
        <p className="subtitle">Groupe de 17 Personnes</p>
      </header>

      <nav>
        {sections.map((section) => (
          <button
            key={section.id}
            className={`nav-btn ${activeSection === section.id ? 'active' : ''}`}
            onClick={() => setActiveSection(section.id)}
          >
            {section.label}
          </button>
        ))}
      </nav>

      <div className="container">
        <IntroSection active={activeSection === 'intro'} />
        <Partie1Section active={activeSection === 'partie1'} />
        <Partie2Section active={activeSection === 'partie2'} />
        <Partie3Section active={activeSection === 'partie3'} />
        <Partie4Section active={activeSection === 'partie4'} />
        <Partie5Section active={activeSection === 'partie5'} />
        <DemosSection active={activeSection === 'demos'} />
        <PDFSection active={activeSection === 'pdfs'} />
        <TeamSection active={activeSection === 'team'} />
      </div>
    </div>
  );
};

// Introduction Section
const IntroSection: React.FC<{ active: boolean }> = ({ active }) => {
  if (!active) return null;

  return (
    <section className="section active">
      <div className="info-panel">
        <h3>Plan de Travail Officiel</h3>
        <p>
          Exposé sur la théorie des graphes — Groupe de 17 personnes
        </p>
        <p style={{ marginTop: '1rem', fontWeight: 500 }}>
          Objectif : Produire un exposé complet, rigoureux et parfaitement structuré.
        </p>
      </div>

      <div className="grid">
        <div className="grid-card">
          <h4>Sommets</h4>
          <p className="topic">
            Les points du graphe représentant des entités dans un réseau
          </p>
        </div>
        <div className="grid-card">
          <h4>Arêtes</h4>
          <p className="topic">
            Les connexions entre les sommets définissant les relations
          </p>
        </div>
        <div className="grid-card">
          <h4>Degré</h4>
          <p className="topic">
            Nombre d'arêtes connectées à un sommet donné
          </p>
        </div>
        <div className="grid-card">
          <h4>Connexité</h4>
          <p className="topic">
            Propriété déterminant si tous les sommets sont reliés
          </p>
        </div>
      </div>

      <div className="content-card">
        <h3>Applications dans le Monde Réel</h3>
        <ul>
          <li>Réseaux sociaux : modélisation des relations entre utilisateurs</li>
          <li>Navigation GPS : optimisation des itinéraires routiers</li>
          <li>Internet : architecture et routage des données</li>
          <li>Biologie : réseaux de protéines et interactions moléculaires</li>
          <li>Logistique : optimisation des chaînes d'approvisionnement</li>
        </ul>
      </div>
    </section>
  );
};

// Partie 1 Section
const Partie1Section: React.FC<{ active: boolean }> = ({ active }) => {
  if (!active) return null;

  return (
    <section className="section active">
      <div className="content-card">
        <h2>Partie I — Fondations Théoriques</h2>
      </div>

      <div className="content-card">
        <h3>1. Introduction Générale</h3>
        <p className="role">Responsable : Personne 1</p>
        <ul>
          <li>Concept de graphe</li>
          <li>Place des graphes en mathématiques discrètes</li>
          <li>Rôle des graphes dans les systèmes modernes</li>
        </ul>
      </div>

      <div className="content-card">
        <h3>2. Historique & Évolution</h3>
        <p className="role">Responsable : Personne 2</p>
        <ul>
          <li>Euler et le problème des ponts</li>
          <li>Développements essentiels à travers les siècles</li>
          <li>Influence actuelle en algorithmique et réseaux</li>
        </ul>
      </div>

      <div className="content-card">
        <h3>3. Terminologie de Base</h3>
        <p className="role">Responsable : Personne 3</p>
        <ul>
          <li>Sommets</li>
          <li>Arêtes</li>
          <li>Boucles</li>
          <li>Multigraphes</li>
          <li>Graphes simples</li>
          <li>Livrable : Glossaire illustré + schémas explicatifs</li>
        </ul>
      </div>
    </section>
  );
};

// Partie 2 Section
const Partie2Section: React.FC<{ active: boolean }> = ({ active }) => {
  if (!active) return null;

  return (
    <section className="section active">
      <div className="content-card">
        <h2>Partie II — Typologie & Structures</h2>
      </div>

      <div className="content-card">
        <h3>4. Graphes Orientés et Non Orientés</h3>
        <p className="role">Responsable : Personne 4</p>
        <ul>
          <li>Différenciation conceptuelle</li>
          <li>Petites démonstrations pratiques</li>
        </ul>
      </div>

      <div className="content-card">
        <h3>5. Graphes Pondérés, Réguliers & Bipartis</h3>
        <p className="role">Responsable : Personne 5</p>
        <ul>
          <li>Définitions précises</li>
          <li>Exemples représentés visuellement</li>
        </ul>
      </div>

      <div className="content-card">
        <h3>6. Graphes Connexes, Fortement Connexes & Planaires</h3>
        <p className="role">Responsable : Personne 6</p>
        <ul>
          <li>Composantes connexes</li>
          <li>Notion de planarité</li>
          <li>Référence au théorème de Kuratowski</li>
        </ul>
      </div>

      <div className="content-card">
        <h3>7. Matrice d'Adjacence</h3>
        <p className="role">Responsable : Personne 7</p>
        <ul>
          <li>Construction pas à pas</li>
          <li>Forces / limites</li>
          <li>Exemple numérique</li>
        </ul>
      </div>

      <div className="content-card">
        <h3>8. Liste d'Adjacence & Modèles Alternatifs</h3>
        <p className="role">Responsable : Personne 8</p>
        <ul>
          <li>Méthode de construction</li>
          <li>Analyse du stockage</li>
          <li>Comparaison synthétique</li>
        </ul>
      </div>
    </section>
  );
};

// Partie 3 Section
const Partie3Section: React.FC<{ active: boolean }> = ({ active }) => {
  if (!active) return null;

  return (
    <section className="section active">
      <div className="content-card">
        <h2>Partie III — Propriétés & Théorèmes</h2>
      </div>

      <div className="content-card">
        <h3>9. Propriétés Métriques</h3>
        <p className="role">Responsable : Personne 9</p>
        <ul>
          <li>Degré</li>
          <li>Distance</li>
          <li>Diamètre</li>
          <li>Illustrations simples</li>
        </ul>
      </div>

      <div className="content-card">
        <h3>10. Cycles, Chemins & Composantes</h3>
        <p className="role">Responsable : Personne 10</p>
        <ul>
          <li>Chemin simple</li>
          <li>Cycle</li>
          <li>Méthodes de détection de cycle</li>
        </ul>
      </div>

      <div className="content-card">
        <h3>11. Théorèmes Essentiels (1)</h3>
        <p className="role">Responsable : Personne 11</p>
        <ul>
          <li>Théorème d'Euler (cycles eulériens)</li>
          <li>Théorème de Dirac (cycles hamiltoniens)</li>
        </ul>
      </div>

      <div className="content-card">
        <h3>12. Théorèmes Essentiels (2)</h3>
        <p className="role">Responsable : Personne 12</p>
        <ul>
          <li>Kuratowski</li>
          <li>Théorème des ponts</li>
          <li>Conditions de planarité</li>
        </ul>
      </div>
    </section>
  );
};

// Partie 4 Section
const Partie4Section: React.FC<{ active: boolean }> = ({ active }) => {
  if (!active) return null;

  return (
    <section className="section active">
      <div className="content-card">
        <h2>Partie IV — Algorithmique</h2>
      </div>

      <div className="content-card">
        <h3>13. Parcours en Largeur (BFS)</h3>
        <p className="role">Responsable : Personne 13</p>
        <ul>
          <li>Concept</li>
          <li>Pseudo-code</li>
          <li>Cas d'usage</li>
          <li>Mini-exemple</li>
        </ul>
      </div>

      <div className="content-card">
        <h3>14. Parcours en Profondeur (DFS)</h3>
        <p className="role">Responsable : Personne 14</p>
        <ul>
          <li>Concept</li>
          <li>Pseudo-code</li>
          <li>Cas d'usage</li>
          <li>Mini-exemple</li>
        </ul>
      </div>

      <div className="content-card">
        <h3>15. Algorithmes d'Optimisation (1)</h3>
        <p className="role">Responsable : Personne 15</p>
        <ul>
          <li>Dijkstra</li>
          <li>Bellman-Ford</li>
          <li>Livrable : Tableau comparatif + démonstration visuelle</li>
        </ul>
      </div>

      <div className="content-card">
        <h3>16. Algorithmes d'Optimisation (2)</h3>
        <p className="role">Responsable : Personne 16</p>
        <ul>
          <li>Prim</li>
          <li>Kruskal</li>
          <li>Arbres couvrants minimum</li>
        </ul>
      </div>
    </section>
  );
};

// Partie 5 Section
const Partie5Section: React.FC<{ active: boolean }> = ({ active }) => {
  if (!active) return null;

  return (
    <section className="section active">
      <div className="content-card">
        <h2>Partie V — Applications & Exercices</h2>
      </div>

      <div className="content-card">
        <h3>17. Exercices d'Application</h3>
        <p className="role">Responsable : Personne 17</p>
        <ul>
          <li>Série d'exercices courts couvrant toute la matière</li>
          <li>Correction détaillée fournie pour chaque exercice</li>
          <li>Objectif : évaluer la compréhension globale du groupe</li>
        </ul>
      </div>

      <div className="info-panel">
        <h3>Applications Pratiques</h3>
        <p>
          Les exercices couvriront des cas réels d'application de la théorie des graphes :
          réseaux sociaux, optimisation de routes, planification de projets, analyse de réseaux,
          et problèmes de coloration et d'allocation de ressources.
        </p>
      </div>
    </section>
  );
};

// Demos Section with Interactive Canvas
const DemosSection: React.FC<{ active: boolean }> = ({ active }) => {
  const [selectedDemo, setSelectedDemo] = useState<'bfs' | 'dfs' | 'dijkstra'>('bfs');

  if (!active) return null;

  return (
    <section className="section active">
      <div className="content-card">
        <h2>Démonstrations Interactives</h2>
        <p>Explorez les algorithmes de graphes de manière visuelle</p>
      </div>

      <div className="controls">
        <button
          className={`btn ${selectedDemo === 'bfs' ? '' : 'btn-secondary'}`}
          onClick={() => setSelectedDemo('bfs')}
        >
          Parcours BFS
        </button>
        <button
          className={`btn ${selectedDemo === 'dfs' ? '' : 'btn-secondary'}`}
          onClick={() => setSelectedDemo('dfs')}
        >
          Parcours DFS
        </button>
        <button
          className={`btn ${selectedDemo === 'dijkstra' ? '' : 'btn-secondary'}`}
          onClick={() => setSelectedDemo('dijkstra')}
        >
          Dijkstra
        </button>
      </div>

      {selectedDemo === 'bfs' && <BFSDemo />}
      {selectedDemo === 'dfs' && <DFSDemo />}
      {selectedDemo === 'dijkstra' && <DijkstraDemo />}
    </section>
  );
};

// BFS Demo Component
const BFSDemo: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    generateGraph();
  }, []);

  useEffect(() => {
    drawGraph();
  }, [nodes, edges]);

  const generateGraph = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const newNodes: Node[] = [
      { id: 1, x: canvas.width * 0.5, y: 80, visited: false },
      { id: 2, x: canvas.width * 0.3, y: 200, visited: false },
      { id: 3, x: canvas.width * 0.7, y: 200, visited: false },
      { id: 4, x: canvas.width * 0.2, y: 320, visited: false },
      { id: 5, x: canvas.width * 0.5, y: 320, visited: false },
      { id: 6, x: canvas.width * 0.8, y: 320, visited: false },
    ];

    const newEdges: Edge[] = [
      { node1: newNodes[0], node2: newNodes[1], highlighted: false },
      { node1: newNodes[0], node2: newNodes[2], highlighted: false },
      { node1: newNodes[1], node2: newNodes[3], highlighted: false },
      { node1: newNodes[1], node2: newNodes[4], highlighted: false },
      { node1: newNodes[2], node2: newNodes[4], highlighted: false },
      { node1: newNodes[2], node2: newNodes[5], highlighted: false },
    ];

    setNodes(newNodes);
    setEdges(newEdges);
  };

  const drawGraph = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw edges
    edges.forEach((edge) => {
      ctx.beginPath();
      ctx.moveTo(edge.node1.x, edge.node1.y);
      ctx.lineTo(edge.node2.x, edge.node2.y);
      ctx.strokeStyle = edge.highlighted ? '#2c5f4f' : '#e5e5e5';
      ctx.lineWidth = edge.highlighted ? 3 : 2;
      ctx.stroke();
    });

    // Draw nodes
    nodes.forEach((node) => {
      ctx.beginPath();
      ctx.arc(node.x, node.y, 20, 0, Math.PI * 2);
      ctx.fillStyle = node.visited ? '#2c5f4f' : '#ffffff';
      ctx.fill();
      ctx.strokeStyle = '#2c5f4f';
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.fillStyle = node.visited ? '#ffffff' : '#2c5f4f';
      ctx.font = '14px Work Sans';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(node.id.toString(), node.x, node.y);
    });
  };

  const runBFS = async () => {
    if (isRunning) return;
    setIsRunning(true);

    // Reset
    const resetNodes = nodes.map(n => ({ ...n, visited: false }));
    const resetEdges = edges.map(e => ({ ...e, highlighted: false }));
    setNodes(resetNodes);
    setEdges(resetEdges);

    await sleep(500);

    const queue = [resetNodes[0]];
    resetNodes[0].visited = true;
    setNodes([...resetNodes]);
    await sleep(800);

    while (queue.length > 0) {
      const current = queue.shift()!;

      const neighbors = resetEdges
        .filter(e => e.node1.id === current.id || e.node2.id === current.id)
        .map(e => (e.node1.id === current.id ? e.node2 : e.node1))
        .filter(n => !n.visited);

      for (const neighbor of neighbors) {
        neighbor.visited = true;
        queue.push(neighbor);

        const edge = resetEdges.find(
          e =>
            (e.node1.id === current.id && e.node2.id === neighbor.id) ||
            (e.node1.id === neighbor.id && e.node2.id === current.id)
        );
        if (edge) edge.highlighted = true;

        setNodes([...resetNodes]);
        setEdges([...resetEdges]);
        await sleep(800);
      }
    }

    setIsRunning(false);
  };

  const reset = () => {
    const resetNodes = nodes.map(n => ({ ...n, visited: false }));
    const resetEdges = edges.map(e => ({ ...e, highlighted: false }));
    setNodes(resetNodes);
    setEdges(resetEdges);
  };

  return (
    <div>
      <div className="info-panel">
        <h3>Parcours en Largeur (BFS)</h3>
        <p>
          Le BFS explore le graphe niveau par niveau. Il visite d'abord tous les voisins
          directs avant de passer au niveau suivant.
        </p>
      </div>

      <div className="algo-steps">
        <div className="step">1. Commencer au sommet source</div>
        <div className="step">2. Visiter tous les voisins directs</div>
        <div className="step">3. Passer au niveau suivant</div>
        <div className="step">4. Répéter jusqu'à avoir visité tous les sommets</div>
      </div>

      <div className="controls">
        <button className="btn" onClick={runBFS} disabled={isRunning}>
          <Play size={16} />
          Démarrer
        </button>
        <button className="btn btn-secondary" onClick={reset}>
          <RotateCcw size={16} />
          Réinitialiser
        </button>
      </div>

      <div className="canvas-container">
        <canvas
          ref={canvasRef}
          width={800}
          height={400}
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
    </div>
  );
};

// DFS Demo Component (similar structure to BFS)
const DFSDemo: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    generateGraph();
  }, []);

  useEffect(() => {
    drawGraph();
  }, [nodes, edges]);

  const generateGraph = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const newNodes: Node[] = [
      { id: 1, x: canvas.width * 0.5, y: 80, visited: false },
      { id: 2, x: canvas.width * 0.3, y: 200, visited: false },
      { id: 3, x: canvas.width * 0.7, y: 200, visited: false },
      { id: 4, x: canvas.width * 0.2, y: 320, visited: false },
      { id: 5, x: canvas.width * 0.5, y: 320, visited: false },
      { id: 6, x: canvas.width * 0.8, y: 320, visited: false },
    ];

    const newEdges: Edge[] = [
      { node1: newNodes[0], node2: newNodes[1], highlighted: false },
      { node1: newNodes[0], node2: newNodes[2], highlighted: false },
      { node1: newNodes[1], node2: newNodes[3], highlighted: false },
      { node1: newNodes[1], node2: newNodes[4], highlighted: false },
      { node1: newNodes[2], node2: newNodes[4], highlighted: false },
      { node1: newNodes[2], node2: newNodes[5], highlighted: false },
    ];

    setNodes(newNodes);
    setEdges(newEdges);
  };

  const drawGraph = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    edges.forEach((edge) => {
      ctx.beginPath();
      ctx.moveTo(edge.node1.x, edge.node1.y);
      ctx.lineTo(edge.node2.x, edge.node2.y);
      ctx.strokeStyle = edge.highlighted ? '#2c5f4f' : '#e5e5e5';
      ctx.lineWidth = edge.highlighted ? 3 : 2;
      ctx.stroke();
    });

    nodes.forEach((node) => {
      ctx.beginPath();
      ctx.arc(node.x, node.y, 20, 0, Math.PI * 2);
      ctx.fillStyle = node.visited ? '#2c5f4f' : '#ffffff';
      ctx.fill();
      ctx.strokeStyle = '#2c5f4f';
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.fillStyle = node.visited ? '#ffffff' : '#2c5f4f';
      ctx.font = '14px Work Sans';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(node.id.toString(), node.x, node.y);
    });
  };

  const dfsVisit = async (node: Node, visitedNodes: Node[], visitedEdges: Edge[]) => {
    node.visited = true;
    setNodes([...visitedNodes]);
    await sleep(800);

    const neighbors = visitedEdges
      .filter(e => e.node1.id === node.id || e.node2.id === node.id)
      .map(e => (e.node1.id === node.id ? e.node2 : e.node1))
      .filter(n => !n.visited);

    for (const neighbor of neighbors) {
      const edge = visitedEdges.find(
        e =>
          (e.node1.id === node.id && e.node2.id === neighbor.id) ||
          (e.node1.id === neighbor.id && e.node2.id === node.id)
      );
      if (edge) edge.highlighted = true;

      setEdges([...visitedEdges]);
      await sleep(800);

      await dfsVisit(neighbor, visitedNodes, visitedEdges);
    }
  };

  const runDFS = async () => {
    if (isRunning) return;
    setIsRunning(true);

    const resetNodes = nodes.map(n => ({ ...n, visited: false }));
    const resetEdges = edges.map(e => ({ ...e, highlighted: false }));
    setNodes(resetNodes);
    setEdges(resetEdges);

    await sleep(500);
    await dfsVisit(resetNodes[0], resetNodes, resetEdges);

    setIsRunning(false);
  };

  const reset = () => {
    const resetNodes = nodes.map(n => ({ ...n, visited: false }));
    const resetEdges = edges.map(e => ({ ...e, highlighted: false }));
    setNodes(resetNodes);
    setEdges(resetEdges);
  };

  return (
    <div>
      <div className="info-panel">
        <h3>Parcours en Profondeur (DFS)</h3>
        <p>
          Le DFS explore le graphe en allant le plus profond possible avant de revenir en arrière.
          Il suit une branche jusqu'au bout avant d'explorer les autres.
        </p>
      </div>

      <div className="algo-steps">
        <div className="step">1. Commencer au sommet source</div>
        <div className="step">2. Explorer un voisin non visité</div>
        <div className="step">3. Continuer récursivement en profondeur</div>
        <div className="step">4. Revenir en arrière quand nécessaire</div>
      </div>

      <div className="controls">
        <button className="btn" onClick={runDFS} disabled={isRunning}>
          <Play size={16} />
          Démarrer
        </button>
        <button className="btn btn-secondary" onClick={reset}>
          <RotateCcw size={16} />
          Réinitialiser
        </button>
      </div>

      <div className="canvas-container">
        <canvas
          ref={canvasRef}
          width={800}
          height={400}
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
    </div>
  );
};

// Dijkstra Demo Component
const DijkstraDemo: React.FC = () => {
  return (
    <div>
      <div className="info-panel">
        <h3>Algorithme de Dijkstra</h3>
        <p>
          L'algorithme de Dijkstra trouve le plus court chemin entre deux sommets dans un graphe pondéré.
          Il est largement utilisé dans les systèmes GPS et les protocoles de routage réseau.
        </p>
      </div>

      <div className="algo-steps">
        <div className="step">1. Initialiser les distances à l'infini (sauf la source à 0)</div>
        <div className="step">2. Choisir le sommet non visité avec la plus petite distance</div>
        <div className="step">3. Mettre à jour les distances des voisins</div>
        <div className="step">4. Marquer le sommet comme visité et répéter</div>
      </div>

      <div className="content-card" style={{ marginTop: '2rem' }}>
        <h3>Complexité</h3>
        <ul>
          <li>Temps : O((V + E) log V) avec tas de Fibonacci</li>
          <li>Espace : O(V) pour stocker les distances</li>
          <li>Optimal pour les graphes à poids positifs</li>
        </ul>
      </div>
    </div>
  );
};

// PDF Section
const PDFSection: React.FC<{ active: boolean }> = ({ active }) => {
  const [openCategories, setOpenCategories] = useState<string[]>([]);

  if (!active) return null;

  const toggleCategory = (id: string) => {
    setOpenCategories(prev =>
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    );
  };

  const pdfCategories: PDFCategory[] = [
    {
      id: 'main',
      title: 'Exposé Principal - Théorie des Graphes',
      description: 'Document complet de notre groupe',
      files: [
        {
          name: 'Exposé_Théorie_Graphes_Groupe17.pdf',
          description: 'Document principal avec toutes les parties',
          url: '#',
        },
        {
          name: 'Slides_Présentation.pdf',
          description: 'Diapositives pour la présentation orale',
          url: '#',
        },
      ],
    },
    {
      id: 'resources',
      title: 'Ressources Complémentaires',
      description: 'Documents de référence et exercices',
      files: [
        {
          name: 'Exercices_Corrigés.pdf',
          description: 'Série complète d\'exercices avec solutions',
          url: '#',
        },
        {
          name: 'Glossaire_Illustré.pdf',
          description: 'Terminologie avec schémas explicatifs',
          url: '#',
        },
        {
          name: 'Tableaux_Comparatifs.pdf',
          description: 'Comparaisons d\'algorithmes',
          url: '#',
        },
      ],
    },
    {
      id: 'autres',
      title: 'Autres Exposés du Cours',
      description: 'Documents des autres groupes',
      files: [
        {
          name: 'Groupe01_Arbres.pdf',
          description: 'Exposé sur les structures d\'arbres',
          url: '#',
        },
        {
          name: 'Groupe02_Complexité.pdf',
          description: 'Analyse de la complexité algorithmique',
          url: '#',
        },
        {
          name: 'Groupe03_TriRecherche.pdf',
          description: 'Algorithmes de tri et recherche',
          url: '#',
        },
        {
          name: 'Groupe04_Récursivité.pdf',
          description: 'Programmation récursive',
          url: '#',
        },
        {
          name: 'Groupe05_Structures_Données.pdf',
          description: 'Structures de données avancées',
          url: '#',
        },
      ],
    },
  ];

  return (
    <section className="section active">
      <div className="content-card">
        <h2>Télécharger les Documents PDF</h2>
        <p>Accédez à tous les documents de l'exposé et aux ressources complémentaires</p>
      </div>

      {pdfCategories.map((category) => (
        <div
          key={category.id}
          className={`pdf-category ${openCategories.includes(category.id) ? 'open' : ''}`}
        >
          <div className="pdf-header" onClick={() => toggleCategory(category.id)}>
            <div>
              <div className="pdf-title">{category.title}</div>
              <div className="pdf-description">{category.description}</div>
            </div>
            <ChevronDown className="chevron" size={24} />
          </div>
          <div className="pdf-content">
            <div className="pdf-list">
              {category.files.map((file, index) => (
                <div key={index} className="pdf-item">
                  <div className="pdf-item-info">
                    <div className="pdf-item-name">{file.name}</div>
                    <div className="pdf-item-desc">{file.description}</div>
                  </div>
                  <button className="download-btn">
                    <Download size={16} />
                    Télécharger
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

// Team Section
const TeamSection: React.FC<{ active: boolean }> = ({ active }) => {
  if (!active) return null;

  const teamMembers = [
    { id: 1, name: 'Personne 1', role: 'Introduction Générale', topic: 'Concept de graphe, place en maths discrètes' },
    { id: 2, name: 'Personne 2', role: 'Historique & Évolution', topic: 'Euler et le problème des ponts' },
    { id: 3, name: 'Personne 3', role: 'Terminologie de Base', topic: 'Sommets, arêtes, boucles, multigraphes' },
    { id: 4, name: 'Personne 4', role: 'Graphes Orientés', topic: 'Différenciation conceptuelle' },
    { id: 5, name: 'Personne 5', role: 'Graphes Pondérés', topic: 'Définitions précises, exemples visuels' },
    { id: 6, name: 'Personne 6', role: 'Graphes Connexes', topic: 'Composantes connexes, planarité' },
    { id: 7, name: 'Personne 7', role: 'Matrice d\'Adjacence', topic: 'Construction, forces et limites' },
    { id: 8, name: 'Personne 8', role: 'Liste d\'Adjacence', topic: 'Méthode de construction, analyse' },
    { id: 9, name: 'Personne 9', role: 'Propriétés Métriques', topic: 'Degré, distance, diamètre' },
    { id: 10, name: 'Personne 10', role: 'Cycles & Chemins', topic: 'Chemin simple, cycle, détection' },
    { id: 11, name: 'Personne 11', role: 'Théorèmes (1)', topic: 'Euler, Dirac' },
    { id: 12, name: 'Personne 12', role: 'Théorèmes (2)', topic: 'Kuratowski, conditions de planarité' },
    { id: 13, name: 'Personne 13', role: 'Parcours BFS', topic: 'Concept, pseudo-code, cas d\'usage' },
    { id: 14, name: 'Personne 14', role: 'Parcours DFS', topic: 'Concept, pseudo-code, cas d\'usage' },
    { id: 15, name: 'Personne 15', role: 'Optimisation (1)', topic: 'Dijkstra, Bellman-Ford' },
    { id: 16, name: 'Personne 16', role: 'Optimisation (2)', topic: 'Prim, Kruskal, arbres couvrants' },
    { id: 17, name: 'Personne 17', role: 'Exercices', topic: 'Série complète avec corrections' },
  ];

  return (
    <section className="section active">
      <div className="content-card">
        <h2>Notre Équipe de 17 Personnes</h2>
        <p>Répartition des responsabilités pour un exposé complet et rigoureux</p>
      </div>

      <div className="grid">
        {teamMembers.map((member) => (
          <div key={member.id} className="grid-card">
            <h4>{member.name}</h4>
            <p className="role">{member.role}</p>
            <p className="topic">{member.topic}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// Utility function
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export default GraphTheoryApp;