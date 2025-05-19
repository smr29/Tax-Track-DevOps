pipeline {
    agent any

    environment {
        DOCKER_CREDENTIALS = credentials('dockerhub-creds') // Jenkins credentials ID
        FRONTEND_IMAGE = 'sandhya454/taxtrack-frontend:latest'
        BACKEND_IMAGE  = 'sandhya454/taxtrack-backend:latest'
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'jenkins-setup', url: 'https://github.com/smr29/Tax-Track-DevOps.git'
            }
        }

        stage('Build Frontend Docker Image') {
            steps {
                dir('frontend') {
                    bat "docker build -t %FRONTEND_IMAGE% ."
                }
            }
        }

       stage('Build Backend Docker Image') {
  steps {
    dir('backend') {
      bat "docker build -t ${BACKEND_IMAGE} ."
    }
  }
}


        stage('Login to DockerHub') {
            steps {
                bat "echo %DOCKER_CREDENTIALS_PSW% | docker login -u %DOCKER_CREDENTIALS_USR% --password-stdin"
            }
        }

        stage('Push Docker Images') {
            steps {
                bat "docker push %FRONTEND_IMAGE%"
                bat "docker push %BACKEND_IMAGE%"
            }
        }
    }

    post {
        success {
            echo 'Images built and pushed successfully!'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}
