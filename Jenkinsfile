pipeline {
    agent any
    tools {
        nodejs "NodeJS 22.10.0"  
    }
    environment {
        DOCKERHUB_CREDENTIALS = credentials('746a9d6f-7d6b-48fe-8d3c-9c03c59d8149')
        GITHUB_CREDENTIALS = credentials('5eb92f59-8b32-482c-a9b9-d5676b693029')
        DOCKER_IMAGE = "naufalgholib/ponari-fe"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', credentialsId: '5eb92f59-8b32-482c-a9b9-d5676b693029', url: 'https://github.com/naufalgholib/ponari.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${DOCKER_IMAGE}:${BUILD_NUMBER}")
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', '746a9d6f-7d6b-48fe-8d3c-9c03c59d8149') {
                        docker.image("${DOCKER_IMAGE}:${BUILD_NUMBER}").push()
                        docker.image("${DOCKER_IMAGE}:${BUILD_NUMBER}").push("latest")
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                sh "docker stop ponari-frontend || true"
                sh "docker rm ponari-frontend || true"
                sh "docker run -d --name ponari-frontend -p 80:3000 ${DOCKER_IMAGE}:${BUILD_NUMBER}"
                sh "sleep 10"
            }
        }

        stage('Test Access') {
            steps {
                sh "curl -I -s localhost:80"
            }
        }
    }

    post {
        always {
            sh 'docker logout'
        }
    }
}