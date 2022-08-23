class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if(!id) {
            throw new Error('Такого будильника еще нет');
        }

        if (this.alarmCollection.includes(id)) {
            console.error('Такой звонок уже есть');
        }    
            this.alarmCollection.push({id, time, callback});
    }

   removeClock(id) {
    let lengthArr1 = this.alarmCollection.length

        if(this.id === id) {
            this.alarmCollection.splice(this.alarmCollection[id], 1)
        }

        let lengthArr2 = this.alarmCollection.length

        if (lengthArr1 === lengthArr2) {
            return 0;
        } else {
            return 1;
        }
      }

      getCurrentFormattedTime(time) {
        return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      }

      start() {
        if (id) {
            return id
        } else {
            const intervalID = this.alarmCollection.setInterval(myCallback, 1000);

function myCallback() {
  this.alarmCollection.forEach(this.time => time 
  );
}
        }
      }
}