const Pusher = require('pusher');

const pusher = new Pusher({
    appId: '1086134',
    key: 'e96e2780fa40ffc5b0c2',
    secret: '80f130689f21d5702d4c',
    cluster: 'us2'
});

for (const iterator of [1, 2, 3, 4, 5]) {

    const data = {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        title: 'Brunch this weekend?' + iterator,
        subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
    };

    emit(data);

}


function emit(data) {
    pusher.trigger(['notifications'], 'admin-va', data);
}



