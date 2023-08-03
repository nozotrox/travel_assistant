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
            "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Im5vem90cm94IiwiZW1haWwiOiJub3pveEBnbWFpbC5jb20iLCJpYXQiOjE2OTExMDAxNDAsImV4cCI6MTY5MTEwMzc0MH0.g9DSbDCBlrF9ysNuw7RSUNCbU5rUZGa7GC2wPFkjUWY",
        }
    }

    return config;
}