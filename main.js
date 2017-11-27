'use strict';

process.env.DEBUG = 'actions-on-google:*';
const App = require('actions-on-google').DialogflowApp;
const functions = require('firebase-functions');

// a. the action names from the Dialogflow intents
const QUESTION_1 = 'Question-1';
const QUESTION_2 = 'Question-2';
const QUESTION_3 = 'Question-3';
const QUESTION_4 = 'Question-4';
const QUESTION_5 = 'Question-5';
const QUESTION_6 = 'Question-6';
const QUESTION_7 = 'Question-7';
const QUESTION_8 = 'Question-8';

// b. the parameters that are parsed from the intents
const GRATEFUL_1 = 'any-grateful-1';
const GRATEFUL_2 = 'any-grateful-2';
const GRATEFUL_3 = 'any-grateful-3';
const GREATDAY = 'any-greatday';
const AFFIRMATION_1 = 'any-affirmation-1';
const AFFIRMATION_2 = 'any-affirmation-2';
const AFFIRMATION_3 = 'any-affirmation-3';

exports.JournalBot = functions.https.onRequest((request, response) => {
  const app = new App({request, response});
  console.log('Request headers: ' + JSON.stringify(request.headers));
  console.log('Request body: ' + JSON.stringify(request.body));

  // Return the last journal entry
  function reflect (app) {
    let grateful_1 = app.getArgument(GRATEFUL_1);
    let grateful_2 = app.getArgument(GRATEFUL_2);
    let grateful_3 = app.getArgument(GRATEFUL_3);
    let greatday = app.getArgument(GREATDAY);
    let affirmation_1 = app.getArgument(AFFIRMATION_1);
    let affirmation_2 = app.getArgument(AFFIRMATION_2);
    let affirmation_3 = app.getArgument(AFFIRMATION_3);

    app.tell('Here is your previous entry: ' + '\n'+
    'Grateful for:' + '\n' +
    '1.) ' + grateful_1 + '\n' +
    '2.) ' + grateful_2 + '\n' +
    '3.) ' + grateful_3 + '\n' +
    'To make today great:' + greatday + '\n' +
    'I am:' + '\n' +
    '1.) ' + affirmation_1 + '\n' +
    '2.) ' + affirmation_2 + '\n' +
    '3.) ' + affirmation_3 + '\n' +
  );
  }

  // Build an action map, which maps intent names to functions
  let actionMap = new Map();
  actionMap.set(QUESTION_1, reflect);

  app.handleRequest(actionMap);
});
