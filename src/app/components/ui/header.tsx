import React from "react";

type HeaderProps = {
  title: string;
  id: number;
};

const Header = ({ id, title }: HeaderProps) => {
  return (
    <div>
      <h2 className="mb-4 text-maingrey text-nav sm:text-h2 font-bold">
        <span className="text-sm text-secondary font-normal mr-3">0{id}.</span>
        {title}
        <span
          className="mx-3 sm:inline-block w-60 opacity-25 bg-gradient-to-r from-maingrey to-transparent"
          style={{ height: "1px" }}
        ></span>
      </h2>
    </div>
  );
};

export default Header;
