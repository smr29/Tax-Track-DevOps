pipeline {
    agent any

    environment {
        DOCKER_CREDENTIALS = credentials('dockerhub-creds')
        FRONTEND_IMAGE = 'shreyamrao/dev-frontend:latest'
        BACKEND_IMAGE  = 'shreyamrao/dev-backend:latest'
        KUBECONFIG = 'C:\\kube\\config' // <=== Make sure this path exists
    }

    stages {

        stage('🚀 Build Frontend Image') {
            steps {
                dir('frontend') {
                    echo 'Building frontend Docker image...'
                    bat "docker build -t %FRONTEND_IMAGE% ."
                }
            }
        }

        stage('🚀 Build Backend Image') {
            steps {
                dir('backend') {
                    echo 'Backend image, you’re next!'
                    bat "docker build -t %BACKEND_IMAGE% ."
                }
            }
        }

        stage('📤 Push Images') {
            steps {
                echo 'Pushing images to DockerHub — bon voyage!'
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKERHUB_USER', passwordVariable: 'DOCKERHUB_PASS')]) {
                   bat """
                        docker login -u %DOCKERHUB_USER% -p %DOCKERHUB_PASS%
                        docker push %FRONTEND_IMAGE%
                        docker push %BACKEND_IMAGE%
                    """
                }
            }
        }

        stage('⚙ Ensure Minikube is Running') {
            steps {
                echo 'Checking Minikube status and starting if needed...'
                bat '''
                minikube status >nul 2>&1
                IF ERRORLEVEL 1 (
                    echo Starting Minikube...
                    minikube start --driver=docker --force
                ) ELSE (
                    echo Minikube is already running.
                )
                '''
            }
        }

        stage('🎉 Deploy to Kubernetes') {
            steps {
                echo 'Applying Kubernetes manifests with 3 replicas — scaling up!'
                bat '''
                echo Using kubeconfig: %KUBECONFIG%
                kubectl apply -f k8s --kubeconfig=%KUBECONFIG% --validate=false
                '''
            }
        }

        stage('🔍 Verify Pods') {
            steps {
                echo 'Let’s see those pods running...'
                bat 'kubectl get pods --kubeconfig=%KUBECONFIG%'
            }
        }
    }

    post {
        success {
            echo '🎊 Woohoo! Everything worked perfectly. Your app is live with 3 pods each!'
        }
        failure {
            echo '💥 Uh-oh, something went wrong. Time to debug!'
        }
    }
}
