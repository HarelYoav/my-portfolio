pipeline {
    agent any
    options {
        skipStagesAfterUnstable()
    }
    stages {
        stage('Build') { 
            steps { 
                script{
                     
                 app = docker.build("yoavdocker89" + "/my-portfolio", ".")
                }
            }
        }
        stage('Deploy') {
            steps {
                script{
                        docker.withRegistry('', 'docker') {
                        app.push("${env.BUILD_NUMBER}")
                        app.push("latest")
                    }
                }
            }

        }
    }
}