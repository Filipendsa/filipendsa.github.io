import { useMemo } from 'react';

export function useExperienceDuration(startYear: number = 2021): { yearsFormatted: string; numericYears: number } {
  return useMemo(() => {
    const startDate = new Date(startYear, 0, 1);
    const now = new Date();
    const diffInYears = (now.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
    const numericYears = Math.max(5, Math.floor(diffInYears));
    return {
      numericYears,
      yearsFormatted: `${numericYears}+`
    };
  }, [startYear]);
}
