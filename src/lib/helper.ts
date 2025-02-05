export const sanitizePath = (str: string) => {
  const decodedString = decodeURI(str)
  return decodedString
    ?.replace(/^([\/\\])+/, "") // Normalize leading slashes/backslashes to ''
    .replace(/[\/\\]+/g, "/") // Replace multiple slashes/backslashes with a single '/'
    .replace(/(\.\.(\/|\\|$))+/g, ""); // Remove directory traversal (../ or ..\)
}
  
