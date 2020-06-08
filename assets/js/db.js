import {pushNotification} from "./main.js";

const idbPromised = idb.open('epl-db', 1, upgradedDb => {
    if (!upgradedDb.objectStoreNames.contains('teams')) {
        const teamsObjectStore = upgradedDb.createObjectStore("teams", { keyPath: "id"});

    teamsObjectStore.createIndex("name", "name", { unique: false });
    }
});

const dbInsertTeam = team => {
    return new Promise((resolve, reject) => {
        idbPromised.then(db => {
            const transaction = db.transaction("teams", `readwrite`);
            transaction.objectStore("teams").put(team);
            return transaction;
        }).then(transaction => {
            if (transaction.complete) {
                resolve(true)
                M.toast({ html: `<i class="material-icons">check_circle</i> You has liked ${team.name} and you can see on Favorite menu `});
                pushNotification(`Success, You has liked ${team.name}`)
            } else {
                reject(new Error(transaction.onerror))
            }
        }).catch( () => {
            console.log(Error);
        })
    })
};

const dbGetAllTeam = () => {
    return new Promise((resolve, reject) => {
        idbPromised.then(db => {
            const transaction = db.transaction("teams", `readonly`);
            return transaction.objectStore("teams").getAll();
        }).then(teams => {
            if (teams !== undefined) {
                resolve(teams)
            } else {
                reject(new Error("Favorite not Found"))
            }
        })
    })
};

function getById(id) {
    return new Promise((resolve, reject) => {
        idbPromised
            .then(db => {
                const tx = db.transaction("teams", "readonly");
                const store = tx.objectStore("teams");
                return store.get(id);
            })
            .then(team => {
                resolve(team);
            });
    });
}

const dbDeleteTeam = team => {
    return new Promise((resolve, reject) => {
        idbPromised.then(db => {
            const transaction = db.transaction("teams", `readwrite`);
            transaction.objectStore("teams").delete(team.id);
            return transaction;
        }).then(transaction => {
            if (transaction.complete) {
                resolve(true)
                M.toast({ html: `<i class="material-icons">check_circle</i>Club ${team.name} has been delete from list favourite` });
                pushNotification(`Success, You has delete ${team.name} from list favourite`)
            } else {
                reject(new Error(transaction.onerror))
            }
        })
    })
};

export {dbInsertTeam ,dbGetAllTeam ,dbDeleteTeam, getById};