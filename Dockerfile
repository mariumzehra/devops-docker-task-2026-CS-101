# Use an official lightweight Node.js image as the base
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first (for better layer caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Tell Docker which port the app listens on
EXPOSE 3000

# Command to start the application when the container runs
CMD ["npm", "start"]
