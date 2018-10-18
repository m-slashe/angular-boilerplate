pipeline {
    agent any
    triggers {
        pollSCM('* * * * *')
    }
    tools {nodejs 'node'}
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
