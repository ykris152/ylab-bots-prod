FROM python:3.9

ADD ./breakerbot_server.py .
ADD ./requirements.txt .

RUN pip install -r requirements.txt

CMD ["python", "./breakerbot_server.py"]