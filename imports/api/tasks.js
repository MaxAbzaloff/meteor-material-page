import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'
import { check } from 'meteor/check'

export const Tasks = new Mongo.Collection('tasks')

if (Meteor.isServer) {
  Meteor.publish('tasks', () => {
    return Tasks.find({})
  })
}

Meteor.methods({
  'tasks.insert' (obj) {
    check(obj, Object)

    Tasks.insert(obj)
  },
  'tasks.insertMany' (arr) {
    check(arr, Array)

    arr.map(obj => Tasks.insert(obj))
  },
  'tasks.remove' (taskId) {
    check(taskId, String)

    Tasks.remove(taskId)
  },
  'tasks.removeAll' () {
    Tasks.remove({})
  },
  'tasks.update' (taskId, data) {
    Tasks.update(taskId, data)
  }
})
