import { html, render } from 'lit-html';

//?per_page=100&page=2

const renderUsers = (locationToRender) => {
    fetch(`https://api.github.com/users?per_page=10`, {
            headers: {
                'Authorization': 'Basic ' + btoa('hardiksf')
            }
        })
        .then(response => {
            response.json()
                .then(data =>
                    handleData(data, locationToRender)
                )
        })
};

const getLoginsOfFollowers = followers => {
    const logins = [];
    return Object.entries(followers).login;
    // return logins;
};

const followers = (login) => {
    const followersLogins = [];
    const templateItems = [];
    fetch(`https://api.github.com/users/${login}/followers?per_page=5`)
        .then(response => {
            response.json()
                .then(data =>
                    data.forEach(element => {
                        followersLogins.push(element.login);
                    })
                )
        });
    console.log(`followersLogins`, typeof(followersLogins));
    return followersLogins;
};

const handleData = (data, locationToRender) => {
    const templateItems = [];
    templateItems.push(html `
        <div class="users"></div>
    `);
    data.forEach(element => {
        templateItems.push(html `
        <div class="each-user">
            <img class = "image" src="${element.avatar_url}" alt="${element.login}" >   
            <p class = "login">${element.login}</p>
            <p class = "type">${element.type}</p>
            
        </div>`);
    });
    console.log(data);

    render(templateItems, locationToRender);
};

export { renderUsers };