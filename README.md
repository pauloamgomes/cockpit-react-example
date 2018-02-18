# Example Cockpit CMS/React Headless website

An example project that provides a simple headless experience by combining Cockpit CMS and ReactJS.


## Installation

First confirm that you have docker and docker-sync installed on your system.

1. Clone this repo or download it as a zip file.
2. Extract it to a folder
3. Run the install script inside cockpit folder (```cd cockpit; ./install.sh```), it shall initialize the Cockpit CMS with example data


## Usage

The example consists on two different apps

The example consists on a Cockpit CMS installation with example data and a ReactJS application that will consume Cockpit CMS data.
In way to use it just run the following commands.

1.  Start the Cockpit CMS docker instance
    ```
    $ cd cockpit
    $ ./start.sh
    ```
2. Start the React App
    ```
    $ cd react
    $ yarn install
    $ yarn start
    ```
3. Open Cockpit CMS admin interface at http://cockpit-example.docker.localhost/
4. Open the example React App at http://localhost:3000/


## Copyright and license

Copyright 2018 pauloamgomes under the MIT license.


