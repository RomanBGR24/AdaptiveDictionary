pipeline {
    agent { docker { image 'python' } }
    //agent any
    stages {
        stage('build') {
            steps {
                sh 'python --version'
               //echo 'my first build'
            }
        }
        /*stage('some environments'){
            steps{
                echo "Running on ${NODE_NAME} my build number is ${BUILD_TAG}"
            }
        }*/
        stage('test'){
            steps{
                echo 'success'
            }
        }
    }
}