import os

DEBUG = False
PUBLIC = True
SQLALCHEMY_TRACK_MODIFICATIONS = False
# SQLALCHEMY_DATABASE_URI = 'mysql://root:123456@191.232.51.50:3306/UNIGRASAS' # MySQL
# SQLALCHEMY_DATABASE_URI = 'postgresql://root:123456@191.232.51.50:5432/unigrasas' # PostgreSQL antigua VM
SQLALCHEMY_DATABASE_URI = 'postgresql://root:123456@20.124.212.151:5432/unigrasas'
# SQLALCHEMY_POOL_TIMEOUT = 3600
SQLALCHEMY_POOL_RECYCLE = 400
