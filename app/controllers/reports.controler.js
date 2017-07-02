pharmacyModuleApp.controller('reportsController', function ($scope, $http) {

    //function for get all users in db
    var getDangerReport = function () {
        $http.get('http://localhost:8000/api/stock/danger').then(function (response) {
            $scope.stock = response.data;
            console.log( response.data);
        });
    };

    getDangerReport();


    var getOrderReport = function () {
        $http.get('http://localhost:8000/api/stock/reorder').then(function (response) {
            $scope.reorder = response.data;
            console.log( response.data);
        });
    };

    getOrderReport();

    $('.btn-pdf').click(function() {
                    var doc = new jsPDF();

                    doc.fromHTML($('#stock_display').html(), 15, 15, {
                        'width': 170
                    });

                    doc.save('Report-file.pdf');

    }); 
});