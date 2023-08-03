exports.getDefaultRequestConfig = () => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    return config;
}

exports.getAuthRequestConfig = () => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            "x-access-token": "",
        }
    }

    return config;
}