import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { db } from "../firebase/config";

export const useColletionData = () => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    setIsPending(true);
    async function fetchMultipleCollections() {
      try {
        const balanceRef = collection(db, "balance");
        const budgetsRef = collection(db, "budgets");
        const potsRef = collection(db, "pots");
        const transactionsRef = collection(db, "transactions");

        const [
          balanceSnapshot,
          budgetsSnapshot,
          potsSnapshot,
          transactionsSnapshot,
        ] = await Promise.all([
          getDocs(balanceRef),
          getDocs(budgetsRef),
          getDocs(potsRef),
          getDocs(transactionsRef),
        ]);

        const balance = balanceSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const budgets = budgetsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const pots = potsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const transactions = transactionsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setData({ balance, budgets, pots, transactions });
      } catch (error) {
        toast.error(`Xatolik: ${error.message}`);
        console.error("Ma'lumotlarni olishda xatolik bor:", error);
      } finally {
        setIsPending(false);
      }
    }

    fetchMultipleCollections();
  }, []);

  return { data, isPending };
};
