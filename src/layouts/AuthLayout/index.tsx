import React from "react";
import { Outlet } from "react-router";

const AuthLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex w-full flex-1 flex-col items-center justify-center gap-10">
        <div className="rounded-xl bg-red-700 px-3 py-2 uppercase text-red-100">
          This route is protected. login to continue
        </div>
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
