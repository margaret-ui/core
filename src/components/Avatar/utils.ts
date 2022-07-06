export const getInitials = (name: string) =>
  (name || '')
    .split(' ')
    .map(chunk => chunk.charAt(0))
    .slice(0, 2)
    .join('');
