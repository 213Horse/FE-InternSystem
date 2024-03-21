#Using an offical Node.js runtime as the base image
FROM node:18.2.0

# Set the working directory in the container
WORKDIR /usr/src/app

#Copy package.json and package-json to the working directory
COPY package*.json ./

#Install dependencies
RUN npm install --force

# Copy rest of the application code to the working directory
COPY . .

# Expose the port on which on Node.js app runs
EXPOSE 3000

# Command to run your Node.js application
CMD ["npm", "run", "dev"]