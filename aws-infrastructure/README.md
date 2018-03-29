# AWS Infrastructure for NFL Draft Machine

## Prerequisites

Ensure that you have the AWS CLI installed and have logged in successfully.

## Provisioning resources in AWS 

1. Change directory to `aws-infrastructure`. All subsequent commands will be executed from this directory.
1. Run `terraform init` to install AWS Terraform provider.
1. From this `aws` directory, run `terraform apply`. This command will create the AWS infrastructure
that is needed for this example. 

## Load data into DynamoDB

1. Change directory to `aws-infrastructure`. All subsequent commands will be executed from this directory.
1. Run `aws dynamodb batch-write-item --request-items file://data/Teams.json` to load the NFL teams.
1. Run `aws dynamodb batch-write-item --request-items file://data/Players.json` to load the players.
