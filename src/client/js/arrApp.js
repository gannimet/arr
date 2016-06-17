(function(undefined) {
    'use strict';

    angular
        .module('arrApp', ['rails'])
        .controller('arrController', arrController)
        .factory('Site', Site);

    function arrController(Site) {
        this.listAll = function() {
            Site.query().then(function(result) {
                console.log('listAll: ', result);
            });
        }

        this.getSingle = function() {
            Site.get('BGUK').then(function(result) {
                console.log('getSingle: ', result);
            });
        };

        this.postNew = function() {
            new Site({
                code: 'BGIT',
                displayName: 'BMG Italy',
                countryCode: 'IT'
            }).create().then(function(result) {
                console.log('postNew: ', result);
            });
        };

        this.update = function() {

        };
    }

    function Site(railsResourceFactory) {
        var Resource = railsResourceFactory({
            url: '/resources/sites',
            name: 'site',
            idAttribute: 'hurz'
        });

        return Resource;
    }
})();
