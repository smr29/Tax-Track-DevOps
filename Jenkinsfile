pipeline {
  agent any

  environment {
    DOCKER_CREDENTIALS = credentials('dockerhub-creds') // Replace with your Jenkins creds ID
    FRONTEND_IMAGE = 'your-dockerhub-user/frontend:latest' // Replace this
    BACKEND_IMAGE = 'your-dockerhub-user/backend:latest'   // Replace this
  }

  stages {
    stage('Checkout Code') {
      steps {
        git 'https://github.com/your-user/your-repo.git' // Replace this
      }
    }

    stage('Build Frontend Image') {
      steps {
        dir('frontend') {
          sh "docker build -t $FRONTEND_IMAGE ."
        }
      }
    }

    stage('Build Backend Image') {
      steps {
        dir('backend') {
          sh "docker build -t $BACKEND_IMAGE ."
        }
      }
    }

    stage('Push Images to DockerHub') {
      steps {
        sh "echo $DOCKER_CREDENTIALS_PSW | docker login -u $DOCKER_CREDENTIALS_USR --password-stdin"
        sh "docker push $FRONTEND_IMAGE"
        sh "docker push $BACKEND_IMAGE"
      }
    }

    stage('Deploy to Kubernetes') {
      steps {
        sh 'kubectl apply -f k8s/'
      }
    }
  }
}
