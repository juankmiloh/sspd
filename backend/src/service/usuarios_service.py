from ..repository import UsuariosRepository
from ..util.web_util import add_wrapper

class UsuariosService:

    def login_usuario(self, usuarios_repository: UsuariosRepository, usuario):
        response = {}
        data = usuarios_repository.autenticar_usuario(usuario)
        for result in data:
            response = { 'code': 20000, 'data': { 'token': result[0] } }
        return response

    def info_usuario(self, usuarios_repository: UsuariosRepository, token):
        responseGetInfo = {}
        data = usuarios_repository.getData_usuario(token)
        for result in data:
            responseGetInfo = {
                "code": 20000,
                "data": {
                    "roles": [result[0]],
                    "introduction": result[1],
                    "name": result[2],
                    "usuario": result[3],
                    "idusuario": result[4],
                    "privilegio": result[5],
                    "avatar": result[6]
                }
            }
        return responseGetInfo

    def logout(self, usuarios_repository: UsuariosRepository):
        response = {
            "code": 20000,
            "data": 'success'
        }
        return response

    def get_usuarios(self, usuarios_repository: UsuariosRepository):
        usuarios = []
        data = usuarios_repository.get_usuarios_bd()
        for result in data:
            usuarios.append(
                {
                    'idusuario': result[0],
                    'nombre': result[1],
                    'apellido': result[2],
                    'rol': result[6],
                    'password': result[8]
                }
            )
        return usuarios
    
    def get_lista_usuarios(self, usuarios_repository: UsuariosRepository):
        usuarios = []
        data = usuarios_repository.get_lista_usuarios_bd()
        for result in data:
            usuarios.append(
                {
                    'privilegio': result[0],
                    'idusuario': result[1],
                    'nombre': result[2],
                    'apellido': str(result[3]),
                    'nickname': str(result[5]),
                    'descripcion': result[6],
                    'rol': result[7],
                    'avatar': result[8],
                    'contrasena': '',
                    'token': result[10],
                    'identificacion': result[11],
                    'empresa': result[12],
                    'telefono': result[13],
                    'email': result[14],
                    'genero': result[15]
                }
            )
        return usuarios

    def get_rol(self, usuarios_repository: UsuariosRepository):
        roles = []
        data = usuarios_repository.get_rol_bd()
        for result in data:
            roles.append(
                {
                    'idrol': result[0],
                    'nombre': result[1].capitalize()
                }
            )
        return roles
    
    def get_nicknames(self, usuarios_repository: UsuariosRepository):
        response = {}
        nicknames = []
        users = []
        data = usuarios_repository.get_nicknames_bd()
        for result in data:
            users.append({"nombre": result[0], "apellido": result[1], "nickname": result[2]})
            nicknames.append(result[2])
        response['users'] = users
        response['nicknames'] = nicknames
        return response
    
    def create_user_insert(self, usuarios_repository: UsuariosRepository, usuario):
        usuarios_repository.usuarios_create_bd(usuario)
        return add_wrapper(['Usuario creado con exito!'])

    def usuario_update(self, usuarios_repository: UsuariosRepository, usuario):
        usuarios_repository.usuario_update_bd(usuario)
        return add_wrapper(['Usuario editado con éxito!'])

    def usuario_delete(self, usuarios_repository: UsuariosRepository, idusuario):
        usuarios_repository.usuario_delete_bd(idusuario)
        return add_wrapper(['Usuario borrado con éxito!'])
