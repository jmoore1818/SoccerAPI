/**
 * Players.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
 	playerName: {
    type: 'string',
    required: true,
    minLength: 2
  	},
  	playerAge: {
    type: 'string',
    required: true
    },
	playerPosition: {
    type: 'string',
    required: true,
    minLength: 3
    },
    parentContact: {
    type: 'string',
    required: true,
    minLength:2,
    },
    parentPhone: {
   	type: 'string',
   	required: true,
   	minLength:10,    
   }
   }
};

