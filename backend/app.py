#!/usr/bin/env python
import os
from flask_script import Manager
from src import create_app

app = create_app()
manager = Manager(app)

@manager.command
def test():
    from subprocess import call

    os.environ['FLASK_CONFIG'] = 'testing'
    call(['nosetests', '-v',
          '--with-coverage', '--cover-package=app', '--cover-branches',
          '--cover-erase', '--cover-html', '--cover-html-dir=cover'])

if __name__ == '__main__':
    if app.config.get("ENV") == 'development': # Cambiar dependiendo el servidor donde se despliegue la aplicacion (development || production)
        app.run()
    else:
        manager.run()