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
    title: "Dashboard",
    path: "/dashboard",
    exact: true,
    component: Dashboard,
    layout: "dashboard",
  },
  {
    title: "Media",
    path: "/media",
    component: Media,
    layout: "dashboard",
    children: [{ path: "/upload", component: Upload, layout: "dashboard" }],
  },
  {
    title: "Episodes",
    path: "/episodes",
    component: Episodes,
    layout: "dashboard",
    children: [
      {
        title: "Create Episodes",
        path: "/create",
        component: EpisodesShow,
        layout: "dashboard",
      },
      {
        title: "Update Episode",
        path: "/:id/edit",
        component: EpisodesShow,
        layout: "dashboard",
      },
    ],
  },
  { title: "Users", path: "/users", component: Users, layout: "dashboard" },
  {
    title: "Login",
    path: "/login",
    exact: true,
    component: Login,
    layout: "login",
  },
];
