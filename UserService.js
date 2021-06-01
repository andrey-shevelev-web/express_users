import userData from './UserData.js';

class UserService {
    constructor() {
        this.items = userData;
        this.total = this.items.length;
    }

    getAll() {
        return this.items;
    }

    getPage(start, limit) {
        const indexStart = start * limit;
        const indexEnd = indexStart + limit;
        return this.items.slice(indexStart, indexEnd);
    }
}

export default new UserService();
