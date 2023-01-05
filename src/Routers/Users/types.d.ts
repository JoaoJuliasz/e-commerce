export type NewUser = {
    name: string,
    password: string,
    avatar: string,
    email: string
}
export type User = {
    id: number
    creationDate: Date,
    birthDay: Date | null,
} & User