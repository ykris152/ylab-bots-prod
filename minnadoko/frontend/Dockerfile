FROM node:16.18

ENV PORT=5173

COPY . /frontend
WORKDIR /frontend
RUN npm install
# RUN npm run build
EXPOSE ${PORT}
CMD ["npm", "run", "dev"]