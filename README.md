# client-storage
==============

## Classes de storage em client, cookie, localstorage e sessionstorage.

Instanciar a classe desejada em uma variavel

### Example:
// classe instanciada e atribuida a variavel <br/>
var cookie = new Cookie, <br/>
    local = new LocalStorage, <br/>
    session = new SessionStorage; <br/>

// metodo para setar dados, setInfo(key, {data}, validate) <br/>
cookie.setInfo('user1', {name: 'Glauco', lastname: 'Yano'}, 2 ); <br/>
// metodo para pegar dados, getInfo(key) <br/>
cookie.getInfo('user1'); <br/>

// metodo para setar dados, setInfo(key, {data}, validate) <br/>
local.setInfo('user2', {name: 'Glauco', lastname: 'Yano'}, 2); <br/>
// metodo para pegar dados, getInfo(key) <br/>
var text = local.getInfo('user2'); <br/>

// metodo para setar dados, setInfo(key, {data}) <br/>
session.setInfo('user3', {name: 'Glauco', lastname: 'Yano'}); <br/>
// metodo para pegar dados, getInfo(key) <br/>
var text = session.getInfo('user3'); <br/>




