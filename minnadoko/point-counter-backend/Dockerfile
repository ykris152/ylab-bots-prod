FROM node:16.18

ENV PORT=5173

COPY . /point-counter-backend
WORKDIR /point-counter-backend
RUN npm install
# RUN npm run build
# EXPOSE ${PORT}
CMD ["npm", "run", "main"]