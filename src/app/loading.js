import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Loading = () => {
  return (
    <div className="w-full min-h-screen bg-black">
      <Skeleton />
    </div>
  );
};

export default Loading;
