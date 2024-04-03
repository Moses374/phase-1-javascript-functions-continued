function saturdayFun(plans = "roller-skate") {
  return `This Saturday, I want to ${plans}!`;
}

let mondayWork = function(plans = "go to the office") {
  return `This Monday, I will ${plans}.`;
};

let wrapAdjective = function(style = "*") {
  return function(description = "special") {
    return `You are ${style}${description}${style}!`;
  };
};
