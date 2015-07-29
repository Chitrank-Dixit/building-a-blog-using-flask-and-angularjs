Blog.controller('UserCreateCtrl', function($scope, User) {

    var defaultForm = {
        email: 'a@a.com',
        password: 'abcd',
        passwordConfirmation: 'abcd'
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

            // reset form
            $scope.submitted = false;
            $scope.user = angular.copy(defaultForm);
            $scope.userCreateForm.$setPristine();
        });
    };
})