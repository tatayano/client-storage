var cookie = new Cookie,
    local = new LocalStorage,
    session = new SessionStorage;

cookie.setInfo('user1', {name: 'Glauco', lastname: 'Yano'}, 2 );
var text = cookie.getInfo('user1');

local.setInfo('user2', {name: 'Glauco', lastname: 'Yano'}, 2);
var text = local.getInfo('user2');

session.setInfo('user3', {name: 'Glauco', lastname: 'Yano'});
var text = session.getInfo('user3');
