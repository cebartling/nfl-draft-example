require 'json'
require 'uuid'


def write_json_file(output, filename)
    File.open(filename, 'w') do |f|
        f.write(JSON.pretty_generate(output))
    end
end


File.open('2018-draft-order.txt') do |f|
    count = 1
    batch_count = 1
    output_file_index = 1
    picks = []

    f.each_line do |line|
        puts "Parsing line #{count}..."
        parts = line.split(/,/)
        if parts && parts.length == 4
            draft_round = parts[0]
            pick_in_round = parts[1]
            overall_pick = parts[2]
            team = parts[3]
            puts "Round: #{draft_round}, Pick in round: #{pick_in_round}, Overall pick: #{overall_pick}, Team: #{team}"
            pick = {
                'PutRequest': {
                    'Item': {
                        "PickId": {"S": "#{UUID.new.generate}"},
                        "Round": {"S": "#{draft_round}"},
                        "Pick": {"S": "#{pick_in_round}"},
                        "OverallPick": {"S": "#{overall_pick}"},
                        "Team": {"S": "#{team.strip}"}
                    }
                }
            }
            picks << pick

            if batch_count > 20
                output = {'nfl-draft-machine-Picks': picks}
                filename = "picks-#{output_file_index}.json"
                write_json_file(output, filename)
                batch_count = 1
                output_file_index += 1
                picks = []
            else
                batch_count += 1
            end
            count += 1
        end
    end

    if picks.length > 0
        output = {'nfl-draft-machine-Picks': picks}
        filename = "picks-#{output_file_index}.json"
        write_json_file(output, filename)
    end
end
