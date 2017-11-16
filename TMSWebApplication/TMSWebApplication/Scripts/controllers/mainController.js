var app = angular.module('app', []);

app.controller('mainController', function ($scope, $http) {
    /*$(document).ready(function () {
        var scroll_start = 0;
        var startchange = $('#startchange');
        var offset = startchange.offset();
        if (startchange.length) {
            $(document).scroll(function () {
                scroll_start = $(this).scrollTop();
                if (scroll_start > offset.top) {
                    $(".navigation").css('background-color', '#feba04');
                    $(".navigation").css('width', '100%');
                } else {
                    $('.navigation').css('background-color', 'white');
                }
            });
        }
    });*/
    $scope.postExtended = -1;
    $scope.ctx = { playTitle: "PLAY" };

    $scope.extendPost = function () {
        $scope.postExtended *= -1;
        var growDiv = document.getElementById('grow');
        var playButton = document.getElementById('play-button');
        var buttonTitle = document.getElementById('button-title');

        if ($scope.postExtended === -1) {
            growDiv.style.height = 0;            
            playButton.style.borderTop = "70px solid #374c5f";
            playButton.style.borderBottom = "0";
            playButton.style.bottom = "-40px";
            buttonTitle.style.bottom = "33px";
            buttonTitle.style.left = "-16px";
            $scope.ctx.playTitle = "PLAY";
        } else {
            var wrapper = document.querySelector('.measuringWrapper');
            growDiv.style.height = wrapper.clientHeight + "px";
            playButton.style.borderBottom = "70px solid #374c5f";
            playButton.style.borderTop = "0";
            playButton.style.bottom = "-30px";
            buttonTitle.style.bottom = "-57px";
            buttonTitle.style.left = "-23px";
            $scope.ctx.playTitle = "CLOSE";
        }
    }
});