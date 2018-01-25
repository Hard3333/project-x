function getTodo(todos) {
    let complete = 0
    let uncomplete = 0
    let titlestring = ""
    let id = 1

    for (let item of todos) {
        titlestring += ` ${id}. title: ${item.title}\r\n`
        id++
        (item.completed === true) ? complete++ : uncomplete++
    }

    return ` completed: ${complete}\r\n uncompleted: ${uncomplete}\r\n\r\n${titlestring}`
}

// todo = [{
//     "userId": 1,
//     "id": 1,
//     "title": "delectus aut autem",
//     "completed": false
// },
// {
//     "userId": 1,
//     "id": 2,
//     "title": "quis ut nam facilis et officia qui",
//     "completed": false
// },
// {
//     "userId": 1,
//     "id": 3,
//     "title": "fugiat veniam minus",
//     "completed": false
// },
// {
//     "userId": 1,
//     "id": 4,
//     "title": "et porro tempora",
//     "completed": true
// },
// {
//     "userId": 1,
//     "id": 5,
//     "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
//     "completed": false
// },
// {
//     "userId": 1,
//     "id": 6,
//     "title": "qui ullam ratione quibusdam voluptatem quia omnis",
//     "completed": false
// },
// {
//     "userId": 1,
//     "id": 7,
//     "title": "illo expedita consequatur quia in",
//     "completed": false
// }]

// console.log(getTodo(todo))

module.exports = {
    getTodo
}