
import { ReactNode } from 'react';

interface SuperBlockContainerProps {
  children: ReactNode;
}

export function SuperBlockContainer({ children }: SuperBlockContainerProps) {
  return (
    <div className="relative bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-1 md:p-2 rounded-xl border border-purple-500/30 shadow-xl shadow-purple-500/10 overflow-hidden">
      {/* Caption for the Super Block */}
      <div className="absolute top-0 left-0 right-0 text-center bg-gradient-to-r from-purple-900/80 via-indigo-900/80 to-blue-900/80 p-2 text-white text-sm font-bold z-10">
        MineChain Super Block - 243 Blocks Inside 1 Super Block
      </div>
      
      {children}
    </div>
  );
}
