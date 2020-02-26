FROM node 
WORKDIR /app
COPY . .
EXPOSE 5000
RUN npm install
RUN REACT_APP_URL=http://localhost npm run build
RUN npm install -g serve

CMD ["serve", "-s", "build"]

# CMD ["npm", "start"]

