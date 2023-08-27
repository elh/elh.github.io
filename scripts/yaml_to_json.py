import os
import yaml
import json
import argparse

'''
Given a YAML file, convert it to JSON and write it to a target output dir.

python scripts/yaml_to_json.py -f data/projects.yaml
'''

argParser = argparse.ArgumentParser()
argParser.add_argument("-f", "--file", help="file")
argParser.add_argument("-o", "--output_dir", default="public", help="dir to write json file to")

args = argParser.parse_args()

if args.file is None:
    print("Please specify a file to convert")
    exit(1)

with open(args.file, 'r') as stream:
    try:
        data = yaml.safe_load(stream)
        file_without_extension = os.path.splitext(os.path.basename(args.file))[0]
        with open(args.output_dir + "/" + file_without_extension + ".json", 'w') as f:
            json.dump(data, f, indent=2)
    except yaml.YAMLError as exc:
        print(exc)
