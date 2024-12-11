""" TIGIS Flask app for demonstration and learning
    To run on XRDP
    geos-flask --app myflaskapp run --debug"""
import json
import sys
import os
import logging
from pathlib import Path
import cgitb
from flask import Flask
from flask import render_template
import cx_Oracle


app = Flask(__name__)

def get_password(passfile='tigis/Rwebmap/database_password'):
    """Reads a password from a file in stored in the home directory of the user.
    Args:
        passfile: A file containing the password in the users home directory
    Returns:
        passw: password in plain text
    Raises:
        FileNotFoundError: if the password file does not exist
    """
    home = Path.home()
    passfile = os.path.join(home, passfile)
    try:
        with open(passfile) as file:
            passw = file.readline().strip()
        return passw
    except FileNotFoundError as detail:
        logging.error(f'Password file not found: {detail}')
        sys.exit()

@app.route('/')
def index():
    """Prelim page - EDIT LATER"""
    message = """Hello world. This is a flask app.
            Explore the other pages by appending the various @app.route arguments to this URL."""
    return message

@app.route('/trees')
def retreive():
    """ Display Oracle table in an HTML table
    Args:
        password: gets password and reads from passfile
        connect: connect to specified Oracle database
        execute: SQL query command
    Returns:
        table: data selected from the Oracle database
    Raises:
        ADD AN ERROR
    """
    cgitb.enable()      #not sure if need or not
    password = get_password()

    connect = cx_Oracle.connect(dsn="geoslearn", user="s2762697",password=password)
    with connect.cursor() as cur:
        cur.execute("select * from s2750126.trees")   #sql query
        data = cur.fetchall()
        #present data
        column_headings = tuple() #need to fix
    title = "Roseburn Tree data - from an Oracle Database" ##DONT HAVE COLUMN HEADINGS
    return render_template('table1.html', table=data, title=title)
#except FileNotFoundError as detail:
#    logging.error(f'Connection to Database is not possible: {detail}')
#    sys.exit()

@app.route('/markers')
def map():
    """ Display tree markers on a map, using coordinates from the oracble database
    Args:
        password: gets password and reads from passfile
        connect: connect to specified Oracle database
        execute: SQL query command
    Returns:
        markers: markers using the coordinates given in the oracle database
    Raises:
        ADD AN ERROR
    """
    password = get_password()
    connect = cx_Oracle.connect(dsn="geoslearn", user="s2762697",password=password)
    with connect.cursor() as cur:
        cur.execute("select * from s2750126.trees")     #sql query
        data = cur.fetchall()
        for i in range(0,34):
            print(data[i][2])       #remove later
    with open('/home/s2762697/tigis/Rwebmap/static/boundary.json') as file:
        geojson_data = json.load(file)
    #geojson_data=json.dumps(geojson_data)
    return render_template('leafletmarkers.html',markers=data,geojson_data=json.dumps(geojson_data))
    #return render_template('leafletmarkers_copy2.html',markers=data)
#except FileNotFoundError as detail:
#    logging.error(f'Connection to Database is not possible: {detail}')
#    sys.exit()


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=55403 , debug=True)
