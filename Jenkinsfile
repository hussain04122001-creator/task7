pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Unit Testing') {
            steps {
                sh 'npm test'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t task7-app:latest .'
            }
        }

        stage('Trivy Filesystem Scan') {
            steps {
                sh 'trivy fs --severity HIGH,CRITICAL .'
            }
        }

        stage('Trivy Image Scan') {
            steps {
                sh 'trivy image --severity HIGH,CRITICAL task7-app:latest'
            }
        }
    }
}
