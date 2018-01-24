const input = require('./input/input');
const todos = require('./HTTP/todos');
const posts = require('./HTTP/posts');
const fileTodo = require('./File/main');

const TYPES = {
    '1': 'post',
    '2': 'todo'
};

(async () => {
    try {
        const username = await input.getUserName();
        const type = TYPES[(await input.getType())];

        const id = await input.findUserId(username);

        const data = (type === 'todo')
            ? await todos.requestData(id)
            : await posts.requestData(id);

        await fileTodo.main(username, type, data);
    } catch (err) {
        throw err;
    }
})();