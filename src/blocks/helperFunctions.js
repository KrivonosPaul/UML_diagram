export const reassignDefault = (def, actual) => {
  Object.keys(def).forEach((elem) => {
    if(actual[elem]){
      def[elem] = actual[elem];
    }
  });
};
