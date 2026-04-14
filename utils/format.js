export const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-IN", {
     
    
    maximumFractionDigits: 0,
  }).format(amount);
};