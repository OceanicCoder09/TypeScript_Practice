export function log <T>(value: T): T {
    console.log(value);
    return value;
}   

export function isString(value: unknown): value is string{
    return typeof value === 'string';
}