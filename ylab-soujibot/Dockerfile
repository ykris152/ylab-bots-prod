FROM python:3.9

ADD ./scripts/toubanlist.csv .
ADD ./scripts/ylab-soujibot.py .
ADD ./requirements.txt .

RUN pip install -r requirements.txt

CMD ["python", "./ylab-soujibot.py"]