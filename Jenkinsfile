pipeline {
    agent any
    triggers {
        pollSCM('* * * * *')
    }
    stages {
        stage('Getting Dependencies'){
            steps {
                script {
                    sh 'npm install'
                }
            }
        }
        stage('Test') { 
            steps {
                script {
                    sh 'npm test'
                }
            }
        }
        stage('Build') { 
            steps {
                script {
                    sh 'npm run build'
                }
            }
        }
    }
}
