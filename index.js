const Alexa = require('alexa-sdk');

const handlers = {
  LaunchRequest: function() {
    const welcome = this.t('WELCOME_MESSAGE');
    const reprompt = this.t('WELCOME_REPROMPT');

    this.emit(':ask', welcome, reprompt);
  },
  'AMAZON.HelpIntent': function () {
    const speechOutput = this.t('HELP_MESSAGE');
    const reprompt = this.t('HELP_MESSAGE');
    this.emit(':ask', speechOutput, reprompt);
  },
  'AMAZON.CancelIntent': function () {
    this.emit(':tell', this.t('STOP_MESSAGE'));
  },
  'AMAZON.StopIntent': function () {
    this.emit(':tell', this.t('STOP_MESSAGE'));
  },
  Unhandled: function () {
    this.emit(':tell', this.t('ERROR_MESSAGE'));
  },
  TellJokeIntent: function () {
    this.emit(':tell', this.t('JOKE'));
  }
};

exports.handler = (event, context, cb) => {
  const alexa = Alexa.handler(event, context);
  alexa.APP_ID = 'amzn1.ask.skill.80a2d5af-b3d1-4fb8-95da-18d6b80a38c7';
  alexa.resources = require('./messages');
  alexa.registerHandlers(handlers);

  alexa.execute();
};