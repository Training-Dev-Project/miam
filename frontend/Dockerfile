# Stage 1:  Compile and Build angular codebase

# Use official node image as the base image
FROM node:latest as build-step

# Set the working directory
WORKDIR /usr/local/app

# Add the source code to the repo app
COPY ./  /usr/local/app

# Set Yarn version
ENV YARN_VERSION 1.22.5

# run yarn command to install node dependancies
RUN yarn

# Generate the build of the application
RUN yarn build

# Stage 2

FROM nginx:latest

COPY --from=build-step /usr/local/app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80
