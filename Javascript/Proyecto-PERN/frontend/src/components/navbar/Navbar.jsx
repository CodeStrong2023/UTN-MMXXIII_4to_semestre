import { Link, useLocation } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "./navigation";
import { Container } from "../ui";
import { useAuth } from "../../context/useAuth";

function Navbar() {
  const location = useLocation();
  const { isAuth, signout } = useAuth();
  return (
    <nav className="bg-zinc-950">
      <Container className=" flex justify-between items-center">
        <Link to="/">
          <h1 className="text-2xl font-bold text-white">Proyect PERN</h1>
        </Link>
        <ul className="flex gap-x-2 ">
          {isAuth ? (
            <>
              {PrivateRoutes.map(({ name, path }) => (
                <li
                  className={`text-slate-300 ${
                    location.pathname === path && "bg-sky-500 px-3 py-1"
                  }}`}
                  key={name}
                >
                  <Link to={path}>{name}</Link>
                </li>
              ))}
              <li onClick={() => signout()}>Salir</li>
            </>
          ) : (
            PublicRoutes.map(({ name, path }) => (
              <li
                className={`text-slate-300 ${
                  location.pathname === path && "bg-sky-500 px-3 py-1"
                }}`}
                key={name}
              >
                <Link to={path}>{name}</Link>
              </li>
            ))
          )}
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
