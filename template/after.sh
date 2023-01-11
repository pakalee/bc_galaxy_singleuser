#!/usr/bin/env bash

## Wait for the Galaxy gunicorn process to be ready
timeout 30 grep -q "Listening at: $url_int" <(tail -f output.log)
