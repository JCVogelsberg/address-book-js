var Contact = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedAddress = $("input#new-address").val();

    var newContact = Object.create(Contact);
    newContact.firstName = inputtedFirstName;
    newContact.lastName = inputtedLastName;
    newContact.address = inputtedAddress;

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
    
    $(".contact").last().click(function() {
      $("#show-contacts").show();

      $('#show-contacts h2').text(newContact.fullName());
      $('.firstname').text(newContact.firstName);
      $('.lastname').text(newContact.lastName);
      $('.address').text(newContact.address);
    });

    this.reset();
  });
});











 
