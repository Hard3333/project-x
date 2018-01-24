(async () => {
    try {
        const fs = require("mz/fs", "utf8")
        const input = require("../input/input")
        const post = require("./post")
        const todo = require("./todo")
        const username = input.username
        const type = (input.type === 1) ? "post" : "todo"
        let id = ""
        let intid = 0

        createFolder()
        const files = await fs.readdir("../")
        console.log(files)
        let filenames = files.map(x => x.split(".")).map(x => x[0])
        let names = filenames.map(x => x.split("-")).map(x => x[0])
        for (const n of names) {
            if (n === username)
                intid++
        }

        if (intid === 0)
            id = `-${intid}`

        const write = (type === "post") ?
            await fs.writeFile("../" + username + id + ".txt", post.getPost(), "utf8") :
            await fs.writeFile("../" + username + id + ".txt", todo.getTodo(), "utf8")


        function createFolder() {
            const folder = await fs.readdir("../")
            for (let f of folder) {
                if (f === "Result_Folder")
                    return
            }
            return await fs.mkdir("../Result_Folder")
        }

    } catch (err) {
        throw err
    }
})()