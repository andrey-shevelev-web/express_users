import UserService from './UserService.js';

class UserController {
    getAll(req, res) {
        try {
            const items = UserService.getAll();
            const total = UserService.total;

            return res.json({ items, total });
        } catch (e) {
            res.status(500).json({ status: 'failure', error: e.message });
        }
    }

    getPage(req, res) {
        try {
            const { start, limit, page } = req.body;
            const items = UserService.getPage(start, limit, page);
            const total = UserService.total;

            return res.json({ items, total });
        } catch (e) {
            res.status(500).json({ status: 'failure', error: e.message });
        }
    }
}

export default new UserController();
