export const sanitizePath = (str: string) =>
  str
    ?.replace(/^([\/\\])+/, "./") // Normalize leading slashes/backslashes to './'
    .replace(/[\/\\]+/g, "/") // Replace multiple slashes/backslashes with a single '/'
    .replace(/(\.\.(\/|\\|$))+/g, ""); // Remove directory traversal (../ or ..\)
