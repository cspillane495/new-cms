import Dashboard from "../pages/Dashboard";
import Episodes from "../pages/Episodes";
import EpisodesShow from "../pages/Episodes/Show";
// import Blog from "../pages/Blog";
import Login from "../pages/Login";
import Account from "../pages/Account";
import AccountSettings from "../pages/Account/Settings";
// import ForgotPassword from "../pages/Account/ForgotPassword";
import Media from "../pages/Media";
import UploadMedia from "../components/Upload";
import Users from "../pages/Users";
import Help from "../pages/Help";

import {
  Bullseye,
  Collection,
  Film,
  Upload,
  People,
} from "react-bootstrap-icons";

const routes = [
  {
    title: "Dashboard",
    path: "/dashboard",
    exact: true,
    component: Dashboard,
    layout: "dashboard",
    icon: Bullseye,
  },
  {
    title: "Media",
    path: "/media",
    component: Media,
    layout: "dashboard",
    icon: Film,
    children: [
      {
        title: "Upload Media",
        path: "/upload",
        component: UploadMedia,
        layout: "dashboard",
        icon: Upload,
      },
    ],
  },
  {
    title: "Episodes",
    path: "/episodes",
    component: Episodes,
    layout: "dashboard",
    exact: true,
    icon: Collection,
    children: [
      {
        title: "Create Episodes",
        path: "/create",
        component: EpisodesShow,
        exact: true,
        layout: "dashboard",
      },
      {
        title: "Update Episode",
        path: "/:id/edit",
        exact: true,
        component: EpisodesShow,
        layout: "dashboard",
        removeFromMenu: true,
      },
    ],
  },
  {
    title: "Users",
    exact: true,
    path: "/users",
    component: Users,
    layout: "dashboard",
    icon: People,
  },
  {
    title: "Login",
    path: "/login",
    exact: true,
    component: Login,
    layout: "login",
    removeFromMenu: true,
  },
  {
    title: "Help",
    path: "/help",
    exact: true,
    component: Help,
    layout: "dashboard",
    removeFromMenu: true,
  },
  {
    title: "Account",
    path: "/account",
    exact: true,
    component: Account,
    layout: "dashboard",
    removeFromMenu: true,
    children: [
      {
        title: "Account Settings",
        path: "/settings",
        exact: true,
        component: AccountSettings,
        layout: "dashboard",
        removeFromMenu: true,
      },
    ],
  },
];

export default routes;
