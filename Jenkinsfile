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

        stage('OWASP Dependency Check') {
            steps {
                dependencyCheck(
                    additionalArguments: '--scan . --format HTML --format XML --out dependency-check-report',
                    odcInstallation: 'DP-Check'
                )
                dependencyCheckPublisher(
                    pattern: 'dependency-check-report/dependency-check-report.xml'
                )
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

    post {
        always {
            echo 'Task 7 DevSecOps Pipeline Completed'
        }
    }
}
