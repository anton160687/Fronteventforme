import { Token } from '@/constant';

// функции для настройки логина/логаута:
export function saveAuthData(result: {access: string, refresh: string}, role: boolean) {  
    const now = new Date();
    localStorage.setItem(Token.CreatedAt, now.toString());  
    localStorage.setItem(Token.Access, result.access);
    localStorage.setItem(Token.Refresh, result.refresh);
     //TODO решить с бэком, откуда берется информация о роли юзера
     localStorage.setItem('role', (role? '1' : '0'));
}

export function clearAuthData() {  
    localStorage.removeItem(Token.CreatedAt);  
    localStorage.removeItem(Token.Access);
    localStorage.removeItem(Token.Refresh);
    //TODO решить с бэком, откуда берется информация о роли юзера
    localStorage.removeItem('role');
}

export function checkIfTokenIsFresh(): boolean {  
    const createdAt = localStorage.getItem(Token.CreatedAt);
    const MS_PER_DAY = 1000 * 60 * 60 * 24;
    if (createdAt) {
        let creationTimeInDateFormat = new Date (createdAt);
        const difference = (+new Date() - +creationTimeInDateFormat);
        //время жизни refresh токена на данный момент - 1 сутки согласно данным от бэка
        if (difference < MS_PER_DAY) {
            return true;
        }
    }
    clearAuthData();
    return false;
}