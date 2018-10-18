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
                    sh 'npm ci'
                }
            }
        }
        stage('Test and Build'){
            parallel {
                stage('Test') { 
                    steps {
                        script {
                            sh 'echo Test'
                            sh 'npm test'
                        }
                    }
                }
                stage('Build') { 
                    steps {
                        script {
                            sh 'npm run build'
                            try {
                                withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId: 'gitbucket', usernameVariable: 'GIT_USERNAME', passwordVariable: 'GIT_PASSWORD']]) {
                                    sh("git config credential.username ${env.GIT_USERNAME}")
                                    sh("git config credential.helper '!f() { echo password=\$GIT_PASSWORD; }; f'")
                                    sh 'GIT_ASKPASS=true'
                                    sh "git checkout ${env.BRANCH_NAME}"
                                    sh "git pull origin ${env.BRANCH_NAME}"
                                    sh 'git tag | xargs git tag -d'
                                    sh 'export NPM_VERSION=$(npm version prerelease)'
                                    sh "git commit --amend -m \"[skip ci] ${NPM_VERSION}\""
                                    sh "git push ${env.GIT_URL} ${env.BRANCH_NAME}"
                                    sh("git push origin --tags")    
                                }
                            } finally {
                                sh("git config --unset credential.username")
                                sh("git config --unset credential.helper")
                            }                            
                        }
                    }
                }
            }
        }
    }
}
