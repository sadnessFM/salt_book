class Api {

    static async getAll(path = "https://srv.petiteweb.dev/api/animals") {
        return await fetch(path).then(res => res.json()).then(data => data.data).then(data => data);
    }

    static async getSingle(name, path="https://srv.petiteweb.dev/api/animals") { // _id
        return await fetch(path + "/" + name).then(res => res.json()).then(data => data["message"]["stringValue"]);
    }

    static async addAnimal(body, path=" https://srv.petiteweb.dev/api/animals") {
        return await fetch(path + "/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(body)
        }).then(res => res.json()).then(data => data);
    }

    static async updateAnimal(id, body, path="https://srv.petiteweb.dev/api/animals") {
        console.log("https://srv.petiteweb.dev/api/animals" + "/update/" + id)
        return await fetch(path + "/update/" + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(body)
        }).then(res => res.json()).then(data => data);
    }
}

export default Api;