type ReqOrOpt<T extends object, K extends keyof T> =
    { [P in K]-?: T[P] } &
    { [Q in (Exclude<keyof T, K>)]?: T[Q]; }

type OptOrReq<T extends object, K extends keyof T> =
    { [P in K]?: T[P] } &
    { [Q in (Exclude<keyof T, K>)]-?: T[Q]; }

const obj: ReqOrOpt<Record<"name" | "email" | "id", string>, "name" | "email"> =
    { "name": "Siddharth Chattopadhyay", "email": "siddharthchattop*********@gmail.com", "id": undefined }