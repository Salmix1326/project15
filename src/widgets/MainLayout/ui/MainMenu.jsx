import { NavLink } from "react-router";
import { routes } from "@/app/router";

export default function MainMenu() {
  const itemsForMenu = routes[0].children
    .filter((r) => r?.meta?.label)
    .map((r) => ({
      path: r.index ? "/" : r.path,
      label: r.meta.label,
    }));

  return (
    <header className="bg-gradient-to-r from-blue-100 to-blue-200 shadow-md w-full mb-5">
      <nav className="container flex items-center justify-start gap-10 p-2">
        <div className="text-blue-700 font-bold text-xl">DreamApp</div>
        <div className="flex gap-10">
          {itemsForMenu.map((r) => (
            <NavLink
              key={r.path}
              to={r.path}
              className={({ isActive }) =>
                `text-blue-900 hover:text-blue-900 ${
                  isActive
                    ? "font-bold border-blue-900"
                    : "font-semibold"
                }`
              }
            >
              {r.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
