# Example Cockpit CMS/React Headless website

An example project that provides a simple headless experience by combining Cockpit CMS and ReactJS.

Example site can be accessed on [http://pauloamgomes.github.io/cockpit-react-example](http://pauloamgomes.github.io/cockpit-react-example)

## Installation

First confirm that you have docker and docker-sync installed on your system.

1. Clone this repo or download it as a zip file.
2. Extract it
3. Run the Cockpit Example install script inside cockpit folder:
    ```
    $ cd cockpit-react-example/cockpit
    $ ./install.sh
    ```
    it shall initialize the Cockpit CMS with example data
4. Install React dependencies
    ```
    $ cd cockpit-react-example/react
    $ yarn install
    ```

## Usage

The example consists on a Cockpit CMS installation with example data and a ReactJS application that will consume Cockpit CMS data.
In way to use it just run the following commands.

1.  Start the Cockpit CMS docker instance
    ```
    $ cd cockpit-react-example/cockpit
    $ ./start.sh
    ```
2. Start the React App
    ```
    $ cd cockpit-react-example/react
    $ yarn start
    ```
3. Open Cockpit CMS admin interface at http://cockpit-example.docker.localhost/
4. Open the example React App at http://localhost:3000/


The url http://cockpit-example.docker.localhost/ should be accessible form your browser as the docker-compose uses Traefik, however if not, add it to your /etc/hosts file:

    ```
    $ sudo echo "127.0.0.1 cockpit-example.docker.localhost" >> /etc/hosts
    ```

## Copyright and license

Copyright 2018 pauloamgomes under the MIT license.


