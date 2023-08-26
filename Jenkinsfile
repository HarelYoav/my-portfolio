pipeline {
    agent any
    options {
        skipStagesAfterUnstable()
    }
    stages {
        //  stage('Clone') { 

        //     steps {
        //         git branch: 'main', url: "https://github.com/HarelYoav/portfolio-project-docker-compose.git"
        //         echo "empty"
        //     }
            
            
        // }

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