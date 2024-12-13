pipeline {
    agent any
    tools {
        nodejs "node-22-lts"  
    }
    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-jenkins')
        GITHUB_CREDENTIALS = credentials('github-jenkins')
        DOCKER_IMAGE = "naufalgholib/ponari-fe"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', credentialsId: 'github-jenkins', url: 'https://github.com/naufalgholib/ponari.git'
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
                withCredentials([file(credentialsId: 'ssl-website', variable: 'SSL_CERT')]) {
                    sh 'cp $SSL_CERT certs/fullchain.pem'
                }
                withCredentials([file(credentialsId: 'ssl-website', variable: 'SSL_KEY')]) {
                    sh 'cp $SSL_KEY certs/privkey.pem'
                }
                script {
                    docker.build("${DOCKER_IMAGE}:${BUILD_NUMBER}")
                }
            }
        }
        
        stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', 'dockerhub-jenkins') {
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
                sh """
                    docker run -d --name ponari-frontend \
                        -p 80:80 \
                        -p 443:443 \
                        ${DOCKER_IMAGE}:${BUILD_NUMBER}
                """
                sh "sleep 10"
            }
        }

        stage('Test Access') {
            steps {
                sh "curl -Ik https://localhost -m 10"
            }
        }
    }

    post {
        always {
            sh 'docker logout'
        }
    }
}