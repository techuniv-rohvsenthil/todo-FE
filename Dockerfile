FROM node 
WORKDIR /app
COPY . .
EXPOSE 80
RUN npm install
ARG REACT_APP_URL
ENV REACT_APP_URL $REACT_APP_URL
RUN npm run build
RUN npm install -g serve

CMD ["serve", "-l", "80", "-s", "build"]

# CMD ["npm", "start"]

