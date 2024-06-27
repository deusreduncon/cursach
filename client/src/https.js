import axios from "axios";

const $authHost = axios.create({
    baseURL: "http://localhost:5000/api/"
})

export {
    $authHost
}

export const sendForm = async (nameUser, name, text, userId) => {
    try {
        const {data} = await $authHost.post('/claim-create', {
            nameUser,
            name,
            text,
            userId,
        });

        console.log(data)
        return data;
    } catch(e) {
        
        console.log(e)
        return e;
    }
};

export const loginForm = async (name, password) => {
    try {
        const {data} = await $authHost.post('/user-login', {
            name,
            password,
        });

        console.log(data)
        return data;
    } catch(e) {
        
        console.log(e)
        return e;
    }
};

export const createUser = async (name, password) => {
    try {
        const {data} = await $authHost.post('/user-create', {
            name,
            password,
        });

        console.log(data)
        return data;
    } catch(e) {
        
        console.log(e)
        return e;
    }
};

export const getClaim = async () => {
    try {
        const {data} = await $authHost.get('/claim-get');

        console.log(data)
        return data;
    } catch(e) {
        
        console.log(e)
        return e;
    }
};

export const getClaimUser = async (userIds) => {
    try {
        const {data} = await $authHost.get(`/claim-get-user?userId=${userIds}`);

        console.log(data)
        return data;
    } catch(e) {
        
        console.log(e)
        return e;
    }
};

export const getClaimId = async (userIds) => {
    try {
        const {data} = await $authHost.get(`/claim-getId?id=${userIds}`);

        console.log(data)
        return data;
    } catch(e) {
        
        console.log(e)
        return e;
    }
};

export const changeTrim = async (id, trim,executor, answer) => {
    try {
        const {data} = await $authHost.patch('/claim-change', {
            "claimId": id,
            "trimNumber": trim,
            "executor": executor,
            "answer": answer

        });
        return data;
    } catch(e) {
        
        console.log(e)
        return e;
    }
};

export const deleteTrim = async (claimId) => {
    try {
        console.log(claimId)
        const {data} = await $authHost.post('/claim-delete', {
            "claimId": claimId
        });
        return data;
    } catch(e) {
        
        console.log(e)
        return e;
    }
};