"use client";
import React, { useCallback } from "react";
import Sidebar from "./components/sidebar";
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  MiniMap,
  Controls,
  Connection,
  Background,
  useReactFlow,
  ReactFlowProvider,
} from "@xyflow/react";
import "@xyflow/react/dist/base.css";
import CustomNode from "./CustomNode";

const nodeTypes = {
  custom: CustomNode,
};

interface NodeData extends Record<string, unknown> {
  item1: string;
  item2: string;
  item3: string;
}

interface InitNode {
  id: string;
  type: string;
  data: NodeData;
  position: { x: number; y: number };
}

interface InitEdge {
  id: string;
  source: string;
  target: string;
}

const initNodes: InitNode[] = [
  {
    id: "1",
    type: "custom",
    data: {
      item1: "Resident Evil",
      item2: "Saga principal",
      item3: "Inicio de la franquicia",
    },
    position: { x: 0, y: 0 },
  },
  {
    id: "2",
    type: "custom",
    data: {
      item1: "Resident Evil 1",
      item2: "Juego original",
      item3: "Introducción a Raccoon City",
    },
    position: { x: 100, y: 100 },
  },
  {
    id: "3",
    type: "custom",
    data: {
      item1: "Resident Evil 2",
      item2: "Escapando de Raccoon",
      item3: "Nuevos personajes: Leon y Claire",
    },
    position: { x: 200, y: 200 },
  },
  {
    id: "4",
    type: "custom",
    data: {
      item1: "Resident Evil 3",
      item2: "Nemesis",
      item3: "El apocalipsis de Raccoon",
    },
    position: { x: 300, y: 200 },
  },
  {
    id: "5",
    type: "custom",
    data: {
      item1: "Resident Evil 4",
      item2: "Cambio de perspectiva",
      item3: "Aventura en Europa",
    },
    position: { x: 400, y: 100 },
  },
  {
    id: "6",
    type: "custom",
    data: {
      item1: "Resident Evil 5",
      item2: "Acción cooperativa",
      item3: "África y el virus Uroboros",
    },
    position: { x: 500, y: 200 },
  },
  {
    id: "7",
    type: "custom",
    data: {
      item1: "Resident Evil 6",
      item2: "Múltiples historias",
      item3: "Conclusión del ciclo",
    },
    position: { x: 600, y: 100 },
  },
  {
    id: "8",
    type: "custom",
    data: {
      item1: "Resident Evil 7",
      item2: "Regreso a lo básico",
      item3: "Perspectiva en primera persona",
    },
    position: { x: 700, y: 200 },
  },
  {
    id: "9",
    type: "custom",
    data: {
      item1: "Resident Evil Village",
      item2: "Nuevo entorno",
      item3: "Enfrentamiento con Lady Dimitrescu",
    },
    position: { x: 800, y: 200 },
  },
  {
    id: "10",
    type: "custom",
    data: {
      item1: "Resident Evil: The Umbrella Chronicles",
      item2: "Historia de la corporación",
      item3: "",
    },
    position: { x: 0, y: 300 },
  },
  {
    id: "11",
    type: "custom",
    data: {
      item1: "Resident Evil: The Darkside Chronicles",
      item2: "Secuela de Umbrella Chronicles",
      item3: "",
    },
    position: { x: 0, y: 400 },
  },
  {
    id: "12",
    type: "custom",
    data: {
      item1: "Resident Evil: Revelations",
      item2: "Historia entre RE5 y RE6",
      item3: "",
    },
    position: { x: 100, y: 300 },
  },
  {
    id: "13",
    type: "custom",
    data: {
      item1: "Resident Evil: Revelations 2",
      item2: "Cooperación en capítulos",
      item3: "",
    },
    position: { x: 200, y: 400 },
  },
  {
    id: "14",
    type: "custom",
    data: { item1: "Resident Evil: Zero", item2: "Precuela de RE1", item3: "" },
    position: { x: 300, y: 300 },
  },
  {
    id: "15",
    type: "custom",
    data: {
      item1: "Resident Evil 3 Remake",
      item2: "Remake del clásico",
      item3: "Mejoras gráficas y jugables",
    },
    position: { x: 400, y: 400 },
  },
];

const initEdges: InitEdge[] = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
  },
  {
    id: "e2-3",
    source: "2",
    target: "3",
  },
  {
    id: "e2-4",
    source: "2",
    target: "4",
  },
  {
    id: "e1-5",
    source: "1",
    target: "5",
  },
  {
    id: "e5-6",
    source: "5",
    target: "6",
  },
  {
    id: "e5-7",
    source: "5",
    target: "7",
  },
  {
    id: "e7-8",
    source: "7",
    target: "8",
  },
  {
    id: "e8-9",
    source: "8",
    target: "9",
  },
  {
    id: "e1-10",
    source: "1",
    target: "10",
  },
  {
    id: "e10-11",
    source: "10",
    target: "11",
  },
  {
    id: "e10-12",
    source: "10",
    target: "12",
  },
  {
    id: "e12-13",
    source: "12",
    target: "13",
  },
  {
    id: "e1-14",
    source: "1",
    target: "14",
  },
  {
    id: "e14-15",
    source: "14",
    target: "15",
  },
];

const Flow: React.FC = () => {
  const getId = () => {
    return `${+new Date()}`; // Generador de ID
  };

  // En este punto podemos usar estados de nodos y aristas
  const [nodes, setNodes, onNodesChange] = useNodesState(initNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initEdges);

  // Ahora podemos usar useReactFlow sin errores
  const { screenToFlowPosition } = useReactFlow();

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  const onDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      const type = event.dataTransfer.getData("application/reactflow");

      if (!type) {
        return;
      }

      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      const newNode = {
        id: getId(),
        type,
        position,
        data: {
          item1: "New Node",
          item2: "Description",
          item3: "Additional Info",
        } as NodeData,
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [setNodes, screenToFlowPosition],
  );

  return (
    <section className="py-20 flex flex-col items-center">
      <div
        className="border rounded-lg"
        style={{ width: "80vw", height: "80vh" }}
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          onDrop={onDrop}
          onDragOver={onDragOver}
          fitView
          className="bg-teal-500"
        >
          <Background />
          <Controls />
        </ReactFlow>
        <Sidebar />
      </div>
    </section>
  );
};

const FlowWithProvider: React.FC = () => (
  <ReactFlowProvider>
    <Flow />
  </ReactFlowProvider>
);

export default FlowWithProvider;
