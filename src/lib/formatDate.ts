export function formatDate(date: string) {
    return new Date(date).toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

export function validateStringToDate(date: string): boolean {
    return !isNaN(new Date(date).getTime());
}
