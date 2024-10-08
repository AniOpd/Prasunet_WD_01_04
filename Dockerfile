# Use the official Node.js 14 image as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app's source code to the working directory
COPY . .

ENV VITE_BASE_URL=https://king-prawn-app-puei4.ondigitalocean.app/

# Build the app
RUN npm run build

# Expose the port that the app will run on
EXPOSE 3000

# Set the command to run the app
CMD [ "npm", "run", "dev" ]