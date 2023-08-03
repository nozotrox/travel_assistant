exports.getDefaultRequestConfig = () => { 
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    return config;
}