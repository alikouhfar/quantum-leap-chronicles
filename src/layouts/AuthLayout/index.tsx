import React from "react";
import { Outlet } from "react-router";

const AuthLayout: React.FC = () => {
  return (
    <div className="flex flex-col">
      <main className="flex w-full flex-1 flex-col items-center justify-center gap-10">
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
