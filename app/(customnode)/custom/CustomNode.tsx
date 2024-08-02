import React, { memo } from "react";
import { Handle, Position } from "@xyflow/react";

interface CustomNodeProps {
  data: {
    item3: string;
    item1: string;
    item2: string;
  };
}

const CustomNode: React.FC<CustomNodeProps> = ({ data }) => {
  return (
    <div className="max-w-60 px-4 py-2 bg-white dark:bg-black shadow-md rounded-md border break-words">
      <div className="flex">
        <div className="ml-2">
          <div className="font-bold text-sm text-center my-1">{data.item1}</div>
          <div className="text-xs my-1">{data.item2}</div>
          <div className="text-muted-foreground text-xs my-1">{data.item3}</div>
        </div>
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
