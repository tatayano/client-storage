# client-storage

## Cookie e SessionStorage

    Classe básica de gravação e leitura de cookie
    
## LocalStorage

    Classe básica de gravação e leitura de localStorage, inserindo a validade dos dados.

### Example

    Instanciar a classe desejada em uma variavel
    
    classe instanciada e atribuida a variavel
    var cookie = new Cookie,
        local = new LocalStorage,
        session = new SessionStorage;
    
    método para setar dados, setInfo(key, {data}, validate)
    cookie.setInfo('user1', {name: 'Glauco', lastname: 'Yano'}, 2 );
    metodo para pegar dados, getInfo(key)
    cookie.getInfo('user1');
    
    método para setar dados, setInfo(key, {data}, validate)
    local.setInfo('user2', {name: 'Glauco', lastname: 'Yano'}, 2);
    metodo para pegar dados, getInfo(key)
    var text = local.getInfo('user2');
    
    método para setar dados, setInfo(key, {data})
    session.setInfo('user3', {name: 'Glauco', lastname: 'Yano'});
    metodo para pegar dados, getInfo(key)
    var text = session.getInfo('user3');




