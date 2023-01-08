export type NewUser = {
    name: string,
    password: string,
    avatar: string,
    email: string
}
export type User = {
    id: number
    creationDate: Date,
    birthday: Date | null,
} & NewUser