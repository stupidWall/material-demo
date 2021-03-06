/*
* 2016.10.17
* heliujie
* */
/*定义app模块，注入依赖模块*/
(function () {
    'use strict';

    angular
        .module('App',[
            'mgcrea.ngStrap',
            'ngMessages',
            'ui.router',
            'ui.grid',
            'ui.grid.pagination',
            'ui.grid.resizeColumns',
            'ui.grid.selection',
            'ui.grid.pinning',
            'jack.service',
            'ngMaterial',
            'jack.combox',
            'ui.ace',
            'restangular',
            'M.smartisan',
            'j.pagination',
            'j.notebox',
            'j.board',
            'j.console',
            'j.treeMenu'
        ])

        .run(['$rootScope', '$state', '$stateParams',routeRun])

        /*路由配置*/
        .config(['$stateProvider','$urlRouterProvider',routeConfig])

        .factory('highlightInit', function(){
            return function(){
                setTimeout(function(){
                    hljs.initHighlightingOnLoad();
                    $('pre code').each(function(i, block) {
                        hljs.highlightBlock(block);
                    });
                },500)
            }
        })

        /*wrap控制器*/
        .controller('WrapCtrl',wrapController)

        /*demo1控制器*/
        .controller('Demo1.Controller',demo1Controller)


        /*demo2控制器*/
        .controller('Demo2.Controller',demo2Controller)

        /*demo3控制器*/
        .controller('Demo3.Controller',demo3Controller)

        /*demo4控制器*/
        .controller('Demo4.Controller',demo4Controller)

        /*demo5控制器*/
        .controller('Demo5.Controller',demo5Controller)

        /*demo6控制器*/
        .controller('Demo6.Controller',demo6Controller)

        /*demo7控制器*/
        .controller('Demo7.Controller',demo7Controller)

        /*demo8控制器*/
        .controller('Demo8.Controller',demo8Controller)

        /*demo9控制器*/
        .controller('Demo9.Controller',demo9Controller)

        /*demo10控制器*/
        .controller('Demo10.Controller',demo10Controller)

        /*demo11控制器*/
        .controller('Demo11.Controller',demo11Controller)

})();

/*$state挂到$rootScope*/
function routeRun($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
}

/*路由配置*/
function routeConfig($stateProvider, $urlRouterProvider){
    /*默认路由*/
    $urlRouterProvider.otherwise('/list1');
    /*定义路由*/
    $stateProvider
        .state('list1',{
            url : "/list1",
            views : {
                'main' : {
                    templateUrl : "../tpls/demo1.tpl.html",
                    controller : 'Demo1.Controller',
                    controllerAs :　"vm"
                }
            }
        })
        .state('list2',{
            url : "/list2",
            views : {
                'main' : {
                    templateUrl : "../tpls/demo2.tpl.html",
                    controller : 'Demo2.Controller',
                    controllerAs :　"vm"
                }
            }
        })
        .state('ngMessage',{
            url : "/ngMessage",
            views : {
                'main' : {
                    templateUrl : "../tpls/demo3.tpl.html",
                    controller : 'Demo3.Controller',
                    controllerAs :　"vm"
                }
            }
        })
        .state('material',{
            url : "/material",
            views : {
                'main' : {
                    templateUrl : "../tpls/demo4.tpl.html",
                    controller : 'Demo4.Controller',
                    controllerAs :　"ctrl"
                }
            }
        })
        .state('button-tab',{
            url : "/button-tab",
            views : {
                'main' : {
                    templateUrl : "../tpls/demo5.tpl.html",
                    controller : 'Demo5.Controller',
                    controllerAs :　"ctrl"
                }
            }
        })
        .state('checkbox-chips',{
            url : "/checkbox-chips",
            views : {
                'main' : {
                    templateUrl : "../tpls/demo6.tpl.html",
                    controller : 'Demo6.Controller',
                    controllerAs :　"ctrl"
                }
            }
        })
        .state('dialog-list',{
            url : "/dialog-list",
            views : {
                'main' : {
                    templateUrl : "../tpls/demo7.tpl.html",
                    controller : 'Demo7.Controller',
                    controllerAs :　"ctrl"
                }
            }
        })
        .state('menu',{
            url : "/menu",
            views : {
                'main' : {
                    templateUrl : "../tpls/demo8.tpl.html",
                    controller : 'Demo7.Controller',
                    controllerAs :　"ctrl"
                }
            }
        })
        .state('sidenav',{
            url : "/sidenav",
            views : {
                'main' : {
                    templateUrl : "../tpls/demo9.tpl.html",
                    controller : 'Demo7.Controller',
                    controllerAs :　"ctrl"
                }
            }
        })
        .state('ui-ace',{
            url : "/ui-ace",
            views : {
                'main' : {
                    templateUrl : "../tpls/demo10.tpl.html",
                    controller : 'Demo3.Controller',
                    controllerAs :　"ctrl"
                }
            }
        })
        .state('restangular',{
            url : "/restangular",
            views : {
                'main' : {
                    templateUrl : "../tpls/demo11.tpl.html",
                    controller : 'Demo8.Controller',
                    controllerAs :　"ctrl"
                }
            }
        })
        .state('angularapi',{
            url : "/angularapi",
            views : {
                'main' : {
                    templateUrl : "../tpls/demo12.tpl.html",
                    controller : 'Demo9.Controller',
                    controllerAs :　"ctrl"
                }
            }
        })
        .state('smartisan1',{
            url : "/smartisan1",
            views : {
                'main' : {
                    templateUrl : "../tpls/demo13.tpl.html",
                    controller : 'Demo10.Controller',
                    controllerAs :　"vm"
                }
            }
        })
        .state('paging',{
            url : "/paging",
            views : {
                'main' : {
                    templateUrl : "../tpls/demo14.tpl.html",
                    controller : 'Demo10.Controller',
                    controllerAs :　"vm"
                }
            }
        })
        .state('board',{
            url : "/board",
            views : {
                'main' : {
                    templateUrl : "../tpls/demo15.tpl.html",
                    controller : 'Demo10.Controller',
                    controllerAs :　"vm"
                }
            }
        })
        .state('treemenu',{
            url : "/treemenu",
            views : {
                'main' : {
                    templateUrl : "../tpls/demo16.tpl.html",
                    controller : 'Demo11.Controller',
                    controllerAs :　"vm"
                }
            }
        })
}

/*依赖注入*/
wrapController.$inject = ['$state','$rootScope','$modal','$alert','$http','$timeout', 'utils','i18nService'];
demo1Controller.$inject = ['$state','$rootScope','$modal','$alert','$http','$timeout', 'utils','i18nService'];
demo2Controller.$inject = ['$scope','$state','$rootScope','$modal','$alert','$http','$timeout', 'utils','i18nService'];
demo3Controller.$inject = ['$scope','$state','$rootScope','$modal','$alert','$http','$timeout', 'utils','i18nService'];
demo4Controller.$inject = ['$state','$rootScope','$modal','$alert','$http','$timeout', 'utils','i18nService','$q','$mdBottomSheet','$mdToast'];
demo5Controller.$inject = ['$state','$rootScope','$modal','$alert','$http','$timeout', 'utils','i18nService','$q','$mdBottomSheet','$mdToast'];
demo6Controller.$inject = ['$state','$rootScope','$modal','$alert','$http','$timeout', 'utils','i18nService','$q','$mdBottomSheet','$mdToast'];
demo7Controller.$inject = ['$state','$rootScope','$modal','$alert','$http','$timeout', 'utils','i18nService','$q','$mdDialog','$interval','$mdSidenav','$mdUtil','$mdToast'];
demo8Controller.$inject = ['$state','$rootScope','$modal','$alert','$http','$timeout', 'utils','i18nService','Restangular'];
demo9Controller.$inject = ['$state','$rootScope','$modal','$alert','$http','$timeout', 'utils','i18nService','Restangular','highlightInit'];
demo10Controller.$inject = ['$state','$rootScope','$modal','$alert','$http','$timeout', 'utils','i18nService','Restangular','highlightInit'];
demo11Controller.$inject = ['$state','$rootScope','$modal','$alert','$http','$timeout', 'utils','i18nService','Restangular','highlightInit'];


/*构造函数*/
/*管理wrap*/
function wrapController($state, $rootScope, $modal, $alert, $http, $timeout, utils, i18nService){
        var vm = this;
        vm.items = [
            {  itemName : "查询条件/下拉表格", newState : 'list1'},
            {  itemName : "ui-grid表格" , newState : 'list2'},
            {  itemName : "ngMessage验证" , newState : 'ngMessage'},
            {  itemName : "m-bottom" , newState : 'material'},
            {  itemName : "m-button-tab" , newState : 'button-tab'},
            {  itemName : "m-checkbox" , newState : 'checkbox-chips'},
            {  itemName : "m-dialog-list" , newState : 'dialog-list'},
            {  itemName : "m-menu" , newState : 'menu'},
            {  itemName : "m-sidenav" , newState : 'sidenav'},
            {  itemName : "ui-ace" , newState : 'ui-ace'},
            {  itemName : "restangular" , newState : 'restangular'},
            {  itemName : "angularapi" , newState : 'angularapi'},
            {  itemName : "smartisan1" , newState : 'smartisan1'},
            {  itemName : "paging" , newState : 'paging'},
            {  itemName : "board" , newState : 'board'},
            {  itemName : "treemenu" , newState : 'treemenu'}
        ];
        vm.itemActive = 'chose demo';
        vm.changeView = changeView;

        /*==============  具体实现函数 ==================*/
        function changeView(item){
            vm.itemActive = item.itemName;
        }
}
/*管理demo1*/
function demo1Controller( $state, $rootScope, $modal, $alert, $http, $timeout, utils, i18nService){
    //保存session
    $rootScope.SESSION = angular.copy(utils.getSession());
    /*ui-grid分页汉化*/
    i18nService.setCurrentLang('zh-cn');

    var $modal_sure = null;
    var vm = this;
    vm.stateToName = stateToName;
    vm.loadingbillnum = null;
    vm.stationname = 'dfsdf';
    vm.begincreatedtime = '';
    vm.endcreatedtime = '';
    vm.stationDatas = [];
    vm.querystations = querystations;

    /*==============  具体实现函数 ==================*/
    /*标识状态更换为中文*/
    function stateToName(orderstate){
        switch (orderstate){
            case 1:
                return "待审核";
            case 2:
                return "审核出车";
            case 3:
                return "出车确认";
            case 4:
                return "到车确认";
            case 5:
                return "作废";
            default :
                return "";
        }
    };

    /*查询站点数据*/
    function querystations(options){
        var parameter = {
            pagesize : 5,
            pagenum : 1
        };
        $http({
            method: 'POST',
            url: "stationData"+ Math.round( Math.random()*2+1 ) +".json",
            data: angular.toJson(parameter),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).success(function(resp){
            $timeout(function(){
                vm.stationDatas = resp;
                vm.stationDatas.total = 15;
            },20)
        }).error(function(error){

        });
    }

}
/*管理demo2*/
function demo2Controller($scope, $state, $rootScope, $modal, $alert, $http, $timeout, utils, i18nService){
    //保存session
    $rootScope.SESSION = angular.copy(utils.getSession());
    /*ui-grid分页汉化*/
    i18nService.setCurrentLang('zh-cn');
    /*配置表格数据*/
    var vm = this;;
    $scope.getPage = getPage;
    vm.gridOptions = {
        //显示table的th
        columnDefs: [
            { name: '序号',field:'id', width:60,cellTemplate:
                '<div class="ui-grid-cell-contents" style="text-align:center !important">{{grid.renderContainers.body.visibleRowCache.indexOf(row)+1}}</div>'
            },
            {name:'操作', field:'',pinnedRight:true,width:150,
                cellTemplate:
                '<div class="ui-grid-cell-contents">' +
                '<a href="" class="link_edit" ng-click="grid.appScope.checkDatailData(row.entity)">装车清单</a>' +
                '&nbsp;&nbsp;<a href="" class="link_edit" ng-click="grid.appScope.sureGetModel(row.entity)">到货确认</a>' +
                '</div>'
            },
            { name: '装车单号',field:'loadingbillnum'},
            { name: '装车时间',field:'takeofftime'},
            { name: '装车单状态',field:'state',
                cellTemplate: '<div class="ui-grid-cell-contents">{{grid.appScope.stateToName(row.entity.state)}}</div>'
            },
            { name: '装车站点 | 装车分拨中心',field:'companyStationname'},
            { name: '下一站点 | 下站中心',field:'unCompanyStationname'},
            { name: '途经线路',field:'context'},
            { name: '货物件数',field:'totgoodsqty'},
            { name: '车牌号码',field:'licensenumber'},
            { name: '车辆类型',field:'vehicletypename' },
            { name: '司机',field:'drivername'},
            { name: '司机电话',field:'driverphone'},
            { name: '司机运费',field:'loadingbillcharge40[0].chargeamount',
                cellTemplate: '<div class="ui-grid-cell-contents">{{row.entity.loadingbillcharge40[0].chargeamount}}</div>'
            },
            { name: '结算方式',field:'settlementtypeid',
                cellTemplate: '<div class="ui-grid-cell-contents">{{row.entity.loadingbillcharge40[0].settlementtypename}}</div>'
            },
            { name: '已付运费',field:'codmoney '},
            { name: '备注',field:'remark' }
        ],
        paginationPageSizes: [2,4,6],
        paginationPageSize: 2,
        useExternalPagination: true,
        enableGridMenu: true,
        enableColumnMenus: false,
        selectionRowHeaderWidth:40,
        onRegisterApi: function(gridApi){

            $scope.gridApi = gridApi;
            $scope.gridApi.pagination.on.paginationChanged($scope, function (newPage, pageSize) {
                console.log($scope)
                if($scope.getPage) {
                    $scope.getPage(newPage, pageSize);
                }
            });
        }
    };
    vm.checkSureGet = checkSureGet;
    vm.sureGetModel = sureGetModel;
    vm.confirmDelivery = confirmDelivery;

    /*获取表格数据*/
    quertGridData();

    /*分页*/
    function getPage(newPage, pageSize){
        quertGridData({
            pageSize : pageSize,
            pageNum : newPage
        });
    }

    function checkSureGet(){
        quertGridData();
    };
    function quertGridData(options){
        var params = {
            pageSize : 3,
            pageNum :1
        };
        if(!!options ){
            angular.extend(params, options);
        }
        var num = Math.round( Math.random()*2+1 );
        console.log(num);
        $http({
            method : "POST",
            url : "gridData"+ num +".json",
            data : angular.toJson(params),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).success(function(result){
            vm.gridOptions.data = result.rows;
        })
    }
    /*点击到货确认*/
    function sureGetModel(){
        $modal_sure = $modal({
            title: '提示',
            scope : $scope,
            content : "确认是否到货确认?",
            template : "../tpls/method-modal.html",
            animation : 'am-fade-and-slide-top'
        });
    }
    /*到货确认modal 确认事件*/
    function confirmDelivery(){
        alert('确认成功');
        $modal_sure.$promise.then($modal_sure.hide);
    }
}
/*管理demo3*/
function demo3Controller( $state, $rootScope, $modal, $alert, $http, $timeout, utils, i18nService){
    var vm = this;
    vm.aceLoaded = function(_editor){
        console.log('ok');
        //_editor.getSession().setMode("ace/mode/Javascript");
    }
    vm.aceChanged = function(e) {
        console.log('change');
    }
    vm.checked = false;
}
/*管理demo4*/
function demo4Controller($state, $rootScope, $modal, $alert, $http, $timeout, utils, i18nService, $q, $mdBottomSheet, $mdToast){
    var self = this;
    self.simulateQuery = false;
    self.isDisabled    = false;
    // list of `state` value/display objects
    self.states        = loadAll();
    self.querySearch   = querySearch;
    self.selectedItemChange = selectedItemChange;
    self.searchTextChange   = searchTextChange;

    self.showListBottomSheet  = showListBottomSheet;
    self.showGridBottomSheet = showGridBottomSheet;
    // ******************************
    self.items = [
        { name : "按钮1"},
        { name : "按钮2"},
        { name : "按钮3"},
        { name : "按钮4"},
        { name : "按钮5"}
    ];



    // ******************************
    function querySearch (query) {
        var results = query ? self.states.filter( createFilterFor(query) ) : self.states,
            deferred;
        if (self.simulateQuery) {
            deferred = $q.defer();
            $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
            return deferred.promise;
        } else {
            return results;
        }
    }
    function searchTextChange(text) {
        console.log('Text changed to ' + text);
    }
    function selectedItemChange(item) {
        console.log('Item changed to ' + JSON.stringify(item));
    }
    /**
     * Build `states` list of key/value pairs
     */
    function loadAll() {
        var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
              Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
              Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
              Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
              North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
              South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
              Wisconsin, Wyoming';
        return allStates.split(/, +/g).map( function (state) {
            return {
                value: state.toLowerCase(),
                display: state
            };
        });
    }
    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
        var lowercaseQuery = angular.lowercase(query);
        return function filterFn(state) {
            return (state.value.indexOf(lowercaseQuery) === 0);
        };
    }

    function showListBottomSheet($event){
        $mdBottomSheet.show({
            templateUrl: '../tpls/bottom-sheet-list-template.html',
            controller : 'Demo4.Controller',
            controllerAs :　"ctrl",
            targetEvent: $event
        }).then(function(clickedItem) {
            $scope.alert = clickedItem['name'] + ' clicked!';
        });
    }
    function showGridBottomSheet($event){
        $mdBottomSheet.show({
            templateUrl: '../tpls/bottom-sheet-grid-template.html',
            controller: 'Demo4.Controller',
            controllerAs :　"ctrl",
            targetEvent: $event
        }).then(function(clickedItem) {
            $mdToast.show(
                $mdToast.simple()
                    .content(clickedItem['name'] + ' clicked!')
                    .position('top right')
                    .hideDelay(1500)
            );
        });
    }

}
/*管理demo5*/
function demo5Controller($state, $rootScope, $modal, $alert, $http, $timeout, utils, i18nService, $q, $mdBottomSheet, $mdToast){
    var vm = this;
    vm.title1 = 'Button';
    vm.title4 = 'Warn';
    vm.isDisabled = true;
    vm.isShowCodeSorce = true;
    vm.showMdContent = 'show-code';

}
/*管理demo6*/
function demo6Controller($state, $rootScope, $modal, $alert, $http, $timeout, utils, i18nService, $q, $mdBottomSheet, $mdToast){
    var vm = this;
    vm.cb1 = true;
    vm.toggle  = toggle;
    vm.exists = exists;
    vm.items = [1,2,3,4,5];
    vm.selected = [];

    function toggle(item, list) {
        var idx = list.indexOf(item);
        if (idx > -1) list.splice(idx, 1);
        else list.push(item);
    };
    function exists(item, list){
        return list.indexOf(item) > -1;
    }
}
/*管理demo7*/
function demo7Controller($state, $rootScope, $modal, $alert, $http, $timeout, utils, i18nService, $q, $mdDialog, $interval, $mdSidenav, $mdUtil, $mdToast){
    var vm = this;
    vm.status = '  ';
    vm.showAlert = showAlert;
    vm.showConfirm  = showConfirm ;
    vm.showAdvanced = showAdvanced;
    var imagePath = '../img/1.jpg';
    vm.messages = [{
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
    }, {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
    }, {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
    }, {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
    }, {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
    }];
    vm.toppings = [
        { name: 'Pepperoni', wanted: true },
        { name: 'Sausage', wanted: false },
        { name: 'Black Olives', wanted: true },
        { name: 'Green Peppers', wanted: false }
    ];
    vm.settings = [
        { name: 'Wi-Fi', extraScreen: 'Wi-fi menu', icon: 'device:network-wifi', enabled: true },
        { name: 'Bluetooth', extraScreen: 'Bluetooth menu', icon: 'device:bluetooth', enabled: false },
    ];
    vm.announceClick = announceClick;

    var j= 0, counter = 0;
    vm.modes = [ ];
    vm.activated = true;
    vm.determinateValue = 30;
    vm.toggleActivation = function() {
        if ( !self.activated ) self.modes = [ ];
        if (  self.activated ) j = counter = 0;
    };
    $interval(function() {
        vm.determinateValue += 1;
        if (vm.determinateValue > 100) {
            vm.determinateValue = 30;
        }
        if ( (j < 5) && !vm.modes[j] && vm.activated ) {
            vm.modes[j] = 'indeterminate';
        }
        if ( counter++ % 4 == 0 ) j++;
    }, 100, 0, true);

    vm.showSimpleToast = showSimpleToast;

    vm.userState = '';
    vm.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
    'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
    'WY').split(' ').map(function (state) { return { abbrev: state }; });

    vm.toggleRight =  buildToggler('right');

    vm.todos = [];
    for (var i = 0; i < 15; i++) {
        vm.todos.push({
            face: imagePath,
            what: "Brunch this weekend?",
            who: "Min Li Chan",
            notes: "I'll be in your neighborhood doing errands."
        });
    }

    function buildToggler(navID) {
        var debounceFn =  $mdUtil.debounce(function(){
            $mdSidenav(navID)
                .toggle()
                .then(function () {
                    console.log("toggle " + navID + " is done");
                });
        },200);
        return debounceFn;
    }
    function showAlert(ev){
        $mdDialog.show(
            $mdDialog.alert()
                .parent(angular.element(document.querySelector('#popupContainer')))
                .clickOutsideToClose(true)
                .title('This is an alert title')
                .content('You can specify some description text in here.')
                .ariaLabel('Alert Dialog Demo')
                .ok('Got it!')
                .targetEvent(ev)
        );
    }
    function showConfirm(ev){
        var confirm = $mdDialog.confirm()
            .title('提示')
            .content('确定删除？')
            .ariaLabel('Lucky day')
            .targetEvent(ev)
            .ok('确定')
            .cancel('取消');
        $mdDialog.show(confirm).then(function() {
            vm.status = 'You decided to get rid of your debt.';
        }, function() {
            vm.status = 'You decided to keep your debt.';
        });
    }
    function showAdvanced(ev){
        $mdDialog.show({
            controller: DialogController,
            templateUrl: '../tpls/dialog1.tmpl.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true
        })
            .then(function(answer) {
                vm.status = 'You said the information was "' + answer + '".';
            }, function() {
                vm.status = 'You cancelled the dialog.';
            });
    }
    function DialogController($scope, $mdDialog) {
        $scope.hide = function() {
            $mdDialog.hide();
        };
        $scope.cancel = function() {
            $mdDialog.cancel();
        };
        $scope.answer = function(answer) {
            $mdDialog.hide(answer);
        };
    }
    function announceClick(index){
        $mdDialog.show(
            $mdDialog.alert()
                .title('You clicked!')
                .content('You clicked the menu item at index ' + index)
                .ok('Nice')
        );
    }
    function showSimpleToast(){
        $mdToast.show(
            $mdToast.simple()
                .content('Simple Toast!')
                .position('bottom right')
                .hideDelay(3000)
        );
    }
}
/*管理demo8*/
function demo8Controller( $state, $rootScope, $modal, $alert, $http, $timeout, utils, i18nService, Restangular){


    var vm = this;
    
    var baseAccounts  = Restangular.all('test/demo/stationData1.json');
    var params = {name: "jack"};

    /*请求路径： http://localhost/accounts  */
    baseAccounts.post(params).then(function(accounts){
        console.log(accounts)
        vm.result = accounts[0];
    }, function errorCallback() {
        alert("Oops error from server");
    })

    var baseAccounts2 = Restangular.all('test/demo/stationData2.json');
    baseAccounts2.getList(params).then(function(accounts){
        console.log('xxxxx',accounts);
    });

    /*  http://localhost/accounts/123/buildings  */
    Restangular.one('accounts', 123).getList('buildings')

    Restangular.all("test/demo/").customGET("stationData3.json", {param: "param2"});


    $http({
        url:'test/demo/stationData1.json',
        method:'GET'
    }).success(function(data,header,config,status){
    //响应成功

    }).error(function(data,header,config,status){
    //处理响应失败
    });


    var promise=$http({
        method:'POST',
        url:"stationData1.json",
        params:{
            'username':'tan'
        }
    });
    promise.then(function(resp){
    //resp是一个响应对象
        console.log('resp',resp)
    },function(resp){
    //带有错误信息的resp

     });

    var promise2 = $http.get('/api/users.json');

    var promise=$http.jsonp("/api/users.json?callback=JSON_CALLBACK");

}

/*管理demo9*/
function demo9Controller( $state, $rootScope, $modal, $alert, $http, $timeout, utils, i18nService, Restangular, highlightInit){
  highlightInit();
}


/*管理demo10*/
function demo10Controller( $state, $rootScope, $modal, $alert, $http, $timeout, utils, i18nService, Restangular, highlightInit){
  highlightInit();
  var vm = this;
  /**=============  coolpic =================**/
  vm.test = 'hello angular directive';
  vm.data1 = ['hi','hello'];
  vm.testFn = testFn;
  vm.coolpicid = '34';
  vm.coolpicConfig = {
    width : '1000px',
    height : '500px',
    backgroundColor : "#666",
    borderRadius : "10px",
    imgpath : [
       {"path" : '../img/1.jpg'},
       {"path" : '../img/2.jpg'},
       {"path" : '../img/3.jpg'}
    ]
  }
  function testFn(){
    console.log('测试angular&符号功能');
  }

  /**=============  pagination =================**/
  vm.paginationCongig = {
    total : 20, //共多少条
    pagesize : 20, //一页5条
    pagenum : 2, //当前第一页
    amout : 9, //9个数字按钮
    queryUrl : "stationData1.json",
    params : {
        'stationid' : "234"
    }
  }
 
 /*================ notebox =====================*/
  vm.noteboxConfig = {
    width : "200px",
    height : "30px",
    rows : [
        {
            
            id : "1",
            title : "《移动端开发深度揭秘》系列免费公开课程即将开班"
        },
        {
            id : "2",
            title : "微信小程序开发实战：“记事本”程序开发"
        },
        {
            id : "3",
            title : "妙味“JS全栈-201607届”学员中级阶段课程作品展示"
        },
        {
            id : "4",
            title : "《移动端开发深度揭秘》系列免费公开课程即将开班"
        }
    ]
  }

  /*=============== board =================*/
  vm.boardCongig = {
    rows : [
        {
            color : "colPink",
            textNote : "lession1",
            title : "PhotoShop",
            rotatedColor : "colRed",
            rotatedText : "微信出品的 “小程序” 已经在业界掀起研究热潮",
            isRotated : false,
            id : "1"
        },
        {
            color : "colRed",
            textNote : "lession2",
            title : "HTML5详解",
            rotatedColor : "colRed",
            rotatedText : "微信出品的 “小程序” 已经在业界掀起研究热潮",
            isRotated : false,
            id : "1"
        },
        {
            color : "colOrange",
            textNote : "lession3",
            title : "CSS3详解",
            rotatedColor : "colRed",
            rotatedText : "微信出品的 “小程序” 已经在业界掀起研究热潮",
            isRotated : false,
            id : "1"
        },
        {
            color : "colYellow",
            textNote : "lession4",
            title : "Bootstrap",
            rotatedColor : "colRed",
            rotatedText : "微信出品的 “小程序” 已经在业界掀起研究热潮",
            isRotated : false,
            id : "1"
        },
        {
            color : "colRed",
            textNote : "lession2",
            title : "HTML5详解",
            rotatedColor : "colRed",
            rotatedText : "微信出品的 “小程序” 已经在业界掀起研究热潮",
            isRotated : false,
            id : "1"
        },
        {
            color : "colOrange",
            textNote : "lession3",
            title : "CSS3详解",
            rotatedColor : "colRed",
            rotatedText : "微信出品的 “小程序” 已经在业界掀起研究热潮",
            isRotated : false,
            id : "1"
        },
        {
            color : "colYellow",
            textNote : "lession4",
            rotatedColor : "colRed",
            rotatedText : "微信出品的 “小程序” 已经在业界掀起研究热潮",
            title : "Bootstrap",
            isRotated : false,
            id : "1"
        },
        {
            color : "colYellow",
            textNote : "lession4",
            rotatedColor : "colRed",
            rotatedText : "微信出品的 “小程序” 已经在业界掀起研究热潮",
            title : "Bootstrap",
            isRotated : false,
            id : "1"
        },
        {
            color : "colYellow",
            textNote : "lession4",
            rotatedColor : "colRed",
            rotatedText : "微信出品的 “小程序” 已经在业界掀起研究热潮",
            title : "Bootstrap",
            isRotated : false,
            id : "1"
        },
        {
            color : "colYellow",
            textNote : "lession4",
            title : "Bootstrap",
            rotatedColor : "colRed",
            rotatedText : "微信出品的 “小程序” 已经在业界掀起研究热潮",
            isRotated : false,
            id : "1"
        },
         {
            color : "colRed",
            textNote : "lession2",
            title : "HTML5详解",
            rotatedColor : "colRed",
            rotatedText : "微信出品的 “小程序” 已经在业界掀起研究热潮",
            isRotated : false,
            id : "1"
        },
        {
            color : "colOrange",
            textNote : "lession3",
            title : "CSS3详解",
            rotatedColor : "colRed",
            rotatedText : "微信出品的 “小程序” 已经在业界掀起研究热潮",
            isRotated : false,
            id : "1"
        },
        {
            color : "colYellow",
            textNote : "lession4",
            title : "Bootstrap",
            rotatedColor : "colRed",
            rotatedText : "微信出品的 “小程序” 已经在业界掀起研究热潮",
            isRotated : false,
            id : "1"
        },
        {
            color : "colRed",
            textNote : "lession2",
            title : "HTML5详解",
            rotatedColor : "colRed",
            rotatedText : "微信出品的 “小程序” 已经在业界掀起研究热潮",
            isRotated : false,
            id : "1"
        },
        {
            color : "colOrange",
            textNote : "lession3",
            title : "CSS3详解",
            rotatedColor : "colRed",
            rotatedText : "微信出品的 “小程序” 已经在业界掀起研究热潮",
            isRotated : false,
            id : "1"
        },
        {
            color : "colGreen",
            textNote : "lession5",
            title : "NodeJs",
            rotatedColor : "colRed",
            rotatedText : "微信出品的 “小程序” 已经在业界掀起研究热潮",
            isRotated : false,
            id : "1"
        }
        ,
        {
            color : "colOrange",
            textNote : "lession3",
            rotatedColor : "colRed",
            rotatedText : "微信出品的 “小程序” 已经在业界掀起研究热潮",
            title : "CSS3详解",
            isRotated : false,
            id : "1"
        },
        {
            color : "colYellow",
            textNote : "lession4",
            title : "Bootstrap",
            rotatedColor : "colRed",
            rotatedText : "微信出品的 “小程序” 已经在业界掀起研究热潮",
            isRotated : false,
            id : "1"
        },
        {
            color : "colRed",
            textNote : "lession2",
            title : "HTML5详解",
            rotatedColor : "colRed",
            rotatedText : "微信出品的 “小程序” 已经在业界掀起研究热潮",
            isRotated : false,
            id : "1"
        },
        {
            color : "colOrange",
            textNote : "lession3",
            rotatedColor : "colRed",
            rotatedText : "微信出品的 “小程序” 已经在业界掀起研究热潮",
            title : "CSS3详解",
            isRotated : false,
            id : "1"
        }
    ]
  }
}

/*管理demo11*/
function demo11Controller( $state, $rootScope, $modal, $alert, $http, $timeout, utils, i18nService, Restangular, highlightInit){
    var vm = this;
    vm.opts = {
        step1Items : [
            {
                id : "0",
                name : "商户管理",
                isStep2Expanded: false,
                step2Items : [
                    {
                        id : "00",
                        isStep3Expanded: false,
                        name : "新增客户"
                    },
                    {
                        id : "01",
                        name : "修改客户",
                        isStep3Expanded: false,
                        step3Items :[
                            {
                                id : "000",
                                name : "物流企业"
                            },
                            {
                                id : "001",
                                name : "总部型企业"
                            },
                            {
                                id : "002",
                                name : "专业市场企业"
                            }
                        ]
                    },
                    {
                        id : "02",
                        isStep3Expanded: false,
                        name : "商户人脉",
                        step3Items :[
                            {
                                id : "020",
                                name : "集中检索"
                            },
                            {
                                id : "021",
                                name : "物流企业"
                            },
                            {
                                id : "022",
                                name : "总部型企业"
                            },
                            {
                                id : "023",
                                name : "专业市场企业"
                            },
                            {
                                id : "024",
                                name : "开通跟踪"
                            }
                        ]
                    },
                    {
                        id : "03",
                        isStep3Expanded: false,
                        name : "开通跟踪"
                    },
                    {
                        id : "04",
                        isStep3Expanded: false,
                        name : "支付管理",
                        step3Items :[
                            {
                                id : "040",
                                name : "终端管理"
                            },
                            {
                                id : "041",
                                name : "微信/支付宝"
                            },
                            {
                                id : "042",
                                name : "银联在线"
                            },
                            {
                                id : "043",
                                name : "代扣管理"
                            }
                        ]
                    }
                ]
            },
            {
                id : "1",
                name : "监控中心",
                isStep2Expanded: false,
                step2Items : [
                    {
                        id : "10",
                        isStep3Expanded: false,
                        name : "用户业务数据",
                        step3Items :[
                            {
                                id : "100",
                                name : "物流企业"
                            },
                            {
                                id : "101",
                                name : "总部型企业"
                            },
                            {
                                id : "102",
                                name : "专业市场"
                            }
                        ]
                    },
                    {
                        id : "11",
                        isStep3Expanded: false,
                        name : "清分数据",
                        step3Items :[
                            {
                                id : "110",
                                name : "集中检索"
                            },
                            {
                                id : "111",
                                name : "物流企业"
                            },
                            {
                                id : "112",
                                name : "总部型企业"
                            },
                            {
                                id : "113",
                                name : "专业市场企业"
                            }
                        ]
                    },
                    {
                        id : "12",
                        isStep3Expanded: false,
                        name : "风险控制",
                        step3Items :[
                            {
                                id : "120",
                                name : "风险规划配置"
                            },
                            {
                                id : "121",
                                name : "风险行为分析"
                            },
                            {
                                id : "122",
                                name : "反洗钱监控"
                            },
                            {
                                id : "123",
                                name : "风险事件跟踪"
                            }
                        ]
                    },
                    {
                        id : "13",
                        isStep3Expanded: false,
                        name : "货款管理"
                    },
                    {
                        id : "14",
                        isStep3Expanded: false,
                        name : "电子围栏"
                    }
                ]
            },
            {
                id : "2",
                isStep2Expanded: false,
                name : "数据服务中心",
                step2Items : [
                    {
                        id : "20",
                        isStep3Expanded: false,
                        name : "标签管理"
                    },
                    {
                        id : "21",
                        isStep3Expanded: false,
                        name : "数据服务",
                        step3Items :[
                            {
                                id : "210",
                                name : "物流数据"
                            },
                            {
                                id : "211",
                                name : "总部型数据"
                            },
                            {
                                id : "212",
                                name : "专业市场数据"
                            },
                            {
                                id : "213",
                                name : "其他数据"
                            }
                        ]
                    },
                    {
                        id : "22",
                        isStep3Expanded: false,
                        name : "商圈管理",
                        step3Items :[
                            {
                                id : "220",
                                name : "新增商圈"
                            },
                            {
                                id : "221",
                                name : "商圈查询"
                            },
                            {
                                id : "222",
                                name : "商圈统计"
                            }
                        ]
                    }
                ]
            },
            {
                id : "3",
                isStep2Expanded: false,
                name : "我的组织",
                step2Items : [
                    {
                        id : "30",
                        name : "站点管理"
                    },
                    {
                        id : "31",
                        name : "员工管理"
                    },
                    {
                        id : "32",
                        name : "人脉管理"
                    }
                ]
            }
        ]
    }
}