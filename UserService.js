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
        const iStart = +start;
        const iLimit = +limit;
        const iPage = +page;

        console.log('iStart', iStart, typeof iStart);
        console.log('iLimit', iLimit, typeof iLimit);
        console.log('iPage', iPage, typeof iPage);

        if ((iPage - 1) * iLimit !== iStart) {
            return [];
        }
        const iEnd = iStart + iLimit;
        return this.items.slice(iStart, iEnd);
    }
}

export default new UserService();
