Task = function (data, callback) {
    return {
        data: data,
        callback: callback
    }
}

AsyncTaskDequeue = function () {
    var _dequeue = new Dequeue();
    var eventEmitter = new events.EventEmitter();

    function push_task (task) {
        _dequeue.push(task);
        if (_dequeue.length === 1) {
            eventEmitter.emit('new_task');
        }
    }

    function unshift_task (task) {
        _dequeue.unshift(task);
        if (_dequeue.length === 1) {
            eventEmitter.emit('new_task');
        }
    }

    function shift_task () {
        return _dequeue.shift();
    }

    function process_task () {
        var task = _dequeue.shift_task();
        if (task) {
            task.callback(task.data, function () {
                eventEmitter.emit('task_complete');
            })
        }
    }

    eventEmitter.on('new_task', process_task);
    eventEmitter.on('task_complete', process_task);

    return {
        enqueue: push_task,
        dequeue: unshift_task,
    }
}