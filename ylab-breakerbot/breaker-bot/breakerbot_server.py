# import logging
# logging.basicConfig(level=logging.DEBUG)

import os
from slack_sdk import WebClient
from slack_sdk.errors import SlackApiError

import time
from datetime import datetime

import paho.mqtt.client as mqtt

class YlabBreakerBot():
  def __init__(self):
    print('initialized')

    self.sources = {}

    client = mqtt.Client()
    # client.connect("ylab-slackbot.rtsl.ee.shibaura-it.ac.jp", 1883)
    client.connect("mqtt", 1883)
    client.subscribe("slack_flags")
    client.on_message = self.on_message
    # self.send_message('ON')
    client.loop_start()
    while(True):
      for i in self.sources:
        time_delta = datetime.now() - self.sources[i][0]
        time_delta_seconds = time_delta.total_seconds()
        print(time_delta_seconds)
        if time_delta_seconds > 30 and self.sources[i][1] == 'ON':
          print('OFF')
          self.sources[i][1] = 'OFF'
          self.send_message(i + 'OFF')
        elif time_delta_seconds < 10 and self.sources[i][1] == 'OFF':
          print('ON')
          self.sources[i][1] = 'ON'
          self.send_message(i + 'ON')
      time.sleep(5)

  def on_message(self,client, userdata, message):
    # print(f"Received message '{message.payload.decode()}' on topic '{message.topic}'")
    if message.payload.decode() not in self.sources:
      self.sources[message.payload.decode()] = [datetime.now(), 'OFF']
      print('New sources from ' + str(message.payload.decode()) + ' at ' + str(datetime.now()))
    else:
      time_delta = datetime.now() - self.sources[message.payload.decode()][0]
      time_delta_seconds = time_delta.total_seconds()
      # print(time_delta_seconds)
      self.sources[message.payload.decode()][0] = datetime.now()

  def send_message(self,message):
    slack_token = os.environ['SLACK_API_TOKEN']
    client = WebClient(token=slack_token)

    try:
      response = client.chat_postMessage(
        channel='C061ER5GP1C',
        text=message
      )
    except SlackApiError as e:
      # You will get a SlackApiError if 'ok' is False
      assert e.response['error']  # str like 'invalid_auth', 'channel_not_found'

YlabBreakerBot()
