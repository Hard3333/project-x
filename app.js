(async () => {
    try {
        const input = require('./input/input');
        const todos = require('./HTTP/todos');
        const filseTodo = require('./File/main');

        const username = await input.getUserName();
        const type = await input.getType();

        const id = input.findUserId(username);

        const data = await todos.requestData(id);

        // await fileTodo.main(username, type === 1 ? 'post' : 'todo');        
    } catch (err) {
        throw err;
    }
})();