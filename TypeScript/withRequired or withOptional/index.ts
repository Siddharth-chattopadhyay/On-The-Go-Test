type withRequired<T extends object, K extends keyof T> =
    { [P in K]-?: T[P] } & Omit<T, K>

type withOptional<T extends object, K extends keyof T> =
    { [P in K]+?: T[P] } & Omit<T, K>