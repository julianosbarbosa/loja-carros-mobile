angular.module('starter')
    .service('CarroService', function($http) {

        var url = 'https://endereco_do_servico.com';

        return {
            obterCarros: function() {
                return $http.get(url).then(function(response) {
                    return response.data;
                });
            }

        }

    });