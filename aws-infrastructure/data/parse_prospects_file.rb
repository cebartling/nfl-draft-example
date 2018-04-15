require 'json'
require 'uuid'


def write_json_file(output, filename)
    File.open(filename, 'w') do |f|
        f.write(JSON.pretty_generate(output))
    end
end

def convert_weight_to_kilograms(weight)
    weight.to_i * 0.45359237
end

def convert_height_to_meters(count, height) 
    matches = height.match(/^(\d)'(\d+)"$/)
    # puts matches.inspect
    if matches.nil?
        raise "Height regex did not match the string on line #{count}. height: [#{height}]"
    end
    feet, inches = matches.captures 
    (feet.to_i * 0.3048) + (inches.to_i * 0.0254)
end


File.open('2018_nfl_draft_prospects.txt') do |f|
    count = 1
    batch_count = 1
    output_file_index = 1
    players = []
    
    f.each_line do |line|
        puts "Parsing line #{count}..."
        parts = line.split(/\t/)
        if parts && parts.length >= 7
            name_parts = parts[2].split
            first_name = name_parts[0]
            last_name = name_parts[1]
            college = parts[3]
            position = parts[4]
            height = parts[5]
            weight = parts[6]
            # puts "First name: #{first_name}, Last name: #{last_name}, College: #{college}, Position: #{position}, Height: #{height}, Weight: #{weight}"
            player = {
            'PutRequest': {
                'Item': {
                "PlayerId": {"S": "#{UUID.new.generate}"},
                "HeightInMeters": {"S": "#{sprintf('%.2f', convert_height_to_meters(count, height))}" },
                "WeightInKilograms": {"S": "#{sprintf('%.2f', convert_weight_to_kilograms(weight))}" },
                "Position": {"S": "#{position}"},
                "FirstName": {"S": "#{first_name}"},
                "LastName": {"S": "#{last_name}"},
                "College": {"S": "#{college}"}
                }
            }
            }  
            players << player
            
            if batch_count > 20
                output = {'nfl-draft-machine-Players': players}
                filename = "players-#{output_file_index}.json"
                write_json_file(output, filename)
                batch_count = 1
                output_file_index += 1
                players = []
            else
                batch_count += 1    
            end
            count += 1
        end
    end

    if players.length > 0
        output = {'nfl-draft-machine-Players': players}
        filename = "players-#{output_file_index}.json"
        write_json_file(output, filename)
    end
end
