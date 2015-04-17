var app = angular.module('app.service', []);

app.service('UnicornService', function($http) {
    return {
        getAllUnicorns : function() {
            return $http.get("/api/unicorns").then(function(resp) {
                return resp.data.map(function(u) {
                    u.birth = new Date(u.birth);
                    return u;
                });
            });
        },

        saveUnicorn : function(unicorn) {
            return $http.post("/api/unicorns", unicorn).then(function(resp) {
                return resp.data;
            });
        },

        updateUnicorn : function(id, unicorn) {
            return $http.post("/api/unicorns/" + id, unicorn).then(function(resp) {
                return resp.data;
            });
        }


    }
});

