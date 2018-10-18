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
                    sh 'npm i -g npm'
                    sh 'npm ci'
                }
            }
        }
        stage('Test and Build'){
            parallel {
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
    }
}
