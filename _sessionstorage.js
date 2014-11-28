var SessionStorage = (function() {

    function SessionStorage() {

    };

    //metodo para serialização dos dados inseridos e criação do SessionStorage
    SessionStorage.prototype.setInfo = function(cname,cvalue) {

        var obj = JSON.stringify(cvalue);

        this.setItem(cname, obj);

    };
    //metodo para buscar os dados e parsear o resultado
    SessionStorage.prototype.getInfo = function(cname) {

        var result = this.getItem(cname);

        return JSON.parse(result);

    };
    //metodo que seta o SessionStorage depois do dado serializado
    SessionStorage.prototype.setItem = function(cname,cvalue) {

        sessionStorage.setItem(cname, JSON.stringify(cvalue));

    };
    //metodo que busca os dados gravados no SessionStorage
    SessionStorage.prototype.getItem = function(cname) {

        var result = sessionStorage.getItem(cname);

        return JSON.parse(result);

    };
    //metodo para deletar o SessionStorage
    SessionStorage.prototype.eraseItem = function(cname) {

        sessionStorage.clear(cname);

    };

    return SessionStorage;

})();