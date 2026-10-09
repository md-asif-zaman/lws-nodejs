import { EventEmitter } from 'node:events';

const emitter = new EventEmitter();

// register a listener for bellRing event
emitter.on('bellRing', ({ period, text }) => {
    console.log(`we need to run because ${period} ${text}`);
})

// raise an event
setTimeout(() => {
    emitter.emit('bellRing', {
        period: 'first',
        text: 'period ended'
    });
}, 1000)
