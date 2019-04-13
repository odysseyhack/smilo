import { IAcountProvider } from "../../src/providers/account-provider/account.provider"
import { Observable } from "rxjs";

export class MockAccountProvider implements IAcountProvider {
    accountExists(): boolean {
        return false;
    }
    setName(name: string) {
        
    }
    getName(): string {
        return "NAME"
    }
    onPasswordChanged(): Observable<void> {
        return Observable.of();
    }
    setPassword(password: string) {
        
    }
    encryptToStorage(key: string, data: any) {
        
    }
    decryptFromStorage<T>(key: string): T {
        return null;
    }
    isCorrectPassword(password: string): boolean {
        return false;
    }
}