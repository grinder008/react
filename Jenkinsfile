pipeline{
    agent any

    stages{
        stage("Checking"){
            steps{
                git 'https://github.com/grinder008/react.git'
            }
            
        }
        stage('SonarQube analysis') {

           environment{
           scannerHome = tool 'sonar-scanner'
           }
           steps {
           withSonarQubeEnv('sonarqube-server') {
                sh "${scannerHome}/bin/sonar-scanner"
           }
            }
            }

        
    }
    
}