describe('Summarizer',function(){
  var service;
  var summary;

  beforeEach(angular.mock.module('my.summarizer'));
  beforeEach(inject(function(summarizerService){
    service = summarizerService;
  }));

  it('method load should exist', function(){
    expect(typeof service.load).toBe('function');
  });
  beforeEach(function() {
    summary = {
      "count"    : 15,
      "amount"   : 425,
      "num_items": 12,
      "gender"   : {
        "F" : {
          "count"    : 5,
          "amount"   : 225,
          "num_items": 7
        },
        "M" : {
          "count"    : 10,
          "amount"   : 200,
          "num_items": 5
        }
      },
      "currency": {
        "EUR" : {
          "count"    : 13,
          "amount"   : 175,
          "num_items": 6
        },
        "USD" : {
          "count"    : 2,
          "amount"   : 250,
          "num_items": 6
        }
      }
    };
    var summaryCopy = angular.copy(summary,{});
    service.load(summaryCopy);
  });

  it('should load an existing summary correctly', function(){
    try{
      expect(JSON.stringify(service.summary))
        .toBe(JSON.stringify(summary));
    }catch(e) {
      throw e;
    }
  });

  describe('method add', function() {
    var entry;

    it('should exist', function() {
      expect(typeof service.add).toBe('function');
    });
    beforeEach(function(){
      entry = {
        "gender"    : "M",
        "amount"    : 17.0,
        "num_items" : 2,
        "currency"  : "EUR"
      };
      service.add(entry);
    });
    describe('general summary', function(){
      it('should have an updated count', function(){
        expect(service.summary.count).toBe(summary.count + 1);
      });
      it('should have an updated amount', function(){
        expect(service.summary.amount).toBe(summary.amount + entry.amount);
      });
      it('should have an updated number of items', function(){
        expect(service.summary.num_items)
          .toBe(summary.num_items + entry.num_items);
      });
      it('should have any new extra number properties as they are', function(){
        var summaryCopy = angular.copy(summary,{});
        var entryCopy   = angular.copy(entry, {});
        entryCopy.week_of_year = 42;
        service.load(summaryCopy);
        service.add(entryCopy);
        expect(service.summary.week_of_year).toBe(42);
        expect(service.summary.gender.M.week_of_year).toBe(42);
      });
    });
    describe('existing group', function(){
      var genderSubSplit, currencySubSplit;

      beforeEach(function(){
        genderSubSplit = service.summary.gender.M;
        currencySubSplit = service.summary.currency.EUR;
      });
      describe('existing classification', function(){
        it('should have an updated count', function(){
          expect(genderSubSplit.count).toBe(summary.gender.M.count + 1);
          expect(currencySubSplit.count).toBe(summary.currency.EUR.count + 1);
        });
        it('should have an updated amount', function(){
          expect(genderSubSplit.amount)
            .toBe(summary.gender.M.amount + entry.amount);
          expect(currencySubSplit.amount)
            .toBe(summary.currency.EUR.amount + entry.amount);
        });
        it('should have an updated number of items', function(){
          expect(genderSubSplit.num_items)
            .toBe(summary.gender.M.num_items + entry.num_items);
          expect(currencySubSplit.num_items)
            .toBe(summary.currency.EUR.num_items + entry.num_items);
        });
      });
      describe('new classification', function(){
        var cur;
        beforeEach(function() {
          service.load(angular.copy(summary,{}));
          delete service.summary.currency.EUR;
          service.add(entry);
          cur = service.summary.currency.EUR;
        });
        it('should be created if it doesnt exist', function(){
          expect(typeof cur).toBe('object');
        });
        it('should have a count of 1', function() {
          expect(cur.count).toBe(1);
        });
        it('should have the same amount as the entry', function(){
          expect(cur.amount).toBe(entry.amount);
        });
        it('should have the same num items as the entry', function(){
          expect(cur.num_items).toBe(entry.num_items);
        });
      });
    });
    describe('New group',function() {
      var group;

      beforeEach(function(){
        service.load(angular.copy(summary));
        delete service.summary.currency;
        service.add(entry);
        group = service.summary.currency;
      });

      it('should get created', function(){
        expect(typeof group).toBe('object');
      });
      describe('Classification', function(){
        it('should get created', function(){
          expect(typeof group.EUR).toBe('object');
        });
        it('should have the non-group properties of the entry', function(){
          expect(group.EUR.amount).toBe(entry.amount);
          expect(group.EUR.num_items).toBe(entry.num_items);
        });
        it('should have a count', function(){
          expect(group.EUR.count).toBe(1);
        });
      });
    });
  });

  describe('Adding subtotals', function() {
    describe('Add a second summary', function(){
      var secondSummary;
      beforeEach(function(){
        secondSummary = {
          "count"    : 8,
          "amount"   : 235,
          "num_items": 15,
          "extra_num_property" : 10,
          "gender"   : {
            "F" : {
              "count"    : 8,
              "amount"   : 235,
              "num_items": 15
            }
          },
          "extra_group" : {
            "A" : {
              "count" : 1,
              "amount": 50,
              "num_items" : 1
            },
            "B" : {
              "count" : 5,
              "amount": 80,
              "num_items" : 7
            },
            "C" : {
              "count" : 2,
              "amount": 105,
              "num_items" : 7
            }
          },
          "currency": {
            "EUR" : {
              "count"    : 3,
              "amount"   : 100,
              "num_items": 6
            },
            "USD" : {
              "count"    : 5,
              "amount"   : 135,
              "num_items": 9
            }
          }
        };
        service.add(angular.copy(secondSummary,{}));
      });
      describe('general summary', function(){
        it('should have an updated count', function(){
          expect(service.summary.count).toBe(
            summary.count + secondSummary.count
          );
        });
        it('should have an updated amount', function(){
          expect(service.summary.amount).toBe(
            summary.amount + secondSummary.amount
          );
        });
        it('should have an updated number of items', function(){
          expect(service.summary.num_items).toBe(
            summary.num_items + secondSummary.num_items
          );
        });
        it('should have any unknown numeric properties',function(){
          expect(service.summary.extra_num_property).toBe(
            secondSummary.extra_num_property
          );
        });
      });
      describe('existing grouping', function(){
        it('should have an updated count',function(){
          expect(service.summary.gender.F.count).toBe(
           summary.gender.F.count + secondSummary.gender.F.count
          );
        });
        it('should have an updated amount',function(){
          expect(service.summary.gender.F.amount).toBe(
           summary.gender.F.amount + secondSummary.gender.F.amount
          );
        });
        it('should have an updated number of items',function(){
          expect(service.summary.gender.F.num_items).toBe(
           summary.gender.F.num_items + secondSummary.gender.F.num_items
          );
        });
      });
      describe('new grouping', function(){
        it('should be translated directly', function(){
          expect(JSON.stringify(service.summary.extra_group)).toBe(
            JSON.stringify(secondSummary.extra_group)
          );
        });
      });
    });
  });
});
