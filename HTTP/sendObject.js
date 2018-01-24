const todos = require('./todos')
const post = require('./posts')
const input = require('./input/input')

const todosreadytosend = todos.returnData()
const postsreadytosend = post.returnData()
const type = input.type
const username = input.username


if (type == 1) {
        module.exports = {
         type,
         username,
         postsreadytosend
        }
}
else {
    module.exports = {
        type,
        username,
        todosreadytosend
       }
}
