#!/usr/bin/env bash

# Set working directory to home directory
cd "${HOME}"

#
# Start Galaxy session
#

# Benchmark info
echo "TIMING - Starting job at: $(date) on ${HOSTNAME}"

# Launch the Galaxy session

galaxy_run=$HOME/opt/galaxy/run.sh

if [ ! -x "$galaxy_run" ]
then
  echo "Galaxy install NOT found! Contact admins."
else
  module load python/3.9.7
  galaxy_run
  echo "Connect to ${url_ext} in your browser."
fi

echo
date
echo "Galaxy session $session has ended"
