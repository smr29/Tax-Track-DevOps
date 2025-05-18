pipeline {
  agent any

  environment {
    DOCKER_CREDENTIALS = credentials('dockerhub-creds')  // Jenkins Credentials ID
    FRONTEND_IMAGE = 'sandhya454/taxtrack-frontend:latest'
    BACKEND_IMAGE  = 'sandhya454/taxtrack-backend:latest'
  }

  stages {
    stage('Checkout Code') {
      steps {
        git 'https://github.com/smr29/Tax-Track-DevOps.git'
      }
    }

    stage('Build Frontend Docker Image') {
      steps {
        dir('frontend') {
          sh "docker build -t ${FRONTEND_IMAGE} ."
        }
      }
    }

    stage('Build Backend Docker Image') {
      steps {
        dir('backend') {
          sh "docker build -t ${BACKEND_IMAGE} ."
        }
      }
    }

    stage('Login to DockerHub') {
      steps {
        sh "echo ${DOCKER_CREDENTIALS_PSW} | docker login -u ${DOCKER_CREDENTIALS_USR} --password-stdin"
      }
    }

    stage('Push Docker Images') {
      steps {
        sh "docker push ${FRONTEND_IMAGE}"
        sh "docker push ${BACKEND_IMAGE}"
      }
    }
  }
}
