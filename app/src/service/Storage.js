class Storage {
    static resetUser() {
        Storage.setUser(null);
    }
    
    static setUser(user) {
        localStorage.setItem('fretz.user', JSON.stringify(user));
    }

    static getUser() {
        const user = localStorage.getItem('fretz.user');
        console.log(user);
        return user != null ? JSON.parse(user).user : null;
    }
}

export default Storage;