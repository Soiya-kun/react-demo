import { Outlet } from "react-router-dom";

export function DefaultLayout() {
  return (
    <div className="flex h-screen w-full flex-row bg-gray-50">
      <main className="mx-auto w-full max-w-4xl overflow-y-auto text-gray-600">
        <Outlet />
      </main>
    </div>
  );
}
