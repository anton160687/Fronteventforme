import { Token } from '@/constant';

// функции для настройки логина/логаута:
export function saveAuthData(result: {access: string, refresh: string}) {  
    const now = new Date();
    localStorage.setItem(Token.CreatedAt, now.toString() );  
    localStorage.setItem(Token.Access, result.access);
    localStorage.setItem(Token.Refresh, result.refresh);
}

export function clearAuthData() {  
    localStorage.removeItem(Token.CreatedAt);  
    localStorage.removeItem(Token.Access);
    localStorage.removeItem(Token.Refresh);
}

export function checkIfTokenIsFresh(): boolean {  
    const createdAt = localStorage.getItem(Token.CreatedAt);
    if (createdAt) {
        const difference =  +new Date() - +createdAt;
        //5 минут
        if (difference < 300000) {
            return true;
        }
    }
    clearAuthData();
    return false;
}