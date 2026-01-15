/**
 * Utility functions for input validation and sanitization
 */

/**
 * Validates email format using a standard regex pattern
 */
export function isValidEmail(email: string): boolean {
    if (!email || typeof email !== 'string') return false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
}

/**
 * Sanitizes a string to prevent XSS attacks in HTML context
 * Escapes dangerous characters: < > & " '
 */
export function sanitizeForHTML(input: string): string {
    if (!input || typeof input !== 'string') return '';

    return input
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;')
        .trim();
}

/**
 * Validates and sanitizes a name field
 * - Must be between 2 and 100 characters
 * - Returns sanitized version or null if invalid
 */
export function validateName(name: string): string | null {
    if (!name || typeof name !== 'string') return null;

    const trimmed = name.trim();
    if (trimmed.length < 2 || trimmed.length > 100) return null;

    return sanitizeForHTML(trimmed);
}
