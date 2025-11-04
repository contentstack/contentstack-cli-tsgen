import { log } from "@contentstack/cli-utilities";

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
  // Special handling for our numeric identifier validation errors
  if (
    errorCode === "VALIDATION_ERROR" &&
    error?.error_message &&
    error.error_message.includes("numeric identifiers")
  ) {
    // Just print our detailed message as-is, no extra formatting
    log.error(error.error_message);
    return;
  }

  let errorMessage = "An unexpected error occurred. Try again.";
  let hint = "";

  switch (errorCode) {
    case "AUTHENTICATION_FAILED":
      errorMessage = "Authentication failed. Check your credentials and try again.";
      hint = "Please check your API key, token, and region.";
      break;
    case "INVALID_CREDENTIALS":
      errorMessage = "Invalid credentials. Please verify and re-enter your login details.";
      hint = "Please verify your API key, token, and region.";
      break;
    case "INVALID_INTERFACE_NAME":
    case "INVALID_CONTENT_TYPE_UID":
      errorMessage = "Generated types contain a TypeScript syntax error.";
      hint =
        "Use a prefix to ensure all interface names are valid TypeScript identifiers.";
      break;
    case "INVALID_GLOBAL_FIELD_REFERENCE":
      errorMessage = "Generated types contain a TypeScript syntax error.";
      hint =
        "Use a prefix to ensure all interface names are valid TypeScript identifiers.";
      break;
    case "VALIDATION_ERROR":
      errorMessage = "Type generation failed due to a validation error.";
      hint =
        error?.error_message ||
        "Type generation failed due to a validation error.";
      break;
    case "TYPE_GENERATION_FAILED":
      errorMessage = "Type generation failed due to a system error. Try again.";
      hint =
        error?.error_message ||
        "Unexpected error during type generation. Try again.";
      break;
    default:
      errorMessage =
        error?.error_message ||
        error?.message ||
        "An unexpected error occurred. Try again.";
      hint = "Check the error details and try again.";
  }

  // Print formatted error output
  log.error(`Type generation failed: ${errorMessage}`);

  if (hint) {
    log.warn(`Tip: ${hint}`);
  }

  log.info(`Error context: ${context}`);
  log.info(`Timestamp: ${error?.timestamp || new Date().toISOString()}`);
};
