export interface CalculatorState {
  desiredMonthlyIncome: number;
  estimatedTaxPercentage: number;
  monthlyBusinessExpenses: number;
  weeklyBillableHours: number;
  weeksWorkedPerMonth: number;
  desiredProfitMarginPercentage: number;
}

export interface CalculationResults {
  recommendedHourlyRate: number;
  recommendedDayRate: number;
  monthlyRevenueTarget: number;
  yearlyRevenueTarget: number;
  totalMonthlyBillableHours: number;
  monthlyTaxAmount: number;
  monthlyExpensesAmount: number;
  monthlyProfitAmount: number;
}
