const fs = require("mz/fs")
const post = require("./post")
const todo = require("./todo")

async function main(username, type, entities) {
    try {
        let id = ""
        let intid = 0

        await createFolder()

        const files = await fs.readdir("../")
        let filenames = files.map(x => x.split(".")).map(x => x[0])
        let names = filenames.map(x => x.split("-")).map(x => x[0])
        for (const n of names) {
            if (n === username)
                intid++
        }

        id = `-${intid}`;

        (type === "post") 
            ? await fs.writeFile("../Result_Folder/" + username + id + ".txt", post.getPost(entities), "utf8") 
            : await fs.writeFile("../Result_Folder/" + username + id + ".txt", todo.getTodo(entities), "utf8");

        async function createFolder() {
            const folder = await fs.readdir("../");
            for (let f of folder) {
                if (f === "Result_Folder") {
                    return;                    
                }
            }

            return await fs.mkdir("../Result_Folder")
        }
    } catch (err) {
        throw err
    }
}

module.exports = {
    main
}