"use client";
import { ChangeEventHandler, useCallback, useState } from "react";
import {
  ReactFlow,
  addEdge,
  Node,
  useNodesState,
  useEdgesState,
  OnConnect,
  Edge,
  MiniMap,
  Background,
  Controls,
  Panel,
  ColorMode,
  Position,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

const nodeDefaults = {
  sourcePosition: Position.Right,
  targetPosition: Position.Left,
};

const initialNodes: Node[] = [
  {
    id: "A",
    type: "input",
    position: { x: 0, y: 150 },
    data: { label: "A" },
    ...nodeDefaults,
  },
  {
    id: "B",
    position: { x: 250, y: 0 },
    data: { label: "B" },
    ...nodeDefaults,
  },
  {
    id: "C",
    position: { x: 250, y: 150 },
    data: { label: "C" },
    ...nodeDefaults,
  },
  {
    id: "D",
    position: { x: 250, y: 300 },
    data: { label: "D" },
    ...nodeDefaults,
  },
];

const initialEdges: Edge[] = [
  {
    id: "A-B",
    source: "A",
    target: "B",
  },
  {
    id: "A-C",
    source: "A",
    target: "C",
  },
  {
    id: "A-D",
    source: "A",
    target: "D",
  },
];

const ColorModeFlow = () => {
  const [colorMode, setColorMode] = useState<ColorMode>("dark");
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect: OnConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  const onChange: ChangeEventHandler<HTMLSelectElement> = (evt) => {
    setColorMode(evt.target.value as ColorMode);
  };

  return (
    <section className="py-20 flex flex-col items-center">
      <div
        className="border rounded-lg "
        style={{ width: "80vw", height: "80vh" }}
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          colorMode={colorMode}
          fitView
        >
          <MiniMap />
          <Background />
          <Controls />

          <Panel position="top-right">
            <select onChange={onChange} data-testid="colormode-select">
              <option value="dark">dark</option>
              <option value="light">light</option>
              <option value="system">system</option>
            </select>
          </Panel>
        </ReactFlow>
      </div>
    </section>
  );
};

export default ColorModeFlow;
