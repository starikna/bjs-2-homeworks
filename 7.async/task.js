class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {

        if(!id) {
            throw new Error('Такого будильника еще нет');
        }
        
        const lengthArr = this.alarmCollection.length

        if (this.alarmCollection.some((lengthArr) => lengthArr = id)) {
       
            console.error('Такой звонок уже есть');
        } else {    
            this.alarmCollection.push({id, time, callback});
        }
    }

   removeClock(id) {

    const lengthArr1 = this.alarmCollection.length

   const alarmCollection2 = this.alarmCollection.filter ((id) => id !== this.id) 

        const lengthArr2 = alarmCollection2.length

        if (lengthArr1 !== lengthArr2) {
            return true;
        } else {
            return false;
        }
    }

      getCurrentFormattedTime(time) {
        return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); 
      }

      start() {
function checkClock(timerId) {
    if(time === new Date) {
        
    }
}
      }

      stop() {

      }

      printAlarms() {

      }

      clearAlarms() {

      }
    }