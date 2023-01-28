import BudgetCard from "./BudgetCard";
import { useBudgets } from "../contexts/BudgetContexts";

const TotalBudgetCard = () => {
  const { expenses, budgets } = useBudgets();
  const amount = expenses.reduce((total, expense) => total + expense.amount, 0);
  const totalBudget = budgets.reduce(
    (total, budget) => total + budget.budget,
    0
  );
  if (totalBudget === 0) return null;
  return (
    <BudgetCard
      amount={amount}
      name="Total"
      gray
      budget={totalBudget}
      hideButtons
    />
  );
};

export default TotalBudgetCard;
