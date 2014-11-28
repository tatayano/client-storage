var LocalStorage = (function() {

    function LocalStorage() {

    };

    //metodo para serialização dos dados inseridos e criação do LocalStorage
    LocalStorage.prototype.setInfo = function(cname,cvalue,exdays) {

        var obj = JSON.stringify(cvalue);

        this.setItem(cname, obj, exdays);

    };
    //metodo para buscar os dados e parsear o resultado
    LocalStorage.prototype.getInfo = function(cname) {

        var result = this.getItem(cname);

        return result;

    };
    //metodo que seta o LocalStorage depois do dado serializado
    LocalStorage.prototype.setItem = function(cname,cvalue,exdays) {

        var d = new Date(),
            expires,
            record;

        if( exdays === undefined || exdays === null || exdays === 0 ) {
            expires = false;
        } else {
            expires = d.getTime() + (exdays*24*60*60*1000);
        }

        record = {value: cvalue, timestamp: expires};

        localStorage.setItem(cname, JSON.stringify(record));

        return cvalue;

    };
    //metodo que busca os dados gravados no LocalStorage
    LocalStorage.prototype.getItem = function(cname) {

        var record = JSON.parse(localStorage.getItem(cname));

        if(!record.timestamp) {
            return JSON.parse(record.value);
        } else {
            return (new Date().getTime() < record.timestamp && JSON.parse(record.value));
        };

    };
    //metodo para deletar o LocalStorage
    LocalStorage.prototype.eraseItem = function(cname) {

        localStorage.clear(cname);

    };

    return LocalStorage;

})();