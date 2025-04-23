import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import MainLayout from "./layout/MainLayout";
import Overview from "./pages/overview/Overview";
import Budgets from "./pages/budget/Budgets";
import Posts from "./pages/posts/Posts";
import RecurringBills from "./pages/recurringBills/RecurringBills";
import Transactions from "./pages/transactions/Transactions";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { ProsetsedRouter } from "./componets";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";
import { login } from "./app/feature/userSlice";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        const updatedUser = {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName || "No Name",
          photoURL: user.photoURL || "https://via.placeholder.com/150",
        };
        dispatch(login(updatedUser));
      }
    });

    return () => unsub();
  }, [dispatch]);

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
