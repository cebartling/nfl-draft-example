terraform {
  required_version = ">= 0.11.1"
}

provider "aws" {
  region = "${var.aws_region}"
}

module "dynamodb" {
  source = "./modules/dynamodb"
  application = "${var.application}"
  aws_region = "${var.aws_region}"
  environment = "${var.environment}"
  provisioner = "${var.provisioner}"
}
