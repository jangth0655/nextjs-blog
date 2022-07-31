import React from "react";

interface PageTitleProps {
  title: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return (
    <div className="mb-14 space-y-4">
      <div>
        <h1 className="text-3xl font-bold mb-2">Learned</h1>
        <span className="text-xl text-gray-500">{title}</span>
      </div>
      <div className="w-full h-[1.5px] bg-gray-500" />
    </div>
  );
};
export default PageTitle;
