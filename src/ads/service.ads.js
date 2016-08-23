(function(angular){
  angular
    .module('ads')
    .service('adsService', service);

  service.$inject = [];
  function service() {
    var service = {};

    service.data = {
      "buttons": [
        {
          "link": "#/venue?venueId=123",
          "image": "http://i.imgur.com/D5cBPjB.jpg",
          "caption_en": "Book",
          "name": "book",
          "description_en": "Make an Appointment",
          "title_en" : "Near Me",
          "short_description_en" : "Book Top Local Services",
          "short_description_de" : "Lorem Ipsum",
          "title_de" : "Sed Ut Perspiciatis"
        },
        {
          "link": "#/gym-products",
          "image": "http://i.imgur.com/91IWQ8P.jpg",
          "caption_en": "Explore",
          "name": "classes",
          "description_en": "Discover our Services",
          "title_en" : "Dental Care",
          "short_description_en" : "Teeth Whitening",
          "short_description_de" : "Ipsum Lorem",
          "title_de" : "Repaxe Er Gicias"
        },
        {
          "link": "#/venues?groupName=ueni&entireGroup=true",
          "image": "http://i.imgur.com/yDlQoLU.jpg",
          "caption_en": "Salons",
          "name": "clubs",
          "description_en": "Find your Salon",
          "title_en" : "Hair Care",
          "short_description_en" : "Women's Haircut & Styling, Women's Hair Products",
          "short_description_de" : "Lira Paprsum Ve",
          "title_de" : "Kora Bemr Lohgarm A"
        },
        {
          "name": "collection",
          "image": "http://i.imgur.com/6XvZEMp.jpg",
          "description_en": "Find Your Style",
          "caption_en": "Collection",
          "link": "#/special",
          "title_en" : "Face Care",
          "short_description_en" : "Facial, Eyes, Eyebrows & Eyelashes",
          "short_description_de" : "Zebra Kon Kakao",
          "title_de" : "Pet Petleta Pekal Petar"
        },
        {
          "name": "other",
          "image": "http://i.imgur.com/oKU8eij.jpg",
          "description_en": "The History of the House",
          "caption_en": "Our Salon",
          "link": "#/2",
          "title_en" : "Body Care",
          "short_description_en" : "Massage, Weight Loss, Tanning, Self Esteem Lessons",
          "short_description_de" : "Random Wors In German",
          "title_de" : "Lore Lorelai"
        },
        {
          "name": "other2",
          "image": "http://i.imgur.com/4Stw0tA.jpg",
          "description_en": "Need something different?",
          "caption_en": "Other Haircuts",
          "link": "#/2",
          "title_en" : "Nail Care",
          "short_description_en" : "Nails, Products For Nails",
          "short_description_de" : "Zsd",
          "title_de" : "Neft"
        }
      ]
    };
    return service;
  }
})(angular);
