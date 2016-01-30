(function(describe,it,expect) {
    describe('/jsTests/app/demoTests', function () {
        var demo;
        beforeEach(function() {
            demo = new window.demo();
        });
        it('demo should truthy', function() {
            expect(demo).toBeTruthy();
        });
    });
})(window.describe, window.it, window.expect);