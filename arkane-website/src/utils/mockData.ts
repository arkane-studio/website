// Generate random data for algorithm performance charts
export const generateAlgorithmData = (months: number, volatility: number, trend: number) => {
  const data = [];
  let value = 100;
  
  for (let i = 0; i < months; i++) {
    // Add random movement with trend bias
    value = value * (1 + (Math.random() * volatility - volatility/2 + trend) / 100);
    
    // Format month name
    const date = new Date();
    date.setMonth(date.getMonth() - (months - i - 1));
    const monthName = date.toLocaleString('default', { month: 'short' });
    
    data.push({
      name: monthName,
      value: parseFloat(value.toFixed(2))
    });
  }
  
  return data;
};

// Generate weekly data
export const generateWeeklyData = (weeks: number, volatility: number, trend: number) => {
  const data = [];
  let value = 100;
  
  for (let i = 0; i < weeks; i++) {
    // Add random movement with trend bias
    value = value * (1 + (Math.random() * volatility - volatility/2 + trend) / 100);
    
    // Format week name
    const date = new Date();
    date.setDate(date.getDate() - (weeks - i - 1) * 7);
    const weekName = `W${i + 1}`;
    
    data.push({
      name: weekName,
      value: parseFloat(value.toFixed(2))
    });
  }
  
  return data;
};

// Calculate performance percentage
export const calculatePerformance = (data: Array<{ name: string; value: number }>) => {
  if (data.length < 2) return 0;
  const startValue = data[0].value;
  const endValue = data[data.length - 1].value;
  return parseFloat(((endValue - startValue) / startValue * 100).toFixed(1));
};

// Algorithm data
export const algorithmData = [
  {
    id: 'momentum',
    title: 'Momentum Alpha',
    description: 'Trend-following algorithm that capitalizes on market momentum across multiple timeframes.',
    data: generateAlgorithmData(12, 8, 2.5),
    color: '#dc2626' // red-600
  },
  {
    id: 'statistical',
    title: 'Statistical Arbitrage',
    description: 'Identifies and exploits price discrepancies between related financial instruments.',
    data: generateAlgorithmData(12, 5, 1.8),
    color: '#3b82f6' // blue-500
  },
  {
    id: 'ml',
    title: 'ML Predictor',
    description: 'Machine learning model that predicts short-term price movements using pattern recognition.',
    data: generateAlgorithmData(12, 12, 3.2),
    color: '#7c3aed' // violet-600
  },
  {
    id: 'manual',
    title: 'Manual Portfolio',
    description: 'Expert-managed investment portfolio with strategic asset allocation and tactical adjustments.',
    data: generateAlgorithmData(12, 6, 1.2),
    color: '#7c3aed' // violet-600
  }
];

// Portfolio performance data
export const portfolioData = {
  weekly: generateWeeklyData(12, 3, 0.8),
  monthly: generateAlgorithmData(12, 5, 1.2),
  currentPerformance: {
    daily: parseFloat((Math.random() * 2 - 0.5).toFixed(1)),
    weekly: parseFloat((Math.random() * 5 - 1).toFixed(1)),
    monthly: parseFloat((Math.random() * 8 + 2).toFixed(1)),
    yearly: parseFloat((Math.random() * 15 + 10).toFixed(1))
  }
};
