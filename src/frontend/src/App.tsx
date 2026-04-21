import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
  redirect,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";
import { Layout } from "./components/Layout";

const HomePage = lazy(() => import("./pages/Home"));
const LoginPage = lazy(() => import("./pages/Login"));
const SignupPage = lazy(() => import("./pages/Signup"));
const ServicesPage = lazy(() => import("./pages/Services"));
const AboutPage = lazy(() => import("./pages/About"));
const ContactPage = lazy(() => import("./pages/Contact"));
const OwnerPanelPage = lazy(() => import("./pages/OwnerPanel"));
const StaffDashboardPage = lazy(() => import("./pages/StaffDashboard"));
const ClientPortalPage = lazy(() => import("./pages/ClientPortal"));

const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
    </Layout>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: LoginPage,
});

const signupRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/signup",
  component: SignupPage,
});

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services",
  component: ServicesPage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

const ownerPanelRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/owner-panel",
  component: OwnerPanelPage,
  beforeLoad: () => {
    // Auth protection handled inside the page component
  },
});

const staffDashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/staff-dashboard",
  component: StaffDashboardPage,
});

const clientPortalRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/client-portal",
  component: ClientPortalPage,
});

// Legacy dashboard redirect
const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dashboard",
  beforeLoad: () => {
    throw redirect({ to: "/client-portal" });
  },
  component: () => null,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  loginRoute,
  signupRoute,
  servicesRoute,
  aboutRoute,
  contactRoute,
  ownerPanelRoute,
  staffDashboardRoute,
  clientPortalRoute,
  dashboardRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function PageLoader() {
  return (
    <div
      className="flex items-center justify-center min-h-[60vh]"
      data-ocid="app.loading_state"
    >
      <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
    </div>
  );
}

export default function App() {
  return <RouterProvider router={router} />;
}
