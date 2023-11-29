export class AuthenticationService {
  private readonly LS_TOKEN_KEY = "token";
  private readonly LS_TOKEN_VALUE = "test";

  isAuthenticated(): boolean {
    const token = localStorage.getItem(this.LS_TOKEN_KEY);
    return token !== null;
  }

  login(): void {
    localStorage.setItem(this.LS_TOKEN_KEY, this.LS_TOKEN_VALUE);
  }
}
