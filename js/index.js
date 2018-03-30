$(document).ready(function () {
    $.get('db/users.json', function (response) {
        users = JSON.parse(response);
        // users = response;
        users.map(function (user) {
            $('#app').append(`
                <div class="col-12 col-sm-6 col-md-4">
                    <div class="card">
                        <h4 class="card-header">
                            <a onclick="setActiveUser(${user.id})" href="javascript: void (0)" data-toggle="modal" data-target="#userDetailsModal">
                                ${user.name}
                            </a >  
                        </h5 >
            <div class="card-block">
                <p>name: ${user.name}</p>
                <p>username: ${user.username}</p>
                <p>email: ${user.email}</p>
            </div>
                    </div >
                </div > `);
        });
    });
});
let users = [];

function setActiveUser(userId) {
    let user = '';
    users.map(u => {
        if (u.id === userId) {
            user = u;
        }
    });
    console.log(user);
    $("#userDetailsModal").modal('show');
    $modal = $('#modalBody');
    $modal.find('.ud-name').text(user.name);
    $modal.find('.ud-username').text(user.username);
    $modal.find('.ud-email').text(user.email);
    $modal.find('.ud-street').text(user.address.street);
    $modal.find('.ud-suite').text(user.address.suite);
    $modal.find('.ud-city').text(user.address.city);
    $modal.find('.ud-zipcode').text(user.address.zipcode);
    $modal.find('.ud-lat').text(user.address.geo.lat);
    $modal.find('.ud-lng').text(user.address.geo.lng);
}