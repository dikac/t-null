/**
 * string intended for not null message
 *
 * @param valid
 * @param value
 * @param subject
 * @param conversion
 */
export default function NotNull(valid: boolean, value: unknown, subject?: string, conversion?: (value: unknown) => string): string;
