(function(angular){

    var index = angular.module("myBlog.controllers.articleDetail",["ngRoute"]);
    index.config(["$routeProvider",function($routeProvider){
        $routeProvider.when("/index/:page",{
            templateUrl:"./controllers/index/show_index.html",
            controller:"Index"
        })
    }]);
    index.controller("Index",[
        "$scope","$route","$routeParams","$http","AppConfig",
        function($scope,$route,$routeParams,$http,AppConfig){
        $scope.currentPage = parseInt($routeParams.page);
        $scope.articleList = [];

         //后台发送的参数
         var count = AppConfig.pageSize,
             start = ($scope.currentPage-1)*count;
        //正在加载资源
         $scope.loading = true;
        $http({
            method:"GET",
            url:"/admin/article/getArticleList/"+$scope.currentPage+"?start="+start+"&count="+count
            })
            .then(function(res){
                $scope.articleList = res.data;
                $http
                    .get("/admin/article/getAllArticle")
                    .then(function(res){
                        $scope.totPage = Math.ceil(res.data.length/AppConfig.pageSize);
                        $scope.loading = false;
                    })
            },
            function(){
                console.log("读取文章列表失败");
            });
        //点击上一页和下一个的执行函数
        $scope.go = function(page){
            if(page<1 || page>$scope.totPage) return ;
            $route.updateParams({page:page});
        }


    }]);

})(angular);
