export function ccn(...classNames: (string | undefined)[]): string {
    return classNames.filter(Boolean).join(" ");
}