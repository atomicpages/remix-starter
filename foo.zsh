#!/usr/bin/env zsh

newpass() {
  local LEN="$1"
  echo $LEN
  # LC_ALL=C tr -dc '[:alnum:]' < /dev/urandom | head -c${1:-"$LEN"}
}

newpass
