variable "environment" {
  default = "dev"
  description = "Identifies the environment tag used for all resources in this solution."
}

variable "application" {
  default = "nfl-draft-machine"
  description = "Identifies the application tag used for all resources in this solution."
}

variable "provisioner" {
  description = "Identifies the provisioner tag useed for all resources in this solution."
}

variable "aws_region" {
  description = "The AWS Region to use for provisioning all resources in this solution."
}