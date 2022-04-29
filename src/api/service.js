import axios from "axios";

export const getMessages = async (messageId = 0, oldMessages = false) => {
    const formData = new FormData();
    formData.append('actionName', 'MessagesLoad')
    formData.append('messageId', messageId);

    // if (!oldMessages) {
    //     formData.append('messageId', messageId);
    // } else {
    //     formData.append('oldMessages', oldMessages)
    // }

    if (oldMessages) {
        formData.append('oldMessages', oldMessages);
    }
    
    try {
        const response = await axios.post('http://f0665380.xsph.ru/', formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
        
        if (!response.status) {
            throw new Error(`Could not fetch http://f0665380.xsph.ru/, status: ${response.status}`);
        }
        return response.data;

    } catch (err) {
        return Promise.reject(err.message);
    }
}