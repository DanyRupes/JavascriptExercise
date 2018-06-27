let myTodos = {
    day: 'Monday',
    meetings: 0,
    meetDone:0,
    
    addMeeting: function(meet){
        this.meetings = this.meetings +meet
        
        // console.log(""+this.meetings)
        
    },

    completedMeetings: function(meet){
        
        this.meetDone = this.meetDone - meet
        // console.log("" +this.meetDone)
        
    },
    getSummaryOfDay: function(){
        return `You have Completed ${Math.abs(this.meetDone)} meetings and Left ${this.meetings+this.meetDone} `
    },
    resetDay: function(){
        this.day= 'Monday'
    this.meetings= 0
    this.meetDone= 0
    this.total =0
    }
}

myTodos.addMeeting(5)
myTodos.completedMeetings(3)

myTodos.addMeeting(2)
console.log(myTodos.getSummaryOfDay())
myTodos.resetDay();


