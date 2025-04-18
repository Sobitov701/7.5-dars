import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import Overview from "./pages/overview/Overview";
import Budgets from "./pages/budget/Budgets";
import Posts from "./pages/posts/Posts";
import RecurringBills from "./pages/recurringBills/RecurringBills";
import Transactions from "./pages/transactions/Transactions";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import { ProsetsedRouter } from "./componets";

function App() {
  const user = true;

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProsetsedRouter user={user}>
          <MainLayout />
        </ProsetsedRouter>
      ),
      children: [
        {
          index: true,
          element: <Overview />,
        },
        {
          path: "/budgets",
          element: <Budgets />,
        },
        {
          path: "/overview",
          element: <Overview />,
        },
        {
          path: "/posts",
          element: <Posts />,
        },
        {
          path: "/recurringBills",
          element: <RecurringBills />,
        },
        {
          path: "/transactions",
          element: <Transactions />,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/register",
      element: user ? <Navigate to="/" /> : <Register />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
