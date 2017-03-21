angular.module('starter').controller('ListagemController', function($scope) {

    $scope.listaDeCarros = [{ "nome": "BMW 120i", "preco": 70000 }];
    // '', 'Onix 1.6', 'Fiesta 2.0', 'C3 1.0', 'Uno Fire',
    // 'Sentra 2.0', 'Astra Sedan', 'Vectra 2.0 Turbo', 'Hilux 4x4', 'Montana Cabine Dupla'
});
angular.module('starter').controller('CarroEscolhidoController', function($stateParams, $scope) {
    $scope.carroEscolhido = angular.fromJson($stateParams.carro);
});