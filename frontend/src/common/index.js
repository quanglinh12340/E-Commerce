const backendDomain = "http://localhost:8080"

const SummaryApi = {
    signUp: {
        url: `${backendDomain}/api/signup`,
        method: "POST"
    },
    signIn: {
        url: `${backendDomain}/api/signin`,
        method: "POST"
    },
    current_user: {
        url: `${backendDomain}/api/user-details`,
        method: "GET"
    },
    logout_user: {
        url: `${backendDomain}/api/user-logout`,
        method: "GET"
    },
    all_user: {
        url: `${backendDomain}/api/all-user`,
        method: "GET"
    },
    update_user: {
        url: `${backendDomain}/api/update-user`,
        method: "POST"
    },
}

export default SummaryApi