var Cookie = (function() {

    function Cookie() {

    };

    //metodo para serialização dos dados inseridos e criação do cookie
    Cookie.prototype.setInfo = function(cname,cvalue,exdays) {

        var obj = JSON.stringify(cvalue);

        this.setCookie(cname, obj, exdays);

    };
    //metodo para buscar os dados e parsear o resultado
    Cookie.prototype.getInfo = function(cname) {

        var info = this.getCookie(cname),
            result;

        result = JSON.parse(info);

        return result;

    };
    //metodo que seta o cookie depois do dado serializado
    Cookie.prototype.setCookie = function(cname,cvalue,exdays) {

        var d = new Date();

        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires=" + d.toGMTString();

        document.cookie = cname+"="+cvalue+"; "+expires;

    };
    //metodo que busca os dados gravados no cookie
    Cookie.prototype.getCookie = function(cname) {

        var name = cname + "=";

        var ca = document.cookie.split(';');

        for(var i=0; i<ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1);
            if (c.indexOf(name) != -1) {
                return c.substring(name.length, c.length);
            }
        }

        return "";

    };
    //metodo para deletar o cookie
    Cookie.prototype.eraseCookie = function(cname) {

        document.cookie = cname + '=;expires=Wed 01 Jan 1970';

    };

    return Cookie;

})();