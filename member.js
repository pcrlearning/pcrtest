function skillsMember(){};
skillsMember.prototype = {
    constructor: skillsMember,
    getSkills: function(){
        console.log("Skills: Javascript, HTML, CSS, Angular");
    }
}