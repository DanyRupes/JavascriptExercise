let myTodos = {
    day: 'Monday',
    meetings: 0,
    meetDone:0,

    addMeeting: function(name, val){
        if(val ==true){
        this.meetings = this.meetings +val
        console.log(""+this.meetings)
        }
    },

    completedMeetings: function(val){
        if (val ==true){
        this.meetDone = this.meetDone +1
        console.log("" +this.meetDone)
        }
    }
}


myTodos.addMeeting("JavaScript", 0);
myTodos.completedMeetings(1)

