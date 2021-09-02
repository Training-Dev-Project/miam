# Stage 1:  Compile and Build angular codebase

# Use official node image as the base image
FROM node:latest as build-step

# Create the working directory
RUN mkdir -p /usr/local/app

# Set the working directory
WORKDIR /usr/local/app

# Add the source code to the repo app
COPY .  /usr/local/app/

# Set Yarn version
ENV YARN_VERSION 1.22.5

# run yarn command to install node dependancies
RUN yarn install

# Generate the build of the application
RUN yarn build

# Stage 2

FROM nginx:latest

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=build-step /usr/local/app/dist/static/ /usr/share/nginx/html/

COPY docker-entrypoint.sh /docker-entrypoint.sh

RUN chmod +x /docker-entrypoint.sh 

# Expose port 80
EXPOSE 80

ENTRYPOINT ["sh", "/docker-entrypoint.sh"]