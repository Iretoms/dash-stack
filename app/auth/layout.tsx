import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full min-h-screen bg-white md:bg-primary flex justify-center items-center">
      {children}
    </div>
  );
};

export default layout