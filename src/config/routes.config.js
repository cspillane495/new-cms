import Dashboard from "../pages/Dashboard";
import Episodes from "../pages/Episodes";
import EpisodesShow from "../pages/Episodes/Show";
// import Blog from "../pages/Blog";
import Login from "../pages/Login";
// import Account from "../pages/Account";
// import ForgotPassword from "../pages/Account/ForgotPassword";
import Media from "../pages/Media";
import Upload from "../components/Upload";
import Users from "../pages/Users";

export default [
  {
    path: "/dashboard",
    exact: true,
    component: Dashboard,
    layout: "dashboard",
  },
  {
    path: "/media",
    component: Media,
    layout: "dashboard",
    children: [{ path: "/upload", component: Upload, layout: "dashboard" }],
  },
  {
    path: "/episodes",
    component: Episodes,
    layout: "dashboard",
    children: [
      {
        path: "/create",
        component: EpisodesShow,
        layout: "dashboard",
      },
      {
        path: "/:id/edit",
        component: EpisodesShow,
        layout: "dashboard",
      },
    ],
  },
  { path: "/users", component: Users, layout: "dashboard" },
  { path: "/login", exact: true, component: Login, layout: "login" },
];
