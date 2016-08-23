(function(angular){
  angular
    .module('my.summarizer')
    .service('summarizerService', service);

  function service() {
    var service = {
      add     : add,
      load    : load,
      summary : {}
    };

    return service;

    function add(entry) {
      //Split into 2 groups - properties for instant addition
      //and props for further processing
      var typeGroups = groupProperties(entry);

      addProperties(typeGroups.simple, service.summary);

      for(var i = 0; i < typeGroups.composed.length; i++) {
        var stat  = typeGroups.composed[i];
        var group =
          service.summary[stat.name] = service.summary[stat.name] || {};
        //If the rawValue is an object, then that must be an already calculated stat
        if(typeof stat.rawValue === 'object'){
          mergeStats(group, stat.rawValue);
          continue;
        }
        //If this is a new group clasification - create it
        var classification =
          group[stat.rawValue] = group[stat.rawValue] || {};

        //add the simple props to the sub group?
        addProperties(typeGroups.simple, classification);
      }
    }

    function mergeStats(statA, statB) {
      for(var p in statB){
        if(statA[p]) {
          if(typeof statB[p] === 'object') {
            mergeStats(statA[p], statB[p]);
            continue;
          }
          statA[p] = statA[p] + statB[p];
          continue;
        }
        statA[p] = statB[p];
      }
    }
    function groupProperties(entry) {
      var forceCount = true;
      var grouping = {
        simple   : [],
        composed : []
      };
      //TODO: needs to be more dynamic
      for(var p in entry) {
        if(p === 'count') forceCount = false;

        var type = getType(p, entry);
        if(typeof entry[p] === 'number') {
          grouping.simple.push(type);
          continue;
        }
        grouping.composed.push(type);
      }
      if(forceCount) {
        grouping.simple.push(getType('count'));
      }
      return grouping;
    }

    function getType(name, entry) {
      var rawValue;

      if(name === 'count' && !(entry && entry.count)){
        rawValue = 1;
      }else{
        rawValue = entry[name];
      }
      var type = {
        name     : name,
        rawValue : rawValue,
        getValue : getValue
      };
      return type;

      function getValue(target) {
        var val = (target[name] || 0) + rawValue;
        return val;
      }
    }

    function addProperties(props, target){
      for(var i = 0; i < props.length; i++) {
        target[props[i].name] = props[i].getValue(target)
      }
    }

    function load(sum) {
      service.summary = sum;
    }
  }
})(angular);
