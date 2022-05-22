export const constants = {
    userUrl: (user) => `https://api.github.com/users/${user}`,
    reposUrl: (user, page) => `https://api.github.com/users/${user}/repos?per_page=4&page=${page}`,
};