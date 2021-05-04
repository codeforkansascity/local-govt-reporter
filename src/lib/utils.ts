export const DateDisplay = (date: string) =>
  new Date(date.replaceAll('-', '/'));
