# Use Node.js for the build stage
FROM node:16 AS build-stage

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
ARG NUXT_API_URL

# Set environment variable
ENV NUXT_API_URL=${NUXT_API_URL}

# Build the application
#RUN npm run generate
RUN npm run build

# Use Nginx to serve the application
FROM nginx:alpine

# Copy built files from the previous stage
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Expose the port the app runs on
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
