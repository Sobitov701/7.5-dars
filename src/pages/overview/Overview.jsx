import { useColletionData } from "../../hooks/useColletionData";
import style from "./overview.module.scss";

function Overview() {
  const { data, isPending } = useColletionData();

  if (isPending) {
    return <div>Loading...</div>;
  }

  return (
    <div className={style.overview}>
      <h1>Overview</h1>
      <div>
        {data ? (
          <div>
            <h2>Balance</h2>
            <ul>
              {data.balance.map((item) => (
                <li key={item.id}>
                  {item.name}: {item.amount}
                </li>
              ))}
            </ul>
            <h2>Budgets</h2>
            <ul>
              {data.budgets.map((item) => (
                <li key={item.id}>
                  {item.category}: {item.amount}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div>No data available</div>
        )}
      </div>
    </div>
  );
}

export default Overview;
