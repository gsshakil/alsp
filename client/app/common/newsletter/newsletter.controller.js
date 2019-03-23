class NewsletterController {
  constructor($scope, $http) {
    'ngInject';
    this.name = 'newsletter';
    // this.$scope = $scope;
    // this.$http = $http;
    // const user = $scope.user;

    // console.log(user);

    // Construct req data
    const data = {
      members: [
        {
          email_address: $scope.email,
          status: 'subscribed',
          merge_fields: {
            FNAME: $scope.firstname,
            LNAME: $scope.lastName
          }
        }
      ]
    };

    const postData = JSON.stringify(data);

    const options = {
      url: 'https://us20.api.mailchimp.com/3.0/lists/8be08e3867',
      method: 'POST',
      headers: {
        Authorization: 'auth bd1bbf03031db227590370c515fce417-us20',
        data: postData
      }
    };

    $scope.submitNewsletterForm = ()=> {
      $http(options).then(()=>{
        alert("Your Information has saved successfully");
      }).catch(error=> alert("Something went wrong"));
      console.log($scope.email);
    }
  };
}

export default NewsletterController;
