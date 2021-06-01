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
            const items = UserService.getPage(req.body.start, req.body.limit);
            const total = UserService.total;

            return res.json({ items, total });
        } catch (e) {
            res.status(500).json({ status: 'failure', error: e.message });
        }
    }
}

export default new UserController();
