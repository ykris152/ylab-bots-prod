# import logging
# logging.basicConfig(level=logging.DEBUG)

import os
from slack_sdk import WebClient
from slack_sdk.errors import SlackApiError

import time
from datetime import datetime

class YlabSoujiSlackbot():
    def __init__(self):
        self.data = [[],[],[],[],[],[],[]]
        self.user_data = []
        self.read_csv()
        self.users_of_the_channel()
        # self.find_user()
        # print(self.send_message('test'))
        while True:
            if datetime.now().weekday() == 0:
                if datetime.now().hour == 2 and datetime.now().minute == 0 and datetime.now().second == 00:
                    counter = self.compare_time()
                    reminder_message = f"今週の掃除当番：\n{self.data[3][counter]} : <@{self.find_user(self.data[4][counter])}>\n{self.data[5][counter]} : <@{self.find_user(self.data[6][counter])}>\n"
                    self.send_message(reminder_message)
                print('Today', str(datetime.now()))
            else :
                print('This is not Tuesday', str(datetime.now().weekday()))
            time.sleep(1) 
        
    def compare_time(self):
        for i in range(len(self.data[0])-1):
            now = datetime.now()
            data = datetime(
                int(self.data[0][i]),
                int(self.data[1][i]),
                int(self.data[2][i])
                )
            if data > now:
                print(data, ' > ',now)
                return i - 1

    def send_message(self,message):
        slack_token = os.environ['SLACK_API_TOKEN']
        client = WebClient(token=slack_token)

        try:
            response = client.chat_postMessage(
                channel='C061JENDE69',
                text=message
            )
            print(response)
        except SlackApiError as e:
            # You will get a SlackApiError if 'ok' is False
            assert e.response['error']  # str like 'invalid_auth', 'channel_not_found'

    def read_csv(self):
        myFile = open('./toubanlist.csv')
        # print("The content of CSV file is:")
        text = myFile.readline()
        while text != "":
            csv_data = text.strip().split(',')
            
            # print('Year   : ' + (data[0]))
            # print('Month  : ' + (data[1]))
            # print('Day    : ' + (data[2]))
            # print('Souji1 : ' + (data[3]))
            # print('Souji2 : ' + (data[4]))

            self.data[0].append(csv_data[0])
            self.data[1].append(csv_data[1])
            self.data[2].append(csv_data[2])
            self.data[3].append(csv_data[3])
            self.data[4].append(csv_data[4])
            self.data[5].append(csv_data[5])
            self.data[6].append(csv_data[6])

            text = myFile.readline()
        myFile.close()

    def users_of_the_channel(self):
        slack_token = os.environ['SLACK_API_TOKEN']
        client = WebClient(token=slack_token)
        self.user_data = client.api_call('users.list')

    def find_user(self,gakusekiban):
        for user in self.user_data['members']:
            # print(user['real_name'] + ' : ' + user['name'])
            if gakusekiban == user['name']:
                # print(user['real_name'] + ':' + user['id'])
                return user['id']

YlabSoujiSlackbot()