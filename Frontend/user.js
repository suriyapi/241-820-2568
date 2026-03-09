const BASE_URL = "http://localhost:8000";
window.onload = async () => {
    const response = await axios.get(`${BASE_URL}/users`);
    console.log(response.data);
    const userDOM = document.getElementById("user");
    let htmlData = '<div>';
    for (let i = 0; i < response.data.length; i++) {
        let user = response.data[i];
        htmlData += ` <div>
        ${user.firstname} ${user.lastname}
        <button>Edit</button>
        <button>Delete</button>
        </div>`
    }
    htmlData += '</div>';
    userDOM.innerHTML = htmlData;
}


