var cookie = new Cookie,
    local = new LocalStorage,
    session = new SessionStorage;

cookie.setInfo('user1', {name: 'Glauco', sobrenome: 'Yano'}, 2 );
var text = cookie.getInfo('user1');
document.querySelector('div#div1').innerText = text.name + ' ' + text.sobrenome;

local.setInfo('user2', {name: 'Jhonatan', sobrenome: 'Silva'}, 2);
var text = local.getInfo('user2');
document.querySelector('div#div2').innerText = text.name + ' ' + text.sobrenome;

session.setInfo('user3', {name: 'Fernando', sobrenome: 'Basilio'});
var text = session.getInfo('user3');
document.querySelector('div#div3').innerText = text.name + ' ' + text.sobrenome;
