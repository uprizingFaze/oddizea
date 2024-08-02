import React, { memo } from "react";
import { Handle, Position } from "@xyflow/react";

interface CustomNodeProps {
  data: {
    emoji: string;
    name: string;
    job: string;
  };
}

const CustomNode: React.FC<CustomNodeProps> = ({ data }) => {
  return (
    <div className="px-4 py-2 bg-white dark:bg-black shadow-md rounded-md border">
      <div className="flex">
        <div className="ml-2">
          <div className="font-bold">{data.name}</div>
          <div className="text-gray-500">{data.job}</div>
        </div>
        <div className=" ">{data.emoji}</div>
      </div>

      <Handle type="target" position={Position.Top} className="w-4 !bg-white" />
      <Handle
        type="source"
        position={Position.Bottom}
        className="w-2 !bg-white"
      />
    </div>
  );
};

export default memo(CustomNode);
