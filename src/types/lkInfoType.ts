export type BusinessInfo = {
    is_company: boolean;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    tin: number;
    company?: string;
    bio?: string;
    avatar?: string[];
    social_vk?: string,
    social_ok?: string;
    social_tel?: string;
}

export type BrideInfo = {
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    bio?: string;
    avatar?: string[];
    social_vk?: string,
    social_ok?: string;
    social_tel?: string;
}