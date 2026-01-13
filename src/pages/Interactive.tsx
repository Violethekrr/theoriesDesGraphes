import React, { useState } from 'react';
import {  Trash2, Play, Calculator, Sparkles } from 'lucide-react';
import { useTheme } from '../Context/ThemeContext';
interface Node {
  id: string;
  x: number;
  y: number;
  label: string;
}

interface Edge {
  from: string;
  to: string;
  weight?: number;
}

export default function Interactive() {
  const {isDark}= useTheme()
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);
  const [selectedNodes, setSelectedNodes] = useState<string[]>([]);
  const [nextNodeLabel, setNextNodeLabel] = useState(65); // ASCII 'A'
  const [edgeWeight, setEdgeWeight] = useState<number>(1);
  const [isWeighted, setIsWeighted] = useState(false);
  const [result, setResult] = useState<string>('');

  const addNode = (e: React.MouseEvent<SVGSVGElement>) => {
    const svg = e.currentTarget;
    const rect = svg.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 400;
    const y = ((e.clientY - rect.top) / rect.height) * 300;

    const newNode: Node = {
      id: `node-${nodes.length}`,
      x,
      y,
      label: String.fromCharCode(nextNodeLabel)
    };

    setNodes([...nodes, newNode]);
    setNextNodeLabel(nextNodeLabel + 1);
  };

  const selectNode = (nodeId: string) => {
    if (selectedNodes.includes(nodeId)) {
      setSelectedNodes(selectedNodes.filter(id => id !== nodeId));
    } else if (selectedNodes.length < 2) {
      const newSelected = [...selectedNodes, nodeId];
      setSelectedNodes(newSelected);

      // Si deux sommets sélectionnés, créer une arête
      if (newSelected.length === 2) {
        addEdge(newSelected[0], newSelected[1]);
        setSelectedNodes([]);
      }
    }
  };

  const addEdge = (from: string, to: string) => {
    const edgeExists = edges.some(e => 
      (e.from === from && e.to === to) || (e.from === to && e.to === from)
    );

    if (!edgeExists) {
      setEdges([...edges, { from, to, weight: isWeighted ? edgeWeight : undefined }]);
    }
  };

  const calculateDegree = () => {
    if (nodes.length === 0) {
      setResult('Aucun sommet dans le graphe');
      return;
    }

    const degrees = nodes.map(node => {
      const degree = edges.filter(e => e.from === node.id || e.to === node.id).length;
      return `deg(${node.label}) = ${degree}`;
    });

    setResult(degrees.join(', '));
  };

  const buildAdjacencyMatrix = () => {
    if (nodes.length === 0) {
      setResult('Aucun sommet dans le graphe');
      return;
    }

    const n = nodes.length;
    const matrix: number[][] = Array(n).fill(0).map(() => Array(n).fill(0));

    edges.forEach(edge => {
      const fromIdx = nodes.findIndex(n => n.id === edge.from);
      const toIdx = nodes.findIndex(n => n.id === edge.to);
      
      if (fromIdx !== -1 && toIdx !== -1) {
        matrix[fromIdx][toIdx] = edge.weight || 1;
        matrix[toIdx][fromIdx] = edge.weight || 1; // Graphe non orienté
      }
    });

    let matrixStr = 'Matrice d\'adjacence:\n\n';
    matrixStr += '    ' + nodes.map(n => n.label).join('  ') + '\n';
    
    matrix.forEach((row, i) => {
      matrixStr += `${nodes[i].label}  ` + row.map(val => val.toString().padStart(2)).join('  ') + '\n';
    });

    setResult(matrixStr);
  };



  const checkEulerian = () => {
    if (nodes.length === 0) {
      setResult('Aucun sommet dans le graphe');
      return;
    }

    const degrees = nodes.map(node => {
      return edges.filter(e => e.from === node.id || e.to === node.id).length;
    });

    const oddDegrees = degrees.filter(d => d % 2 !== 0).length;

    let resultStr = '🎓 Test du Théorème d\'Euler\n\n';
    resultStr += `Degrés : ${nodes.map((n, i) => `${n.label}=${degrees[i]}`).join(', ')}\n\n`;
    resultStr += `Sommets de degré impair : ${oddDegrees}\n\n`;

    if (oddDegrees === 0) {
      resultStr += '✅ Le graphe possède un CYCLE EULÉRIEN\n(tous les degrés sont pairs)';
    } else if (oddDegrees === 2) {
      resultStr += '✅ Le graphe possède un CHEMIN EULÉRIEN\n(exactement 2 sommets de degré impair)';
    } else {
      resultStr += '❌ Le graphe n\'est PAS eulérien\n(ni cycle ni chemin eulérien)';
    }

    setResult(resultStr);
  };

  const checkDirac = () => {
    if (nodes.length < 3) {
      setResult('Le théorème de Dirac nécessite au moins 3 sommets');
      return;
    }

    const n = nodes.length;
    const degrees = nodes.map(node => {
      return edges.filter(e => e.from === node.id || e.to === node.id).length;
    });

    const minDegree = Math.min(...degrees);
    const condition = n / 2;

    let resultStr = '🎓 Test du Théorème de Dirac (Cycle Hamiltonien)\n\n';
    resultStr += `Nombre de sommets : n = ${n}\n`;
    resultStr += `Condition : deg(v) ≥ n/2 = ${condition}\n\n`;
    resultStr += `Degrés : ${nodes.map((n, i) => `${n.label}=${degrees[i]}`).join(', ')}\n`;
    resultStr += `Degré minimum : ${minDegree}\n\n`;

    if (minDegree >= condition) {
      resultStr += `✅ ${minDegree} ≥ ${condition}\n`;
      resultStr += 'Le graphe est HAMILTONIEN selon Dirac\n';
      resultStr += '(possède un cycle passant par tous les sommets)';
    } else {
      resultStr += `❌ ${minDegree} < ${condition}\n`;
      resultStr += 'Le théorème de Dirac ne s\'applique pas\n';
      resultStr += '(le graphe peut quand même être hamiltonien)';
    }

    setResult(resultStr);
  };

  const runBFS = () => {
    if (nodes.length === 0) {
      setResult('Aucun sommet dans le graphe');
      return;
    }

    const start = nodes[0];
    const visited = new Set<string>();
    const queue: string[] = [start.id];
    const distances: Map<string, number> = new Map();
    const order: string[] = [];
    
    visited.add(start.id);
    distances.set(start.id, 0);

    while (queue.length > 0) {
      const current = queue.shift()!;
      const currentNode = nodes.find(n => n.id === current)!;
      order.push(currentNode.label);

      const neighbors = edges
        .filter(e => e.from === current || e.to === current)
        .map(e => e.from === current ? e.to : e.from);

      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
          distances.set(neighbor, (distances.get(current) || 0) + 1);
        }
      }
    }

    let resultStr = ' Parcours BFS (Breadth-First Search)\n\n';
    resultStr += `Sommet de départ : ${start.label}\n\n`;
    resultStr += `Ordre de visite : ${order.join(' → ')}\n\n`;
    resultStr += 'Distances depuis ' + start.label + ' :\n';
    
    nodes.forEach(node => {
      const dist = distances.get(node.id);
      resultStr += `d(${start.label}, ${node.label}) = ${dist !== undefined ? dist : '∞'}\n`;
    });

    setResult(resultStr);
  };

  const runDFS = () => {
    if (nodes.length === 0) {
      setResult('Aucun sommet dans le graphe');
      return;
    }

    const start = nodes[0];
    const visited = new Set<string>();
    const order: string[] = [];

    const dfsVisit = (nodeId: string) => {
      visited.add(nodeId);
      const node = nodes.find(n => n.id === nodeId)!;
      order.push(node.label);

      const neighbors = edges
        .filter(e => e.from === nodeId || e.to === nodeId)
        .map(e => e.from === nodeId ? e.to : e.from);

      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          dfsVisit(neighbor);
        }
      }
    };

    dfsVisit(start.id);

    let resultStr = ' Parcours DFS (Depth-First Search)\n\n';
    resultStr += `Sommet de départ : ${start.label}\n\n`;
    resultStr += `Ordre de visite : ${order.join(' → ')}\n\n`;
    resultStr += 'Exploration en profondeur (descend au maximum\n';
    resultStr += 'avant de revenir en arrière)';

    setResult(resultStr);
  };

  const runDijkstra = () => {
    if (nodes.length === 0) {
      setResult('Aucun sommet dans le graphe');
      return;
    }

    if (!isWeighted) {
      setResult(' Dijkstra nécessite un graphe pondéré.\nActivez "Graphe pondéré" et ajoutez des poids aux arêtes.');
      return;
    }

    const start = nodes[0];
    const distances: Map<string, number> = new Map();
    const previous: Map<string, string> = new Map();
    const unvisited = new Set(nodes.map(n => n.id));

    nodes.forEach(node => {
      distances.set(node.id, node.id === start.id ? 0 : Infinity);
    });

    while (unvisited.size > 0) {
      let current: string | null = null;
      let minDist = Infinity;

      unvisited.forEach(nodeId => {
        const dist = distances.get(nodeId) || Infinity;
        if (dist < minDist) {
          minDist = dist;
          current = nodeId;
        }
      });

      if (current === null || minDist === Infinity) break;

      unvisited.delete(current);

      const neighbors = edges
        .filter(e => e.from === current || e.to === current)
        .map(e => ({
          id: e.from === current ? e.to : e.from,
          weight: e.weight || 1
        }));

      for (const neighbor of neighbors) {
        if (unvisited.has(neighbor.id)) {
          const alt = (distances.get(current) || 0) + neighbor.weight;
          if (alt < (distances.get(neighbor.id) || Infinity)) {
            distances.set(neighbor.id, alt);
            previous.set(neighbor.id, current);
          }
        }
      }
    }

    let resultStr = ' Algorithme de Dijkstra\n\n';
    resultStr += `Sommet source : ${start.label}\n\n`;
    resultStr += 'Plus courts chemins :\n';

    nodes.forEach(node => {
      const dist = distances.get(node.id);
      if (dist !== undefined && dist !== Infinity) {
        resultStr += `${start.label} → ${node.label} : distance = ${dist}\n`;
        
        if (node.id !== start.id) {
          const path: string[] = [];
          let current: string | undefined = node.id;
          while (current) {
            const n = nodes.find(n => n.id === current)!;
            path.unshift(n.label);
            current = previous.get(current);
          }
          resultStr += `   Chemin : ${path.join(' → ')}\n`;
        }
      }
    });

    setResult(resultStr);
  };

  const checkConnectivity = () => {
    if (nodes.length === 0) {
      setResult('Aucun sommet dans le graphe');
      return;
    }

    const visited = new Set<string>();
    
    const dfs = (nodeId: string) => {
      visited.add(nodeId);
      const neighbors = edges
        .filter(e => e.from === nodeId || e.to === nodeId)
        .map(e => e.from === nodeId ? e.to : e.from);

      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          dfs(neighbor);
        }
      }
    };

    dfs(nodes[0].id);

    const isConnected = visited.size === nodes.length;
    const components: string[][] = [];

    if (!isConnected) {
      const remaining = new Set(nodes.map(n => n.id));
      
      while (remaining.size > 0) {
        const start = remaining.values().next().value!;
        const component = new Set<string>();
        
        const dfsComponent = (nodeId: string) => {
          component.add(nodeId);
          remaining.delete(nodeId);
          const neighbors = edges
            .filter(e => e.from === nodeId || e.to === nodeId)
            .map(e => e.from === nodeId ? e.to : e.from);

          for (const neighbor of neighbors) {
            if (remaining.has(neighbor)) {
              dfsComponent(neighbor);
            }
          }
        };


        dfsComponent(start);
        components.push(Array.from(component).map(id => nodes.find(n => n.id === id)!.label));
      }
    }

    let resultStr = '🔗 Test de Connexité\n\n';
    resultStr += `Sommets visités depuis ${nodes[0].label} : ${visited.size}/${nodes.length}\n\n`;

    if (isConnected) {
      resultStr += '✅ Le graphe est CONNEXE\n';
      resultStr += '(Il existe un chemin entre chaque paire de sommets)';
    } else {
      resultStr += '❌ Le graphe n\'est PAS CONNEXE\n\n';
      resultStr += `Nombre de composantes connexes : ${components.length}\n\n`;
      components.forEach((comp, i) => {
        resultStr += `Composante ${i + 1} : {${comp.join(', ')}}\n`;
      });
    }

    setResult(resultStr);
  };

  const checkPlanarity = () => {
    if (nodes.length === 0) {
      setResult('Aucun sommet dans le graphe');
      return;
    }

    const v = nodes.length;
    const e = edges.length;

    let resultStr = '🗺️ Test de Planarité\n\n';
    resultStr += `Sommets (s) : ${v}\n`;
    resultStr += `Arêtes (a) : ${e}\n\n`;

    if (v < 3) {
      resultStr += '✅ Le graphe est PLANAIRE\n(moins de 3 sommets)';
    } else {
      const maxEdges = 3 * v - 6;
      resultStr += `Condition nécessaire : a ≤ 3s - 6\n`;
      resultStr += `${e} ≤ ${maxEdges}\n\n`;

      if (e <= maxEdges) {
        resultStr += '✅ Condition satisfaite\n';
        resultStr += 'Le graphe POURRAIT être planaire\n\n';
        resultStr += '(Test complet nécessiterait de vérifier\n';
        resultStr += 'l\'absence de K₅ ou K₃,₃ - Kuratowski)';
      } else {
        resultStr += '❌ Condition violée\n';
        resultStr += 'Le graphe n\'est PAS PLANAIRE\n';
        resultStr += '(trop d\'arêtes pour être dessiné sans croisements)';
      }
    }

    setResult(resultStr);
  };

  const clear = () => {
    setNodes([]);
    setEdges([]);
    setSelectedNodes([]);
    setNextNodeLabel(65);
    setResult('');
  };

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
      `}</style>

      <div className="relative container mx-auto px-6 py-8">
       

        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mt-10">
            <div className={`p-3 rounded-xl ${isDark ? 'bg-purple-500/20' : 'bg-teal-100'}`}>
              <Sparkles className={isDark ? 'text-purple-300' : 'text-teal-700'} size={28} />
            </div>
            <div>
            
              <h1 className={`text-2xl md:text-3xl xl:text-4xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Graphes Interactifs
              </h1>
            </div>
          </div>

          <p className={`text-xl mb-8 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
            Créez votre propre graphe et effectuez des calculs en temps réel !
          </p>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Zone de dessin */}
            <div className={`lg:col-span-2 p-6 rounded-2xl border ${
              isDark 
                ? 'bg-linear-to-br from-indigo-950/40 to-purple-950/40 border-indigo-500/20' 
                : 'bg-white border-teal-200/40 shadow-lg'
            }`}>
              <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                 Zone de Dessin
              </h3>

              <div className={`p-4 rounded-lg mb-4 ${isDark ? 'bg-slate-900/40' : 'bg-teal-50'}`}>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                   <strong>Instructions :</strong> Cliquez sur la zone pour ajouter des sommets. 
                  Cliquez sur deux sommets pour créer une arête entre eux.
                </p>
              </div>

              <svg
                className={`w-full h-96 rounded-xl border-2 cursor-crosshair ${
                  isDark ? 'bg-slate-950/50 border-indigo-500/30' : 'bg-linear-to-br from-teal-50 to-emerald-50 border-teal-300'
                }`}
                viewBox="0 0 400 300"
                onClick={addNode}
              >
                {/* Arêtes */}
                {edges.map((edge, i) => {
                  const fromNode = nodes.find(n => n.id === edge.from);
                  const toNode = nodes.find(n => n.id === edge.to);
                  
                  if (!fromNode || !toNode) return null;

                  return (
                    <g key={i}>
                      <line
                        x1={fromNode.x}
                        y1={fromNode.y}
                        x2={toNode.x}
                        y2={toNode.y}
                        stroke={isDark ? '#818cf8' : '#14b8a6'}
                        strokeWidth="3"
                        opacity="0.7"
                      />
                      {isWeighted && edge.weight && (
                        <text
                          x={(fromNode.x + toNode.x) / 2}
                          y={(fromNode.y + toNode.y) / 2 - 5}
                          textAnchor="middle"
                          className={`text-xs font-bold ${isDark ? 'fill-yellow-400' : 'fill-orange-600'}`}
                        >
                          {edge.weight}
                        </text>
                      )}
                    </g>
                  );
                })}

                {/* Sommets */}
                {nodes.map(node => (
                  <g key={node.id} onClick={(e) => {
                    e.stopPropagation();
                    selectNode(node.id);
                  }}>
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r="20"
                      fill={selectedNodes.includes(node.id) 
                        ? (isDark ? '#22c55e' : '#14b8a6')
                        : (isDark ? '#6366f1' : '#14b8a6')
                      }
                      className="cursor-pointer hover:opacity-80"
                    />
                    <text
                      x={node.x}
                      y={node.y + 5}
                      textAnchor="middle"
                      className="text-sm font-bold fill-white pointer-events-none"
                    >
                      {node.label}
                    </text>
                  </g>
                ))}
              </svg>

              {/* Contrôles */}
              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  onClick={clear}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                    isDark 
                      ? 'bg-red-600 hover:bg-red-700 text-white' 
                      : 'bg-red-500 hover:bg-red-600 text-white'
                  }`}
                >
                  <Trash2 size={16} />
                  Effacer tout
                </button>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="weighted"
                    checked={isWeighted}
                    onChange={(e) => setIsWeighted(e.target.checked)}
                    className="w-4 h-4"
                  />
                  <label htmlFor="weighted" className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                    Graphe pondéré
                  </label>
                </div>

                {isWeighted && (
                  <div className="flex items-center gap-2">
                    <label className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                      Poids:
                    </label>
                    <input
                      type="number"
                      value={edgeWeight}
                      onChange={(e) => setEdgeWeight(parseInt(e.target.value) || 1)}
                      min="1"
                      className={`w-16 px-2 py-1 rounded ${
                        isDark ? 'bg-slate-800 text-white' : 'bg-white text-slate-900 border border-teal-300'
                      }`}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Panneau de calculs */}
            <div className={`p-6 rounded-2xl border ${
              isDark 
                ? 'bg-linear-to-br from-purple-950/40 to-indigo-950/40 border-purple-500/20' 
                : 'bg-white border-teal-200/40 shadow-lg'
            }`}>
              <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                 Calculs
              </h3>

              <div className={`mb-4 p-3 rounded-lg ${isDark ? 'bg-slate-900/40' : 'bg-teal-50'}`}>
                <p className={`text-xs font-semibold mb-1 ${isDark ? 'text-indigo-300' : 'text-teal-700'}`}>
                   Propriétés de Base
                </p>
              </div>

              <div className="space-y-2 mb-6">
                <button
                  onClick={calculateDegree}
                  className={`w-full flex items-center gap-2 px-4 py-2 text-sm rounded-lg ${
                    isDark 
                      ? 'bg-indigo-600 hover:bg-indigo-700 text-white' 
                      : 'bg-teal-600 hover:bg-teal-700 text-white'
                  }`}
                >
                  <Calculator size={16} />
                  Calculer les degrés
                </button>

                <button
                  onClick={buildAdjacencyMatrix}
                  className={`w-full flex items-center gap-2 px-4 py-2 text-sm rounded-lg ${
                    isDark 
                      ? 'bg-indigo-600 hover:bg-indigo-700 text-white' 
                      : 'bg-teal-600 hover:bg-teal-700 text-white'
                  }`}
                >
                  <Calculator size={16} />
                  Matrice d'adjacence
                </button>

                <button
                  onClick={checkConnectivity}
                  className={`w-full flex items-center gap-2 px-4 py-2 text-sm rounded-lg ${
                    isDark 
                      ? 'bg-indigo-600 hover:bg-indigo-700 text-white' 
                      : 'bg-teal-600 hover:bg-teal-700 text-white'
                  }`}
                >
                  <Calculator size={16} />
                  Test de connexité
                </button>

                <button
                  onClick={checkPlanarity}
                  className={`w-full flex items-center gap-2 px-4 py-2 text-sm rounded-lg ${
                    isDark 
                      ? 'bg-indigo-600 hover:bg-indigo-700 text-white' 
                      : 'bg-teal-600 hover:bg-teal-700 text-white'
                  }`}
                >
                  <Calculator size={16} />
                  Test de planarité
                </button>
              </div>

              <div className={`mb-4 p-3 rounded-lg ${isDark ? 'bg-slate-900/40' : 'bg-purple-50'}`}>
                <p className={`text-xs font-semibold mb-1 ${isDark ? 'text-purple-300' : 'text-purple-700'}`}>
                  🎓 Théorèmes
                </p>
              </div>

              <div className="space-y-2 mb-6">
                <button
                  onClick={checkEulerian}
                  className={`w-full flex items-center gap-2 px-4 py-2 text-sm rounded-lg ${
                    isDark 
                      ? 'bg-purple-600 hover:bg-purple-700 text-white' 
                      : 'bg-purple-600 hover:bg-purple-700 text-white'
                  }`}
                >
                  <Play size={16} />
                  Théorème d'Euler
                </button>

                <button
                  onClick={checkDirac}
                  className={`w-full flex items-center gap-2 px-4 py-2 text-sm rounded-lg ${
                    isDark 
                      ? 'bg-purple-600 hover:bg-purple-700 text-white' 
                      : 'bg-purple-600 hover:bg-purple-700 text-white'
                  }`}
                >
                  <Play size={16} />
                  Théorème de Dirac
                </button>
              </div>

              <div className={`mb-4 p-3 rounded-lg ${isDark ? 'bg-slate-900/40' : 'bg-orange-50'}`}>
                <p className={`text-xs font-semibold mb-1 ${isDark ? 'text-orange-300' : 'text-orange-700'}`}>
                   Algorithmes
                </p>
              </div>

              <div className="space-y-2">
                <button
                  onClick={runBFS}
                  className={`w-full flex items-center gap-2 px-4 py-2 text-sm rounded-lg ${
                    isDark 
                      ? 'bg-orange-600 hover:bg-orange-700 text-white' 
                      : 'bg-orange-600 hover:bg-orange-700 text-white'
                  }`}
                >
                  <Play size={16} />
                  Parcours BFS
                </button>

                <button
                  onClick={runDFS}
                  className={`w-full flex items-center gap-2 px-4 py-2 text-sm rounded-lg ${
                    isDark 
                      ? 'bg-orange-600 hover:bg-orange-700 text-white' 
                      : 'bg-orange-600 hover:bg-orange-700 text-white'
                  }`}
                >
                  <Play size={16} />
                  Parcours DFS
                </button>

                <button
                  onClick={runDijkstra}
                  className={`w-full flex items-center gap-2 px-4 py-2 text-sm rounded-lg ${
                    isDark 
                      ? 'bg-orange-600 hover:bg-orange-700 text-white' 
                      : 'bg-orange-600 hover:bg-orange-700 text-white'
                  }`}
                >
                  <Play size={16} />
                  Dijkstra (plus court chemin)
                </button>
              </div>

              {/* Statistiques du graphe */}
              <div className={`mt-6 p-4 rounded-lg ${isDark ? 'bg-slate-900/40' : 'bg-teal-50'}`}>
                <h4 className={`font-semibold mb-3 ${isDark ? 'text-indigo-300' : 'text-teal-700'}`}>
                   Statistiques
                </h4>
                <div className={`space-y-2 text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  <p><strong>Sommets :</strong> {nodes.length}</p>
                  <p><strong>Arêtes :</strong> {edges.length}</p>
                  <p><strong>Type :</strong> {isWeighted ? 'Pondéré' : 'Non pondéré'}</p>
                </div>
              </div>

              {/* Résultats */}
              {result && (
                <div className={`mt-6 p-4 rounded-lg border-l-4 ${
                  isDark 
                    ? 'bg-green-950/20 border-green-500' 
                    : 'bg-green-50 border-green-500'
                }`}>
                  <h4 className={`font-semibold mb-2 ${isDark ? 'text-green-400' : 'text-green-700'}`}>
                     Résultat :
                  </h4>
                  <pre className={`text-sm font-mono whitespace-pre-wrap ${
                    isDark ? 'text-green-300' : 'text-green-800'
                  }`}>
                    {result}
                  </pre>
                </div>
              )}
            </div>
          </div>

          {/* Exemples prédéfinis */}
          <div className={`mt-8 p-6 rounded-2xl border ${
            isDark 
              ? 'bg-linear-to-br from-indigo-950/40 to-purple-950/40 border-indigo-500/20' 
              : 'bg-white border-teal-200/40 shadow-lg'
          }`}>
            <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
               Exemples Prédéfinis
            </h3>

            <div className="grid md:grid-cols-3 gap-4">
              <button
                onClick={() => {
                  setNodes([
                    { id: 'n0', x: 100, y: 100, label: 'A' },
                    { id: 'n1', x: 200, y: 100, label: 'B' },
                    { id: 'n2', x: 150, y: 180, label: 'C' }
                  ]);
                  setEdges([
                    { from: 'n0', to: 'n1' },
                    { from: 'n1', to: 'n2' },
                    { from: 'n2', to: 'n0' }
                  ]);
                  setNextNodeLabel(68);
                  setResult('');
                }}
                className={`p-4 rounded-lg border-2 transition-all ${
                  isDark 
                    ? 'border-indigo-500/30 hover:border-indigo-400 hover:bg-slate-900/40' 
                    : 'border-teal-300 hover:border-teal-500 hover:bg-teal-50'
                }`}
              >
                <h4 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                   Triangle
                </h4>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Graphe simple à 3 sommets
                </p>
              </button>

              <button
                onClick={() => {
                  setNodes([
                    { id: 'n0', x: 100, y: 100, label: 'A' },
                    { id: 'n1', x: 300, y: 100, label: 'B' },
                    { id: 'n2', x: 300, y: 200, label: 'C' },
                    { id: 'n3', x: 100, y: 200, label: 'D' }
                  ]);
                  setEdges([
                    { from: 'n0', to: 'n1' },
                    { from: 'n1', to: 'n2' },
                    { from: 'n2', to: 'n3' },
                    { from: 'n3', to: 'n0' }
                  ]);
                  setNextNodeLabel(69);
                  setResult('');
                }}
                className={`p-4 rounded-lg border-2 transition-all ${
                  isDark 
                    ? 'border-indigo-500/30 hover:border-indigo-400 hover:bg-slate-900/40' 
                    : 'border-teal-300 hover:border-teal-500 hover:bg-teal-50'
                }`}
              >
                <h4 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  ◻ Carré
                </h4>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Graphe à 4 sommets (cycle)
                </p>
              </button>

              <button
                onClick={() => {
                  setNodes([
                    { id: 'n0', x: 200, y: 80, label: 'A' },
                    { id: 'n1', x: 120, y: 150, label: 'B' },
                    { id: 'n2', x: 280, y: 150, label: 'C' },
                    { id: 'n3', x: 200, y: 220, label: 'D' }
                  ]);
                  setEdges([
                    { from: 'n0', to: 'n1' },
                    { from: 'n0', to: 'n2' },
                    { from: 'n0', to: 'n3' },
                    { from: 'n1', to: 'n2' },
                    { from: 'n1', to: 'n3' },
                    { from: 'n2', to: 'n3' }
                  ]);
                  setNextNodeLabel(69);
                  setResult('');
                }}
                className={`p-4 rounded-lg border-2 transition-all ${
                  isDark 
                    ? 'border-indigo-500/30 hover:border-indigo-400 hover:bg-slate-900/40' 
                    : 'border-teal-300 hover:border-teal-500 hover:bg-teal-50'
                }`}
              >
                <h4 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                   K₄ Complet
                </h4>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Tous les sommets reliés
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
