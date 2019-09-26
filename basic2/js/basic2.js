for (let i = 0; i < clients.length; i++) {
    document.getElementById("id").innerHTML += '<tr><td>' +
        clients[i].clientid + '</td><td>' +
        clients[i].firstname + '</td><td>' +
        clients[i].lastname + '</td><td>' +
        clients[i].email + '</td><td>' +
        clients[i].title + '</td><td>' +
        clients[i].salary + '</td></tr>'


}