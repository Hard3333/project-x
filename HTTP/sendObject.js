const todos = require('./todos')
const post = require('./posts')
const input = require('./input/input')

const todosreadytosend = todos.requestData()
const postsreadytosend = post.requestData()
const type = input.type
const username = input.username

function Array() {
    if (type == 1) {
        return {
            postsreadytosend
        }
    }
    else
    {
        return todosreadytosend
    }
}

module.exports = {
    Array,
    type,
    username
}

