import Vue from 'vue';
import Pusher from 'pusher-js'

Pusher.logToConsole = true;

let pusher = new Pusher('e96e2780fa40ffc5b0c2', { cluster: 'us2' })

Vue.prototype.$pusher = pusher;

export default pusher;

