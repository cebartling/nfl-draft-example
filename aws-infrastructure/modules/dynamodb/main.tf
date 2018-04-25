resource "aws_dynamodb_table" "players-table" {
  name = "${var.application}-Players"
  read_capacity = 2
  write_capacity = 2
  hash_key = "PlayerId"

  attribute {
    name = "PlayerId"
    type = "S"
  }

  attribute {
    name = "FirstName"
    type = "S"
  }

  attribute {
    name = "LastName"
    type = "S"
  }

  attribute {
    name = "Position"
    type = "S"
  }

  attribute {
    name = "College"
    type = "S"
  }

  attribute {
    name = "HeightInMeters"
    type = "N"
  }

  attribute {
    name = "WeightInKilograms"
    type = "N"
  }

//  ttl {
//    attribute_name = "TimeToExist"
//    enabled = false
//  }

  global_secondary_index {
    name = "PlayerLastNameIndex"
    hash_key = "LastName"
    write_capacity = 2
    read_capacity = 2
    projection_type = "KEYS_ONLY"
  }

  tags {
    Name = "${var.application}-Players"
    Environment = "${var.environment}"
  }
}

resource "aws_dynamodb_table" "teams-table" {
  name = "${var.application}-Teams"
  read_capacity = 2
  write_capacity = 2
  hash_key = "TeamId"

  attribute {
    name = "TeamId"
    type = "S"
  }



//  attribute {
//    name = "Position"
//    type = "S"
//  }
//
//  attribute {
//    name = "HeightInCentimeters"
//    type = "N"
//  }
//
//  attribute {
//    name = "WeightInKilograms"
//    type = "N"
//  }

//  ttl {
//    attribute_name = "TimeToExist"
//    enabled = false
//  }
//
//  global_secondary_index {
//    name = "GameTitleIndex"
//    hash_key = "GameTitle"
//    range_key = "TopScore"
//    write_capacity = 10
//    read_capacity = 10
//    projection_type = "INCLUDE"
//    non_key_attributes = [
//      "UserId"]
//  }

  tags {
    Name = "${var.application}-Teams"
    Environment = "${var.environment}"
  }
}

resource "aws_dynamodb_table" "draft-picks-table" {
  name = "${var.application}-DraftPicks"
  read_capacity = 2
  write_capacity = 2
  hash_key = "PickId"

  attribute {
    name = "PickId"
    type = "S"
  }

  // attribute {
  //   name = "Round"
  //   type = "N"
  // }

  // attribute {
  //   name = "Pick"
  //   type = "N"
  // }

  attribute {
    name = "OverallPick"
    type = "N"
  }

  // attribute {
  //   name = "Team"
  //   type = "S"
  // }

//  ttl {
//    attribute_name = "TimeToExist"
//    enabled = false
//  }
//
  global_secondary_index {
    name = "DraftPickOverallPickIndex"
    hash_key = "OverallPick"
    write_capacity = 2
    read_capacity = 2
    projection_type = "KEYS_ONLY"
  }

  tags {
    Name = "${var.application}-DraftPicks"
    Environment = "${var.environment}"
  }
}

resource "aws_dynamodb_table" "mock-drafts-table" {
  name = "${var.application}-MockDrafts"
  read_capacity = 2
  write_capacity = 2
  hash_key = "MockDraftId"

  attribute {
    name = "MockDraftId"
    type = "S"
  }

  tags {
    Name = "${var.application}-MockDrafts"
    Environment = "${var.environment}"
  }
}

resource "aws_dynamodb_table" "mock-draft-picks-table" {
  name = "${var.application}-MockDraftPicks"
  read_capacity = 2
  write_capacity = 2
  hash_key = "MockDraftPickId"

  attribute {
    name = "MockDraftPickId"
    type = "S"
  }

  attribute {
    name = "OverallPick"
    type = "N"
  }

  global_secondary_index {
    name = "MockDraftPicksOverallPickIndex"
    hash_key = "OverallPick"
    write_capacity = 2
    read_capacity = 2
    projection_type = "KEYS_ONLY"
  }

  tags {
    Name = "${var.application}-MockDraftPicks"
    Environment = "${var.environment}"
  }
}
