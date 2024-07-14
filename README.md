# Description
Tools for used in Ylab

# Tools included in this repo
* BreakerBot : Send slack notifications when the breaker is turned on or off in the lab.
* SoujiBot : Send slack reminder every week for the person in charge of cleaning up the lab.
* Minnadoko : WebApp to notify member's location.

# Running this app
1. Install [docker](https://docs.docker.com/engine/install/) in any environment.
2. git clone this repo ```git clone https://github.com/ykris152/ylab-bots.git```
3. compose up the apps ```docker compose up -d```

# BreakerBot
Send slack notifications when the breaker is turned on or off in the lab.

![BreakerBot Architecture](assets/images/BreakerBot.svg "BreakerBot")

# SoujiBot
Send slack notifications to the person in charge of cleaning up the lab.

![SoujiBot Architecture](assets/images/SoujiBot.svg "SoujiBot")