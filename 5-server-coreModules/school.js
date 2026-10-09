import { EventEmitter } from 'node:events';


export class School extends EventEmitter {
    startPeriod() {
        console.log("Class started");

        // raise event wen bell ring
        // raise an event
        setTimeout(() => {
            this.emit('bellRing', {
                period: 'first',
                text: 'period ended'
            });
        }, 1000)

    }
}

