// Jenkinsfile
pipeline {
  /* Run everything in a Docker-in-Docker Linux container */
  agent {
    docker {
      image 'docker:24.0.5-dind'
      args  '--privileged -v /var/run/docker.sock:/var/run/docker.sock'
    }
  }

  environment {
    // These credentials you created in Jenkins → Credentials → Global
    DOCKERHUB = credentials('dockerhub-creds')

    FRONTEND_IMAGE = 'sandhya454/taxtrack-frontend:latest'
    BACKEND_IMAGE  = 'sandhya454/taxtrack-backend:latest'
  }

  stages {
    stage('Start Build') {
      steps {
        sh 'echo "CI/CD build started at: $(date)"'
      }
    }

    stage('Checkout') {
      steps {
        git branch: 'jenkins-setup',
            url:    'https://github.com/smr29/Tax-Track-DevOps.git'
      }
    }

    stage('Build Frontend') {
      steps {
        dir('frontend') {
          sh "docker build -t ${FRONTEND_IMAGE} ."
        }
      }
    }

    stage('Build Backend') {
      steps {
        dir('backend') {
          sh "docker build -t ${BACKEND_IMAGE} ."
        }
      }
    }

    stage('Docker Login') {
      steps {
        sh "echo ${DOCKERHUB_PSW} | docker login -u ${DOCKERHUB_USR} --password-stdin"
      }
    }

    stage('Push Images') {
      steps {
        sh "docker push ${FRONTEND_IMAGE}"
        sh "docker push ${BACKEND_IMAGE}"
      }
    }
  }

  post {
    success {
      echo '✅ Build and push completed!'
    }
    failure {
      echo '❌ Build failed — check the logs.'
    }
  }
}
