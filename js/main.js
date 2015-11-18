import angular from 'angular';

angular
  .module('app', [])
  .directive('timContact', timContact)
  .controller('HomeController', HomeController)
;

function HomeController () {

  let vm = this;

  vm.contacts = [
    { name: 'Tim', age: 32, color: 'blue' },
    { name: 'Greg', age: 55, color: 'black' },
    { name: 'Bill', age: 33, color: 'red' },
    { name: 'Stacy', age: 49, color: 'green' },
    { name: 'Jen', age: 28, color: 'orange' },
  ];

}


function timContact () {
  return {

    restrict: 'AE', // E = Element, A = Attribute
    replace: true,
    scope: {
      p: "=person"
    },
    template: `
      <ul class="vcard">
        <li>My Name is {{ p.name }}</li>
        <li>My Age is {{ p.age }}</li>
      </ul>
    `,
    link: function (scope, element, attrs) {
      console.log(scope);
      element.on('click', function () {
        element.css('background-color', attrs.color).css('color', 'white');
        // alert(attrs.name + ' has been contacted');
      });
    }

    // restrict: 'AE', // E = Element, A = Attribute
    // scope: {},
    // transclude: true,
    // template: `
    //   <ul class="vcard">
    //     <li ng-transclude></li>
    //   </ul>
    // `,
  };
}