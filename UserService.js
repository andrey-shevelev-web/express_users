import userData from './UserData.js';

class UserService {
    constructor() {
        this.items = userData;
        this.total = this.items.length;
    }

    getAll() {
        return this.items;
    }

    getPage(start, limit, page) {
        const start = +start;
        const limit = +limit;
        const page = +page;

        if ((page - 1) * limit !== start) {
            return [];
        }
        const iEnd = start + limit;
        return this.items.slice(start, iEnd);
    }
}

export default new UserService();
