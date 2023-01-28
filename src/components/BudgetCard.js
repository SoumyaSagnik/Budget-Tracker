import { Card, ProgressBar, Button, Stack } from "react-bootstrap";
import { currencyFormatter } from "../utils";

const BudgetCard = ({
  name,
  amount,
  budget,
  gray,
  onAddExpenseClick,
  hideButtons,
  onViewExpensesClick,
}) => {
  const classNames = [];
  if (amount > budget) classNames.push("bg-danger", "bg-opacity-10");
  else if (gray) classNames.push("bg-light");

  function getProgressBarVariant(amount, budget) {
    const ratio = amount / budget;
    if (ratio < 0.5) return "success";
    if (ratio < 0.75) return "warning";
    return "danger";
  }

  return (
    <Card className={classNames.join(" ")}>
      <Card.Body>
        <Card.Title
          className="d-flex justify-content-between align-items-baseline
        fw-normal mb-3"
        >
          <div className="me-2">{name}</div>
          <div className="d-flex align-items-baseline">
            {currencyFormatter.format(amount)}{" "}
            {budget && (
              <span className="text-muted fs-6 ms-1">
                / {currencyFormatter.format(budget)}
              </span>
            )}
          </div>
        </Card.Title>
        {budget && (
          <ProgressBar
            className="rounded-pill"
            variant={getProgressBarVariant(amount, budget)}
            min={0}
            max={budget}
            now={amount}
          />
        )}
        {!hideButtons && (
          <Stack direction="horizontal" gap="2" className="mt-4">
            <Button
              variant="outline-primary"
              className="ms-auto"
              onClick={onAddExpenseClick}
            >
              Add Expense
            </Button>
            <Button variant="outline-secondary" onClick={onViewExpensesClick}>
              View Expense
            </Button>
          </Stack>
        )}
      </Card.Body>
    </Card>
  );
};

export default BudgetCard;
