"use client";
import { useState, useCallback } from "react";
import {
  ReactFlow,
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  MiniMap,
} from "@xyflow/react";

const initialNodes = [
  {
    id: "1",
    data: { label: "Teclados Mecánicos" },
    position: { x: 400, y: 20 },
    type: "input",
  },
  {
    id: "2",
    data: { label: "Tipos de Switches" },
    position: { x: 150, y: 150 },
  },
  {
    id: "3",
    data: { label: "Switches Lineales" },
    position: { x: 150, y: 250 },
  },
  {
    id: "4",
    data: { label: "Switches Táctiles" },
    position: { x: 150, y: 350 },
  },
  {
    id: "5",
    data: { label: "Switches Clicky" },
    position: { x: 150, y: 450 },
  },
  {
    id: "6",
    data: { label: "Construcción" },
    position: { x: 650, y: 150 },
  },
  {
    id: "7",
    data: { label: "Placas de Aluminio" },
    position: { x: 650, y: 250 },
  },
  {
    id: "8",
    data: { label: "Material de Teclas" },
    position: { x: 650, y: 350 },
  },
  {
    id: "9",
    data: { label: "Iluminación" },
    position: { x: 650, y: 450 },
  },
  {
    id: "10",
    data: { label: "Ventajas" },
    position: { x: 400, y: 650 },
  },
  {
    id: "11",
    data: { label: "Durabilidad" },
    position: { x: 250, y: 750 },
  },
  {
    id: "12",
    data: { label: "Personalización" },
    position: { x: 400, y: 750 },
  },
  {
    id: "13",
    data: { label: "Experiencia de Escritura" },
    position: { x: 550, y: 750 },
  },
];

const initialEdges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e1-6", source: "1", target: "6" },
  { id: "e1-10", source: "1", target: "10" },
  { id: "e2-3", source: "2", target: "3" },
  { id: "e2-4", source: "2", target: "4" },
  { id: "e2-5", source: "2", target: "5" },
  { id: "e6-7", source: "6", target: "7" },
  { id: "e6-8", source: "6", target: "8" },
  { id: "e6-9", source: "6", target: "9" },
  { id: "e10-11", source: "10", target: "11" },
  { id: "e10-12", source: "10", target: "12" },
  { id: "e10-13", source: "10", target: "13" },
];

function Flow() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes: any) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [],
  );
  const onEdgesChange = useCallback(
    (changes: any) => setEdges((eds: any) => applyEdgeChanges(changes, eds)),
    [],
  );

  const onConnect = useCallback(
    (params: any) => setEdges((eds: any) => addEdge(params, eds)),
    [],
  );

  return (
    <section className="py-20 flex flex-col items-center">
      <div
        className="border rounded-lg"
        style={{ width: "80vw", height: "80vh" }}
      >
        <ReactFlow
          nodes={nodes}
          onNodesChange={onNodesChange}
          edges={edges}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
        >
          <Background />
          <MiniMap />
          <Controls />
        </ReactFlow>
      </div>
    </section>
  );
}

export default Flow;
