describe("Contact", function() {
  describe("fullName", function() {
    it("concatenate first and last name", function() {
      var testContact = Object.create(Contact);
      testContact.firstName = "Bill";
      testContact.lastName = "Murray";
      testContact.fullName().should.equal("Bill Murray");
    });
  });
});

describe("Address", function() {
  describe("fullAddress", function() {
    it("builds the full address with street, city and state", function() {
      var testAddress = Object.create(Address);
      testAddress.street = "1234 Main St";
      testAddress.city = "Louisville";
      testAddress.state = "KY";
      testAddress.fullAddress().should.equal("1234 Main St, Louisville, KY");
    });
  });
});
