angular.module('starter').config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('listagem', {
            url: '/listagem',
            templateUrl: 'templates/listagem.html',
            controller: 'ListagemController'
        })

    .state('carroescolhido', {
            url: '/carroescolhido/:carro',
            templateUrl: 'templates/carroescolhido.html',
            controller: 'CarroEscolhidoController'
        })
        .state('finalizarpedido', {
            url: '/finalizarpedido/:carro',
            templateUrl: 'templates/finalizarpedido.html',
            controller: 'FinalizarPedidoController'
        });
    $urlRouterProvider.otherwise('listagem');
});