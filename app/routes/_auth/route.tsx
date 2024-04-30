import { Outlet } from "@remix-run/react";

export default function AuthRoot() {
  return (
    <main className="w-screen h-screen bg-gradient-to-b from-orange-50 from-10% to-orange-200 via-60%">
      <Outlet />
    </main>
  );
}
