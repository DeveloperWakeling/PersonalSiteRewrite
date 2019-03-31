export interface LoginCreditentials {
    username: string, 
    password: string
}

export interface SignUpCredentials {
    name: string;
    username: string;
    password: string;
    passwordConf: string;
    email: string;
}

export interface LearnMore {
    email:string;
    name: string;
}

export interface User {
    name: string;
    username: string;
    email: string;
    subscribed: boolean;
    _id?: string;
}