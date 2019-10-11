/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus,
    knowsProgramming,
    config
    ) {
      let defaultWeeks=800;
      if(!knowsProgramming) defaultWeeks+=500;
      let weeks=defaultWeeks/config[focus];
      return Math.ceil(weeks);
  };
  