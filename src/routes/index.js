import NotFound from "../containers/NotFound/NotFound";
import Clients from "../containers/Clients";
import Detal from "../containers/Detal";
import Model from "../containers/Model";

export const routes = [
  {
    path: "/",
    component: Clients,
  },
  {
    path: "/clients",
    component: Clients,
  },
  {
    path: "/detal",
    component: Detal,
  },
  {
    path: "/model",
    component: Model,
  },
  {
    path: "/*",
    component: NotFound,
  },
];