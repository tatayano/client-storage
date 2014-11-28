# client-storage

## Classes de storage em client, cookie, localstorage e sessionstorage.

Instanciar a classe desejada em uma variavel

### Example
    // classe instanciada e atribuida a variavel
    var cookie = new Cookie,
        local = new LocalStorage,
        session = new SessionStorage;
    
    // metodo para setar dados, setInfo(key, {data}, validate)
    cookie.setInfo('user1', {name: 'Glauco', lastname: 'Yano'}, 2 );
    // metodo para pegar dados, getInfo(key)
    cookie.getInfo('user1');
    
    // metodo para setar dados, setInfo(key, {data}, validate)
    local.setInfo('user2', {name: 'Glauco', lastname: 'Yano'}, 2);
    // metodo para pegar dados, getInfo(key)
    var text = local.getInfo('user2');
    
    // metodo para setar dados, setInfo(key, {data})
    session.setInfo('user3', {name: 'Glauco', lastname: 'Yano'});
    // metodo para pegar dados, getInfo(key)
    var text = session.getInfo('user3');




