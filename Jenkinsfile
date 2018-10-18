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
                    sh 'echo Getting Dependencies'
                    //sh 'npm ci'
                }
            }
        }
        stage('Test and Build'){
            parallel {
                stage('Test') { 
                    steps {
                        script {
                            sh 'echo Test'
                            //sh 'npm test'
                        }
                    }
                }
                stage('Build') { 
                    steps {
                        script {
                            sh 'git tag | xargs git tag -d'
                            sh "git checkout ${env.BRANCH_NAME}"
                            sh 'npm version prerelease'
                            sh "GIT_ASKPASS=true && git push ${env.GIT_URL} ${env.BRANCH_NAME}"
                            sh 'git push origin --tags'
                            //sh 'npm run build'
                        }
                    }
                }
            }
        }
    }
}
