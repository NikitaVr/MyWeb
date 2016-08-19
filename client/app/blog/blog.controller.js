'use strict';

(function() {

class BlogController {

  constructor($http, $scope, socket) {
    this.scope = $scope;
    this.$http = $http;
    this.socket = socket;
    this.awesomeThings = [];
    this.test = "testing!!!";
    this.testEntries = [];
    this.singleEntry = {};
    this.searchValue = "";
    console.log("controller created!");
    
    this.$http.get('/api/blog').then(response => {
        
                            console.log("http complete!");
                            console.log(response.data.testEntries)
                            this.testEntries = response.data.testEntries
      //this.awesomeThings = response.data;
      //this.socket.syncUpdates('thing', this.awesomeThings);
    });
    


    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('thing');
    });
  }
  
  hi() {
        console.log("hi");
            
    }
    
  search() {
    console.log(vm.searchValue)
  }
    
  getSingleEntry(_id) {
        this.$http.post('/api/blog/singleEntry', {id : _id}).then(response => {
                            console.log("ID: ", _id)
                            console.log("get single Entry Complete!");
                            console.log(response.data.singleEntry)
                            this.testEntries = [] // Probably not the best way......
                            this.singleEntry = response.data.singleEntry
      //this.awesomeThings = response.data;
      //this.socket.syncUpdates('thing', this.awesomeThings);
    });
  }

  $onInit() {

  }

  addThing() {
    if (this.newThing) {
      this.$http.post('/api/things', { name: this.newThing });
      this.newThing = '';
    }
  }

  deleteThing(thing) {
    this.$http.delete('/api/things/' + thing._id);
  }
}

//Maybe remove this part?
angular.module('personalWebsiteApp')
  .component('blog', {
    templateUrl: 'app/blog/blog.html',
    controller: BlogController
  });
  
  
  // Keep this part!!!
  angular.module('personalWebsiteApp')
  .controller('BlogController', BlogController);

})();
