import { cliux } from "@contentstack/cli-utilities";

export const sanitizePath = (str: string) => {
  return str
    ?.replace(/^([\/\\]){2,}/, "./") // Normalize leading slashes/backslashes to ''
    .replace(/[\/\\]+/g, "/") // Replace multiple slashes/backslashes with a single '/'
    .replace(/(\.\.(\/|\\|$))+/g, ""); // Remove directory traversal (../ or ..\)
};

/**
 * Error object interface for consistent error handling
 */
export interface FormattedError {
  error_code?: string;
  error_message?: string;
  message?: string;
  context?: string;
  timestamp?: string;
}

/**
 * Prints formatted error messages with consistent styling and helpful hints
 * @param error - The error object containing error details
 * @param context - The context where the error occurred (e.g., "tsgen", "graphql")
 */
export const printFormattedError = (error: FormattedError, context: string) => {
  const errorCode = error?.error_code || "UNKNOWN_ERROR";
  let errorMessage = "An unexpected error occurred";
  let hint = "";

  switch (errorCode) {
    case "AUTHENTICATION_FAILED":
      errorMessage = "Authentication failed";
      hint = "Please check your API key, token, and region.";
      break;
    case "INVALID_CREDENTIALS":
      errorMessage = "Invalid credentials provided";
      hint = "Please verify your API key, token, and region.";
      break;
    case "INVALID_INTERFACE_NAME":
    case "INVALID_CONTENT_TYPE_UID":
      errorMessage = "TypeScript syntax error detected in the generated types.";
      hint =
        "Use a prefix to ensure all interface names are valid TypeScript identifiers.";
      break;
    case "INVALID_GLOBAL_FIELD_REFERENCE":
      errorMessage = "TypeScript syntax error detected in the generated types.";
      hint =
        "Use a prefix to ensure all interface names are valid TypeScript identifiers.";
      break;
    case "VALIDATION_ERROR":
      errorMessage = "TypeScript syntax error detected in generated types";
      hint =
        error?.error_message ||
        "Validation error occurred during type generation";
      break;
    case "TYPE_GENERATION_FAILED":
      errorMessage = "Type generation failed due to an internal error";
      hint =
        error?.error_message ||
        "An unexpected error occurred during type generation";
      break;
    default:
      errorMessage =
        error?.error_message ||
        error?.message ||
        "An unexpected error occurred";
      hint = "Please check the error details and try again.";
  }

  // Print formatted error output
  cliux.print(`Type generation failed: ${errorMessage}`, {
    color: "red",
    bold: true,
  });

  if (hint) {
    cliux.print(`Tip: ${hint}`, { color: "yellow" });
  }

  cliux.print(`Error context: ${context}`, {
    color: "cyan",
  });

  cliux.print(`Timestamp: ${error?.timestamp || new Date().toISOString()}`, {
    color: "gray",
  });

  // Show the raw error details from types-generator if different from our formatted message
  if (error?.error_message && error.error_message !== errorMessage) {
    cliux.print("", {});
    cliux.print("Raw error details:", { color: "magenta", bold: true });
    cliux.print(error.error_message, { color: "red" });
  }
};
