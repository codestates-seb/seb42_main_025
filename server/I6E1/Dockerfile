FROM adoptopenjdk/openjdk11
CMD ["./mvnw", "clean", "package"]
ARG JAR_FILE_PATH=target/*.jar
COPY  build/libs/*.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]