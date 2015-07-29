Blog.controller('UserCreateCtrl', function($scope, $location ,User, Session, AuthService) {

    var defaultForm = {
        email: '',
        password: '',
        passwordConfirmation: ''
    };

    $scope.user = angular.copy(defaultForm);

    $scope.submit = function(isValid, user) {
        $scope.submitted = true;
        $scope.accountCreated = false;

        $scope.userCreateForm.$setDirty();

        if (!isValid) {
            return;
        }
        console.log("In here");

        User.create(user).then(function(response) {
            console.log(response);
            $scope.accountCreated = true;

            // now log in user
            AuthService.login(user).then(function(user) {
                $location.path('/posts/create')
            }, function(response) {
                $scope.failedLoginAttempt = true;
            });
            // reset form
            $scope.submitted = false;
            $scope.user = angular.copy(defaultForm);
            $scope.userCreateForm.$setPristine();
        });
    };
})