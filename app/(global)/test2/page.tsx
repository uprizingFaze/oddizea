import {
  ReactFlow,
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

const initialNodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
  { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
  { id: "3", position: { x: 200, y: 100 }, data: { label: "3" } },
];
const initialEdges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e2-3", source: "2", target: "3" },
];

export default function Test2() {
  return (
    <main className="">
      <section className="py-20 flex flex-col items-center">
        <div
          className="border rounded-lg "
          style={{ width: "80vw", height: "80vh" }}
        >
          <ReactFlow className="" nodes={initialNodes} edges={initialEdges}>
            <Background />
            <Controls />
          </ReactFlow>
        </div>
      </section>
    </main>
  );
}
