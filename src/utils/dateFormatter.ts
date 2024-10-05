export function formatDate(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric", // Changed 'string' to valid 'numeric'
    month: "long", // Changed 'string' to valid 'long' (to get full month name)
    day: "numeric", // Changed 'string' to valid 'numeric'
  };

  return new Date(dateString).toLocaleDateString(undefined, options);
}
