import { Token } from '@/constant';

// функции для настройки логина/логаута:
export function saveAuthData(result: {access: string, refresh: string}) {  
    localStorage.setItem(Token.Access, result.access);
    localStorage.setItem(Token.Refresh, result.refresh);
    // localStorage.setItem('expiration', expirationDate.toISOString());  
}

export function clearAuthData() {  
    localStorage.removeItem("token");  
    localStorage.removeItem("expiration");  
}  