FROM openjdk:latest as build-step
ARG JAR_FILE=build/libs/backend-1.0.1.jar
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java","-jar","/app.jar"]