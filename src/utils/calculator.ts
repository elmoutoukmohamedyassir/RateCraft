import { CalculatorState, CalculationResults } from '../types';

export const calculateRate = (state: CalculatorState): CalculationResults => {
  const {
    desiredMonthlyIncome,
    estimatedTaxPercentage,
    monthlyBusinessExpenses,
    weeklyBillableHours,
    weeksWorkedPerMonth,
    desiredProfitMarginPercentage,
  } = state;

  // 1. Calculate monthly gross needed to reach net after taxes
  const monthlyGrossNeededForNet = desiredMonthlyIncome / (1 - estimatedTaxPercentage / 100);
  const baseMonthlyGrossRequired = monthlyGrossNeededForNet + monthlyBusinessExpenses;
  
  // 2. Add profit margin buffer
  const monthlyRevenueTarget = baseMonthlyGrossRequired * (1 + desiredProfitMarginPercentage / 100);
  const yearlyRevenueTarget = monthlyRevenueTarget * 12;

  // 3. Calculate billable hours
  const totalMonthlyBillableHours = Math.max(0, weeksWorkedPerMonth * weeklyBillableHours);

  // 4. Calculate rates
  const recommendedHourlyRate = totalMonthlyBillableHours > 0 ? monthlyRevenueTarget / totalMonthlyBillableHours : 0;
  // Assuming a standard 5-day work week for the day rate derivation from weekly hours
  const recommendedDayRate = recommendedHourlyRate * (weeklyBillableHours / 5);

  return {
    recommendedHourlyRate,
    recommendedDayRate,
    monthlyRevenueTarget,
    yearlyRevenueTarget,
    totalMonthlyBillableHours,
    monthlyTaxAmount: (monthlyGrossNeededForNet - desiredMonthlyIncome),
    monthlyExpensesAmount: monthlyBusinessExpenses,
    monthlyProfitAmount: monthlyRevenueTarget - baseMonthlyGrossRequired,
  };
};
