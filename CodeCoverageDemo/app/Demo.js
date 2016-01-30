(function() {
    function demo() {
        var self = this;
        function add(a, b) {
            return a + b;
        }

        self.add = add;
    }

    window.demo = demo;
})();