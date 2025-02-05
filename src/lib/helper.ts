export const sanitizePath = (str: string) => {
    return str
    ?.replace(/[\/\\]+/g, "/") // Replace multiple slashes/backslashes with a single '/'
    .replace(/(\.\.(\/|\\|$))+/g, ""); // Remove directory traversal (../ or ..\)
}