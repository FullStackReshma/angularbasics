export class AuthService {
    isLoggedIn = false;

    login() {
        this.isLoggedIn = true;
    }

    logout() {
        this.isLoggedIn = false;
    }

    // isAuthenticated() {
    //     return this.isLoggedIn
    // }
    isAuthenticated() {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve(this.isLoggedIn)
            },1000)

        })
    }

}