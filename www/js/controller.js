angular.module('starter').controller('ListagemController', function($scope, CarroService) {

    //Carregando do back-end

    // CarroService.obterCarros().then(function(dados) {
    //     $scope.listaDeCarros = dados
    // });

    //Carregando sem back-end
    $scope.listaDeCarros = [
        { "foto": "", "nome": "BMW 120i", "preco": 70000 },
        { "foto": "", "nome": "Onix 1.6", "preco": 35000 },
        { "foto": "", "nome": "Fiesta 2.0", "preco": 52000 },
        { "foto": "", "nome": "C3 1.0", "preco": 22000 },
        { "foto": "", "nome": "Uno Fire", "preco": 11000 },
        { "foto": "", "nome": "Sentra 2.0", "preco": 53000 },
        { "foto": "", "nome": "Astra Sedan", "preco": 39000 },
        { "foto": "", "nome": "Vectra 2.0", "preco": 37000 },
        { "foto": "", "nome": "Hilux 4x4", "preco": 90000 },
        { "foto": "", "nome": "Montana Cabine dupla", "preco": 57000 },
        { "foto": "", "nome": "Outlander 2.4", "preco": 99000 },
        { "foto": "", "nome": "Fusca 15000", "preco": 6000 }
    ];
});

angular.module('starter').controller('CarroEscolhidoController', function($stateParams, $scope) {
    $scope.carroEscolhido = angular.fromJson($stateParams.carro);
    $scope.listaDeAcessorios = [{ "nome": "Alarme", "preco": 200 },
        { "nome": "Insulfilm", "preco": 400 },
        { "nome": "MP3 Player", "preco": 500 },
        { "nome": "Seguro", "preco": 1500 },
        { "nome": "Garantia estendida 1 ano", "preco": 800 },
    ];
    $scope.mudou = function(acessorio, isMarcado) {
        if (isMarcado) {
            $scope.carroEscolhido.preco = $scope.carroEscolhido.preco + acessorio.preco;
        } else {
            $scope.carroEscolhido.preco = $scope.carroEscolhido.preco - acessorio.preco;
        }
    }
});

angular.module('starter').controller('FinalizarPedidoController', function($stateParams, $scope, $ionicPopup, $state, CarroService) {
    $scope.carroFinalizado = angular.fromJson($stateParams.carro);
    $scope.pedido = {};
    $scope.finalizarPedido = function() {

        var pedidoFinalizado = {
            params: {
                carro: $scope.carroFinalizado.nome,
                preco: $scope.carroFinalizado.preco,
                nome: $scope.pedido.nome,
                endereco: $scope.pedido.telefone,
                email: $scope.pedido.email
            }
        }


        $ionicPopup.alert({
            title: 'Parabens!',
            template: 'Entraremos em contato com você'
        }).then(function() {
            $state.go('listagem');
        });


    };
});

angular.module('starter')
    .controller('LoginController', function($scope, CarroService, $ionicPopup, $state) {

        $scope.login = {};

        $scope.realizarLogin = function() {
            var dadosDoLogin = {
                params: {
                    email: $scope.login.email,
                    senha: $scope.login.senha
                }

            }
            $state.go('listagem')
            CarroService.realizarLogin(dadosDoLogin).then(function(dados) {

            }, function(erro) {
                $ionicPopup.alert({
                    title: 'Opa!',
                    template: 'E-mail ou senha incorretos.'
                })

            })
        }
    });