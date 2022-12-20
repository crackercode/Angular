export interface User {
    firstName: string,
    lastName: string,
    age?: number,//? = Optional 
    address?: {
        street?: string,
        city?: string,
        state?: string
    },
    image?: string,
    isActive?: boolean,
    balance?: number,
    registered?: any,
    hide?: boolean
}