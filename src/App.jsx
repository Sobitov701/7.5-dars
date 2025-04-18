import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Overview from "./pages/overview/Overview";
import Budgets from "./pages/budget/Budgets";
import Posts from "./pages/posts/Posts";
import RecurringBills from "./pages/recurringBills/RecurringBills";
import Transactions from "./pages/transactions/Transactions";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
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
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
